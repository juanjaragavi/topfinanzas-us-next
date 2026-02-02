import { NextResponse } from "next/server";
import { apiLogger } from "@/lib/logger";

interface ActiveCampaignContact {
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  fieldValues?: Array<{
    field: string;
    value: string;
  }>;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    apiLogger.debug("ActiveCampaign API request received", {
      hasEmail: !!body.email,
      hasFirstName: !!body.firstName,
      hasLastName: !!body.lastName,
      hasPhone: !!body.phone,
    });

    // Validate required fields
    if (!body.email) {
      apiLogger.warn("ActiveCampaign validation failed: Missing email");
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Get ActiveCampaign credentials
    const apiKey = process.env.ACTIVECAMPAIGN_API_KEY;
    const apiUrl = process.env.ACTIVECAMPAIGN_API_URL;

    if (!apiKey || !apiUrl) {
      apiLogger.error("ActiveCampaign credentials missing", {
        hasApiKey: !!apiKey,
        hasApiUrl: !!apiUrl,
      });
      return NextResponse.json(
        { error: "ActiveCampaign configuration error" },
        { status: 500 },
      );
    }

    // Prepare contact data
    const contactData: ActiveCampaignContact = {
      email: body.email.trim().toLowerCase(),
      firstName: body.firstName?.trim() || "",
      lastName: body.lastName?.trim() || "",
      phone: body.phone?.trim() || "",
    };

    // Add custom fields if provided
    const fieldValues = [];
    if (body.preference) {
      fieldValues.push({
        field: "1", // Adjust field ID based on your ActiveCampaign setup
        value: body.preference,
      });
    }
    if (body.income) {
      fieldValues.push({
        field: "2", // Adjust field ID based on your ActiveCampaign setup
        value: body.income,
      });
    }

    if (fieldValues.length > 0) {
      contactData.fieldValues = fieldValues;
    }

    // Create contact in ActiveCampaign
    const response = await fetch(`${apiUrl}/api/3/contacts`, {
      method: "POST",
      headers: {
        "Api-Token": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact: contactData,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      apiLogger.error("ActiveCampaign API error", {
        status: response.status,
        statusText: response.statusText,
        error: responseData,
      });
      return NextResponse.json(
        {
          error: "Failed to create contact in ActiveCampaign",
          details: responseData,
        },
        { status: response.status },
      );
    }

    apiLogger.info("ActiveCampaign contact created successfully", {
      contactId: responseData.contact?.id,
      email: contactData.email,
    });

    return NextResponse.json({
      success: true,
      contactId: responseData.contact?.id,
      message: "Contact created successfully",
    });
  } catch (error) {
    apiLogger.error("ActiveCampaign API error", {
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    });

    return NextResponse.json(
      {
        error: "Internal server error",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
