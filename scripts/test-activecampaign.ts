/**
 * ActiveCampaign Integration Test Script
 *
 * Tests the complete ActiveCampaign integration flow:
 * 1. Contact creation with field values
 * 2. List subscription (TOP US - List ID 4)
 * 3. Field population verification
 *
 * Usage:
 *   npx tsx scripts/test-activecampaign.ts
 *
 * Requirements:
 *   - ACTIVECAMPAIGN_API_KEY environment variable
 *   - ACTIVECAMPAIGN_API_URL environment variable
 *   - Field IDs configured in lib/activecampaign-field-mapping.ts
 */

import * as dotenv from "dotenv";
import * as path from "path";

// Load environment variables
dotenv.config({ path: path.join(__dirname, "../.env.production") });
dotenv.config({ path: path.join(__dirname, "../.env.local") });
dotenv.config({ path: path.join(__dirname, "../.env") });

const API_KEY = process.env.ACTIVECAMPAIGN_API_KEY;
const API_URL = process.env.ACTIVECAMPAIGN_API_URL;

if (!API_KEY || !API_URL) {
  console.error("❌ Error: Missing ActiveCampaign credentials");
  console.error("Required environment variables:");
  console.error("  - ACTIVECAMPAIGN_API_KEY");
  console.error("  - ACTIVECAMPAIGN_API_URL");
  process.exit(1);
}

interface TestResult {
  step: string;
  success: boolean;
  data?: any;
  error?: string;
}

const results: TestResult[] = [];

/**
 * Generate test contact email with timestamp
 */
function generateTestEmail(): string {
  const timestamp = Date.now();
  return `test+${timestamp}@topfinanzas.com`;
}

/**
 * Test Step 1: Create contact with field values
 */
