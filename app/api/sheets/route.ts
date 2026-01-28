import { google } from "googleapis";
import { NextResponse } from "next/server";

import { BRAND_STATIC_FIELDS } from "@/lib/constants";
import { apiLogger } from "@/lib/logger";

const pickString = (...values: unknown[]) => {
  for (const value of values) {
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed !== "") {
        return trimmed;
      }
    }
  }

  return "";
};

export async function POST(req: Request) {
  const body = await req.json();

  // Enhanced logging for production debugging
  apiLogger.debug("Sheets API request received", {
    hasEmail: !!body.email,
    hasFirstName: !!body.firstName,
    hasPreferenceText: !!body.preferenceText,
    hasIncomeText: !!body.incomeText,
    hasUTMSource: !!body.utm_source,
    hasUTMMedium: !!body.utm_medium,
    hasUTMCampaign: !!body.utm_campaign,
    hasUTMTerm: !!body.utm_term,
    hasUTMContent: !!body.utm_content,
    hasSource: !!body.source,
    hasMedium: !!body.medium,
    hasCampaign: !!body.campaign,
    hasTerm: !!body.term,
    hasContent: !!body.content,
    hasPais: !!(body.Pais || body.pais),
    hasMarca: !!(body.Marca || body.marca),
    bodyKeys: Object.keys(body),
    bodySize: JSON.stringify(body).length,
    utmValues: {
      source: body.utm_source,
      medium: body.utm_medium,
      campaign: body.utm_campaign,
    },
  });

  try {
    const emailInput =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!emailInput) {
      apiLogger.warn("Validation failed: Missing email");
      return NextResponse.json(
        {
          error: "Email is required to upsert quiz registration",
        },
        { status: 400 },
      );
    }

    // Environment check logging
    apiLogger.debug("Environment check", {
      hasServiceEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      hasPrivateKey: !!process.env.GOOGLE_PRIVATE_KEY,
      hasSheetId: !!process.env.GOOGLE_SHEET_ID,
      privateKeyLength: process.env.GOOGLE_PRIVATE_KEY?.length,
      privateKeyStartsWith: process.env.GOOGLE_PRIVATE_KEY?.substring(0, 30),
    });

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    apiLogger.debug("Google Auth created successfully");

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const sheetName = "us-topfinanzas-com";

    // Ensure the sheet exists, create it if it doesn't
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const sheetExists = spreadsheet.data.sheets?.some(
      (s) => s.properties?.title === sheetName,
    );

    if (!sheetExists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [{ addSheet: { properties: { title: sheetName } } }],
        },
      });
    }

    const headers = [
      "Name",
      "Last Name",
      "Email",
      "Phone",
      "Timestamp",
      "Preference",
      "Income",
      "Country",
      "Brand",
      "Source",
      "Medium",
      "Campaign",
      "Term",
      "Content",
      "UTM Source",
      "UTM Medium",
      "UTM Campaign",
      "UTM Term",
      "UTM Content",
    ];

    const sheetRange = `${sheetName}!A:S`;
    const existingValuesResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: sheetRange,
      majorDimension: "ROWS",
    });

    let sheetValues = existingValuesResponse.data.values ?? [];

    if (sheetValues.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [headers],
        },
      });

      sheetValues = [headers];
    }

    const emailColumnIndex = headers.indexOf("Email");
    const headerCell = sheetValues[0]?.[emailColumnIndex];
    const sheetHasHeader =
      typeof headerCell === "string" &&
      headerCell.trim().toLowerCase() === "email";

    const preferenceValue = pickString(body.preferenceText, body.preference);
    const incomeValue = pickString(body.incomeText, body.income);
    const paisValue = pickString(
      body.Pais,
      body.pais,
      BRAND_STATIC_FIELDS.Pais,
    );
    const marcaValue = pickString(
      body.Marca,
      body.marca,
      BRAND_STATIC_FIELDS.Marca,
    );
    const sourceValue = pickString(body.source, body.utm_source);
    const mediumValue = pickString(body.medium, body.utm_medium);
    const campaignValue = pickString(body.campaign, body.utm_campaign);
    const termValue = pickString(body.term, body.utm_term);
    const contentValue = pickString(body.content, body.utm_content);

    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const timestampValue = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    const rowValues = [
      body.firstName ?? "",
      body.lastName ?? "",
      body.email ?? "",
      body.phone ?? "",
      timestampValue,
      preferenceValue,
      incomeValue,
      paisValue,
      marcaValue,
      sourceValue,
      mediumValue,
      campaignValue,
      termValue,
      contentValue,
      body.utm_source ?? sourceValue,
      body.utm_medium ?? mediumValue,
      body.utm_campaign ?? campaignValue,
      body.utm_term ?? termValue,
      body.utm_content ?? contentValue,
    ];

    const dataStartIndex = sheetHasHeader ? 1 : 0;
    let existingRowIndex = -1;

    for (let i = dataStartIndex; i < sheetValues.length; i += 1) {
      const rowEmail = sheetValues[i]?.[emailColumnIndex];
      if (
        typeof rowEmail === "string" &&
        rowEmail.trim().toLowerCase() === emailInput
      ) {
        existingRowIndex = i;
        break;
      }
    }

    if (existingRowIndex !== -1) {
      return NextResponse.json(
        {
          message: "Registration already exists",
          action: "duplicate",
        },
        { status: 409 },
      );
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: sheetName,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowValues],
      },
    });

    return NextResponse.json(
      {
        message: "Registration created",
        action: "created",
      },
      { status: 201 },
    );
  } catch (error) {
    // Enhanced error logging
    apiLogger.error("Sheets API error occurred", error, {
      hasUTMParams: !!(body.utm_source || body.utm_medium || body.utm_campaign),
      requestBodySize: JSON.stringify(body).length,
      requestFields: Object.keys(body),
    });

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: "Failed to add data to sheet", details: errorMessage },
      { status: 500 },
    );
  }
}
