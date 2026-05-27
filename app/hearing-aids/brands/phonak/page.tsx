// FILE: app/hearing-aids/brands/phonak/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildCtaHref, type CtaIntent } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Phonak Hearing Aids in India | Explore Phonak at Sound for Life",
  description:
    "Explore Phonak hearing aids at Sound for Life. Learn about rechargeable, Bluetooth, digital, RIC, BTE, custom, and powerful hearing aid options with expert consultation, trial, fitting, and aftercare support.",
  alternates: {
    canonical: "/hearing-aids/brands/phonak",
  },
  openGraph: {
    title: "Phonak Hearing Aids in India | Explore Phonak at Sound for Life",
    description:
      "Explore Phonak hearing aids at Sound for Life. Learn about rechargeable, Bluetooth, digital, RIC, BTE, custom, and powerful hearing aid options with expert consultation, trial, fitting, and aftercare support.",
    url: "/hearing-aids/brands/phonak",
    type: "website",
  },
};

type FeatureCard = {
  icon: string;
  title: string;
  copy: string;
};

type ProductCard = {
  title: string;
  need: string;
  copy: string;
};

type AccordionItem = {
  title: string;
  copy: string;
};

type Step = {
  title: string;
  copy: string;
};

type BenefitCard = {
  title: string;
  copy: string;
};

type Faq = {
  question: string;
  answer: string;
};

const featureCards: FeatureCard[] = [
  {
    icon: "🗣️",
    title: "Clearer Speech in Daily Life",
    copy:
      "Phonak hearing aids are designed to support speech understanding in everyday conversations, including family discussions, meetings, phone calls, and noisy environments.",
  },
  {
    icon: "📶",
    title: "Strong Bluetooth Connectivity",
    copy:
      "Selected Phonak hearing aids support Bluetooth connectivity for compatible phones and devices, helping users manage calls, streaming, and listening preferences more conveniently.",
  },
  {
    icon: "🔋",
    title: "Rechargeable Convenience",
    copy:
      "Phonak offers rechargeable hearing aids that make daily use easier by reducing the need for frequent battery changes.",
  },
  {
    icon: "👂",
    title: "Options for Different Hearing Needs",
    copy:
      "From discreet in-ear hearing aids to powerful BTE hearing aid options and CROS hearing aid solutions, Phonak offers hearing aid devices for different lifestyles and hearing requirements.",
  },
];

const productCards: ProductCard[] = [
  {
    title: "Audéo Sphere / Audéo Infinio",
    need: "I want clear speech in noise",
    copy:
      "A premium rechargeable RIC hearing aid option designed for users who want strong speech clarity, advanced technology, and comfortable everyday use.",
  },
  {
    title: "Audéo",
    need: "I want a reliable everyday hearing aid",
    copy:
      "A versatile hearing aid option for users who want dependable daily performance, rechargeable convenience, and connectivity features.",
  },
  {
    title: "Virto",
    need: "I want a custom in-ear fit",
    copy:
      "A custom in-ear hearing aid option designed for users who prefer personalised comfort, discreet fitting, and a natural wearing experience.",
  },
  {
    title: "Naída",
    need: "I need stronger hearing support",
    copy:
      "A powerful BTE hearing aid option suitable for users who need stronger amplification and reliable support.",
  },
  {
    title: "CROS",
    need: "I have hearing difficulty in one ear",
    copy:
      "A CROS hearing aid solution designed for certain cases of single-sided hearing difficulty, recommended after a proper hearing test.",
  },
  {
    title: "Roger Accessories",
    need: "I need support in meetings or distance listening",
    copy:
      "Wireless microphone solutions that can support users in meetings, classrooms, group discussions, and distance listening situations.",
  },
];

const technologyCards: FeatureCard[] = [
  {
    icon: "🗣️",
    title: "Speech Clarity Support",
    copy:
      "Selected Phonak hearing aids use advanced sound processing to support clearer speech in complex listening environments, especially where background noise makes conversations difficult.",
  },
  {
    icon: "📶",
    title: "Bluetooth Hearing Aids",
    copy:
      "Compatible Phonak Bluetooth hearing aids can connect with selected phones and devices for calls, streaming, and easier everyday use.",
  },
  {
    icon: "🔋",
    title: "Rechargeable Hearing Aids",
    copy:
      "Rechargeable Phonak models help users manage daily hearing aid use with less dependence on disposable batteries.",
  },
  {
    icon: "📱",
    title: "myPhonak App Support",
    copy:
      "Compatible Phonak hearing aids can work with the myPhonak app, allowing users to adjust settings, check battery status, and personalise listening preferences.",
  },
  {
    icon: "🎙️",
    title: "Roger Wireless Support",
    copy:
      "Roger accessories are designed to support hearing in situations where distance, group conversations, classrooms, or meetings make listening difficult.",
  },
];

