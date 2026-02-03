# Getting ActiveCampaign Field IDs - Quick Guide

## Overview

This guide provides step-by-step instructions for retrieving custom field IDs from your ActiveCampaign account. These IDs are required to complete the field mapping configuration in `lib/activecampaign-field-mapping.ts`.

## Prerequisites

- Access to ActiveCampaign dashboard
- Admin or user permissions to view custom fields
- Access to browser developer tools (optional)

## Method 1: Via ActiveCampaign Dashboard (Recommended)

### Step 1: Login to ActiveCampaign

1. Navigate to your ActiveCampaign account URL

   ```
   https://YOUR_ACCOUNT.activehosted.com
   ```

2. Login with your credentials

### Step 2: Access Custom Fields

1. Click **Contacts** in the left sidebar
2. Click **Manage Fields** (or **Settings** → **Manage Fields**)
3. You should see a list of all custom fields

### Step 3: Get Each Field ID

1. Click on a custom field name in the list
2. Look at the browser URL bar
3. The URL will look like:
   ```
   https://YOUR_ACCOUNT.activehosted.com/admin/main.php?action=fields&fieldid=123
   ```
4. The number after `fieldid=` is the field ID (e.g., `123`)

### Step 4: Document Field IDs

Create a table like this:

| Field Name           | Field ID | Field Type | Purpose                   |
| -------------------- | -------- | ---------- | ------------------------- |
| Quiz Preference      | 15       | text       | User preference selection |
| Quiz Preference Text | 16       | text       | Human-readable preference |
| Quiz Income          | 17       | text       | Income range selection    |
| Quiz Income Text     | 18       | text       | Human-readable income     |
| utm_source           | 19       | text       | UTM tracking              |
| utm_medium           | 20       | text       | UTM tracking              |
| utm_campaign         | 21       | text       | UTM tracking              |
| utm_term             | 22       | text       | UTM tracking              |
| utm_content          | 23       | text       | UTM tracking              |
| Pais                 | 24       | text       | Country                   |
| Marca                | 25       | text       | Brand                     |
| Source               | 26       | text       | Form source               |
| Timestamp            | 27       | datetime   | Submission time           |
| Quiz Tarjetas        | 28       | text       | Optional tracking         |

### Step 5: Update Configuration File

1. Open `lib/activecampaign-field-mapping.ts`
2. Replace placeholder IDs with actual IDs from your table:

```typescript
export const AC_FIELD_IDS = {
  PREFERENCE: "15", // Replace with actual ID
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

## Method 2: Via ActiveCampaign API

### Using curl

```bash
curl --request GET \
  --url https://YOUR_ACCOUNT.api-us1.com/api/3/fields \
  --header 'Api-Token: YOUR_API_KEY' \
  --header 'accept: application/json'
