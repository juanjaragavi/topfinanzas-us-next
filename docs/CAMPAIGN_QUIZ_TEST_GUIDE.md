# Quick Test Guide - Campaign Quiz

## Test URL

```
http://localhost:3040/campaign-quiz-credit-card-recommender
```

## Test Data

### Step 1 - Preference

Select any option:

- High credit limit
- Instant approval
- No credit check
- No annual fee
- Cash back rewards
- Low or 0% interest rate

### Step 2 - Income

Select any option:

- Between $0 and $3,000
- Between $3,000 and $6,000
- Between $6,000 and $9,000
- Between $9,000 and $12,000
- Between $12,000 and $15,000
- More than $15,000

### Step 3 - Contact Details

```
Email: test@example.com
First Name: TestFirstName
Last Name: TestLastName
Phone: 5551234567
☑ Accept checkbox
```

## Expected Behavior

1. **Step 1 → Step 2**: Auto-advances after selection
2. **Step 2 → Step 3**: Auto-advances after selection
3. **Step 3**: Form with all fields
4. **Submit**: Button says "SENDING..."
5. **Success**: Green box with "Thank you for your message. It has been sent."
6. **Redirect**: After 2 seconds → `/weve-discovered-a-few-cards-for-you`

## Verification

### Google Sheets

1. Open spreadsheet ID: `1_3YQp0qCxjlINP0QCAi1zK0nN0T9w_rCyn7oNbLtPp4`
2. Check sheet: `us-topfinanzas-com`
3. Look for new row with test data

### ActiveCampaign

1. Log into ActiveCampaign dashboard
2. Go to Contacts
3. Search for: `test@example.com`
4. Verify contact created with custom fields

### Console Logs

Expected logs:

```
[QUIZ] Starting form submission
[QUIZ] Submission data prepared
[QUIZ] Google Sheets response
[QUIZ] ActiveCampaign response
[QUIZ] Form submitted successfully
```

## Common Issues

### Issue: 404 on submission

**Fix**: Ensure dev server is running (`npm run dev`)

### Issue: Google Sheets error

**Fix**: Check environment variables are loaded correctly

### Issue: ActiveCampaign error

**Fix**: Verify API key and URL in `.env` file

### Issue: Redirect doesn't work

**Fix**: Ensure `/weve-discovered-a-few-cards-for-you` page exists

## Production URLs

**Quiz**: `https://us.topfinanzas.com/campaign-quiz-credit-card-recommender`  
**Results**: `https://us.topfinanzas.com/weve-discovered-a-few-cards-for-you`