const hearingAidTypes: AccordionItem[] = [
  {
    title: "RIC Hearing Aids",
    copy:
      "RIC hearing aids, also called receiver-in-canal hearing aids, are slim devices worn behind the ear with a small receiver placed inside the ear canal. They are popular because they are comfortable, discreet, and suitable for many users.",
  },
  {
    title: "BTE Hearing Aids",
    copy:
      "BTE hearing aid models sit behind the ear and are often recommended for users who need stronger support, easier handling, or more powerful hearing performance.",
  },
  {
    title: "In-Ear Hearing Aids",
    copy:
      "In-ear hearing aids are worn inside the ear and may be suitable for users who prefer a compact and personalised fit.",
  },
  {
    title: "ITC Hearing Aid Options",
    copy:
      "ITC hearing aid styles, or in-the-canal hearing aids, sit partly inside the ear canal and may be considered by users who want a balance between comfort, discreet design, and handling ease.",
  },
  {
    title: "CIC Hearing Aids",
    copy:
      "CIC hearing aids, or completely-in-canal hearing aids, are small devices placed deeper inside the ear canal. These are often preferred by users looking for small hearing machine options or less visible hearing aid devices.",
  },
  {
    title: "IIC Hearing Aids",
    copy:
      "IIC hearing aids are among the most discreet hearing aid styles. They sit deeper inside the ear canal and may be considered by users who want the hearing aid inside ear to remain less noticeable.",
  },
  {
    title: "CROS Hearing Aid",
    copy:
      "A CROS hearing aid may be recommended for certain cases of single-sided hearing difficulty. It helps transfer sound from the poorer hearing side to the better hearing side, depending on suitability.",
  },
  {
    title: "BAHA Hearing Aid and Bone Conduction Hearing Aid",
    copy:
      "A BAHA hearing aid, also known as a bone conduction hearing aid, is usually considered for specific medical or hearing conditions. It should only be recommended after specialist evaluation.",
  },
];

const steps: Step[] = [
  {
    title: "Hearing Test",
    copy:
      "We begin with a professional hearing test to understand your hearing level, listening difficulty, and type of hearing concern.",
  },
  {
    title: "Audiologist Consultation",
    copy:
      "Our audiologist explains your hearing test results and recommends suitable Phonak hearing aid devices based on your needs.",
  },
  {
    title: "Hearing Aid Trial",
    copy:
      "You can experience suitable options and understand how the hearing aid feels, sounds, and performs in real-life situations.",
  },
  {
    title: "Fitting & Fine-Tuning",
    copy:
      "Your hearing aid is programmed and adjusted according to your hearing profile, comfort, listening needs, and feedback.",
  },
  {
    title: "Aftercare Support",
    copy:
      "Sound for Life supports you after purchase with follow-ups, app guidance, Bluetooth support, cleaning guidance, servicing, and adjustment assistance.",
  },
];

const suitabilityPoints: string[] = [
  "Clearer speech understanding",
  "Digital hearing aids with advanced technology",
  "Rechargeable hearing aids for daily convenience",
  "Bluetooth hearing aids for compatible devices",
  "RIC hearing aids for comfort and discreet use",
  "BTE hearing aid options for stronger support",
  "In-ear hearing aids for personalised comfort",
  "CROS hearing aid solutions for selected single-sided hearing difficulty",
  "App-based control and connectivity support",
  "Professional fitting and long-term aftercare support",
];

const benefits: BenefitCard[] = [
  {
    title: "Expert Audiologist Support",
    copy:
      "Our audiologists help you understand your hearing test results and choose suitable Phonak hearing aids based on your hearing needs.",
  },
  {
    title: "Trial Before Final Decision",
    copy:
      "Instead of choosing only from hearing aid photos or pictures of hearing aids, you can experience suitable hearing aid options through guided trial support.",
  },
  {
    title: "Personalised Fitting",
    copy:
      "Every hearing aid needs proper fitting and fine-tuning. We adjust your device according to your hearing profile, comfort, and daily listening needs.",
  },
  {
    title: "Bluetooth & App Setup Support",
    copy:
      "Sound for Life can help users with basic Phonak app guidance, Bluetooth pairing, device handling, and daily usage support.",
  },
  {
    title: "Multi-Brand Comparison",
    copy:
      "As a multi-brand hearing care clinic, Sound for Life helps you compare Phonak with other suitable hearing aid devices if required.",
  },
  {
    title: "Aftercare & Servicing Support",
    copy:
      "We support you beyond purchase with follow-ups, device care, cleaning guidance, servicing support, and adjustment help.",
  },
];

