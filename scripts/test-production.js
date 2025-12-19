#!/usr/bin/env node

/**
 * Production API Test Script
 *
 * Tests the production APIs to verify environment variables are configured
 *
 * Usage: node scripts/test-production.js
 */

const PRODUCTION_URL = "https://us.topfinanzas.com";

const testData = {
  sheetsPayload: {
    email: "production.test@example.com",
    firstName: "Production Test",
    preferenceText: "Credit Cards",
    incomeText: "$25,000 - $35,000",
    utm_source: "production-test",
    utm_medium: "verification",
    utm_campaign: "env-setup-test",
  },

  brevoPayload: {
    email_address: "production.test@example.com",
    first_name: "Production Test",
    fields: {
      preference: "Credit Cards",
      income: "$25,000 - $35,000",
      utm_source: "production-test",
      utm_medium: "verification",
      utm_campaign: "env-setup-test",
    },
  },
};

async function testGoogleSheetsProduction() {
  console.log("\n🔍 Testing Production Google Sheets API...");
  console.log(`URL: ${PRODUCTION_URL}/api/sheets`);
  console.log("Payload:", JSON.stringify(testData.sheetsPayload, null, 2));

  try {
    const response = await fetch(`${PRODUCTION_URL}/api/sheets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData.sheetsPayload),
    });

    const data = await response.json();

    console.log(`\nResponse Status: ${response.status}`);
    console.log("Response Body:", JSON.stringify(data, null, 2));

    if (response.status === 201) {
      console.log("✅ SUCCESS: Google Sheets API is working in production!");
      return true;
    } else if (response.status === 409) {
      console.log("⚠️  DUPLICATE: Email already exists (API is working)");
      return true;
    } else if (response.status === 500) {
      console.log("❌ ERROR: 500 Internal Server Error");
      console.log(
        "   This means environment variables are NOT configured in production",
      );
      console.log(
        "   Please add GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, and GOOGLE_SHEET_ID",
      );
      return false;
    } else {
      console.log(`❌ UNEXPECTED STATUS: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error("❌ NETWORK ERROR:", error.message);
    return false;
  }
}

async function testBrevoProduction() {
  console.log("\n🔍 Testing Production Brevo API...");
  console.log(`URL: ${PRODUCTION_URL}/api/subscribe`);
  console.log("Payload:", JSON.stringify(testData.brevoPayload, null, 2));

  try {
    const response = await fetch(`${PRODUCTION_URL}/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData.brevoPayload),
    });

    const data = await response.json();

    console.log(`\nResponse Status: ${response.status}`);
    console.log("Response Body:", JSON.stringify(data, null, 2));

    if (response.status === 200 || response.status === 201) {
      console.log("✅ SUCCESS: Brevo API is working in production!");

      if (data.id) {
        console.log(`📧 Contact ID: ${data.id}`);
      }

      return true;
    } else if (response.status === 400 && data.code === "duplicate_parameter") {
      console.log(
        "⚠️  DUPLICATE: Email already exists in Brevo (API is working)",
      );
      return true;
    } else {
      console.log("❌ FAILED: Unexpected response");
      return false;
    }
  } catch (error) {
    console.error("❌ NETWORK ERROR:", error.message);
    return false;
  }
}

async function runProductionTests() {
  console.log("==============================================");
  console.log("🚀 Production API Test");
  console.log("==============================================");
  console.log(`Testing: ${PRODUCTION_URL}`);
  console.log(`Timestamp: ${new Date().toISOString()}`);
  console.log("");
  console.log(
    "⚠️  WARNING: This will attempt to create a contact in production!",
  );
  console.log("   Make sure you're ready to test with real data.");

  const results = {
    sheets: false,
    brevo: false,
  };

  // Test Google Sheets
  results.sheets = await testGoogleSheetsProduction();

  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Test Brevo
  results.brevo = await testBrevoProduction();

  // Summary
  console.log("\n==============================================");
  console.log("📊 Production Test Results");
  console.log("==============================================");
  console.log(
    `Google Sheets API: ${results.sheets ? "✅ WORKING" : "❌ FAILED"}`,
  );
  console.log(`Brevo API: ${results.brevo ? "✅ WORKING" : "❌ FAILED"}`);

  if (!results.sheets) {
    console.log("\n🔧 Google Sheets Fix Required:");
    console.log("   1. Add environment variables to production server");
    console.log("   2. See PRODUCTION_SETUP.md for detailed instructions");
    console.log("   3. Restart your application after adding variables");
  }

  if (!results.brevo) {
    console.log("\n🔧 Brevo Fix Required:");
    console.log("   1. Check BREVO_API_KEY in production environment");
    console.log("   2. Verify API key is valid and has correct permissions");
  }

  const allPassed = results.sheets && results.brevo;
  console.log(
    `\n${allPassed ? "✅ ALL SYSTEMS OPERATIONAL" : "⚠️  SOME SYSTEMS DOWN"}`,
  );

  process.exit(allPassed ? 0 : 1);
}

// Run the tests
runProductionTests();
