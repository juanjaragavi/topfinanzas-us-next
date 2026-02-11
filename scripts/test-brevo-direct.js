/**
 * Direct Brevo API Test
 * Tests the Brevo API directly without going through the Next.js API route
 * Requires BREVO_API_KEY environment variable to be set
 */

// Load environment variables from .env.local or .env
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

const testData = {
  email: "juan.jaramillo@topnetworks.co",
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
    UTM_MEDIUM: "direct_api_test",
    UTM_CAMPAIGN: "brevo_migration",
  },
  ext_id: `topfinanzas-uk-${Math.floor(Date.now() / 1000)}`,
  updateEnabled: false,
  listIds: [9],
};

async function testBrevoDirectAPI() {
  console.log("🧪 Starting Direct Brevo API Test\n");
  console.log("📧 Test Contact Details:");
  console.log(
    `   Name: ${testData.attributes.FIRSTNAME} ${testData.attributes.LASTNAME}`,
  );
  console.log(`   Email: ${testData.email}`);
  console.log(`   Country: ${testData.attributes.COUNTRIES}`);
  console.log(`   External ID: ${testData.ext_id}`);
  console.log(`   Income: ${testData.attributes.INCOME}`);
  console.log(`   Preference: ${testData.attributes.CARD_PREFERENCE}\n`);

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
      console.log("\n✅ SUCCESS: Contact created in Brevo!");
      console.log(`\n🔑 External ID: ${testData.ext_id}`);
      console.log("📋 List ID: 9 (UK TopFinanzas)");
      console.log(
        "\n🔍 Verify in Brevo Dashboard:",
        "https://app.brevo.com/contact/list/9\n",
      );
      return true;
    } else if (
      response.status === 400 &&
      responseData.code === "duplicate_parameter"
    ) {
      console.log(
        "\n⚠️  DUPLICATE: Contact already exists in Brevo (this is expected for repeated tests)",
      );
      console.log("   The API is working correctly!");
      console.log(
        "\n💡 To test with a new contact, change the email address in the script\n",
      );
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
testBrevoDirectAPI()
  .then((success) => {
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    console.error("Unexpected error:", error);
    process.exit(1);
  });
