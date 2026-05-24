// app/clinics/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hearing Clinic Near Me | Sound for Life Clinics",
  description:
    "Find a Sound for Life hearing clinic near you. Book a hearing test, meet an audiologist, request repair, or visit your nearest clinic.",
  alternates: {
    canonical: "/clinics",
  },
  openGraph: {
    title: "Find a Sound for Life Clinic Near You",
    description:
      "Looking for a nearby hearing clinic? Find your city, choose a clinic, book a hearing test, or request support from Sound for Life.",
    url: "/clinics",
    type: "website",
  },
};

type Block = {
  title: string;
  copy: string;
  cta?: string;
  href?: string;
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

const serviceItems: ServiceItem[] = [
  {
    title: "Hearing Test",
    subtitle:
      "Understand what is changing in your hearing before making any decision.",
    copy:
      "A hearing test helps you know whether you need monitoring, medical referral, hearing aid trial, or further support.",
    cta: "Book Hearing Test",
    href: "/book-hearing-test",
  },
  {
    title: "Hearing Aid Trial",
    subtitle: "Try suitable hearing aid options before you decide.",
    copy:
      "If you are looking for a hearing aid trial near me, your nearest clinic can guide you on suitable options and availability.",
    cta: "Explore Hearing Aid Trial",
    href: "/services/free-trial",
  },
  {
    title: "Hearing Aid Fitting",
    subtitle: "Get your hearing aid adjusted for comfort and clarity.",
    copy:
      "If you are searching for hearing aid fitting near me, clinic-based fitting support can help your device feel more natural.",
    cta: "Schedule Fitting Support",
    href: "/services/hearing-aid-fitting",
  },
  {
    title: "Hearing Aid Repair and Servicing",
    subtitle:
      "Get help when your hearing aid sounds weak, noisy, or uncomfortable.",
    copy:
      "If you need hearing aid repair near me, visit or contact your nearest Sound for Life clinic for service guidance.",
    cta: "Request a Service Visit",
    href: "/services/hearing-aid-repair-servicing",
  },
  {
    title: "Tinnitus Support",
    subtitle:
      "Get support for ringing, buzzing, or humming sounds in the ears.",
    copy:
      "The clinic can guide you on whether you need hearing evaluation, sound support, or referral.",
    cta: "Talk to an Expert",
    href: "/contact-us",
  },
  {
    title: "Pediatric Hearing Support",
    subtitle:
      "Get child-friendly support when your child is not responding clearly.",
    copy:
      "Parents can book a clinic visit if a child has failed a screening, shows speech delay concerns, or does not respond consistently.",
    cta: "Book Pediatric Hearing Support",
    href: "/services/hearing-care-for-children",
  },
  {
    title: "Aftercare Support",
    subtitle:
      "Get help after your hearing aid fitting, not just before purchase.",
    copy:
      "Aftercare can include follow-ups, sound adjustments, cleaning guidance, and comfort checks.",
    cta: "Get Aftercare Support",
    href: "/services/aftercare-support",
  },
  {
    title: "Device Setup and Guidance",
    subtitle: "Learn how to use your hearing aid confidently.",
    copy:
      "Clinic teams can help with wearing, removing, cleaning, charging, batteries, and phone connectivity.",
    cta: "Get Device Support",
    href: "/services/device-setup-guidance",
  },
];

const locationCards: Block[] = [
  {
    title: "Delhi NCR",
    copy:
      "Find clinic-based hearing care across Delhi NCR. If you are searching for a hearing clinic in Delhi, view available Sound for Life clinic locations and booking options.",
    cta: "View Clinics in Delhi NCR",
    href: "/clinics/delhi",
  },
  {
    title: "Noida",
    copy:
      "Find hearing care support near your area in Noida. If you need a hearing clinic in Noida, check clinic details, available services, and appointment support.",
    cta: "View Clinics in Noida",
    href: "/clinics/noida",
  },
  {
    title: "Ghaziabad",
    copy:
      "Access hearing tests, hearing aid support, and aftercare in Ghaziabad. If you are looking for a hearing clinic in Ghaziabad, start with the city clinic page.",
    cta: "View Clinics in Ghaziabad",
    href: "/clinics/ghaziabad",
  },
  {
    title: "Faridabad",
    copy:
      "Find a clinic for testing, fitting, repair, or hearing care support. If you are searching for a hearing clinic in Faridabad, view clinic options before visiting.",
    cta: "View Clinics in Faridabad",
    href: "/clinics/faridabad",
  },
  {
    title: "Gurugram",
    copy:
      "Get clinic-based hearing support in and around Gurugram. If you need a hearing clinic in Gurugram, select the city page to check available locations.",
    cta: "View Clinics in Gurugram",
    href: "/clinics/gurugram",
  },
  {
    title: "Mumbai",
    copy:
      "Find hearing care support in selected Mumbai locations. If you are searching for a hearing clinic in Mumbai, view city-specific clinics and appointment options.",
    cta: "View Clinics in Mumbai",
    href: "/clinics/mumbai",
  },
  {
    title: "Kolkata",
    copy:
      "Choose a clinic for hearing tests, hearing aid support, and follow-up care. If you need a hearing clinic in Kolkata, start with the Kolkata clinic page.",
    cta: "View Clinics in Kolkata",
    href: "/clinics/kolkata",
  },
  {
    title: "Chandigarh",
    copy:
      "Find clinic-based audiology support in Chandigarh. If you are looking for a hearing clinic in Chandigarh, view clinic details and available services.",
    cta: "View Clinics in Chandigarh",
    href: "/clinics/chandigarh",
  },
  {
    title: "Lucknow",
    copy:
      "Get hearing care guidance closer to home in Lucknow. If you are searching for a hearing clinic in Lucknow, check city clinic information before booking.",
    cta: "View Clinics in Lucknow",
    href: "/clinics/lucknow",
  },
  {
    title: "Kanpur",
    copy:
      "Find local hearing care support for tests, devices, and follow-ups. If you need a hearing clinic in Kanpur, view the city page for clinic support options.",
    cta: "View Clinics in Kanpur",
    href: "/clinics/kanpur",
  },
];

const choiceCards: Block[] = [
  {
    title: "If you need a hearing test",
    copy:
      "Choose a clinic that offers audiologist-led hearing assessment. Recommended action: Book Hearing Test.",
  },
  {
    title: "If you are booking for a parent",
    copy:
      "Choose a clinic that is easy for your parent to reach and comfortable for a first visit. Recommended action: Request Callback.",
  },
  {
    title: "If you already use hearing aids",
    copy:
      "Choose a clinic that can support cleaning, servicing, fitting review, or device guidance. Recommended action: Request a Service Visit.",
  },
  {
    title: "If your hearing aid stopped working",
    copy:
      "Choose a clinic that can guide you on repair or servicing options. Recommended action: Hearing Aid Repair and Servicing.",
  },
  {
    title: "If you need aftercare or adjustment",
    copy:
      "Choose a clinic where follow-up visits are convenient for you. Recommended action: Aftercare Support.",
  },
  {
    title: "If your child needs a hearing check",
    copy:
      "Choose a clinic that can guide you on pediatric hearing support or referral if needed. Recommended action: Pediatric Hearing Support.",
  },
  {
    title: "If you want to compare hearing aid options",
    copy:
      "Choose a clinic where you can speak to an audiologist before deciding. Recommended action: Hearing Aid Trial.",
  },
  {
    title: "If you need help with price or EMI",
    copy:
      "Choose a clinic where the team can explain device categories and payment support. Recommended action: Talk to an Expert.",
  },
];

const bookingSteps: Block[] = [
  {
    title: "Step 1: Select your city",
    copy: "Choose your city or nearest available clinic location.",
  },
  {
    title: "Step 2: Choose your nearest clinic",
    copy:
      "Review clinic details such as address, timings, phone number, and services available.",
  },
  {
    title: "Step 3: Share your details or call the clinic",
    copy:
      "You can fill the booking form, request a callback, or call the clinic directly.",
  },
  {
    title: "Step 4: Visit for assessment or service support",
    copy:
      "Visit the clinic for hearing assessment, device trial, fitting, repair, or aftercare based on your need.",
  },
];

const whyChooseCards: Block[] = [
  {
    title: "Audiologist-led support",
    copy:
      "You meet someone trained to understand hearing concerns, not just sell a device.",
  },
  {
    title: "Clinic-based testing",
    copy: "Your hearing concerns are checked through a structured clinic visit.",
  },
  {
    title: "No-pressure consultation",
    copy:
      "You get clear guidance before making a decision about hearing aids or service.",
  },
  {
    title: "Hearing aid trial and fitting support",
    copy:
      "You can understand suitable options and receive fitting support based on your hearing report.",
  },
  {
    title: "Repair and aftercare access",
    copy:
      "You can return for servicing, sound adjustments, cleaning guidance, and comfort support.",
  },
  {
    title: "Multiple hearing aid brands",
    copy:
      "You can compare suitable choices across available brands instead of depending on only one option.",
  },
  {
    title: "Local follow-up convenience",
    copy:
      "Follow-up becomes easier when your clinic is close to home or work.",
  },
  {
    title: "Family-friendly clinic experience",
    copy:
      "You can bring a parent, spouse, child, or family member for support during the visit.",
  },
];

const timingCards: Block[] = [
  {
    title: "Conversations feel unclear",
    copy:
      "If words sound incomplete or muffled, a hearing test can help explain why.",
  },
  {
    title: "TV volume keeps increasing",
    copy:
      "If others feel the volume is too loud, your hearing may need checking.",
  },
  {
    title: "A parent is withdrawing from family conversations",
    copy:
      "Many families notice hearing difficulty before the parent accepts it.",
  },
  {
    title: "You hear ringing or buzzing in your ears",
    copy:
      "Ringing, buzzing, or humming may need tinnitus support or hearing evaluation.",
  },
  {
    title: "Your hearing aid is weak, noisy, or uncomfortable",
    copy:
      "Your device may need cleaning, fitting review, service, or adjustment.",
  },
  {
    title: "Your hearing aid needs cleaning or servicing",
    copy:
      "A clinic visit can help you understand whether the device needs basic care or repair guidance.",
  },
  {
    title: "Your child is not responding clearly",
    copy:
      "If your child does not respond consistently, book a hearing check or ask for pediatric support.",
  },
  {
    title: "You want to compare hearing aids before buying",
    copy:
      "A clinic visit helps you compare devices after understanding your hearing report.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How do I find a hearing clinic near me?",
    answer:
      "Search by city, area, or nearby location on the Sound for Life clinic page. If you are looking for a hearing clinic near me, choose your nearest clinic and book, call, or request a callback.",
  },
  {
    question: "Can I book a hearing test at my nearest clinic?",
    answer:
      "Yes, you can book a hearing test at your nearest Sound for Life clinic. If you are searching for a hearing test near me, select your city and choose the clinic most convenient for you.",
  },
  {
    question: "Do Sound for Life clinics offer hearing aid trials?",
    answer:
      "Selected clinics may guide you on hearing aid trial options after your hearing test. If you are searching for hearing aid trial near me, check your nearest clinic page or request a callback.",
  },
  {
    question: "Can I visit a clinic for hearing aid repair?",
    answer:
      "Yes, you can contact your nearest clinic for device support or service guidance. If you need hearing aid repair near me, book a service request or call the clinic before visiting.",
  },
  {
    question: "Do I need an appointment before visiting a Sound for Life clinic?",
    answer:
      "An appointment is recommended so the clinic team can confirm availability and reduce waiting time. You may still call the clinic if you need same-day guidance.",
  },
  {
    question: "Can I book a clinic visit for my parent?",
    answer:
      "Yes, many people book clinic visits for a parent or family member. Choose the nearest clinic, share their details, and our team can help schedule the visit.",
  },
  {
    question: "How do I know which Sound for Life clinic to choose?",
    answer:
      "Choose a clinic based on location, service need, and follow-up convenience. If you are unsure, request a callback and the team can help you select the right clinic.",
  },
];

function ServiceGrid({ items }: { items: ServiceItem[] }) {
  return (
    <div className="cl-grid cl-grid-services">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`cl-card cl-card-accent-${(index % 3) + 1}`}
        >
          <div className="cl-card-media" />
          <div className="cl-card-body">
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <p>{item.copy}</p>
            <a className="cl-link" href={item.href}>
              {item.cta} →
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

function CardGrid({ items }: { items: Block[] }) {
  return (
    <div className="cl-grid cl-grid-generic">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`cl-card cl-card-accent-${(index % 3) + 1}`}
        >
          <div className="cl-card-media" />
          <div className="cl-card-body">
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
            {item.cta && item.href ? (
              <a className="cl-link" href={item.href}>
                {item.cta} →
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

function FAQGrid() {
  return (
    <div className="cl-faq-grid">
      {faqs.map((faq) => (
        <article key={faq.question} className="cl-faq-card">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </article>
      ))}
    </div>
  );
}

export default function ClinicsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Clinics", item: "/clinics" },
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
    "@type": "WebPage",
    name: "Hearing Clinic Near Me | Sound for Life Clinics",
    url: "/clinics",
    description:
      "Find a Sound for Life hearing clinic near you. Book a hearing test, meet an audiologist, request repair, or visit your nearest clinic.",
  };

  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Sound for Life Clinics",
    url: "/clinics",
    description:
      "Sound for Life clinic locator for hearing tests, hearing aids, fittings, repairs, and aftercare support.",
    medicalSpecialty: "Audiology",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sound for Life",
    url: "/clinics",
    description:
      "Find a nearby Sound for Life hearing clinic for testing, hearing aid support, repairs, and follow-up care.",
    areaServed: [
      "Delhi NCR",
      "Noida",
      "Ghaziabad",
      "Faridabad",
      "Gurugram",
      "Mumbai",
      "Kolkata",
      "Chandigarh",
      "Lucknow",
      "Kanpur",
    ],
  };

  return (
    <>
      <style>{`
        :root {
          --cl-navy: #0d3b7d;
          --cl-blue: #0a5cae;
          --cl-blue-soft: #edf6ff;
          --cl-orange: #f4831f;
          --cl-white: #ffffff;
          --cl-text: #223548;
          --cl-text-soft: #5f7083;
          --cl-line: rgba(13, 59, 125, 0.1);
          --cl-shadow: 0 18px 40px rgba(13, 59, 125, 0.08);
          --cl-shadow-lg: 0 28px 70px rgba(13, 59, 125, 0.14);
        }

        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; overflow-x: hidden; }

        body {
          font-family: Arial, sans-serif;
          color: var(--cl-text);
          background: #f7fafc;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .cl-page {
          min-height: 100vh;
          padding-top: 126px;
          background:
            radial-gradient(circle at top left, rgba(232, 244, 253, 0.7), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #f7fafc 100%);
        }

        .cl-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .cl-breadcrumb-wrap {
          background: rgba(255,255,255,0.92);
          border-bottom: 1px solid var(--cl-line);
        }

        .cl-breadcrumb {
          min-height: 52px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--cl-text-soft);
          font-size: 14px;
          font-weight: 700;
        }

        .cl-breadcrumb-sep { opacity: 0.4; }

        .cl-hero-visual-section {
          background: #ffffff;
        }

        .cl-hero-visual {
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

        .cl-hero-intro-section {
          padding: 54px 0 34px;
          background: #ffffff;
        }

        .cl-hero-intro {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
        }

        .cl-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: var(--cl-navy);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .cl-kicker::before {
          content: "";
          width: 24px;
          height: 2px;
          background: rgba(13,59,125,0.34);
        }

        .cl-title {
          margin: 0;
          color: var(--cl-navy);
          font-size: 60px;
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .cl-subtitle {
          margin: 20px auto 0;
          max-width: 980px;
          color: var(--cl-text);
          font-size: 18px;
          line-height: 1.85;
        }

        .cl-subtitle-soft {
          color: var(--cl-text-soft);
        }

        .cl-hero-actions {
          margin-top: 28px;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cl-btn {
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

        .cl-btn:hover {
          transform: translateY(-2px);
        }

        .cl-btn-primary {
          background: linear-gradient(180deg, #f89a3f 0%, var(--cl-orange) 100%);
          color: var(--cl-white);
          box-shadow: 0 14px 28px rgba(244,131,31,0.24);
        }

        .cl-btn-secondary {
          background: #ffffff;
          color: var(--cl-navy);
          border: 1px solid rgba(13,59,125,0.14);
          box-shadow: 0 10px 20px rgba(13,59,125,0.05);
        }

        .cl-signal-strip-wrap {
          padding: 0 0 18px;
          background: #ffffff;
        }

        .cl-signal-strip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          padding: 10px;
          border-radius: 18px;
          background: rgba(255,255,255,0.98);
          border: 1px solid var(--cl-line);
          box-shadow: var(--cl-shadow);
        }

        .cl-signal-pill {
          min-height: 46px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          border-radius: 12px;
          background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
          border: 1px solid rgba(13,59,125,0.08);
          color: var(--cl-navy);
          font-size: 12px;
          font-weight: 800;
          line-height: 1.35;
        }

        .cl-signal-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          flex-shrink: 0;
          background: linear-gradient(180deg, var(--cl-blue), var(--cl-orange));
        }

        .cl-main {
          padding: 20px 0 56px;
        }

        .cl-section-block {
          padding: 58px 0;
        }

        .cl-section-block-tight {
          padding: 42px 0;
        }

        .cl-section-block-white {
          background: transparent;
        }

        .cl-section-block-blue {
          background: linear-gradient(180deg, var(--cl-blue-soft) 0%, rgba(255,255,255,0.82) 100%);
        }

        .cl-center-intro {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
        }

        .cl-center-kicker {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: var(--cl-orange);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .cl-center-kicker::before {
          content: "";
          width: 20px;
          height: 2px;
          background: rgba(244,131,31,0.45);
        }

        .cl-center-intro h2 {
          margin: 0;
          color: var(--cl-navy);
          font-size: 52px;
          line-height: 1.06;
          letter-spacing: -0.04em;
        }

        .cl-center-intro p {
          margin: 16px auto 0;
          max-width: 950px;
          color: var(--cl-text-soft);
          font-size: 18px;
          line-height: 1.8;
        }

        .cl-section-title {
          max-width: 1020px;
          margin: 0 auto 18px;
          text-align: center;
        }

        .cl-section-title h2 {
          margin: 0;
          color: var(--cl-orange);
          font-size: 42px;
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .cl-section-title p {
          margin: 14px auto 0;
          max-width: 960px;
          color: var(--cl-text);
          font-size: 18px;
          line-height: 1.76;
        }

        .cl-grid {
          display: grid;
          gap: 18px;
        }

        .cl-grid-services {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .cl-grid-generic {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .cl-faq-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          align-items: stretch;
        }

        .cl-card,
        .cl-faq-card {
          overflow: hidden;
          border-radius: 18px;
          background: #ffffff;
          border: 1px solid var(--cl-line);
          box-shadow: 0 10px 22px rgba(13,59,125,0.06);
        }

        .cl-card {
          height: 100%;
        }

        .cl-faq-card {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          min-height: 210px;
          padding: 22px;
        }

        .cl-card-media {
          height: 180px;
          background-size: cover;
          background-position: center;
        }

        .cl-card-accent-1 .cl-card-media {
          background:
            radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #2f6fa3 0%, #8fc1eb 100%);
        }

        .cl-card-accent-2 .cl-card-media {
          background:
            radial-gradient(circle at 70% 35%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #db8f8f 0%, #f1c1c1 100%);
        }

        .cl-card-accent-3 .cl-card-media {
          background:
            radial-gradient(circle at 60% 40%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #f36f55 0%, #ffb063 100%);
        }

        .cl-card-body {
          padding: 18px 18px 20px;
        }

        .cl-card-body h3 {
          margin: 0;
          color: var(--cl-text);
          font-size: 16px;
          line-height: 1.35;
          letter-spacing: -0.02em;
        }

        .cl-card-body h4 {
          margin: 10px 0 0;
          color: var(--cl-navy);
          font-size: 15px;
          line-height: 1.55;
          font-weight: 800;
        }

        .cl-card-body p {
          margin: 10px 0 0;
          color: var(--cl-text-soft);
          font-size: 16px;
          line-height: 1.72;
        }

        .cl-faq-card h3 {
          margin: 0 0 18px;
          color: var(--cl-text);
          font-size: 18px;
          line-height: 1.45;
          letter-spacing: -0.02em;
          font-weight: 800;
        }

        .cl-faq-card p {
          margin: 0;
          color: var(--cl-text-soft);
          font-size: 16px;
          line-height: 1.72;
        }

        .cl-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 16px;
          color: var(--cl-blue);
          font-size: 14px;
          font-weight: 800;
        }

        .cl-cta-band {
          padding: 24px;
          border-radius: 22px;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.1), transparent 24%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          color: var(--cl-white);
          text-align: center;
          box-shadow: var(--cl-shadow-lg);
        }

        .cl-cta-band h2 {
          margin: 0;
          color: var(--cl-white);
          font-size: 32px;
          line-height: 1.08;
          letter-spacing: -0.03em;
        }

        .cl-cta-band p {
          margin: 10px auto 0;
          max-width: 820px;
          color: rgba(255,255,255,0.92);
          font-size: 15px;
          line-height: 1.72;
        }

        .cl-cta-band-actions {
          margin-top: 16px;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 1100px) {
          .cl-grid-services,
          .cl-grid-generic,
          .cl-faq-grid {
            grid-template-columns: 1fr 1fr;
          }

          .cl-title {
            font-size: 48px;
          }

          .cl-center-intro h2 {
            font-size: 42px;
          }

          .cl-section-title h2 {
            font-size: 34px;
          }
        }

        @media (max-width: 767px) {
          .cl-page {
            padding-top: 126px;
          }

          .cl-container {
            padding: 0 16px;
          }

          .cl-hero-visual {
            height: 240px;
          }

          .cl-hero-intro-section {
            padding: 34px 0 24px;
          }

          .cl-signal-strip,
          .cl-grid-services,
          .cl-grid-generic,
          .cl-faq-grid {
            grid-template-columns: 1fr;
          }

          .cl-title {
            font-size: 34px;
            line-height: 1.04;
          }

          .cl-center-intro h2,
          .cl-section-title h2,
          .cl-cta-band h2 {
            font-size: 28px;
          }

          .cl-center-intro p,
          .cl-section-title p,
          .cl-subtitle {
            font-size: 15px;
          }

          .cl-hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .cl-card-media {
            height: 150px;
          }

          .cl-section-block {
            padding: 38px 0;
          }

          .cl-section-block-tight {
            padding: 28px 0;
          }

          .cl-faq-card {
            min-height: unset;
            padding: 18px;
          }

          .cl-faq-card h3 {
            margin: 0 0 14px;
            font-size: 17px;
          }

          .cl-faq-card p {
            font-size: 15px;
          }
        }
      `}</style>

      <main className="cl-page">
        <div className="cl-breadcrumb-wrap">
          <div className="cl-container">
            <nav className="cl-breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span className="cl-breadcrumb-sep">/</span>
              <span aria-current="page">Clinics</span>
            </nav>
          </div>
        </div>

        <section className="cl-hero-visual-section">
          <div className="cl-hero-visual" />
        </section>

        <section className="cl-hero-intro-section">
          <div className="cl-container">
            <div className="cl-hero-intro">
              <div className="cl-kicker">Clinic Locator Hub</div>
              <h1 className="cl-title">
                Find a Hearing Clinic Near Me with Sound for Life
              </h1>

              <p className="cl-subtitle">
                Looking for the right clinic should not feel confusing. At Sound
                for Life, you can find your nearest clinic for hearing tests,
                hearing aids, fittings, repairs, and aftercare support.
              </p>

              <p className="cl-subtitle cl-subtitle-soft">
                Choose your city, check available services, and book the next
                step that fits your need.
              </p>

              <div className="cl-hero-actions">
                <a className="cl-btn cl-btn-primary" href="#clinic-locations">
                  Find a Clinic Near You
                </a>
                <a className="cl-btn cl-btn-secondary" href="/book-hearing-test">
                  Book Your Hearing Test Appointment
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="cl-signal-strip-wrap">
          <div className="cl-container">
            <div className="cl-signal-strip">
              <div className="cl-signal-pill">
                <span className="cl-signal-dot" />
                <span>Hearing clinic near me</span>
              </div>
              <div className="cl-signal-pill">
                <span className="cl-signal-dot" />
                <span>Hearing test near me</span>
              </div>
              <div className="cl-signal-pill">
                <span className="cl-signal-dot" />
                <span>Audiologist near me</span>
              </div>
              <div className="cl-signal-pill">
                <span className="cl-signal-dot" />
                <span>Hearing aid service centre near me</span>
              </div>
            </div>
          </div>
        </section>

        <div className="cl-main">
          <section className="cl-section-block cl-section-block-white">
            <div className="cl-container">
              <div className="cl-center-intro">
                <div className="cl-center-kicker">Find the Right Clinic Near You</div>
                <h2>Find the Right Sound for Life Clinic Near You</h2>
                <p>
                  You may be searching for a clinic because conversations feel
                  unclear. You may need a hearing test near me for yourself or a
                  parent. You may want an audiologist near me before deciding on
                  hearing aids. You may already use hearing aids and need support
                  from a hearing aid service centre near me.
                </p>
                <p>
                  Use the clinic finder to select your city or nearby area. You
                  can then view available clinic details, call support, or move
                  toward booking. Some visitors are ready to visit. Others need
                  help choosing the right clinic. You can book a hearing test,
                  call the clinic, or request a callback. Each clinic page should
                  help you understand available services, address, timings, call
                  options, and appointment support.
                </p>
              </div>
            </div>
          </section>

          <section className="cl-section-block cl-section-block-white">
            <div className="cl-container">
              <div className="cl-section-title">
                <h2>What You Can Do at a Sound for Life Clinic</h2>
                <p>
                  Choose the service that fits your need now, then move toward
                  booking, calling, or clinic support.
                </p>
              </div>

              <ServiceGrid items={serviceItems} />
            </div>
          </section>

          <section
            className="cl-section-block cl-section-block-blue"
            id="clinic-locations"
          >
            <div className="cl-container">
              <div className="cl-section-title">
                <h2>Popular Sound for Life Clinic Locations</h2>
                <p>
                  Use this section to move quickly from near-me searches to
                  city-specific clinic pages.
                </p>
              </div>

              <CardGrid items={locationCards} />
            </div>
          </section>

          <section className="cl-section-block cl-section-block-white">
            <div className="cl-container">
              <div className="cl-section-title">
                <h2>Which Sound for Life Clinic Should You Choose?</h2>
                <p>
                  Choose the clinic based on what you need today, not only the
                  nearest location.
                </p>
              </div>

              <CardGrid items={choiceCards} />
            </div>
          </section>

          <section className="cl-section-block cl-section-block-blue">
            <div className="cl-container">
              <div className="cl-section-title">
                <h2>How Clinic Booking Works</h2>
                <p>
                  Select your city, choose the clinic, share your details or
                  call, and visit for the right support.
                </p>
              </div>

              <CardGrid items={bookingSteps} />
            </div>
          </section>

          <section className="cl-section-block cl-section-block-white">
            <div className="cl-container">
              <div className="cl-section-title">
                <h2>Why Choose a Sound for Life Clinic?</h2>
                <p>
                  You get hearing care that starts with understanding your
                  concern and continues with fitting, repairs, and follow-up
                  support.
                </p>
              </div>

              <CardGrid items={whyChooseCards} />
            </div>
          </section>

          <section className="cl-section-block cl-section-block-blue">
            <div className="cl-container">
              <div className="cl-section-title">
                <h2>When Should You Visit a Hearing Clinic?</h2>
                <p>
                  Visit when hearing difficulty, tinnitus, device issues, or
                  family concern starts affecting daily life.
                </p>
              </div>

              <CardGrid items={timingCards} />
            </div>
          </section>

          <section className="cl-section-block-tight">
            <div className="cl-container">
              <div className="cl-cta-band">
                <h2>Find the Clinic That Fits Your Need</h2>
                <p>
                  Whether you need a hearing test, device support, tinnitus
                  guidance, or help for a parent, start by choosing your nearest
                  Sound for Life clinic.
                </p>
                <div className="cl-cta-band-actions">
                  <a className="cl-btn cl-btn-primary" href="/clinics">
                    Find a Clinic Near You
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="cl-section-block cl-section-block-white">
            <div className="cl-container">
              <div className="cl-center-intro">
                <div className="cl-center-kicker">Frequently Asked Questions</div>
                <h2>Common Questions About Sound for Life Clinics</h2>
                <p>
                  Clear answers to help you choose a clinic, book a hearing
                  test, or request support near you.
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </main>
    </>
  );
}