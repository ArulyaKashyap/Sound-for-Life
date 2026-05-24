import type { Metadata } from "next";

export const metadata: Metadata = {

  title: "Hearing Aids: Types, Features & Expert Guidance",

  description:

    "Explore hearing aids, types, features, and fitting options. Speak to an audiologist at Sound for Life and choose with clarity.",

  alternates: {

    canonical: "/hearing-aids",

  },

  openGraph: {

    title: "Hearing Aids Made Easier to Understand",

    description:

      "Not sure which hearing aid is right for you? Understand types, features, brands, and next steps before you decide.",

    url: "/hearing-aids",

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

const signCards: Block[] = [

  {

    title: "You hear people, but words are not clear",

    copy:

      "You may hear that someone is speaking, but still miss parts of the sentence. This is often when people start wondering whether they need a hearing test.",

  },

  {

    title: "Family members keep repeating themselves",

    copy:

      "If your family often says, “I already told you,” or “You are not listening,” hearing difficulty may be affecting communication.",

  },

  {

    title: "TV or phone volume feels too low",

    copy:

      "If others feel the volume is loud but it still feels unclear to you, your hearing may need to be checked. A hearing test can show whether amplification may help.",

  },

];

const needCards: Block[] = [

  {

    title: "Age-related hearing changes",

    copy:

      "Many seniors gradually lose clarity in speech, especially in noisy places. They may not feel deaf, but they may become hard of hearing in daily conversations.",

  },

  {

    title: "Long-term noise exposure",

    copy:

      "Traffic, machinery, loud music, factory work, headphones, and events can affect hearing over time. Many people ignore this until communication becomes difficult.",

  },

  {

    title: "Inner-ear or nerve-related hearing loss",

    copy:

      "Some people need hearing support because the inner ear or hearing nerve is not sending sound clearly. A hearing test helps identify whether hearing aids may help.",

  },

];

const styleCards: Block[] = [

  {

    title: "RIC hearing aids",

    copy:

      "RIC hearing aids are often chosen for comfort, clarity, and a more discreet behind-the-ear design.",

  },

  {

    title: "BTE and in-ear styles",

    copy:

      "A BTE hearing aid may suit users who need more power or easier handling. In ear hearing aids may feel more compact for selected users.",

  },

  {

    title: "CIC, ITC, and IIC options",

    copy:

      "CIC hearing aids are smaller devices that sit mostly inside the ear canal. ITC and IIC styles may suit users looking for in-ear options with different handling and visibility needs.",

  },

];

const featureCards: Block[] = [

  {

    title: "Rechargeable hearing aids",

    copy:

      "Rechargeable hearing aids can help users avoid changing small batteries regularly and may be easier for seniors or first-time users.",

  },

  {

    title: "Bluetooth hearing aids",

    copy:

      "Bluetooth hearing aids may support phone calls, streaming, and app-based controls for compatible smartphones and devices.",

  },

  {

    title: "Digital programming",

    copy:

      "Digital hearing aids can be programmed according to your hearing test results, so the device supports the sounds you are missing instead of only making everything louder.",

  },

];

const actionCards: Block[] = [

  {

    title: "Start with a hearing test",

    copy:

      "Your hearing report shows what sounds you are missing and how much support you may need. It also helps avoid choosing the wrong device.",

  },

  {

    title: "Compare suitable styles and features",

    copy:

      "An audiologist helps you compare styles, comfort, handling, rechargeable options, Bluetooth features, and your real daily listening needs.",

  },

  {

    title: "Try, fit, and plan aftercare",

    copy:

      "A hearing aid trial, proper fitting, and follow-up support help you judge comfort, clarity, and everyday usefulness before you decide.",

  },

];

const faqs: FaqItem[] = [

  {

    question: "Which type of hearing aid is best for me?",

    answer:

      "The best hearing aid depends on your hearing test, ear shape, comfort, lifestyle, and budget. An audiologist can help you compare suitable styles after checking your hearing.",

  },

  {

    question: "Are invisible hearing aids suitable for everyone?",

    answer:

      "Invisible hearing aids may suit people who want a discreet device, but they are not right for every hearing level or ear shape. A hearing test and ear examination help decide whether they will work for you.",

  },

  {

    question: "What is the difference between CIC and IIC hearing aids?",

    answer:

      "CIC hearing aids sit mostly inside the ear canal. IIC hearing aids sit deeper and are usually less visible. Suitability depends on ear size, hearing loss level, comfort, and handling ability.",

  },

  {

    question: "Are rechargeable hearing aids better than battery hearing aids?",

    answer:

      "Rechargeable hearing aids are convenient for people who do not want to change small batteries often. Battery models may still suit some users depending on device type, usage, and personal comfort.",

  },

  {

    question: "Do Bluetooth hearing aids connect to phones?",

    answer:

      "Many Bluetooth hearing aids can connect to compatible smartphones for calls, music, or app control. Compatibility depends on the hearing aid model and phone, so it should be checked before purchase.",

  },

  {

    question: "What are RIC hearing aids?",

    answer:

      "RIC hearing aids have a small part behind the ear and a receiver placed in the ear canal. They are commonly used because they can offer comfort, clarity, and a relatively discreet look.",

  },

  {

    question: "Can I buy hearing aids without a hearing test?",

    answer:

      "You should avoid choosing hearing aids without a hearing test. Without knowing your hearing level and type of loss, you may choose a device that feels uncomfortable, unclear, or unsuitable.",

  },

];

const relatedLinks: RelatedLink[] = [

  {

    label: "Invisible Hearing Aids",

    href: "/hearing-aids/invisible-hearing-aids",

  },

  {

    label: "Rechargeable Hearing Aids",

    href: "/hearing-aids/rechargeable-hearing-aids",

  },

  {

    label: "Bluetooth Hearing Aids",

    href: "/hearing-aids/bluetooth-hearing-aids",

  },

  {

    label: "BTE Hearing Aids",

    href: "/hearing-aids/bte-hearing-aids",

  },

  {

    label: "RIC Hearing Aids",

    href: "/hearing-aids/rie-hearing-aids",

  },

  {

    label: "CIC Hearing Aids",

    href: "/hearing-aids/cic-hearing-aids",

  },

];

function TripleCardGrid({ items }: { items: Block[] }) {

  return (

    <div className="ha-card-grid">

      {items.map((item, index) => (

        <article key={item.title} className={`ha-card-box ha-card-box-${(index % 3) + 1}`}>

          <div className="ha-card-media" />

          <div className="ha-card-body">

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

    <div className="ha-faq-grid">

      {faqs.map((faq) => (

        <article key={faq.question} className="ha-faq-card">

          <h3>{faq.question}</h3>

          <p>{faq.answer}</p>

        </article>

      ))}

    </div>

  );

}

function RelatedGrid() {

  return (

    <div className="ha-related-grid">

      {relatedLinks.map((link, index) => (

        <a key={link.href} href={link.href} className={`ha-related-card ha-related-card-${(index % 3) + 1}`}>

          <div className="ha-related-media" />

          <div className="ha-related-body">

            <span>{link.label}</span>

          </div>

        </a>

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

      { "@type": "ListItem", position: 2, name: "Hearing Aids", item: "/hearing-aids" },

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

    name: "Hearing Aids: Types, Features & Expert Guidance",

    url: "/hearing-aids",

    description:

      "Explore hearing aids, types, features, and fitting options. Speak to an audiologist at Sound for Life and choose with clarity.",

  };

  return (

    <>

      <style>{`

        :root {

          --ha-navy: #0d3b7d;

          --ha-navy-deep: #082e63;

          --ha-blue: #0a5cae;

          --ha-blue-soft: #edf6ff;

          --ha-blue-soft-2: #f5faff;

          --ha-orange: #f4831f;

          --ha-white: #ffffff;

          --ha-text: #223548;

          --ha-text-soft: #5f7083;

          --ha-line: rgba(13, 59, 125, 0.1);

          --ha-shadow: 0 18px 40px rgba(13, 59, 125, 0.08);

          --ha-shadow-lg: 0 28px 70px rgba(13, 59, 125, 0.14);

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

            radial-gradient(circle at top left, rgba(232, 244, 253, 0.7), transparent 30%),

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

        .ha-hero-visual-section {

          background: #ffffff;

        }

        .ha-hero-visual {

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

        .ha-hero-intro-section {

          padding: 54px 0 34px;

          background: #ffffff;

        }

        .ha-hero-intro {

          max-width: 980px;

          margin: 0 auto;

          text-align: center;

        }

        .ha-kicker {

          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 18px;

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

        .ha-title {

          margin: 0;

          color: var(--ha-navy);

          font-size: 64px;

          line-height: 0.98;

          letter-spacing: -0.05em;

        }

        .ha-subtitle {

          margin: 20px auto 0;

          max-width: 980px;

          color: var(--ha-text);

          font-size: 18px;

          line-height: 1.85;

        }

        .ha-subtitle-soft {

          color: var(--ha-text-soft);

        }

        .ha-hero-actions {

          margin-top: 28px;

          display: flex;

          justify-content: center;

          gap: 12px;

          flex-wrap: wrap;

        }

        .ha-btn {

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

        .ha-btn:hover {

          transform: translateY(-2px);

        }

        .ha-btn-primary {

          background: linear-gradient(180deg, #f89a3f 0%, var(--ha-orange) 100%);

          color: var(--ha-white);

          box-shadow: 0 14px 28px rgba(244,131,31,0.24);

        }

        .ha-btn-secondary {

          background: #ffffff;

          color: var(--ha-navy);

          border: 1px solid rgba(13,59,125,0.14);

          box-shadow: 0 10px 20px rgba(13,59,125,0.05);

        }

        .ha-signal-strip-wrap {

          padding: 0 0 18px;

          background: #ffffff;

        }

        .ha-signal-strip {

          display: grid;

          grid-template-columns: repeat(4, minmax(0, 1fr));

          gap: 10px;

          padding: 10px;

          border-radius: 18px;

          background: rgba(255,255,255,0.98);

          border: 1px solid var(--ha-line);

          box-shadow: var(--ha-shadow);

        }

        .ha-signal-pill {

          min-height: 46px;

          padding: 10px 12px;

          display: flex;

          align-items: center;

          gap: 8px;

          border-radius: 12px;

          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);

          border: 1px solid rgba(13,59,125,0.08);

          color: var(--ha-navy);

          font-size: 12px;

          font-weight: 800;

          line-height: 1.35;

        }

        .ha-signal-dot {

          width: 8px;

          height: 8px;

          border-radius: 999px;

          flex-shrink: 0;

          background: linear-gradient(180deg, var(--ha-blue), var(--ha-orange));

        }

        .ha-main {

          padding: 20px 0 56px;

        }

        .ha-section-block {

          padding: 58px 0;

        }

        .ha-section-block-tight {

          padding: 42px 0;

        }

        .ha-section-block-white {

          background: transparent;

        }

        .ha-section-block-blue {

          background: linear-gradient(180deg, var(--ha-blue-soft) 0%, rgba(255,255,255,0.82) 100%);

        }

        .ha-section-block-banner {

          padding: 18px 0;

        }

        .ha-center-intro {

          max-width: 980px;

          margin: 0 auto;

          text-align: center;

        }

        .ha-center-kicker {

          display: inline-flex;

          align-items: center;

          gap: 8px;

          margin-bottom: 12px;

          color: var(--ha-orange);

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.14em;

          text-transform: uppercase;

        }

        .ha-center-kicker::before {

          content: "";

          width: 20px;

          height: 2px;

          background: rgba(244,131,31,0.45);

        }

        .ha-center-intro h2 {

          margin: 0;

          color: var(--ha-navy);

          font-size: 52px;

          line-height: 1.06;

          letter-spacing: -0.04em;

        }

        .ha-center-intro p {

          margin: 16px auto 0;

          max-width: 950px;

          color: var(--ha-text-soft);

          font-size: 18px;

          line-height: 1.8;

        }

        .ha-section-title {

          max-width: 1020px;

          margin: 0 auto 18px;

          text-align: center;

        }

        .ha-section-title h2 {

          margin: 0;

          color: var(--ha-orange);

          font-size: 42px;

          line-height: 1.08;

          letter-spacing: -0.035em;

        }

        .ha-section-title p {

          margin: 14px auto 0;

          max-width: 960px;

          color: var(--ha-text);

          font-size: 18px;

          line-height: 1.76;

        }

        .ha-card-grid {

          display: grid;

          grid-template-columns: repeat(3, minmax(0, 1fr));

          gap: 18px;

        }

        .ha-card-box {

          overflow: hidden;

          border-radius: 18px;

          background: #ffffff;

          border: 1px solid var(--ha-line);

          box-shadow: 0 10px 22px rgba(13,59,125,0.06);

        }

        .ha-card-media {

          height: 210px;

          background-size: cover;

          background-position: center;

        }

        .ha-card-box-1 .ha-card-media {

          background:

            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 18%),

            linear-gradient(135deg, #2f6fa3 0%, #8fc1eb 100%);

        }

        .ha-card-box-2 .ha-card-media {

          background:

            radial-gradient(circle at 70% 35%, rgba(255,255,255,0.18), transparent 18%),

            linear-gradient(135deg, #db8f8f 0%, #f1c1c1 100%);

        }

        .ha-card-box-3 .ha-card-media {

          background:

            radial-gradient(circle at 60% 40%, rgba(255,255,255,0.18), transparent 18%),

            linear-gradient(135deg, #f36f55 0%, #ffb063 100%);

        }

        .ha-card-body {

          padding: 18px 18px 20px;

          text-align: center;

        }

        .ha-card-body h3 {

          margin: 0;

          color: var(--ha-text);

          font-size: 18px;

          line-height: 1.38;

          letter-spacing: -0.02em;

        }

        .ha-card-body p {

          margin: 10px 0 0;

          color: var(--ha-text-soft);

          font-size: 14px;

          line-height: 1.72;

        }

        .ha-featured-callout {

          display: grid;

          grid-template-columns: minmax(0, 1fr) 240px;

          gap: 12px;

          padding: 20px 22px;

          border-radius: 22px;

          background:

            radial-gradient(circle at top right, rgba(255,255,255,0.12), transparent 24%),

            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);

          color: var(--ha-white);

          box-shadow: var(--ha-shadow-lg);

        }

        .ha-featured-eyebrow {

          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: rgba(255,255,255,0.86);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.14em;

          text-transform: uppercase;

        }

        .ha-featured-eyebrow::before {

          content: "";

          width: 18px;

          height: 2px;

          background: rgba(255,255,255,0.42);

        }

        .ha-featured-copy h3 {

          margin: 8px 0 0;

          font-size: 24px;

          line-height: 1.1;

          letter-spacing: -0.03em;

        }

        .ha-featured-copy p {

          margin: 8px 0 0;

          color: rgba(255,255,255,0.9);

          font-size: 13px;

          line-height: 1.68;

        }

        .ha-featured-metrics {

          display: grid;

          gap: 8px;

        }

        .ha-featured-metric {

          padding: 12px;

          border-radius: 14px;

          background: rgba(255,255,255,0.1);

          border: 1px solid rgba(255,255,255,0.14);

        }

        .ha-featured-metric-label {

          color: rgba(255,255,255,0.76);

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 0.12em;

          text-transform: uppercase;

        }

        .ha-featured-metric-value {

          margin-top: 6px;

          font-size: 15px;

          font-weight: 800;

          line-height: 1.35;

        }

        .ha-editorial-split {

          display: grid;

          grid-template-columns: minmax(0, 0.92fr) minmax(320px, 1.08fr);

          gap: 18px;

          align-items: stretch;

        }

        .ha-editorial-copy {

          padding: 8px 0;

        }

        .ha-editorial-copy h2 {

          margin: 0;

          color: var(--ha-navy);

          font-size: 42px;

          line-height: 1.08;

          letter-spacing: -0.035em;

        }

        .ha-editorial-copy p {

          margin: 14px 0 0;

          color: var(--ha-text-soft);

          font-size: 16px;

          line-height: 1.76;

        }

        .ha-editorial-actions {

          margin-top: 18px;

          display: flex;

          gap: 10px;

          flex-wrap: wrap;

        }

        .ha-editorial-visual {

          min-height: 360px;

          border-radius: 20px;

          overflow: hidden;

          border: 1px solid var(--ha-line);

          box-shadow: var(--ha-shadow);

          background:

            radial-gradient(circle at 65% 30%, rgba(255,255,255,0.2), transparent 18%),

            linear-gradient(135deg, #0a345f 0%, #0a5cae 55%, #9ed1f3 100%);

          position: relative;

        }

        .ha-editorial-visual::before {

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

        .ha-editorial-visual::after {

          content: "";

          position: absolute;

          inset: 18% auto auto 18%;

          width: 210px;

          height: 210px;

          border-radius: 999px;

          background: radial-gradient(circle, rgba(255,255,255,0.18), rgba(255,255,255,0));

        }

        .ha-action-grid {

          display: grid;

          grid-template-columns: repeat(3, minmax(0, 1fr));

          gap: 14px;

        }

        .ha-action-card {

          min-height: 230px;

          padding: 18px;

          border-radius: 18px;

          background: #ffffff;

          border: 1px solid var(--ha-line);

          box-shadow: 0 10px 22px rgba(13,59,125,0.06);

        }

        .ha-action-card-top {

          height: 120px;

          border-radius: 14px;

          margin-bottom: 16px;

          background:

            radial-gradient(circle at 70% 26%, rgba(255,255,255,0.18), transparent 18%),

            linear-gradient(135deg, #0c5aa6 0%, #82bde8 100%);

        }

        .ha-action-card:nth-child(2) .ha-action-card-top {

          background:

            radial-gradient(circle at 40% 24%, rgba(255,255,255,0.18), transparent 18%),

            linear-gradient(135deg, #e57457 0%, #f4b76d 100%);

        }

        .ha-action-card:nth-child(3) .ha-action-card-top {

          background:

            radial-gradient(circle at 66% 26%, rgba(255,255,255,0.18), transparent 18%),

            linear-gradient(135deg, #304f90 0%, #69a4d8 100%);

        }

        .ha-action-card h3 {

          margin: 0;

          color: var(--ha-text);

          font-size: 19px;

          line-height: 1.35;

          letter-spacing: -0.02em;

        }

        .ha-action-card p {

          margin: 10px 0 0;

          color: var(--ha-text-soft);

          font-size: 14px;

          line-height: 1.72;

        }

        .ha-faq-grid {

          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 12px;

        }

        .ha-faq-card {

          padding: 18px;

          border-radius: 16px;

          background: #ffffff;

          border: 1px solid var(--ha-line);

          box-shadow: 0 8px 16px rgba(13,59,125,0.04);

        }

        .ha-faq-card h3 {

          margin: 0;

          color: var(--ha-navy);

          font-size: 18px;

          line-height: 1.3;

          letter-spacing: -0.02em;

        }

        .ha-faq-card p {

          margin: 10px 0 0;

          color: var(--ha-text-soft);

          font-size: 14px;

          line-height: 1.7;

        }

        .ha-related-grid {

          display: grid;

          grid-template-columns: repeat(3, minmax(0, 1fr));

          gap: 14px;

        }

        .ha-related-card {

          overflow: hidden;

          border-radius: 18px;

          background: #ffffff;

          border: 1px solid var(--ha-line);

          box-shadow: 0 10px 22px rgba(13,59,125,0.06);

        }

        .ha-related-media {

          height: 170px;

        }

        .ha-related-card-1 .ha-related-media {

          background: linear-gradient(135deg, #2f6fa3 0%, #8fc1eb 100%);

        }

        .ha-related-card-2 .ha-related-media {

          background: linear-gradient(135deg, #ef8f73 0%, #ffc17b 100%);

        }

        .ha-related-card-3 .ha-related-media {

          background: linear-gradient(135deg, #0f5c9f 0%, #174780 100%);

        }

        .ha-related-body {

          padding: 16px;

          min-height: 92px;

          display: flex;

          align-items: center;

        }

        .ha-related-body span {

          color: var(--ha-text);

          font-size: 16px;

          font-weight: 800;

          line-height: 1.45;

          letter-spacing: -0.01em;

        }

        .ha-cta-band {

          padding: 24px 24px;

          border-radius: 22px;

          background:

            radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent 24%),

            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);

          color: var(--ha-white);

          text-align: center;

          box-shadow: var(--ha-shadow-lg);

        }

        .ha-cta-band h2 {

          margin: 0;

          color: var(--ha-white);

          font-size: 32px;

          line-height: 1.08;

          letter-spacing: -0.03em;

        }

        .ha-cta-band p {

          margin: 10px auto 0;

          max-width: 820px;

          color: rgba(255,255,255,0.92);

          font-size: 15px;

          line-height: 1.72;

        }

        .ha-cta-band-actions {

          margin-top: 16px;

          display: flex;

          justify-content: center;

        }

        @media (max-width: 1100px) {

          .ha-card-grid,

          .ha-action-grid,

          .ha-related-grid,

          .ha-faq-grid,

          .ha-featured-callout {

            grid-template-columns: 1fr 1fr;

          }

          .ha-editorial-split,

          .ha-featured-callout {

            grid-template-columns: 1fr;

          }

          .ha-title {

            font-size: 50px;

          }

          .ha-center-intro h2 {

            font-size: 42px;

          }

          .ha-section-title h2,

          .ha-editorial-copy h2 {

            font-size: 34px;

          }

        }

        @media (max-width: 767px) {

          .ha-container {

            padding: 0 16px;

          }

          .ha-hero-visual {

            height: 240px;

          }

          .ha-hero-intro-section {

            padding: 34px 0 24px;

          }

          .ha-signal-strip,

          .ha-card-grid,

          .ha-action-grid,

          .ha-related-grid,

          .ha-faq-grid {

            grid-template-columns: 1fr;

          }

          .ha-title {

            font-size: 34px;

            line-height: 1.04;

          }

          .ha-center-intro h2,

          .ha-section-title h2,

          .ha-editorial-copy h2,

          .ha-cta-band h2 {

            font-size: 28px;

          }

          .ha-center-intro p,

          .ha-section-title p,

          .ha-editorial-copy p,

          .ha-subtitle {

            font-size: 15px;

          }

          .ha-hero-actions {

            flex-direction: column;

            align-items: stretch;

          }

          .ha-card-media,

          .ha-related-media {

            height: 150px;

          }

          .ha-editorial-visual {

            min-height: 260px;

          }

          .ha-section-block {

            padding: 38px 0;

          }

          .ha-section-block-tight {

            padding: 28px 0;

          }

        }

      `}</style>

      <main className="ha-page">

        <div className="ha-breadcrumb-wrap">

          <div className="ha-container">

            <nav className="ha-breadcrumb" aria-label="Breadcrumb">

              <a href="/">Home</a>

              <span className="ha-breadcrumb-sep">/</span>

              <span aria-current="page">Hearing Aids</span>

            </nav>

          </div>

        </div>

        <section className="ha-hero-visual-section">

          <div className="ha-hero-visual" />

        </section>

        <section className="ha-hero-intro-section">

          <div className="ha-container">

            <div className="ha-hero-intro">

              <div className="ha-kicker">Trusted Hearing Care</div>

              <h1 className="ha-title">

                Hearing Aids: Understand Your Options Before You Decide

              </h1>

              <p className="ha-subtitle">

                Choosing hearing aids can feel confusing when every device promises something different. Some are small, some are powerful, some connect to phones, and some are easier for seniors to handle.

              </p>

              <p className="ha-subtitle ha-subtitle-soft">

                At Sound for Life, the process starts with your hearing test, not a product catalogue. An audiologist helps you understand what you need, what you can try, and what will fit your daily life.

              </p>

              <div className="ha-hero-actions">

                <a className="ha-btn ha-btn-primary" href="/book-hearing-test">

                  Talk to an Expert

                </a>

                <a className="ha-btn ha-btn-secondary" href="#hearing-aids-faqs">

                  Read FAQs

                </a>

              </div>

            </div>

          </div>

        </section>

        <section className="ha-signal-strip-wrap">

          <div className="ha-container">

            <div className="ha-signal-strip">

              <div className="ha-signal-pill">

                <span className="ha-signal-dot" />

                <span>Speech is unclear, not just quiet</span>

              </div>

              <div className="ha-signal-pill">

                <span className="ha-signal-dot" />

                <span>Family keeps repeating things</span>

              </div>

              <div className="ha-signal-pill">

                <span className="ha-signal-dot" />

                <span>TV and calls feel difficult</span>

              </div>

              <div className="ha-signal-pill">

                <span className="ha-signal-dot" />

                <span>Comparing devices online</span>

              </div>

            </div>

          </div>

        </section>

        <div className="ha-main">

          <section className="ha-section-block ha-section-block-white">

            <div className="ha-container">

              <div className="ha-center-intro">

                <div className="ha-center-kicker">Hearing Aid Basics</div>

                <h2>What Are Hearing Aids?</h2>

                <p>

                  Hearing aids are small electronic devices that help make sounds clearer for people with hearing loss. They do not cure hearing loss, but they can improve how you hear speech, conversations, phone calls, television, and everyday sounds.

                </p>

                <p>

                  A good hearing aid is not chosen only by brand or price. It should match your hearing test results, ear shape, comfort level, lifestyle, and the situations where you struggle most.

                </p>

              </div>

            </div>

          </section>

          <section className="ha-section-block ha-section-block-white">

            <div className="ha-container">

              <div className="ha-section-title">

                <h2>When Do People Start Looking for Hearing Aids?</h2>

                <p>

                  Most people do not search for hearing aids immediately. They first notice small daily problems that begin affecting communication and confidence.

                </p>

              </div>

              <TripleCardGrid items={signCards} />

            </div>

          </section>

          <section className="ha-section-block-banner">

            <div className="ha-container">

              <div className="ha-featured-callout">

                <div className="ha-featured-copy">

                  <div className="ha-featured-eyebrow">Important starting point</div>

                  <h3>The right hearing aid choice starts with a hearing test, not with a product list.</h3>

                  <p>

                    Invisible hearing aids, rechargeable hearing aids, Bluetooth hearing aids, and different in-ear or behind-the-ear styles may suit different users. What works depends on your hearing profile, comfort, and daily life.

                  </p>

                </div>

                <div className="ha-featured-metrics">

                  <div className="ha-featured-metric">

                    <div className="ha-featured-metric-label">Choose by</div>

                    <div className="ha-featured-metric-value">Need, not guesswork</div>

                  </div>

                  <div className="ha-featured-metric">

                    <div className="ha-featured-metric-label">Best next step</div>

                    <div className="ha-featured-metric-value">Test before comparing</div>

                  </div>

                </div>

              </div>

            </div>

          </section>

          <section className="ha-section-block ha-section-block-blue">

            <div className="ha-container">

              <div className="ha-section-title">

                <h2>Why Might Someone Need Hearing Aids?</h2>

                <p>

                  People usually need hearing aids when hearing loss starts affecting speech clarity, daily communication, or confidence. The cause can vary from person to person.

                </p>

              </div>

              <TripleCardGrid items={needCards} />

            </div>

          </section>

          <section className="ha-section-block ha-section-block-white">

            <div className="ha-container">

              <div className="ha-editorial-split">

                <div className="ha-editorial-copy">

                  <h2>When Should You Speak to an Audiologist?</h2>

                  <p>

                    You should not choose hearing aids only because you saw a model online or someone recommended a brand. Get checked first.

                  </p>

                  <p>

                    Book a hearing test if speech sounds unclear, get checked before buying any device, speak to an audiologist if you are buying for a parent, and get help if your current hearing aid feels uncomfortable or unclear.

                  </p>

                  <div className="ha-editorial-actions">

                    <a className="ha-btn ha-btn-primary" href="/book-hearing-test">

                      Talk to an Expert

                    </a>

                  </div>

                </div>

                <div className="ha-editorial-visual" />

              </div>

            </div>

          </section>

          <section className="ha-section-block ha-section-block-blue">

            <div className="ha-container">

              <div className="ha-section-title">

                <h2>How to Choose the Right Hearing Aid</h2>

                <p>

                  You do not need to decide alone. A good process makes the choice easier, calmer, and more accurate.

                </p>

              </div>

              <div style={{ marginBottom: 18 }}>

                <TripleCardGrid items={styleCards} />

              </div>

              <TripleCardGrid items={featureCards} />

              <div style={{ height: 18 }} />

              <div className="ha-action-grid">

                {actionCards.map((item) => (

                  <article key={item.title} className="ha-action-card">

                    <div className="ha-action-card-top" />

                    <h3>{item.title}</h3>

                    <p>{item.copy}</p>

                  </article>

                ))}

              </div>

            </div>

          </section>

          <section className="ha-section-block-tight">

            <div className="ha-container">

              <div className="ha-cta-band">

                <h2>Not Sure Which Hearing Aid Is Right for You?</h2>

                <p>

                  You do not have to choose from online lists or guess by price. Meet an audiologist, understand your hearing report, and compare suitable options calmly.

                </p>

                <div className="ha-cta-band-actions">

                  <a className="ha-btn ha-btn-primary" href="/book-hearing-test">

                    Talk to an Expert

                  </a>

                </div>

              </div>

            </div>

          </section>

          <section className="ha-section-block ha-section-block-white" id="hearing-aids-faqs">

            <div className="ha-container">

              <div className="ha-center-intro">

                <div className="ha-center-kicker">Frequently Asked Questions</div>

                <h2>Common Questions About Hearing Aids</h2>

                <p>

                  Clear answers to the questions people ask when they are comparing hearing aid options for themselves or a family member.

                </p>

              </div>

              <div style={{ height: 18 }} />

              <FAQGrid />

            </div>

          </section>

          <section className="ha-section-block ha-section-block-blue">

            <div className="ha-container">

              <div className="ha-center-intro">

                <div className="ha-center-kicker">Continue Exploring</div>

                <h2>Related Hearing Aid Pages</h2>

                <p>

                  Move into the style, feature, or device page that best matches what you are looking for.

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