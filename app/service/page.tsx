// app/services/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hearing Care Services for Tests, Hearing Aids, Repairs, and Support",
  description:
    "Explore hearing care services including tests, hearing aid trials, fitting, repairs, tinnitus support, pediatric care, home visits, and aftercare at Sound for Life.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Hearing Care Services Made Easier to Understand",
    description:
      "Not sure which hearing care service you need? Explore tests, fitting, repairs, support, and next steps with Sound for Life.",
    url: "/services",
    type: "website",
  },
};

type Block = {
  title: string;
  copy: string;
};

type ServiceItem = {
  title: string;
  subtitle: string;
  copy: string;
  cta: string;
  href: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const services: ServiceItem[] = [
  {
    title: "Hearing Test",
    subtitle:
      "Understand what is changing in your hearing before making any decision.",
    copy:
      "A hearing test helps measure your hearing ability and identify whether further support is needed. If you are searching for a hearing test near me, this is the best place to start.",
    cta: "Book Hearing Test",
    href: "/book-hearing-test",
  },
  {
    title: "Hearing Aid Trial",
    subtitle: "Try suitable hearing aid options before you commit.",
    copy:
      "A trial helps you understand comfort, clarity, and daily usability in real situations. This is useful if you are unsure about a hearing aid machine or device type.",
    cta: "Try Hearing Aid Trial",
    href: "/services/free-trial",
  },
  {
    title: "Hearing Aid Fitting",
    subtitle:
      "Get your hearing aid adjusted for your ear, hearing report, and comfort.",
    copy:
      "Fitting is not only about wearing the device. It is about tuning it so speech feels clearer and natural. This matters for new and existing hearing aid users.",
    cta: "Schedule Fitting Appointment",
    href: "/services/hearing-aid-fitting",
  },
  {
    title: "Tinnitus Support",
    subtitle: "Get guidance for ringing, buzzing, or humming sounds in the ears.",
    copy:
      "Tinnitus can feel distracting, especially at night or in quiet rooms. An audiologist can help you understand whether hearing evaluation, sound support, or referral is needed.",
    cta: "Talk to an Expert",
    href: "/book-hearing-test",
  },
  {
    title: "Pediatric Hearing Service",
    subtitle:
      "Get child-friendly hearing support when your child is not responding clearly.",
    copy:
      "This service helps parents after school screening concerns, speech delay worries, or unclear listening behaviour. A baby hearing test or child assessment may be suggested based on age and concern.",
    cta: "Book Pediatric Hearing Support",
    href: "/services/hearing-care-for-children",
  },
  {
    title: "Home Visit",
    subtitle:
      "Get hearing care support when visiting a clinic is difficult.",
    copy:
      "Home visit support may help seniors, mobility-limited patients, or families managing care for a parent. Availability depends on your city and nearest clinic.",
    cta: "Request Home Visit",
    href: "/services/home-visit",
  },
  {
    title: "Hearing Aid Repair and Servicing",
    subtitle:
      "Get help when your hearing aid stops working, feels weak, or sounds unclear.",
    copy:
      "This service supports cleaning, troubleshooting, basic checks, and repair guidance. If you are searching for a hearing aid service centre near me, start with a service enquiry.",
    cta: "Request a Service Visit",
    href: "/services/hearing-aid-repair-servicing",
  },
  {
    title: "Aftercare Support",
    subtitle:
      "Get support after your hearing aid fitting, not just before purchase.",
    copy:
      "Aftercare can include follow-ups, sound adjustments, usage guidance, cleaning support, and comfort checks. Hearing care continues after the first appointment.",
    cta: "Contact My Audiologist",
    href: "/services/aftercare-support",
  },
  {
    title: "Device Setup and Guidance",
    subtitle:
      "Get help using your hearing aid confidently every day.",
    copy:
      "This service helps with wearing, removing, cleaning, battery use, charging, and app or phone connection. It is especially useful for first-time users and senior patients.",
    cta: "Get Device Support",
    href: "/services/device-setup-guidance",
  },
  {
    title: "EMI and Financing Support",
    subtitle:
      "Understand payment options before cost becomes the reason you delay care.",
    copy:
      "If you are comparing hearing aid price, our team can explain available categories and payment routes. An audiologist can first help you understand what type of device may fit your need.",
    cta: "Ask About Financing Options",
    href: "/services/easy-payment-support",
  },
];

const decisionCards: Block[] = [
  {
    title: "If conversations feel unclear",
    copy:
      "Start with a hearing screening test or full hearing assessment. Recommended service: Hearing Test.",
  },
  {
    title: "If you are buying for a parent",
    copy:
      "Book an audiologist-led consultation before discussing devices. Recommended service: Hearing Test or Hearing Aid Trial.",
  },
  {
    title: "If you already use hearing aids",
    copy:
      "Request support if the sound is weak, noisy, uncomfortable, or inconsistent. Recommended service: Hearing Aid Repair and Servicing.",
  },
  {
    title: "If your hearing aid battery runs out quickly",
    copy:
      "You may need battery guidance, device cleaning, or performance check. Recommended service: Device Setup and Guidance.",
  },
  {
    title: "If you hear ringing or buzzing",
    copy:
      "Do not ignore it or self-diagnose. Recommended service: Tinnitus Support.",
  },
  {
    title: "If cost is stopping you from deciding",
    copy:
      "Speak to the clinic before assuming every option is unaffordable. Recommended service: EMI and Financing Support.",
  },
];

const processCards: Block[] = [
  {
    title: "Step 1: Choose your concern",
    copy:
      "Tell us what you are facing: unclear speech, device issue, ringing, child hearing concern, or cost confusion.",
  },
  {
    title: "Step 2: Book or request a callback",
    copy:
      "You can book an appointment, request a service visit, call the clinic, or ask our team to guide you.",
  },
  {
    title: "Step 3: Meet an audiologist",
    copy:
      "An audiologist understands your concern and explains the right test, service, or next step.",
  },
  {
    title: "Step 4: Get your next step clearly explained",
    copy:
      "You may need testing, fitting, repair, aftercare, trial, referral, or simple usage guidance. No pressure and no confusing medical language.",
  },
];

const whyChooseCards: Block[] = [
  {
    title: "Audiologist-led care",
    copy:
      "Your service begins with understanding your hearing, not pushing a device.",
  },
  {
    title: "No-pressure guidance",
    copy:
      "You get clear information before deciding on tests, devices, service, or cost.",
  },
  {
    title: "Clinic-based support",
    copy:
      "You can visit a nearby clinic for assessment, fitting, repair, or aftercare.",
  },
  {
    title: "Trial and fitting support",
    copy:
      "Trying and fitting a device properly can make the experience easier for first-time users.",
  },
  {
    title: "Aftercare beyond the first appointment",
    copy:
      "Support continues through follow-ups, adjustments, cleaning guidance, and service help.",
  },
  {
    title: "Multiple hearing aid brands",
    copy:
      "You can compare suitable options instead of being pushed toward one device.",
  },
];

const timingCards: Block[] = [
  {
    title: "You keep asking people to repeat themselves",
    copy:
      "This may be the first sign that you need a hearing assessment.",
  },
  {
    title: "TV volume keeps going up",
    copy:
      "If others find the volume too loud, your hearing may need to be checked.",
  },
  {
    title: "A parent is withdrawing from conversations",
    copy:
      "Many families notice hearing difficulty before the person accepts it.",
  },
  {
    title: "You hear ringing or buzzing in the ears",
    copy:
      "Tinnitus support can help you understand what may be happening.",
  },
  {
    title: "Your hearing aid is not working properly",
    copy:
      "Weak sound, whistling, sudden silence, or distortion may need service.",
  },
  {
    title: "You need help choosing a hearing aid",
    copy:
      "Do not choose only by brand, model, or online price. A hearing test and audiologist consultation can guide the right option.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Which hearing care service should I choose first?",
    answer:
      "Start with a hearing test if you are unsure what is wrong. It helps identify whether you need medical referral, hearing aid trial, fitting, aftercare, or simple monitoring.",
  },
  {
    question: "Do I need a hearing test before buying hearing aids?",
    answer:
      "Yes, you should take a hearing test before choosing hearing aids. Without a hearing report, you may choose a device that does not match your hearing level or daily needs.",
  },
  {
    question: "Can I book a hearing aid service visit?",
    answer:
      "Yes, you can request support if your device is weak, noisy, uncomfortable, or not working. If you are searching for a hearing aid service centre near me, contact your nearest Sound for Life clinic.",
  },
  {
    question: "Do you help with hearing aid fitting?",
    answer:
      "Yes, fitting support helps adjust the device to your hearing report, ear comfort, and daily listening needs. A good fitting can improve clarity and reduce discomfort.",
  },
  {
    question: "Can Sound for Life help if my parent refuses hearing care?",
    answer:
      "Yes, many families face this. You can book a calm first consultation where the focus is only on understanding the concern, not forcing a device decision.",
  },
  {
    question: "Do you offer tinnitus support?",
    answer:
      "Yes, Sound for Life can help you understand ringing, buzzing, or humming sounds in the ears. The audiologist may suggest hearing evaluation, sound support, counselling guidance, or referral if needed.",
  },
  {
    question: "Can I get help with hearing aid cost or EMI?",
    answer:
      "Yes, you can ask about device categories, payment options, and support routes. If you are comparing hearing aid prices, speak to an audiologist first so you understand what type of device may actually fit your needs.",
  },
];

function ServiceGrid() {
  return (
    <div className="sv-service-grid">
      {services.map((service, index) => (
        <article
          key={service.title}
          className={`sv-service-card sv-service-card-${(index % 3) + 1}`}
        >
          <div className="sv-service-media" />
          <div className="sv-service-body">
            <h3>{service.title}</h3>
            <h4>{service.subtitle}</h4>
            <p>{service.copy}</p>
            <a className="sv-link-cta" href={service.href}>
              {service.cta} →
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function TripleCardGrid({ items }: { items: Block[] }) {
  return (
    <div className="sv-card-grid">
      {items.map((item, index) => (
        <article key={item.title} className={`sv-card-box sv-card-box-${(index % 3) + 1}`}>
          <div className="sv-card-media" />
          <div className="sv-card-body">
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
    <div className="sv-faq-grid">
      {faqs.map((faq) => (
        <article key={faq.question} className="sv-faq-card">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </article>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
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
    name: "Hearing Care Services for Tests, Hearing Aids, Repairs, and Support",
    url: "/services",
    description:
      "Explore hearing care services including tests, hearing aid trials, fitting, repairs, tinnitus support, pediatric care, home visits, and aftercare at Sound for Life.",
  };

  return (
    <>
      <style>{`
        :root {
          --sv-navy: #0d3b7d;
          --sv-blue: #0a5cae;
          --sv-blue-soft: #edf6ff;
          --sv-orange: #f4831f;
          --sv-white: #ffffff;
          --sv-text: #223548;
          --sv-text-soft: #5f7083;
          --sv-line: rgba(13, 59, 125, 0.1);
          --sv-shadow: 0 18px 40px rgba(13, 59, 125, 0.08);
          --sv-shadow-lg: 0 28px 70px rgba(13, 59, 125, 0.14);
        }

        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; overflow-x: hidden; }

        body {
          font-family: Arial, sans-serif;
          color: var(--sv-text);
          background: #f7fafc;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .sv-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(232, 244, 253, 0.7), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #f7fafc 100%);
        }

        .sv-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .sv-breadcrumb-wrap {
          background: rgba(255,255,255,0.92);
          border-bottom: 1px solid var(--sv-line);
        }

        .sv-breadcrumb {
          min-height: 52px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--sv-text-soft);
          font-size: 14px;
          font-weight: 700;
        }

        .sv-breadcrumb-sep { opacity: 0.4; }

        .sv-hero-visual-section {
          background: #ffffff;
        }

        .sv-hero-visual {
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

        .sv-hero-intro-section {
          padding: 54px 0 34px;
          background: #ffffff;
        }

        .sv-hero-intro {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
        }

        .sv-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: var(--sv-navy);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .sv-kicker::before {
          content: "";
          width: 24px;
          height: 2px;
          background: rgba(13,59,125,0.34);
        }

        .sv-title {
          margin: 0;
          color: var(--sv-navy);
          font-size: 60px;
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .sv-subtitle {
          margin: 20px auto 0;
          max-width: 980px;
          color: var(--sv-text);
          font-size: 18px;
          line-height: 1.85;
        }

        .sv-subtitle-soft {
          color: var(--sv-text-soft);
        }

        .sv-hero-actions {
          margin-top: 28px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .sv-btn {
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

        .sv-btn:hover {
          transform: translateY(-2px);
        }

        .sv-btn-primary {
          background: linear-gradient(180deg, #f89a3f 0%, var(--sv-orange) 100%);
          color: var(--sv-white);
          box-shadow: 0 14px 28px rgba(244,131,31,0.24);
        }

        .sv-btn-secondary {
          background: #ffffff;
          color: var(--sv-navy);
          border: 1px solid rgba(13,59,125,0.14);
          box-shadow: 0 10px 20px rgba(13,59,125,0.05);
        }

        .sv-signal-strip-wrap {
          padding: 0 0 18px;
          background: #ffffff;
        }

        .sv-signal-strip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          padding: 10px;
          border-radius: 18px;
          background: rgba(255,255,255,0.98);
          border: 1px solid var(--sv-line);
          box-shadow: var(--sv-shadow);
        }

        .sv-signal-pill {
          min-height: 46px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-radius: 12px;
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
          border: 1px solid rgba(13,59,125,0.08);
          color: var(--sv-navy);
          font-size: 12px;
          font-weight: 800;
          line-height: 1.35;
        }

        .sv-signal-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          flex-shrink: 0;
          background: linear-gradient(180deg, var(--sv-blue), var(--sv-orange));
        }

        .sv-main {
          padding: 20px 0 56px;
        }

        .sv-section-block {
          padding: 58px 0;
        }

        .sv-section-block-tight {
          padding: 42px 0;
        }

        .sv-section-block-white {
          background: transparent;
        }

        .sv-section-block-blue {
          background: linear-gradient(180deg, var(--sv-blue-soft) 0%, rgba(255,255,255,0.82) 100%);
        }

        .sv-center-intro {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
        }

        .sv-center-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: var(--sv-orange);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .sv-center-kicker::before {
          content: "";
          width: 20px;
          height: 2px;
          background: rgba(244,131,31,0.45);
        }

        .sv-center-intro h2 {
          margin: 0;
          color: var(--sv-navy);
          font-size: 52px;
          line-height: 1.06;
          letter-spacing: -0.04em;
        }

        .sv-center-intro p {
          margin: 16px auto 0;
          max-width: 950px;
          color: var(--sv-text-soft);
          font-size: 18px;
          line-height: 1.8;
        }

        .sv-section-title {
          max-width: 1020px;
          margin: 0 auto 18px;
          text-align: center;
        }

        .sv-section-title h2 {
          margin: 0;
          color: var(--sv-orange);
          font-size: 42px;
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .sv-section-title p {
          margin: 14px auto 0;
          max-width: 960px;
          color: var(--sv-text);
          font-size: 18px;
          line-height: 1.76;
        }

        .sv-service-grid,
        .sv-card-grid,
        .sv-faq-grid {
          display: grid;
          gap: 18px;
        }

        .sv-service-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .sv-card-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .sv-faq-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .sv-service-card,
        .sv-card-box,
        .sv-faq-card {
          overflow: hidden;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid var(--sv-line);
          box-shadow: 0 10px 22px rgba(13,59,125,0.06);
        }

        .sv-service-media,
        .sv-card-media {
          height: 180px;
          background-size: cover;
          background-position: center;
        }

        .sv-service-card-1 .sv-service-media,
        .sv-card-box-1 .sv-card-media {
          background:
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #2f6fa3 0%, #8fc1eb 100%);
        }

        .sv-service-card-2 .sv-service-media,
        .sv-card-box-2 .sv-card-media {
          background:
            radial-gradient(circle at 70% 35%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #db8f8f 0%, #f1c1c1 100%);
        }

        .sv-service-card-3 .sv-service-media,
        .sv-card-box-3 .sv-card-media {
          background:
            radial-gradient(circle at 60% 40%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #f36f55 0%, #ffb063 100%);
        }

        .sv-service-body,
        .sv-card-body {
          padding: 18px 18px 20px;
        }

        .sv-service-body h3,
        .sv-card-body h3,
        .sv-faq-card h3 {
          margin: 0;
          color: var(--sv-text);
          font-size: 20px;
          line-height: 1.35;
          letter-spacing: -0.02em;
        }

        .sv-service-body h4 {
          margin: 10px 0 0;
          color: var(--sv-navy);
          font-size: 15px;
          line-height: 1.55;
        }

        .sv-service-body p,
        .sv-card-body p,
        .sv-faq-card p {
          margin: 10px 0 0;
          color: var(--sv-text-soft);
          font-size: 14px;
          line-height: 1.72;
        }

        .sv-link-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          color: var(--sv-blue);
          font-size: 14px;
          font-weight: 800;
        }

        .sv-cta-band {
          padding: 24px;
          border-radius: 22px;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent 24%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          color: var(--sv-white);
          text-align: center;
          box-shadow: var(--sv-shadow-lg);
        }

        .sv-cta-band h2 {
          margin: 0;
          color: var(--sv-white);
          font-size: 32px;
          line-height: 1.08;
          letter-spacing: -0.03em;
        }

        .sv-cta-band p {
          margin: 10px auto 0;
          max-width: 820px;
          color: rgba(255,255,255,0.92);
          font-size: 15px;
          line-height: 1.72;
        }

        .sv-cta-band-actions {
          margin-top: 16px;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 1100px) {
          .sv-service-grid,
          .sv-card-grid,
          .sv-faq-grid {
            grid-template-columns: 1fr 1fr;
          }

          .sv-title {
            font-size: 48px;
          }

          .sv-center-intro h2 {
            font-size: 42px;
          }

          .sv-section-title h2 {
            font-size: 34px;
          }
        }

        @media (max-width: 767px) {
          .sv-container {
            padding: 0 16px;
          }

          .sv-hero-visual {
            height: 240px;
          }

          .sv-hero-intro-section {
            padding: 34px 0 24px;
          }

          .sv-signal-strip,
          .sv-service-grid,
          .sv-card-grid,
          .sv-faq-grid {
            grid-template-columns: 1fr;
          }

          .sv-title {
            font-size: 34px;
            line-height: 1.04;
          }

          .sv-center-intro h2,
          .sv-section-title h2,
          .sv-cta-band h2 {
            font-size: 28px;
          }

          .sv-center-intro p,
          .sv-section-title p,
          .sv-subtitle {
            font-size: 15px;
          }

          .sv-hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .sv-service-media,
          .sv-card-media {
            height: 150px;
          }

          .sv-section-block {
            padding: 38px 0;
          }

          .sv-section-block-tight {
            padding: 28px 0;
          }
        }
      `}</style>

      <main className="sv-page">
        <div className="sv-breadcrumb-wrap">
          <div className="sv-container">
            <nav className="sv-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="sv-breadcrumb-sep">/</span>
              <span aria-current="page">Services</span>
            </nav>
          </div>
        </div>

        <section className="sv-hero-visual-section">
          <div className="sv-hero-visual" />
        </section>

        <section className="sv-hero-intro-section">
          <div className="sv-container">
            <div className="sv-hero-intro">
              <div className="sv-kicker">Trusted Hearing Care</div>
              <h1 className="sv-title">
                Hearing Care Services for Tests, Hearing Aids, Repairs, and Support
              </h1>

              <p className="sv-subtitle">
                You may not know whether you need a test, a hearing aid, a repair visit, or just someone to explain what is happening. That is exactly what this page is for.
              </p>

              <p className="sv-subtitle sv-subtitle-soft">
                Sound for Life helps you choose the right hearing care service based on your concern, not guesswork.
              </p>

              <div className="sv-hero-actions">
                <a className="sv-btn sv-btn-primary" href="/book-hearing-test">
                  Talk to an Expert
                </a>
                <a className="sv-btn sv-btn-secondary" href="#services-faqs">
                  Read FAQs
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="sv-signal-strip-wrap">
          <div className="sv-container">
            <div className="sv-signal-strip">
              <div className="sv-signal-pill">
                <span className="sv-signal-dot" />
                <span>Not sure which service you need</span>
              </div>
              <div className="sv-signal-pill">
                <span className="sv-signal-dot" />
                <span>Device issue or repair concern</span>
              </div>
              <div className="sv-signal-pill">
                <span className="sv-signal-dot" />
                <span>Need testing before deciding</span>
              </div>
              <div className="sv-signal-pill">
                <span className="sv-signal-dot" />
                <span>Want calm expert guidance</span>
              </div>
            </div>
          </div>
        </section>

        <div className="sv-main">
          <section className="sv-section-block sv-section-block-white">
            <div className="sv-container">
              <div className="sv-center-intro">
                <div className="sv-center-kicker">Service Guidance</div>
                <h2>Not Sure Which Hearing Service You Need?</h2>
                <p>
                  You do not have to know the exact medical term before asking for help. You may be searching for a hearing test because conversations feel unclear, a repair visit because your device is not working, or an audiologist because you want clarity before deciding anything.
                </p>
                <p>
                  Start with your situation. We will guide you toward the service that fits, and every service leads to a clear next step.
                </p>
              </div>
            </div>
          </section>

          <section className="sv-section-block sv-section-block-white">
            <div className="sv-container">
              <div className="sv-section-title">
                <h2>Main Hearing Care Services at Sound for Life</h2>
                <p>
                  Choose a clinic visit, callback, service enquiry, or expert consultation based on what you need now.
                </p>
              </div>

              <ServiceGrid />
            </div>
          </section>

          <section className="sv-section-block sv-section-block-blue">
            <div className="sv-container">
              <div className="sv-section-title">
                <h2>Choose Based on What You Are Facing</h2>
                <p>
                  When the situation feels unclear, the easiest next step is to match your concern to the most useful service.
                </p>
              </div>

              <TripleCardGrid items={decisionCards} />
            </div>
          </section>

          <section className="sv-section-block sv-section-block-white">
            <div className="sv-container">
              <div className="sv-section-title">
                <h2>How Sound for Life Helps You Move From Confusion to Clarity</h2>
                <p>
                  The process is simple: tell us the concern, book or request support, meet an audiologist, and leave with the right next step clearly explained.
                </p>
              </div>

              <TripleCardGrid items={processCards} />
            </div>
          </section>

          <section className="sv-section-block sv-section-block-blue">
            <div className="sv-container">
              <div className="sv-section-title">
                <h2>Why Choose Sound for Life for Hearing Care Services?</h2>
                <p>
                  The goal is not to push a device. It is to help you understand the concern, compare the right options, and continue with support after the first appointment.
                </p>
              </div>

              <TripleCardGrid items={whyChooseCards} />
            </div>
          </section>

          <section className="sv-section-block sv-section-block-white">
            <div className="sv-container">
              <div className="sv-section-title">
                <h2>When Should You Book a Hearing Care Service?</h2>
                <p>
                  Book a service when hearing difficulty starts affecting normal life, comfort, or confidence.
                </p>
              </div>

              <TripleCardGrid items={timingCards} />
            </div>
          </section>

          <section className="sv-section-block-tight">
            <div className="sv-container">
              <div className="sv-cta-band">
                <h2>Not Sure Which Service You Need?</h2>
                <p>
                  You do not need to decide alone. Tell us what is happening, and our team will guide you to the right test, service, clinic visit, or support option.
                </p>
                <div className="sv-cta-band-actions">
                  <a className="sv-btn sv-btn-primary" href="/book-hearing-test">
                    Talk to an Expert
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="sv-section-block sv-section-block-white" id="services-faqs">
            <div className="sv-container">
              <div className="sv-center-intro">
                <div className="sv-center-kicker">Frequently Asked Questions</div>
                <h2>Common Questions About Hearing Care Services</h2>
                <p>
                  Clear answers to help you decide whether you need testing, fitting, repair, consultation, or support.
                </p>
              </div>

              <div style={{ height: 18 }} />

              <FAQGrid />
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