const faqs: Faq[] = [
  {
    question: "What is a hearing aid?",
    answer:
      "A hearing aid is a small electronic device that helps people with hearing loss hear sounds more clearly. It captures sound, processes it, and makes important sounds easier to hear. In India, many people also search for it as a hearing machine, ear hearing machine, or hearing aid machine.",
  },
  {
    question: "Are Phonak hearing aids available at Sound for Life?",
    answer:
      "Yes, Sound for Life deals in Phonak hearing aids. Availability may vary by clinic, model, and hearing requirement, so it is best to book a hearing test or speak with an audiologist.",
  },
  {
    question: "Which is the best Phonak hearing aid?",
    answer:
      "The best Phonak hearing aid depends on your hearing loss level, lifestyle, comfort preference, phone usage, connectivity needs, and budget. A professional hearing test is required before choosing any hearing aid device.",
  },
  {
    question: "Does Phonak offer rechargeable hearing aids?",
    answer:
      "Yes, Phonak offers rechargeable hearing aids across selected models. Rechargeable options are useful for people who want easier daily use without frequent battery changes.",
  },
  {
    question: "Does Phonak offer Bluetooth hearing aids?",
    answer:
      "Yes, selected Phonak hearing aids support Bluetooth connectivity for compatible phones and devices. These models can help with phone calls, streaming, app control, and easier daily use.",
  },
  {
    question: "What are RIC hearing aids?",
    answer:
      "RIC hearing aids are receiver-in-canal hearing aids. They are worn behind the ear with a small receiver placed inside the ear canal. They are popular because they are slim, comfortable, and suitable for many hearing needs.",
  },
  {
    question: "What is the difference between BTE and RIC hearing aids?",
    answer:
      "BTE hearing aids sit behind the ear and are often suitable for stronger hearing support or easier handling. RIC hearing aids are usually slimmer and more discreet, with the receiver placed inside the ear canal. The right choice depends on your hearing test and comfort.",
  },
  {
    question: "What is a CROS hearing aid?",
    answer:
      "A CROS hearing aid may be recommended for people with hearing difficulty in one ear. It helps transfer sound from the poorer hearing side to the better hearing side. It should only be considered after a proper hearing evaluation.",
  },
  {
    question: "Are hearing aid images enough to choose a device?",
    answer:
      "No. Hearing aid images, hearing aid photos, and pictures of hearing aids can help you understand design and size, but they cannot tell you which hearing aid is right for your hearing loss. A hearing test and audiologist consultation are necessary.",
  },
  {
    question: "Are Phonak hearing aids suitable for senior citizens?",
    answer:
      "Yes, Phonak hearing aids may be suitable for senior citizens depending on their hearing level, handling comfort, lifestyle, and support needs. Some seniors may prefer rechargeable hearing aids, BTE hearing aid options, or Bluetooth hearing aids with guided setup support.",
  },
];

function ctaHref(intent: CtaIntent, cta: string, referrerSection: string) {
  return buildCtaHref({
    intent,
    sourcePage: "phonak-brand-page",
    cta,
    referrerSection,
  });
}

