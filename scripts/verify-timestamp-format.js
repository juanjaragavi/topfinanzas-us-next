#!/usr/bin/env node

/**
 * Timestamp Format Verification Script
 *
 * Reads the last 5 entries from the Google Sheet to verify
 * the timestamp format is DD/MM/YYYY HH:MM:SS
 */

const { google } = require("googleapis");
require("dotenv").config({ path: ".env.local" });

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SHEET_NAME = "us-topfinanzas-com";

async function verifyTimestampFormat() {
  console.log("==============================================");
  console.log("📅 Timestamp Format Verification");
  console.log("==============================================\n");

  // Auth setup
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  try {
    console.log("Fetching last 5 entries from Google Sheet...\n");

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A:E`, // Name, Last Name, Email, Phone, Timestamp
    });

    const rows = response.data.values || [];

    if (rows.length <= 1) {
      console.log("❌ No data rows found in sheet");
      return;
    }

    // Get headers
    const headers = rows[0];
    const timestampIndex = headers.indexOf("Timestamp");

    if (timestampIndex === -1) {
      console.log("❌ Timestamp column not found");
      return;
    }

    // Get last 5 entries (excluding header)
    const dataRows = rows.slice(1);
    const lastEntries = dataRows.slice(-5);

    console.log("Last 5 Entries:\n");
    console.log("─".repeat(80));
    console.log(
      `${"#".padEnd(5)} | ${"Email".padEnd(35)} | ${"Timestamp".padEnd(25)}`,
    );
    console.log("─".repeat(80));

    lastEntries.forEach((row, index) => {
      const entryNum = dataRows.length - lastEntries.length + index + 1;
      const email = row[2] || "N/A";
      const timestamp = row[timestampIndex] || "N/A";

      console.log(
        `${String(entryNum).padEnd(5)} | ${email.padEnd(35)} | ${timestamp.padEnd(25)}`,
      );
    });

    console.log("─".repeat(80));

    // Validate format
    console.log("\n📊 Format Validation:\n");

    const ddmmyyyyPattern = /^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}$/;
    const isoPattern = /^\d{4}-\d{2}-\d{2}T/;

    let validCount = 0;
    let isoCount = 0;
    let otherCount = 0;

    lastEntries.forEach((row) => {
      const timestamp = row[timestampIndex] || "";
      if (ddmmyyyyPattern.test(timestamp)) {
        validCount++;
      } else if (isoPattern.test(timestamp)) {
        isoCount++;
      } else if (timestamp) {
        otherCount++;
      }
    });

    console.log(
      `  ✅ DD/MM/YYYY HH:MM:SS format: ${validCount}/${lastEntries.length}`,
    );
    console.log(`  ⚠️  ISO format (old): ${isoCount}/${lastEntries.length}`);
    console.log(
      `  ❓ Other/Invalid format: ${otherCount}/${lastEntries.length}`,
    );

    console.log("\n==============================================");
    if (validCount === lastEntries.length) {
      console.log("✅ SUCCESS: All recent entries use correct format!");
    } else if (validCount > 0) {
      console.log("⚠️  PARTIAL: Some entries use new format");
    } else {
      console.log("❌ FAIL: No entries using new format yet");
    }
    console.log("==============================================\n");
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
}

verifyTimestampFormat().catch(console.error);
