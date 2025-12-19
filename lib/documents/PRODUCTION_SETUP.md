# 🚨 Production Environment Setup - URGENT

## Problem Identified

The Google Sheets API is returning **500 Internal Server Error** in production because environment variables are not configured on the production server.

## Error Details

- **URL**: <https://us.topfinanzas.com/api/sheets>
- **Status**: 500 Internal Server Error
- **Error Message**: "Failed to add data to sheet"
- **Root Cause**: Missing Google Sheets credentials in production environment

## Required Environment Variables

Add these variables to your production environment:

```bash
# Google Sheets API Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL=[YOUR_SERVICE_ACCOUNT_EMAIL]
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n[YOUR_PRIVATE_KEY]\n-----END PRIVATE KEY-----"
GOOGLE_SHEET_ID=[YOUR_SHEET_ID]

# Brevo API Configuration
BREVO_API_KEY=[YOUR_BREVO_API_KEY]
```

## Deployment Steps

### Option 1: Using Environment File (Recommended)

If you're using a hosting platform (Vercel, Netlify, Railway, etc.):

1. Go to your project settings
2. Navigate to "Environment Variables" section
3. Add each variable with its value
4. Redeploy the application

### Option 2: Server Configuration

If you're using your own server (VPS, dedicated server):

1. SSH into your production server
2. Navigate to your application directory
3. Create or update `.env.production` file:

   ```bash
   cd /path/to/your/app
   nano .env.production
   ```

4. Paste the environment variables (see above)
5. Restart your application:

```bash
pm2 restart all
# or
npm run build && npm start
```

## Verification Steps

After setting up environment variables:

1. **Test the API directly**:

   ```bash
      curl -X POST https://us.topfinanzas.com/api/sheets \
   -H "Content-Type: application/json" \
   -d '{
       "email": "test@example.com",
       "firstName": "Test User",
       "preferenceText": "Credit Cards",
         "incomeText": "$25,000 - $35,000",
       "utm_source": "test",
       "utm_medium": "verification"
   }'
   ```

   Expected response:

   ```json
   {
     "message": "Registration created",
     "action": "created"
   }
   ```

2. **Test the quiz form**
   - Go to: <https://us.topfinanzas.com/quiz>
   - Fill out the form completely
   - Submit and check for errors in console
   - Verify data appears in Google Sheets

3. **Check Brevo dashboard**
   - Go to: <https://app.brevo.com/contact/list/9>
   - Verify new contact was created
   - Check that COUNTRIES field is "United States" (or your intended locale value)

## Common Issues

### Issue 1: Private Key Format Error

If you see "Invalid private key" error:

- Make sure the private key includes the full `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` markers
- Ensure newline characters are properly escaped as `\n`
- Wrap the entire key in double quotes

### Issue 2: Authentication Failed

If you see "Authentication failed" error:

- Verify the service account email is correct
- Check that the service account has access to the Google Sheet
- Confirm the Sheet ID matches the actual spreadsheet

### Issue 3: Permission Denied

If you see "Permission denied" error:

- Go to Google Sheets
- Share the spreadsheet with the service account email
- Give "Editor" permissions

## Testing Locally vs Production

**Local (Working ✅)**:

- Environment variables loaded from `.env.local`
- Both APIs tested successfully
- Google Sheets API: Status 201
- Brevo API: Contact ID 47442

**Production (Failing ❌)**:

- Environment variables NOT configured
- Getting 500 Internal Server Error
- Need to add all environment variables

## Security Notes

⚠️ **IMPORTANT**: Never commit environment variables to git!

- The `.env.production` file should be in `.gitignore`
- Store sensitive credentials securely
- Use environment variable management tools for production
- Rotate credentials if they've been exposed

## Quick Fix Commands

If using environment file on server:

