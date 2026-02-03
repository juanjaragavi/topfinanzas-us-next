# ActiveCampaign Field Mapping Configuration

## Overview

This document provides comprehensive instructions for configuring ActiveCampaign field mapping to ensure quiz form submissions are properly assigned to the TOP US list (List ID: 4).

## Problem Summary

Quiz form submissions were successfully creating contacts in ActiveCampaign but failing to populate the TOP US list because:

1. **Missing Field Values**: Custom field values were not being transmitted in the API payload
2. **Missing List Assignment**: No `contactList` API call was being made to subscribe contacts
3. **Incorrect Field IDs**: Placeholder field IDs need to be replaced with actual ActiveCampaign field IDs

## Solution Architecture

The implementation follows a two-step process:

### Step 1: Create Contact with Field Values

```typescript
POST /api/3/contacts
{
  "contact": {
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+1234567890",
    "fieldValues": [
      { "field": "FIELD_ID", "value": "field_value" },
      // ... more field values
    ]
  }
}
```

### Step 2: Subscribe Contact to List

```typescript
POST /api/3/contactLists
{
  "contactList": {
    "list": "4",  // TOP US list ID
    "contact": "CONTACT_ID",  // From step 1 response
    "status": 1  // 1 = active/subscribed
  }
}
```

## Field Mapping Configuration

### Required Custom Fields

Based on the ActiveCampaign contact screenshots, the following custom fields are used:

| Field Purpose    | Field Name (Example)   | Data Type | Required |
| ---------------- | ---------------------- | --------- | -------- |
| User Preference  | `Quiz Preference`      | Text      | Yes      |
| Preference Label | `Quiz Preference Text` | Text      | Yes      |
| Income Range     | `Quiz Income`          | Text      | Yes      |
| Income Label     | `Quiz Income Text`     | Text      | Yes      |
| UTM Source       | `utm_source`           | Text      | No       |
| UTM Medium       | `utm_medium`           | Text      | No       |
| UTM Campaign     | `utm_campaign`         | Text      | No       |
| UTM Term         | `utm_term`             | Text      | No       |
| UTM Content      | `utm_content`          | Text      | No       |
| Country          | `Pais`                 | Text      | Yes      |
| Brand            | `Marca`                | Text      | Yes      |
| Source           | `Source`               | Text      | Yes      |
| Timestamp        | `Timestamp`            | DateTime  | Yes      |
| Quiz Tarjetas    | `Quiz Tarjetas`        | Text      | Optional |

### Field ID Mapping

Field IDs are unique identifiers assigned by ActiveCampaign. They must be retrieved from your ActiveCampaign account.

**Location**: `lib/activecampaign-field-mapping.ts`

```typescript
export const AC_FIELD_IDS = {
  PREFERENCE: "FIELD_ID_PREFERENCE", // REPLACE WITH ACTUAL ID
  PREFERENCE_TEXT: "FIELD_ID_PREFERENCE_TEXT",
  INCOME: "FIELD_ID_INCOME",
  INCOME_TEXT: "FIELD_ID_INCOME_TEXT",
  UTM_SOURCE: "FIELD_ID_UTM_SOURCE",
  UTM_MEDIUM: "FIELD_ID_UTM_MEDIUM",
  UTM_CAMPAIGN: "FIELD_ID_UTM_CAMPAIGN",
  UTM_TERM: "FIELD_ID_UTM_TERM",
  UTM_CONTENT: "FIELD_ID_UTM_CONTENT",
  COUNTRY: "FIELD_ID_COUNTRY",
  BRAND: "FIELD_ID_BRAND",
  SOURCE: "FIELD_ID_SOURCE",
  TIMESTAMP: "FIELD_ID_TIMESTAMP",
  QUIZ_TARJETAS: "FIELD_ID_QUIZ_TARJETAS",
} as const;
```

## Getting Field IDs from ActiveCampaign

### Method 1: Via ActiveCampaign Dashboard (Recommended)

1. **Login to ActiveCampaign**
   - Navigate to your ActiveCampaign account
   - URL format: `https://YOUR_ACCOUNT.activehosted.com`

