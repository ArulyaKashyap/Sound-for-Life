// app/stories-education/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hearing Care Stories & Expert Guides | Sound for Life",
  description:
    "Read hearing care stories, expert guides, events, and FAQs from Sound for Life. Learn with confidence and book a hearing test today.",
  alternates: {
    canonical: "/stories-education",
  },
  openGraph: {
    title: "Real Hearing Care Stories. Expert Guidance. Community Support.",
    description:
      "Explore patient journeys, hearing care guides, events, media updates, and FAQs from Sound for Life before you take the next step.",
    url: "/stories-education",
    type: "website",
  },
};

type StoryCard = {
  title: string;
  quote: string;
  snippet: string;
  audience: string;
  href: string;
  visualClass: string;
};

type ReviewCard = {
  text: string;
  city: string;
  patientType: string;
};

type ArticleCard = {
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  copy: string;
  cta: string;
  href: string;
  visualClass: string;
};

type PressItem = {
  date: string;
  title: string;
  href: string;
};

type EventCard = {
  title: string;
  subtitle: string;
  dateTime: string;
  location: string;
  copy: string;
  cta: string;
  href: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const quickLinks = [
  { label: "Patient Stories", href: "#patient-stories" },
  { label: "Expert Blogs", href: "#expert-guides" },
  { label: "In the News", href: "#in-the-news" },
  { label: "Community Events", href: "#community-events" },
  { label: "FAQs", href: "#stories-faqs" },
];

const patientStories: StoryCard[] = [
  {
    title: "I Realised I Was Not Ignoring People. I Was Missing Words.",
    quote: "“I realised I was not ignoring people. I was missing words.”",
    snippet:
      "For months, he thought everyone around him was speaking too softly. After a simple hearing test, he understood what was really happening and started his journey with expert support.",
    audience:
      "This story is for anyone who has delayed hearing care because they believed they were managing.",
    href: "/stories/patient-missing-words",
    visualClass: "se-story-visual-1",
  },
  {
    title: "We Needed Someone Who Could Explain It to My Father Calmly.",
    quote:
      "“We needed someone who could explain it to my father calmly.”",
    snippet:
      "Accepting hearing aids can feel emotional for many parents. This family needed patience, clear guidance, and an audiologist who could explain the process without pressure.",
    audience:
      "This story is for caregivers looking for gentle ways to support a parent with hearing loss.",
    href: "/stories/caregiver-father-guidance",
    visualClass: "se-story-visual-2",
  },
  {
    title: "I Finally Understood What the Ringing Could Mean.",
    quote:
      "“I finally understood what the ringing could mean.”",
    snippet:
      "Ringing sounds, disturbed sleep, and reduced focus can affect daily confidence. With expert tinnitus support, the patient learned what may be happening and how to manage the next steps.",
    audience:
      "This story is for anyone who wants answers before symptoms become overwhelming.",
    href: "/stories/tinnitus-guidance",
    visualClass: "se-story-visual-3",
  },
];

const quickReviews: ReviewCard[] = [
  {
    text:
      "The audiologist explained everything patiently. My father felt comfortable and not rushed at all.",
    city: "Delhi",
    patientType: "Caregiver",
  },
  {
    text:
      "I was worried about hearing aids, but the process felt calm, practical, and very clear.",
    city: "Mumbai",
    patientType: "Senior patient",
  },
  {
    text:
      "I finally understood why calls and meetings were feeling difficult. The guidance was simple and helpful.",
    city: "Bengaluru",
    patientType: "Working adult",
  },
  {
    text:
      "The tinnitus explanation reduced my anxiety because I finally knew what questions to ask next.",
    city: "Noida",
    patientType: "Tinnitus patient",
  },
];

const featuredArticle: ArticleCard = {
  title: "How to Know If It Is Time for a Hearing Test",
  subtitle:
    "A simple guide for people who are unsure whether their hearing needs attention.",
  category: "Hearing Wellness",
  readTime: "5 min read",
  date: "To be updated",
  copy:
    "You may not always notice hearing loss immediately. It can begin with missed words, difficulty following conversations in noise, or needing the TV louder than others prefer. This guide explains common signs, when to meet an audiologist, and how a hearing screening test can help you understand your next step.",
  cta: "Read Article →",
  href: "/blogs/how-to-know-if-it-is-time-for-a-hearing-test",
  visualClass: "se-article-visual-featured",
};

const latestArticles: ArticleCard[] = [
  {
    title: "Signs You May Need a Hearing Test",
    subtitle:
      "For people who are unsure whether their symptoms are serious.",
    category: "Hearing Wellness",
    readTime: "4 min read",
    date: "To be updated",
    copy:
      "Learn how everyday signs like asking people to repeat, missing phone conversations, or struggling in noise may point toward hearing impairment. This article also explains when to search for a hearing test near me and what to expect at your first visit.",
    cta: "Read Guide →",
    href: "/blogs/signs-you-may-need-a-hearing-test",
    visualClass: "se-article-visual-1",
  },
  {
    title: "How to Help a Parent Accept Hearing Care",
    subtitle: "A calm caregiver guide for families.",
    category: "Caregiver Tips",
    readTime: "5 min read",
    date: "To be updated",
    copy:
      "Many families notice hearing loss in seniors before the person accepts it. This guide gives practical, respectful caregiver tips for hearing loss without making your parent feel embarrassed. It also explains how a clinic conversation with an audiologist near me can reduce fear and confusion.",
    cta: "Read Caregiver Guide →",
    href: "/blogs/how-to-help-a-parent-accept-hearing-care",
    visualClass: "se-article-visual-2",
  },
  {
    title: "What Are Hearing Aids and Who Needs Them?",
    subtitle: "A simple explanation for first-time users.",
    category: "Product Guides",
    readTime: "6 min read",
    date: "To be updated",
    copy:
      "This article explains hearing aid meaning in simple words. A hearing aid is a small device that supports hearing by making useful sounds clearer, but it does not cure hearing loss. It also explains why many people in India search for hearing machine or ear hearing machine, while the preferred clinical term is hearing aid.",
    cta: "Understand Hearing Aids →",
    href: "/blogs/what-are-hearing-aids-and-who-needs-them",
    visualClass: "se-article-visual-3",
  },
  {
    title: "Types of Hearing Aids Explained Simply",
    subtitle:
      "A beginner-friendly guide to choosing the right style.",
    category: "Technology & Innovations",
    readTime: "7 min read",
    date: "To be updated",
    copy:
      "Explore common types of hearing aids, including CIC hearing aids, RIC hearing aids, invisible hearing aids, in ear hearing aids, and rechargeable hearing aids. The right option depends on your hearing level, comfort, lifestyle, budget, and advice from an audiologist.",
    cta: "Explore Product Guide →",
    href: "/blogs/types-of-hearing-aids-explained-simply",
    visualClass: "se-article-visual-4",
  },
  {
    title: "Conductive vs Sensorineural Hearing Loss",
    subtitle:
      "Understand the difference without medical confusion.",
    category: "Hearing Loss Awareness",
    readTime: "5 min read",
    date: "To be updated",
    copy:
      "Conductive hearing loss usually means sound is blocked or not passing properly through the outer or middle ear. Sensorineural hearing loss usually means there may be involvement of the inner ear or hearing nerve. An expert hearing test helps identify what type of support may be needed.",
    cta: "Read Explanation →",
    href: "/blogs/conductive-vs-sensorineural-hearing-loss",
    visualClass: "se-article-visual-5",
  },
  {
    title: "How to Improve Hearing Safely",
    subtitle:
      "Know what helps, what does not, and when to seek care.",
    category: "Hearing Wellness",
    readTime: "5 min read",
    date: "To be updated",
    copy:
      "Many people search for how to improve hearing, but the right step depends on the cause of the problem. This guide explains safe hearing solutions, when medical review may be needed, and why self-diagnosis can delay proper hearing care.",
    cta: "Learn Safe Next Steps →",
    href: "/blogs/how-to-improve-hearing-safely",
    visualClass: "se-article-visual-6",
  },
  {
    title: "Choosing the Best Hearing Aid in India",
    subtitle: "What to compare before making a decision.",
    category: "Product Guides",
    readTime: "6 min read",
    date: "To be updated",
    copy:
      "There is no single best hearing aid in India for everyone. The right choice depends on your hearing test results, comfort, daily routine, phone use, budget, and aftercare support. This article also explains how to compare best hearing aids, clinic service, fitting support, and follow-up care before buying.",
    cta: "Compare Hearing Aid Options →",
    href: "/blogs/choosing-the-best-hearing-aid-in-india",
    visualClass: "se-article-visual-7",
  },
];

const contentCategories = [
  "Hearing Wellness",
  "Technology & Innovations",
  "Caregiver Tips",
  "Product Guides",
  "Hearing Loss Awareness",
  "Tinnitus Support",
];

const pressItems: PressItem[] = [
  {
    date: "To be updated",
    title: "Clinic Network Expansion Update",
    href: "/press/clinic-network-expansion-update",
  },
  {
    date: "To be updated",
    title: "Sound for Life Hearing Awareness Campaign",
    href: "/press/hearing-awareness-campaign",
  },
  {
    date: "To be updated",
    title: "Community Hearing Screening Camp Initiative",
    href: "/press/community-hearing-screening-camp-initiative",
  },
  {
    date: "To be updated",
    title: "Expert Audiologist Panel on Hearing Wellness",
    href: "/press/expert-audiologist-panel-hearing-wellness",
  },
];

const events: EventCard[] = [
  {
    title: "Free Hearing Screening Camp at [Insert Clinic / City Name]",
    subtitle:
      "A simple community event for people who want to check their hearing, ask questions, and understand whether they need a detailed hearing test.",
    dateTime: "Date & time to be updated",
    location: "Clinic / city to be updated",
    copy:
      "This event is suitable for adults, senior citizens, caregivers, and families looking for a trusted hearing clinic near me.",
    cta: "Register / RSVP Now",
    href: "/events/free-hearing-screening-camp",
  },
  {
    title: "Free Hearing Screening Camp",
    subtitle:
      "For adults, seniors, and families noticing hearing difficulty.",
    dateTime: "Date & time to be updated",
    location: "City / clinic / venue to be updated",
    copy:
      "Join a local free hearing screening camp to understand early signs of hearing difficulty and get guided next steps from trained professionals.",
    cta: "Register Now →",
    href: "/events/free-hearing-screening-camp-local",
  },
  {
    title: "Educational Webinar: Understanding Age-Related Hearing Loss",
    subtitle:
      "For caregivers and families supporting senior parents.",
    dateTime: "Date & time to be updated",
    location: "Online / platform to be updated",
    copy:
      "This webinar explains hearing loss in seniors, common family concerns, and how to start a respectful conversation about care.",
    cta: "Save My Seat →",
    href: "/events/age-related-hearing-loss-webinar",
  },
  {
    title: "Clinic Open House & Hearing Aid Technology Demo",
    subtitle:
      "For first-time hearing aid users and families comparing options.",
    dateTime: "Date & time to be updated",
    location: "Clinic location to be updated",
    copy:
      "Visit a Sound for Life clinic to learn about hearing aid technology, rechargeable hearing aids, invisible hearing aids, and different fitting options.",
    cta: "Book Open House Visit →",
    href: "/events/clinic-open-house-hearing-aid-demo",
  },
  {
    title: "Caregiver Awareness Session",
    subtitle:
      "For families helping a loved one who is hesitant.",
    dateTime: "Date & time to be updated",
    location: "City / clinic / venue to be updated",
    copy:
      "This session helps caregivers understand emotional hesitation, denial, embarrassment, and common myths around hearing aids.",
    cta: "Register Interest →",
    href: "/events/caregiver-awareness-session",
  },
];

const faqs: FaqItem[] = [
  {
    question: "How do I know if it is time to get a hearing test?",
    answer:
      "If you often ask people to repeat, miss words in conversations, increase TV volume, or struggle in noisy places, it may be time for a hearing test. A test does not mean you will automatically need hearing aids. It simply helps you understand what is happening.",
  },
  {
    question:
      "What should I expect during my first visit to a Sound for Life clinic?",
    answer:
      "Your first visit usually includes a conversation about your hearing concerns, lifestyle, and daily listening challenges. An audiologist may recommend suitable tests and explain the results in simple language. You can book a visit if you are searching for a trusted audiologist near me.",
  },
  {
    question: "How do I choose the right hearing aid for my lifestyle?",
    answer:
      "The right hearing aid depends on your hearing test results, comfort, budget, daily routine, and technology needs. An expert can explain types of hearing aids such as RIC hearing aids, CIC hearing aids, in ear hearing aids, and rechargeable hearing aids. A guided hearing aid trial can help you decide with more confidence.",
  },
  {
    question: "Do your clinics offer trial periods or warranties?",
    answer:
      "Trial periods, warranties, and aftercare support may vary by device, brand, and clinic policy. Please check the exact details with your nearest Sound for Life clinic before purchase. You can also speak to our team before choosing a hearing aid centre.",
  },
  {
    question:
      "How can I support a family member who is hesitant to address hearing loss?",
    answer:
      "Start with patience, not pressure. Talk about daily comfort, missed conversations, and family connection instead of focusing only on the problem. You can also share simple hearing loss stories or book a calm consultation where an expert explains the next step.",
  },
  {
    question: "Are hearing aids only for severe hearing loss?",
    answer:
      "No. Hearing aids may support different levels of hearing difficulty, depending on test results and expert advice. Some people need help mainly in conversations, meetings, or noisy places. A proper hearing screening test helps identify whether support is needed.",
  },
  {
    question:
      "What is the difference between a hearing screening and a full hearing test?",
    answer:
      "A screening is usually a quick check to understand whether further evaluation may be needed. A full hearing test gives more detailed information about hearing levels and possible next steps. In some cases, an OAE hearing test may also be recommended, especially when clinically relevant.",
  },
  {
    question: "Can tinnitus be managed?",
    answer:
      "Tinnitus can often be managed with the right guidance, depending on its cause and severity. If you hear ringing, buzzing, or internal sounds, expert tinnitus support can help you understand what may be happening. Book a consultation if the sound affects sleep, focus, or daily comfort.",
  },
];

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="se-section-header">
      <div className="se-kicker">{eyebrow}</div>
      <h2 className="se-h2">{title}</h2>
      <p className="se-body se-body-lg">{copy}</p>
    </div>
  );
}

