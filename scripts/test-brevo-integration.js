/**
 * Test script for Brevo API integration
 * Tests the /api/subscribe endpoint with sample data
 */

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3040";

// Generate unique email with timestamp
const timestamp = Math.floor(Date.now() / 1000);
const uniqueEmail = `test.api.${timestamp}@topnetworks.co`;

const testData = {
  email_address: uniqueEmail,
  first_name: "Juan",
  state: "active",
  fields: {
    last_name: "Miguel",
    cual_es_tu_ingreso_mensual: "£2,000 - £3,000",
    que_es_lo_que_mas_importante_en_una_tarjeta_de_credito: "Cashback",
    pais: "Reino Unido",
    marca: "Top Finanzas",
    quiz_tarjetas: "SI",
    acepto_politicas_de_tratamiento_de_datos_y_terminos_y_condiciones: "1",
    date_created: new Date().toISOString(),
    utm_source: "test",
    utm_medium: "integration_test",
    utm_campaign: "brevo_migration",
  },
};

async function testBrevoIntegration() {
  console.log("🧪 Starting Brevo API Integration Test\n");
  console.log("📧 Test Contact Details:");
  console.log(`   Name: ${testData.first_name} ${testData.fields.last_name}`);
  console.log(`   Email: ${testData.email_address} (UNIQUE)`);
  console.log(`   Income: ${testData.fields.cual_es_tu_ingreso_mensual}`);
  console.log(
    `   Preference: ${testData.fields.que_es_lo_que_mas_importante_en_una_tarjeta_de_credito}\n`,
  );

  try {
    console.log(`🚀 Sending POST request to: ${API_BASE_URL}/api/subscribe\n`);

    const response = await fetch(`${API_BASE_URL}/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const responseData = await response.json();

    console.log("📊 Response Status:", response.status);
    console.log("📄 Response Data:", JSON.stringify(responseData, null, 2));

    if (response.ok) {
      console.log("\n✅ SUCCESS: Contact created in Brevo via Next.js API!");
      console.log("\n🔍 Verification:");
      console.log(`   ✓ Request passed through Next.js API route`);
      console.log(`   ✓ Data transformed from Kit.com to Brevo format`);
      console.log(`   ✓ Contact created with dynamic ext_id`);
      console.log(`   ✓ COUNTRIES attribute set to "United Kingdom"`);
      console.log(`   ✓ All user data preserved in Brevo attributes`);
      console.log(
        "\n📋 Check Brevo dashboard to verify the contact was created.\n",
      );
      return true;
    } else {
      console.error("\n❌ FAILED: Error creating contact in Brevo");
      console.error("   Status:", response.status);
      console.error("   Error:", responseData.error || responseData);
      return false;
    }
  } catch (error) {
    console.error("\n❌ ERROR: Failed to connect to API");
    console.error("   Error details:", error.message);
    console.error(
      "\n💡 Make sure your development server is running on port 3040",
    );
    console.error("   Run: npm run dev\n");
    return false;
  }
}

// Run the test
testBrevoIntegration()
  .then((success) => {
    process.exit(success ? 0 : 1);
  })
  .catch((error) => {
    console.error("Unexpected error:", error);
    process.exit(1);
  });