2. **Access Custom Fields**
   - Click **Contacts** in the left sidebar
   - Click **Manage Fields** (or **Settings** > **Manage Fields**)

3. **Get Field IDs**
   - Click on each custom field in the list
   - Look at the browser URL bar
   - The field ID appears as: `/admin/main.php?action=fields&fieldid=123`
   - The number `123` is the field ID

4. **Document Field IDs**
   - Create a spreadsheet or note with:
     - Field Name
     - Field ID
     - Field Type
     - Purpose

### Method 2: Via ActiveCampaign API

```bash
# List all custom fields
curl --request GET \
  --url https://YOUR_ACCOUNT.api-us1.com/api/3/fields \
  --header 'Api-Token: YOUR_API_KEY'
```

Response format:

```json
{
  "fields": [
    {
      "id": "1",
      "title": "Quiz Preference",
      "type": "text",
      "perstag": "QUIZ_PREFERENCE",
      ...
    }
  ]
}
```

### Method 3: Inspect Existing Contact

1. Go to **Contacts** > Select any contact with populated custom fields
2. Click on the contact to view details
3. Scroll to custom fields section
4. Right-click > **Inspect Element** (Chrome DevTools)
5. Look for `data-field-id` attributes in the HTML

## Configuration Steps

### Step 1: Update Field IDs

Edit `lib/activecampaign-field-mapping.ts`:

```typescript
export const AC_FIELD_IDS = {
  PREFERENCE: "15", // Replace with actual ID from your account
  PREFERENCE_TEXT: "16",
  INCOME: "17",
  INCOME_TEXT: "18",
  UTM_SOURCE: "19",
  UTM_MEDIUM: "20",
  UTM_CAMPAIGN: "21",
  UTM_TERM: "22",
  UTM_CONTENT: "23",
  COUNTRY: "24",
  BRAND: "25",
  SOURCE: "26",
  TIMESTAMP: "27",
  QUIZ_TARJETAS: "28",
} as const;
```

### Step 2: Verify List Configuration

1. Go to **Contacts** > **Lists**
2. Find "TOP US" list
3. Verify the list ID is `4`
4. If different, update `TOP_US_LIST_ID` in `lib/activecampaign-field-mapping.ts`

### Step 3: Configure Automation Filters

For automatic list assignment based on field values:

1. Go to **Automations** > **Create Automation**
2. Set trigger: **Contact submits a form** OR **Contact field changes**
3. Add conditions:
   - Field `Marca` = "Top Finanzas"
   - Field `Pais` = "Estados Unidos"
   - Field `Source` contains "quiz"
4. Add action: **Subscribe to list** > Select "TOP US"

### Step 4: Test Implementation

#### Manual Testing

1. **Submit Quiz Form**:

   ```bash
   # Navigate to quiz page
   https://us.topfinanzas.com/campaign-quiz-credit-card-recommender
   ```

2. **Fill out all steps**:
   - Step 1: Select preference
   - Step 2: Select income range
   - Step 3: Enter email, name, phone

3. **Submit form**

4. **Verify in ActiveCampaign**:
   - Go to **Contacts**
   - Search for the email address
   - Check contact appears in **TOP US** list
   - Verify all custom fields are populated

#### Automated Testing

Run the included test script:

```bash
npm run test:activecampaign
```

This will:

- Create a test contact
- Populate all field values
- Subscribe to TOP US list
- Verify list membership
- Log results

## Field Value Examples

### Quiz Data Payload

```typescript
{
  email: "johndoe@example.com",
  firstName: "John",
  lastName: "Doe",
  phone: "+15551234567",
  preference: "rewards",
  preferenceText: "Rewards and Cashback",
  income: "50000-75000",
  incomeText: "$50,000 - $75,000",
  utm_source: "google",
  utm_medium: "cpc",
  utm_campaign: "credit-card-quiz-2024",
  utm_term: "best credit cards",
  utm_content: "ad-variant-a",
  country: "Estados Unidos",
  brand: "Top Finanzas",
  source: "quiz_campaign",
  timestamp: "2024-01-15T10:30:00Z"
}
```

