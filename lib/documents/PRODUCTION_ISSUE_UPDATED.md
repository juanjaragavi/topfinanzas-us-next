# 🚨 Production Google Sheets Issue - Updated Analysis

## New Information

- ✅ Environment variables ARE configured in `.env.production`
- ✅ Integration WAS working until today
- ✅ Local diagnostics show everything works perfectly
- ✅ Sheet has 5,789 existing rows
- ❌ Production suddenly started failing with 500 errors

## Root Cause Analysis

Since it was working and suddenly stopped, one of these happened:

### 1. 🔥 Most Likely: Environment Variables Not Loading in Production

**Problem**: The `.env.production` file exists but Next.js isn't loading it properly.

**Why**: Next.js requires environment variables to be:

- Defined in hosting platform (Vercel/Netlify/etc.) OR
- Built into the application at build time OR
- Explicitly loaded via runtime configuration

**Test**: Check if production is actually using the `.env.production` file

**Fix**:

- Add variables to your hosting platform's environment settings
- Rebuild and redeploy the application

### 2. 🔐 Service Account Permissions Changed

**Problem**: Someone may have removed the service account's access to the Google Sheet

**Check**:

1. Open the Google Sheet: <https://docs.google.com/spreadsheets/d/11Su3cEkJbVPcCqix2oc1Md-3XbKagySuobf9FfakdIs/edit>
2. Click "Share" button
3. Verify this email has Editor access:

   ```bash
   sheets-service-account@absolute-brook-452020-d5.iam.gserviceaccount.com
   ```

**Fix**: Re-share the sheet with Editor permissions

### 3. 📝 Private Key Format Issue in Production

**Problem**: The private key in production has incorrect newline formatting

**What to check**:

```bash
# The key should have literal \n characters in the string, NOT actual newlines
# Wrong:
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----
actual newline here
-----END PRIVATE KEY-----"

# Correct:
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIB...\n-----END PRIVATE KEY-----\n"
```

**Fix**: Ensure the key is on ONE line with `\n` escape sequences

### 4. 🏗️ Build-Time vs Runtime Environment Variables

**Problem**: Next.js treats environment variables differently based on prefix

**Rules**:

- `NEXT_PUBLIC_*` variables are bundled at build time
- Non-prefixed variables are only available at runtime (server-side)
- Your Google Sheets variables are runtime-only (correct)
- BUT they must be available during production runtime

**Fix**: Ensure variables are available in production runtime environment

### 5. 📦 Deployment Process Changed

**Problem**: Recent deployment didn't include environment variables

**Check your deployment platform**:

#### For Vercel

```bash
vercel env ls production
vercel env pull .env.production.local
```

#### For Netlify

```bash
netlify env:list
```

#### For Railway/Render/DigitalOcean

Check environment variables in dashboard

### 6. 🔄 Cache Issue After Deployment

**Problem**: Old build is cached without proper environment variables

**Fix**:

```bash
# Clear cache and rebuild
pnpm build
# Or on your hosting platform
# - Clear build cache
# - Trigger new deployment
```

## How to Diagnose Production Issue

### Option 1: Add Logging to API Route

Temporarily add logging to see what's failing:

```typescript
// In app/api/sheets/route.ts, add at the top of the try block:
console.log("Environment check:", {
  hasEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  hasKey: !!process.env.GOOGLE_PRIVATE_KEY,
  hasSheetId: !!process.env.GOOGLE_SHEET_ID,
  emailValue:
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.substring(0, 20) + "...",
  sheetIdValue: process.env.GOOGLE_SHEET_ID,
});
```

Then check production logs after a failed submission.

### Option 2: Test Production API Endpoint

Run the production test script:

```bash
node scripts/test-production.js
```

This will tell you exactly what error production is returning.

### Option 3: Check Production Logs

Access your production logs:

**Vercel**:

```bash
vercel logs
```

**Netlify**:
Check Functions logs in dashboard

**Other platforms**:
Check application logs in your hosting dashboard

## Immediate Action Plan

### Step 1: Verify Environment Variables in Hosting Platform

Most hosting platforms require environment variables to be set in their dashboard, NOT just in `.env.production` file.

**Where to check**:

- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment variables
- Railway: Project → Variables
- Render: Dashboard → Environment
- DigitalOcean App Platform: App → Settings → Components → Environment Variables

### Step 2: Compare Local vs Production

Run this locally:

```bash
node scripts/diagnose-sheets.js
```

Result: ✅ Everything works (already confirmed)

Check production logs to see what error it's actually throwing.

### Step 3: Add Missing Variables to Platform

If variables are missing from hosting platform:

