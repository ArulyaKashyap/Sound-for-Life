// app/hearing-loss/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hearing Loss: Symptoms, Causes & Next Steps",
  description:
    "Understand hearing loss symptoms, causes, types, and treatment options. Book a hearing test or speak to an audiologist at Sound for Life.",
  alternates: {
    canonical: "/hearing-loss",
  },
  openGraph: {
    title: "Hearing Loss: Understand the Signs Before Guessing",
    description:
      "Missing words, asking people to repeat, or struggling in noise? Learn what hearing loss may mean and when to get checked.",
    url: "/hearing-loss",
    type: "website",
  },
};

type Block = {
  title: string;
  copy: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type RelatedLink = {
  label: string;
  href: string;
};

const symptomCards: Block[] = [
  {
    title: "You keep asking people to repeat",
    copy:
      "You hear someone speaking, but parts of the sentence go missing. This is often one of the first changes people notice.",
  },
  {
    title: "Speech sounds unclear or muffled",
    copy:
      "People may seem to mumble, especially in groups or noisy places, even when they are speaking normally.",
  },
  {
    title: "TV or phone volume keeps rising",
    copy:
      "If others say the volume is too loud, it may be a sign your hearing has changed more than you realize.",
  },
];

const causeCards: Block[] = [
  {
    title: "Age-related hearing changes",
    copy:
      "Gradual hearing difficulty with age is common. This is often called presbycusis, or age-related hearing loss.",
  },
  {
    title: "Noise exposure",
    copy:
      "Long-term exposure to traffic, machinery, headphones, or loud events can damage hearing over time.",
  },
  {
    title: "Medical or ear-structure causes",
    copy:
      "Wax, infections, middle-ear issues, inner-ear changes, or nerve-related problems can all affect hearing differently.",
  },
];

const actionCards: Block[] = [
  {
    title: "Notice the pattern",
    copy:
      "Think about where hearing feels difficult — phone calls, family conversations, meetings, or noisy places.",
  },
  {
    title: "Get a hearing test",
    copy:
      "A test helps identify the type and degree of hearing loss and whether the issue may be temporary or long-term.",
  },
  {
    title: "Speak to an audiologist",
    copy:
      "An audiologist can explain the results clearly and guide you toward monitoring, medical referral, or hearing support.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What is hearing loss?",
    answer:
      "Hearing loss means your ability to hear sounds clearly has reduced. You may still hear noise, but speech can feel unclear, muffled, or incomplete.",
  },
  {
    question: "What are the early signs of hearing loss?",
    answer:
      "Early signs include asking people to repeat, struggling in noise, hearing better on one side, and increasing TV or phone volume.",
  },
  {
    question: "Can hearing loss be treated?",
    answer:
      "Treatment depends on the cause. Some cases need medical care, while others need hearing management and support from an audiologist.",
  },
  {
    question: "Should I get checked even if the change feels mild?",
    answer:
      "Yes. Mild changes are often the best time to get clarity, especially before choosing any hearing aid or relying on guesswork.",
  },
  {
    question: "Is one-sided hearing loss serious?",
    answer:
      "It should be checked, especially if it appears suddenly or comes with ringing, dizziness, pressure, or pain.",
  },
  {
    question: "What should I do next?",
    answer:
      "Start by identifying the pattern, book a hearing test, and discuss the result with an audiologist before deciding on any solution.",
  },
];

const relatedLinks: RelatedLink[] = [
  {
    label: "I Keep Asking People to Repeat",
    href: "/hearing-loss/i-keep-asking-people-to-repeat",
  },
  {
    label: "People Sound Unclear",
    href: "/hearing-loss/people-sound-unclear",
  },
  {
    label: "I Increase TV or Phone Volume",
    href: "/hearing-loss/i-increase-tv-or-phone-volume",
  },
  {
    label: "Should I Visit an Audiologist?",
    href: "/hearing-loss/should-i-visit-an-audiologist",
  },
  {
    label: "Is It Hearing Loss or Ear Blockage?",
    href: "/hearing-loss/is-it-hearing-loss-or-ear-blockage",
  },
  {
    label: "Book a Hearing Test",
    href: "/book-hearing-test",
  },
];

function TripleCardGrid({ items }: { items: Block[] }) {
  return (
    <div className="hl-card-grid">
      {items.map((item, index) => (
        <article key={item.title} className={`hl-card-box hl-card-box-${(index % 3) + 1}`}>
          <div className="hl-card-media" />
          <div className="hl-card-body">
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function FAQGrid() {
  return (
    <div className="hl-faq-grid">
      {faqs.map((faq) => (
        <article key={faq.question} className="hl-faq-card">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </article>
      ))}
    </div>
  );
}

function RelatedGrid() {
  return (
    <div className="hl-related-grid">
      {relatedLinks.map((link, index) => (
        <a key={link.href} href={link.href} className={`hl-related-card hl-related-card-${(index % 3) + 1}`}>
          <div className="hl-related-media" />
          <div className="hl-related-body">
            <span>{link.label}</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default function HearingLossPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Hearing Loss", item: "/hearing-loss" },
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

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "WebPage"],
    name: "Hearing Loss: Symptoms, Causes & Next Steps",
    url: "/hearing-loss",
    description:
      "Understand hearing loss symptoms, causes, types, and treatment options. Book a hearing test or speak to an audiologist at Sound for Life.",
  };

  return (
    <>
      <style>{`
        :root {
          --hl-navy: #0d3b7d;
          --hl-navy-deep: #082e63;
          --hl-blue: #0a5cae;
          --hl-blue-soft: #edf6ff;
          --hl-blue-soft-2: #f5faff;
          --hl-orange: #f4831f;
          --hl-white: #ffffff;
          --hl-text: #223548;
          --hl-text-soft: #5f7083;
          --hl-line: rgba(13, 59, 125, 0.1);
          --hl-shadow: 0 18px 40px rgba(13, 59, 125, 0.08);
          --hl-shadow-lg: 0 28px 70px rgba(13, 59, 125, 0.14);
        }

        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; overflow-x: hidden; }
        body {
          font-family: Arial, sans-serif;
          color: var(--hl-text);
          background: #f7fafc;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .hl-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(232, 244, 253, 0.7), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #f7fafc 100%);
        }

        .hl-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hl-breadcrumb-wrap {
          background: rgba(255,255,255,0.92);
          border-bottom: 1px solid var(--hl-line);
        }

        .hl-breadcrumb {
          min-height: 52px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--hl-text-soft);
          font-size: 14px;
          font-weight: 700;
        }

        .hl-breadcrumb-sep {
          opacity: 0.4;
        }

        .hl-hero-visual-section {
          background: #ffffff;
        }

        .hl-hero-visual {
          width: 100%;
          height: 470px;
          background:
            linear-gradient(135deg, rgba(8,46,99,0.24), rgba(10,92,174,0.18)),
            radial-gradient(circle at 18% 35%, rgba(255,255,255,0.18), transparent 18%),
            radial-gradient(circle at 78% 26%, rgba(244,131,31,0.18), transparent 16%),
            linear-gradient(135deg, #7faed0 0%, #9ec6e8 35%, #7ab0dd 70%, #8ebce6 100%);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hl-hero-intro-section {
          padding: 54px 0 34px;
          background: #ffffff;
        }

        .hl-hero-intro {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
        }

        .hl-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: var(--hl-navy);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .hl-kicker::before {
          content: "";
          width: 24px;
          height: 2px;
          background: rgba(13,59,125,0.34);
        }

        .hl-title {
          margin: 0;
          color: var(--hl-navy);
          font-size: 64px;
          line-height: 0.98;
          letter-spacing: -0.05em;
        }

        .hl-subtitle {
          margin: 20px auto 0;
          max-width: 980px;
          color: var(--hl-text);
          font-size: 18px;
          line-height: 1.85;
        }

        .hl-subtitle-soft {
          color: var(--hl-text-soft);
        }

        .hl-hero-actions {
          margin-top: 28px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .hl-btn {
          min-height: 48px;
          padding: 12px 20px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease;
        }

        .hl-btn:hover {
          transform: translateY(-2px);
        }

        .hl-btn-primary {
          background: linear-gradient(180deg, #f89a3f 0%, var(--hl-orange) 100%);
          color: var(--hl-white);
          box-shadow: 0 14px 28px rgba(244,131,31,0.24);
        }

        .hl-btn-secondary {
          background: #ffffff;
          color: var(--hl-navy);
          border: 1px solid rgba(13,59,125,0.14);
          box-shadow: 0 10px 20px rgba(13,59,125,0.05);
        }

        .hl-signal-strip-wrap {
          padding: 0 0 18px;
          background: #ffffff;
        }

        .hl-signal-strip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          padding: 10px;
          border-radius: 18px;
          background: rgba(255,255,255,0.98);
          border: 1px solid var(--hl-line);
          box-shadow: var(--hl-shadow);
        }

        .hl-signal-pill {
          min-height: 46px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-radius: 12px;
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
          border: 1px solid rgba(13,59,125,0.08);
          color: var(--hl-navy);
          font-size: 12px;
          font-weight: 800;
          line-height: 1.35;
        }

        .hl-signal-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          flex-shrink: 0;
          background: linear-gradient(180deg, var(--hl-blue), var(--hl-orange));
        }

        .hl-main {
          padding: 20px 0 56px;
        }

        .hl-section-block {
          padding: 58px 0;
        }

        .hl-section-block-tight {
          padding: 42px 0;
        }

        .hl-section-block-white {
          background: transparent;
        }

        .hl-section-block-blue {
          background: linear-gradient(180deg, var(--hl-blue-soft) 0%, rgba(255,255,255,0.82) 100%);
        }

        .hl-section-block-banner {
          padding: 18px 0;
        }

        .hl-center-intro {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
        }

        .hl-center-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: var(--hl-orange);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .hl-center-kicker::before {
          content: "";
          width: 20px;
          height: 2px;
          background: rgba(244,131,31,0.45);
        }

        .hl-center-intro h2 {
          margin: 0;
          color: var(--hl-navy);
          font-size: 52px;
          line-height: 1.06;
          letter-spacing: -0.04em;
        }

        .hl-center-intro p {
          margin: 16px auto 0;
          max-width: 950px;
          color: var(--hl-text-soft);
          font-size: 18px;
          line-height: 1.8;
        }

        .hl-section-title {
          max-width: 1020px;
          margin: 0 auto 18px;
          text-align: center;
        }

        .hl-section-title h2 {
          margin: 0;
          color: var(--hl-orange);
          font-size: 42px;
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .hl-section-title p {
          margin: 14px auto 0;
          max-width: 960px;
          color: var(--hl-text);
          font-size: 18px;
          line-height: 1.76;
        }

        .hl-card-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .hl-card-box {
          overflow: hidden;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid var(--hl-line);
          box-shadow: 0 10px 22px rgba(13,59,125,0.06);
        }

        .hl-card-media {
          height: 210px;
          background-size: cover;
          background-position: center;
        }

        .hl-card-box-1 .hl-card-media {
          background:
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #2f6fa3 0%, #8fc1eb 100%);
        }

        .hl-card-box-2 .hl-card-media {
          background:
            radial-gradient(circle at 70% 35%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #db8f8f 0%, #f1c1c1 100%);
        }

        .hl-card-box-3 .hl-card-media {
          background:
            radial-gradient(circle at 60% 40%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #f36f55 0%, #ffb063 100%);
        }

        .hl-card-body {
          padding: 18px 18px 20px;
          text-align: center;
        }

        .hl-card-body h3 {
          margin: 0;
          color: var(--hl-text);
          font-size: 18px;
          line-height: 1.38;
          letter-spacing: -0.02em;
        }

        .hl-card-body p {
          margin: 10px 0 0;
          color: var(--hl-text-soft);
          font-size: 14px;
          line-height: 1.72;
        }

        .hl-featured-callout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 240px;
          gap: 12px;
          padding: 20px 22px;
          border-radius: 22px;
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.12), transparent 24%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          color: var(--hl-white);
          box-shadow: var(--hl-shadow-lg);
        }

        .hl-featured-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: rgba(255,255,255,0.86);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .hl-featured-eyebrow::before {
          content: "";
          width: 18px;
          height: 2px;
          background: rgba(255,255,255,0.42);
        }

        .hl-featured-copy h3 {
          margin: 8px 0 0;
          font-size: 24px;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .hl-featured-copy p {
          margin: 8px 0 0;
          color: rgba(255,255,255,0.9);
          font-size: 13px;
          line-height: 1.68;
        }

        .hl-featured-metrics {
          display: grid;
          gap: 8px;
        }

        .hl-featured-metric {
          padding: 12px;
          border-radius: 14px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.14);
        }

        .hl-featured-metric-label {
          color: rgba(255,255,255,0.76);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hl-featured-metric-value {
          margin-top: 6px;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.35;
        }

        .hl-editorial-split {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(320px, 1.08fr);
          gap: 18px;
          align-items: stretch;
        }

        .hl-editorial-copy {
          padding: 8px 0;
        }

        .hl-editorial-copy h2 {
          margin: 0;
          color: var(--hl-navy);
          font-size: 42px;
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .hl-editorial-copy p {
          margin: 14px 0 0;
          color: var(--hl-text-soft);
          font-size: 16px;
          line-height: 1.76;
        }

        .hl-editorial-actions {
          margin-top: 18px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .hl-editorial-visual {
          min-height: 360px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--hl-line);
          box-shadow: var(--hl-shadow);
          background:
            radial-gradient(circle at 65% 30%, rgba(255,255,255,0.2), transparent 18%),
            linear-gradient(135deg, #0a345f 0%, #0a5cae 55%, #9ed1f3 100%);
          position: relative;
        }

        .hl-editorial-visual::before {
          content: "";
          position: absolute;
          inset: auto 16% 16% auto;
          width: 150px;
          height: 190px;
          border-radius: 30px;
          background: linear-gradient(180deg, #e3e5e7 0%, #b8bcc0 100%);
          transform: rotate(12deg);
          box-shadow: 0 18px 32px rgba(0,0,0,0.18);
        }

        .hl-editorial-visual::after {
          content: "";
          position: absolute;
          inset: 18% auto auto 18%;
          width: 210px;
          height: 210px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.18), rgba(255,255,255,0));
        }

        .hl-action-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .hl-action-card {
          min-height: 230px;
          padding: 18px;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid var(--hl-line);
          box-shadow: 0 10px 22px rgba(13,59,125,0.06);
        }

        .hl-action-card-top {
          height: 120px;
          border-radius: 14px;
          margin-bottom: 16px;
          background:
            radial-gradient(circle at 70% 26%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #0c5aa6 0%, #82bde8 100%);
        }

        .hl-action-card:nth-child(2) .hl-action-card-top {
          background:
            radial-gradient(circle at 40% 24%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #e57457 0%, #f4b76d 100%);
        }

        .hl-action-card:nth-child(3) .hl-action-card-top {
          background:
            radial-gradient(circle at 66% 26%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #304f90 0%, #69a4d8 100%);
        }

        .hl-action-card h3 {
          margin: 0;
          color: var(--hl-text);
          font-size: 19px;
          line-height: 1.35;
          letter-spacing: -0.02em;
        }

        .hl-action-card p {
          margin: 10px 0 0;
          color: var(--hl-text-soft);
          font-size: 14px;
          line-height: 1.72;
        }

        .hl-faq-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .hl-faq-card {
          padding: 18px;
          border-radius: 16px;
          background: #ffffff;
          border: 1px solid var(--hl-line);
          box-shadow: 0 8px 16px rgba(13,59,125,0.04);
        }

        .hl-faq-card h3 {
          margin: 0;
          color: var(--hl-navy);
          font-size: 18px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .hl-faq-card p {
          margin: 10px 0 0;
          color: var(--hl-text-soft);
          font-size: 14px;
          line-height: 1.7;
        }

        .hl-related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .hl-related-card {
          overflow: hidden;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid var(--hl-line);
          box-shadow: 0 10px 22px rgba(13,59,125,0.06);
        }

        .hl-related-media {
          height: 170px;
        }

        .hl-related-card-1 .hl-related-media {
          background: linear-gradient(135deg, #2f6fa3 0%, #8fc1eb 100%);
        }

        .hl-related-card-2 .hl-related-media {
          background: linear-gradient(135deg, #ef8f73 0%, #ffc17b 100%);
        }

        .hl-related-card-3 .hl-related-media {
          background: linear-gradient(135deg, #0f5c9f 0%, #174780 100%);
        }

        .hl-related-body {
          padding: 16px;
          min-height: 92px;
          display: flex;
          align-items: center;
        }

        .hl-related-body span {
          color: var(--hl-text);
          font-size: 16px;
          font-weight: 800;
          line-height: 1.45;
          letter-spacing: -0.01em;
        }

        .hl-cta-band {
          padding: 24px 24px;
          border-radius: 22px;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent 24%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          color: var(--hl-white);
          text-align: center;
          box-shadow: var(--hl-shadow-lg);
        }

        .hl-cta-band h2 {
          margin: 0;
          color: var(--hl-white);
          font-size: 32px;
          line-height: 1.08;
          letter-spacing: -0.03em;
        }

        .hl-cta-band p {
          margin: 10px auto 0;
          max-width: 820px;
          color: rgba(255,255,255,0.92);
          font-size: 15px;
          line-height: 1.72;
        }

        .hl-cta-band-actions {
          margin-top: 16px;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 1100px) {
          .hl-card-grid,
          .hl-action-grid,
          .hl-related-grid,
          .hl-faq-grid,
          .hl-featured-callout {
            grid-template-columns: 1fr 1fr;
          }

          .hl-editorial-split,
          .hl-featured-callout {
            grid-template-columns: 1fr;
          }

          .hl-title {
            font-size: 50px;
          }

          .hl-center-intro h2 {
            font-size: 42px;
          }

          .hl-section-title h2,
          .hl-editorial-copy h2 {
            font-size: 34px;
          }
        }

        @media (max-width: 767px) {
          .hl-container {
            padding: 0 16px;
          }

          .hl-hero-visual {
            height: 240px;
          }

          .hl-hero-intro-section {
            padding: 34px 0 24px;
          }

          .hl-signal-strip,
          .hl-card-grid,
          .hl-action-grid,
          .hl-related-grid,
          .hl-faq-grid {
            grid-template-columns: 1fr;
          }

          .hl-title {
            font-size: 34px;
            line-height: 1.04;
          }

          .hl-center-intro h2,
          .hl-section-title h2,
          .hl-editorial-copy h2,
          .hl-cta-band h2 {
            font-size: 28px;
          }

          .hl-center-intro p,
          .hl-section-title p,
          .hl-editorial-copy p,
          .hl-subtitle {
            font-size: 15px;
          }

          .hl-hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .hl-card-media,
          .hl-related-media {
            height: 150px;
          }

          .hl-editorial-visual {
            min-height: 260px;
          }

          .hl-section-block {
            padding: 38px 0;
          }

          .hl-section-block-tight {
            padding: 28px 0;
          }
        }
      `}</style>

      <main className="hl-page">
        <div className="hl-breadcrumb-wrap">
          <div className="hl-container">
            <nav className="hl-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="hl-breadcrumb-sep">/</span>
              <span aria-current="page">Hearing Loss</span>
            </nav>
          </div>
        </div>

        <section className="hl-hero-visual-section">
          <div className="hl-hero-visual" />
        </section>

        <section className="hl-hero-intro-section">
          <div className="hl-container">
            <div className="hl-hero-intro">
              <div className="hl-kicker">Trusted Hearing Care</div>
              <h1 className="hl-title">
                Hearing Loss: Symptoms, Causes, and What to Do Next
              </h1>

              <p className="hl-subtitle">
                If conversations feel unclear, TV volume keeps rising, or people sound like
                they are mumbling, it may be hearing loss.
              </p>

              <p className="hl-subtitle hl-subtitle-soft">
                The first step is not buying a device. The first step is understanding what
                is changing in your hearing and whether you need a hearing test.
              </p>

              <div className="hl-hero-actions">
                <a className="hl-btn hl-btn-primary" href="/book-hearing-test">
                  Book Hearing Test
                </a>
                <a className="hl-btn hl-btn-secondary" href="#hearing-loss-faqs">
                  Read FAQs
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="hl-signal-strip-wrap">
          <div className="hl-container">
            <div className="hl-signal-strip">
              <div className="hl-signal-pill">
                <span className="hl-signal-dot" />
                <span>Missed words in conversations</span>
              </div>
              <div className="hl-signal-pill">
                <span className="hl-signal-dot" />
                <span>TV volume keeps rising</span>
              </div>
              <div className="hl-signal-pill">
                <span className="hl-signal-dot" />
                <span>Speech sounds unclear</span>
              </div>
              <div className="hl-signal-pill">
                <span className="hl-signal-dot" />
                <span>One ear feels weaker</span>
              </div>
            </div>
          </div>
        </section>

        <div className="hl-main">
          <section className="hl-section-block hl-section-block-white">
            <div className="hl-container">
              <div className="hl-center-intro">
                <div className="hl-center-kicker">Hearing Loss Basics</div>
                <h2>What Is Hearing Loss?</h2>
                <p>
                  Hearing loss means your ears or hearing nerves are not picking up sound as
                  clearly as before. You may still hear sound, but speech can feel unclear,
                  distant, or incomplete. Some cases are temporary. Others need long-term
                  hearing support and a proper hearing test is what shows the difference.
                </p>
              </div>
            </div>
          </section>

          <section className="hl-section-block hl-section-block-white">
            <div className="hl-container">
              <div className="hl-section-title">
                <h2>Common Hearing Loss Symptoms People Notice First</h2>
                <p>
                  You do not need to wait until hearing becomes severe. Many people notice
                  small changes first, often at home, at work, or in noisy places.
                </p>
              </div>

              <TripleCardGrid items={symptomCards} />
            </div>
          </section>

          <section className="hl-section-block-banner">
            <div className="hl-container">
              <div className="hl-featured-callout">
                <div className="hl-featured-copy">
                  <div className="hl-featured-eyebrow">Important decision point</div>
                  <h3>Do not choose a hearing solution before checking what is actually changing.</h3>
                  <p>
                    People often compare prices or devices too early. The better starting point is
                    understanding whether the difficulty is temporary, one-sided, urgent, or likely
                    to need longer-term hearing support.
                  </p>
                </div>

                <div className="hl-featured-metrics">
                  <div className="hl-featured-metric">
                    <div className="hl-featured-metric-label">Notice</div>
                    <div className="hl-featured-metric-value">Small changes matter</div>
                  </div>
                  <div className="hl-featured-metric">
                    <div className="hl-featured-metric-label">Next step</div>
                    <div className="hl-featured-metric-value">Test before guessing</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="hl-section-block hl-section-block-blue">
            <div className="hl-container">
              <div className="hl-section-title">
                <h2>What Causes Hearing Loss?</h2>
                <p>
                  Hearing loss can come from age-related change, noise exposure, or medical
                  causes in the ear itself. The cause affects the right next step.
                </p>
              </div>

              <TripleCardGrid items={causeCards} />
            </div>
          </section>

          <section className="hl-section-block hl-section-block-white">
            <div className="hl-container">
              <div className="hl-editorial-split">
                <div className="hl-editorial-copy">
                  <h2>When Should You Get Your Hearing Checked?</h2>
                  <p>
                    A hearing test is useful when hearing difficulty starts affecting daily
                    life, even slightly. Get checked if you often miss words, increase
                    volume, avoid calls, struggle in meetings, or feel tired after
                    conversations.
                  </p>
                  <p>
                    Get urgent help for sudden changes, especially if they come with ringing,
                    pressure, dizziness, or one-sided weakness.
                  </p>
                  <div className="hl-editorial-actions">
                    <a className="hl-btn hl-btn-primary" href="/book-hearing-test">
                      Book Hearing Test
                    </a>
                  </div>
                </div>

                <div className="hl-editorial-visual" />
              </div>
            </div>
          </section>

          <section className="hl-section-block hl-section-block-blue">
            <div className="hl-container">
              <div className="hl-section-title">
                <h2>What Should You Do Next?</h2>
                <p>
                  You do not have to decide everything today. Start by understanding your
                  hearing clearly, then move step by step.
                </p>
              </div>

              <div className="hl-action-grid">
                {actionCards.map((item) => (
                  <article key={item.title} className="hl-action-card">
                    <div className="hl-action-card-top" />
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="hl-section-block-tight">
            <div className="hl-container">
              <div className="hl-cta-band">
                <h2>Not Sure If It Is Hearing Loss?</h2>
                <p>
                  You do not have to guess. A hearing test can help you understand what is
                  changing and what support may be right for you.
                </p>
                <div className="hl-cta-band-actions">
                  <a className="hl-btn hl-btn-primary" href="/book-hearing-test">
                    Book Hearing Test
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="hl-section-block hl-section-block-white" id="hearing-loss-faqs">
            <div className="hl-container">
              <div className="hl-center-intro">
                <div className="hl-center-kicker">Frequently Asked Questions</div>
                <h2>Common Questions About Hearing Loss</h2>
                <p>
                  Clear answers to the questions people usually ask before they decide to get checked.
                </p>
              </div>

              <div style={{ height: 18 }} />

              <FAQGrid />
            </div>
          </section>

          <section className="hl-section-block hl-section-block-blue">
            <div className="hl-container">
              <div className="hl-center-intro">
                <div className="hl-center-kicker">Continue Exploring</div>
                <h2>Related Hearing Loss Pages</h2>
                <p>
                  Move into the symptom or decision page that best matches what you are noticing.
                </p>
              </div>

              <div style={{ height: 18 }} />

              <RelatedGrid />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
        />
      </main>
    </>
  );
}