function StoryGrid() {
  return (
    <div className="se-grid se-grid-3">
      {patientStories.map((story) => (
        <article key={story.title} className="se-card se-card-hover se-story-card">
          <div className={`se-story-visual ${story.visualClass}`} />
          <div className="se-card-body se-stack-3">
            <h3 className="se-h3">{story.title}</h3>
            <p className="se-quote">{story.quote}</p>
            <p className="se-body">{story.snippet}</p>
            <p className="se-body se-body-soft">{story.audience}</p>
            <Link href={story.href} className="se-link-cta">
              Read Full Story →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function ReviewGrid() {
  return (
    <div className="se-grid se-grid-4">
      {quickReviews.map((review, index) => (
        <article key={`${review.city}-${index}`} className="se-card se-review-card">
          <div className="se-card-body se-stack-3">
            <div className="se-review-stars" aria-label="Verified review placeholder">
              ★★★★★
            </div>
            <p className="se-body">“{review.text}”</p>
            <div className="se-review-meta">
              <span>{review.city}</span>
              <span>•</span>
              <span>{review.patientType}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function LatestArticlesGrid() {
  return (
    <div className="se-grid se-grid-3">
      {latestArticles.map((article) => (
        <article key={article.title} className="se-card se-card-hover se-article-card">
          <div className={`se-article-visual ${article.visualClass}`} />
          <div className="se-card-body se-stack-3">
            <div className="se-article-meta">
              <span className="se-tag">{article.category}</span>
              <span>{article.readTime}</span>
              <span>{article.date}</span>
            </div>
            <h3 className="se-h3">{article.title}</h3>
            <p className="se-subtitle">{article.subtitle}</p>
            <p className="se-body">{article.copy}</p>
            <Link href={article.href} className="se-link-cta">
              {article.cta}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function PressList() {
  return (
    <div className="se-stack-3">
      {pressItems.map((item) => (
        <div key={item.title} className="se-press-row">
          <span className="se-press-date">{item.date}</span>
          <span className="se-press-sep">—</span>
          <span className="se-press-title">{item.title}</span>
          <span className="se-press-sep">—</span>
          <Link href={item.href} className="se-link-cta">
            Read Article
          </Link>
        </div>
      ))}
    </div>
  );
}

function EventsGrid() {
  return (
    <div className="se-grid se-grid-2">
      {events.slice(1).map((event) => (
        <article key={event.title} className="se-card se-card-hover se-event-card">
          <div className="se-card-body se-stack-3">
            <div className="se-event-badge">{event.dateTime}</div>
            <h3 className="se-h3">{event.title}</h3>
            <p className="se-subtitle">{event.subtitle}</p>
            <div className="se-event-location">{event.location}</div>
            <p className="se-body">{event.copy}</p>
            <Link href={event.href} className="se-link-cta">
              {event.cta}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

function FAQAccordion() {
  return (
    <div className="se-faq-list">
      {faqs.map((faq) => (
        <details key={faq.question} className="se-faq-item">
          <summary className="se-faq-summary">
            <span>{faq.question}</span>
            <span className="se-faq-icon">+</span>
          </summary>
          <div className="se-faq-content">
            <p className="se-body">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function StoriesEducationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Stories & Education",
        item: "/stories-education",
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
    "@type": "WebPage",
    name: "Stories & Education",
    url: "/stories-education",
    description:
      "Read hearing care stories, expert guides, events, and FAQs from Sound for Life.",
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Sound for Life Stories & Education",
    url: "/stories-education",
    description:
      "Hearing care stories, expert guides, events, and educational updates from Sound for Life.",
    blogPost: latestArticles.map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: article.copy,
      url: article.href,
    })),
  };

  const articleSchema = latestArticles.map((article) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.copy,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "Sound for Life",
    },
    publisher: {
      "@type": "Organization",
      name: "Sound for Life",
    },
    mainEntityOfPage: article.href,
  }));

  const eventSchema = events.map((event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.title,
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: event.location.toLowerCase().includes("online")
    ? "https://schema.org/OnlineEventAttendanceMode"
    : "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: event.location,
    address: event.location,
  },
  organizer: {
    "@type": "Organization",
    name: "Sound for Life",
    url: "/",
  },
  description: event.copy,
  url: event.href,
}));

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sound for Life",
    url: "/",
    description:
      "Sound for Life provides hearing care guidance, patient education, clinic support, and hearing aid services in India.",
  };

  return (
    <>
      <style>{`
        :root {
          --se-navy: #0d3b7d;
          --se-blue: #0a5cae;
          --se-blue-2: #1267b9;
          --se-blue-tint: #e8f4fd;
          --se-orange: #f4831f;
          --se-orange-deep: #df7417;
          --se-white: #ffffff;
          --se-text: #263445;
          --se-text-soft: #5d6d80;
          --se-line: rgba(13, 59, 125, 0.1);
          --se-line-soft: rgba(13, 59, 125, 0.06);
          --se-shadow-sm: 0 12px 28px rgba(13, 59, 125, 0.06);
          --se-shadow-md: 0 18px 42px rgba(13, 59, 125, 0.1);
          --se-shadow-lg: 0 30px 80px rgba(13, 59, 125, 0.16);
          --se-radius-xl: 32px;
          --se-radius-lg: 24px;
          --se-radius-md: 18px;
          --se-radius-sm: 14px;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          scroll-behavior: smooth;
        }

        body {
          background:
            radial-gradient(circle at top left, rgba(232, 244, 253, 0.42), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          color: var(--se-text);
          font-family: Arial, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .se-page {
          padding-top: 126px;
        }

        .se-container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .se-section {
          padding: 88px 0;
          position: relative;
        }

        .se-section-tight {
          padding: 56px 0;
          position: relative;
        }

        .se-stack-2 > * + * { margin-top: 8px; }
        .se-stack-3 > * + * { margin-top: 12px; }
        .se-stack-4 > * + * { margin-top: 16px; }
        .se-stack-5 > * + * { margin-top: 20px; }

        .se-grid {
          display: grid;
          gap: 24px;
        }

        .se-grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .se-grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .se-grid-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .se-breadcrumb-wrap {
          background: rgba(255, 255, 255, 0.94);
          border-bottom: 1px solid var(--se-line-soft);
        }

        .se-breadcrumb {
          min-height: 52px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--se-text-soft);
          font-size: 14px;
          font-weight: 700;
        }

        .se-breadcrumb-sep {
          opacity: 0.45;
        }

        .se-hero {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(90deg, rgba(242,247,252,0.95) 0%, rgba(242,247,252,0.9) 48%, rgba(242,247,252,0.74) 100%);
          min-height: 760px;
          display: flex;
          align-items: center;
        }

        .se-hero-media {
          position: absolute;
          inset: 0;
        }

        .se-hero-image {
          object-fit: cover;
          object-position: center;
        }

        .se-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(242,247,252,0.94) 0%, rgba(242,247,252,0.90) 45%, rgba(242,247,252,0.74) 100%);
        }

        .se-hero-noise {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(13,59,125,0.08) 0, transparent 22%),
            radial-gradient(circle at 80% 30%, rgba(244,131,31,0.08) 0, transparent 18%),
            radial-gradient(circle at 50% 80%, rgba(13,59,125,0.06) 0, transparent 18%);
          pointer-events: none;
        }

        .se-hero-shell {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 56px 0;
        }

        .se-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.92fr);
          gap: 56px;
          align-items: center;
        }

        .se-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--se-navy);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .se-kicker::before {
          content: "";
          width: 28px;
          height: 2px;
          background: rgba(13, 59, 125, 0.34);
        }

        .se-h1 {
          margin: 0;
          color: #0f1d38;
          font-size: 66px;
          line-height: 0.98;
          letter-spacing: -0.05em;
        }

        .se-h2 {
          margin: 0;
          color: var(--se-navy);
          font-size: 46px;
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .se-h3 {
          margin: 0;
          color: var(--se-navy);
          font-size: 24px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .se-body {
          margin: 0;
          color: var(--se-text-soft);
          font-size: 15px;
          line-height: 1.9;
        }

        .se-body-lg {
          font-size: 17px;
          line-height: 1.9;
        }

        .se-body-soft {
          color: #6c7b8a;
        }

        .se-lead {
          margin: 0;
          color: #334458;
          font-size: 19px;
          line-height: 1.8;
        }

        .se-subtitle {
          margin: 0;
          color: #253547;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.7;
        }

        .se-hero-pills {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .se-pill {
          min-height: 38px;
          padding: 10px 14px;
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          background: rgba(255,255,255,0.9);
          border: 1px solid var(--se-line-soft);
          color: var(--se-navy);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          box-shadow: 0 8px 20px rgba(13,59,125,0.05);
        }

        .se-hero-actions {
          margin-top: 30px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .se-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 14px 24px;
          border-radius: 999px;
          font-weight: 800;
          transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease;
        }

        .se-btn:hover {
          transform: translateY(-2px);
        }

        .se-btn-primary {
          background: linear-gradient(180deg, #f89a3f 0%, var(--se-orange) 100%);
          color: var(--se-white);
          box-shadow: 0 14px 28px rgba(244,131,31,0.24);
        }

        .se-btn-secondary {
          background: rgba(255,255,255,0.98);
          color: var(--se-navy);
          border: 1px solid rgba(13,59,125,0.18);
          box-shadow: 0 10px 22px rgba(13,59,125,0.06);
        }

        .se-hero-card {
          background: rgba(255,255,255,0.94);
          border: 1px solid rgba(13,59,125,0.08);
          border-radius: 28px;
          padding: 28px;
          box-shadow: 0 20px 50px rgba(13,59,125,0.12);
          backdrop-filter: blur(10px);
        }

        .se-hero-card-visual {
          height: 260px;
          border-radius: 20px;
          background:
            radial-gradient(circle at 70% 30%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #0d3b7d 0%, #0a5cae 48%, #9ed1f3 100%);
          position: relative;
          overflow: hidden;
        }

        .se-hero-card-visual::before {
          content: "";
          position: absolute;
          inset: auto 14% 16% auto;
          width: 150px;
          height: 180px;
          border-radius: 28px;
          background: linear-gradient(180deg, #eceff2 0%, #b9bec4 100%);
          transform: rotate(12deg);
          box-shadow: 0 18px 32px rgba(0,0,0,0.16);
        }

        .se-hero-card-visual::after {
          content: "";
          position: absolute;
          inset: 18% auto auto 16%;
          width: 210px;
          height: 210px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.18), rgba(255,255,255,0));
        }

        .se-hero-card-note {
          display: grid;
          gap: 10px;
          margin-top: 18px;
        }

        .se-note-row {
          padding: 12px 14px;
          border-radius: 14px;
          background: linear-gradient(180deg, #f2f9fe 0%, #eaf6fd 100%);
          border: 1px solid var(--se-line-soft);
          color: var(--se-text);
          font-size: 14px;
          line-height: 1.7;
          font-weight: 700;
        }

        .se-section-header {
          max-width: 940px;
          margin-bottom: 30px;
        }

        .se-card {
          background: rgba(255,255,255,0.98);
          border: 1px solid var(--se-line);
          border-radius: var(--se-radius-lg);
          box-shadow: var(--se-shadow-md);
          overflow: hidden;
        }

        .se-card-hover {
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .se-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: var(--se-shadow-lg);
          border-color: rgba(10,92,174,0.14);
        }

        .se-card-body {
          padding: 28px;
        }

        .se-story-card,
        .se-article-card {
          height: 100%;
        }

        .se-story-visual,
        .se-article-visual {
          height: 220px;
          background-size: cover;
          background-position: center;
        }

        .se-story-visual-1 {
          background:
            radial-gradient(circle at 34% 30%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #cfa06c 0%, #f0d0a8 50%, #8aa6c5 100%);
        }

        .se-story-visual-2 {
          background:
            radial-gradient(circle at 70% 28%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #8fb0d2 0%, #dbe7f3 50%, #f0c49d 100%);
        }

        .se-story-visual-3 {
          background:
            radial-gradient(circle at 64% 28%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #6f8eb1 0%, #a7c7e8 50%, #efe1cf 100%);
        }

        .se-quote {
          margin: 0;
          color: #1f3554;
          font-size: 18px;
          line-height: 1.7;
          font-weight: 800;
        }

        .se-review-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(247,251,255,0.98));
        }

        .se-review-stars {
          color: var(--se-orange);
          font-size: 18px;
          letter-spacing: 0.08em;
        }

        .se-review-meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          color: var(--se-text-soft);
          font-size: 13px;
          font-weight: 700;
        }

        .se-review-credibility {
          margin-top: 16px;
          color: var(--se-text-soft);
          font-size: 13px;
          font-weight: 700;
        }

        .se-category-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .se-category-pill {
          min-height: 40px;
          padding: 10px 14px;
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          background: #eef7fd;
          color: var(--se-navy);
          font-size: 13px;
          font-weight: 800;
          border: 1px solid var(--se-line-soft);
        }

        .se-featured-article {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.84fr);
          gap: 24px;
          align-items: stretch;
        }

        .se-article-featured-copy {
          padding: 30px;
        }

        .se-article-visual-featured {
          min-height: 100%;
          border-radius: var(--se-radius-lg);
          background:
            radial-gradient(circle at 70% 32%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #0d3b7d 0%, #0a5cae 58%, #96cdef 100%);
          position: relative;
          overflow: hidden;
        }

        .se-article-visual-featured::before {
          content: "";
          position: absolute;
          inset: auto 16% 14% auto;
          width: 136px;
          height: 168px;
          border-radius: 24px;
          background: linear-gradient(180deg, #eceff2 0%, #b9bec4 100%);
          transform: rotate(10deg);
          box-shadow: 0 16px 28px rgba(0,0,0,0.18);
        }

        .se-article-meta {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          color: var(--se-text-soft);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .se-tag {
          color: var(--se-blue);
        }

        .se-article-visual-1 {
          background: linear-gradient(135deg, #2f6fa3 0%, #8fc1eb 100%);
        }

        .se-article-visual-2 {
          background: linear-gradient(135deg, #d28f8f 0%, #f0c2bf 100%);
        }

        .se-article-visual-3 {
          background: linear-gradient(135deg, #f37c54 0%, #ffbf72 100%);
        }

        .se-article-visual-4 {
          background: linear-gradient(135deg, #224f8e 0%, #87bce6 100%);
        }

        .se-article-visual-5 {
          background: linear-gradient(135deg, #6c8ba9 0%, #d4e4f2 100%);
        }

        .se-article-visual-6 {
          background: linear-gradient(135deg, #307ca0 0%, #9ad3d8 100%);
        }

        .se-article-visual-7 {
          background: linear-gradient(135deg, #32508f 0%, #5e91d2 100%);
        }

        .se-link-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--se-blue);
          font-size: 14px;
          font-weight: 800;
          transition: transform 150ms ease, color 150ms ease;
        }

        .se-link-cta:hover {
          transform: translateX(4px);
          color: var(--se-blue-2);
        }

        .se-news-section {
          background:
            radial-gradient(circle at 85% 15%, rgba(255,255,255,0.08), transparent 18%),
            linear-gradient(180deg, #0b3773 0%, #0a4f95 100%);
          color: var(--se-white);
        }

        .se-news-section .se-h2,
        .se-news-section .se-h3,
        .se-news-section .se-body,
        .se-news-section .se-subtitle,
        .se-news-section .se-kicker,
        .se-news-section .se-link-cta,
        .se-news-section .se-press-date,
        .se-news-section .se-press-title,
        .se-news-section .se-media-logo {
          color: var(--se-white);
        }

        .se-news-section .se-kicker::before {
          background: rgba(255,255,255,0.36);
        }

        .se-logo-strip {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: 26px;
        }

        .se-media-logo {
          min-height: 84px;
          display: grid;
          place-items: center;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.08);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .se-news-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 30px;
          margin-top: 34px;
        }

        .se-news-panel {
          padding: 28px;
          border-radius: 22px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
        }

        .se-press-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          color: rgba(255,255,255,0.88);
          font-size: 14px;
          line-height: 1.8;
        }

        .se-press-sep {
          opacity: 0.6;
        }

        .se-events-highlight {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.88fr);
          gap: 24px;
          align-items: stretch;
        }

        .se-featured-event-card {
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.12), transparent 24%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          color: var(--se-white);
          box-shadow: var(--se-shadow-lg);
        }

        .se-featured-event-card .se-h3,
        .se-featured-event-card .se-subtitle,
        .se-featured-event-card .se-body,
        .se-featured-event-card .se-link-cta,
        .se-featured-event-card .se-event-location,
        .se-featured-event-card .se-event-badge {
          color: var(--se-white);
        }

        .se-featured-event-visual {
          border-radius: 22px;
          background:
            radial-gradient(circle at 70% 28%, rgba(255,255,255,0.18), transparent 18%),
            linear-gradient(135deg, #0d3b7d 0%, #0a5cae 55%, #9ed1f3 100%);
          min-height: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: var(--se-shadow-md);
        }

        .se-featured-event-visual::before {
          content: "";
          position: absolute;
          inset: auto 14% 14% auto;
          width: 130px;
          height: 156px;
          border-radius: 22px;
          background: linear-gradient(180deg, #eceff2 0%, #b9bec4 100%);
          transform: rotate(10deg);
          box-shadow: 0 16px 26px rgba(0,0,0,0.16);
        }

        .se-featured-event-visual::after {
          content: "";
          position: absolute;
          inset: 18% auto auto 16%;
          width: 180px;
          height: 180px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(255,255,255,0.18), rgba(255,255,255,0));
        }

        .se-event-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          min-height: 34px;
          padding: 8px 12px;
          border-radius: 999px;
          background: #eef7fd;
          color: var(--se-blue);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .se-event-location {
          color: var(--se-text-soft);
          font-size: 14px;
          font-weight: 700;
        }

        .se-faq-list {
          display: grid;
          gap: 12px;
          max-width: 980px;
        }

        .se-faq-item {
          background: rgba(255,255,255,0.99);
          border: 1px solid var(--se-line);
          border-radius: var(--se-radius-lg);
          box-shadow: var(--se-shadow-sm);
          overflow: hidden;
        }

        .se-faq-summary {
          list-style: none;
          width: 100%;
          min-height: 66px;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          color: var(--se-navy);
          font-size: 18px;
          font-weight: 800;
          line-height: 1.5;
        }

        .se-faq-summary::-webkit-details-marker {
          display: none;
        }

        .se-faq-icon {
          font-size: 22px;
          color: var(--se-blue);
          flex-shrink: 0;
          transition: transform 220ms ease;
        }

        .se-faq-item[open] .se-faq-icon {
          transform: rotate(45deg);
        }

        .se-faq-content {
          padding: 0 22px 22px;
        }

        .se-final-cta {
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 24%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          border-radius: var(--se-radius-xl);
          padding: 34px;
          box-shadow: var(--se-shadow-lg);
          color: var(--se-white);
          text-align: center;
        }

        .se-final-cta .se-h2,
        .se-final-cta .se-body {
          color: var(--se-white);
        }

        .se-final-actions {
          margin-top: 20px;
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 1220px) {
          .se-hero-grid,
          .se-featured-article,
          .se-news-grid,
          .se-events-highlight {
            grid-template-columns: 1fr;
          }

          .se-h1 {
            font-size: 48px;
          }

          .se-h2 {
            font-size: 40px;
          }

          .se-grid-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .se-grid-3 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 767px) {
          .se-page {
            padding-top: 126px;
          }

          .se-container {
            padding: 0 16px;
          }

          .se-section {
            padding: 72px 0;
          }

          .se-section-tight {
            padding: 44px 0;
          }

          .se-hero {
            min-height: auto;
          }

          .se-hero-shell {
            padding: 28px 0;
          }

          .se-hero-grid,
          .se-grid-2,
          .se-grid-3,
          .se-grid-4,
          .se-logo-strip,
          .se-news-grid,
          .se-events-highlight {
            grid-template-columns: 1fr;
          }

          .se-h1,
          .se-h2 {
            font-size: 34px;
          }

          .se-lead,
          .se-body-lg {
            font-size: 16px;
            line-height: 1.75;
          }

          .se-hero-actions,
          .se-final-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .se-btn {
            width: 100%;
          }

          .se-card-body,
          .se-hero-card,
          .se-final-cta {
            padding: 22px;
          }

          .se-story-visual,
          .se-article-visual {
            height: 170px;
          }

          .se-hero-card-visual {
            height: 220px;
          }

          .se-faq-summary {
            font-size: 16px;
          }
        }
      `}</style>

      <main className="se-page">
        <div className="se-breadcrumb-wrap">
          <div className="se-container">
            <nav className="se-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="se-breadcrumb-sep">/</span>
              <span aria-current="page">Stories &amp; Education</span>
            </nav>
          </div>
        </div>

        <section className="se-hero">
          <div className="se-hero-media">
            <Image
              src="/images/home-hearing-family.jpeg"
              alt="Indian family reconnecting in a warm hearing care moment"
              fill
              priority
              className="se-hero-image"
            />
            <div className="se-hero-overlay" />
            <div className="se-hero-noise" />
          </div>

          <div className="se-container se-hero-shell">
            <div className="se-hero-grid">
              <div className="se-stack-5">
                <div className="se-kicker">Stories &amp; Education</div>
                <h1 className="se-h1">
                  Real Stories. Real Connections. Expert Insights.
                </h1>
                <p className="se-lead">
                  Discover how Sound for Life is bringing the joy of sound back to communities, one story at a time.
                </p>
                <p className="se-lead">
                  Learn from real journeys, expert guidance, and clinic-led education before you decide your next step in hearing care.
                </p>

                <div className="se-hero-actions">
                  <Link href="#patient-stories" className="se-btn se-btn-primary">
                    Read Patient Stories
                  </Link>
                  <Link href="#expert-guides" className="se-btn se-btn-secondary">
                    Explore Hearing Care Guides
                  </Link>
                </div>

                <div className="se-hero-pills">
                  {quickLinks.map((item) => (
                    <a key={item.label} href={item.href} className="se-pill">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="se-hero-card">
                <div className="se-hero-card-visual" />
                <div className="se-hero-card-note">
                  <div className="se-note-row">
                    Warm, real patient journeys and caregiver perspectives
                  </div>
                  <div className="se-note-row">
                    Simple expert guidance before booking a hearing test
                  </div>
                  <div className="se-note-row">
                    Events, community education, and approved updates only
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="se-section" id="patient-stories">
          <div className="se-container">
            <SectionHeader
              eyebrow="Patient Stories"
              title="Patient Stories That Feel Familiar"
              copy="Hearing difficulty is not always easy to accept. Many people wait because they feel they are managing fine, while families quietly notice missed words, repeated questions, or reduced confidence. These hearing care stories are designed to help visitors feel understood before they take action."
            />
            <StoryGrid />

            <div className="se-section-header" style={{ marginTop: 40 }}>
              <div className="se-kicker">Community Reviews</div>
              <h2 className="se-h2">Quick Reviews From Our Hearing Care Community</h2>
              <p className="se-body se-body-lg">
                Use verified reviews only. Do not publish names, ratings, or review counts unless they are confirmed.
              </p>
              <div className="se-review-credibility">
                4.9 / 5 from [insert verified review count] reviews
              </div>
            </div>

            <ReviewGrid />
          </div>
        </section>

        <section className="se-section" id="expert-guides">
          <div className="se-container">
            <SectionHeader
              eyebrow="Expert Guides"
              title="Expert Hearing Care Guides, Written for Real Questions"
              copy="Good hearing care education should not confuse you. It should help you understand what is happening, what your options are, and when to speak to an expert. This section brings together simple guides from Sound for Life so visitors can learn before booking a hearing test or visiting a hearing aid clinic."
            />

            <div className="se-category-row">
              {contentCategories.map((category) => (
                <div key={category} className="se-category-pill">
                  {category}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 34 }}>
              <div className="se-featured-article se-card">
                <div className="se-article-featured-copy se-stack-3">
                  <div className="se-article-meta">
                    <span className="se-tag">{featuredArticle.category}</span>
                    <span>{featuredArticle.readTime}</span>
                    <span>{featuredArticle.date}</span>
                  </div>
                  <h3 className="se-h3">{featuredArticle.title}</h3>
                  <p className="se-subtitle">{featuredArticle.subtitle}</p>
                  <p className="se-body">{featuredArticle.copy}</p>
                  <Link href={featuredArticle.href} className="se-link-cta">
                    {featuredArticle.cta}
                  </Link>
                </div>
                <div className={featuredArticle.visualClass} />
              </div>
            </div>

            <div className="se-section-header" style={{ marginTop: 42 }}>
              <div className="se-kicker">Latest Articles</div>
              <h2 className="se-h2">Latest Articles</h2>
              <p className="se-body se-body-lg">
                Helpful reading for first-time users, caregivers, and anyone trying to understand hearing care without confusion.
              </p>
            </div>

            <LatestArticlesGrid />

            <div style={{ marginTop: 28 }}>
              <Link href="/blogs" className="se-link-cta">
                Explore the Blog Library →
              </Link>
            </div>
          </div>
        </section>

        <section className="se-section se-news-section" id="in-the-news">
          <div className="se-container">
            <SectionHeader
              eyebrow="Media & Updates"
              title="Sound for Life in the News"
              copy="Sound for Life’s work goes beyond clinic appointments. This space should highlight verified media mentions, community initiatives, expert panels, and important brand milestones. Use this section only for confirmed and approved updates."
            />

            <div className="se-logo-strip">
              <div className="se-media-logo">Verified Media Logo</div>
              <div className="se-media-logo">Verified Media Logo</div>
              <div className="se-media-logo">Verified Media Logo</div>
              <div className="se-media-logo">Verified Media Logo</div>
            </div>

            <div className="se-news-grid">
              <div className="se-news-panel se-stack-4">
                <h3 className="se-h3">Press Releases &amp; Brand Updates</h3>
                <PressList />
              </div>

              <div className="se-news-panel se-stack-4">
                <div>
                  <h3 className="se-h3">Corporate Milestone Copy</h3>
                  <p className="se-body">
                    Sound for Life continues to build access to expert-led hearing care through clinics, patient education, awareness initiatives, and community engagement.
                  </p>
                </div>
                <div>
                  <h3 className="se-h3">Community Impact Copy</h3>
                  <p className="se-body">
                    Through hearing awareness initiatives, clinic education, and local engagement, Sound for Life aims to help more families understand hearing loss awareness before it affects daily confidence and communication.
                  </p>
                </div>
                <p className="se-body">
                  Update this section only with verified milestones, approved brand statements, real event images, approved attendance details, and confirmed outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="se-section" id="community-events">
          <div className="se-container">
            <SectionHeader
              eyebrow="Community Events"
              title="Community Hearing Care Events Near You"
              copy="Some people feel more comfortable learning in a community setting before visiting a clinic. Sound for Life events are designed to make hearing care easier to understand, especially for seniors, caregivers, and first-time visitors."
            />

            <div className="se-events-highlight">
              <article className="se-card se-featured-event-card">
                <div className="se-card-body se-stack-3">
                  <div className="se-event-badge">{events[0].dateTime}</div>
                  <h3 className="se-h3">{events[0].title}</h3>
                  <p className="se-subtitle">{events[0].subtitle}</p>
                  <div className="se-event-location">{events[0].location}</div>
                  <p className="se-body">{events[0].copy}</p>
                  <Link href={events[0].href} className="se-link-cta">
                    {events[0].cta}
                  </Link>
                </div>
              </article>

              <div className="se-featured-event-visual" />
            </div>

            <div className="se-section-header" style={{ marginTop: 40 }}>
              <div className="se-kicker">Upcoming Events</div>
              <h2 className="se-h2">Upcoming Events</h2>
              <p className="se-body se-body-lg">
                Event details should be updated city-wise and clinic-wise before publishing.
              </p>
            </div>

            <EventsGrid />
          </div>
        </section>

        <section className="se-section" id="stories-faqs">
          <div className="se-container">
            <SectionHeader
              eyebrow="Questions Before You Read, Register, or Book"
              title="Questions Before You Read, Register, or Book"
              copy="Short, warm answers for common concerns before a hearing test, hearing aid decision, or clinic visit."
            />

            <FAQAccordion />

            <div style={{ marginTop: 24 }}>
              <Link href="/faqs" className="se-link-cta">
                View All FAQs →
              </Link>
            </div>
          </div>
        </section>

        <section className="se-section-tight">
          <div className="se-container">
            <div className="se-final-cta">
              <h2 className="se-h2">Not Sure Where to Start?</h2>
              <p className="se-body se-body-lg">
                Stories help you relate. Education helps you understand. A simple hearing consultation helps you move forward with confidence.
              </p>
              <p className="se-body se-body-lg">
                Start with a hearing test, speak to an expert, or find a Sound for Life clinic near you.
              </p>

              <div className="se-final-actions">
                <Link href="/book-hearing-test" className="se-btn se-btn-primary">
                  Book Hearing Test
                </Link>
                <Link href="/clinics" className="se-btn se-btn-secondary">
                  Find a Clinic Near You
                </Link>
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
        />
        {articleSchema.map((schema, index) => (
          <script
            key={`article-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {eventSchema.map((schema, index) => (
          <script
            key={`event-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </main>
    </>
  );
}