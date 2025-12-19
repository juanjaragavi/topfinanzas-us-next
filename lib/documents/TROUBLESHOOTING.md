# Troubleshooting Guide: Form Data Not Reaching APIs

## ✅ What We Know Works

Based on comprehensive testing, **both API endpoints are functioning correctly**:

- **Google Sheets API** (`/api/sheets`): ✅ Working (Status 201)
- **Brevo API** (`/api/subscribe`): ✅ Working (Contact ID 47442 created)
- **Environment Variables**: ✅ All configured correctly in `.env.local`

## 🔍 Possible Issues

Since the APIs work when tested directly but data isn't being sent from the actual form, the issue is likely in one of these areas:

### 1. Form Not Being Submitted

**Check:** Is the form actually being submitted?

**How to verify:**

1. Open browser DevTools (F12 or Cmd+Option+I)
2. Go to Console tab
3. Navigate to <http://localhost:3040/quiz>
4. Fill out and submit the form
5. Look for:
   - Any errors in the console
   - Network requests to `/api/sheets` and `/api/subscribe`
   - Console logs like `[QUIZ] ...`

**What to look for in Network tab:**

- Two POST requests should appear:
  - `POST /api/sheets`
  - `POST /api/subscribe`
- Check their Status codes (should be 200/201)
- Check their Response bodies

### 2. Client-Side JavaScript Not Loading

**Check:** Is the page using client-side rendering?

**How to verify:**

```bash
# Check if the form has "use client" directive
grep -n "use client" components/credit-card-form.tsx
```

**Expected:** Should show `'use client'` at the top of the file

### 3. Form Validation Preventing Submission

**Check:** Are there validation errors preventing form submission?

**How to verify:**

1. Open browser console
2. Try to submit the form
3. Look for validation error messages on the page
4. Check if the submit button is disabled

### 4. React State Issues

**Check:** Is the form state being managed correctly?

**How to verify:**

- Add this temporary debug code to see what's happening
- Open `components/credit-card-form.tsx` and add console.log in the handleSubmit function

### 5. Environment Variables Not Loaded

**Check:** Are environment variables available at runtime?

**How to verify:**

```bash
# Start dev server with explicit env file
npm run dev
```

Then check if the server logs show any environment variable warnings.

## 🧪 Quick Diagnostic Steps

### Step 1: Test APIs Directly (Already Done ✅)

```bash
node scripts/test-full-flow.js
```

**Result:** Both APIs working perfectly

### Step 2: Test Form in Browser

1. Start the dev server if not running:

   ```bash
   npm run dev
   ```

2. Open <http://localhost:3040/quiz> in your browser

3. Open DevTools Console (Cmd+Option+I)

4. Fill out the form with test data:
   - Preference: Credit Cards
   - Income: £25,000 - £35,000
   - Email: <your-test@example.com>
   - First Name: Test User

5. Click Submit and watch for:
   - Console logs
   - Network requests in Network tab
   - Any error messages

### Step 3: Check Network Requests

In DevTools Network tab, filter by "Fetch/XHR":

- You should see 2 POST requests after submission
- Click on each request to see:
  - **Headers**: Request URL, Method
  - **Payload**: Data being sent
  - **Response**: What the server returned

### Step 4: Check Console Logs

Look for these log messages:

- `[QUIZ] Duplicate submission detected` (if email already exists)
- `[QUIZ] Subscription API error` (if Brevo fails)
- `[QUIZ] Error calling subscription API` (if fetch fails)
- `Subscription API response:` (success case)

## 🎯 Most Likely Causes

Based on the code review, here are the most likely issues:

### 1. **Form Not Actually Submitting**

- Button might be disabled
- Form validation might be failing
- JavaScript might not be loading

**Solution:** Check browser console for errors

### 2. **Wrong Form Being Used**

- There are two form components:
  - `credit-card-form.tsx` (used in `/quiz`)
  - `credit-card-form-to-product.tsx` (used in `/quiz-2`)

**Solution:** Make sure you're testing the correct quiz page

### 3. **Client-Side Hydration Issue**

- Form might not be hydrating properly on the client

**Solution:** Check for hydration errors in console

### 4. **Cookies/LocalStorage Blocking Submission**

- The form checks for existing registration cookies
- If cookies exist, it might redirect immediately

**Solution:** Clear cookies for localhost:3040

## 🔧 Debugging Commands

### Clear all cookies and test

```javascript
// In browser console
document.cookie.split(";").forEach((c) => {
  document.cookie = c
    .replace(/^ +/, "")
    .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
});
location.reload();
```

### Check if APIs are reachable from browser

```javascript
// In browser console on localhost:3040
fetch("/api/sheets", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "browser-test@example.com",
    firstName: "Browser Test",
    preferenceText: "Credit Cards",
    incomeText: "£25,000 - £35,000",
  }),
})
  .then((r) => r.json())
  .then(console.log)
  .catch(console.error);
```

## 📋 Checklist

- [ ] Dev server is running (`npm run dev`)
- [ ] Navigated to <http://localhost:3040/quiz>
- [ ] Browser DevTools Console is open
- [ ] Browser DevTools Network tab is open
- [ ] Cookies cleared for localhost:3040
- [ ] Form filled out completely
- [ ] Clicked Submit button
- [ ] Checked Console for errors
- [ ] Checked Network tab for POST requests
- [ ] Checked Network request payloads
- [ ] Checked Network response bodies

## 🆘 If Still Not Working

If you've gone through all the above and still not seeing data:

1. **Share the browser console output** - Any errors or warnings
2. **Share the Network tab screenshot** - Show the requests being made
3. **Check if form is actually submitting** - Does it show success/redirect?
4. **Try the browser console test** - Does the direct fetch() call work?

## 📝 Next Steps

Based on your findings from the troubleshooting steps above, we can:

1. Fix client-side issues (if JavaScript not loading)
2. Fix form validation issues (if validation failing)
3. Fix state management issues (if state not updating)
4. Add more detailed logging to the form component

---

**Remember:** The APIs are working perfectly. The issue is somewhere between the user clicking "Submit" and the form actually calling those APIs.