1. Go to your hosting platform dashboard
2. Navigate to environment variables section
3. Add these three variables:

   ```env
   GOOGLE_SERVICE_ACCOUNT_EMAIL=sheets-service-account@absolute-brook-452020-d5.iam.gserviceaccount.com

   GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDbTvwo+VETRWO5\npay4rZxmAAZS7Ww94B3+S9MDMnAv4B+uQYh1nwNoMmCWfblMxPnkl+SOSwVKObLC\nIKVNvWqaG/VYPEQlJDAZA0k/RnVvY/6IGWC1dNrM+c4zvwGLcZQC9CarerqqnwPS\ndeVPtYxVkAT206HquswoeLvmri3M4by2wWs/h/mCKnR1BaKR5q5EymCBZgXXsm5S\nSH22FOatbkZFCnhPN+J2bQcHRhUeSAYJQ2SWdcvu3dcbhw8Q2G5t+Sg+RzHndILr\nkZtV65Ix5JqgixoRoMHavkBbW7JTwJBdq9yrf1gV6FBqOMqQkoNx6C5RE4uIK3fa\nx9qWqfS7AgMBAAECggEADARE7t3SYnLv5vE8CJaCtlgUAKE/yBgqrI9tDYTK/uSR\n99Nhbch7wE7aWgSjjaBRbQQhouZbcNi+gcKWLC9P0wfrJp2OwlY8SHKUpeHvd14M\nSVrSoL65anfZo544sHJVwN+t6sF7zvONmw+YtAhnmxycGQY5ngoEO8d5zEcI/Wvb\nCb+Wi0sXOnDBWjiyXqfutpcMaAE2gBck5t76enYW068vrX5tqhVaOyPzD40U2Pvp\npLmccUU2H0++6lzRmYmG3c1ioxN1Y3WBw1emHZfk7ruupc/7hFMBhn5GEfPFoWHv\nntWUuYKxm9XiE74DFAA6J17vhPPJ1y8VDu0jUptH8QKBgQD+k6v9TjFQBGcp/nkQ\n86nzl4L4hZ6wXaRRK95qutQIK/uTATBFKoTra3lPiSoq/1kGaDmB60NRCq8RLyxm\nCUC/6Aez9Lq1K/3kpPfiDf1/310M4V4VV/G2mxwzkawIp2QnkwCKlP224DuVjvuw\nN9TTgzl9ZDM7D3mZT4YEDm+MyQKBgQDciNcaCyvZ7h2zVNNjZcEokVm6UaNeOUdJ\n2O5u/BGDMz4iW0yJXfF2nZTQ+n+w8S7UPVukcQy9cDRRSUNZ8cTZs3qnp24VuZ4G\ngvQDwtUC81B9viIENFXfJ/qxl7k+zK+akWjW0ndtRfcFBiYEmjvt+5RSZ1RRHXMw\nT+4yp/rrYwKBgQC5MT3NcGNpHTrbDraNgWQhwxdQqQtuq0BMmEgdhjmWlEBXiWbO\n+gZlp/JAzLxzOPxPL+SdwUJgIxCFxLZcp+CFekqYO7DS+OSivutgc+L0cc2kABJM\nHoTE3QNf9FmclgDC1SpwpcAHmAlgW/p2D7dwAqcAs7KdBT3lLDeGneXCGQKBgGBq\nQwBT2fwRKlL4xuIx3lzKDxxyDKZpDE2w1a0X7uAZSxTiLXfw5lwhUKp8mc7V4s9P\nc/1Un2lC4NyY1yU/mfxDh2A8xtggqoHWRrBOQapkjdAri9uitdg2NlfmKUrXWf6N\ni/Q/V48ig3hi08Q3WfQVhSbxnd9IrM92YoErB3xZAoGBALWIz9n5Y0Ac0PEjW2Kr\n7FYPnH3FpbA9mbKIvFtq90ATTFG4N9UQLEfWnUQQpjpRWhSRLhmr/T+fv78ex2jI\nkzV7K5q9z18dolbRbBXjGOeSBk/005pYv65c3KA+Q9idOseNwPWqRWdo8cbDNxAR\nekMQCv3cMi2QUiBJ2CmDu4cW\n-----END PRIVATE KEY-----\n

   GOOGLE_SHEET_ID=11Su3cEkJbVPcCqix2oc1Md-3XbKagySuobf9FfakdIs
   ```

4. Redeploy/rebuild the application

### Step 4: Check Google Sheet Permissions

1. Open sheet: <https://docs.google.com/spreadsheets/d/11Su3cEkJbVPcCqix2oc1Md-3XbKagySuobf9FfakdIs/edit>
2. Click "Share"
3. Confirm this email has Editor access:
   `sheets-service-account@absolute-brook-452020-d5.iam.gserviceaccount.com`
4. If not, add it with Editor permissions

## Quick Debug: Add Detailed Error Logging

Edit `app/api/sheets/route.ts` temporarily:

```typescript
} catch (error) {
  // Add detailed logging
  console.error("Google Sheets Error Details:", {
    message: error.message,
    code: error.code,
    hasEmail: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    hasKey: !!process.env.GOOGLE_PRIVATE_KEY,
    hasSheetId: !!process.env.GOOGLE_SHEET_ID,
  });

  const errorMessage = error instanceof Error ? error.message : "Unknown error";
  return NextResponse.json(
    { error: "Failed to add data to sheet", details: errorMessage },
    { status: 500 },
  );
}
```

Deploy this, then check production logs after next error.

## What's the Hosting Platform?

**Tell me your hosting platform and I'll give you specific instructions:**

- Vercel?
- Netlify?
- Railway?
- Render?
- DigitalOcean App Platform?
- AWS/EC2?
- Other VPS?

The fix steps differ significantly between platforms!

---

**Next Action**: Check if environment variables are configured in your hosting platform's dashboard, not just in the `.env.production` file.
