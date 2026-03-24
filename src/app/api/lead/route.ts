import { NextRequest, NextResponse } from "next/server";

// ─── HubSpot field mapping ────────────────────────────────────────────────────
// Maps our form fields to HubSpot internal property names.
// You must ensure these properties exist in your HubSpot portal.
// Go to: Settings → Properties → Contact Properties
function buildHubSpotProperties(data: Record<string, string>) {
  return [
    { property: "firstname",     value: data.firstName    || "" },
    { property: "lastname",      value: data.lastName     || "" },
    { property: "email",         value: data.email        || "" },
    { property: "phone",         value: data.phone        || "" },
    { property: "company",       value: data.businessName || "" },

    // Custom properties — create these in HubSpot if they don't exist
    { property: "business_type",    value: data.businessType || "" },
    { property: "city",             value: data.city         || "" },
    { property: "product_interest", value: data.requirement  || "" },
    { property: "message",          value: data.message      || "" },

    // Source tracking
    { property: "lead_source",   value: "Website Quote Form" },
    { property: "hs_lead_status", value: "NEW"               },
  ];
}

// ─── Submit to HubSpot via Forms API (no API key needed) ─────────────────────
// This uses the HubSpot Forms Submissions API which is the simplest integration.
// Replace PORTAL_ID and FORM_ID with your actual values from HubSpot.
async function submitToHubSpotForm(data: Record<string, string>) {
  const PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;
  const FORM_ID   = process.env.HUBSPOT_FORM_ID;

  if (!PORTAL_ID || !FORM_ID) {
    throw new Error("HubSpot Portal ID or Form ID not configured in environment variables.");
  }

  const fields = [
    { name: "firstname",      value: data.firstName    || "" },
    { name: "lastname",       value: data.lastName     || "" },
    { name: "email",          value: data.email        || "" },
    { name: "phone",          value: data.phone        || "" },
    { name: "company",        value: data.businessName || "" },
    { name: "business_type",  value: data.businessType || "" },
    { name: "city",           value: data.city         || "" },
    { name: "message",        value: [data.requirement, data.message].filter(Boolean).join(" | ") },
  ];

  const payload = {
    fields,
    context: {
      pageUri:  "https://horizontech.pk",
      pageName: "Yellostone Tech — Quote Form",
    },
    legalConsentOptions: {
      consent: {
        consentToProcess: true,
        text: "I agree to allow Yellostone Tech to store and process my personal data.",
        communications: [
          {
            value: true,
            subscriptionTypeId: 999,
            text: "I agree to receive marketing communications.",
          },
        ],
      },
    },
  };

  const url = `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`;

  const response = await fetch(url, {
    method:  "POST",
    headers: { "Content-Type": "application/json" },
    body:    JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HubSpot API error ${response.status}: ${errorText}`);
  }

  return response.json();
}

// ─── Optional: also create contact via HubSpot Contacts API (requires API key) ─
async function createHubSpotContact(data: Record<string, string>) {
  const API_KEY = process.env.HUBSPOT_API_KEY;
  if (!API_KEY) return null; // silently skip if not configured

  const properties = Object.fromEntries(
    buildHubSpotProperties(data).map(p => [p.property, p.value])
  );

  const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method:  "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({ properties }),
  });

  // 409 = contact already exists — that's fine
  if (!response.ok && response.status !== 409) {
    const errorText = await response.text();
    console.error("HubSpot contact creation failed:", errorText);
    return null;
  }

  return response.json();
}

// ─── Input validation ─────────────────────────────────────────────────────────
function validateInput(data: Record<string, string>): string | null {
  const required = ["firstName", "lastName", "email", "phone", "businessName", "businessType", "city", "requirement"];
  for (const field of required) {
    if (!data[field] || data[field].trim() === "") {
      return `Missing required field: ${field}`;
    }
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return "Invalid email address";
  }
  const phoneRegex = /^[\d\s+\-()]{10,15}$/;
  if (!phoneRegex.test(data.phone)) {
    return "Invalid phone number";
  }
  return null;
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate
    const validationError = validateInput(data);
    if (validationError) {
      return NextResponse.json(
        { success: false, message: validationError },
        { status: 400 }
      );
    }

    // Submit to HubSpot (Forms API — primary path)
    await submitToHubSpotForm(data);

    // Optionally also create a CRM contact (Contacts API — secondary path)
    // This gives you more control but requires a private app API key
    await createHubSpotContact(data).catch(err => {
      // Non-blocking — log but don't fail the request
      console.error("Contact API (secondary) failed:", err.message);
    });

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully. Our team will be in touch within 2–4 hours.",
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Lead API error:", message);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}