export default function Page() {
  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Phonak Hearing Aids at Sound for Life",
        url: "/hearing-aids/brands/phonak",
        description:
          "Explore Phonak hearing aids at Sound for Life with expert consultation, hearing test, trial, fitting, and aftercare support.",
      },
      {
        "@type": "MedicalWebPage",
        name: "Phonak Hearing Aids at Sound for Life",
        url: "/hearing-aids/brands/phonak",
        about: {
          "@type": "Brand",
          name: "Phonak",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Hearing Aids",
            item: "/hearing-aids",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Brands",
            item: "/hearing-aids/brands",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Phonak",
            item: "/hearing-aids/brands/phonak",
          },
        ],
      },
      {
        "@type": "Brand",
        name: "Phonak",
        url: "/hearing-aids/brands/phonak",
        description:
          "Phonak hearing aids at Sound for Life with guidance for rechargeable, Bluetooth, RIC, BTE, custom, and digital hearing aid devices.",
      },
      faqSchema,
    ],
  };

  return (
    <>
      <style>{`
        :root {
          --ph-navy: #0d3b7d;
          --ph-blue: #0a5cae;
          --ph-blue-2: #1267b9;
          --ph-blue-soft: #eef7fd;
          --ph-orange: #f4831f;
          --ph-orange-deep: #df7417;
          --ph-white: #ffffff;
          --ph-text: #233548;
          --ph-text-soft: #617284;
          --ph-line: rgba(13, 59, 125, 0.1);
          --ph-line-soft: rgba(13, 59, 125, 0.06);
          --ph-shadow-sm: 0 12px 28px rgba(13, 59, 125, 0.06);
          --ph-shadow-md: 0 18px 42px rgba(13, 59, 125, 0.1);
          --ph-shadow-lg: 0 30px 80px rgba(13, 59, 125, 0.14);
          --ph-radius-xl: 32px;
          --ph-radius-lg: 24px;
          --ph-radius-md: 18px;
          --ph-section-space: 92px;
        }

        * {
          box-sizing: border-box;
        }

        .ph-page {
          background:
            radial-gradient(circle at top left, rgba(232, 244, 253, 0.35), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          color: var(--ph-text);
        }

        .ph-container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .ph-hero {
          position: relative;
          width: 100%;
          min-height: 62vh;
          overflow: hidden;
          background: #dfe8f2;
        }

        .ph-hero-media {
          position: absolute;
          inset: 0;
        }

        .ph-hero-image {
          object-fit: cover;
          object-position: center;
        }

        .ph-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(7, 28, 58, 0.08) 0%, rgba(7, 28, 58, 0.34) 100%),
            linear-gradient(90deg, rgba(7, 28, 58, 0.32) 0%, rgba(7, 28, 58, 0.14) 45%, rgba(7, 28, 58, 0.20) 100%);
        }

        .ph-hero-inner {
          position: relative;
          z-index: 2;
          min-height: 62vh;
          display: flex;
          align-items: flex-end;
          padding: 36px 0;
        }

        .ph-logo-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 74px;
          padding: 18px 24px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.28);
          box-shadow: 0 18px 36px rgba(7, 28, 58, 0.24);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .ph-logo-text {
          color: #ffffff;
          font-size: 30px;
          font-weight: 900;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          line-height: 1;
        }

        .ph-section {
          padding: var(--ph-section-space) 0;
        }

        .ph-section-tight {
          padding: 64px 0;
        }

        .ph-section-shell {
          display: grid;
          gap: 22px;
        }

        .ph-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--ph-orange);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .ph-kicker::before {
          content: "";
          width: 30px;
          height: 2px;
          background: rgba(244, 131, 31, 0.4);
        }

        .ph-title {
          margin: 0;
          color: var(--ph-navy);
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .ph-title-lg {
          font-size: 56px;
        }

        .ph-lead {
          margin: 0;
          max-width: 980px;
          color: var(--ph-text-soft);
          font-size: 18px;
          line-height: 1.86;
        }

        .ph-copy {
          margin: 0;
          color: var(--ph-text-soft);
          font-size: 16px;
          line-height: 1.9;
        }

        .ph-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 22px 0 0;
          color: var(--ph-text-soft);
          font-size: 13px;
          font-weight: 700;
          flex-wrap: wrap;
        }

        .ph-breadcrumb a {
          color: inherit;
          text-decoration: none;
        }

        .ph-breadcrumb-divider {
          opacity: 0.45;
        }

        .ph-intro-card,
        .ph-card,
        .ph-cta-band,
        .ph-checklist,
        .ph-step-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--ph-line);
          box-shadow: var(--ph-shadow-md);
        }

        .ph-intro-card {
          padding: 28px;
          border-radius: var(--ph-radius-lg);
        }

        .ph-card-grid-2,
        .ph-card-grid-3,
        .ph-benefit-grid,
        .ph-check-grid,
        .ph-tech-grid {
          display: grid;
          gap: 22px;
          margin-top: 30px;
        }

        .ph-card-grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ph-card-grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .ph-benefit-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .ph-check-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ph-tech-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .ph-tech-grid .ph-card:last-child {
          grid-column: 1 / -1;
        }

        .ph-card,
        .ph-step-card {
          height: 100%;
          padding: 26px;
          border-radius: var(--ph-radius-lg);
        }

        .ph-card:hover,
        .ph-step-card:hover,
        .ph-faq-item:hover,
        .ph-type-item:hover {
          transform: translateY(-4px);
          box-shadow: var(--ph-shadow-lg);
        }

        .ph-card,
        .ph-step-card,
        .ph-faq-item,
        .ph-type-item {
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .ph-card-icon {
          width: 52px;
          height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: linear-gradient(145deg, #eef7fd, #ffffff);
          border: 1px solid rgba(13, 59, 125, 0.07);
          box-shadow: var(--ph-shadow-sm);
          font-size: 24px;
          line-height: 1;
        }

        .ph-card-title {
          margin: 18px 0 0;
          color: var(--ph-navy);
          font-size: 24px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .ph-card-subtitle {
          margin: 12px 0 0;
          color: var(--ph-navy);
          font-size: 14px;
          font-weight: 800;
          line-height: 1.7;
        }

        .ph-card-copy {
          margin: 12px 0 0;
          color: var(--ph-text-soft);
          font-size: 14px;
          line-height: 1.85;
        }

        .ph-accordion-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 30px;
        }

        .ph-type-item,
        .ph-faq-item {
          overflow: hidden;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.99);
          border: 1px solid var(--ph-line);
          box-shadow: var(--ph-shadow-sm);
        }

        .ph-type-item summary,
        .ph-faq-item summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 22px;
          color: var(--ph-navy);
          font-size: 18px;
          font-weight: 800;
          line-height: 1.45;
        }

        .ph-type-item summary::-webkit-details-marker,
        .ph-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .ph-type-item summary::after,
        .ph-faq-item summary::after {
          content: "+";
          color: var(--ph-blue);
          font-size: 24px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .ph-type-item[open] summary::after,
        .ph-faq-item[open] summary::after {
          content: "–";
        }

        .ph-type-body,
        .ph-faq-body {
          padding: 0 22px 22px;
          color: var(--ph-text-soft);
          font-size: 14px;
          line-height: 1.85;
        }

        .ph-steps {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
          margin-top: 30px;
        }

        .ph-step-index {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: linear-gradient(180deg, #f89a3f 0%, var(--ph-orange) 100%);
          color: #ffffff;
          font-size: 16px;
          font-weight: 900;
          box-shadow: 0 12px 24px rgba(244, 131, 31, 0.24);
        }

        .ph-step-title {
          margin: 16px 0 0;
          color: var(--ph-navy);
          font-size: 20px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .ph-step-copy {
          margin: 12px 0 0;
          color: var(--ph-text-soft);
          font-size: 14px;
          line-height: 1.85;
        }

        .ph-checklist {
          padding: 28px;
          border-radius: var(--ph-radius-lg);
          margin-top: 30px;
        }

        .ph-checklist-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid var(--ph-line-soft);
          color: var(--ph-text);
          font-size: 15px;
          line-height: 1.75;
        }

        .ph-checklist-item:last-child {
          border-bottom: 0;
        }

        .ph-check-mark {
          width: 24px;
          height: 24px;
          flex-shrink: 0;
          margin-top: 2px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--ph-blue-soft);
          color: var(--ph-blue);
          font-size: 14px;
          font-weight: 900;
        }

        .ph-disclaimer {
          margin-top: 18px;
          color: var(--ph-text-soft);
          font-size: 13px;
          line-height: 1.7;
          font-weight: 700;
        }

        .ph-cta-band {
          padding: 34px;
          border-radius: 28px;
          margin-top: 30px;
          background:
            radial-gradient(circle at top right, rgba(244, 131, 31, 0.08), transparent 18%),
            linear-gradient(180deg, rgba(255,255,255,0.99) 0%, rgba(245,250,255,0.98) 100%);
        }

        .ph-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 24px;
        }

        .ph-btn {
          min-height: 54px;
          padding: 14px 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 15px;
          font-weight: 800;
          transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease, border-color 150ms ease;
        }

        .ph-btn:hover {
          transform: translateY(-2px);
        }

        .ph-btn-primary {
          background: linear-gradient(180deg, #f89a3f 0%, var(--ph-orange) 100%);
          color: #ffffff;
          box-shadow: 0 14px 28px rgba(244, 131, 31, 0.24);
        }

        .ph-btn-primary:hover {
          background: linear-gradient(180deg, #f48b34 0%, var(--ph-orange-deep) 100%);
        }

        .ph-btn-secondary {
          background: rgba(255,255,255,0.98);
          color: var(--ph-navy);
          border: 1px solid rgba(13, 59, 125, 0.16);
          box-shadow: 0 10px 22px rgba(13, 59, 125, 0.06);
        }

        .ph-btn-secondary:hover {
          border-color: rgba(13, 59, 125, 0.24);
          color: var(--ph-blue);
        }

        .ph-trust-line {
          margin-top: 14px;
          color: var(--ph-text-soft);
          font-size: 14px;
          line-height: 1.75;
          font-weight: 700;
        }

        .ph-section-soft {
          background: linear-gradient(180deg, #f8fbff 0%, #ffffff 100%);
        }

        .ph-section-blue {
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 22%),
            linear-gradient(180deg, #0b3773 0%, #0a4f95 100%);
        }

        .ph-section-blue .ph-title,
        .ph-section-blue .ph-lead,
        .ph-section-blue .ph-copy,
        .ph-section-blue .ph-card-title,
        .ph-section-blue .ph-card-subtitle,
        .ph-section-blue .ph-step-title {
          color: #ffffff;
        }

        .ph-section-blue .ph-card-copy,
        .ph-section-blue .ph-step-copy,
        .ph-section-blue .ph-disclaimer {
          color: rgba(255, 255, 255, 0.85);
        }

        .ph-section-blue .ph-step-card {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: none;
        }

        .ph-section-blue .ph-intro-card {
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.16);
          box-shadow: none;
        }

        .ph-section-blue .ph-kicker {
          color: #ffd29d;
        }

        .ph-section-blue .ph-kicker::before {
          background: rgba(255, 210, 157, 0.45);
        }

        .ph-section-blue .ph-checklist {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: none;
        }

        .ph-section-blue .ph-checklist-item {
          color: #ffffff;
          border-bottom-color: rgba(255,255,255,0.12);
        }

        .ph-section-blue .ph-check-mark {
          background: rgba(255,255,255,0.16);
          color: #ffffff;
        }

        @media (max-width: 1220px) {
          .ph-title {
            font-size: 42px;
          }

          .ph-title-lg {
            font-size: 48px;
          }

          .ph-card-grid-3,
          .ph-benefit-grid,
          .ph-steps {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .ph-card-grid-2,
          .ph-card-grid-3,
          .ph-benefit-grid,
          .ph-check-grid,
          .ph-tech-grid,
          .ph-accordion-grid,
          .ph-steps {
            grid-template-columns: 1fr;
          }

          .ph-tech-grid .ph-card:last-child {
            grid-column: auto;
          }
        }

        @media (max-width: 767px) {
          .ph-container {
            padding: 0 16px;
          }

          .ph-hero,
          .ph-hero-inner {
            min-height: 46vh;
          }

          .ph-section {
            padding: 68px 0;
          }

          .ph-section-tight {
            padding: 44px 0;
          }

          .ph-title {
            font-size: 34px;
          }

          .ph-title-lg {
            font-size: 38px;
          }

          .ph-lead {
            font-size: 16px;
            line-height: 1.75;
          }

          .ph-intro-card,
          .ph-card,
          .ph-step-card,
          .ph-checklist,
          .ph-cta-band {
            padding: 22px;
            border-radius: 22px;
          }

          .ph-type-item summary,
          .ph-faq-item summary {
            padding: 18px;
            font-size: 16px;
          }

          .ph-type-body,
          .ph-faq-body {
            padding: 0 18px 18px;
          }

          .ph-cta-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .ph-btn {
            width: 100%;
          }

          .ph-logo-badge {
            min-height: 64px;
            padding: 14px 18px;
          }

          .ph-logo-text {
            font-size: 24px;
            letter-spacing: 0.14em;
          }
        }
      `}</style>

      <main className="ph-page">
        <section className="ph-hero" aria-label="Phonak hearing aids hero image">
          <div className="ph-hero-media">
            <Image
              src="/images/home-hearing-family.jpeg"
              alt="Premium hearing care consultation and lifestyle support"
              fill
              priority
              sizes="100vw"
              className="ph-hero-image"
            />
            <div className="ph-hero-overlay" />
          </div>

          <div className="ph-container ph-hero-inner">
            <div className="ph-logo-badge" aria-label="Phonak brand badge">
              <span className="ph-logo-text">Phonak</span>
            </div>
          </div>
        </section>

        <div className="ph-container">
          <nav className="ph-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="ph-breadcrumb-divider">/</span>
            <Link href="/hearing-aids">Hearing Aids</Link>
            <span className="ph-breadcrumb-divider">/</span>
            <Link href="/hearing-aids/brands">Brands</Link>
            <span className="ph-breadcrumb-divider">/</span>
            <span aria-current="page">Phonak</span>
          </nav>
        </div>

        <section className="ph-section-tight">
          <div className="ph-container">
            <div className="ph-section-shell">
              <div className="ph-kicker">Phonak at Sound for Life</div>
              <h1 className="ph-title ph-title-lg">
                Explore Phonak Hearing Aids at Sound for Life
              </h1>
              <p className="ph-lead">
                Phonak is a globally recognised hearing aid brand known for advanced digital hearing aids, strong speech clarity, Bluetooth connectivity, rechargeable options, and solutions for different hearing needs. At Sound for Life, we help you explore suitable Phonak hearing aids based on your hearing level, lifestyle, comfort, communication needs, and budget.
              </p>
              <div className="ph-intro-card">
                <p className="ph-copy">
                  Whether you are searching for a hearing machine, hearing aid machine, ear hearing machine, rechargeable hearing aids, Bluetooth hearing aids, or the best hearing aid machine for daily use, our audiologists guide you with the right hearing test, consultation, trial, fitting, and aftercare support.
                </p>

                <div className="ph-cta-actions">
                  <Link
                    className="ph-btn ph-btn-primary"
                    href={ctaHref("hearing-test", "book-free-hearing-test", "intro")}
                  >
                    Book Free Hearing Test
                  </Link>
                  <Link
                    className="ph-btn ph-btn-secondary"
                    href={ctaHref("audiologist", "talk-to-an-audiologist", "intro")}
                  >
                    Talk to an Audiologist
                  </Link>
                </div>

                <div className="ph-trust-line">
                  Explore Phonak hearing aids with expert audiologist guidance at Sound for Life clinics.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ph-section ph-section-soft">
          <div className="ph-container">
            <div className="ph-section-shell">
              <div className="ph-kicker">Why Phonak</div>
              <h2 className="ph-title">Why Choose Phonak Hearing Aids?</h2>
              <p className="ph-lead">
                Phonak hearing aids are designed to support clearer speech, better listening comfort, and easier communication in real-life situations. The brand offers different types of hearing aids, including RIC hearing aids, BTE hearing aid options, custom in-ear hearing aids, rechargeable hearing aids, Bluetooth hearing aids, CROS hearing aid solutions, and powerful hearing aid devices for higher levels of hearing loss.
              </p>
              <p className="ph-copy">
                Many users search online for the best hearing machine, best hearing aid machine, or best hearing aid in India, but the right device depends on your hearing test result, ear comfort, lifestyle, handling ability, connectivity needs, and audiologist recommendation. Sound for Life helps you understand Phonak options in a simple and practical way.
              </p>

              <div className="ph-card-grid-2">
                {featureCards.map((card) => (
                  <article key={card.title} className="ph-card">
                    <div className="ph-card-icon" aria-hidden="true">
                      {card.icon}
                    </div>
                    <h3 className="ph-card-title">{card.title}</h3>
                    <p className="ph-card-copy">{card.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ph-section">
          <div className="ph-container">
            <div className="ph-section-shell">
              <div className="ph-kicker">Popular Options</div>
              <h2 className="ph-title">Find a Phonak Hearing Aid That Matches Your Needs</h2>
              <p className="ph-lead">
                Phonak offers different hearing aid devices for different user needs. Some users want a small hearing machine or hearing aid inside ear, some prefer rechargeable hearing aids, while others need Bluetooth connectivity, stronger support, or help in noisy environments.
              </p>

              <div className="ph-card-grid-3">
                {productCards.map((card) => (
                  <article key={card.title} className="ph-card">
                    <div className="ph-card-icon" aria-hidden="true">
                      👂
                    </div>
                    <h3 className="ph-card-title">{card.title}</h3>
                    <p className="ph-card-subtitle">User need: {card.need}</p>
                    <p className="ph-card-copy">{card.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ph-section ph-section-soft">
          <div className="ph-container">
            <div className="ph-section-shell">
              <div className="ph-kicker">Technology</div>
              <h2 className="ph-title">Technology That Supports Real-Life Hearing</h2>
              <p className="ph-lead">
                Phonak hearing aids are designed to make everyday listening easier, especially when speech clarity, background noise, connectivity, and comfort matter. Instead of choosing only from hearing aid images, hearing aid photos, or pictures of hearing aids, it is better to understand how the technology supports your real hearing needs.
              </p>

              <div className="ph-tech-grid">
                {technologyCards.map((card) => (
                  <article key={card.title} className="ph-card">
                    <div className="ph-card-icon" aria-hidden="true">
                      {card.icon}
                    </div>
                    <h3 className="ph-card-title">{card.title}</h3>
                    <p className="ph-card-copy">{card.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ph-section">
          <div className="ph-container">
            <div className="ph-section-shell">
              <div className="ph-kicker">Types of Hearing Aids</div>
              <h2 className="ph-title">Different Types of Hearing Aids Available in Phonak</h2>
              <p className="ph-lead">
                Before choosing any hearing aid machine, it is important to understand the basic types of hearing aids. Phonak offers multiple styles depending on hearing loss level, ear comfort, design preference, and audiologist recommendation.
              </p>

              <div className="ph-accordion-grid">
                {hearingAidTypes.map((item) => (
                  <details key={item.title} className="ph-type-item">
                    <summary>{item.title}</summary>
                    <div className="ph-type-body">{item.copy}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ph-section ph-section-blue">
          <div className="ph-container">
            <div className="ph-section-shell">
              <div className="ph-kicker">Guided Process</div>
              <h2 className="ph-title">Not Sure Which Phonak Hearing Aid Is Right for You?</h2>
              <p className="ph-lead">
                Choosing the best hearing aids should not depend only on brand name, online reviews, product appearance, or hearing aid images. Your hearing level, lifestyle, ear comfort, speech clarity needs, phone usage, handling ability, and budget all matter.
              </p>
              <p className="ph-copy">
                At Sound for Life, our audiologists help you explore Phonak hearing aids through a guided process.
              </p>

              <div className="ph-steps">
                {steps.map((step, index) => (
                  <article key={step.title} className="ph-step-card">
                    <div className="ph-step-index">{index + 1}</div>
                    <h3 className="ph-step-title">{step.title}</h3>
                    <p className="ph-step-copy">{step.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ph-section">
          <div className="ph-container">
            <div className="ph-section-shell">
              <div className="ph-kicker">Suitability</div>
              <h2 className="ph-title">Is Phonak Suitable for You?</h2>
              <p className="ph-lead">
                Phonak hearing aids may be suitable for people who have difficulty understanding speech, miss words in noisy places, struggle during phone calls, ask others to repeat, or feel disconnected in conversations.
              </p>

              <div className="ph-checklist">
                <div className="ph-check-grid">
                  {suitabilityPoints.map((point) => (
                    <div key={point} className="ph-checklist-item">
                      <span className="ph-check-mark" aria-hidden="true">✓</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                <p className="ph-disclaimer">
                  Final recommendation should always be made after a hearing test and audiologist consultation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="ph-section ph-section-soft">
          <div className="ph-container">
            <div className="ph-section-shell">
              <div className="ph-kicker">Why Sound for Life</div>
              <h2 className="ph-title">Phonak Technology, Sound for Life Care</h2>
              <p className="ph-lead">
                Buying a hearing aid is not just about selecting a device. It is about testing, trial, fitting, adjustment, comfort, counselling, support, and long-term care. Sound for Life helps you experience Phonak hearing aids with expert clinical guidance.
              </p>

              <div className="ph-benefit-grid">
                {benefits.map((benefit) => (
                  <article key={benefit.title} className="ph-card">
                    <div className="ph-card-icon" aria-hidden="true">
                      🤝
                    </div>
                    <h3 className="ph-card-title">{benefit.title}</h3>
                    <p className="ph-card-copy">{benefit.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="ph-section">
          <div className="ph-container">
            <div className="ph-cta-band">
              <div className="ph-kicker">Take the Next Step</div>
              <h2 className="ph-title">Experience Phonak Hearing Aids with Expert Guidance</h2>
              <p className="ph-lead" style={{ marginTop: 14 }}>
                If you are searching for the best hearing aids, best hearing aid machine, hearing aid centre, or hearing aid devices near you, Sound for Life can help you take the next step with confidence.
              </p>
              <p className="ph-copy" style={{ marginTop: 12 }}>
                Book a hearing test and let our audiologists help you explore suitable Phonak hearing aids based on your hearing level, lifestyle, comfort, connectivity preference, and budget.
              </p>

              <div className="ph-cta-actions">
                <Link
                  className="ph-btn ph-btn-primary"
                  href={ctaHref("hearing-test", "book-free-hearing-test", "final-cta")}
                >
                  Book Free Hearing Test
                </Link>
                <Link
                  className="ph-btn ph-btn-secondary"
                  href={ctaHref("clinic-visit", "find-nearest-clinic", "final-cta")}
                >
                  Find Nearest Clinic
                </Link>
                <Link
                  className="ph-btn ph-btn-secondary"
                  href={ctaHref("audiologist", "talk-to-an-audiologist", "final-cta")}
                >
                  Talk to an Audiologist
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="ph-section ph-section-soft">
          <div className="ph-container">
            <div className="ph-section-shell">
              <div className="ph-kicker">FAQs</div>
              <h2 className="ph-title">FAQs About Phonak Hearing Aids</h2>

              <div className="ph-accordion-grid">
                {faqs.map((faq) => (
                  <details key={faq.question} className="ph-faq-item">
                    <summary>{faq.question}</summary>
                    <div className="ph-faq-body">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
    </>
  );
}