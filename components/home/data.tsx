// components/home/data.ts

import type {
  Blog,
  Brand,
  Clinic,
  FAQ,
  JourneyCard,
  Step,
  Story,
} from "./types";

export const journeyCards: JourneyCard[] = [
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
    subtitle: "Book tests, free trials, fitting, repair, and aftercare support.",
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

export const steps: Step[] = [
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

export const brands: Brand[] = [
  { name: "Signia", models: "Silk, Pure, Motion, Insio" },
  { name: "Phonak", models: "Audeo, Virto, Naida, Paradise" },
  { name: "ReSound", models: "Nexia, Omnia, Key, Enzo, Magna" },
  { name: "Unitron", models: "Moxi, Insera, Stride, Vivante" },
  { name: "Sonic", models: "Radiant, Enchant, Cheer, Journey" },
  { name: "A&M", models: "XTM, XTM P, XTM M, BTE Range" },
];

export const stories: Story[] = [
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

export const blogs: Blog[] = [
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

export const clinics: Clinic[] = [
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

export const faqs: FAQ[] = [
  {
    question: "Is the hearing test free?",
    answer:
      "Yes. You can book a hearing test at participating Sound for Life clinics, and our team will confirm the nearest clinic and available slot.",
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

export const notifications = [
  "Ramesh K. from Noida booked a Hearing Test — 4 minutes ago",
  "Sunita A. from Delhi purchased a Signia Hearing Aid this month",
  "Priya S. from Gurugram booked a Hearing Test — just now",
  "Vikram M. from Lucknow tried a Phonak device — 12 minutes ago",
  "Meena I. from Bengaluru completed her audiologist visit — 18 minutes ago",
  "Suresh N. from Mumbai purchased a ReSound hearing aid this week",
];

export const trustItems = [
  "Clinics Across India",
  "Certified Audiologists",
  "Multi-Brand Hearing Aids",
  "Trial Before Purchase",
  "Aftercare Support",
];

export const cityPills = [
  "Delhi",
  "Noida",
  "Gurugram",
  "Faridabad",
  "Lucknow",
  "Mumbai",
  "Bengaluru",
  "More",
];

export const whyChoose = [
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