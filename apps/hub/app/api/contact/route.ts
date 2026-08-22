import { NextRequest, NextResponse } from "next/server";

async function postToGoogleAppsScript(
  scriptUrl: string,
  payload: { name: string; email: string; message: string },
) {
  const body = JSON.stringify(payload);
  const headers = { "Content-Type": "application/json" };

  // GAS web apps often 302 to script.googleusercontent.com; follow manually
  // so the POST body is preserved (automatic redirect may downgrade to GET).
  let response = await fetch(scriptUrl, {
    method: "POST",
    headers,
    body,
    redirect: "manual",
  });

  if ([301, 302, 303, 307, 308].includes(response.status)) {
    const location = response.headers.get("Location");
    if (!location) {
      return { response, responseText: "" };
    }
    // GAS processes the POST on the first request; the redirect URL returns JSON via GET.
    response = await fetch(location, {
      method: "GET",
      redirect: "follow",
    });
  }

  const responseText = await response.text();
  return { response, responseText };
}

function googleAppsScriptError(status: number): string {
  if (status === 401 || status === 404) {
    return "Contact form URL is invalid or the deployment was removed. In Apps Script, use Deploy → New deployment → Web app, set access to “Anyone”, then update GOOGLE_APPS_SCRIPT_URL in apps/hub/.env.local.";
  }
  if (status === 403) {
    return "Contact form is not publicly accessible. Redeploy the Google Apps Script web app with “Who has access” set to “Anyone”.";
  }
  return "Contact form service returned an invalid response. Please try again later.";
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    const scriptUrl =
      process.env.GOOGLE_APPS_SCRIPT_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL;

    if (!scriptUrl) {
      console.error("Google Apps Script URL not configured");
      return NextResponse.json(
        {
          success: false,
          error:
            "Server configuration error. Please contact the administrator.",
        },
        { status: 500 },
      );
    }

    const { response, responseText } = await postToGoogleAppsScript(scriptUrl, {
      name,
      email,
      message,
    });

    let result: { success?: boolean; error?: string; message?: string };

    try {
      result = JSON.parse(responseText);
    } catch {
      console.error(
        "Google Apps Script returned non-JSON response:",
        response.status,
        responseText.slice(0, 200),
      );
      return NextResponse.json(
        {
          success: false,
          error: googleAppsScriptError(response.status),
        },
        { status: 502 },
      );
    }

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to submit form" },
        { status: response.ok ? 500 : response.status },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.",
      },
      { status: 500 },
    );
  }
}
