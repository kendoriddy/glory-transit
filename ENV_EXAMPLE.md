# Environment Variables Setup

Create a `.env.local` file in your project root with the following:

```bash
# Google Apps Script Web App URL
# Get this from your deployed Google Apps Script
# See CONTACT_FORM_SETUP.md for detailed instructions
NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Getting Your Google Apps Script URL

1. Follow the setup in `CONTACT_FORM_SETUP.md`
2. After deploying your Apps Script as a Web App, you'll get a URL
3. Copy that URL and paste it as the value for `NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL`

## Alternative: Using Formspree

If you prefer Formspree instead:

```bash
# Formspree URL (if using Formspree)
NEXT_PUBLIC_FORMSPREE_URL=https://formspree.io/f/YOUR_FORM_ID
```

**Note:** The `.env.local` file is already in `.gitignore`, so your credentials won't be committed to git.