### Expected ActiveCampaign Payload

```json
{
  "contact": {
    "email": "johndoe@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "+15551234567",
    "fieldValues": [
      { "field": "15", "value": "rewards" },
      { "field": "16", "value": "Rewards and Cashback" },
      { "field": "17", "value": "50000-75000" },
      { "field": "18", "value": "$50,000 - $75,000" },
      { "field": "19", "value": "google" },
      { "field": "20", "value": "cpc" },
      { "field": "21", "value": "credit-card-quiz-2024" },
      { "field": "22", "value": "best credit cards" },
      { "field": "23", "value": "ad-variant-a" },
      { "field": "24", "value": "Estados Unidos" },
      { "field": "25", "value": "Top Finanzas" },
      { "field": "26", "value": "quiz_campaign" },
      { "field": "27", "value": "2024-01-15T10:30:00Z" }
    ]
  }
}
```

## Troubleshooting

### Issue: Contacts Not Appearing in TOP US List

**Possible Causes**:

1. Incorrect list ID
2. Missing field values required by automation filters
3. Automation not active
4. List subscription API call failing

**Solution**:

1. Verify `TOP_US_LIST_ID = "4"` in configuration
2. Check all required fields are being sent
3. Enable automation in ActiveCampaign dashboard
4. Check API logs for list subscription errors

### Issue: Custom Fields Not Populating

**Possible Causes**:

1. Incorrect field IDs in configuration
2. Field values not being sent in API request
3. Field type mismatch (e.g., sending text to date field)

**Solution**:

1. Verify field IDs match ActiveCampaign configuration
2. Check browser DevTools Network tab for API payload
3. Ensure field value formats match field types

### Issue: Duplicate Contacts Created

**Possible Causes**:

1. ActiveCampaign duplicate detection not enabled
2. Email normalization issues (case sensitivity)

**Solution**:

1. Enable duplicate detection in ActiveCampaign settings
2. Ensure emails are lowercased: `email.trim().toLowerCase()`

## API Endpoints Used

### Contact Creation

- **Endpoint**: `POST /api/3/contacts`
- **Auth**: Header `Api-Token: YOUR_API_KEY`
- **Documentation**: https://developers.activecampaign.com/reference/create-a-new-contact

### List Subscription

- **Endpoint**: `POST /api/3/contactLists`
- **Auth**: Header `Api-Token: YOUR_API_KEY`
- **Documentation**: https://developers.activecampaign.com/reference/update-list-status-for-contact

### Field Management

- **Endpoint**: `GET /api/3/fields`
- **Auth**: Header `Api-Token: YOUR_API_KEY`
- **Documentation**: https://developers.activecampaign.com/reference/retrieve-fields

## Environment Variables

Required in `.env.production`:

```bash
ACTIVECAMPAIGN_API_KEY=your_api_key_here
ACTIVECAMPAIGN_API_URL=https://YOUR_ACCOUNT.api-us1.com
```

## Related Files

- `/app/api/activecampaign/route.ts` - API route handler
- `/lib/activecampaign-field-mapping.ts` - Field mapping configuration
- `/app/campaign-quiz-credit-card-recommender/page.tsx` - Long quiz form
- `/app/campaign-quiz-credit-card-recommender-short/page.tsx` - Short quiz form

## Additional Resources

- [ActiveCampaign API Documentation](https://developers.activecampaign.com/reference/overview)
- [Custom Fields API Guide](https://developers.activecampaign.com/reference/contact-custom-fields-api-guide)
- [List Management Guide](https://developers.activecampaign.com/reference/lists)

## Support

For ActiveCampaign-specific issues:

- ActiveCampaign Support: https://help.activecampaign.com/
- API Status: https://status.activecampaign.com/

For implementation issues:

- Check API logs in production: `/var/log/nextjs/`
- Review browser console for client-side errors
- Test API endpoint directly: `POST /api/activecampaign`
