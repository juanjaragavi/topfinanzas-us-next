/**
 * ActiveCampaign Field Mapping Configuration
 *
 * This file maps quiz form fields to ActiveCampaign custom field IDs.
 * Field IDs are specific to the ActiveCampaign account and must match
 * exactly for proper data transmission and list assignment automation.
 *
 * Reference: ActiveCampaign Contact Screenshots (activecampaign-contact-view-screenshot-1.png to 5.png)
 */

/**
 * TOP US List Configuration
 * List ID: 4
 * Description: Main list for US quiz submissions
 */
export const TOP_US_LIST_ID = "4";

/**
 * ActiveCampaign Custom Field IDs
 * These IDs are retrieved from the ActiveCampaign account configuration.
 * To update: ActiveCampaign Dashboard > Contacts > Manage Fields
 *
 * CRITICAL: These field IDs MUST match the ActiveCampaign account configuration
 * for automation filters to trigger properly and assign contacts to lists.
 */
export const AC_FIELD_IDS = {
  // Quiz Response Fields
  PREFERENCE: "FIELD_ID_PREFERENCE", // User preference selection
  PREFERENCE_TEXT: "FIELD_ID_PREFERENCE_TEXT", // Human-readable preference
  INCOME: "FIELD_ID_INCOME", // Income range selection
  INCOME_TEXT: "FIELD_ID_INCOME_TEXT", // Human-readable income range

  // Campaign Tracking Fields
  UTM_SOURCE: "FIELD_ID_UTM_SOURCE",
  UTM_MEDIUM: "FIELD_ID_UTM_MEDIUM",
  UTM_CAMPAIGN: "FIELD_ID_UTM_CAMPAIGN",
  UTM_TERM: "FIELD_ID_UTM_TERM",
  UTM_CONTENT: "FIELD_ID_UTM_CONTENT",

  // Metadata Fields
  COUNTRY: "FIELD_ID_COUNTRY", // Static: "Estados Unidos"
  BRAND: "FIELD_ID_BRAND", // Static: "Top Finanzas"
  SOURCE: "FIELD_ID_SOURCE", // Form source identifier
  TIMESTAMP: "FIELD_ID_TIMESTAMP", // Submission timestamp

  // Additional Tracking (if needed)
  QUIZ_TARJETAS: "FIELD_ID_QUIZ_TARJETAS", // From screenshot: "Quiz Tarjetas"
} as const;

/**
 * Field value mappers
 */
export const mapQuizDataToFieldValues = (data: {
  preference?: string;
  preferenceText?: string;
  income?: string;
  incomeText?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  country?: string;
  brand?: string;
  source?: string;
  timestamp?: string;
}) => {
  const fieldValues: Array<{ field: string; value: string }> = [];

  // Quiz response fields
  if (data.preference) {
    fieldValues.push({
      field: AC_FIELD_IDS.PREFERENCE,
      value: data.preference,
    });
  }
  if (data.preferenceText) {
    fieldValues.push({
      field: AC_FIELD_IDS.PREFERENCE_TEXT,
      value: data.preferenceText,
    });
  }
  if (data.income) {
    fieldValues.push({
      field: AC_FIELD_IDS.INCOME,
      value: data.income,
    });
  }
  if (data.incomeText) {
    fieldValues.push({
      field: AC_FIELD_IDS.INCOME_TEXT,
      value: data.incomeText,
    });
  }

  // UTM tracking fields
  if (data.utm_source) {
    fieldValues.push({
      field: AC_FIELD_IDS.UTM_SOURCE,
      value: data.utm_source,
    });
  }
  if (data.utm_medium) {
    fieldValues.push({
      field: AC_FIELD_IDS.UTM_MEDIUM,
      value: data.utm_medium,
    });
  }
  if (data.utm_campaign) {
    fieldValues.push({
      field: AC_FIELD_IDS.UTM_CAMPAIGN,
      value: data.utm_campaign,
    });
  }
  if (data.utm_term) {
    fieldValues.push({
      field: AC_FIELD_IDS.UTM_TERM,
      value: data.utm_term,
    });
  }
  if (data.utm_content) {
    fieldValues.push({
      field: AC_FIELD_IDS.UTM_CONTENT,
      value: data.utm_content,
    });
  }

  // Metadata fields
  if (data.country) {
    fieldValues.push({
      field: AC_FIELD_IDS.COUNTRY,
      value: data.country,
    });
  }
  if (data.brand) {
    fieldValues.push({
      field: AC_FIELD_IDS.BRAND,
      value: data.brand,
    });
  }
  if (data.source) {
    fieldValues.push({
      field: AC_FIELD_IDS.SOURCE,
      value: data.source,
    });
  }
  if (data.timestamp) {
    fieldValues.push({
      field: AC_FIELD_IDS.TIMESTAMP,
      value: data.timestamp,
    });
  }

  return fieldValues;
};

/**
 * IMPORTANT SETUP INSTRUCTIONS:
 *
 * 1. Get Field IDs from ActiveCampaign:
 *    - Log in to ActiveCampaign
 *    - Go to Contacts > Manage Fields
 *    - Click on each custom field
 *    - Note the field ID from the URL (e.g., /admin/main.php?action=fields&fieldid=123)
 *    - Update AC_FIELD_IDS with the correct IDs
 *
 * 2. Verify List Configuration:
 *    - Go to Contacts > Lists
 *    - Confirm "TOP US" list exists with ID 4
 *    - Check automation rules are configured to assign contacts based on field values
 *
 * 3. Test Field Mapping:
 *    - Use npm run test:brevo to verify field transmission
 *    - Check ActiveCampaign contact record shows all custom fields populated
 *    - Verify contact is automatically added to TOP US list (ID 4)
 */
