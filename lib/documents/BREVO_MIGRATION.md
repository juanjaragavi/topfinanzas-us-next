# Brevo API Integration Migration Guide

## Overview

This document outlines the migration from Kit.com to Brevo as the marketing automation provider for the UK TopFinanzas project. The migration maintains all essential data collection while adapting to Brevo's API structure.

## What Changed

### API Endpoint: `/app/api/subscribe/route.ts`

- **Previous**: Kit.com API integration
- **Current**: Brevo API integration
- **Compatibility**: Fully backward compatible - accepts the same request format from the frontend

## Key Features

### 1. Dynamic External ID Generation

Each contact receives a unique external ID for tracking:

```javascript
const timestamp = Math.floor(Date.now() / 1000);
const extId = `topfinanzas-uk-${timestamp}`;
// Example: topfinanzas-uk-1759870873
```

### 2. Required Attributes

Every contact submission includes:

- **FIRSTNAME**: User's first name
- **LASTNAME**: User's last name (extracted from fields)
- **COUNTRIES**: Fixed value "United Kingdom"
- **Email**: Primary identifier

### 3. Marketing Data Preservation

The integration preserves all critical marketing and user data:

#### Financial Information

- `INCOME`: Monthly income range
- `CARD_PREFERENCE`: Credit card preference type

#### Location & Brand

- `PAIS`: Country (Reino Unido)
- `MARCA`: Brand (Top Finanzas)

#### Campaign Attribution

- `UTM_SOURCE`: Traffic source
- `UTM_MEDIUM`: Marketing medium
- `UTM_CAMPAIGN`: Campaign name
- `UTM_TERM`: Keyword term
- `UTM_CONTENT`: Ad content variation

#### Compliance & Tracking

- `CONSENT`: Data policy acceptance flag
- `DATE_CREATED`: Submission timestamp
- `QUIZ_TARJETAS`: Quiz participation flag

### 4. List Assignment

Contacts are automatically added to:

- **List ID 9**: UK TopFinanzas contact list

## API Request Format

### Incoming Request (from Frontend)

```json
{
  "email_address": "user@example.com",
  "first_name": "John",
  "state": "active",
  "fields": {
    "last_name": "Smith",
    "cual_es_tu_ingreso_mensual": "£2,000 - £3,000",
    "que_es_lo_que_mas_importante_en_una_tarjeta_de_credito": "Cashback",
    "pais": "Reino Unido",
    "marca": "Top Finanzas",
    "quiz_tarjetas": "SI",
    "acepto_politicas_de_tratamiento_de_datos_y_terminos_y_condiciones": "1",
    "date_created": "2025-01-07T12:00:00.000Z",
    "utm_source": "google",
    "utm_medium": "cpc",
    "utm_campaign": "uk-cards-q1"
  }
}
```

### Outgoing Request (to Brevo)

```json
{
  "email": "user@example.com",
  "attributes": {
    "FIRSTNAME": "John",
    "LASTNAME": "Smith",
    "COUNTRIES": "United Kingdom",
    "INCOME": "£2,000 - £3,000",
    "CARD_PREFERENCE": "Cashback",
    "PAIS": "Reino Unido",
    "MARCA": "Top Finanzas",
    "QUIZ_TARJETAS": "SI",
    "CONSENT": "1",
    "DATE_CREATED": "2025-01-07T12:00:00.000Z",
    "UTM_SOURCE": "google",
    "UTM_MEDIUM": "cpc",
    "UTM_CAMPAIGN": "uk-cards-q1"
  },
  "ext_id": "topfinanzas-uk-1704628800",
  "updateEnabled": false,
  "listIds": [9]
}
```

## Environment Variables

### Required Configuration

Add to your `.env.local` or `.env.production`:

```bash
BREVO_API_KEY=your_brevo_api_key_here
```

### Previous Variables (No Longer Used)

```bash
# These can be removed:
# KIT_API_KEY
# KIT_API_URL
```

## Testing

### 1. Direct API Test