async function testContactCreation(): Promise<string | null> {
  console.log("\n📝 Step 1: Creating contact with field values...");

  const testEmail = generateTestEmail();
  const timestamp = new Date().toISOString();

  const contactData = {
    contact: {
      email: testEmail,
      firstName: "Test",
      lastName: "User",
      phone: "+15551234567",
      fieldValues: [
        // NOTE: Replace these placeholder IDs with actual field IDs from ActiveCampaign
        { field: "FIELD_ID_PREFERENCE", value: "rewards" },
        { field: "FIELD_ID_PREFERENCE_TEXT", value: "Rewards and Cashback" },
        { field: "FIELD_ID_INCOME", value: "50000-75000" },
        { field: "FIELD_ID_INCOME_TEXT", value: "$50,000 - $75,000" },
        { field: "FIELD_ID_UTM_SOURCE", value: "test-script" },
        { field: "FIELD_ID_UTM_MEDIUM", value: "automated-test" },
        { field: "FIELD_ID_UTM_CAMPAIGN", value: "integration-test" },
        { field: "FIELD_ID_COUNTRY", value: "Estados Unidos" },
        { field: "FIELD_ID_BRAND", value: "Top Finanzas" },
        { field: "FIELD_ID_SOURCE", value: "quiz_campaign_test" },
        { field: "FIELD_ID_TIMESTAMP", value: timestamp },
      ],
    },
  };

  try {
    const response = await fetch(`${API_URL}/api/3/contacts`, {
      method: "POST",
      headers: {
        "Api-Token": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        `API Error: ${response.status} - ${JSON.stringify(responseData)}`,
      );
    }

    const contactId = responseData.contact?.id;
    console.log(`✅ Contact created successfully`);
    console.log(`   Contact ID: ${contactId}`);
    console.log(`   Email: ${testEmail}`);

    results.push({
      step: "Contact Creation",
      success: true,
      data: {
        contactId,
        email: testEmail,
        fieldValuesCount: contactData.contact.fieldValues.length,
      },
    });

    return contactId;
  } catch (error) {
    console.error(`❌ Contact creation failed: ${error}`);
    results.push({
      step: "Contact Creation",
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
    return null;
  }
}

/**
 * Test Step 2: Subscribe contact to TOP US list
 */
async function testListSubscription(contactId: string): Promise<boolean> {
  console.log("\n📋 Step 2: Subscribing contact to TOP US list (ID: 4)...");

  const contactListData = {
    contactList: {
      list: "4", // TOP US list ID
      contact: contactId,
      status: 1, // 1 = active/subscribed
    },
  };

  try {
    const response = await fetch(`${API_URL}/api/3/contactLists`, {
      method: "POST",
      headers: {
        "Api-Token": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactListData),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        `API Error: ${response.status} - ${JSON.stringify(responseData)}`,
      );
    }

    const contactListId = responseData.contactList?.id;
    console.log(`✅ Contact subscribed to list successfully`);
    console.log(`   Contact List ID: ${contactListId}`);
    console.log(`   List ID: 4 (TOP US)`);

    results.push({
      step: "List Subscription",
      success: true,
      data: {
        contactListId,
        listId: "4",
        status: "subscribed",
      },
    });

    return true;
  } catch (error) {
    console.error(`❌ List subscription failed: ${error}`);
    results.push({
      step: "List Subscription",
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
    return false;
  }
}

/**
 * Test Step 3: Verify contact data
 */
async function testContactVerification(contactId: string): Promise<boolean> {
  console.log("\n🔍 Step 3: Verifying contact data...");

  try {
    const response = await fetch(`${API_URL}/api/3/contacts/${contactId}`, {
      method: "GET",
      headers: {
        "Api-Token": API_KEY,
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        `API Error: ${response.status} - ${JSON.stringify(responseData)}`,
      );
    }

    const contact = responseData.contact;
    console.log(`✅ Contact data retrieved successfully`);
    console.log(`   Email: ${contact.email}`);
    console.log(`   Name: ${contact.firstName} ${contact.lastName}`);
    console.log(`   Phone: ${contact.phone || "N/A"}`);

    // Get field values
    const fieldValuesResponse = await fetch(
      `${API_URL}/api/3/contacts/${contactId}/fieldValues`,
      {
        method: "GET",
        headers: {
          "Api-Token": API_KEY,
          "Content-Type": "application/json",
        },
      },
    );

    const fieldValuesData = await fieldValuesResponse.json();

    if (fieldValuesResponse.ok) {
      const fieldValues = fieldValuesData.fieldValues || [];
      console.log(`   Field Values: ${fieldValues.length} populated`);

      if (fieldValues.length > 0) {
        console.log("\n   Field Value Details:");
        fieldValues.forEach((fv: any) => {
          console.log(`   - Field ${fv.field}: ${fv.value}`);
        });
      }
    }

    results.push({
      step: "Contact Verification",
      success: true,
      data: {
        contact,
        fieldValuesCount: fieldValuesData.fieldValues?.length || 0,
      },
    });

    return true;
  } catch (error) {
    console.error(`❌ Contact verification failed: ${error}`);
    results.push({
      step: "Contact Verification",
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
    return false;
  }
}

/**
 * Test Step 4: Verify list membership
 */
async function testListMembership(contactId: string): Promise<boolean> {
  console.log("\n📊 Step 4: Verifying list membership...");

  try {
    const response = await fetch(
      `${API_URL}/api/3/contacts/${contactId}/contactLists`,
      {
        method: "GET",
        headers: {
          "Api-Token": API_KEY,
          "Content-Type": "application/json",
        },
      },
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        `API Error: ${response.status} - ${JSON.stringify(responseData)}`,
      );
    }

    const contactLists = responseData.contactLists || [];
    const topUsMembership = contactLists.find((cl: any) => cl.list === "4");

    if (topUsMembership) {
      console.log(`✅ Contact is member of TOP US list`);
      console.log(
        `   Status: ${topUsMembership.status === 1 ? "Active" : "Unsubscribed"}`,
      );
      console.log(`   Subscription Date: ${topUsMembership.sdate}`);

      results.push({
        step: "List Membership Verification",
        success: true,
        data: {
          isMember: true,
          status: topUsMembership.status,
          subscriptionDate: topUsMembership.sdate,
        },
      });

      return true;
    } else {
      console.error(`❌ Contact is NOT a member of TOP US list`);
      console.log(`   Found ${contactLists.length} list memberships:`);
      contactLists.forEach((cl: any) => {
        console.log(`   - List ${cl.list}`);
      });

      results.push({
        step: "List Membership Verification",
        success: false,
        error: "Contact not found in TOP US list (ID: 4)",
      });

      return false;
    }
  } catch (error) {
    console.error(`❌ List membership verification failed: ${error}`);
    results.push({
      step: "List Membership Verification",
      success: false,
      error: error instanceof Error ? error.message : String(error),
    });
    return false;
  }
}

/**
 * Print test summary
 */
function printSummary() {
  console.log("\n" + "=".repeat(60));
  console.log("📊 TEST SUMMARY");
  console.log("=".repeat(60));

  const totalTests = results.length;
  const passedTests = results.filter((r) => r.success).length;
  const failedTests = totalTests - passedTests;

  results.forEach((result, index) => {
    const icon = result.success ? "✅" : "❌";
    console.log(`\n${index + 1}. ${icon} ${result.step}`);
    if (result.success && result.data) {
      console.log(`   ${JSON.stringify(result.data, null, 2)}`);
    }
    if (!result.success && result.error) {
      console.log(`   Error: ${result.error}`);
    }
  });

  console.log("\n" + "=".repeat(60));
  console.log(`Total Tests: ${totalTests}`);
  console.log(`Passed: ${passedTests}`);
  console.log(`Failed: ${failedTests}`);
  console.log("=".repeat(60));

  if (failedTests > 0) {
    console.log("\n⚠️  Some tests failed. Please review the errors above.");
    console.log("\nCommon issues:");
    console.log(
      "1. Field IDs not configured correctly in lib/activecampaign-field-mapping.ts",
    );
    console.log("2. TOP US list ID is not '4' in your ActiveCampaign account");
    console.log("3. API credentials are invalid or expired");
    console.log("4. Contact automation rules not configured");
  } else {
    console.log(
      "\n🎉 All tests passed! ActiveCampaign integration is working correctly.",
    );
  }
}

/**
 * Main test execution
 */
async function main() {
  console.log("🚀 Starting ActiveCampaign Integration Tests");
  console.log("=".repeat(60));
  console.log(`API URL: ${API_URL}`);
  console.log(`API Key: ${API_KEY.substring(0, 10)}...`);
  console.log("=".repeat(60));

  // Step 1: Create contact
  const contactId = await testContactCreation();
  if (!contactId) {
    console.error("\n❌ Cannot proceed without contact ID");
    printSummary();
    process.exit(1);
  }

  // Step 2: Subscribe to list
  await testListSubscription(contactId);

  // Step 3: Verify contact data
  await testContactVerification(contactId);

  // Step 4: Verify list membership
  await testListMembership(contactId);

  // Print summary
  printSummary();

  // Exit with appropriate code
  const hasFailures = results.some((r) => !r.success);
  process.exit(hasFailures ? 1 : 0);
}

// Run tests
main().catch((error) => {
  console.error("\n💥 Unexpected error:", error);
  process.exit(1);
});
