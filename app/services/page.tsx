// app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hearing Care Services | Test, Fitting & Repair",
  description:
    "Explore hearing care services at Sound for Life. Book a hearing test, trial, fitting, repair, tinnitus support, or expert consultation.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Not Sure Which Hearing Service You Need?",
    description:
      "Start with your concern. Sound for Life helps you choose the right hearing test, fitting, trial, repair, or support service.",
    url: "/services",
    type: "website",
  },
};

type ServiceCard = {
  title: string;
  eyebrow: string;
  description: string;
  cta: string;
  href: string;
  featured?: boolean;
};

type JourneyStep = {
  title: string;
  subtitle: string;
  bullets: string[];
  note?: string;
};

type FeatureCard = {
  title: string;
  subtitle: string;
  body: string;
};

type StyleCard = {
  title: string;
  subtitle: string;
  body: string;
  brands: string;
  cta: string;
  href: string;
};

type ConcernCard = {
  title: string;
  subtitle: string;
  quote: string;
  outcome: string;
  attribution: string;
};

type TimelineItem = {
  title: string;
  subtitle: string;
  body: string;
};

type SupportCard = {
  title: string;
  subtitle: string;
  body: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type StatItem = {
  value: string;
  label: string;
};

const serviceCards: ServiceCard[] = [
  {
    title: "Hearing Test",
    eyebrow: "Understand what is changing before you decide anything.",
    description:
      "A hearing test helps identify the type and level of hearing difficulty. It is the right starting point if conversations feel unclear, TV volume keeps rising, or your family has started noticing changes.",
    cta: "Book Hearing Test",
    href: "/services/hearing-test",
  },
  {
    title: "Hearing Aid Trial",
    eyebrow: "Try suitable options before choosing a device.",
    description:
      "A hearing aid trial helps you understand comfort, clarity, and daily usability before making a decision. It is not a sales step. It is a confidence-building step.",
    cta: "Explore Hearing Aid Trial",
    href: "/services/hearing-aid-trial",
  },
  {
    title: "Precision Hearing Aid Fitting",
    eyebrow: "The service that makes your hearing aid feel truly usable.",
    description:
      "Precision hearing aid fitting is where your device is adjusted to your hearing profile, ear comfort, speech clarity, and real-life listening needs. If available, real ear measurement can help check how the hearing aid performs inside your actual ear, not just in a software setting.",
    cta: "Book Precision Fitting",
    href: "/services/hearing-aid-fitting",
    featured: true,
  },
  {
    title: "Hearing Aid Repair and Aftercare",
    eyebrow: "Get support when your device feels weak, noisy, or uncomfortable.",
    description:
      "Hearing aid repair can help when your device stops working, sounds unclear, whistles, or feels inconsistent. Aftercare may include cleaning, adjustment, battery help, servicing guidance, and comfort review.",
    cta: "Request a Service Visit",
    href: "/services/hearing-aid-repair",
  },
];

const journeySteps: JourneyStep[] = [
  {
    title: "Step 1: You choose your concern",
    subtitle: "Tell us what feels difficult.",
    bullets: [
      "Conversations feel unclear.",
      "TV volume keeps increasing.",
      "A parent is missing family conversations.",
      "Your hearing aid is not working properly.",
      "Ringing or buzzing is disturbing you.",
    ],
  },
  {
    title: "Step 2: We help you book the right service",
    subtitle: "You do not need to know the medical term.",
    bullets: [
      "Choose a hearing test for new hearing concerns.",
      "Choose a hearing aid trial if you want to explore device options.",
      "Choose hearing aid fitting for comfort and clarity.",
      "Choose repair or aftercare if you already use hearing aids.",
      "Choose tinnitus support for ringing, buzzing, or humming sounds.",
    ],
  },
  {
    title: "Step 3: You meet an audiologist",
    subtitle:
      "The first conversation is about your hearing, not selling a device.",
    bullets: [
      "Your concern is discussed.",
      "Your hearing history is understood.",
      "Your family member can join.",
      "Your questions are answered calmly.",
    ],
    note:
      "If you are searching for an audiologist near me, this is the support you should expect from a clinic visit.",
  },
  {
    title: "Step 4: Your hearing is checked or your device is reviewed",
    subtitle: "The service depends on your need.",
    bullets: [
      "A hearing concern may need a hearing test.",
      "An existing device may need a hearing aid check.",
      "A comfort issue may need fitting review.",
      "A new device decision may need trial discussion.",
      "A weak or unclear device may need cleaning or troubleshooting.",
    ],
  },
  {
    title: "Step 5: You leave with a clear next step",
    subtitle: "No pressure. No confusing medical language.",
    bullets: [
      "Your test result is explained.",
      "A device may be recommended only if needed.",
      "Repair or service guidance is shared.",
      "A trial or fitting plan may be suggested.",
      "Follow-up or aftercare advice is discussed.",
    ],
  },
];

const whyChooseUs: FeatureCard[] = [
  {
    title: "Manufacturer-neutral guidance",
    subtitle:
      "We help you compare suitable options instead of pushing one brand.",
    body:
      "This matters when you are comparing digital hearing aids, device styles, comfort, features, and budget.",
  },
  {
    title: "Audiologist-led care",
    subtitle:
      "Your hearing is assessed and explained by trained hearing care professionals.",
    body:
      "An audiologist helps connect your symptoms, test results, lifestyle, and next step.",
  },
  {
    title: "Precision fitting support",
    subtitle:
      "Your device is adjusted for your hearing profile, comfort, and daily listening needs.",
    body:
      "A good fitting can make the difference between a device you tolerate and a device you actually use.",
  },
  {
    title: "Real- ear measurement",
    subtitle:
      "Real ear measurement checks how the hearing aid performs in your actual ear.",
    body:
      "It helps fine-tune sound more accurately when the service is available at the clinic.",
  },
  {
    title: "Aftercare beyond the first appointment",
    subtitle:
      "Fitting, adjustment, cleaning, servicing, and follow-up support continue after purchase.",
    body:
      "This is especially useful if you need help with hearing aid batteries, cleaning, comfort, or device handling.",
  },
];

const stats: StatItem[] = [
  { value: "5000+", label: "Patients Supported" },
  { value: "37+", label: "Clinics Across India" },
  { value: "7+", label: "Hearing Aid Brands" },
  { value: "4.7 /5", label: "Average Review Rating" },
];

const hearingAidStyles: StyleCard[] = [
  {
    title: "RIC Hearing Aids",
    subtitle:
      "Often chosen for comfort, clarity, and a discreet behind-the-ear fit.",
    body:
      "RIC hearing aids may suit users who want a balance of sound quality, comfort, and a smaller visible profile.",
    brands: "Signia Pure, Phonak Audeo, ReSound Nexia.",
    cta: "Compare RIC Options",
    href: "/hearing-aids",
  },
  {
    title: "IIC Hearing Aids",
    subtitle:
      "A discreet style for selected users after ear and hearing assessment.",
    body:
      "IIC hearing aids sit deeper inside the ear canal. They may not suit every hearing level, ear shape, or handling need.",
    brands: "Signia Silk, Phonak Virto.",
    cta: "Ask About Invisible Options",
    href: "/hearing-aids",
  },
  {
    title: "BTE Hearing Aid",
    subtitle:
      "A practical option when more power or easier handling is needed.",
    body:
      "A BTE hearing aid may suit seniors, users with higher hearing needs, or people who prefer easier handling.",
    brands: "Phonak Naida, Signia Motion, ReSound Enzo.",
    cta: "Explore BTE Options",
    href: "/hearing-aids",
  },
];

const patientConcerns: ConcernCard[] = [
  {
    title: "“I thought I was managing fine.”",
    subtitle: "Reluctant patient",
    quote:
      "I kept saying people were speaking too softly. I was worried the clinic would directly push hearing aids on me. The visit helped me understand my hearing first, and the explanation felt calm.",
    outcome: "Clear explanation. No-pressure approach.",
    attribution: "— Patient, Delhi",
  },
  {
    title: "“I needed someone who could explain it to my father calmly.”",
    subtitle: "Adult child researching for parent",
    quote:
      "My father did not want to accept that he was missing conversations. I needed someone patient enough to explain the process without making him uncomfortable.",
    outcome: "The family understood the next step together.",
    attribution: "— Daughter of patient, Noida",
  },
  {
    title: "“The ringing was affecting my sleep.”",
    subtitle: "Tinnitus sufferer",
    quote:
      "I came because of ringing in my ears and did not know if it was linked to hearing loss. The clinic helped me understand what should be checked first.",
    outcome: "Clear evaluation path for tinnitus support.",
    attribution: "— Tinnitus patient, Gurugram",
  },
];

const visitTimeline: TimelineItem[] = [
  {
    title: "0–5 minutes: Arrival and basic details",
    subtitle:
      "We understand why you came in and what you are worried about.",
    body:
      "You can share whether the concern is hearing clarity, tinnitus, device trouble, or a family member’s hearing.",
  },
  {
    title: "5–15 minutes: Hearing history discussion",
    subtitle:
      "The audiologist asks about conversations, phone calls, TV volume, work, family, and past ear concerns.",
    body:
      "This helps connect your daily difficulty with the right service.",
  },
  {
    title: "15–35 minutes: Hearing test or device review",
    subtitle:
      "Depending on your concern, we test your hearing or review your existing hearing aid.",
    body:
      "If you already use a hearing aid machine, bring it with you for review.",
  },
  {
    title: "35–45 minutes: Results explained in plain language",
    subtitle:
      "You understand what is changing, what is normal, and what may need support.",
    body:
      "You can ask questions before discussing any device or service plan.",
  },
  {
    title: "45–60 minutes: Next step discussion",
    subtitle:
      "You may discuss trial, fitting, repair, tinnitus support, aftercare, or follow-up.",
    body: "The goal is to leave with clarity, not pressure.",
  },
];



const supportCards: SupportCard[] = [
  {
    title: "Trial support",
    subtitle:
      "Try suitable hearing aid options before making a decision, where available.",
    body:
      "This helps you understand comfort and clarity before you commit.",
  },
  {
    title: "Warranty guidance",
    subtitle:
      "Understand warranty terms clearly before you choose a device.",
    body:
      "Warranty details can vary by brand, model, and purchase terms.",
  },
  {
    title: "Insurance or scheme guidance",
    subtitle: "Ask the clinic team about available support routes.",
    body:
      "Do not assume coverage unless it is verified for your case.",
  },
  {
    title: "EMI and financing support",
    subtitle:
      "If hearing aid price in India feels confusing, ask about available payment options.",
    body:
      "If hearing aid prices are stopping you from deciding, the clinic can explain device categories and possible financing routes.",
  },
  {
    title: "Repair and service support",
    subtitle:
      "Get help with device cleaning, hearing aid parts, batteries, servicing, and troubleshooting.",
    body:
      "If you are searching for a hearing aid service centre near me, start with your nearest Sound for Life clinic.",
  },
  {
    title: "Brand support",
    subtitle: "Include only verified brand logos.",
    body:
      "Do not show insurance, scheme, or partner logos unless confirmed.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "Do I need a hearing test before choosing hearing aids?",
    answer:
      "Yes. A hearing test helps identify your hearing level and the type of support you may need. Without it, you may choose a device that does not match your hearing profile, comfort, or daily listening needs.",
  },
  {
    question: "Will I be pushed to buy a hearing aid at the first visit?",
    answer:
      "No. The first visit should focus on understanding your concern, explaining your results, and answering your questions. A device discussion should happen only if your hearing results show that support may help.",
  },
  {
    question: "What if I already have a hearing aid but it is not working well?",
    answer:
      "Bring your device to the clinic for review. Weak sound, whistling, discomfort, or battery issues may need cleaning, adjustment, servicing, or hearing aid repair guidance.",
  },
  {
    question: "Can I bring my parent or family member to the appointment?",
    answer:
      "Yes. Many visitors come with a parent, spouse, or adult child. This helps the family understand the hearing concern, the test results, and the next step together.",
  },
  {
    question: "How do I know which hearing aid style is right for me?",
    answer:
      "The right style depends on your hearing test, ear shape, comfort, handling ability, and daily routine. An audiologist may compare options like RIC hearing aids, IIC hearing aids, or a BTE hearing aid after assessment.",
  },
  {
    question: "Can I get help with hearing aid cost, EMI, or warranty?",
    answer:
      "Yes. The clinic can explain device categories, warranty terms, and payment options. If you are comparing hearing aid price in India, speak to an audiologist first so you understand what type of device may actually fit your need.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  copy,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`svc-section-header ${
        centered ? "svc-section-header-centered" : ""
      }`}
    >
      <div className="sfl-kicker sfl-kicker-orange">{eyebrow}</div>
      <h2 className="sfl-h2">{title}</h2>
      <p className="sfl-body">{copy}</p>
    </div>
  );
}

function ServiceGrid() {
  return (
    <div className="svc-grid svc-grid-2">
      {serviceCards.map((service) => (
        <article
          key={service.title}
          className={`svc-card svc-card-hover ${
            service.featured ? "svc-card-dark svc-card-featured" : ""
          }`}
        >
          <div className="svc-card-body svc-stack-4">
            <div className="svc-service-icon" aria-hidden="true">
              <span />
            </div>
            <div className="svc-stack-3">
              <h3 className="sfl-h3">{service.title}</h3>
              <h4 className="sfl-h4">{service.eyebrow}</h4>
              <p className="sfl-body">{service.description}</p>
            </div>
            <Link href={service.href} className="sfl-link">
              {service.cta}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function JourneyTimeline() {
  return (
    <div className="svc-timeline">
      {journeySteps.map((step, index) => (
        <article key={step.title} className="svc-timeline-row">
          <div className="svc-step-badge">{index + 1}</div>
          <div className="svc-card svc-step-card">
            <div className="svc-card-body svc-stack-3">
              <h3 className="sfl-h3">{step.title}</h3>
              <h4 className="sfl-h4">{step.subtitle}</h4>
              <ul className="svc-list">
                {step.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {step.note ? <p className="svc-step-note">{step.note}</p> : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function WhyChooseSection() {
  const [featured, ...rest] = whyChooseUs;

  return (
    <div className="svc-why-shell">
      <article className="svc-card svc-feature-card">
        <div className="svc-card-body svc-stack-3">
          <div className="sfl-kicker sfl-kicker-orange">Core Difference</div>
          <h3 className="sfl-h3">{featured.title}</h3>
          <h4 className="sfl-h4">{featured.subtitle}</h4>
          <p className="sfl-body">{featured.body}</p>
        </div>
      </article>

      <div className="svc-grid svc-grid-2">
        {rest.map((item) => (
          <article key={item.title} className="svc-card svc-card-hover">
            <div className="svc-card-body svc-stack-3">
              <h3 className="sfl-h3">{item.title}</h3>
              <h4 className="sfl-h4">{item.subtitle}</h4>
              <p className="sfl-body">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function StatsStrip() {
  return (
    <div className="svc-stats-strip">
      {stats.map((item) => (
        <div key={item.label} className="svc-stat-card">
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function StyleGrid() {
  return (
    <div className="svc-grid svc-grid-3">
      {hearingAidStyles.map((item, index) => (
        <article
          key={item.title}
          className="svc-card svc-card-hover svc-style-card"
        >
          <div
            className={`svc-style-visual svc-style-visual-${index + 1}`}
            aria-hidden="true"
          />
          <div className="svc-card-body svc-stack-3">
            <h3 className="sfl-h3">{item.title}</h3>
            <h4 className="sfl-h4">{item.subtitle}</h4>
            <p className="sfl-body">{item.body}</p>
            <p className="sfl-body svc-style-brands">
              <strong>Brand examples:</strong> {item.brands}
            </p>
            <Link href={item.href} className="sfl-link">
              {item.cta}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function ConcernGrid() {
  return (
    <div className="svc-stack-4">
      <div className="svc-review-badge">
        4.9 / 5 from [insert verified review count] reviews
      </div>

      <div className="svc-grid svc-grid-3">
        {patientConcerns.map((item) => (
          <article key={item.title} className="svc-card svc-card-hover">
            <div className="svc-card-body svc-stack-3">
              <h3 className="sfl-h3">{item.title}</h3>
              <h4 className="sfl-h4">{item.subtitle}</h4>
              <blockquote className="svc-quote">{item.quote}</blockquote>
              <p className="sfl-body">
                <strong>Outcome:</strong> {item.outcome}
              </p>
              <p className="sfl-small svc-attribution">{item.attribution}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function FirstVisitSection() {
  return (
    <div className="svc-first-visit-shell">
      <div className="svc-timeline">
        {visitTimeline.map((item, index) => (
          <article key={item.title} className="svc-timeline-row">
            <div className="svc-step-badge">{index + 1}</div>
            <div className="svc-card svc-step-card">
              <div className="svc-card-body svc-stack-3">
                <h3 className="sfl-h3">{item.title}</h3>
                <h4 className="sfl-h4">{item.subtitle}</h4>
                <p className="sfl-body">{item.body}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      
    </div>
  );
}

function SupportGrid() {
  return (
    <div className="svc-grid svc-grid-3">
      {supportCards.map((item) => (
        <article key={item.title} className="svc-card svc-card-hover">
          <div className="svc-card-body svc-stack-3">
            <h3 className="sfl-h3">{item.title}</h3>
            <h4 className="sfl-h4">{item.subtitle}</h4>
            <p className="sfl-body">{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function FAQAccordion() {
  return (
    <div className="svc-faq-list">
      {faqs.map((faq) => (
        <details key={faq.question} className="svc-faq-item">
          <summary className="svc-faq-summary">
            <span>{faq.question}</span>
            <span className="svc-faq-icon" aria-hidden="true">
              +
            </span>
          </summary>
          <div className="svc-faq-content">
            <p className="sfl-body">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Hearing Care Services | Test, Fitting & Repair",
        url: "/services",
        description:
          "Explore hearing care services at Sound for Life. Book a hearing test, trial, fitting, repair, tinnitus support, or expert consultation.",
      },
      {
        "@type": "MedicalWebPage",
        name: "Hearing Care Services | Test, Fitting & Repair",
        url: "/services",
        description:
          "Explore hearing care services at Sound for Life. Book a hearing test, trial, fitting, repair, tinnitus support, or expert consultation.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "/services",
          },
        ],
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
      ...serviceCards.map((service) => ({
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: service.href,
        provider: {
          "@type": "MedicalBusiness",
          name: "Sound for Life",
        },
      })),
    ],
  };

  return (
    <>
      <style>{`
        .sfl-services-page {
          padding-top: 118px;
        }

        .svc-stack-3 > * + * {
          margin-top: 12px;
        }

        .svc-stack-4 > * + * {
          margin-top: 16px;
        }

        .svc-breadcrumb-wrap {
          background: rgba(255,255,255,0.94);
          border-bottom: 1px solid var(--sfl-line);
        }

        .svc-breadcrumb {
          min-height: 52px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--sfl-text-soft);
          font-size: 14px;
          font-weight: 700;
        }

        .svc-breadcrumb-sep {
          opacity: 0.45;
        }

        .svc-section {
          padding: 88px 0;
        }

        .svc-section-tight {
          padding: 54px 0;
        }

        .svc-section-soft {
          background: linear-gradient(180deg, #f7fbff 0%, #ffffff 100%);
        }

        .svc-section-blue {
          background: linear-gradient(180deg, #eef7fd 0%, #ffffff 100%);
        }

        .svc-section-header {
          max-width: 940px;
          margin-bottom: 30px;
        }

        .svc-section-header-centered {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .svc-hero-shell {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(340px, 0.95fr);
          gap: 24px;
          align-items: stretch;
        }

        .svc-hero-main,
        .svc-card,
        .svc-side-panel,
        .svc-feature-card,
        .svc-stat-card,
        .svc-faq-item {
          border-radius: 24px;
        }

        .svc-hero-main,
        .svc-card,
        .svc-feature-card,
        .svc-stat-card {
          background: rgba(255,255,255,0.98);
          border: 1px solid var(--sfl-line);
          box-shadow: var(--sfl-shadow-md);
        }

        .svc-card-hover {
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .svc-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: var(--sfl-shadow-lg);
          border-color: rgba(10,92,174,0.14);
        }

        .svc-hero-main {
          padding: 34px;
        }

        .svc-hero-main .sfl-h1 {
          max-width: 760px;
        }

        .svc-hero-main .sfl-lead {
          max-width: 760px;
        }

        .svc-hero-actions {
          margin-top: 28px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .svc-trust-line {
          margin-top: 18px;
          color: var(--sfl-text-soft);
          font-size: 13px;
          font-weight: 800;
          line-height: 1.7;
        }

        .svc-side-panel {
          padding: 28px;
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent 26%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          box-shadow: var(--sfl-shadow-lg);
          display: grid;
          gap: 18px;
          align-content: start;
        }

        .svc-side-panel .sfl-h3,
        .svc-side-panel .sfl-body {
          color: #ffffff;
        }

        .svc-category-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .svc-category-pill {
          padding: 14px;
          border-radius: 16px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.14);
        }

        .svc-category-pill strong {
          display: block;
          color: #ffffff;
          font-size: 14px;
          line-height: 1.35;
        }

        .svc-category-pill span {
          display: block;
          margin-top: 6px;
          color: rgba(255,255,255,0.82);
          font-size: 12px;
          line-height: 1.55;
        }

        .svc-grid {
          display: grid;
          gap: 20px;
        }

        .svc-grid > * {
          width: 100%;
        }

        .svc-grid-2 {
          grid-template-columns: 1fr;
        }

        .svc-grid-3 {
          grid-template-columns: 1fr;
        }

        .svc-card-body {
          padding: 26px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .svc-card-dark {
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.1), transparent 26%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: var(--sfl-shadow-lg);
        }

        .svc-card-dark .sfl-h3,
        .svc-card-dark .sfl-h4,
        .svc-card-dark .sfl-body,
        .svc-card-dark .sfl-link {
          color: #ffffff;
        }

        .svc-card-dark .sfl-link {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .svc-service-icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, var(--sfl-blue), #8fc1eb);
        }

        .svc-card-featured .svc-service-icon {
          background: linear-gradient(135deg, var(--sfl-gold), #f1d59b);
        }

        .svc-service-icon span {
          width: 18px;
          height: 18px;
          border-radius: 999px;
          border: 2px solid #fff;
        }

        .svc-timeline {
          display: grid;
          gap: 16px;
        }

        .svc-timeline-row {
          display: grid;
          grid-template-columns: 64px minmax(0, 1fr);
          gap: 18px;
          align-items: start;
        }

        .svc-step-badge {
          width: 48px;
          height: 48px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, var(--sfl-gold) 0%, #f1d59b 100%);
          color: var(--sfl-navy);
          font-weight: 900;
          box-shadow: 0 10px 20px rgba(255,202,40,0.24);
          margin-top: 8px;
        }

        .svc-step-card {
          min-height: 100%;
        }

        .svc-list {
          margin: 0;
          padding-left: 18px;
          color: var(--sfl-text-soft);
        }

        .svc-list li {
          margin-top: 8px;
          line-height: 1.72;
        }

        .svc-step-note {
          margin: 0;
          color: var(--sfl-navy);
          font-size: 15px;
          line-height: 1.72;
          font-weight: 700;
        }

        .svc-why-shell {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: stretch;
        }

        .svc-feature-card {
          min-height: 100%;
        }

        .svc-stats-strip {
          margin-top: 22px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .svc-stat-card {
          min-height: 112px;
          padding: 20px;
          display: grid;
          align-content: center;
          justify-items: center;
          text-align: center;
        }

        .svc-stat-card strong {
          color: var(--sfl-navy);
          font-size: 28px;
          line-height: 1;
          letter-spacing: -0.03em;
        }

        .svc-stat-card span {
          margin-top: 8px;
          color: var(--sfl-text-soft);
          font-size: 13px;
          font-weight: 800;
          line-height: 1.5;
        }

        .svc-style-card {
          overflow: hidden;
        }

        .svc-style-visual {
          height: 180px;
        }

        .svc-style-visual-1 {
          background:
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent 18%),
            linear-gradient(135deg, #0f5c9f 0%, #8fc1eb 100%);
        }

        .svc-style-visual-2 {
          background:
            radial-gradient(circle at 70% 30%, rgba(255,255,255,0.2), transparent 18%),
            linear-gradient(135deg, #e08162 0%, #f4c27d 100%);
        }

        .svc-style-visual-3 {
          background:
            radial-gradient(circle at 60% 35%, rgba(255,255,255,0.2), transparent 18%),
            linear-gradient(135deg, #203f82 0%, #6fa8db 100%);
        }

        .svc-style-brands strong {
          color: var(--sfl-text);
        }

        .svc-review-badge {
          justify-self: center;
          padding: 10px 14px;
          border-radius: 999px;
          background: #fff7ec;
          border: 1px solid rgba(244,131,31,0.18);
          color: var(--sfl-navy);
          font-size: 13px;
          font-weight: 800;
        }

        .svc-quote {
          margin: 0;
          color: var(--sfl-text-soft);
          font-size: 15px;
          line-height: 1.78;
        }

        .svc-attribution {
          font-weight: 800;
        }

        .svc-first-visit-shell {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: start;
        }

        .svc-first-visit-questions {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          align-items: start;
        }

        .svc-first-visit-question-card {
          width: 100%;
          height: auto;
          min-height: 0;
          align-self: start;
        }

        .svc-first-visit-question-body {
          height: auto;
          min-height: 0;
          justify-content: flex-start;
        }

        .svc-faq-list {
          display: grid;
          gap: 12px;
          max-width: 980px;
          margin: 0 auto;
        }

        .svc-faq-item {
          background: rgba(255,255,255,0.99);
          border: 1px solid var(--sfl-line);
          box-shadow: var(--sfl-shadow-sm);
          overflow: hidden;
        }

        .svc-faq-summary {
          list-style: none;
          width: 100%;
          min-height: 66px;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          color: var(--sfl-navy);
          font-size: 18px;
          font-weight: 800;
          line-height: 1.5;
        }

        .svc-faq-summary::-webkit-details-marker {
          display: none;
        }

        .svc-faq-icon {
          color: var(--sfl-blue);
          font-size: 22px;
          font-weight: 900;
          flex-shrink: 0;
          transition: transform 220ms ease;
        }

        .svc-faq-item[open] .svc-faq-icon {
          transform: rotate(45deg);
        }

        .svc-faq-content {
          padding: 0 22px 22px;
        }

        .svc-final-cta {
          padding: 34px;
          border-radius: 30px;
          text-align: center;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent 24%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          color: #ffffff;
          box-shadow: var(--sfl-shadow-lg);
        }

        .svc-final-cta .sfl-h2,
        .svc-final-cta .sfl-body,
        .svc-final-cta .sfl-small {
          color: #ffffff;
        }

        .svc-final-copy {
          max-width: 760px;
          margin-left: auto;
          margin-right: auto;
        }

        .svc-final-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 22px;
        }

        .svc-final-microcopy {
          margin-top: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.92);
        }

        @media (max-width: 1220px) {
          .svc-hero-shell,
          .svc-why-shell,
          .svc-first-visit-shell {
            grid-template-columns: 1fr;
          }

          .svc-grid-2,
          .svc-grid-3,
          .svc-stats-strip {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .sfl-services-page {
            padding-top: 112px;
          }

          .svc-section,
          .svc-section-tight {
            padding: 72px 0;
          }

          .svc-grid-3,
          .svc-grid-2,
          .svc-stats-strip,
          .svc-category-grid {
            grid-template-columns: 1fr;
          }

          .svc-hero-main,
          .svc-side-panel,
          .svc-card-body,
          .svc-final-cta {
            padding: 22px;
          }

          .svc-hero-actions,
          .svc-final-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .svc-timeline-row {
            grid-template-columns: 48px minmax(0, 1fr);
            gap: 14px;
          }

          .svc-faq-summary {
            font-size: 16px;
          }
        }
      `}</style>

      <main className="sfl-page sfl-services-page">
        <div className="svc-breadcrumb-wrap">
          <div className="sfl-container">
            <nav className="svc-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="svc-breadcrumb-sep">/</span>
              <span aria-current="page">Services</span>
            </nav>
          </div>
        </div>

        <section className="svc-section">
          <div className="sfl-container">
            <div className="svc-hero-shell">
              <div className="svc-hero-main">
                <div className="sfl-kicker">Trusted Hearing Care</div>
                <h1 className="sfl-h1">
                  Hearing Care Services That Help You Know What to Do Next
                </h1>
                <p className="sfl-lead" style={{ marginTop: 22 }}>
                  You may not know whether you need a hearing test, fitting,
                  repair, tinnitus support, or a hearing aid trial.
                </p>
                <p className="sfl-lead" style={{ marginTop: 14 }}>
                  Start with what feels difficult. Sound for Life helps you
                  choose the right service, meet the right specialist, and
                  understand the next step clearly.
                </p>

                <div className="svc-hero-actions">
                  <Link href="/book-appointment" className="sfl-btn sfl-btn-primary">
                    Book Appointment
                  </Link>
                  <Link href="#services-grid" className="sfl-btn sfl-btn-secondary">
                    Explore Services
                  </Link>
                </div>

                <div className="svc-trust-line">
                  Audiologist-led care · Hearing tests · Trials · Fitting · Repair · Aftercare
                </div>
              </div>

              <aside className="svc-side-panel" aria-label="Service categories overview">
                <div className="svc-stack-3">
                  <h3 className="sfl-h3">
                    Start with your concern, not a product list.
                  </h3>
                  <p className="sfl-body">
                    The goal is to move from uncertainty to the right service,
                    the right clinic conversation, and the right next step.
                  </p>
                </div>

                <div className="svc-category-grid">
                  <div className="svc-category-pill">
                    <strong>Testing</strong>
                    <span>Hearing test and first clarity</span>
                  </div>
                  <div className="svc-category-pill">
                    <strong>Decision Support</strong>
                    <span>Trial and style comparison</span>
                  </div>
                  <div className="svc-category-pill">
                    <strong>Precision Fitting</strong>
                    <span>Comfort, tuning, real-life listening</span>
                  </div>
                  <div className="svc-category-pill">
                    <strong>Repair & Aftercare</strong>
                    <span>Service, adjustment, troubleshooting</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="svc-section svc-section-soft" id="services-grid">
          <div className="sfl-container">
            <SectionHeader
              eyebrow="Service Hub"
              title="Choose the Hearing Care Service That Matches Your Concern"
              copy="This page is designed to help you choose the right next step with less confusion and more clarity."
            />
            <ServiceGrid />
          </div>
        </section>

        <section className="svc-section">
          <div className="sfl-container">
            <SectionHeader
              eyebrow="Patient Journey"
              title="What Happens After You Book?"
              copy="A calm hearing-care process should feel guided, structured, and easy to understand."
            />
            <JourneyTimeline />
          </div>
        </section>

        <section className="svc-section svc-section-blue">
          <div className="sfl-container">
            <SectionHeader
              eyebrow="Why Sound for Life"
              title="Why Choose Sound for Life for Hearing Care Services?"
              copy="The focus is not on pushing a device. The focus is on helping you understand the concern, compare the right options, and continue with support after the first appointment."
            />
            <WhyChooseSection />
            <StatsStrip />
          </div>
        </section>

        <section className="svc-section">
          <div className="sfl-container">
            <SectionHeader
              eyebrow="Technology Showcase"
              title="Hearing Aid Styles and Brands We Help You Compare"
              copy="Style, comfort, handling, and hearing profile all matter. These are examples of how comparison conversations usually begin."
            />
            <StyleGrid />
          </div>
        </section>

        <section className="svc-section svc-section-soft">
          <div className="sfl-container">
            <SectionHeader
              eyebrow="Common Patient Concerns"
              title="What Patients Usually Worry About Before They Visit"
              copy="These are presented as common concerns, not generic review cards."
            />
            <ConcernGrid />
          </div>
        </section>

        <section className="svc-section">
          <div className="sfl-container">
            <SectionHeader
              eyebrow="First Visit Experience"
              title="Your First Visit, Minute by Minute"
              copy="The first visit should move at a calm pace and explain your hearing in plain language."
            />
            <FirstVisitSection />
          </div>
        </section>

        <section className="svc-section svc-section-blue">
          <div className="sfl-container">
            <SectionHeader
              eyebrow="Trust and Financing"
              title="Support That Makes the Decision Easier"
              copy="This section should help patients ask better questions without assuming coverage, price, or claims that are not verified."
            />
            <SupportGrid />
          </div>
        </section>

        <section className="svc-section" id="services-faqs">
          <div className="sfl-container">
            <SectionHeader
              eyebrow="Frequently Asked Questions"
              title="Frequently Asked Questions"
              copy="Clear answers to help visitors decide what to book and what to expect."
              centered
            />
            <FAQAccordion />
          </div>
        </section>

        <section className="svc-section-tight">
          <div className="sfl-container">
            <div className="svc-final-cta">
              <h2 className="sfl-h2">Still not sure which service to book?</h2>
              <p className="sfl-body svc-final-copy">
                Start with your concern. Our team can help you choose the right
                hearing test, fitting, trial, repair, tinnitus support, or
                aftercare service.
              </p>
              <div className="svc-final-actions">
                <Link href="/book-appointment" className="sfl-btn sfl-btn-primary">
                  Book Appointment
                </Link>
                <Link href="/contact" className="sfl-btn sfl-btn-secondary">
                  Call Sound for Life
                </Link>
              </div>
              <p className="sfl-small svc-final-microcopy">
                No pressure. Clear guidance. Audiologist-led support.
              </p>
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