Tests the Brevo API directly without requiring the Next.js server:

```bash
node scripts/test-brevo-direct.js
```

**What it does:**

- Sends a test contact directly to Brevo API
- Uses environment variables from `.env.local`
- Validates API key and payload format
- Reports success or error details

### 2. Next.js API Route Test

Tests the complete integration through your Next.js API:

```bash
# In one terminal, start your dev server:
pnpm dev

# In another terminal, run the test:
node scripts/test-brevo-integration.js
```

**What it does:**

- Sends request through `/api/subscribe` endpoint
- Tests the complete request/response flow
- Validates data transformation
- Confirms end-to-end functionality

## Error Handling

### Duplicate Contacts

If a contact with the same email already exists:

```json
{
  "code": "duplicate_parameter",
  "message": "Unable to create contact, email is already associated with another Contact"
}
```

**Behavior**: This is expected and handled gracefully. The frontend continues normally.

### Invalid API Key

```json
{
  "code": "unauthorized",
  "message": "Key not found"
}
```

**Solution**: Verify `BREVO_API_KEY` is correctly set in environment variables.

### Missing Required Fields

```json
{
  "error": "Email and first name are required"
}
```

**Solution**: Ensure frontend sends both `email_address` and `first_name`.

## Frontend Compatibility

### No Changes Required

The frontend code in `components/credit-card-form.tsx` requires **NO modifications**. The existing Kit.com payload format is automatically transformed to Brevo format by the API route.

### Submission Flow

1. User completes Step 3 form (email + first name)
2. Form data sent to `/api/subscribe` with Kit.com format
3. API route transforms data to Brevo format
4. Contact created in Brevo with unique `ext_id`
5. Success/error response returned to frontend

## Monitoring & Verification

### Brevo Dashboard

Monitor contacts at: <https://app.brevo.com/contact/list/9>

### Console Logs

Success log format:

```markdown
[Brevo API] Contact created successfully: {
email: 'user@example.com',
ext_id: 'topfinanzas-uk-1704628800'
}
```

Error log format:

```markdown
[Brevo API] Error response: { code: 'error_code', message: 'Error details' }
```

## Migration Checklist

- [✅] Update `/app/api/subscribe/route.ts` with Brevo integration
- [✅] Add `BREVO_API_KEY` to environment variables
- [✅] Create test scripts for validation
- [✅] Test direct API connection
- [✅] Test through Next.js API route
- [✅] Verify contacts appear in Brevo dashboard
- [✅] Confirm `ext_id` format is correct
- [✅] Validate all attributes are captured
- [✅] Test error handling scenarios
- [ ] Remove old Kit.com environment variables (optional cleanup)
- [ ] Update production environment with `BREVO_API_KEY`
- [ ] Monitor first production submissions

## Support & Troubleshooting

### Common Issues

1. **"Brevo API key is not configured"**
   - Check `.env.local` has `BREVO_API_KEY`
   - Restart development server after adding variable

2. **"Contact already exists"**
   - This is normal for testing
   - Change email in test script or use updateEnabled: true

3. **"List ID not found"**
   - Verify list ID 9 exists in your Brevo account
   - Update `listIds` array if using different list

### Brevo API Documentation

- **API Reference**: <https://developers.brevo.com/reference/createcontact>
- **Authentication**: <https://developers.brevo.com/docs/getting-started>
- **Contact Lists**: <https://developers.brevo.com/docs/manage-contacts>

## Rollback Plan

If issues occur in production, quickly rollback by:

1. Restore `/app/api/subscribe/route.ts` from git history
2. Re-add Kit.com environment variables
3. Deploy previous version
4. Investigate Brevo issues offline

## Next Steps

1. **Test in staging environment** with real user flows
2. **Deploy to production** with monitoring enabled
3. **Verify first 10-20 submissions** in Brevo dashboard
4. **Monitor error rates** for first 24 hours
5. **Archive Kit.com data** once migration is stable
6. **Update documentation** with production findings
