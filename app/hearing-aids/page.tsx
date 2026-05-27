// app/hearing-aids/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildCtaHref } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Hearing Aids: Types, Benefits, Trial & Expert Fitting",
  description:
    "Learn what hearing aids are, how they work, types of hearing aids, digital, Bluetooth, rechargeable, invisible, BTE, RIC, CIC, ITC, IIC, CROS, and bone conduction options.",
  alternates: {
    canonical: "/hearing-aids",
  },
  openGraph: {
    title: "Hearing Aids That Help You Hear Life More Clearly",
    description:
      "Understand hearing aids, hearing aid trial, fitting, modern features, and expert guidance before choosing the right device.",
    url: "/hearing-aids",
    type: "website",
  },
};

type BenefitCard = {
  title: string;
  copy: string;
};

type TypeCard = {
  title: string;
  copy: string;
};

type FeatureCard = {
  title: string;
  copy: string;
};

type StepCard = {
  title: string;
  copy: string;
};

type NeedCard = {
  title: string;
  copy: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const whoNeedsChecklist = [
  "You hear people speaking but miss words.",
  "You struggle in background noise.",
  "You ask people to repeat often.",
  "You increase TV or phone volume.",
  "Phone calls feel unclear.",
  "Meetings or group discussions feel difficult.",
  "One ear hears better than the other.",
  "Your family says you are not hearing clearly.",
  "Your hearing test shows hearing loss.",
];

const benefits: BenefitCard[] = [
  {
    title: "Clearer Conversations",
    copy:
      "Hearing aids can help you follow speech more comfortably in daily conversations.",
  },
  {
    title: "Better Family Connection",
    copy:
      "They can help you participate more actively in family discussions, shared moments, and emotional conversations.",
  },
  {
    title: "More Confidence in Social Places",
    copy:
      "With better hearing support, social gatherings may feel less tiring and more enjoyable.",
  },
  {
    title: "Easier Phone and Meeting Communication",
    copy:
      "Modern hearing aids can support clearer listening during calls, meetings, and work conversations.",
  },
  {
    title: "Improved Awareness of Surroundings",
    copy:
      "They can help you notice important sounds like doorbells, traffic, announcements, alarms, or someone calling your name.",
  },
  {
    title: "Reduced Listening Effort",
    copy:
      "When sounds are clearer, the brain does not have to work as hard to guess missing words.",
  },
];

const hearingAidTypes: TypeCard[] = [
  {
    title: "BTE Hearing Aid",
    copy:
      "A behind-the-ear hearing aid sits behind the ear and connects through a tube, dome, or earmould. It is durable and suitable for a wide range of hearing losses.",
  },
  {
    title: "RIC Hearing Aids",
    copy:
      "RIC hearing aids are popular because they are discreet, comfortable, and suitable for many people.",
  },
  {
    title: "In Ear Hearing Aids",
    copy:
      "In ear hearing aids are worn inside the ear and may be custom-made depending on the ear shape and hearing requirement.",
  },
  {
    title: "ITC Hearing Aid",
    copy:
      "An ITC hearing aid fits partly inside the ear canal and balances size with easier handling for some users.",
  },
  {
    title: "CIC Hearing Aids",
    copy:
      "CIC hearing aids fit deeper inside the ear canal and are less visible than many other styles.",
  },
  {
    title: "IIC Hearing Aids",
    copy:
      "IIC hearing aids are highly discreet, but suitability depends on ear canal size, wax, moisture, hearing level, and comfort.",
  },
  {
    title: "Rechargeable Hearing Aids",
    copy:
      "Rechargeable hearing aids use a charging dock or case instead of frequent disposable battery changes.",
  },
  {
    title: "Bluetooth Hearing Aids",
    copy:
      "Bluetooth hearing aids may support calls, streaming, app controls, and easier communication in selected models.",
  },
];

const specialTypes: TypeCard[] = [
  {
    title: "Bone Conduction Hearing Aid",
    copy:
      "A bone conduction hearing aid sends sound vibrations through the bone and may be considered when regular air-conduction hearing aids are not suitable.",
  },
  {
    title: "BAHA Hearing Aid",
    copy:
      "A BAHA hearing aid is a type of bone anchored hearing solution. Suitability should always be assessed by qualified professionals.",
  },
  {
    title: "CROS Hearing Aid",
    copy:
      "A CROS hearing aid may help when a person has very poor hearing in one ear and better hearing in the other ear.",
  },
];

const features: FeatureCard[] = [
  {
    title: "Noise Reduction",
    copy:
      "Helps reduce unwanted background noise and improves listening comfort.",
  },
  {
    title: "Directional Microphones",
    copy:
      "Help focus more on speech coming from a particular direction.",
  },
  {
    title: "Feedback Cancellation",
    copy:
      "Reduces whistling sounds that may happen when amplified sound leaks back into the microphone.",
  },
  {
    title: "Rechargeability",
    copy:
      "Allows daily charging without frequent battery replacement.",
  },
  {
    title: "Bluetooth Connectivity",
    copy:
      "Supports phone calls, audio streaming, and device connectivity in selected models.",
  },
  {
    title: "App-Based Controls",
    copy:
      "Allows users to adjust volume, listening programs, and settings through a mobile app in selected models.",
  },
  {
    title: "Tinnitus Support",
    copy:
      "Some hearing aids include sound support features that may help people who experience ringing or buzzing.",
  },
  {
    title: "Automatic Environment Adjustment",
    copy:
      "Advanced hearing aids can adjust settings based on whether you are in quiet, noise, outdoors, or conversation.",
  },
];

const trialSteps: StepCard[] = [
  {
    title: "Step 1: Hearing Test",
    copy:
      "Your hearing is tested to understand the type and degree of hearing loss.",
  },
  {
    title: "Step 2: Audiologist Consultation",
    copy:
      "Your daily listening challenges, lifestyle, comfort needs, and expectations are discussed.",
  },
  {
    title: "Step 3: Hearing Aid Recommendation",
    copy:
      "Suitable hearing aid styles and features are shortlisted based on your hearing profile.",
  },
  {
    title: "Step 4: Guided Trial",
    copy:
      "You experience how the hearing aid feels and sounds in real listening situations.",
  },
  {
    title: "Step 5: Fitting and Programming",
    copy:
      "The hearing aid is programmed according to your hearing test and comfort.",
  },
  {
    title: "Step 6: Fine-Tuning and Follow-Up",
    copy:
      "Adjustments are made after you use the device in daily life.",
  },
];

const needsCards: NeedCard[] = [
  {
    title: "Specialized Hearing Solutions for Seniors",
    copy:
      "For seniors, a hearing aid is more than a medical device—it is a bridge to independence, safety, and social connection. To drive adoption and long-term retention in this demographic, the product ecosystem must prioritize frictionless usability, physical comfort, and continuous empathetic care.",
  },
  {
    title: "Hearing Aids for Children",
    copy:
      "Children need early support because hearing affects speech, language, learning, and social development.",
  },
  {
    title: "Hearing Aids for Working Professionals",
    copy:
      "Professionals may prefer discreet devices, Bluetooth hearing aids, meeting support, phone call clarity, and better group performance.",
  },
  {
    title: "Hearing Aids for Tinnitus Support",
    copy:
      "Selected digital hearing aids may offer sound support features that can help reduce tinnitus discomfort.",
  },
  {
    title: "Hearing Disability Support",
    copy:
      "The right hearing aid solutions, counselling, family support, and follow-up care can help people participate more comfortably in everyday life.",
  },
];

const careTips = [
  "Keep hearing aids dry.",
  "Clean them gently as advised.",
  "Charge them regularly if rechargeable.",
  "Replace batteries when needed.",
  "Remove wax from domes, tubes, or moulds.",
  "Avoid wearing them while bathing.",
  "Keep them away from heat and chemicals.",
  "Store them safely when not in use.",
];

const myths: FaqItem[] = [
  {
    question: "Myth 1: Hearing aids are only for old people",
    answer:
      "Truth: Hearing aids can help children, adults, working professionals, and seniors depending on hearing loss.",
  },
  {
    question: "Myth 2: Hearing aids cure hearing loss",
    answer:
      "Truth: Hearing aids support hearing but do not cure the underlying hearing loss.",
  },
  {
    question: "Myth 3: Invisible hearing aids are always the best",
    answer:
      "Truth: Invisible hearing aids may look discreet, but the best style depends on hearing loss, ear shape, comfort, power needs, and daily use.",
  },
  {
    question: "Myth 4: Hearing aids make everything normal immediately",
    answer:
      "Truth: The brain needs time to adjust, and follow-up tuning is often needed.",
  },
  {
    question: "Myth 5: One hearing aid is enough for everyone",
    answer:
      "Truth: If both ears need support, two devices may provide better balance and speech understanding.",
  },
  {
    question: "Myth 6: Buying hearing aids online is the same as professional fitting",
    answer:
      "Truth: Hearing test, programming, counselling, trial, and aftercare strongly affect the result.",
  },
  {
    question: "Myth 7: The smallest hearing aid is always the best",
    answer:
      "Truth: A small hearing machine may look appealing, but it may not have the right power, comfort, or features for every person.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What is a hearing aid?",
    answer:
      "A hearing aid is a small electronic device worn in or behind the ear. It helps make selected sounds clearer and easier to hear for people with hearing loss.",
  },
  {
    question: "What is the hearing aid meaning?",
    answer:
      "Hearing aid meaning refers to a device that supports hearing by making sounds, especially speech, clearer for people with hearing loss.",
  },
  {
    question: "Is a hearing machine the same as a hearing aid?",
    answer:
      "Many people use the term hearing machine, ear hearing machine, or hearing aid machine. However, a proper hearing aid is a professionally selected and programmed device based on a hearing test.",
  },
  {
    question: "Who needs hearing aids?",
    answer:
      "People who have difficulty understanding speech, hearing in noise, following conversations, or managing daily communication may benefit from hearing aids after a proper hearing test.",
  },
  {
    question: "What are the main types of hearing aids?",
    answer:
      "Common types include BTE, RIC, in ear hearing aids, ITC, CIC, IIC, rechargeable hearing aids, Bluetooth hearing aids, CROS, and bone conduction hearing aid options.",
  },
  {
    question: "What are digital hearing aids?",
    answer:
      "Digital hearing aids are modern hearing aid devices that process sound through a digital chip and can be programmed according to a person’s hearing test and listening needs.",
  },
  {
    question: "What are Bluetooth hearing aids?",
    answer:
      "Bluetooth hearing aids can connect with smartphones and other compatible devices for calls, audio streaming, app control, and easier communication.",
  },
  {
    question: "Which is the best hearing aid in India?",
    answer:
      "The best hearing aid depends on your hearing test, ear shape, comfort, lifestyle, and audiologist recommendation. There is no single best hearing aid for everyone.",
  },
  {
    question: "Are Amazon hearing aids safe to use?",
    answer:
      "Some people explore Amazon hearing aids or hearing aids online, but it is safer to get a hearing test and professional guidance before choosing a device.",
  },
  {
    question: "Do hearing aids cure hearing disability?",
    answer:
      "No. Hearing aids do not cure hearing disability or hearing loss. They support clearer hearing, better communication, and improved participation in daily life.",
  },
];

function SectionHeader({
  kicker,
  title,
  copy,
  centered = true,
}: {
  kicker: string;
  title: string;
  copy?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`ha-section-header ${
        centered ? "ha-section-header-center" : ""
      }`}
    >
      <div className="ha-kicker ha-kicker-section">{kicker}</div>
      <h2 className="ha-h2">{title}</h2>
      {copy ? <p className="ha-section-copy">{copy}</p> : null}
    </div>
  );
}

