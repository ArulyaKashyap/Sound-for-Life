// lib/cta.ts
export type CtaIntent =
  | "hearing-test"
  | "audiologist"
  | "hearing-aids"
  | "hearing-aid-trial"
  | "hearing-aid-fitting"
  | "repair-aftercare"
  | "tinnitus-support"
  | "clinic-visit"
  | "general-enquiry";

export type CtaParams = {
  intent: CtaIntent;
  sourcePage?: string;
  cta?: string;
  referrerSection?: string;
};

export type IntentContent = {
  heading: string;
  subheading: string;
  optionLabel: string;
};

const INTENT_CONTENT: Record<CtaIntent, IntentContent> = {
  "hearing-test": {
    heading: "Book Your Hearing Test",
    subheading:
      "Share your details and our team will help you schedule the right hearing test.",
    optionLabel: "Book a Hearing Test",
  },
  audiologist: {
    heading: "Meet an Audiologist",
    subheading:
      "Tell us a little about your concern and we will connect you with the right hearing care expert.",
    optionLabel: "Meet an Audiologist",
  },
  "hearing-aids": {
    heading: "Get Hearing Aid Guidance",
    subheading:
      "Tell us what you need help with and we will guide you toward suitable hearing aid options.",
    optionLabel: "Hearing Aid Guidance",
  },
  "hearing-aid-trial": {
    heading: "Book a Hearing Aid Trial",
    subheading:
      "Share your details and we will help you explore a suitable guided hearing aid trial.",
    optionLabel: "Hearing Aid Trial",
  },
  "hearing-aid-fitting": {
    heading: "Book Hearing Aid Fitting",
    subheading:
      "Tell us about your device or fitting need and our team will help you with the next step.",
    optionLabel: "Hearing Aid Fitting",
  },
  "repair-aftercare": {
    heading: "Request Repair or Aftercare Support",
    subheading:
      "Tell us what is happening with your device and we will guide you on repair or aftercare support.",
    optionLabel: "Repair / Aftercare",
  },
  "tinnitus-support": {
    heading: "Get Tinnitus Support",
    subheading:
      "Share your symptoms and our team will help you understand the right next step.",
    optionLabel: "Tinnitus Support",
  },
  "clinic-visit": {
    heading: "Find the Right Clinic Visit",
    subheading:
      "Tell us what you are looking for and we will help you plan the right clinic appointment.",
    optionLabel: "Clinic Visit",
  },
  "general-enquiry": {
    heading: "Tell Us How We Can Help",
    subheading:
      "Share your details and our team will help you with the right hearing care next step.",
    optionLabel: "General Enquiry",
  },
};

export const DEFAULT_INTENT: CtaIntent = "general-enquiry";

export function isCtaIntent(value: string | null | undefined): value is CtaIntent {
  if (!value) return false;
  return value in INTENT_CONTENT;
}

export function getIntentContent(intent?: string | null): IntentContent {
  if (isCtaIntent(intent)) {
    return INTENT_CONTENT[intent];
  }

  return INTENT_CONTENT[DEFAULT_INTENT];
}

export function buildCtaHref({
  intent,
  sourcePage,
  cta,
  referrerSection,
}: CtaParams): string {
  const params = new URLSearchParams();

  params.set("intent", intent);

  if (sourcePage) {
    params.set("sourcePage", sourcePage);
  }

  if (cta) {
    params.set("cta", cta);
  }

  if (referrerSection) {
    params.set("referrerSection", referrerSection);
  }

  return `/book-appointment?${params.toString()}`;
}

export function getIntentOptions(): Array<{ value: CtaIntent; label: string }> {
  return (Object.keys(INTENT_CONTENT) as CtaIntent[]).map((intent) => ({
    value: intent,
    label: INTENT_CONTENT[intent].optionLabel,
  }));
}