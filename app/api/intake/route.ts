import { NextResponse } from "next/server";
import { isCtaIntent } from "@/lib/cta";

type IntakePayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  city?: string;
  intent?: string;
  notes?: string;
  sourcePage?: string;
  cta?: string;
  referrerSection?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  return /^[0-9+\-\s()]{7,20}$/.test(phone);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as IntakePayload;

    const fullName = body.fullName?.trim() || "";
    const phone = body.phone?.trim() || "";
    const email = body.email?.trim() || "";
    const city = body.city?.trim() || "";
    const intent = body.intent?.trim() || "";
    const notes = body.notes?.trim() || "";
    const sourcePage = body.sourcePage?.trim() || "";
    const cta = body.cta?.trim() || "";
    const referrerSection = body.referrerSection?.trim() || "";

    if (!fullName || !phone || !city || !intent) {
      return NextResponse.json(
        { message: "Please fill all required fields." },
        { status: 400 }
      );
    }

    if (!isCtaIntent(intent)) {
      return NextResponse.json(
        { message: "Invalid service intent." },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { message: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const intakeRecord = {
      fullName,
      phone,
      email,
      city,
      intent,
      notes,
      sourcePage,
      cta,
      referrerSection,
      submittedAt: new Date().toISOString(),
    };

    console.log("Master intake submission:", intakeRecord);

    return NextResponse.json(
      {
        ok: true,
        message: "Thank you. Your request has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Intake API error:", error);

    return NextResponse.json(
      { message: "Unable to submit your request right now." },
      { status: 500 }
    );
  }
}
