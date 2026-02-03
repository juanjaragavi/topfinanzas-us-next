import { NextResponse } from "next/server";
import { apiLogger } from "@/lib/logger";
import {
  mapQuizDataToFieldValues,
  TOP_US_LIST_ID,
} from "@/lib/activecampaign-field-mapping";

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

interface ActiveCampaignContactList {
  list: string;
  contact: string;
  status: number; // 1 = active/subscribed, 2 = unsubscribed
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    apiLogger.debug("ActiveCampaign API request received", {
      hasEmail: !!body.email,
      hasFirstName: !!body.firstName,
      hasLastName: !!body.lastName,
      hasPhone: !!body.phone,
      hasUtmParams: !!(body.utm_source || body.utm_medium || body.utm_campaign),
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

    // Prepare contact data with basic info
    const contactData: ActiveCampaignContact = {
      email: body.email.trim().toLowerCase(),
      firstName: body.firstName?.trim() || "",
      lastName: body.lastName?.trim() || "",
      phone: body.phone?.trim() || "",
    };

    // Map quiz and tracking data to custom field values
    const fieldValues = mapQuizDataToFieldValues({
      preference: body.preference,
      preferenceText: body.preferenceText,
      income: body.income,
      incomeText: body.incomeText,
      utm_source: body.utm_source,
      utm_medium: body.utm_medium,
      utm_campaign: body.utm_campaign,
      utm_term: body.utm_term,
      utm_content: body.utm_content,
      country: body.country,
      brand: body.brand,
      source: body.source,
      timestamp: body.timestamp,
    });

    // Only add fieldValues if we have any
    if (fieldValues.length > 0) {
      contactData.fieldValues = fieldValues;
    }

    apiLogger.debug("ActiveCampaign field values prepared", {
      fieldCount: fieldValues.length,
      fields: fieldValues.map((fv) => fv.field),
    });

    // Step 1: Create or update contact in ActiveCampaign
    const contactResponse = await fetch(`${apiUrl}/api/3/contacts`, {
      method: "POST",
      headers: {
        "Api-Token": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact: contactData,
      }),
    });

    const contactResponseData = await contactResponse.json();

    if (!contactResponse.ok) {
      apiLogger.error("ActiveCampaign contact creation error", {
        status: contactResponse.status,
        statusText: contactResponse.statusText,
        error: contactResponseData,
      });
      return NextResponse.json(
        {
          error: "Failed to create contact in ActiveCampaign",
          details: contactResponseData,
        },
        { status: contactResponse.status },
      );
    }

    const contactId = contactResponseData.contact?.id;

    apiLogger.info("ActiveCampaign contact created successfully", {
      contactId,
      email: contactData.email,
      fieldValuesCount: fieldValues.length,
    });

    // Step 2: Subscribe contact to TOP US list (ID: 4)
    // This is critical for list assignment automation
    try {
      const contactListData: {
        contactList: ActiveCampaignContactList;
      } = {
        contactList: {
          list: TOP_US_LIST_ID,
          contact: contactId,
          status: 1, // 1 = active/subscribed
        },
      };

      const listResponse = await fetch(`${apiUrl}/api/3/contactLists`, {
        method: "POST",
        headers: {
          "Api-Token": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactListData),
      });

      const listResponseData = await listResponse.json();

      if (!listResponse.ok) {
        // Log the error but don't fail the entire request
        // Contact was created successfully, list assignment is supplementary
        apiLogger.warn("ActiveCampaign list assignment failed", {
          status: listResponse.status,
          statusText: listResponse.statusText,
          error: listResponseData,
          contactId,
          listId: TOP_US_LIST_ID,
        });
      } else {
        apiLogger.info("Contact assigned to TOP US list successfully", {
          contactId,
          listId: TOP_US_LIST_ID,
          contactListId: listResponseData.contactList?.id,
        });
      }
    } catch (listError) {
      // Log list assignment error but don't fail the request
      apiLogger.error("ActiveCampaign list assignment exception", {
        error:
          listError instanceof Error ? listError.message : String(listError),
        contactId,
        listId: TOP_US_LIST_ID,
      });
    }

    return NextResponse.json({
      success: true,
      contactId,
      listId: TOP_US_LIST_ID,
      message: "Contact created and assigned to TOP US list",
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
