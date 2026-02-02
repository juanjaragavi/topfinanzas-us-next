# Short Quiz Quick Reference

## URLs

### Development

```
http://localhost:3040/campaign-quiz-credit-card-recommender-short
```

### Production

```
https://us.topfinanzas.com/campaign-quiz-credit-card-recommender-short
```

## Testing URL with UTM Parameters

```
https://us.topfinanzas.com/campaign-quiz-credit-card-recommender-short?utm_source=email&utm_medium=newsletter&utm_campaign=short_quiz_test
```

## Google Sheets

### Spreadsheet

- **ID**: `1_3YQp0qCxjlINP0QCAi1zK0nN0T9w_rCyn7oNbLtPp4`
- **URL**: https://docs.google.com/spreadsheets/d/1_3YQp0qCxjlINP0QCAi1zK0nN0T9w_rCyn7oNbLtPp4

### Sheets Configuration

- **Full Quiz Sheet**: `us-topfinanzas-com`
- **Short Quiz Sheet**: `short-version`

## Form Fields

### Step 1: Preference Selection

- Same as full quiz
- Options: A, B, C, D

### Step 2: Income Selection

- Same as full quiz
- Options: A, B, C, D, E, F

### Step 3: Contact Details (SHORTENED)

- **Name**: Full name field (combines first + last)
- **Email**: Email address
- **Terms**: Checkbox acceptance required

## API Endpoints

### Short Quiz Submission

```
POST /api/sheets/short-version
```

### Payload Structure

```json
{
  "name": "John Smith",
  "email": "john@example.com",
  "firstName": "John",
  "lastName": "Smith",
  "preference": "A",
  "preferenceText": "Rewards and cashback",
  "income": "C",
  "incomeText": "Between $6,000 and $9,000",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "country": "US",
  "brand": "TopFinanzas",
  "source": "quiz_campaign_short",
  "utm_source": "email",
  "utm_medium": "newsletter",
  "utm_campaign": "short_quiz_test"
}
```

## Name Parsing Logic

The short quiz automatically parses the full name for ActiveCampaign:

| Input Name          | First Name | Last Name      |
| ------------------- | ---------- | -------------- |
| John Smith          | John       | Smith          |
| Madonna             | Madonna    | (empty)        |
| Mary Jane Watson    | Mary       | Jane Watson    |
| John David Smith Jr | John       | David Smith Jr |

## Comparison: Full vs Short Quiz

| Feature          | Full Quiz                              | Short Quiz                                   |
| ---------------- | -------------------------------------- | -------------------------------------------- |
| **Fields**       | 4 (First, Last, Email, Phone)          | 2 (Name, Email)                              |
| **Google Sheet** | us-topfinanzas-com                     | short-version                                |
| **API Endpoint** | /api/sheets                            | /api/sheets/short-version                    |
| **Log Prefix**   | [QUIZ]                                 | [QUIZ-SHORT]                                 |
| **Source Tag**   | quiz_campaign                          | quiz_campaign_short                          |
| **URL Path**     | /campaign-quiz-credit-card-recommender | /campaign-quiz-credit-card-recommender-short |

## Validation Rules

### Name Field

- Required: Yes
- Min Length: 2 characters
- Error Messages:
  - Empty: "Name is required"
  - Too Short: "Name must be at least 2 characters"

### Email Field

- Required: Yes
- Format: Valid email (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- Error Messages:
  - Empty: "Email is required"
  - Invalid: "Please enter a valid email address"

### Terms Checkbox

- Required: Yes
- Error Message: "You must accept data policies and terms and conditions to continue"

## Monitoring

### Log Prefixes

```bash
# Short quiz logs
[QUIZ-SHORT]

# Short quiz API logs
Sheets API (short-version)
```

### Search Logs

```bash
# Development
npm run dev | grep "QUIZ-SHORT"

# Production logs
grep "short-version" /var/log/app.log
```

## Common Test Scenarios

### Happy Path

1. Navigate to short quiz URL
2. Select preference (Step 1)
3. Select income (Step 2)
4. Enter name: "Test User"
5. Enter email: "test@example.com"
6. Check terms checkbox
7. Click "FIND RESULTS"
8. Verify success message
9. Verify redirect to results page

### Error Cases

1. **Empty name**: Should show "Name is required"
2. **Short name** ("a"): Should show "Name must be at least 2 characters"
3. **Invalid email** ("test@"): Should show "Please enter a valid email address"
4. **Unchecked terms**: Should show terms acceptance error
5. **Duplicate email**: Should return 409 status (duplicate)

### Edge Cases

1. **Single-word name**: Should parse as firstName, empty lastName
2. **Very long name**: Should accept (no max length)
3. **Special characters in name**: Should accept
4. **Unicode characters**: Should accept (e.g., José García)

## Debugging

### Check if sheet exists

```bash
# Look for this log message
"Created new sheet: short-version"
```

### Verify data written

1. Open Google Sheets
2. Navigate to "short-version" sheet
3. Check last row for new entry
4. Verify columns: Name, Email, Timestamp, etc.

### Test API directly

```bash
curl -X POST https://us.topfinanzas.com/api/sheets/short-version \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "preference": "A",
    "preferenceText": "Rewards",
    "income": "C",
    "incomeText": "$6k-$9k",
    "country": "US",
    "brand": "TopFinanzas",
    "source": "quiz_campaign_short"
  }'
```

## Production Checklist

- [ ] Verify "short-version" sheet exists in production spreadsheet
- [ ] Test form submission in production
- [ ] Verify data appears in correct sheet
- [ ] Verify ActiveCampaign integration works
- [ ] Verify UTM tracking works
- [ ] Verify redirect to results page works
- [ ] Test with multiple submissions (check duplicate detection)
- [ ] Monitor logs for errors
- [ ] Verify original quiz still works (regression test)

## Support Contacts

For issues with:

- Google Sheets API: Check service account permissions
- ActiveCampaign: Verify API key in environment variables
- Form validation: Check browser console for errors
- Redirect issues: Verify UTM parameter preservation

## Quick Fixes

### Sheet not found

```typescript
// The API auto-creates the sheet, but you can create it manually:
// 1. Open spreadsheet
// 2. Click "+" to add new sheet
// 3. Rename to "short-version"
// 4. Add headers: Name, Email, Timestamp, Preference, Income, Country, Brand, Source, Medium, Campaign, Term, Content, UTM Source, UTM Medium, UTM Campaign, UTM Term, UTM Content
```

### Duplicate submissions

```typescript
// This is working as intended
// To allow re-submission, delete the row from the sheet
// Or use a different email address
```

### Name parsing issues

```typescript
// The parsing logic is:
const nameParts = formData.name.trim().split(/\s+/);
const firstName = nameParts[0] || formData.name;
const lastName = nameParts.slice(1).join(" ") || "";

// To customize, modify in:
// app/campaign-quiz-credit-card-recommender-short/page.tsx
// Lines ~208-210
```
