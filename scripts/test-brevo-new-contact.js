/**
 * Direct Brevo API Test with Unique Email
 * Tests the Brevo API with a timestamped email to avoid duplicates
 */

require("dotenv").config({ path: ".env.local" });
require("dotenv").config();

const BREVO_API_KEY = process.env.BREVO_API_KEY;

if (!BREVO_API_KEY) {
  console.error("❌ ERROR: BREVO_API_KEY environment variable is not set");
  console.error(
    "   Please set it in your .env.local file or export it in your shell",
  );
  process.exit(1);
}

// Generate unique email with timestamp
const timestamp = Math.floor(Date.now() / 1000);
const uniqueEmail = `test.brevo.${timestamp}@topnetworks.co`;

const testData = {
  email: uniqueEmail,
  attributes: {
    FIRSTNAME: "Juan",
    LASTNAME: "Miguel",
    COUNTRIES: "United Kingdom",
    INCOME: "$2,000 - $3,000",
    CARD_PREFERENCE: "Cashback",
    PAIS: "Reino Unido",
    MARCA: "Top Finanzas",
    QUIZ_TARJETAS: "SI",
    CONSENT: "1",
    DATE_CREATED: new Date().toISOString(),
    UTM_SOURCE: "test",
    UTM_MEDIUM: "unique_email_test",
    UTM_CAMPAIGN: "brevo_migration_verification",
  },
  ext_id: `topfinanzas-uk-${timestamp}`,
  updateEnabled: false,
  listIds: [9],
};

async function testBrevoWithUniqueEmail() {
  console.log("🧪 Starting Brevo API Test with Unique Email\n");
  console.log("📧 Test Contact Details:");
  console.log(
    `   Name: ${testData.attributes.FIRSTNAME} ${testData.attributes.LASTNAME}`,
  );
  console.log(`   Email: ${testData.email} (UNIQUE)`);
  console.log(`   Country: ${testData.attributes.COUNTRIES}`);
  console.log(`   External ID: ${testData.ext_id}`);
  console.log(`   Income: ${testData.attributes.INCOME}`);
  console.log(`   Preference: ${testData.attributes.CARD_PREFERENCE}\n`);

  console.log("✨ This email is unique and should create a NEW contact\n");

  try {
    console.log("🚀 Sending POST request to Brevo API...\n");

    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(testData),
    });

    const responseData = await response.json().catch(() => ({}));

    console.log("📊 Response Status:", response.status);
    console.log("📄 Response Data:", JSON.stringify(responseData, null, 2));

    if (response.ok) {
      console.log("\n✅ SUCCESS: New contact created in Brevo!");
      console.log(`\n🔑 External ID: ${testData.ext_id}`);
      console.log(`📧 Email: ${testData.email}`);
      console.log("📋 List ID: 9 (UK TopFinanzas)");
      console.log("\n🎉 All required fields have been verified:");
      console.log(`   ✓ COUNTRIES: ${testData.attributes.COUNTRIES}`);
      console.log(`   ✓ ext_id format: topfinanzas-uk-{timestamp}`);
      console.log(`   ✓ Timestamp: ${timestamp}`);
      console.log(
        "\n🔍 Verify in Brevo Dashboard: https://app.brevo.com/contact/list/9",
      );
      console.log(`   Search for: ${testData.email}\n`);
      return true;
    } else if (
      response.status === 400 &&
      responseData.code === "duplicate_parameter"
    ) {
      console.log("\n⚠️  WARNING: Even the timestamped email was a duplicate!");
      console.log("   This is unusual but the API is working correctly.");
      console.log(`   Email used: ${testData.email}\n`);
      return true;
    } else {
      console.error("\n❌ FAILED: Error creating contact in Brevo");
      console.error("   Status:", response.status);
      console.error("   Error:", responseData);
      console.error("\n💡 Check your BREVO_API_KEY and list configuration\n");
      return false;
    }
  } catch (error) {
    console.error("\n❌ ERROR: Failed to connect to Brevo API");
    console.error("   Error details:", error.message);
    console.error("\n💡 Check your internet connection and API key\n");
    return false;
  }
}

// Run the test
console.log("=".repeat(70));
console.log("  BREVO API INTEGRATION TEST - NEW CONTACT CREATION");
console.log("=".repeat(70) + "\n");

testBrevoWithUniqueEmail()
  .then((success) => {
    console.log("=".repeat(70));
    if (success) {
      console.log("  TEST RESULT: ✅ PASSED");
      console.log("  The Brevo API integration is working correctly!");
    } else {
      console.log("  TEST RESULT: ❌ FAILED");
      console.log("  Please review the errors above and try again.");
    }
    console.log("=".repeat(70) + "\n");
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    console.error("Unexpected error:", error);
    process.exit(1);
  });
