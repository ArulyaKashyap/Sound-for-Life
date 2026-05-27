// FILE: components/hearing-aids/brands/SigniaBrandPage.tsx
import Image from "next/image";
import Link from "next/link";
import { buildCtaHref } from "@/lib/cta";

type FeatureCard = {
  title: string;
  body: string;
  icon: string;
};

type ProductCard = {
  title: string;
  need: string;
  body: string;
  icon: string;
};

type TypeItem = {
  title: string;
  body: string;
};

type ProcessStep = {
  title: string;
  body: string;
};

type BenefitCard = {
  title: string;
  body: string;
  icon: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const whyChooseCards: FeatureCard[] = [
  {
    title: "Clearer Conversations",
    body: "Signia hearing aids are built to support speech clarity in everyday conversations, including situations where background noise may make hearing difficult.",
    icon: "🗣️",
  },
  {
    title: "Modern Digital Technology",
    body: "Signia offers digital hearing aids with advanced sound processing, app-based control in selected models, and personalised listening support.",
    icon: "✨",
  },
  {
    title: "Rechargeable Convenience",
    body: "Selected Signia models come with rechargeable technology, helping users avoid frequent battery changes and making daily use easier.",
    icon: "🔋",
  },
  {
    title: "Discreet & Stylish Options",
    body: "From small in-ear hearing aids to slim RIC hearing aids and nearly invisible hearing aids, Signia offers multiple designs for different comfort and appearance preferences.",
    icon: "👂",
  },
];

const signiaOptions: ProductCard[] = [
  {
    title: "Pure Charge&Go IX",
    need: "I want strong everyday performance",
    body: "A rechargeable RIC hearing aid option designed for users who want clear conversations, modern connectivity, and comfortable daily use.",
    icon: "🔋",
  },
  {
    title: "Styletto IX",
    need: "I want a stylish hearing aid",
    body: "A slim and elegant hearing aid option for users who want advanced hearing support with a modern design.",
    icon: "✨",
  },
  {
    title: "Silk Charge&Go IX",
    need: "I want a discreet hearing aid",
    body: "A small CIC hearing aid option designed for users who prefer a nearly invisible and rechargeable hearing aid.",
    icon: "👂",
  },
  {
    title: "Active Pro IX",
    need: "I want an earbud-style hearing aid",
    body: "A modern earbud-style hearing aid option for active users who prefer a familiar and lifestyle-friendly look.",
    icon: "🎧",
  },
  {
    title: "Insio IX",
    need: "I want a custom in-ear fit",
    body: "A custom in-ear hearing aid option for users who want discreet comfort and personalised fitting.",
    icon: "🦻",
  },
  {
    title: "Motion Charge&Go IX",
    need: "I need stronger hearing support",
    body: "A BTE hearing aid option suitable for users who need dependable support and rechargeable convenience.",
    icon: "💪",
  },
];

const hearingAidTypes: TypeItem[] = [
  {
    title: "RIC Hearing Aids",
    body: "RIC hearing aids, also called receiver-in-canal hearing aids, are slim devices worn behind the ear with a small receiver placed in the ear canal. They are popular because they are comfortable, discreet, and suitable for many users.",
  },
  {
    title: "BTE Hearing Aids",
    body: "BTE hearing aid models sit behind the ear and are often suitable for users who need stronger hearing support, easier handling, or a more powerful hearing solution.",
  },
  {
    title: "CIC Hearing Aids",
    body: "CIC hearing aids, or completely-in-canal hearing aids, are small devices placed inside the ear canal. They are preferred by users looking for small hearing machine options or invisible hearing aids.",
  },
  {
    title: "IIC Hearing Aids",
    body: "IIC hearing aids are among the most discreet hearing aid devices. These are placed deeper inside the ear canal and are often chosen by users who want the hearing aid inside ear to remain less visible.",
  },
  {
    title: "In-Ear Hearing Aids",
    body: "In-ear hearing aids are custom-fit or ready-to-wear devices placed inside the ear. They may be suitable for users who want compact hearing support without a behind-the-ear design.",
  },
  {
    title: "Rechargeable Hearing Aids",
    body: "Rechargeable hearing aids reduce the need for regular battery replacement. Selected Signia models offer charging cases and rechargeable convenience for daily use.",
  },
  {
    title: "Bluetooth Hearing Aids",
    body: "Bluetooth hearing aids allow selected users to connect their hearing aids with compatible phones, TVs, or apps for better convenience, streaming, and control.",
  },
  {
    title: "CROS Hearing Aid and BAHA Hearing Aid",
    body: "CROS hearing aid and BAHA hearing aid solutions are usually recommended for specific hearing conditions, such as single-sided hearing loss or bone-conduction-related needs. These should only be considered after a proper hearing test and audiologist consultation.",
  },
];

const processSteps: ProcessStep[] = [
  {
    title: "Hearing Test",
    body: "We begin with a professional hearing test to understand your hearing level and listening difficulty.",
  },
  {
    title: "Audiologist Consultation",
    body: "Our audiologist explains your hearing test results and recommends suitable Signia hearing aid devices based on your needs.",
  },
  {
    title: "Hearing Aid Trial",
    body: "You can experience suitable options and understand how the hearing aid feels, sounds, and performs in real-life situations.",
  },
  {
    title: "Fitting & Fine-Tuning",
    body: "The hearing aid is programmed and adjusted according to your hearing profile, comfort, and feedback.",
  },
  {
    title: "Aftercare Support",
    body: "Sound for Life supports you after purchase with follow-ups, cleaning guidance, servicing support, and adjustment assistance.",
  },
];

const benefitCards: BenefitCard[] = [
  {
    title: "Expert Audiologist Support",
    body: "Our audiologists help you understand your hearing test results and recommend suitable Signia hearing aids based on your hearing needs.",
    icon: "🩺",
  },
  {
    title: "Trial Before Final Decision",
    body: "Instead of choosing only from hearing aid images or pictures of hearing aids, you can experience suitable options through guided trial support.",
    icon: "✅",
  },
  {
    title: "Personalised Fitting",
    body: "Every hearing aid needs proper fitting and fine-tuning. We adjust your device according to your hearing profile and comfort.",
    icon: "⚙️",
  },
  {
    title: "Multi-Brand Comparison",
    body: "Sound for Life deals in multiple hearing aid brands, so you can compare Signia with other suitable hearing aid devices if required.",
    icon: "🔎",
  },
  {
    title: "Aftercare & Servicing Support",
    body: "We support you beyond purchase with follow-ups, device care, cleaning guidance, servicing support, and adjustment help.",
    icon: "🤝",
  },
];

const suitabilityPoints = [
  "Clearer speech understanding",
  "Digital hearing aids with modern technology",
  "Rechargeable hearing aids for daily convenience",
  "Bluetooth hearing aids for compatible devices",
  "Invisible hearing aids or small hearing machine options",
  "RIC hearing aids for comfort and discreet use",
  "BTE hearing aid options for stronger support",
  "In-ear hearing aids for compact fitting",
  "Professional fitting and long-term aftercare support",
];

const faqs: FaqItem[] = [
  {
    question: "What is a hearing aid?",
    answer:
      "A hearing aid is a small electronic device that helps people hear sounds more clearly. It captures sound, processes it digitally, and makes important sounds easier to hear based on the user’s hearing loss. Many people also search for it as a hearing machine, ear hearing machine, or hearing aid machine.",
  },
  {
    question: "Are Signia hearing aids available at Sound for Life?",
    answer:
      "Yes, Sound for Life deals in Signia hearing aids. Availability may vary by clinic, model, and user requirement, so it is best to book a hearing test or speak with an audiologist.",
  },
  {
    question: "Which is the best Signia hearing aid?",
    answer:
      "The best Signia hearing aid depends on your hearing loss level, lifestyle, comfort preference, design choice, phone usage, and budget. A professional hearing test is required before selecting any hearing aid device.",
  },
  {
    question: "Are Signia hearing aids rechargeable?",
    answer:
      "Yes, selected Signia hearing aids are rechargeable. Models such as Pure Charge&Go IX, Silk Charge&Go IX, Styletto IX, and Motion Charge&Go IX include rechargeable options, depending on model availability and recommendation.",
  },
  {
    question: "Does Signia offer Bluetooth hearing aids?",
    answer:
      "Yes, selected Signia hearing aids offer Bluetooth connectivity and app-based control. Bluetooth support depends on the selected model and compatible device.",
  },
  {
    question: "What are CIC hearing aids?",
    answer:
      "CIC hearing aids, or completely-in-canal hearing aids, are small hearing aids placed inside the ear canal. They are suitable for users who want a compact and less visible hearing solution, depending on hearing loss level and ear suitability.",
  },
  {
    question: "What are invisible hearing aids?",
    answer:
      "Invisible hearing aids are very small devices designed to sit inside the ear canal so they remain less noticeable. Suitability depends on hearing level, ear shape, comfort, and audiologist recommendation.",
  },
  {
    question: "What are RIC hearing aids?",
    answer:
      "RIC hearing aids, or receiver-in-canal hearing aids, are slim devices worn behind the ear with a small receiver placed inside the ear canal. They are popular because they are comfortable, discreet, and suitable for many types of hearing loss.",
  },
  {
    question: "What is the difference between BTE and RIC hearing aids?",
    answer:
      "BTE hearing aids sit behind the ear and are often recommended for users who need stronger support or easier handling. RIC hearing aids are usually slimmer and more discreet, with the receiver placed inside the ear canal. The right choice depends on hearing loss level, comfort, and audiologist recommendation.",
  },
  {
    question: "Can I try Signia hearing aids before buying?",
    answer:
      "At Sound for Life, suitable trial options may be discussed after your hearing test and audiologist consultation. Trial availability may vary depending on clinic, model, and hearing requirement.",
  },
];

function buildHref(
  intent: "hearing-test" | "clinic-visit",
  cta: string,
  referrerSection: string
) {
  return buildCtaHref({
    intent,
    sourcePage: "signia-brand-page",
    cta,
    referrerSection,
  });
}

export default function SigniaBrandPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Signia Hearing Aids in India | Explore Signia at Sound for Life",
        url: "/hearing-aids/brands/signia",
        description:
          "Explore Signia hearing aids at Sound for Life. Learn about rechargeable, Bluetooth, RIC, CIC, invisible, and digital hearing aids with expert consultation, trial, fitting, and aftercare support.",
      },
      {
        "@type": "MedicalWebPage",
        name: "Signia Hearing Aids at Sound for Life",
        url: "/hearing-aids/brands/signia",
        description:
          "Explore Signia hearing aids with hearing tests, consultation, trial, fitting, and aftercare support at Sound for Life.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          { "@type": "ListItem", position: 2, name: "Hearing Aids", item: "/hearing-aids" },
          { "@type": "ListItem", position: 3, name: "Brands", item: "/hearing-aids/brands" },
          {
            "@type": "ListItem",
            position: 4,
            name: "Signia",
            item: "/hearing-aids/brands/signia",
          },
        ],
      },
      {
        "@type": "Brand",
        name: "Signia",
        url: "/hearing-aids/brands/signia",
      },
      {
        "@type": "Product",
        name: "Signia Hearing Aids",
        brand: {
          "@type": "Brand",
          name: "Signia",
        },
        description:
          "Signia hearing aids including rechargeable hearing aids, Bluetooth hearing aids, RIC hearing aids, BTE hearing aid models, CIC hearing aids, IIC hearing aids, and in-ear hearing aids.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <style>{`
        .signia-page {
          padding-top: 118px;
          background:
            radial-gradient(circle at top left, rgba(232, 244, 253, 0.4), transparent 26%),
            linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
        }

        .signia-container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .signia-section {
          padding: 88px 0;
        }

        .signia-section-tight {
          padding: 62px 0;
        }

        .signia-section-soft {
          background: linear-gradient(180deg, #f7fbff 0%, #ffffff 100%);
        }

        .signia-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 48px;
          color: var(--sfl-text-soft, #607184);
          font-size: 14px;
          font-weight: 700;
        }

        .signia-breadcrumb-sep {
          opacity: 0.5;
        }

        .signia-hero {
          position: relative;
          width: 100%;
          min-height: 560px;
          overflow: hidden;
          background: #082e63;
        }

        .signia-hero-media {
          position: absolute;
          inset: 0;
        }

        .signia-hero-image {
          object-fit: cover;
          object-position: center;
        }

        .signia-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(8, 46, 99, 0.18) 0%, rgba(8, 46, 99, 0.38) 100%);
        }

        .signia-intro-shell {
          padding-top: 36px;
        }

        .signia-brand-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          min-height: 58px;
          padding: 10px 18px;
          border-radius: 20px;
          background: rgba(255,255,255,0.98);
          border: 1px solid rgba(13,59,125,0.1);
          box-shadow: 0 16px 34px rgba(13,59,125,0.08);
        }

        .signia-brand-mark {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0d3b7d 0%, #0a5cae 100%);
          color: #ffffff;
          font-size: 18px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .signia-brand-copy {
          display: grid;
          gap: 2px;
        }

        .signia-brand-label {
          color: #607184;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          line-height: 1;
        }

        .signia-brand-name {
          color: #0d3b7d;
          font-size: 24px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.02em;
        }

        .signia-page-title {
          margin: 22px 0 0;
          color: #0d3b7d;
          font-size: 56px;
          line-height: 1;
          letter-spacing: -0.05em;
          max-width: 900px;
        }

        .signia-page-subtitle {
          margin: 18px 0 0;
          color: #607184;
          font-size: 19px;
          line-height: 1.8;
          max-width: 940px;
        }

        .signia-page-copy {
          margin: 16px 0 0;
          color: #607184;
          font-size: 16px;
          line-height: 1.9;
          max-width: 980px;
        }

        .signia-page-actions {
          margin-top: 28px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .signia-btn {
          min-height: 54px;
          padding: 14px 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 800;
          line-height: 1;
          text-decoration: none;
          transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease, background 160ms ease;
        }

        .signia-btn:hover {
          transform: translateY(-2px);
        }

        .signia-btn-primary {
          background: linear-gradient(180deg, #f89a3f 0%, #f4831f 100%);
          color: #ffffff;
          box-shadow: 0 16px 32px rgba(244,131,31,0.26);
        }

        .signia-btn-secondary {
          background: #ffffff;
          color: #0d3b7d;
          border: 1px solid rgba(13,59,125,0.12);
          box-shadow: 0 12px 22px rgba(13,59,125,0.08);
        }

        .signia-trust-line {
          margin-top: 18px;
          color: #607184;
          font-size: 13px;
          font-weight: 800;
          line-height: 1.7;
        }

        .signia-section-header {
          max-width: 980px;
          margin-bottom: 30px;
        }

        .signia-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #f4831f;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .signia-kicker::before {
          content: "";
          width: 28px;
          height: 2px;
          background: rgba(244,131,31,0.4);
        }

        .signia-h2 {
          margin: 14px 0 0;
          color: #0d3b7d;
          font-size: 42px;
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .signia-intro {
          margin: 14px 0 0;
          color: #607184;
          font-size: 17px;
          line-height: 1.9;
        }

        .signia-grid-2,
        .signia-grid-3 {
          display: grid;
          gap: 20px;
        }

        .signia-grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .signia-grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .signia-card,
        .signia-accordion-item,
        .signia-benefit-card-featured,
        .signia-cta-band {
          border-radius: 26px;
        }

        .signia-card,
        .signia-accordion-item,
        .signia-benefit-card-featured {
          background: rgba(255,255,255,0.98);
          border: 1px solid rgba(13,59,125,0.08);
          box-shadow: 0 18px 42px rgba(13,59,125,0.08);
        }

        .signia-card {
          height: 100%;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .signia-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 50px rgba(13,59,125,0.12);
          border-color: rgba(10,92,174,0.14);
        }

        .signia-card-body {
          height: 100%;
          padding: 26px;
          display: flex;
          flex-direction: column;
        }

        .signia-icon-badge {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #eef7fd, #ffffff);
          border: 1px solid rgba(13,59,125,0.08);
          box-shadow: 0 10px 22px rgba(13,59,125,0.05);
          font-size: 24px;
        }

        .signia-h3 {
          margin: 16px 0 0;
          color: #0d3b7d;
          font-size: 24px;
          line-height: 1.28;
          letter-spacing: -0.02em;
        }

        .signia-body {
          margin: 12px 0 0;
          color: #607184;
          font-size: 15px;
          line-height: 1.85;
        }

        .signia-need {
          margin-top: 12px;
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          width: fit-content;
          padding: 8px 12px;
          border-radius: 999px;
          background: #eef7fd;
          color: #0a5cae;
          font-size: 12px;
          font-weight: 800;
          line-height: 1;
        }

        .signia-accordion {
          display: grid;
          gap: 14px;
        }

        .signia-accordion-item {
          overflow: hidden;
        }

        .signia-accordion-summary {
          list-style: none;
          width: 100%;
          min-height: 68px;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          color: #0d3b7d;
          font-size: 18px;
          font-weight: 800;
          line-height: 1.5;
        }

        .signia-accordion-summary::-webkit-details-marker {
          display: none;
        }

        .signia-accordion-icon {
          flex-shrink: 0;
          color: #0a5cae;
          font-size: 22px;
          font-weight: 900;
          transition: transform 220ms ease;
        }

        .signia-accordion-item[open] .signia-accordion-icon {
          transform: rotate(45deg);
        }

        .signia-accordion-content {
          padding: 0 22px 22px;
        }

        .signia-timeline {
          position: relative;
          display: grid;
          gap: 18px;
        }

        .signia-timeline::before {
          content: "";
          position: absolute;
          left: 24px;
          top: 14px;
          bottom: 14px;
          width: 2px;
          background: linear-gradient(180deg, rgba(10,92,174,0.18) 0%, rgba(244,131,31,0.16) 100%);
        }

        .signia-timeline-item {
          position: relative;
          display: grid;
          grid-template-columns: 64px minmax(0, 1fr);
          gap: 18px;
          align-items: start;
        }

        .signia-step-dot {
          position: relative;
          z-index: 1;
          width: 48px;
          height: 48px;
          margin-top: 6px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #f89a3f 0%, #f4831f 100%);
          color: #ffffff;
          font-size: 16px;
          font-weight: 900;
          box-shadow: 0 12px 24px rgba(244,131,31,0.24);
        }

        .signia-checklist {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 28px;
        }

        .signia-check-item {
          min-height: 72px;
          padding: 18px 18px 18px 52px;
          position: relative;
          border-radius: 20px;
          background: rgba(255,255,255,0.98);
          border: 1px solid rgba(13,59,125,0.08);
          box-shadow: 0 14px 30px rgba(13,59,125,0.06);
          color: #263445;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.7;
        }

        .signia-check-item::before {
          content: "✓";
          position: absolute;
          left: 18px;
          top: 18px;
          width: 22px;
          height: 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #eef8f1;
          color: #24714c;
          font-size: 13px;
          font-weight: 900;
        }

        .signia-disclaimer {
          margin-top: 16px;
          color: #607184;
          font-size: 14px;
          line-height: 1.8;
          font-weight: 700;
        }

        .signia-benefits-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: 20px;
          align-items: stretch;
        }

        .signia-benefit-card-featured {
          height: 100%;
          background:
            radial-gradient(circle at top right, rgba(244,131,31,0.08), transparent 18%),
            linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
        }

        .signia-benefits-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .signia-benefits-grid .signia-card:last-child:nth-child(odd) {
          grid-column: 1 / -1;
        }

        .signia-cta-band {
          padding: 34px;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent 22%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          color: #ffffff;
          box-shadow: 0 24px 50px rgba(13,59,125,0.16);
          text-align: center;
        }

        .signia-cta-band .signia-h2,
        .signia-cta-band .signia-intro {
          color: #ffffff;
        }

        .signia-cta-copy {
          max-width: 860px;
          margin-left: auto;
          margin-right: auto;
        }

        .signia-cta-actions {
          margin-top: 24px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .signia-faq-list {
          display: grid;
          gap: 12px;
          max-width: 980px;
        }

        @media (max-width: 1220px) {
          .signia-grid-3,
          .signia-grid-2,
          .signia-checklist,
          .signia-benefits-layout,
          .signia-benefits-grid {
            grid-template-columns: 1fr;
          }

          .signia-page-title {
            font-size: 46px;
          }

          .signia-h2 {
            font-size: 36px;
          }
        }

        @media (max-width: 767px) {
          .signia-page {
            padding-top: 112px;
          }

          .signia-container {
            padding: 0 16px;
          }

          .signia-section {
            padding: 72px 0;
          }

          .signia-section-tight {
            padding: 52px 0;
          }

          .signia-hero {
            min-height: 320px;
          }

          .signia-page-title {
            font-size: 34px;
            line-height: 1.04;
          }

          .signia-page-subtitle {
            font-size: 16px;
            line-height: 1.72;
          }

          .signia-page-copy {
            font-size: 14px;
            line-height: 1.82;
          }

          .signia-page-actions,
          .signia-cta-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .signia-card-body,
          .signia-cta-band {
            padding: 22px;
          }

          .signia-breadcrumb {
            flex-wrap: wrap;
            row-gap: 4px;
          }

          .signia-timeline-item {
            grid-template-columns: 52px minmax(0, 1fr);
            gap: 14px;
          }

          .signia-timeline::before {
            left: 18px;
          }

          .signia-step-dot {
            width: 36px;
            height: 36px;
            font-size: 13px;
          }

          .signia-accordion-summary {
            font-size: 16px;
          }
        }
      `}</style>

      <main className="signia-page">
        <div className="signia-container">
          <nav className="signia-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="signia-breadcrumb-sep">/</span>
            <Link href="/hearing-aids">Hearing Aids</Link>
            <span className="signia-breadcrumb-sep">/</span>
            <Link href="/hearing-aids/brands">Brands</Link>
            <span className="signia-breadcrumb-sep">/</span>
            <span aria-current="page">Signia</span>
          </nav>
        </div>

        <section className="signia-hero" aria-label="Signia hearing aids banner">
          <div className="signia-hero-media">
            <Image
              src="/images/home-hearing-family.jpeg"
              alt="Premium hearing care consultation and hearing aid support"
              fill
              priority
              sizes="100vw"
              className="signia-hero-image"
            />
            <div className="signia-hero-overlay" />
          </div>
        </section>

        <section className="signia-section signia-section-tight signia-intro-shell">
          <div className="signia-container">
            <div className="signia-brand-badge" aria-label="Signia brand badge">
              <div className="signia-brand-mark">S</div>
              <div className="signia-brand-copy">
                <span className="signia-brand-label">Hearing Aid Brand</span>
                <span className="signia-brand-name">Signia</span>
              </div>
            </div>

            <h1 className="signia-page-title">
              Explore Signia Hearing Aids at Sound for Life
            </h1>

            <p className="signia-page-subtitle">
              Signia is one of the leading hearing aid brands known for advanced digital
              hearing aids, modern designs, rechargeable options, Bluetooth connectivity,
              and discreet hearing solutions. At Sound for Life, we help you explore
              suitable Signia hearing aids based on your hearing level, lifestyle,
              comfort, and daily communication needs.
            </p>

            <p className="signia-page-copy">
              Whether you are searching for a hearing machine, hearing aid machine, small
              hearing machine, invisible hearing aids, rechargeable hearing aids, or
              Bluetooth hearing aids, our audiologists guide you with the right hearing
              test, consultation, trial, fitting, and aftercare support.
            </p>

            <div className="signia-page-actions">
              <Link
                href={buildHref("hearing-test", "book-free-hearing-test", "intro")}
                className="signia-btn signia-btn-primary"
              >
                Book Free Hearing Test
              </Link>
              <Link
                href={buildHref("clinic-visit", "talk-to-an-audiologist", "intro")}
                className="signia-btn signia-btn-secondary"
              >
                Talk to an Audiologist
              </Link>
            </div>

            <div className="signia-trust-line">
              Get expert guidance for Signia hearing aids at Sound for Life clinics.
            </div>
          </div>
        </section>

        <section className="signia-section">
          <div className="signia-container">
            <div className="signia-section-header">
              <div className="signia-kicker">Brand Overview</div>
              <h2 className="signia-h2">Why Choose Signia Hearing Aids?</h2>
              <p className="signia-intro">
                Signia hearing aids are designed to support clearer conversations,
                better listening comfort, and a more confident daily hearing experience.
                The brand offers different types of hearing aids, including RIC hearing
                aids, BTE hearing aids, CIC hearing aids, IIC hearing aids, in-ear hearing
                aids, rechargeable hearing aids, and Bluetooth hearing aids.
              </p>
              <p className="signia-intro">
                Many users search online for the best hearing machine or best hearing aid
                machine, but the right choice depends on your hearing loss level, ear
                comfort, lifestyle, phone usage, and audiologist recommendation. That is
                why Sound for Life helps you choose Signia with professional support
                instead of guessing online.
              </p>
            </div>

            <div className="signia-grid-2">
              {whyChooseCards.map((card) => (
                <article key={card.title} className="signia-card">
                  <div className="signia-card-body">
                    <div className="signia-icon-badge" aria-hidden="true">
                      {card.icon}
                    </div>
                    <h3 className="signia-h3">{card.title}</h3>
                    <p className="signia-body">{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="signia-section signia-section-soft">
          <div className="signia-container">
            <div className="signia-section-header">
              <div className="signia-kicker">Popular Models</div>
              <h2 className="signia-h2">Find a Signia Hearing Aid That Matches Your Lifestyle</h2>
              <p className="signia-intro">
                Signia offers different hearing aid devices for different needs. Some
                users want a discreet hearing aid inside ear, some prefer a rechargeable
                device, while others need stronger support, Bluetooth connectivity, or a
                more stylish design.
              </p>
            </div>

            <div className="signia-grid-3">
              {signiaOptions.map((item) => (
                <article key={item.title} className="signia-card">
                  <div className="signia-card-body">
                    <div className="signia-icon-badge" aria-hidden="true">
                      {item.icon}
                    </div>
                    <h3 className="signia-h3">{item.title}</h3>
                    <div className="signia-need">{item.need}</div>
                    <p className="signia-body">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="signia-section">
          <div className="signia-container">
            <div className="signia-section-header">
              <div className="signia-kicker">Hearing Aid Types</div>
              <h2 className="signia-h2">Different Types of Signia Hearing Aids</h2>
              <p className="signia-intro">
                Before choosing any hearing aid machine, it is important to understand the
                basic types of hearing aids. Signia offers multiple styles depending on
                hearing needs, design preference, and audiologist recommendation.
              </p>
            </div>

            <div className="signia-accordion">
              {hearingAidTypes.map((item) => (
                <details key={item.title} className="signia-accordion-item">
                  <summary className="signia-accordion-summary">
                    <span>{item.title}</span>
                    <span className="signia-accordion-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="signia-accordion-content">
                    <p className="signia-body">{item.body}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="signia-section signia-section-soft">
          <div className="signia-container">
            <div className="signia-section-header">
              <div className="signia-kicker">Guided Selection</div>
              <h2 className="signia-h2">Not Sure Which Signia Hearing Aid Is Right for You?</h2>
              <p className="signia-intro">
                Choosing the best hearing aid in India should not be based only on hearing
                aid images, hearing aid photos, online reviews, or product names. The
                right hearing aid depends on your hearing test result, comfort, lifestyle,
                speech clarity needs, handling ability, design preference, and budget.
              </p>
              <p className="signia-intro">
                At Sound for Life, our audiologists help you explore Signia hearing aids
                through a guided process.
              </p>
            </div>

            <div className="signia-timeline">
              {processSteps.map((step, index) => (
                <article key={step.title} className="signia-timeline-item">
                  <div className="signia-step-dot">{index + 1}</div>
                  <div className="signia-card">
                    <div className="signia-card-body">
                      <h3 className="signia-h3" style={{ marginTop: 0 }}>
                        {step.title}
                      </h3>
                      <p className="signia-body">{step.body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="signia-section">
          <div className="signia-container">
            <div className="signia-section-header">
              <div className="signia-kicker">Suitability</div>
              <h2 className="signia-h2">Is Signia Suitable for You?</h2>
              <p className="signia-intro">
                Signia hearing aids may be suitable for people who face difficulty hearing
                conversations, miss words in noisy places, ask others to repeat, struggle
                during phone calls, or feel disconnected in family or group discussions.
              </p>
              <p className="signia-intro">You may consider Signia hearing aids if you are looking for:</p>
            </div>

            <div className="signia-checklist">
              {suitabilityPoints.map((point) => (
                <div key={point} className="signia-check-item">
                  {point}
                </div>
              ))}
            </div>

            <p className="signia-disclaimer">
              Final recommendation should always be made after a hearing test and
              audiologist consultation.
            </p>
          </div>
        </section>

        <section className="signia-section signia-section-soft">
          <div className="signia-container">
            <div className="signia-section-header">
              <div className="signia-kicker">Why Sound for Life</div>
              <h2 className="signia-h2">Signia Technology, Sound for Life Care</h2>
              <p className="signia-intro">
                Buying a hearing aid is not just about selecting a device. It is about
                testing, trial, fitting, adjustment, comfort, counselling, and long-term
                support. Sound for Life helps you experience Signia hearing aids with
                expert clinical guidance.
              </p>
            </div>

            <div className="signia-benefits-layout">
              <article className="signia-benefit-card-featured">
                <div className="signia-card-body">
                  <div className="signia-icon-badge" aria-hidden="true">
                    {benefitCards[0].icon}
                  </div>
                  <h3 className="signia-h3">{benefitCards[0].title}</h3>
                  <p className="signia-body">{benefitCards[0].body}</p>
                </div>
              </article>

              <div className="signia-benefits-grid">
                {benefitCards.slice(1).map((card) => (
                  <article key={card.title} className="signia-card">
                    <div className="signia-card-body">
                      <div className="signia-icon-badge" aria-hidden="true">
                        {card.icon}
                      </div>
                      <h3 className="signia-h3">{card.title}</h3>
                      <p className="signia-body">{card.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="signia-section-tight">
          <div className="signia-container">
            <div className="signia-cta-band">
              <div className="signia-kicker" style={{ color: "#ffffff" }}>
                Next Step
              </div>
              <h2 className="signia-h2">Experience Signia Hearing Aids with Expert Guidance</h2>
              <p className="signia-intro signia-cta-copy">
                If you are searching for the best hearing aids, best hearing aid machine,
                hearing aid centre, or hearing aid devices near you, Sound for Life can
                help you take the next step with confidence.
              </p>
              <p className="signia-intro signia-cta-copy">
                Book a hearing test and let our audiologists help you explore suitable
                Signia hearing aids based on your hearing level, lifestyle, comfort, and
                budget.
              </p>

              <div className="signia-cta-actions">
                <Link
                  href={buildHref("hearing-test", "book-free-hearing-test", "final-cta")}
                  className="signia-btn signia-btn-primary"
                >
                  Book Free Hearing Test
                </Link>
                <Link
                  href={buildHref("clinic-visit", "find-nearest-clinic", "final-cta")}
                  className="signia-btn signia-btn-secondary"
                >
                  Find Nearest Clinic
                </Link>
                <Link
                  href={buildHref("clinic-visit", "talk-to-an-audiologist", "final-cta")}
                  className="signia-btn signia-btn-secondary"
                >
                  Talk to an Audiologist
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="signia-section">
          <div className="signia-container">
            <div className="signia-section-header">
              <div className="signia-kicker">FAQs</div>
              <h2 className="signia-h2">FAQs About Signia Hearing Aids</h2>
            </div>

            <div className="signia-faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="signia-accordion-item">
                  <summary className="signia-accordion-summary">
                    <span>{faq.question}</span>
                    <span className="signia-accordion-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="signia-accordion-content">
                    <p className="signia-body">{faq.answer}</p>
                  </div>
                </details>
              ))}
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