#!/usr/bin/env node

/**
 * US Google Sheets Integration Test Script
 *
 * This script verifies the new US schema configuration by appending
 * a test row to the "us-topfinanzas-com" sheet.
 */

const { google } = require("googleapis");
require("dotenv").config({ path: ".env.local" });

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = "us-topfinanzas-com";

async function testUSIntegration() {
  console.log("==============================================");
  console.log("🇺🇸 US Google Sheets Integration Test");
  console.log("==============================================\n");

  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !SHEET_ID) {
    console.error("❌ Missing required environment variables!");
    process.exit(1);
  }

  // Auth setup
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  console.log("Step 1: Verifying Sheet Access...");
  try {
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
    console.log(`  ✅ Connected to: ${spreadsheet.data.properties.title}`);
  } catch (error) {
    console.error(`  ❌ Failed to connect: ${error.message}`);
    process.exit(1);
  }

  console.log("\nStep 2: Checking Headers...");
  // Check if sheet exists and has headers, if not create them (mimics route.ts logic)
  const sheetRange = `${SHEET_NAME}!A:S`;
  let sheetValues = [];
  
  try {
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: sheetRange,
        majorDimension: "ROWS"
    });
    sheetValues = response.data.values || [];
  } catch (error) {
    console.log(`  ℹ️  Sheet might not exist yet, will attempt to write headers.`);
  }

  const newHeaders = [
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
    "UTM Content"
  ];

  if (sheetValues.length === 0) {
      console.log("  ℹ️  Sheet empty or missing. Writing headers...");
      await sheets.spreadsheets.values.update({
        spreadsheetId: SHEET_ID,
        range: `${SHEET_NAME}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [newHeaders] },
      });
      console.log("  ✅ Headers written.");
  } else {
      console.log("  ✅ Sheet exists with data/headers.");
      // Verify first header matches "Name"
      if (sheetValues[0][0] !== "Name") {
          console.warn(`  ⚠️  WARNING: First column header is "${sheetValues[0][0]}", expected "Name".`);
      }
  }

  console.log("\nStep 3: Appending Test Row...");
  
  // Generate timestamp dd/mm/yyyy hh:mm:ss
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const timestampStr = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  const testRow = [
    "TestFirstName",       // Name
    "TestLastName",        // Last Name
    "test.us.migration@example.com", // Email
    "555-0199",           // Phone
    timestampStr,         // Timestamp
    "Cashback",           // Preference
    "$50,000+",           // Income
    "United States",      // Country
    "TopFinanzas",        // Brand
    "test_script",        // Source
    "console",            // Medium
    "us_migration_test",  // Campaign
    "term_test",          // Term
    "content_test",       // Content
    "test_script",        // UTM Source
    "console",            // UTM Medium
    "us_migration_test",  // UTM Campaign
    "term_test",          // UTM Term
    "content_test"        // UTM Content
  ];

  try {
    await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: SHEET_NAME,
        valueInputOption: "USER_ENTERED",
        insertDataOption: "INSERT_ROWS",
        requestBody: { values: [testRow] },
    });
    console.log("  ✅ Test row appended successfully.");
    console.log(`  Time: ${timestampStr}`);
    console.log(`  Email: ${testRow[2]}`);
  } catch (error) {
    console.error(`  ❌ Failed to append row: ${error.message}`);
  }

  console.log("\n==============================================");
  console.log("✅ Test Complete");
  console.log("==============================================");
}

testUSIntegration().catch(console.error);