```bash
# Navigate to app directory
cd /opt/app/uk-topfinanzas-com

# Create production env file
cat > .env.production << 'EOF'
GOOGLE_SERVICE_ACCOUNT_EMAIL=sheets-service-account@absolute-brook-452020-d5.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDbTvwo+VETRWO5\npay4rZxmAAZS7Ww94B3+S9MDMnAv4B+uQYh1nwNoMmCWfblMxPnkl+SOSwVKObLC\nIKVNvWqaG/VYPEQlJDAZA0k/RnVvY/6IGWC1dNrM+c4zvwGLcZQC9CarerqqnwPS\ndeVPtYxVkAT206HquswoeLvmri3M4by2wWs/h/mCKnR1BaKR5q5EymCBZgXXsm5S\nSH22FOatbkZFCnhPN+J2bQcHRhUeSAYJQ2SWdcvu3dcbhw8Q2G5t+Sg+RzHndILr\nkZtV65Ix5JqgixoRoMHavkBbW7JTwJBdq9yrf1gV6FBqOMqQkoNx6C5RE4uIK3fa\nx9qWqfS7AgMBAAECggEADARE7t3SYnLv5vE8CJaCtlgUAKE/yBgqrI9tDYTK/uSR\n99Nhbch7wE7aWgSjjaBRbQQhouZbcNi+gcKWLC9P0wfrJp2OwlY8SHKUpeHvd14M\nSVrSoL65anfZo544sHJVwN+t6sF7zvONmw+YtAhnmxycGQY5ngoEO8d5zEcI/Wvb\nCb+Wi0sXOnDBWjiyXqfutpcMaAE2gBck5t76enYW068vrX5tqhVaOyPzD40U2Pvp\npLmccUU2H0++6lzRmYmG3c1ioxN1Y3WBw1emHZfk7ruupc/7hFMBhn5GEfPFoWHv\nntWUuYKxm9XiE74DFAA6J17vhPPJ1y8VDu0jUptH8QKBgQD+k6v9TjFQBGcp/nkQ\n86nzl4L4hZ6wXaRRK95qutQIK/uTATBFKoTra3lPiSoq/1kGaDmB60NRCq8RLyxm\nCUC/6Aez9Lq1K/3kpPfiDf1/310M4V4VV/G2mxwzkawIp2QnkwCKlP224DuVjvuw\nN9TTgzl9ZDM7D3mZT4YEDm+MyQKBgQDciNcaCyvZ7h2zVNNjZcEokVm6UaNeOUdJ\n2O5u/BGDMz4iW0yJXfF2nZTQ+n+w8S7UPVukcQy9cDRRSUNZ8cTZs3qnp24VuZ4G\ngvQDwtUC81B9viIENFXfJ/qxl7k+zK+akWjW0ndtRfcFBiYEmjvt+5RSZ1RRHXMw\nT+4yp/rrYwKBgQC5MT3NcGNpHTrbDraNgWQhwxdQqQtuq0BMmEgdhjmWlEBXiWbO\n+gZlp/JAzLxzOPxPL+SdwUJgIxCFxLZcp+CFekqYO7DS+OSivutgc+L0cc2kABJM\nHoTE3QNf9FmclgDC1SpwpcAHmAlgW/p2D7dwAqcAs7KdBT3lLDeGneXCGQKBgGBq\nQwBT2fwRKlL4xuIx3lzKDxxyDKZpDE2w1a0X7uAZSxTiLXfw5lwhUKp8mc7V4s9P\nc/1Un2lC4NyY1yU/mfxDh2A8xtggqoHWRrBOQapkjdAri9uitdg2NlfmKUrXWf6N\ni/Q/V48ig3hi08Q3WfQVhSbxnd9IrM92YoErB3xZAoGBALWIz9n5Y0Ac0PEjW2Kr\n7FYPnH3FpbA9mbKIvFtq90ATTFG4N9UQLEfWnUQQpjpRWhSRLhmr/T+fv78ex2jI\nkzV7K5q9z18dolbRbBXjGOeSBk/005pYv65c3KA+Q9idOseNwPWqRWdo8cbDNxAR\nekMQCv3cMi2QUiBJ2CmDu4cW\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=11Su3cEkJbVPcCqix2oc1Md-3XbKagySuobf9FfakdIs
BREVO_API_KEY=xkeysib-[REDACTED_FOR_SECURITY]
EOF

# Rebuild and restart
npm run build
pm2 restart all
```

## Expected Results After Fix

Once environment variables are properly configured:

1. ✅ Form submissions work in production
2. ✅ Data appears in Google Sheets
3. ✅ Contacts created in Brevo with "United Kingdom" in COUNTRIES field
4. ✅ No 500 errors in console
5. ✅ Users see success message and get redirected

## Support

If issues persist after configuration:

1. Check server logs for detailed error messages
2. Verify Google Sheet permissions
3. Test API endpoints individually
4. Check network connectivity from server to Google APIs

---

**Status**: 🚨 BLOCKING ISSUE - Production environment not configured  
**Priority**: URGENT - Users cannot submit forms  
**ETA to Fix**: 5-10 minutes once environment variables are added
