#!/usr/bin/env node

/**
 * Test Script: Complete Form Submission Flow
 *
 * This script tests the complete data flow:
 * 1. Google Sheets API (/api/sheets)
 * 2. Brevo + ConvertKit API (/api/subscribe)
 *
 * Usage: node scripts/test-full-flow.js
 */

const BASE_URL = "http://localhost:3030";

// Test data matching the credit-card-form.tsx payload structure
const testData = {
  // Google Sheets payload
  sheetsPayload: {
    email: "test.fullflow@example.com",
    firstName: "Test User",
    preferenceText: "Credit Cards",
    incomeText: "£25,000 - £35,000",
    utm_source: "test",
    utm_medium: "automated",
    utm_campaign: "full-flow-test",
    utm_term: "",
    utm_content: "",
  },

  // Brevo/Kit.com payload
  kitPayload: {
    email_address: "test.fullflow@example.com",
    first_name: "Test User",
    fields: {
      preference: "Credit Cards",
      income: "£25,000 - £35,000",
      utm_source: "test",
      utm_medium: "automated",
      utm_campaign: "full-flow-test",
      utm_term: "",
      utm_content: "",
    },
  },
};

async function testGoogleSheets() {
  console.log("\n🔍 Testing Google Sheets API...");
  console.log("Endpoint: POST /api/sheets");
  console.log("Payload:", JSON.stringify(testData.sheetsPayload, null, 2));

  try {
    const response = await fetch(`${BASE_URL}/api/sheets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData.sheetsPayload),
    });

    const data = await response.json();

    console.log(`\n✅ Response Status: ${response.status}`);
    console.log("Response Body:", JSON.stringify(data, null, 2));

    if (response.status === 201) {
      console.log("✅ SUCCESS: Data added to Google Sheets");
      return true;
    } else if (response.status === 409) {
      console.log("⚠️  DUPLICATE: Email already exists in Google Sheets");
      return true; // Still a success, just duplicate
    } else {
      console.log("❌ FAILED: Unexpected response status");
      return false;
    }
  } catch (error) {
    console.error("❌ ERROR:", error.message);
    return false;
  }
}

async function testMarketingIntegrations() {
  console.log("\n🔍 Testing Brevo + ConvertKit integrations...");
  console.log("Endpoint: POST /api/subscribe");
  console.log("Payload:", JSON.stringify(testData.kitPayload, null, 2));

  try {
    const response = await fetch(`${BASE_URL}/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData.kitPayload),
    });

    const data = await response.json();

    console.log(`\n✅ Response Status: ${response.status}`);
    console.log("Response Body:", JSON.stringify(data, null, 2));

    const brevoResult = data?.brevo;
    const convertKitResult = data?.convertkit;

    const brevoSuccess = Boolean(brevoResult?.success);
    const convertKitSuccess = Boolean(convertKitResult?.success);

    if (brevoSuccess) {
      console.log(`✅ Brevo Success (status ${brevoResult.status})`);
    } else {
      console.log("❌ Brevo Failed", brevoResult);
    }

    if (convertKitResult) {
      if (convertKitSuccess) {
        console.log(
          `✅ ConvertKit Success (status ${convertKitResult.status})`,
        );
      } else {
        console.log("❌ ConvertKit Failed", convertKitResult);
      }
    } else {
      console.log("⚠️  ConvertKit response missing in API payload");
    }

    return { brevoSuccess, convertKitSuccess };
  } catch (error) {
    console.error("❌ ERROR:", error.message);
    return { brevoSuccess: false, convertKitSuccess: false };
  }
}

async function runTests() {
  console.log("==============================================");
  console.log("🧪 Full Form Submission Flow Test");
  console.log("==============================================");
  console.log(`Testing against: ${BASE_URL}`);
  console.log(`Timestamp: ${new Date().toISOString()}`);

  const results = {
    sheets: false,
    brevo: false,
    convertkit: false,
  };

  // Test Google Sheets first (matches actual form flow)
  results.sheets = await testGoogleSheets();

  // Add a small delay between requests
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Test Brevo API
  const marketingResults = await testMarketingIntegrations();
  results.brevo = marketingResults.brevoSuccess;
  results.convertkit = marketingResults.convertKitSuccess;

  // Summary
  console.log("\n==============================================");
  console.log("📊 Test Results Summary");
  console.log("==============================================");
  console.log(
    `Google Sheets API: ${results.sheets ? "✅ PASSED" : "❌ FAILED"}`,
  );
  console.log(`Brevo API: ${results.brevo ? "✅ PASSED" : "❌ FAILED"}`);
  console.log(
    `ConvertKit API: ${results.convertkit ? "✅ PASSED" : "❌ FAILED"}`,
  );

  const allPassed = results.sheets && results.brevo && results.convertkit;
  console.log(
    `\n${allPassed ? "✅ ALL TESTS PASSED" : "❌ SOME TESTS FAILED"}`,
  );

  process.exit(allPassed ? 0 : 1);
}

// Run the tests
runTests();