function FAQAccordion({
  items,
  idPrefix,
}: {
  items: FaqItem[];
  idPrefix: string;
}) {
  return (
    <div className="ha-faq-list">
      {items.map((item, index) => (
        <details key={item.question} className="ha-faq-item">
          <summary
            className="ha-faq-summary"
            aria-controls={`${idPrefix}-${index}`}
          >
            <span>{item.question}</span>
            <span className="ha-faq-icon">+</span>
          </summary>
          <div id={`${idPrefix}-${index}`} className="ha-faq-content">
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function HearingAidsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hearing Aids",
        item: "/hearing-aids",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
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

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "WebPage"],
    name: "Hearing Aids: Types, Benefits, Trial & Expert Fitting",
    url: "/hearing-aids",
    description:
      "Learn what hearing aids are, how they work, types of hearing aids, digital, Bluetooth, rechargeable, invisible, BTE, RIC, CIC, ITC, IIC, CROS, and bone conduction options.",
  };

  return (
    <>
      <style>{`
        :root {
          --ha-navy: #0d3b7d;
          --ha-navy-deep: #082e63;
          --ha-blue: #0a5cae;
          --ha-blue-soft: #edf6ff;
          --ha-blue-soft-2: #f6fbff;
          --ha-orange: #f4831f;
          --ha-orange-deep: #df7417;
          --ha-white: #ffffff;
          --ha-text: #223548;
          --ha-text-soft: #5f7083;
          --ha-line: rgba(13, 59, 125, 0.1);
          --ha-line-soft: rgba(13, 59, 125, 0.06);
          --ha-shadow: 0 18px 40px rgba(13, 59, 125, 0.08);
          --ha-shadow-lg: 0 28px 70px rgba(13, 59, 125, 0.14);
          --ha-radius-xl: 30px;
          --ha-radius-lg: 22px;
          --ha-radius-md: 18px;
        }

        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; overflow-x: hidden; }
        body {
          font-family: Arial, sans-serif;
          color: var(--ha-text);
          background: #f7fafc;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .ha-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(232, 244, 253, 0.68), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #f7fafc 100%);
        }

        .ha-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .ha-breadcrumb-wrap {
          background: rgba(255,255,255,0.92);
          border-bottom: 1px solid var(--ha-line);
        }

        .ha-breadcrumb {
          min-height: 52px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--ha-text-soft);
          font-size: 14px;
          font-weight: 700;
        }

        .ha-breadcrumb-sep {
          opacity: 0.4;
        }

        .ha-hero-image-section {
          background: #ffffff;
          padding-top: 12px;
        }

        .ha-hero-image-card {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--ha-line);
          box-shadow: var(--ha-shadow);
          background: #dbeeff;
        }

        .ha-hero-image-card-full {
          width: 100%;
          border-radius: 0;
          border-left: 0;
          border-right: 0;
        }

        .ha-hero-image-wrap {
          position: relative;
          width: 100%;
          height: 460px;
        }

        .ha-hero-image {
          object-fit: cover;
          object-position: center;
        }

        .ha-hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(8,46,99,0.04) 0%, rgba(8,46,99,0.12) 100%);
          pointer-events: none;
        }

        .ha-intro-section {
          padding: 54px 0 24px;
          background: #ffffff;
        }

        .ha-intro-shell {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
        }

        .ha-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--ha-navy);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .ha-kicker::before {
          content: "";
          width: 24px;
          height: 2px;
          background: rgba(13,59,125,0.34);
        }

        .ha-kicker-section {
          margin-bottom: 14px;
        }

        .ha-h1 {
          margin: 0;
          color: var(--ha-navy);
          font-size: 62px;
          line-height: 0.98;
          letter-spacing: -0.05em;
        }

        .ha-lead {
          margin: 20px auto 0;
          max-width: 950px;
          color: var(--ha-text);
          font-size: 18px;
          line-height: 1.82;
        }

        .ha-lead-soft {
          color: var(--ha-text-soft);
        }

        .ha-hero-actions {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ha-btn {
          min-height: 50px;
          padding: 12px 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease;
        }

        .ha-btn:hover {
          transform: translateY(-2px);
        }

        .ha-btn-primary {
          background: linear-gradient(180deg, #f89a3f 0%, var(--ha-orange) 100%);
          color: var(--ha-white);
          box-shadow: 0 14px 28px rgba(244,131,31,0.24);
        }

        .ha-btn-primary:hover {
          background: linear-gradient(180deg, #f48b34 0%, var(--ha-orange-deep) 100%);
        }

        .ha-btn-secondary {
          background: #ffffff;
          color: var(--ha-navy);
          border: 1px solid rgba(13,59,125,0.14);
          box-shadow: 0 10px 20px rgba(13,59,125,0.05);
        }

        .ha-main {
          padding: 18px 0 60px;
        }

        .ha-section {
          padding: 56px 0;
        }

        .ha-section-blue {
          background: linear-gradient(180deg, var(--ha-blue-soft) 0%, rgba(255,255,255,0.85) 100%);
        }

        .ha-section-header {
          max-width: 940px;
          margin-bottom: 28px;
        }

        .ha-section-header-center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .ha-h2 {
          margin: 0;
          color: var(--ha-navy);
          font-size: 46px;
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .ha-h3 {
          margin: 0;
          color: var(--ha-text);
          font-size: 22px;
          line-height: 1.28;
          letter-spacing: -0.02em;
        }

        .ha-section-copy {
          margin: 14px auto 0;
          color: var(--ha-text-soft);
          font-size: 17px;
          line-height: 1.82;
          max-width: 900px;
        }

        .ha-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          align-items: stretch;
        }

        .ha-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }

        .ha-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }

        .ha-card {
          height: 100%;
          border-radius: var(--ha-radius-lg);
          background: rgba(255,255,255,0.98);
          border: 1px solid var(--ha-line);
          box-shadow: 0 10px 22px rgba(13,59,125,0.06);
          overflow: hidden;
        }

        .ha-card-body {
          padding: 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .ha-card p {
          margin: 12px 0 0;
          color: var(--ha-text-soft);
          font-size: 15px;
          line-height: 1.75;
        }

        .ha-split-copy {
          display: grid;
          gap: 18px;
        }

        .ha-highlight-card {
          padding: 18px 20px;
          border-radius: 18px;
          background: linear-gradient(180deg, #f3f9ff 0%, #ebf5ff 100%);
          border: 1px solid var(--ha-line-soft);
          color: var(--ha-navy);
          font-size: 15px;
          line-height: 1.7;
          font-weight: 700;
        }

        .ha-checklist {
          display: grid;
          gap: 12px;
        }

        .ha-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 14px 16px;
          border-radius: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
          border: 1px solid var(--ha-line-soft);
          color: var(--ha-text);
          font-size: 15px;
          line-height: 1.65;
          font-weight: 700;
        }

        .ha-check-icon,
        .ha-dot-icon {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #f89a3f 0%, var(--ha-orange) 100%);
          color: #ffffff;
          font-size: 12px;
          font-weight: 900;
          margin-top: 1px;
        }

        .ha-flow-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }

        .ha-flow-card {
          padding: 18px 16px;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid var(--ha-line);
          box-shadow: 0 10px 20px rgba(13,59,125,0.05);
          text-align: center;
        }

        .ha-flow-card strong {
          display: block;
          color: var(--ha-navy);
          font-size: 20px;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .ha-flow-card span {
          display: block;
          color: var(--ha-text-soft);
          font-size: 14px;
          line-height: 1.65;
        }

        .ha-benefit-card,
        .ha-type-card,
        .ha-feature-card,
        .ha-step-card,
        .ha-need-card {
          position: relative;
        }

        .ha-card-top {
          height: 6px;
          background: linear-gradient(90deg, var(--ha-orange), #ffb15c);
        }

        .ha-note-band {
          padding: 24px;
          border-radius: 22px;
          background: linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          color: #ffffff;
          box-shadow: var(--ha-shadow-lg);
        }

        .ha-note-band h3,
        .ha-note-band p,
        .ha-note-band li,
        .ha-note-band strong {
          color: #ffffff;
        }

        .ha-note-band h3 {
          margin: 0;
          font-size: 28px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .ha-note-band p {
          margin: 12px 0 0;
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255,255,255,0.92);
        }

        .ha-note-band ul {
          margin: 16px 0 0;
          padding-left: 18px;
          display: grid;
          gap: 8px;
        }

        .ha-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .ha-trust-item {
          padding: 18px;
          border-radius: 18px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.16);
          color: #ffffff;
          font-size: 15px;
          line-height: 1.65;
          font-weight: 700;
        }

        .ha-compare-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .ha-compare-card {
          border-radius: 22px;
          background: #ffffff;
          border: 1px solid var(--ha-line);
          box-shadow: var(--ha-shadow);
          overflow: hidden;
        }

        .ha-compare-head {
          padding: 18px 22px;
          background: linear-gradient(180deg, #f3f9ff 0%, #ebf5ff 100%);
          border-bottom: 1px solid var(--ha-line-soft);
        }

        .ha-compare-head h3 {
          margin: 0;
          color: var(--ha-navy);
          font-size: 24px;
          line-height: 1.2;
        }

        .ha-compare-body {
          padding: 22px;
        }

        .ha-compare-list {
          display: grid;
          gap: 12px;
        }

        .ha-compare-item {
          display: flex;
          gap: 10px;
          color: var(--ha-text);
          font-size: 15px;
          line-height: 1.7;
          font-weight: 700;
        }

        .ha-caution {
          padding: 26px;
          border-radius: 24px;
          background: linear-gradient(180deg, #fff8ef 0%, #fff3e2 100%);
          border: 1px solid rgba(244,131,31,0.18);
          box-shadow: 0 14px 28px rgba(244,131,31,0.08);
        }

        .ha-caution h3 {
          margin: 0;
          color: var(--ha-navy);
          font-size: 30px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .ha-caution p {
          margin: 12px 0 0;
          color: var(--ha-text-soft);
          font-size: 15px;
          line-height: 1.75;
        }

        .ha-care-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .ha-care-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          padding: 14px 16px;
          border-radius: 16px;
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
          border: 1px solid var(--ha-line-soft);
          color: var(--ha-text);
          font-size: 15px;
          line-height: 1.65;
          font-weight: 700;
        }

        .ha-aftercare-panel {
          padding: 26px;
          border-radius: 24px;
          background: linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          box-shadow: var(--ha-shadow-lg);
        }

        .ha-aftercare-panel .ha-kicker,
        .ha-aftercare-panel h3,
        .ha-aftercare-panel p,
        .ha-aftercare-panel strong {
          color: #ffffff;
        }

        .ha-aftercare-panel .ha-kicker::before {
          background: rgba(255,255,255,0.34);
        }

        .ha-aftercare-panel h3 {
          margin: 0;
          font-size: 34px;
          line-height: 1.12;
          letter-spacing: -0.03em;
        }

        .ha-aftercare-panel p {
          margin: 14px 0 0;
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255,255,255,0.92);
        }

        .ha-final-band {
          padding: 34px 28px;
          border-radius: 26px;
          background: linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          color: #ffffff;
          text-align: center;
          box-shadow: var(--ha-shadow-lg);
        }

        .ha-final-band h2,
        .ha-final-band p {
          color: #ffffff;
        }

        .ha-final-band p {
          max-width: 860px;
          margin: 14px auto 0;
          font-size: 16px;
          line-height: 1.8;
        }

        .ha-final-actions {
          margin-top: 22px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ha-faq-list {
          display: grid;
          gap: 12px;
          max-width: 980px;
          margin: 0 auto;
        }

        .ha-faq-item {
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid var(--ha-line);
          box-shadow: 0 8px 16px rgba(13,59,125,0.04);
          overflow: hidden;
        }

        .ha-faq-summary {
          list-style: none;
          width: 100%;
          padding: 20px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          color: var(--ha-navy);
          font-size: 18px;
          font-weight: 800;
          line-height: 1.5;
        }

        .ha-faq-summary::-webkit-details-marker {
          display: none;
        }

        .ha-faq-icon {
          flex-shrink: 0;
          color: var(--ha-blue);
          font-size: 22px;
          transition: transform 220ms ease;
        }

        .ha-faq-item[open] .ha-faq-icon {
          transform: rotate(45deg);
        }

        .ha-faq-content {
          padding: 0 22px 22px;
        }

        .ha-faq-content p {
          margin: 0;
          color: var(--ha-text-soft);
          font-size: 15px;
          line-height: 1.8;
        }

        @media (max-width: 1180px) {
          .ha-h1 {
            font-size: 50px;
          }

          .ha-h2 {
            font-size: 40px;
          }

          .ha-grid-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ha-grid-3,
          .ha-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ha-grid-2,
          .ha-compare-grid {
            grid-template-columns: 1fr;
          }

          .ha-flow-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .ha-container {
            padding: 0 16px;
          }

          .ha-hero-image-wrap {
            height: 240px;
          }

          .ha-intro-section {
            padding: 34px 0 18px;
          }

          .ha-main {
            padding: 10px 0 48px;
          }

          .ha-section {
            padding: 40px 0;
          }

          .ha-h1 {
            font-size: 36px;
            line-height: 1.04;
          }

          .ha-h2 {
            font-size: 30px;
          }

          .ha-h3,
          .ha-compare-head h3,
          .ha-note-band h3 {
            font-size: 22px;
          }

          .ha-lead,
          .ha-section-copy,
          .ha-final-band p {
            font-size: 15px;
            line-height: 1.72;
          }

          .ha-hero-actions,
          .ha-final-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .ha-btn {
            width: 100%;
          }

          .ha-grid-2,
          .ha-grid-3,
          .ha-grid-4,
          .ha-flow-grid,
          .ha-trust-grid,
          .ha-care-grid,
          .ha-compare-grid {
            grid-template-columns: 1fr;
          }

          .ha-card-body,
          .ha-note-band,
          .ha-caution,
          .ha-aftercare-panel,
          .ha-final-band {
            padding: 22px;
          }

          .ha-faq-summary {
            font-size: 16px;
            padding: 18px 18px;
          }

          .ha-faq-content {
            padding: 0 18px 18px;
          }
        }
      `}</style>

      <main className="ha-page">
        <div className="ha-breadcrumb-wrap">
          <div className="ha-container">
            <nav className="ha-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="ha-breadcrumb-sep">/</span>
              <span aria-current="page">Hearing Aids</span>
            </nav>
          </div>
        </div>

        <section
          className="ha-hero-image-section"
          aria-label="Hearing aids hero image"
        >
          <div className="ha-hero-image-card ha-hero-image-card-full">
            <div className="ha-hero-image-wrap">
              <Image
                src="/images/hearing-aids-hero.jpg"
                alt="Close-up of a person wearing a hearing aid"
                fill
                priority
                className="ha-hero-image"
              />
              <div className="ha-hero-image-overlay" />
            </div>
          </div>
        </section>

        <section className="ha-intro-section">
          <div className="ha-container">
            <div className="ha-intro-shell">
              <div className="ha-kicker">Trusted Hearing Care</div>
              <h1 className="ha-h1">
                Hearing Aids That Help You Hear Life More Clearly
              </h1>
              <p className="ha-lead">
                Hearing aids are not just devices that make sounds louder. They
                are personalised hearing aid devices that help improve speech
                clarity, listening comfort, and daily communication.
              </p>
              <p className="ha-lead ha-lead-soft">
                Many people search for a hearing machine, ear hearing machine,
                or hearing aid machine when they begin noticing hearing
                problems. The professional term is hearing aid, and the right
                device should always be selected after understanding your
                hearing test, lifestyle, comfort, and listening needs.
              </p>
              <p className="ha-lead ha-lead-soft">
                Whether you struggle during conversations, phone calls,
                meetings, family gatherings, or noisy places, the right hearing
                aid can help you reconnect with the sounds and people that
                matter.
              </p>

              <div className="ha-hero-actions">
                <Link
                  className="ha-btn ha-btn-primary"
                  href={buildCtaHref({
                    intent: "hearing-test",
                    sourcePage: "hearing-aids",
                    cta: "hero-book-hearing-test",
                    referrerSection: "hero",
                  })}
                >
                  Book a Hearing Test
                </Link>
                <Link
                  className="ha-btn ha-btn-secondary"
                  href={buildCtaHref({
                    intent: "hearing-aid-trial",
                    sourcePage: "hearing-aids",
                    cta: "hero-try-hearing-aids",
                    referrerSection: "hero",
                  })}
                >
                  Try Hearing Aids
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="ha-main">
          <section className="ha-section">
            <div className="ha-container">
              <div className="ha-grid-2">
                <div>
                  <SectionHeader
                    kicker="Hearing Aid Basics"
                    title="What Are Hearing Aids and Who Needs Them?"
                    copy="A hearing aid is a small electronic device worn in or behind the ear. It is designed to make selected sounds clearer and easier to hear, especially speech."
                    centered={false}
                  />
                  <div className="ha-split-copy">
                    <p
                      className="ha-section-copy"
                      style={{ marginTop: 0, maxWidth: "100%" }}
                    >
                      If you are looking for the hearing aid meaning, hearing
                      aid definition, or asking what a hearing aid is, the
                      simple answer is this: a hearing aid helps people with
                      hearing loss hear sounds and conversations more clearly.
                      It does not cure hearing loss, but it supports better
                      communication and listening comfort.
                    </p>
                    <p
                      className="ha-section-copy"
                      style={{ marginTop: 0, maxWidth: "100%" }}
                    >
                      In Hindi, many people understand hearing aid meaning as
                      sunne ki machine or hearing machine. However, not every
                      small hearing machine is suitable for every person. A
                      proper hearing aid should be chosen after a hearing test
                      and audiologist consultation.
                    </p>
                    <div className="ha-highlight-card">
                      A hearing problem in one ear or both ears should not be
                      ignored. Even if one ear hears better, proper testing can
                      help identify the right hearing aid solutions.
                    </div>
                  </div>
                </div>

                <div className="ha-card">
                  <div className="ha-card-body">
                    <h3 className="ha-h3">
                      You may benefit from hearing aids if:
                    </h3>
                    <div className="ha-checklist" style={{ marginTop: 18 }}>
                      {whoNeedsChecklist.map((item) => (
                        <div key={item} className="ha-check-item">
                          <span className="ha-check-icon">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 18 }}>
                      <Link
                        href={buildCtaHref({
                          intent: "hearing-test",
                          sourcePage: "hearing-aids",
                          cta: "who-needs-start-with-hearing-test",
                          referrerSection: "hearing-aid-basics",
                        })}
                        className="ha-btn ha-btn-primary"
                      >
                        Start with a Hearing Test
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ha-section ha-section-blue">
            <div className="ha-container">
              <div className="ha-grid-2">
                <div className="ha-card">
                  <div className="ha-card-body">
                    <h2 className="ha-h2">
                      Understanding Normal Hearing Before Choosing a Hearing Aid
                    </h2>
                    <p>
                      Before choosing hearing aids, it helps to understand how
                      hearing is measured.
                    </p>
                    <p>
                      The normal hearing range for humans in decibels is
                      generally considered to be around 0 to 25 dB HL in
                      hearing test results. This is also called the normal
                      decibel hearing range. If your hearing thresholds are
                      higher than this range, it may indicate some level of
                      hearing loss.
                    </p>
                    <p>
                      Normal hearing frequency usually includes the speech
                      frequencies that help us understand voices clearly. A
                      hearing test checks different frequencies because some
                      people may hear low sounds well but struggle with
                      high-pitched speech sounds.
                    </p>
                    <p>
                      This is why two people with hearing problems may need
                      different hearing aid devices. One person may need support
                      mainly for speech clarity, while another may need stronger
                      support across many sound levels.
                    </p>
                    <div className="ha-highlight-card" style={{ marginTop: 18 }}>
                      The right hearing aid is not guessed. It is selected after
                      understanding your hearing.
                    </div>
                  </div>
                </div>

                <div className="ha-card">
                  <div className="ha-card-body">
                    <h2 className="ha-h2">How Do Hearing Aids Work?</h2>
                    <p>
                      Modern digital hearing aids work by picking up sound,
                      processing it, and sending adjusted sound into the ear.
                    </p>

                    <div className="ha-flow-grid" style={{ marginTop: 18 }}>
                      <div className="ha-flow-card">
                        <strong>Sound Enters</strong>
                        <span>The microphone picks up sound.</span>
                      </div>
                      <div className="ha-flow-card">
                        <strong>Refined Sound</strong>
                        <span>The digital chip analyses it.</span>
                      </div>
                      <div className="ha-flow-card">
                        <strong>Adjusts Speech</strong>
                        <span>Important sounds are supported.</span>
                      </div>
                      <div className="ha-flow-card">
                        <strong>Reach Ear</strong>
                        <span>Amplified sound is delivered clearly.</span>
                      </div>
                      <div className="ha-flow-card">
                        <strong>Brain Refined</strong>
                        <span>Listening feels clearer and more natural.</span>
                      </div>
                    </div>

                    <p style={{ marginTop: 18 }}>
                      A properly fitted hearing aid does not simply make
                      everything louder. It is programmed according to your
                      hearing test, so that softer or unclear sounds become
                      easier to hear.
                    </p>
                    <p>
                      The goal is not just louder sound. The goal is clearer,
                      more comfortable, and more natural hearing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ha-section">
            <div className="ha-container">
              <SectionHeader
                kicker="Daily Benefits"
                title="How Hearing Aids Can Improve Daily Life"
                copy="For many people, the biggest benefit is not only hearing more sounds, but feeling more confident in conversations."
              />

              <div className="ha-grid-3">
                {benefits.map((item) => (
                  <article key={item.title} className="ha-card ha-benefit-card">
                    <div className="ha-card-top" />
                    <div className="ha-card-body">
                      <h3 className="ha-h3">{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div style={{ marginTop: 22, textAlign: "center" }}>
                <Link
                  href={buildCtaHref({
                    intent: "hearing-aid-trial",
                    sourcePage: "hearing-aids",
                    cta: "benefits-guided-trial",
                    referrerSection: "daily-benefits",
                  })}
                  className="ha-btn ha-btn-primary"
                >
                  Experience a Guided Hearing Aid Trial
                </Link>
              </div>
            </div>
          </section>

          <section className="ha-section ha-section-blue">
            <div className="ha-container">
              <SectionHeader
                kicker="Types of Hearing Aids"
                title="Types of Hearing Aids"
                copy="The best hearing aid is not the smallest or most advanced one. It is the one that suits your hearing loss, ear shape, comfort, and daily routine."
              />

              <div className="ha-grid-4">
                {hearingAidTypes.map((item) => (
                  <article key={item.title} className="ha-card ha-type-card">
                    <div className="ha-card-top" />
                    <div className="ha-card-body">
                      <h3 className="ha-h3">{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div style={{ height: 20 }} />

              <div className="ha-grid-3">
                {specialTypes.map((item) => (
                  <article key={item.title} className="ha-card ha-type-card">
                    <div className="ha-card-top" />
                    <div className="ha-card-body">
                      <h3 className="ha-h3">{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="ha-section">
            <div className="ha-container">
              <SectionHeader
                kicker="Modern Features"
                title="Modern Hearing Aid Features That Support Clearer Listening"
                copy="Not every person needs every feature. The right features should be selected based on your hearing needs and lifestyle, not just technology trends."
              />

              <div className="ha-grid-4">
                {features.map((item) => (
                  <article
                    key={item.title}
                    className="ha-card ha-feature-card"
                  >
                    <div className="ha-card-top" />
                    <div className="ha-card-body">
                      <h3 className="ha-h3">{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="ha-section ha-section-blue">
            <div className="ha-container">
              <div className="ha-grid-2">
                <div>
                  <SectionHeader
                    kicker="Choosing the Right Device"
                    title="How to Choose the Right Hearing Aid"
                    copy="There is no single best hearing aid for everyone. The right hearing aid depends on your test results, ear comfort, speech clarity, lifestyle, and support needs."
                    centered={false}
                  />
                  <div className="ha-highlight-card">
                    The best hearing aid is not chosen from a catalogue. It is
                    selected after understanding your hearing, lifestyle, and
                    comfort.
                  </div>
                </div>

                <div className="ha-card">
                  <div className="ha-card-body">
                    <h3 className="ha-h3">The best hearing aid matches:</h3>
                    <div className="ha-checklist" style={{ marginTop: 18 }}>
                      {[
                        "Your type and degree of hearing loss",
                        "Whether one ear or both ears need support",
                        "Your speech clarity score",
                        "Your ear shape and comfort",
                        "Your daily listening environments",
                        "Your phone and connectivity needs",
                        "Your ability to handle small devices",
                        "Your preference for rechargeable or battery-operated devices",
                        "Your need for aftercare and follow-up support",
                      ].map((item) => (
                        <div key={item} className="ha-check-item">
                          <span className="ha-check-icon">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 18 }}>
                      <Link
                        href={buildCtaHref({
  intent: "audiologist",
  sourcePage: "hearing-aids",
  cta: "choose-right-device-speak-to-audiologist",
  referrerSection: "choosing-the-right-device",
})}
                        className="ha-btn ha-btn-primary"
                      >
                        Speak to an Audiologist
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ha-section">
            <div className="ha-container">
              <SectionHeader
                kicker="Trial & Fitting"
                title="Hearing Aid Trial and Fitting Process"
                copy="A hearing aid works best when it is properly selected, fitted, programmed, and adjusted over time."
              />

              <div className="ha-grid-3">
                {trialSteps.map((item) => (
                  <article key={item.title} className="ha-card ha-step-card">
                    <div className="ha-card-top" />
                    <div className="ha-card-body">
                      <h3 className="ha-h3">{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div style={{ marginTop: 22 }}>
                <div className="ha-note-band">
                  <h3>
                    A good hearing aid journey does not end at fitting.
                  </h3>
                  <p>
                    Follow-up and aftercare are important for long-term comfort
                    and satisfaction.
                  </p>
                  <div style={{ marginTop: 18 }}>
                    <Link
                      href={buildCtaHref({
                        intent: "hearing-aid-trial",
                        sourcePage: "hearing-aids",
                        cta: "trial-process-book-hearing-aid-trial",
                        referrerSection: "trial-and-fitting",
                      })}
                      className="ha-btn ha-btn-primary"
                    >
                      Book a Hearing Aid Trial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ha-section ha-section-blue">
            <div className="ha-container">
              <div className="ha-compare-grid">
                <div className="ha-compare-card">
                  <div className="ha-compare-head">
                    <h3>Do You Need One Hearing Aid or Two?</h3>
                  </div>
                  <div className="ha-compare-body">
                    <p style={{ marginTop: 0 }}>
                      If hearing loss is present in both ears, two hearing aids
                      are often recommended because the brain naturally uses
                      both ears to understand speech, locate sounds, and hear
                      more comfortably in noisy places.
                    </p>
                    <div className="ha-compare-list" style={{ marginTop: 16 }}>
                      {[
                        "Better sound balance",
                        "Improved speech understanding in noise",
                        "Better awareness of surroundings",
                        "Easier sound direction",
                        "More natural listening comfort",
                      ].map((item) => (
                        <div key={item} className="ha-compare-item">
                          <span className="ha-dot-icon">•</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="ha-compare-card">
                  <div className="ha-compare-head">
                    <h3>What Hearing Aids Can and Cannot Do</h3>
                  </div>
                  <div className="ha-compare-body">
                    <div className="ha-grid-2" style={{ gap: 16 }}>
                      <div>
                        <h4
                          style={{
                            margin: 0,
                            color: "var(--ha-navy)",
                            fontSize: 18,
                          }}
                        >
                          Can help with
                        </h4>
                        <div className="ha-checklist" style={{ marginTop: 12 }}>
                          {[
                            "Clearer access to speech",
                            "Improved listening comfort",
                            "Better awareness of everyday sounds",
                            "Reduced listening effort",
                            "Improved participation in conversations",
                            "More confidence in daily communication",
                          ].map((item) => (
                            <div key={item} className="ha-check-item">
                              <span className="ha-check-icon">✓</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4
                          style={{
                            margin: 0,
                            color: "var(--ha-navy)",
                            fontSize: 18,
                          }}
                        >
                          Cannot
                        </h4>
                        <div className="ha-checklist" style={{ marginTop: 12 }}>
                          {[
                            "Cure hearing loss",
                            "Restore hearing exactly to normal",
                            "Remove all background noise",
                            "Work perfectly without proper fitting",
                            "Give the same result to every person",
                            "Replace medical treatment where needed",
                          ].map((item) => (
                            <div key={item} className="ha-check-item">
                              <span className="ha-check-icon">•</span>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="ha-highlight-card" style={{ marginTop: 18 }}>
                      Hearing aids work best when they are fitted correctly,
                      used consistently, and supported with regular follow-ups.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ha-section">
            <div className="ha-container">
              <SectionHeader
                kicker="Different Needs"
                title="Hearing Aids for Different Needs"
                copy="Different people need hearing aids for different reasons. A child, senior citizen, working professional, or person with tinnitus may need different styles, features, and support."
              />

              <div className="ha-grid-2">
                <article className="ha-card ha-need-card">
                  <div className="ha-card-top" />
                  <div className="ha-card-body">
                    <h3 className="ha-h3">{needsCards[0].title}</h3>
                    <p>{needsCards[0].copy}</p>
                  </div>
                </article>

                <div className="ha-grid-2" style={{ gap: 16 }}>
                  {needsCards.slice(1).map((item) => (
                    <article key={item.title} className="ha-card ha-need-card">
                      <div className="ha-card-top" />
                      <div className="ha-card-body">
                        <h3 className="ha-h3">{item.title}</h3>
                        <p>{item.copy}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 22, textAlign: "center" }}>
                <Link
                  href={buildCtaHref({
  intent: "audiologist",
  sourcePage: "hearing-aids",
  cta: "choose-right-device-speak-to-audiologist",
  referrerSection: "choosing-the-right-device",
})}
                  className="ha-btn ha-btn-primary"
                >
                  Get Personalised Hearing Aid Guidance
                </Link>
              </div>
            </div>
          </section>

          <section className="ha-section ha-section-blue">
            <div className="ha-container">
              <div className="ha-caution">
                <div className="ha-kicker ha-kicker-section">
                  Professional Guidance Matters
                </div>
                <h3>
                  Hearing Aids Online, Amazon Hearing Aids, and Non-Prescription
                  Options
                </h3>
                <p>
                  Many people explore Amazon hearing aids, hearing aids online,
                  non prescription hearing aids, or over the counter hearing
                  aids because they want a quick solution. Online options may
                  look simple, but hearing care is personal.
                </p>
                <p>
                  A hearing aid should match your hearing test, ear condition,
                  speech clarity, comfort, and listening needs. Without proper
                  testing and fitting, a device may feel too loud, unclear,
                  uncomfortable, or unsuitable.
                </p>
                <div className="ha-grid-2" style={{ marginTop: 18 }}>
                  <div className="ha-checklist">
                    {[
                      "You have sudden hearing loss",
                      "You have hearing problem in one ear",
                      "You have ear pain or discharge",
                      "You feel dizziness with hearing difficulty",
                    ].map((item) => (
                      <div key={item} className="ha-check-item">
                        <span className="ha-check-icon">!</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="ha-checklist">
                    {[
                      "You have severe hearing loss",
                      "The hearing aid is for a child",
                      "You have tinnitus in one ear",
                      "You are not sure what type of hearing loss you have",
                    ].map((item) => (
                      <div key={item} className="ha-check-item">
                        <span className="ha-check-icon">!</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p>
                  The safer first step is to get your hearing tested and then
                  choose a suitable option with expert guidance.
                </p>
              </div>
            </div>
          </section>

          <section className="ha-section">
            <div className="ha-container">
              <div className="ha-note-band">
                <div className="ha-grid-2">
                  <div>
                    <div className="ha-kicker ha-kicker-section">
                      Brand Guidance
                    </div>
                    <h3>Best Hearing Aid Brands and Brand Guidance</h3>
                    <p>
                      Many users search for best hearing aid brands, best
                      hearing aid brands in India, or top 10 hearing aid brands
                      in India when they start exploring options.
                    </p>
                    <p>
                      However, the brand alone does not decide the result. A
                      good hearing aid experience depends on correct hearing
                      test, right device selection, proper fitting and
                      programming, comfort in the ear, daily usage, follow-up
                      fine-tuning, aftercare support, and audiologist guidance.
                    </p>
                  </div>

                  <div>
                    <div className="ha-trust-grid">
                      {[
                        "Correct hearing test",
                        "Right device selection",
                        "Proper fitting and programming",
                        "Comfort in the ear",
                        "Daily usage",
                        "Follow-up fine-tuning",
                        "Aftercare support",
                        "Audiologist guidance",
                      ].map((item) => (
                        <div key={item} className="ha-trust-item">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ha-section ha-section-blue">
            <div className="ha-container">
              <div className="ha-grid-2">
                <div className="ha-card">
                  <div className="ha-card-body">
                    <div className="ha-kicker ha-kicker-section">
                      Care & Maintenance
                    </div>
                    <h2 className="ha-h2">
                      Hearing Aid Care, Maintenance, and Aftercare
                    </h2>
                    <p>
                      Hearing aids need regular care to perform well. Since they
                      are used daily and stay close to the ear, they can be
                      affected by wax, moisture, dust, and handling.
                    </p>

                    <div className="ha-care-grid" style={{ marginTop: 18 }}>
                      {careTips.map((item) => (
                        <div key={item} className="ha-care-item">
                          <span className="ha-check-icon">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="ha-aftercare-panel">
                  <div className="ha-kicker ha-kicker-section">
                    Aftercare Support
                  </div>
                  <h3>Why Aftercare Matters</h3>
                  <p>
                    Aftercare is an important part of the hearing aid journey.
                    Follow-up visits help adjust sound comfort, speech clarity,
                    fit, feedback, and daily usability.
                  </p>
                  <p>
                    At Sound for Life, we support patients beyond fitting with
                    counselling, fine-tuning, maintenance guidance, and
                    follow-up care.
                  </p>
                  <p>
                    <strong>
                      The right hearing aid is not simply bought. It is
                      selected, fitted, adjusted, and supported according to
                      your hearing and daily life.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="ha-section">
            <div className="ha-container">
              <SectionHeader
                kicker="Common Myths"
                title="Common Myths About Hearing Aids"
                copy="Clear myths calmly, reduce hesitation, and make the page easier to scan."
              />
              <FAQAccordion items={myths} idPrefix="myths" />
            </div>
          </section>

          <section className="ha-section ha-section-blue">
            <div className="ha-container">
              <div className="ha-note-band">
                <div className="ha-grid-2">
                  <div>
                    <div className="ha-kicker ha-kicker-section">
                      Why Choose Sound for Life
                    </div>
                    <h3>
                      Choose Hearing Aids with Expert Guidance at Sound for Life
                    </h3>
                    <p>
                      We do not just help you select a hearing aid. We help you
                      understand your hearing, try suitable options, get expert
                      fitting, and receive continued support after fitting.
                    </p>
                    <p>
                      Whether you are exploring digital hearing aids,
                      rechargeable hearing aids, Bluetooth hearing aids,
                      invisible hearing aids, RIC hearing aids, BTE hearing
                      aids, CIC hearing aids, IIC hearing aids, or other
                      hearing aid devices, our team can guide you toward the
                      right solution.
                    </p>
                  </div>

                  <div className="ha-trust-grid">
                    {[
                      "Professional hearing tests",
                      "Audiologist consultation",
                      "Guided hearing aid trials",
                      "Personalised fitting and programming",
                      "Support for adults, seniors, and children",
                      "Rechargeable, Bluetooth, and discreet options",
                      "Follow-up and aftercare support",
                      "Pan-India hearing care network",
                    ].map((item) => (
                      <div key={item} className="ha-trust-item">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    marginTop: 22,
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    href={buildCtaHref({
                      intent: "hearing-test",
                      sourcePage: "hearing-aids",
                      cta: "why-sfl-book-hearing-test",
                      referrerSection: "why-choose-sound-for-life",
                    })}
                    className="ha-btn ha-btn-primary"
                  >
                    Book a Hearing Test
                  </Link>
                  <Link
                    href={buildCtaHref({
                      intent: "hearing-aid-trial",
                      sourcePage: "hearing-aids",
                      cta: "why-sfl-try-hearing-aids-nearest-clinic",
                      referrerSection: "why-choose-sound-for-life",
                    })}
                    className="ha-btn ha-btn-secondary"
                  >
                    Try Hearing Aids at Your Nearest Clinic
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="ha-section">
            <div className="ha-container">
              <div className="ha-final-band">
                <h2 className="ha-h2">
                  Not Sure Which Hearing Aid Is Right for You?
                </h2>
                <p>
                  Choosing a hearing aid can feel confusing, but you do not have
                  to decide alone. Start with a hearing test, speak to an
                  audiologist, try suitable options, and choose what feels right
                  for your hearing, comfort, and daily life.
                </p>
                <p>
                  The right hearing aid is not simply bought. It is selected,
                  fitted, adjusted, and supported according to your hearing and
                  daily life.
                </p>

                <div className="ha-final-actions">
                  <Link
                    href={buildCtaHref({
                      intent: "hearing-test",
                      sourcePage: "hearing-aids",
                      cta: "final-book-hearing-test",
                      referrerSection: "final-cta",
                    })}
                    className="ha-btn ha-btn-primary"
                  >
                    Book a Hearing Test
                  </Link>
                  <Link
                    href={buildCtaHref({
  intent: "audiologist",
  sourcePage: "hearing-aids",
  cta: "choose-right-device-speak-to-audiologist",
  referrerSection: "choosing-the-right-device",
})}
                    className="ha-btn ha-btn-secondary"
                  >
                    Speak to an Audiologist
                  </Link>
                  <Link href="/clinics" className="ha-btn ha-btn-secondary">
                    Find Your Nearest Clinic
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="ha-section ha-section-blue" id="hearing-aids-faqs">
            <div className="ha-container">
              <SectionHeader
                kicker="Frequently Asked Questions"
                title="Common Questions About Hearing Aids"
                copy="Clear answers to the most common questions people ask before choosing hearing aids."
              />
              <FAQAccordion items={faqs} idPrefix="faqs" />
            </div>
          </section>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </main>
    </>
  );
}