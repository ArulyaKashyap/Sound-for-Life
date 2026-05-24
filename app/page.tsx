// app/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import HeroSection from "../components/home/sections/HeroSection";
import TrustStrip from "../components/home/sections/TrustStrip";
import JourneySection from "../components/home/sections/JourneySection";
import HowItWorksSection from "../components/home/sections/HowItWorksSection";
import ClinicsSection from "../components/home/sections/ClinicsSection";
import BrandsSection from "../components/home/sections/BrandsSection";
import ReviewsSection from "../components/home/sections/ReviewsSection";
import FAQSection from "../components/home/sections/FAQSection";
import Footer from "@/components/Footer";
type JourneyCard = {
  title: string;
  subtitle: string;
  copy: string;
  cta: string;
  href: string;
};

type Step = {
  title: string;
  copy: string;
};

type Brand = {
  name: string;
  models: string;
};

type Story = {
  label: string;
  title: string;
  copy: string;
  outcome: string;
  cta: string;
  href: string;
};

type Blog = {
  label: string;
  title: string;
  copy: string;
  href: string;
};

type Clinic = {
  city: string;
  locality: string;
  address: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const journeyCards: JourneyCard[] = [
  {
    title: "Hearing Loss",
    subtitle: "Understand common hearing problems and what to do next.",
    copy:
      "When hearing feels unclear, start with a hearing test. A certified audiologist will help you understand what is happening and what to do next.",
    cta: "Check Hearing Loss Signs →",
    href: "/hearing-loss",
  },
  {
    title: "Hearing Aids",
    subtitle: "Explore types, brands, comparisons, and first-time guidance.",
    copy:
      "Compare hearing aid options across comfort, style, features, and suitability with audiologist-led support before you decide.",
    cta: "Explore Hearing Aids →",
    href: "/hearing-aids",
  },
  {
    title: "Services",
    subtitle: "Book tests, fitting, repair, and aftercare support.",
    copy:
      "Whether you need a hearing test, device support, or guidance after fitting, we help you reach the right service quickly.",
    cta: "View Our Services →",
    href: "/services",
  },
  {
    title: "Clinics",
    subtitle: "Find expert hearing care near your home, office, or family.",
    copy:
      "Search clinics by city and locality if you are looking for a hearing clinic near me, hearing aid centre near me, or audiologist support close by.",
    cta: "Find My Nearest Clinic →",
    href: "/clinics",
  },
  {
    title: "Stories & Education",
    subtitle: "Read stories, testimonials, blogs, FAQs, and hearing resources.",
    copy:
      "Explore practical education, patient journeys, clinic stories, and FAQs designed to make hearing care feel clearer and less intimidating.",
    cta: "Explore Stories & Education →",
    href: "/stories",
  },
  {
    title: "About Us",
    subtitle: "Learn how Sound for Life approaches hearing care in India.",
    copy:
      "Understand our audiologist-led model, multi-brand support, hearing care process, helpful guides, and long-term aftercare philosophy.",
    cta: "Learn About SFL →",
    href: "/about",
  },
];

const steps: Step[] = [
  {
    title: "Book a Hearing Test",
    copy:
      "Call, walk in, or fill the form online. We help you choose the nearest clinic.",
  },
  {
    title: "Meet Your Audiologist",
    copy:
      "A certified audiologist checks your hearing and explains the results in simple language.",
  },
  {
    title: "Know Your Next Step",
    copy:
      "You may need monitoring, medical referral, a hearing aid trial, or aftercare support. We guide you without pressure.",
  },
];

const brands: Brand[] = [
  { name: "Signia", models: "Silk, Pure, Motion, Insio" },
  { name: "Phonak", models: "Audeo, Virto, Naida, Paradise" },
  { name: "ReSound", models: "Nexia, Omnia, Key, Enzo, Magna" },
  { name: "Unitron", models: "Moxi, Insera, Stride, Vivante" },
  { name: "Sonic", models: "Radiant, Enchant, Cheer, Journey" },
  { name: "A&M", models: "XTM, XTM P, XTM M, BTE Range" },
];

const whyChoose = [
  {
    title: "You meet an audiologist before you meet a device",
    copy:
      "We begin with your hearing, lifestyle, and comfort — not a product catalogue.",
  },
  {
    title: "You get clarity before cost",
    copy:
      "Understand your results, options, and possible pricing routes before making a decision.",
  },
  {
    title: "You can try before you commit",
    copy:
      "Experience suitable hearing aid devices in real life, with fitting support and guidance.",
  },
  {
    title: "You are supported after the fitting",
    copy:
      "Follow-up care, adjustment support, and servicing help you stay comfortable with your device.",
  },
];

const stories: Story[] = [
  {
    label: "Company Growth",
    title: "From hearing aid support to a growing hearing care network",
    copy:
      "Sound for Life is expanding beyond product-led care into a clinic-based hearing care model built around assessment, guidance, fitting, and aftercare.",
    outcome:
      "A growing network designed to make expert hearing care easier to access across India.",
    cta: "Explore Our Journey →",
    href: "/stories/company-growth",
  },
  {
    label: "People at SFL",
    title: "Building careers in hearing care, not just clinic roles",
    copy:
      "Audiologists, clinic teams, and support staff grow through patient interaction, service training, and hands-on care experience.",
    outcome: "Stronger teams create better patient experiences.",
    cta: "Meet Our Team →",
    href: "/stories/employee-growth",
  },
  {
    label: "Clinic Story",
    title:
      "How one local clinic became a trusted hearing care point for nearby families",
    copy:
      "Every Sound for Life clinic builds trust by guiding first-time visitors, supporting ongoing users, and staying involved after the first fitting.",
    outcome:
      "Local clinics make hearing care personal, accessible, and easier to continue.",
    cta: "Find a Clinic Near You →",
    href: "/clinics",
  },
];

const blogs: Blog[] = [
  {
    label: "Guide · 4 min read",
    title: "5 Signs You May Have Hearing Loss",
    copy:
      "A simple guide for people unsure whether missed words, muffled speech, or higher TV volume are early signs.",
    href: "/blogs/5-signs-you-may-have-hearing-loss",
  },
  {
    label: "Guide · 5 min read",
    title:
      "What Is the Difference Between Conductive Hearing Loss and Sensorineural Hearing Loss?",
    copy:
      "Understand common types of hearing loss and why a proper assessment matters before choosing treatment or devices.",
    href: "/blogs/conductive-hearing-loss-vs-sensorineural-hearing-loss",
  },
];

const clinics: Clinic[] = [
  {
    city: "Delhi",
    locality: "Greater Kailash",
    address:
      "M-2, Main Road, LGF, Greater Kailash Part-1, Near SCI Hospital, New Delhi-110048",
  },
  {
    city: "Delhi",
    locality: "Janakpuri",
    address:
      "B-50, New Krishna Park, Dhauli Pyau Red Light Crossing, Service Lane, Near Raymond, Janakpuri, New Delhi-110018",
  },
  {
    city: "Delhi",
    locality: "Mayur Vihar",
    address:
      "Shop No. 4, Pocket 1, DDA Market, Near the BSES Office, Mayur Vihar Phase 1, New Delhi - 110091",
  },
  {
    city: "Noida",
    locality: "Sector 22",
    address: "H-15, Sector-22, Noida-201301",
  },
  {
    city: "Noida",
    locality: "Sector 3",
    address:
      "2nd Floor, G 43, Block G, Noida Sector 3, Noida, Uttar Pradesh 201301",
  },
  {
    city: "Gurugram",
    locality: "M.G. Road",
    address:
      "S-056, Sahara Mall, Ground Floor, Near MG Road Metro Station, Gurgaon, Haryana-122001",
  },
  {
    city: "Faridabad",
    locality: "Sector 16",
    address:
      "Booth No. 110, Main Market, Sector 16, Near ICICI Bank, Faridabad, Haryana-121007",
  },
  {
    city: "Lucknow",
    locality: "Gomti Nagar",
    address:
      "Sahara Plaza, Gate No. 3, Shop No. D-218, Patrakarpuram Chauraha, Gomti Nagar, Lucknow, UP-226010",
  },
  {
    city: "Mumbai",
    locality: "Andheri",
    address:
      "D10/E6, Minoo Minar CHS, Veera Desai Road, Next to Courtyard Restaurant, Andheri West, Mumbai, Maharashtra-400053",
  },
  {
    city: "Bengaluru",
    locality: "Jayanagar",
    address:
      "House No. 93, 7th Main Road, 30th Cross, Jayanagar 4th Block, Opposite Maiyas Restaurant, Bengaluru-560011",
  },
];

const faqs: FAQ[] = [
  {
    question: "Is the hearing test free?",
    answer:
      "Please contact the clinic team for the latest appointment and pricing details before booking.",
  },
  {
    question: "How long does a hearing test take?",
    answer:
      "A basic hearing test usually takes around 30 to 45 minutes, including discussion, screening, and a simple explanation of the result.",
  },
  {
    question: "Do I definitely need a hearing aid?",
    answer:
      "Not always. The first goal is to understand the problem properly. If a hearing aid is needed, the audiologist will explain suitable options clearly.",
  },
  {
    question: "Can I book a test for my parents or family members?",
    answer:
      "Yes. Many people book a hearing test for a parent or loved one, and our team helps schedule the visit with the right clinic.",
  },
  {
    question: "How much do hearing aids cost in India?",
    answer:
      "Pricing varies based on brand, style, technology level, and features. We first understand hearing needs and then help compare suitable options.",
  },
];

const notifications = [
  "Ramesh K. from Noida booked a Hearing Test — 4 minutes ago",
  "Sunita A. from Delhi purchased a Signia Hearing Aid this month",
  "Priya S. from Gurugram booked a Hearing Test — just now",
  "Vikram M. from Lucknow tried a Phonak device — 12 minutes ago",
  "Meena I. from Bengaluru completed her audiologist visit — 18 minutes ago",
  "Suresh N. from Mumbai purchased a ReSound hearing aid this week",
];

const trustItems = [
  "Clinics Across India",
  "Certified Audiologists",
  "Multi-Brand Hearing Aids",
  "Trial Before Purchase",
  "Aftercare Support",
];

const cityPills = [
  "Delhi",
  "Noida",
  "Gurugram",
  "Faridabad",
  "Lucknow",
  "Mumbai",
  "Bengaluru",
  "More",
];

function getBrandTone(name: string) {
  const tones: Record<
    string,
    { accent: string; soft: string; mark: string; note: string; href: string }
  > = {
    Signia: {
      accent: "#7B61FF",
      soft: "linear-gradient(180deg, #f6f1ff 0%, #ffffff 100%)",
      mark: "SG",
      note: "Known for sleek form factors and refined everyday listening comfort.",
      href: "/hearing-aids/brands/signia",
    },
    Phonak: {
      accent: "#00A6A6",
      soft: "linear-gradient(180deg, #edfdfb 0%, #ffffff 100%)",
      mark: "PH",
      note: "Popular for versatility, speech clarity, and strong performance across lifestyles.",
      href: "/hearing-aids/brands/phonak",
    },
    ReSound: {
      accent: "#E94E77",
      soft: "linear-gradient(180deg, #fff1f5 0%, #ffffff 100%)",
      mark: "RS",
      note: "Often preferred for connected hearing experiences and modern technology support.",
      href: "/hearing-aids/brands/resound",
    },
    Unitron: {
      accent: "#F59E0B",
      soft: "linear-gradient(180deg, #fff8e8 0%, #ffffff 100%)",
      mark: "UN",
      note: "A practical choice for flexible fitting support and day-to-day usability.",
      href: "/hearing-aids/brands/unitron",
    },
    Sonic: {
      accent: "#2563EB",
      soft: "linear-gradient(180deg, #eef4ff 0%, #ffffff 100%)",
      mark: "SO",
      note: "Designed around comfort-focused hearing support and easier adaptation.",
      href: "/hearing-aids/brands/sonic",
    },
    "A&M": {
      accent: "#0F766E",
      soft: "linear-gradient(180deg, #ecfdfa 0%, #ffffff 100%)",
      mark: "AM",
      note: "A straightforward option for dependable hearing support and essential features.",
      href: "/hearing-aids/brands/am",
    },
  };

  return (
    tones[name] ?? {
      accent: "#0A5CAE",
      soft: "linear-gradient(180deg, #eef7fd 0%, #ffffff 100%)",
      mark: name.slice(0, 2).toUpperCase(),
      note: "Audiologist-guided comparisons available based on hearing profile and daily use.",
      href: "/hearing-aids/brands",
    }
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState(notifications[0]);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [cityFilter, setCityFilter] = useState("Delhi");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    clinic: "",
  });

  const visibleClinics = useMemo(() => {
    if (cityFilter === "More") return clinics;
    return clinics.filter((clinic) => clinic.city === cityFilter).slice(0, 9);
  }, [cityFilter]);

  useEffect(() => {
    let showTimeout: ReturnType<typeof setTimeout>;
    let hideTimeout: ReturnType<typeof setTimeout>;
    let cycleTimeout: ReturnType<typeof setTimeout>;

    const showNextToast = () => {
      const next = notifications[Math.floor(Math.random() * notifications.length)];
      setToastMessage(next);
      setToastVisible(true);

      hideTimeout = setTimeout(() => {
        setToastVisible(false);
      }, 6000);

      cycleTimeout = setTimeout(showNextToast, 24000);
    };

    showTimeout = setTimeout(showNextToast, 7000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearTimeout(cycleTimeout);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 320);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Hearing consultation request:", form);
  }

  return (
    <>
      <style>{`
        :root {
          --navy: #0D3B7D;
          --blue: #0A5CAE;
          --blue-2: #1267b9;
          --blue-tint: #E8F4FD;
          --orange: #F4831F;
          --orange-deep: #df7417;
          --amber: #FFCA28;
          --white: #FFFFFF;
          --grey-light: #F6F8FB;
          --grey-soft: #edf3f9;
          --black: #222222;
          --text: #263445;
          --text-soft: #5d6d80;
          --line: rgba(13,59,125,0.10);
          --line-soft: rgba(13,59,125,0.06);
          --shadow-soft: 0 16px 40px rgba(13,59,125,0.08);
          --shadow-card: 0 18px 42px rgba(13,59,125,0.10);
          --shadow-premium: 0 30px 80px rgba(13,59,125,0.16);
          --radius-xl: 30px;
          --radius-lg: 24px;
          --radius-md: 18px;
          --radius-sm: 14px;
          --section-space: 104px;
        }

        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; overflow-x: hidden; scroll-behavior: smooth; }
        body {
          background:
            radial-gradient(circle at top left, rgba(232,244,253,0.42), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          color: var(--text);
          font-family: Arial, sans-serif;
        }

        
}

        a { color: inherit; text-decoration: none; }
        button, input, select { font: inherit; }
        button { border: none; background: transparent; }

        .container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .home-main {
  padding-top: 126px;
}

        .section {
          position: relative;
          padding: var(--section-space) 0;
        }

        .section-separator-top {
          position: absolute;
          left: 0;
          right: 0;
          top: -1px;
          height: 88px;
          pointer-events: none;
          background:
            linear-gradient(to bottom, rgba(232,244,253,0.28), rgba(232,244,253,0)),
            radial-gradient(85% 64% at 50% 0%, rgba(13,59,125,0.05), rgba(13,59,125,0));
        }

        .fade-up {
          animation: fadeUp 700ms ease both;
        }

        .fade-up.delay-1 { animation-delay: 80ms; }
        .fade-up.delay-2 { animation-delay: 140ms; }
        .fade-up.delay-3 { animation-delay: 220ms; }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-header-shell {
          position: relative;
          margin-bottom: 18px;
        }

        .section-header-shell::after {
          content: "";
          display: block;
          width: 96px;
          height: 4px;
          margin-top: 18px;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--orange), rgba(244,131,31,0.12));
        }

        .section-title {
          margin: 0;
          color: var(--navy);
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .section-soft-panel {
          margin-top: 20px;
          padding: 22px 24px;
          max-width: 940px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(246,250,254,0.94));
          border: 1px solid var(--line-soft);
          box-shadow: 0 12px 30px rgba(13,59,125,0.05);
        }

        .section-intro {
          margin: 0;
          max-width: 900px;
          color: var(--text-soft);
          font-size: 17px;
          line-height: 1.92;
        }

        .topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1100;
  background: linear-gradient(90deg, var(--navy), #0b4f9f);
  color: var(--white);
  border-bottom: 1px solid rgba(255,255,255,0.10);
}

.topbar-inner {
  min-height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  padding: 8px 0;
  font-size: 12px;
}

.topbar-cta {
  padding: 9px 14px;
  border-radius: 999px;
  background: var(--orange);
  color: var(--white);
  font-weight: 800;
  box-shadow: 0 12px 24px rgba(244,131,31,0.22);
}

body > header.sfl-header-wrap {
  top: 44px;
  z-index: 1090;
}

.home-main {
  padding-top: 126px;
}

@media (max-width: 767px) {
  .topbar-inner {
    min-height: 52px;
    padding: 10px 0;
  }

  body > header.sfl-header-wrap {
    top: 52px;
  }

  .home-main {
    padding-top: 126px;
  }
}

        .topbar-inner {
          min-height: 44px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          padding: 8px 0;
          font-size: 12px;
        }

        .topbar-cta {
          padding: 9px 14px;
          border-radius: 999px;
          background: var(--orange);
          color: var(--white);
          font-weight: 800;
          box-shadow: 0 12px 24px rgba(244,131,31,0.22);
          transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease;
        }

        .topbar-cta:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 18px 28px rgba(244,131,31,0.28);
          background: var(--orange-deep);
        }

        .hero-cta-row {
          display: none;
        }

        .hero-split {
          position: relative;
          overflow: hidden;
          min-height: 760px;
          display: flex;
          align-items: center;
          background: #dfe9f2;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-video-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(242,247,252,0.93) 0%, rgba(242,247,252,0.88) 40%, rgba(242,247,252,0.82) 100%);
        }

        .hero-noise {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(13,59,125,0.08) 0, transparent 22%),
            radial-gradient(circle at 80% 30%, rgba(244,131,31,0.08) 0, transparent 18%),
            radial-gradient(circle at 50% 80%, rgba(13,59,125,0.06) 0, transparent 18%);
          pointer-events: none;
        }

        .hero-split-shell {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-top: 48px;
          padding-bottom: 48px;
        }

        .hero-split-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.9fr);
          gap: 56px;
          align-items: center;
        }

        .hero-content {
          max-width: 680px;
        }

        .hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          color: var(--navy);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .hero-kicker::before {
          content: "";
          width: 28px;
          height: 2px;
          background: rgba(13,59,125,0.35);
        }

        .hero-heading {
          margin: 0;
          color: #0f1d38;
          font-size: 68px;
          line-height: 0.98;
          letter-spacing: -0.05em;
          max-width: 720px;
        }

        .hero-lead {
          margin: 28px 0 0;
          color: #334458;
          font-size: 19px;
          line-height: 1.8;
          max-width: 640px;
        }

        .hero-subcopy {
          margin: 20px 0 0;
          color: #5f6f82;
          font-size: 17px;
          line-height: 1.8;
          max-width: 620px;
        }

        .hero-cta-row {
          margin-top: 32px;
          display: none;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 14px 22px;
          border-radius: 999px;
          font-weight: 800;
          transition: transform 150ms ease, box-shadow 150ms ease, background-color 150ms ease, color 150ms ease, border-color 150ms ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          background: linear-gradient(180deg, #f89a3f 0%, var(--orange) 100%);
          color: var(--white);
          box-shadow: 0 14px 28px rgba(244,131,31,0.24);
        }

        .btn-primary:hover {
          background: linear-gradient(180deg, #f48b34 0%, var(--orange-deep) 100%);
        }

        .btn-secondary {
          background: rgba(255,255,255,0.98);
          color: var(--navy);
          border: 1px solid rgba(13,59,125,0.18);
          box-shadow: 0 10px 22px rgba(13,59,125,0.06);
        }

        .btn-secondary:hover {
          border-color: rgba(13,59,125,0.24);
          color: var(--blue);
        }

        .btn-ghost {
          background: rgba(255,255,255,0.08);
          color: var(--white);
          border: 1px solid rgba(255,255,255,0.28);
        }

        .hero-secondary-btn {
          background: transparent;
          color: var(--navy);
          border: 2px solid rgba(13,59,125,0.7);
        }

        .hero-secondary-btn:hover {
          background: rgba(255,255,255,0.55);
          color: var(--navy);
        }

        .hero-form-wrap {
          display: flex;
          justify-content: flex-end;
        }

        .hero-form-card {
          width: 100%;
          max-width: 620px;
          background: rgba(255,255,255,0.94);
          border: 1px solid rgba(13,59,125,0.08);
          border-radius: 28px;
          padding: 34px;
          box-shadow: 0 20px 50px rgba(13,59,125,0.12);
          backdrop-filter: blur(10px);
        }

        .hero-form-card-top {
          margin-bottom: 22px;
        }

        .hero-form-heading {
          margin: 0;
          color: #182437;
          font-size: 24px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .hero-form-text {
          margin: 12px 0 0;
          color: #57687a;
          font-size: 16px;
          line-height: 1.7;
        }

        .hero-inline-form {
          display: grid;
          gap: 18px;
        }

        .hero-form-stack {
          display: grid;
          gap: 16px;
        }

        .hero-clean-input {
          width: 100%;
          min-height: 54px;
          padding: 0 18px;
          border-radius: 16px;
          border: 1px solid rgba(13,59,125,0.10);
          background: rgba(255,255,255,0.96);
          color: var(--text);
          font-size: 16px;
          transition: border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;
        }

        .hero-clean-input:focus {
          outline: none;
          border-color: var(--blue);
          box-shadow: 0 0 0 4px rgba(10,92,174,0.10);
          transform: translateY(-1px);
        }

        .hero-clean-input::placeholder {
          color: #8a98a9;
        }

        .hero-clean-select {
          appearance: none;
          background-image:
            linear-gradient(45deg, transparent 50%, #5d6d80 50%),
            linear-gradient(135deg, #5d6d80 50%, transparent 50%);
          background-position:
            calc(100% - 18px) calc(50% - 3px),
            calc(100% - 12px) calc(50% - 3px);
          background-size: 6px 6px, 6px 6px;
          background-repeat: no-repeat;
        }

        .hero-form-submit {
          width: 100%;
          min-height: 54px;
          font-size: 16px;
        }

        .hero-form-footnote {
          text-align: center;
          color: #6e7c8c;
          font-size: 14px;
          line-height: 1.6;
        }

        .trust-strip,
        .how-section,
        .clinic-section,
        .why-section,
        .faq-section,
        .final-cta {
          position: relative;
          overflow: hidden;
        }

        .trust-strip::before,
        .why-section::before,
        .faq-section::before,
        .clinic-section::before {
          content: "";
          position: absolute;
          top: -80px;
          right: -80px;
          width: 220px;
          height: 220px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(13,59,125,0.05), rgba(13,59,125,0));
          pointer-events: none;
        }

        .how-section::before,
        .final-cta::before {
          content: "";
          position: absolute;
          top: -60px;
          left: -60px;
          width: 220px;
          height: 220px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.08), rgba(255,255,255,0));
          pointer-events: none;
        }

        .trust-strip {
          padding: 28px 0;
          background: linear-gradient(180deg, #f3f9fe 0%, #ffffff 100%);
          border-top: 1px solid var(--line-soft);
          border-bottom: 1px solid var(--line-soft);
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }

        .premium-grid-glow {
          position: relative;
        }

        .premium-grid-glow::after {
          content: "";
          position: absolute;
          inset: -16px;
          background: radial-gradient(circle at center, rgba(10,92,174,0.04), rgba(10,92,174,0));
          pointer-events: none;
          z-index: 0;
        }

        .premium-grid-glow > * {
          position: relative;
          z-index: 1;
        }

        .trust-item,
        .journey-card,
        .step-card,
        .why-card,
        .story-card,
        .blog-card,
        .clinic-card,
        .faq-item {
          border-radius: var(--radius-lg);
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease;
        }

        .trust-item {
          padding: 22px 18px;
          background: rgba(255,255,255,0.90);
          border: 1px solid var(--line);
          box-shadow: 0 10px 24px rgba(13,59,125,0.05);
        }

        .trust-item:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-soft);
        }

        .trust-item strong {
          display: block;
          color: var(--navy);
          font-size: 15px;
          line-height: 1.45;
          text-align: center;
        }

        .journey-grid {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .stories-grid,
        .clinics-grid {
          margin-top: 38px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .blogs-grid {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .journey-card,
        .why-card,
        .story-card,
        .blog-card,
        .clinic-card {
          background: rgba(255,255,255,0.98);
          border: 1px solid var(--line);
          box-shadow: var(--shadow-card);
          padding: 28px;
        }

        .journey-card:hover,
        .why-card:hover,
        .story-card:hover,
        .blog-card:hover,
        .clinic-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow-premium);
          border-color: rgba(10,92,174,0.14);
        }

        .section-actions-row {
          margin-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .section-chip-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .section-chip {
          min-height: 38px;
          padding: 10px 14px;
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--line-soft);
          color: var(--navy);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .clinic-section .section-chip {
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.16);
          color: rgba(255,255,255,0.96);
        }

        .clinic-section .section-chip-active {
          background: var(--orange);
          border-color: transparent;
          color: var(--white);
        }

        .journey-icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: linear-gradient(145deg, #eef7fd, #ffffff);
          border: 1px solid rgba(13,59,125,0.07);
          box-shadow: 0 10px 18px rgba(13,59,125,0.05);
        }

        .card-title {
          margin: 18px 0 0;
          color: var(--navy);
          font-size: 24px;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .card-subtitle {
          margin: 12px 0 0;
          color: #253547;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.75;
        }

        .card-copy,
        .clinic-card p,
        .story-card p,
        .blog-card p,
        .why-card p {
          margin: 12px 0 0;
          color: var(--text-soft);
          font-size: 14px;
          line-height: 1.9;
        }

        .link-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 18px;
          color: var(--blue);
          font-size: 14px;
          font-weight: 800;
          transition: transform 150ms ease, color 150ms ease;
        }

        .link-cta:hover {
          transform: translateX(4px);
          color: var(--blue-2);
        }

        .how-section {
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.06), transparent 24%),
            linear-gradient(180deg, #0b3773 0%, #082e63 100%);
          color: var(--white);
        }

        .how-section .section-title,
        .clinic-section .section-title,
        .final-cta .section-title {
          color: var(--white);
        }

        .how-section .section-soft-panel,
        .clinic-section .section-soft-panel {
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: none;
        }

        .how-section .section-intro,
        .clinic-section .section-intro,
        .clinic-support {
          color: rgba(255,255,255,0.92);
        }

        .steps-grid {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }

        .step-card {
          padding: 30px 28px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.13);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.05);
        }

        .step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 22px 38px rgba(0,0,0,0.18);
        }

        .step-number {
          width: 52px;
          height: 52px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--amber);
          color: var(--navy);
          font-weight: 800;
          margin-bottom: 16px;
          box-shadow: 0 10px 20px rgba(255,202,40,0.28);
        }

        .step-card h3 {
          margin: 0;
          color: var(--white);
          font-size: 22px;
          line-height: 1.35;
        }

        .step-card p {
          margin: 12px 0 0;
          color: rgba(255,255,255,0.84);
          font-size: 14px;
          line-height: 1.9;
        }

        .clinic-section {
          background:
            radial-gradient(circle at 90% 10%, rgba(255,255,255,0.08), transparent 18%),
            linear-gradient(180deg, #0b3773 0%, #0a4f95 100%);
          color: var(--white);
        }

        .clinic-support {
          margin: 10px 0 0;
          font-size: 14px;
          line-height: 1.85;
        }

        .search-wrap {
          margin-top: 24px;
          max-width: 760px;
        }

        .search-wrap input {
          width: 100%;
          min-height: 48px;
          padding: 0 16px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.98);
          color: var(--text);
        }

        .city-pills {
          margin-top: 18px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .pill {
          min-height: 42px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.98);
          color: var(--navy);
          font-weight: 800;
          cursor: pointer;
          transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease;
        }

        .pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 18px rgba(13,59,125,0.12);
        }

        .pill-active {
          background: var(--orange);
          color: var(--white);
          box-shadow: 0 12px 22px rgba(244,131,31,0.2);
        }

        .clinic-card {
          position: relative;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .clinic-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          border-radius: 24px 24px 0 0;
          background: linear-gradient(90deg, var(--orange), #ffb15c);
        }

        .clinic-meta {
          display: grid;
          gap: 12px;
        }

        .clinic-city,
        .story-label,
        .blog-label {
          color: var(--blue);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .clinic-city {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          min-height: 30px;
          padding: 6px 10px;
          border-radius: 999px;
          background: #eef7fd;
          color: var(--blue);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .clinic-card h3 {
          margin: 0;
          color: var(--navy);
          font-size: 22px;
          line-height: 1.35;
          letter-spacing: -0.02em;
        }

        .clinic-address {
          margin: 0;
          color: var(--text-soft);
          font-size: 14px;
          line-height: 1.9;
        }

        .clinic-bottom {
          margin-top: 22px;
          display: grid;
          gap: 14px;
        }

        .clinic-helper {
          color: var(--navy);
          font-size: 13px;
          font-weight: 700;
        }

        .brands-premium-shell {
          position: relative;
        }

        .brands-premium-shell::before {
          content: "";
          position: absolute;
          inset: -20px -10px auto -10px;
          height: 220px;
          background: radial-gradient(circle at 50% 0%, rgba(10,92,174,0.06), rgba(10,92,174,0));
          pointer-events: none;
        }

        .brands-top-row {
          margin-top: 26px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .brands-pill-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .brands-pill {
          min-height: 38px;
          padding: 10px 14px;
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--line-soft);
          color: var(--navy);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          box-shadow: 0 8px 20px rgba(13,59,125,0.05);
        }

        .brands-grid-premium {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .brand-premium-card {
          position: relative;
          overflow: hidden;
          min-height: 305px;
          padding: 28px;
          border-radius: 28px;
          border: 1px solid var(--line);
          box-shadow: var(--shadow-card);
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .brand-premium-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-premium);
          border-color: rgba(10,92,174,0.14);
        }

        .brand-premium-card::after {
          content: "";
          position: absolute;
          right: -30px;
          bottom: -40px;
          width: 150px;
          height: 150px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(10,92,174,0.08), rgba(10,92,174,0));
          pointer-events: none;
        }

        .brand-premium-top {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .brand-premium-mark {
          width: 68px;
          height: 68px;
          border-radius: 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
          box-shadow: 0 14px 28px rgba(13,59,125,0.12);
          flex-shrink: 0;
        }

        .brand-premium-head {
          display: grid;
          gap: 6px;
        }

        .brand-kicker {
          color: var(--text-soft);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .brand-premium-name {
          margin: 0;
          color: var(--navy);
          font-size: 25px;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .brand-premium-copy {
          margin: 18px 0 0;
          color: var(--text-soft);
          font-size: 14px;
          line-height: 1.9;
        }

        .brand-model-chip-row {
          margin-top: 18px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .brand-model-chip {
          min-height: 32px;
          padding: 8px 12px;
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(13,59,125,0.08);
          color: var(--navy);
          font-size: 12px;
          font-weight: 700;
        }

        .brand-premium-footer {
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid rgba(13,59,125,0.08);
          display: grid;
          gap: 10px;
        }

        .brand-note {
          color: var(--text-soft);
          font-size: 13px;
          line-height: 1.8;
        }

        .brand-link-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .brand-link {
          color: var(--blue);
          font-size: 14px;
          font-weight: 800;
          transition: transform 160ms ease, color 160ms ease;
        }

        .brand-link:hover {
          color: var(--blue-2);
          transform: translateX(2px);
        }

        .brand-compare-tag {
          color: var(--navy);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .brands-copy {
          margin: 28px 0 0;
          max-width: 1040px;
          color: var(--text-soft);
          font-size: 16px;
          line-height: 1.95;
        }

        .why-section {
          background: linear-gradient(180deg, #eef7fd 0%, #ffffff 100%);
        }

        .why-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.04fr) minmax(0, 0.96fr);
          gap: 30px;
          align-items: stretch;
        }

        .why-cards {
          margin-top: 32px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }

        .family-visual {
          min-height: 100%;
          height: 100%;
          border-radius: 30px;
          background:
            linear-gradient(145deg, rgba(244,131,31,0.12), rgba(232,244,253,0.9)),
            linear-gradient(180deg, #fff7ef, #eef7fd);
          border: 1px solid var(--line);
          box-shadow: var(--shadow-premium);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 36px;
          text-align: center;
          color: #5e6876;
          line-height: 1.9;
          transition: transform 220ms ease, box-shadow 220ms ease;
          font-weight: 600;
        }

        .family-visual:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 80px rgba(13,59,125,0.16);
        }

        .outcome-box {
          margin-top: 16px;
          padding: 14px;
          border-radius: 16px;
          background: linear-gradient(180deg, #f2f9fe 0%, #eaf6fd 100%);
          border: 1px solid var(--line-soft);
        }

        .outcome-box strong {
          display: block;
          color: var(--navy);
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .outcome-box div {
          margin-top: 6px;
          color: var(--text-soft);
          font-size: 14px;
          line-height: 1.8;
        }

        .education-tags {
          margin-top: 18px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .education-tag {
          min-height: 40px;
          padding: 10px 14px;
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          background: #eef7fd;
          color: var(--navy);
          font-size: 13px;
          font-weight: 800;
          border: 1px solid var(--line-soft);
          transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease;
        }

        .education-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 18px rgba(13,59,125,0.08);
          background: #f6fbff;
        }

        .stories-section {
          background:
            radial-gradient(circle at 85% 15%, rgba(255,255,255,0.08), transparent 18%),
            radial-gradient(circle at 15% 85%, rgba(255,255,255,0.06), transparent 18%),
            linear-gradient(180deg, #0b3773 0%, #0a4f95 100%);
          color: var(--white);
        }

        .stories-section .section-title {
          color: var(--white);
        }

        .stories-section .section-soft-panel {
          background: rgba(255,255,255,0.14);
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow: none;
        }

        .stories-section .section-intro {
          color: rgba(255,255,255,0.92);
        }

        .stories-section .story-card,
        .stories-section .blog-card {
          background: rgba(255,255,255,0.98);
          border: 1px solid rgba(255,255,255,0.12);
          box-shadow: var(--shadow-card);
        }

        .stories-section .education-tag {
          background: rgba(255,255,255,0.96);
          color: var(--navy);
          border: 1px solid rgba(255,255,255,0.18);
        }

        .stories-section .education-tag:hover {
          background: #ffffff;
        }

        .faq-section {
          background: linear-gradient(180deg, #f7f9fb 0%, #ffffff 100%);
        }

        .faq-list {
          margin-top: 30px;
          display: grid;
          gap: 12px;
          max-width: 980px;
        }

        .faq-item {
          background: rgba(255,255,255,0.99);
          border: 1px solid var(--line);
          box-shadow: var(--shadow-soft);
          overflow: hidden;
        }

        .faq-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-premium);
        }

        .faq-button {
          width: 100%;
          min-height: 62px;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          text-align: left;
          cursor: pointer;
        }

        .faq-question {
          color: var(--navy);
          font-size: 18px;
          font-weight: 800;
          line-height: 1.5;
        }

        .faq-icon {
          color: var(--blue);
          font-size: 22px;
          font-weight: 800;
          flex-shrink: 0;
          transition: transform 250ms ease;
        }

        .faq-icon-open {
          transform: rotate(45deg);
        }

        .faq-answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 250ms ease;
        }

        .faq-answer-wrap-open {
          grid-template-rows: 1fr;
        }

        .faq-answer-inner {
          overflow: hidden;
        }

        .faq-answer {
          padding: 0 22px 20px;
          color: var(--text-soft);
          font-size: 14px;
          line-height: 1.92;
        }

        .toast {
          position: fixed;
          top: 50%;
          left: 24px;
          bottom: auto;
          width: 360px;
          max-width: calc(100vw - 48px);
          padding: 18px 18px 18px 20px;
          border-radius: 18px;
          background:
            linear-gradient(135deg, rgba(13,59,125,0.98), rgba(244,131,31,0.96));
          color: var(--white);
          box-shadow: 0 24px 40px rgba(13,59,125,0.28);
          border: 1px solid rgba(255,255,255,0.12);
          z-index: 90;
          transition: opacity 250ms ease, transform 250ms ease;
        }

        .toast-hidden {
          opacity: 0;
          transform: translateY(-50%) translateX(-18px);
          pointer-events: none;
        }

        .toast-visible {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        .toast-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .toast-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.92);
        }

        .toast-label::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--amber);
        }

        .toast-message {
          font-size: 14px;
          line-height: 1.8;
        }

        .toast-close {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: rgba(255,255,255,0.14);
          color: var(--white);
          cursor: pointer;
        }

        .sticky-cta {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 75;
          padding: 12px 16px;
          background: rgba(255,255,255,0.99);
          border-top: 1px solid var(--line);
          box-shadow: 0 -8px 22px rgba(13,59,125,0.08);
          transition: opacity 180ms ease, transform 180ms ease;
        }

        .sticky-cta-inner {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          display: flex;
          gap: 12px;
        }

        .sticky-cta-hidden {
          opacity: 0;
          transform: translateY(100%);
          pointer-events: none;
        }

        .sticky-cta-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 1220px) {
          .hero-split-grid,
          .why-grid {
            grid-template-columns: 1fr;
          }

          .hero-form-wrap {
            justify-content: flex-start;
          }

          .hero-heading,
          .section-title {
            font-size: 48px;
          }

          .trust-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .journey-grid,
          .stories-grid,
          .clinics-grid,
          .steps-grid,
          .footer-grid,
          .brands-grid-premium {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .family-visual {
            min-height: 420px;
          }
        }

        @media (max-width: 767px) {
          .container { padding: 0 16px; }
          .home-main { padding-top: 52px; }
          .section, .hero-split { padding: 72px 0; }

          .topbar-inner {
            min-height: 52px;
            padding: 10px 0;
          }

          .hero-split {
            min-height: auto;
          }

          .hero-split-shell {
            padding-top: 24px;
            padding-bottom: 24px;
          }

          .hero-heading,
          .section-title {
            font-size: 34px;
          }

          .hero-lead,
          .final-subtitle {
            font-size: 18px;
          }

          .hero-split-grid,
          .trust-grid,
          .journey-grid,
          .stories-grid,
          .blogs-grid,
          .clinics-grid,
          .steps-grid,
          .why-grid,
          .why-cards,
          .footer-grid,
          .brands-grid-premium {
            grid-template-columns: 1fr;
          }

          .hero-cta-row,
          .clinic-actions,
          .section-actions-row,
          .brands-top-row,
          .sticky-cta-inner {
            flex-direction: column;
            align-items: stretch;
          }

          .hero-form-card {
            padding: 22px;
          }

          .toast {
            top: 50%;
            left: 12px;
            right: 12px;
            width: auto;
            bottom: auto;
            max-width: none;
          }

          .section-soft-panel {
            padding: 16px;
            border-radius: 18px;
          }

          .section-header-shell::after {
            width: 72px;
          }

          .brand-premium-card {
            min-height: unset;
            padding: 22px;
          }

          .family-visual {
            min-height: 300px;
          }
        }
      `}</style>

      <main className="home-main">
        <div className="topbar">

  <div className="container topbar-inner">

    <div>Choose Your Nearest Clinic</div>

    <div>Need help deciding? Call +919015401540 · Mon–Sat 10am–7pm</div>

    <a className="topbar-cta" href="/book-hearing-test">

      Book My Hearing Test →

    </a>

  </div>

</div>

        <HeroSection form={form} setForm={setForm} onSubmit={handleSubmit} />
        <TrustStrip items={trustItems} />
        <JourneySection cards={journeyCards} />
        <HowItWorksSection steps={steps} />

        <ClinicsSection
          cityFilter={cityFilter}
          setCityFilter={setCityFilter}
          cityPills={cityPills}
          clinics={visibleClinics}
        />

        <BrandsSection brands={brands} getBrandTone={getBrandTone} />

        <section className="section why-section">
          <div className="section-separator-top" />
          <div className="container why-grid">
            <div>
              <div className="section-header-shell fade-up">
                <h2 className="section-title">
                  Why families choose Sound for Life when hearing becomes a daily concern
                </h2>
                <div className="section-soft-panel fade-up delay-1">
                  <p className="section-intro">
                    Hearing care is personal. You need someone who listens first, explains clearly, and stays with you after the first appointment.
                  </p>
                </div>
              </div>

              <div className="why-cards premium-grid-glow">
                {whyChoose.map((point, index) => (
                  <article
                    className={`why-card fade-up delay-${index % 3}`}
                    key={point.title}
                  >
                    <h3>{point.title}</h3>
                    <p>{point.copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="family-visual fade-up delay-2">
              Indian family of 3 generations — senior man being fitted with hearing aid by Indian audiologist, family smiling, warm indoor light
            </div>
          </div>
        </section>

        <section className="section stories-section">
          <div className="section-separator-top" />
          <div className="container">
            <div className="section-header-shell fade-up">
              <h2 className="section-title">
                Stories that show how Sound for Life is growing hearing care differently
              </h2>
              <div className="section-soft-panel fade-up delay-1">
                <p className="section-intro">
                  Behind every clinic, appointment, and hearing test is a larger story — a growing hearing care network, trained professionals, and local clinics becoming trusted points of support for families.
                </p>
              </div>
            </div>

            <div className="stories-grid premium-grid-glow">
              {stories.map((story, index) => (
                <article className={`story-card fade-up delay-${index}`} key={story.title}>
                  <div className="story-label">{story.label}</div>
                  <h3>{story.title}</h3>
                  <p>{story.copy}</p>
                  <div className="outcome-box">
                    <strong>Outcome</strong>
                    <div>{story.outcome}</div>
                  </div>
                  <a className="link-cta" href={story.href}>
                    {story.cta}
                  </a>
                </article>
              ))}
            </div>

            <div className="blogs-grid premium-grid-glow">
              {blogs.map((blog, index) => (
                <article className={`blog-card fade-up delay-${index + 1}`} key={blog.title}>
                  <div className="blog-label">{blog.label}</div>
                  <h3>{blog.title}</h3>
                  <p>{blog.copy}</p>
                  <a className="link-cta" href={blog.href}>
                    Read article →
                  </a>
                </article>
              ))}
            </div>

            <div className="education-tags fade-up delay-2">
              <a className="education-tag" href="/stories">PR</a>
              <a className="education-tag" href="/faqs">FAQs</a>
              <a className="education-tag" href="/stories">Events</a>
              <a className="education-tag" href="/testimonials">Testimonials</a>
              <a className="education-tag" href="/blogs">Blogs</a>
              <a className="education-tag" href="/stories">Stories</a>
            </div>
          </div>
        </section>

        <ReviewsSection />
        <FAQSection faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />

        <div className={`toast ${toastVisible ? "toast-visible" : "toast-hidden"}`}>
          <div className="toast-row">
            <div>
              <div className="toast-label">Recent activity</div>
              <div className="toast-message">{toastMessage}</div>
            </div>
            <button
              type="button"
              className="toast-close"
              aria-label="Close notification"
              onClick={() => setToastVisible(false)}
            >
              ×
            </button>
          </div>
        </div>

        <div className={`sticky-cta ${showStickyCta ? "sticky-cta-visible" : "sticky-cta-hidden"}`}>
          <div className="sticky-cta-inner">
            <a className="btn btn-primary" href="/book-hearing-test">
              Book Hearing Test
            </a>
            <a className="btn btn-secondary" href="tel:+919015401540">
              Call Clinic
            </a>
          </div>
        </div>
      </main>
    </>
  );
}