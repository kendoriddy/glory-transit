/**
 * Contact Form Handler for Portfolio Website
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a Google Sheet with these headers in Row 1:
 *    - Column A: Timestamp
 *    - Column B: Name
 *    - Column C: Email
 *    - Column D: Message
 *
 * 2. In Google Sheets: Extensions → Apps Script
 * 3. Paste this code
 * 4. Save the project
 * 5. Deploy → New deployment → Web app
 * 6. Set "Who has access" to "Anyone"
 * 7. Copy the Web App URL
 * 8. Add it to your .env.local as NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL
 */

function doPost(e) {
  try {
    // Get the active sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Get current timestamp
    const timestamp = new Date();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return ContentService.createTextOutput(
        JSON.stringify({
          success: false,
          error: "Missing required fields",
        })
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // Add new row with form data
    sheet.appendRow([
      timestamp, // Column A: Timestamp
      data.name, // Column B: Name
      data.email, // Column C: Email
      data.message, // Column D: Message
    ]);

    // Optional: Send email notification
    // Uncomment the lines below and add your email to enable notifications
    /*
    const subject = `New Contact Form Submission from ${data.name}`;
    const body = `
      New submission received:
      
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
      
      Timestamp: ${timestamp}
      
      View in Google Sheets: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
    `;
    
    MailApp.sendEmail({
      to: 'your-email@example.com', // CHANGE THIS to your email
      subject: subject,
      body: body
    });
    */

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Log error for debugging
    Logger.log("Error: " + error.toString());

    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        error: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Note: CORS is handled automatically by Google Apps Script Web App
// when "Who has access" is set to "Anyone"
// Since we're using a Next.js API proxy, CORS is handled there instead

/**
 * Test function - Run this to test if the script works
 * Click Run button in Apps Script editor
 */
function test() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    message: "This is a test message from Google Apps Script",
  };

  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData),
    },
  };

  const result = doPost(mockEvent);
  Logger.log("Test result: " + result.getContent());
}
