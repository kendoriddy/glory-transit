# Contact Form Setup Guide - Google Sheets Integration

## 🎯 Best Free Solution: Google Apps Script

This is the **recommended solution** - completely free, unlimited submissions, direct Google Sheets integration.

---

## 📋 Setup Instructions

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Portfolio Contact Form Submissions"
4. Add headers in Row 1:
   - **Column A**: `Timestamp`
   - **Column B**: `Name`
   - **Column C**: `Email`
   - **Column D**: `Message`

### Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Get current timestamp
    const timestamp = new Date();

    // Add new row with form data
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.email || "",
      data.message || "",
    ]);

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: Test function (runs when you click Run)
function test() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    message: "This is a test message",
  };

  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
```

3. Click **Save** (💾) and name your project (e.g., "Contact Form Handler")

### Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" → Choose **Web app**
3. Configure:
   - **Description**: Contact Form Handler
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** (this is safe - the script only writes to your sheet)
4. Click **Deploy**
5. **Copy the Web App URL** - You'll need this!

### Step 4: Add Environment Variable

1. In your Next.js project root, create/update `.env.local`:

```bash
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=your_web_app_url_here
```

2. Replace `your_web_app_url_here` with the URL you copied in Step 3

### Step 5: Update Contact Form Component

The Contact form component has already been updated to use the Google Apps Script endpoint. Just make sure your `.env.local` file has the correct URL.

---

## ✅ Testing

1. Start your dev server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your Google Sheet - you should see a new row with the submission!

---

## 🔒 Security Notes

- The Web App URL is safe to expose publicly - it only writes to your sheet
- No sensitive data is stored in the client
- You can add additional validation in the Apps Script if needed
- Consider adding rate limiting for production (see Advanced section below)

## 🚨 CORS Issues? Use Next.js API Route (Recommended)

If you encounter CORS errors when submitting the form, we've created a Next.js API route that acts as a proxy. This completely avoids CORS issues.

**The form component is already configured to use `/api/contact` endpoint**, which proxies requests to your Google Apps Script.

**No additional setup needed** - just make sure your `.env.local` has:

```bash
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=your_web_app_url_here
```

The API route (`app/api/contact/route.ts`) handles:

- ✅ CORS-free requests (server-to-server)
- ✅ Error handling
- ✅ Data validation
- ✅ Secure proxy to Google Apps Script

---

## 🚀 Alternative: Formspree (Simpler Setup)

If you prefer a simpler setup (but with monthly limits):

### Free Tier Limits:

- 50 submissions/month
- Basic Google Sheets integration

### Setup:

1. Go to [Formspree](https://formspree.io)
2. Create account (free)
3. Create new form
4. Connect Google Sheets integration
5. Get your form endpoint URL
6. Update `.env.local`:

```bash
NEXT_PUBLIC_FORMSPREE_URL=https://formspree.io/f/YOUR_FORM_ID
```

Then update the Contact component to use Formspree format (see alternative implementation below).

---

## 🎨 Advanced: Add Email Notifications

Want email notifications when someone submits? Add this to your Apps Script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();

    sheet.appendRow([
      timestamp,
      data.name || "",
      data.email || "",
      data.message || "",
    ]);

    // Send email notification
    const subject = `New Contact Form Submission from ${data.name}`;
    const body = `
      New submission received:
      
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
      
      Timestamp: ${timestamp}
    `;

    MailApp.sendEmail({
      to: "your-email@example.com", // Change this!
      subject: subject,
      body: body,
    });

    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## 🔧 Troubleshooting

### Issue: "Script function not found"

- Make sure the function is named exactly `doPost`
- Save the script before deploying

### Issue: "Execution failed"

- Check that the sheet has the correct headers
- Make sure "Who has access" is set to "Anyone"

### Issue: "CORS error"

- Google Apps Script handles CORS automatically
- If issues persist, check browser console for specific error

### Issue: Data not appearing in sheet

- Check Apps Script execution log: **View** → **Execution log**
- Verify the Web App URL is correct in `.env.local`
- Make sure you deployed as "Web app" not "API executable"

---

## 📊 Viewing Submissions

Your submissions will appear in the Google Sheet with:

- Automatic timestamp
- Name
- Email
- Message

You can:

- Sort by timestamp
- Add filters
- Create charts/analytics
- Export to CSV
- Set up email notifications in Google Sheets
- Share with team members

---

## 💡 Pro Tips

1. **Add IP logging** (optional) - Modify Apps Script to log IP addresses
2. **Add spam protection** - Implement rate limiting or honeypot fields
3. **Custom responses** - Send custom confirmation emails
4. **Auto-archive** - Use Apps Script triggers to archive old submissions
5. **Analytics** - Connect Google Analytics to track form submissions

---

## 🆘 Need Help?

If you encounter any issues:

1. Check the browser console for errors
2. Check Apps Script execution logs
3. Verify environment variables are set correctly
4. Ensure the sheet has write permissions
