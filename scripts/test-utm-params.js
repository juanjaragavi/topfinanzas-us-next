#!/usr/bin/env node

/**
 * UTM Parameter Debug Script
 *
 * Tests form submission with UTM parameters to identify issues
 *
 * Usage: node scripts/test-utm-params.js
 */

const BASE_URL = "http://localhost:3030";

// Test data WITH UTM parameters (like production)
const testWithUTM = {
  sheetsPayload: {
    email: "utm.test@example.com",
    firstName: "UTM Test User",
    preferenceText: "Credit Cards",
    incomeText: "£25,000 - £35,000",
    preference: "credit-cards",
    income: "25-35k",
    receiveMessages: true,
    utm_source: "adwords",
    utm_medium: "cpc",
    utm_campaign: "22524445886",
    utm_content: "banner",
    utm_term: "open",
  },

  brevoPayload: {
    email_address: "utm.test@example.com",
    first_name: "UTM Test User",
    state: "active",
    fields: {
      preference: "Credit Cards",
      income: "£25,000 - £35,000",
      utm_source: "adwords",
      utm_medium: "cpc",
      utm_campaign: "22524445886",
      utm_content: "banner",
      utm_term: "open",
    },
  },
};

// Test data WITHOUT UTM parameters (working case)
const testWithoutUTM = {
  sheetsPayload: {
    email: "no-utm.test@example.com",
    firstName: "No UTM Test User",
    preferenceText: "Credit Cards",
    incomeText: "£25,000 - £35,000",
    preference: "credit-cards",
    income: "25-35k",
    receiveMessages: true,
  },

  brevoPayload: {
    email_address: "no-utm.test@example.com",
    first_name: "No UTM Test User",
    state: "active",
    fields: {
      preference: "Credit Cards",
      income: "£25,000 - £35,000",
    },
  },
};

async function testScenario(scenarioName, testData) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`🧪 Testing: ${scenarioName}`);
  console.log("=".repeat(60));

  // Test Google Sheets
  console.log("\n📊 Testing Google Sheets API...");
  console.log("Payload:", JSON.stringify(testData.sheetsPayload, null, 2));

  try {
    const sheetsResponse = await fetch(`${BASE_URL}/api/sheets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testData.sheetsPayload),
    });

    const sheetsData = await sheetsResponse.json();

    console.log(`Status: ${sheetsResponse.status}`);
    console.log("Response:", JSON.stringify(sheetsData, null, 2));

    if (sheetsResponse.status === 201 || sheetsResponse.status === 409) {
      console.log("✅ Google Sheets: PASSED");
    } else {
      console.log("❌ Google Sheets: FAILED");
      return false;
    }
  } catch (error) {
    console.error("❌ Google Sheets Error:", error.message);
    return false;
  }

  // Small delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Test Brevo
  console.log("\n📧 Testing Brevo API...");
  console.log("Payload:", JSON.stringify(testData.brevoPayload, null, 2));

  try {
    const brevoResponse = await fetch(`${BASE_URL}/api/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testData.brevoPayload),
    });

    const brevoData = await brevoResponse.json();

    console.log(`Status: ${brevoResponse.status}`);
    console.log("Response:", JSON.stringify(brevoData, null, 2));

    if (brevoResponse.status === 200 || brevoResponse.status === 201) {
      console.log("✅ Brevo: PASSED");
      if (brevoData.id) {
        console.log(`📧 Contact ID: ${brevoData.id}`);
      }
    } else if (
      brevoResponse.status === 400 &&
      brevoData.code === "duplicate_parameter"
    ) {
      console.log("⚠️  Brevo: DUPLICATE (still a success)");
    } else {
      console.log("❌ Brevo: FAILED");
      return false;
    }
  } catch (error) {
    console.error("❌ Brevo Error:", error.message);
    return false;
  }

  return true;
}

async function runTests() {
  console.log("=".repeat(60));
  console.log("🔍 UTM Parameter Troubleshooting");
  console.log("=".repeat(60));
  console.log(`Server: ${BASE_URL}`);
  console.log(`Timestamp: ${new Date().toISOString()}\n`);

  const results = {
    withoutUTM: false,
    withUTM: false,
  };

  // Test WITHOUT UTM (should work)
  results.withoutUTM = await testScenario(
    "Submission WITHOUT UTM Parameters",
    testWithoutUTM,
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Test WITH UTM (the problematic case)
  results.withUTM = await testScenario(
    "Submission WITH UTM Parameters",
    testWithUTM,
  );

  // Final summary
  console.log("\n" + "=".repeat(60));
  console.log("📊 TEST RESULTS SUMMARY");
  console.log("=".repeat(60));
  console.log(
    `Without UTM Parameters: ${results.withoutUTM ? "✅ PASSED" : "❌ FAILED"}`,
  );
  console.log(
    `With UTM Parameters:    ${results.withUTM ? "✅ PASSED" : "❌ FAILED"}`,
  );

  if (results.withoutUTM && !results.withUTM) {
    console.log("\n🔴 ISSUE CONFIRMED: UTM parameters are causing the failure");
    console.log("\nPossible causes:");
    console.log("  1. UTM parameter values contain special characters");
    console.log("  2. Google Sheets API has field length limits");
    console.log("  3. Encoding issues with UTM parameter values");
    console.log("  4. Brevo API rejecting certain UTM parameter values");
  } else if (results.withoutUTM && results.withUTM) {
    console.log("\n✅ ISSUE RESOLVED: Both scenarios now working!");
  } else {
    console.log("\n⚠️  Unexpected results - further investigation needed");
  }

  process.exit(results.withUTM ? 0 : 1);
}

// Run the tests
runTests();