```

### Response Format

```json
{
  "fields": [
    {
      "id": "15",
      "title": "Quiz Preference",
      "type": "text",
      "perstag": "QUIZ_PREFERENCE",
      "descript": "User preference selection",
      "visible": "1",
      ...
    },
    {
      "id": "16",
      "title": "Quiz Preference Text",
      "type": "text",
      ...
    }
  ],
  "meta": {
    "total": "20"
  }
}
```

### Parsing the Response

1. Look for the `"id"` field in each object
2. Match the `"title"` with your field names
3. Note the `"type"` to ensure compatibility
4. Document in your table

## Method 3: Via Browser Developer Tools

### Step 1: Open Developer Tools

1. Go to ActiveCampaign → Contacts
2. Click on any contact with custom fields populated
3. Press `F12` (Windows/Linux) or `Cmd+Option+I` (Mac)

### Step 2: Inspect Field Elements

1. Click the **Elements** tab in DevTools
2. Find the custom fields section in the HTML
3. Look for attributes like:
   ```html
   <div data-field-id="15">Quiz Preference</div>
   ```
4. The `data-field-id` value is the field ID

### Step 3: Use Console for Bulk Extraction

```javascript
// Run in browser console on contact view page
const fields = document.querySelectorAll("[data-field-id]");
const fieldMap = {};
fields.forEach((field) => {
  const id = field.getAttribute("data-field-id");
  const name = field.textContent.trim();
  fieldMap[name] = id;
});
console.table(fieldMap);
```

## Verification Steps

### After Configuration

1. **Save the configuration file**

   ```typescript
   // lib/activecampaign-field-mapping.ts
   export const AC_FIELD_IDS = {
     PREFERENCE: "15", // YOUR ACTUAL IDs
     PREFERENCE_TEXT: "16",
     // ... rest of fields
   } as const;
   ```

2. **Run integration test**

   ```bash
   npm run test:activecampaign
   ```

3. **Check test results**
   - Contact created successfully ✅
   - Field values populated ✅
   - Subscribed to TOP US list ✅
   - Field verification passed ✅

4. **Verify in ActiveCampaign dashboard**
   - Search for test contact
   - Check all custom fields show values
   - Confirm contact in TOP US list

## Common Field Names in ActiveCampaign

Based on the screenshots, here are the likely field names in your ActiveCampaign account:

### Quiz-Related Fields

- `Quiz Preference` or `QUIZ_PREFERENCE`
- `Quiz Preference Text` or `PREFERENCE_TEXT`
- `Quiz Income` or `INCOME`
- `Quiz Income Text` or `INCOME_TEXT`
- `Quiz Tarjetas` or `QUIZ_TARJETAS`

### Tracking Fields

- `utm_source` or `UTM Source`
- `utm_medium` or `UTM Medium`
- `utm_campaign` or `UTM Campaign`
- `utm_term` or `UTM Term`
- `utm_content` or `UTM Content`

### Metadata Fields

- `Pais` (Country in Spanish)
- `Marca` (Brand in Spanish)
- `Source` or `Form Source`
- `Timestamp` or `Submission Date`

## Field ID Format

ActiveCampaign field IDs are:

- **Integers**: Whole numbers (e.g., `15`, `123`, `1`)
- **Strings in API**: Must be strings in JSON (e.g., `"15"`)
- **Sequential**: Generally assigned sequentially
- **Unique**: Each field has a unique ID per account

## Troubleshooting

### Field Not Found

**Problem**: Can't find a specific field in the dashboard

**Solutions**:

1. Check if field exists in **Settings** → **Manage Fields**
2. Search for field by name in the list
3. Create missing field if needed:
   - Click **Add Custom Field**
   - Select field type (text, date, etc.)
   - Enter field title
   - Save and note the new field ID

### Field ID Not Visible

**Problem**: URL doesn't show `fieldid` parameter

**Solutions**:

1. Try clicking **Edit** instead of the field name
2. Use Method 2 (API) or Method 3 (DevTools)
3. Contact ActiveCampaign support for assistance

### Multiple Fields with Similar Names

**Problem**: Unsure which field ID corresponds to which purpose

**Solutions**:

1. Check field descriptions in dashboard
2. View field values on existing contacts
3. Look at `perstag` in API response for unique identifiers
4. Rename fields in ActiveCampaign for clarity

## Example Configuration

### Sample Field Mapping

Based on typical ActiveCampaign configuration:

```typescript
export const AC_FIELD_IDS = {
  // Quiz Response Fields (IDs 15-18)
  PREFERENCE: "15",
  PREFERENCE_TEXT: "16",
  INCOME: "17",
  INCOME_TEXT: "18",

  // UTM Tracking Fields (IDs 19-23)
  UTM_SOURCE: "19",
  UTM_MEDIUM: "20",
  UTM_CAMPAIGN: "21",
  UTM_TERM: "22",
  UTM_CONTENT: "23",

  // Metadata Fields (IDs 24-27)
  COUNTRY: "24",
  BRAND: "25",
  SOURCE: "26",
  TIMESTAMP: "27",

  // Optional Fields (ID 28+)
  QUIZ_TARJETAS: "28",
} as const;
```

## Next Steps

After retrieving and configuring field IDs:

1. ✅ Update `lib/activecampaign-field-mapping.ts`
2. ✅ Run `npm run test:activecampaign`
3. ✅ Test quiz form submission
4. ✅ Verify contact in ActiveCampaign
5. ✅ Check TOP US list membership
6. ✅ Deploy to production

## Support Resources

- **ActiveCampaign Help**: https://help.activecampaign.com/
- **API Documentation**: https://developers.activecampaign.com/reference/overview
- **Field Guide**: https://developers.activecampaign.com/reference/create-a-contact-custom-field

---

**Need Help?**

If you encounter issues retrieving field IDs:

1. Check ActiveCampaign status page
2. Review API authentication
3. Contact ActiveCampaign support
4. Consult this project's documentation in `/docs/`
