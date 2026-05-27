// app/hearing-loss/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildCtaHref } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Hearing Loss: Symptoms, Causes, Types & Treatment Options",
  description:
    "Learn what hearing loss is, its symptoms, causes, types, degrees, and treatment options. Understand conductive, sensorineural, mixed, sudden, and noise-induced hearing loss.",
  alternates: {
    canonical: "/hearing-loss",
  },
  openGraph: {
    title: "Hearing Loss: Understand the Signs Before It Affects Daily Life",
    description:
      "Learn the symptoms, causes, types, and treatment options for hearing loss, including conductive, sensorineural, mixed, sudden, and noise-induced hearing loss.",
    url: "/hearing-loss",
    type: "website",
  },
};

type SymptomItem = {
  title: string;
  copy: string;
  icon: string;
};

type CardItem = {
  title: string;
  copy: string;
};

type DegreeItem = {
  title: string;
  copy: string;
};

type TestItem = {
  title: string;
  copy: string;
};

type StepItem = {
  step: string;
  title: string;
  copy: string;
};

type MythItem = {
  myth: string;
  truth: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const symptomItems: SymptomItem[] = [
  {
    icon: "◉",
    title: "You often ask people to repeat themselves",
    copy:
      "You hear that someone is speaking, but the words do not sound clear.",
  },
  {
    icon: "◌",
    title: "People sound like they are mumbling",
    copy:
      "Speech may feel unclear even when others are speaking normally.",
  },
  {
    icon: "◎",
    title: "You increase TV or phone volume",
    copy:
      "Family members may feel the volume is too loud, while it still feels normal to you.",
  },
  {
    icon: "◔",
    title: "You struggle in noisy places",
    copy:
      "Restaurants, markets, family functions, offices, or group discussions may become difficult.",
  },
  {
    icon: "◑",
    title: "One ear hears better than the other",
    copy:
      "Hearing loss in one ear can make it harder to understand speech, locate sounds, or follow conversations from one side.",
  },
  {
    icon: "◒",
    title: "You experience muffled hearing",
    copy: "Sounds may feel blocked, dull, unclear, or distant.",
  },
  {
    icon: "◍",
    title: "You hear ringing, buzzing, or whistling",
    copy:
      "This may be tinnitus, which can sometimes happen along with hearing impairment.",
  },
  {
    icon: "◕",
    title: "You feel tired after conversations",
    copy:
      "When hearing is unclear, your brain works harder to fill in the missing words.",
  },
];

const causes: CardItem[] = [
  {
    title: "Age-related hearing loss",
    copy:
      "Presbycusis meaning is age-related hearing loss. It usually develops slowly and often affects both ears. It commonly affects high-frequency hearing first.",
  },
  {
    title: "Loud noise exposure",
    copy:
      "Noise induced hearing loss happens when loud sound damages the inner ear. This may happen due to loud earphones, traffic, factories, machinery, concerts, firecrackers, loudspeakers, or long-term workplace noise.",
  },
  {
    title: "Earwax blockage",
    copy:
      "Excess earwax can block the ear canal and cause muffled hearing or temporary hearing loss.",
  },
  {
    title: "Ear infections",
    copy:
      "Ear infections and other ear diseases can cause pain, discharge, blocked sensation, fluid build-up, or temporary hearing loss.",
  },
  {
    title: "Middle ear problems",
    copy:
      "Eardrum damage, fluid behind the eardrum, or problems with the tiny middle ear bones can lead to conductive hearing loss or conduction deafness.",
  },
  {
    title: "Inner ear or nerve damage",
    copy:
      "Damage to the inner ear or ear nerves can cause sensorineural hearing loss.",
  },
  {
    title: "Medical conditions",
    copy:
      "Some diseases that cause hearing loss may include diabetes, high blood pressure, circulation-related conditions, autoimmune conditions, infections, or neurological problems.",
  },
  {
    title: "Birth-related causes",
    copy:
      "Congenital hearing loss or congenital deafness means hearing loss present at birth or developing very early in life.",
  },
];

const hearingLossTypes: CardItem[] = [
  {
    title: "Conductive Hearing Loss",
    copy:
      "Conductive hearing loss happens when sound cannot pass properly through the outer ear or middle ear. Conductive hearing loss causes may include earwax blockage, ear infection, fluid behind the eardrum, hole in the eardrum, swelling in the ear canal, or middle ear bone problems.",
  },
  {
    title: "Sensorineural Hearing Loss",
    copy:
      "Sensorineural hearing loss happens when the inner ear, hearing cells, or hearing nerve is affected. SNHL full form is sensorineural hearing loss. Sensorineural hearing loss causes may include ageing, noise exposure, genetics, inner ear damage, certain medicines, infections, or medical conditions.",
  },
  {
    title: "Mixed Hearing Loss",
    copy:
      "Mixed hearing loss means both conductive and sensorineural hearing loss are present. For example, a person may have age-related sensorineural hearing loss along with earwax, infection, or middle ear problems.",
  },
  {
    title: "Unilateral and Bilateral Hearing Loss",
    copy:
      "Hearing loss in one ear is called unilateral hearing loss. Some people may describe it as being deaf in one ear. When hearing loss affects both ears, it is called bilateral hearing loss.",
  },
];

const degreeItems: DegreeItem[] = [
  {
    title: "Mild Hearing Loss",
    copy:
      "You may hear normal speech but miss soft words, distant voices, or speech in noisy places.",
  },
  {
    title: "Moderate Hearing Loss",
    copy:
      "Normal conversation may become difficult, especially without visual cues or support.",
  },
  {
    title: "Severe Hearing Loss",
    copy:
      "Loud speech may be heard, but normal conversation is often difficult to understand.",
  },
  {
    title: "Profound Hearing Loss",
    copy:
      "Only very loud sounds may be heard, or sounds may be felt more as vibrations.",
  },
];

const dailyLifeItems: CardItem[] = [
  {
    title: "Conversations become tiring",
    copy:
      "When speech is unclear, the brain works harder to guess missing words. This can make listening mentally exhausting.",
  },
  {
    title: "Family communication changes",
    copy:
      "A person may miss small emotional moments, misunderstand family members, or avoid group conversations.",
  },
  {
    title: "Work and meetings become harder",
    copy:
      "Hearing difficulty can affect confidence, participation, and clarity during discussions.",
  },
  {
    title: "Social life may reduce",
    copy:
      "Many people avoid gatherings because they feel embarrassed asking others to repeat.",
  },
  {
    title: "Safety can be affected",
    copy:
      "Missing alarms, traffic sounds, doorbells, announcements, or warning sounds can affect everyday safety.",
  },
];

const testingChecklist = [
  "You ask people to repeat often",
  "You feel people are mumbling",
  "You increase TV or phone volume",
  "You struggle in noisy places",
  "You miss soft sounds",
  "You have muffled hearing",
  "You hear ringing or buzzing",
  "One ear hears better than the other",
  "You have repeated ear infections",
  "You have sudden hearing loss",
  "Your child has delayed speech or poor response to sound",
  "Your family says you are not hearing clearly",
];

const diagnosticTests: TestItem[] = [
  {
    title: "Ear Examination",
    copy:
      "The ear is checked for wax, infection, discharge, eardrum concerns, or visible blockage.",
  },
  {
    title: "Pure Tone Audiometry",
    copy:
      "This test checks the softest sounds you can hear at different pitches.",
  },
  {
    title: "Speech Audiometry",
    copy:
      "This test checks how clearly you understand spoken words.",
  },
  {
    title: "Tympanometry",
    copy:
      "This checks eardrum movement and middle ear function.",
  },
  {
    title: "OAE or BERA",
    copy:
      "These tests may be used for newborns, infants, children, or specific hearing concerns.",
  },
];

const hearingTestSteps: StepItem[] = [
  {
    step: "1",
    title: "Understanding your concern",
    copy:
      "The audiologist asks about your symptoms, lifestyle, medical history, noise exposure, and daily listening difficulties.",
  },
  {
    step: "2",
    title: "Ear check",
    copy:
      "The ear may be examined for wax, infection, or visible blockage.",
  },
  {
    step: "3",
    title: "Sound-based test",
    copy:
      "You listen to sounds through headphones and respond when you hear them.",
  },
  {
    step: "4",
    title: "Speech clarity check",
    copy:
      "The audiologist may check how clearly you understand words.",
  },
  {
    step: "5",
    title: "Result explanation",
    copy:
      "Your hearing test result is explained in simple language, along with the possible next steps.",
  },
];

const earSafetyItems: CardItem[] = [
  {
    title: "Protect your hearing from loud noise",
    copy:
      "Avoid long exposure to loud music, loudspeakers, machinery, and traffic noise.",
  },
  {
    title: "Keep earphone volume safe",
    copy:
      "Avoid listening at high volume for long periods. Take listening breaks.",
  },
  {
    title: "Use ear protection",
    copy:
      "Use earplugs or protective equipment in noisy workplaces, concerts, or industrial environments.",
  },
  {
    title: "Avoid putting objects deep into the ear",
    copy:
      "Cotton buds, pins, or objects can push wax deeper or injure the ear.",
  },
  {
    title: "Treat ear infections early",
    copy:
      "Pain, discharge, blocked feeling, or repeated infections should be checked.",
  },
  {
    title: "Get regular hearing checks",
    copy:
      "If you are exposed to loud noise or have diabetes, blood pressure, tinnitus, or age-related hearing concerns, periodic hearing tests can help.",
  },
];

const myths: MythItem[] = [
  {
    myth: "Myth 1: Hearing loss means complete deafness",
    truth:
      "Many people with hearing loss can hear sounds but cannot understand speech clearly.",
  },
  {
    myth: "Myth 2: Hearing loss happens only in old age",
    truth:
      "Hearing loss can affect infants, children, young adults, working professionals, and seniors.",
  },
  {
    myth: "Myth 3: If I hear loud sounds, my hearing is fine",
    truth:
      "Hearing loss often affects clarity before it affects overall loudness.",
  },
  {
    myth: "Myth 4: Mild hearing loss is not serious",
    truth:
      "Mild hearing loss can still affect conversations, meetings, confidence, and social comfort.",
  },
  {
    myth: "Myth 5: Hearing tests are painful",
    truth: "Hearing tests are simple, safe, and painless.",
  },
  {
    myth: "Myth 6: One-sided hearing loss can be ignored",
    truth:
      "Hearing loss in one ear can affect sound direction, speech clarity, and safety.",
  },
];

const trustPoints = [
  "Professional hearing tests",
  "Audiologist consultation",
  "Simple explanation of results",
  "Support for adults, seniors, and children",
  "Guidance for different types of hearing loss",
  "Pan-India hearing care network",
  "Patient-first counselling and follow-up support",
];

const faqs: FaqItem[] = [
  {
    question: "What is hearing loss?",
    answer:
      "Hearing loss is a condition where sounds do not reach the brain clearly. It may make sounds softer, unclear, or difficult to understand, especially in noisy places.",
  },
  {
    question: "What is hearing impairment?",
    answer:
      "Hearing impairment means a reduced ability to hear sounds properly. It may be mild, moderate, severe, or profound, and may affect one ear or both ears.",
  },
  {
    question: "What are the common hearing loss symptoms?",
    answer:
      "Common hearing loss symptoms include asking people to repeat, increasing TV volume, struggling in noisy places, muffled hearing, missing soft sounds, and feeling that people are mumbling.",
  },
  {
    question: "What are the main types of hearing loss?",
    answer:
      "The main types of hearing loss are conductive hearing loss, sensorineural hearing loss, and mixed hearing loss.",
  },
  {
    question: "What is conductive hearing loss?",
    answer:
      "Conductive hearing loss happens when sound cannot pass properly through the outer or middle ear. It may be caused by earwax, infection, fluid, eardrum problems, or middle ear disorders.",
  },
  {
    question: "What is sensorineural hearing loss?",
    answer:
      "Sensorineural hearing loss happens when the inner ear, hearing cells, or hearing nerve is affected. SNHL full form is sensorineural hearing loss.",
  },
  {
    question: "What causes sensorineural hearing loss?",
    answer:
      "Sensorineural hearing loss causes may include ageing, loud noise exposure, genetics, inner ear damage, certain medicines, infections, head injury, or medical conditions.",
  },
  {
    question: "What is mixed hearing loss?",
    answer:
      "Mixed hearing loss means a person has both conductive and sensorineural hearing loss. This means there may be a problem in the outer or middle ear as well as the inner ear or hearing nerve.",
  },
  {
    question: "What is noise induced hearing loss?",
    answer:
      "Noise induced hearing loss is hearing loss caused by exposure to loud sound. It may happen due to loud earphones, machinery, traffic, concerts, firecrackers, or long-term workplace noise.",
  },
  {
    question: "Hearing loss from noise is called what?",
    answer: "Hearing loss from noise is called noise induced hearing loss.",
  },
  {
    question: "What is presbycusis meaning?",
    answer:
      "Presbycusis means age-related hearing loss. It usually develops gradually and often affects both ears.",
  },
  {
    question: "Can hearing loss happen in one ear?",
    answer:
      "Yes. Hearing loss in one ear is possible. Some people may describe this as being deaf in one ear. It should be checked, especially if it happens suddenly.",
  },
  {
    question: "What is sudden sensorineural hearing loss?",
    answer:
      "Sudden sensorineural hearing loss is a sudden drop in hearing caused by inner ear or hearing nerve involvement. It should be treated as urgent and checked quickly.",
  },
  {
    question: "What is the degree of hearing loss?",
    answer:
      "The degree of hearing loss shows how severe the hearing loss is. It may be mild, moderate, severe, or profound based on hearing test results.",
  },
  {
    question: "What is profound hearing loss?",
    answer:
      "Profound hearing loss means a person may only hear very loud sounds or may rely on strong hearing support, visual cues, or other communication support.",
  },
  {
    question: "What is high frequency hearing loss?",
    answer:
      "High frequency hearing loss means difficulty hearing higher-pitched sounds. It can make speech unclear because many speech sounds are high-frequency.",
  },
  {
    question: "What are signs of hearing loss in infants?",
    answer:
      "Signs of hearing loss in infants include not startling at loud sounds, not responding to name, delayed speech, not turning toward sound, or poor response to familiar voices.",
  },
  {
    question: "Is hearing loss always permanent?",
    answer:
      "No. Some hearing loss, such as wax blockage or infection-related hearing loss, may be temporary. Sensorineural hearing loss is often permanent but can be managed with proper care.",
  },
  {
    question: "What are common diseases that cause hearing loss?",
    answer:
      "Diseases that cause hearing loss may include ear infections, Ménière’s disease, otosclerosis, certain viral infections, autoimmune conditions, and medical conditions affecting the inner ear or nerve pathway.",
  },
  {
    question: "What is the treatment for hearing loss?",
    answer:
      "Hearing loss treatment depends on the cause. It may include wax removal, medicines, ENT care, monitoring, hearing counselling, hearing support, or cochlear implant evaluation in selected cases.",
  },
  {
    question: "What is the management of sensorineural hearing loss?",
    answer:
      "Management of sensorineural hearing loss may include regular hearing tests, counselling, hearing support, tinnitus care, auditory rehabilitation, and cochlear implant referral in selected severe cases.",
  },
  {
    question: "What is hearing loss ICD 10?",
    answer:
      "Hearing loss ICD 10 refers to medical classification codes used by healthcare professionals for documentation and diagnosis. The exact ICD-10 code depends on the type, side, and cause of hearing loss.",
  },
  {
    question: "What is sensorineural hearing loss ICD 10?",
    answer:
      "Sensorineural hearing loss ICD 10 codes are used medically to classify sensorineural hearing loss. The exact code may differ for unilateral, bilateral, sudden, or unspecified sensorineural hearing loss.",
  },
  {
    question: "What is bilateral sensorineural hearing loss ICD 10?",
    answer:
      "Bilateral sensorineural hearing loss ICD 10 refers to the medical coding used when sensorineural hearing loss affects both ears. A healthcare professional should confirm the exact code for documentation.",
  },
  {
    question: "Can hearing loss be prevented?",
    answer:
      "Some types of hearing loss can be prevented, especially noise induced hearing loss. Safe listening habits, ear protection, early infection treatment, and regular hearing checks can help protect hearing.",
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
      className={`hl-section-header ${
        centered ? "hl-section-header-centered" : ""
      }`}
    >
      <div className="hl-kicker hl-kicker-orange">{eyebrow}</div>
      <h2 className="hl-h2">{title}</h2>
      <p className="hl-body hl-body-lg">{copy}</p>
    </div>
  );
}

export default function HearingLossPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hearing Loss",
        item: "/hearing-loss",
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

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "WebPage"],
    name: "Hearing Loss: Symptoms, Causes, Types & Treatment Options",
    url: "/hearing-loss",
    description:
      "Learn what hearing loss is, its symptoms, causes, types, degrees, and treatment options. Understand conductive, sensorineural, mixed, sudden, and noise-induced hearing loss.",
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Hearing Loss",
    url: "/hearing-loss",
    description:
      "Understand hearing loss, hearing impairment, symptoms, causes, diagnosis, treatment, and prevention.",
  };

  return (
    <>
      <style>{`
        :root {
          --hl-navy: #0d3b7d;
          --hl-navy-deep: #082e63;
          --hl-blue: #0a5cae;
          --hl-blue-2: #1267b9;
          --hl-blue-soft: #eef7fd;
          --hl-blue-soft-2: #f8fbff;
          --hl-orange: #f4831f;
          --hl-orange-deep: #df7417;
          --hl-amber: #ffca28;
          --hl-white: #ffffff;
          --hl-text: #263445;
          --hl-text-soft: #5d6d80;
          --hl-line: rgba(13, 59, 125, 0.1);
          --hl-line-soft: rgba(13, 59, 125, 0.06);
          --hl-shadow-sm: 0 12px 28px rgba(13, 59, 125, 0.06);
          --hl-shadow-md: 0 18px 42px rgba(13, 59, 125, 0.1);
          --hl-shadow-lg: 0 28px 70px rgba(13, 59, 125, 0.14);
          --hl-radius-xl: 30px;
          --hl-radius-lg: 24px;
          --hl-radius-md: 18px;
          --hl-radius-sm: 14px;
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
          font-family: Arial, sans-serif;
          color: var(--hl-text);
          background:
            radial-gradient(circle at top left, rgba(232, 244, 253, 0.42), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .hl-page {
          min-height: 100vh;
          padding-top: 126px;
        }

        .hl-container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .hl-section {
          padding: 88px 0;
        }

        .hl-section-tight {
          padding: 54px 0;
        }

        .hl-section-soft {
          background: linear-gradient(180deg, #f7fbff 0%, #ffffff 100%);
        }

        .hl-section-blue {
          background: linear-gradient(180deg, #eef7fd 0%, #ffffff 100%);
        }

        .hl-breadcrumb-wrap {
          background: rgba(255, 255, 255, 0.94);
          border-bottom: 1px solid var(--hl-line-soft);
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
          opacity: 0.45;
        }

        .hl-hero-image-section {
          background: #ffffff;
          padding-top: 12px;
        }

        .hl-hero-image-card {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--hl-line);
          box-shadow: var(--hl-shadow-md);
          background: #dbeeff;
        }

        .hl-hero-image-card-full {
          width: 100%;
          border-radius: 0;
          border-left: 0;
          border-right: 0;
        }

        .hl-hero-image-wrap {
          position: relative;
          width: 100%;
          height: 430px;
        }

        .hl-hero-image {
          object-fit: cover;
          object-position: center;
        }

        .hl-hero-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(8, 46, 99, 0.04) 0%,
            rgba(8, 46, 99, 0.12) 100%
          );
          pointer-events: none;
        }

        .hl-intro-shell {
          max-width: 1040px;
          margin: 0 auto;
          text-align: center;
        }

        .hl-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: var(--hl-navy);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .hl-kicker::before {
          content: "";
          width: 28px;
          height: 2px;
          background: rgba(13, 59, 125, 0.34);
        }

        .hl-kicker-orange {
          color: var(--hl-orange);
        }

        .hl-kicker-orange::before {
          background: rgba(244, 131, 31, 0.45);
        }

        .hl-h1 {
          margin: 0;
          color: var(--hl-navy);
          font-size: 62px;
          line-height: 0.98;
          letter-spacing: -0.05em;
        }

        .hl-h2 {
          margin: 0;
          color: var(--hl-navy);
          font-size: 44px;
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .hl-h3 {
          margin: 0;
          color: var(--hl-navy);
          font-size: 24px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .hl-body {
          margin: 0;
          color: var(--hl-text-soft);
          font-size: 15px;
          line-height: 1.88;
        }

        .hl-body-lg {
          font-size: 17px;
          line-height: 1.9;
        }

        .hl-lead {
          margin: 0;
          color: #334458;
          font-size: 19px;
          line-height: 1.82;
        }

        .hl-section-header {
          max-width: 980px;
          margin-bottom: 30px;
        }

        .hl-section-header-centered {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .hl-actions {
          margin-top: 30px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hl-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 14px 24px;
          border-radius: 999px;
          font-weight: 800;
          transition:
            transform 150ms ease,
            box-shadow 150ms ease,
            background 150ms ease,
            border-color 150ms ease,
            color 150ms ease;
        }

        .hl-btn:hover {
          transform: translateY(-2px);
        }

        .hl-btn-primary {
          background: linear-gradient(180deg, #f89a3f 0%, var(--hl-orange) 100%);
          color: var(--hl-white);
          box-shadow: 0 14px 28px rgba(244, 131, 31, 0.24);
        }

        .hl-btn-primary:hover {
          background: linear-gradient(180deg, #f48b34 0%, var(--hl-orange-deep) 100%);
        }

        .hl-btn-secondary {
          background: rgba(255, 255, 255, 0.98);
          color: var(--hl-navy);
          border: 1px solid rgba(13, 59, 125, 0.18);
          box-shadow: 0 10px 22px rgba(13, 59, 125, 0.06);
        }

        .hl-btn-secondary:hover {
          border-color: rgba(13, 59, 125, 0.24);
          color: var(--hl-blue);
        }

        .hl-grid {
          display: grid;
          gap: 20px;
        }

        .hl-grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .hl-grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .hl-grid-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .hl-card,
        .hl-feature-card,
        .hl-compact-card,
        .hl-warning-band,
        .hl-side-card,
        .hl-faq-item {
          border-radius: var(--hl-radius-lg);
        }

        .hl-card,
        .hl-feature-card,
        .hl-compact-card,
        .hl-side-card {
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--hl-line);
          box-shadow: var(--hl-shadow-md);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            border-color 180ms ease;
        }

        .hl-card:hover,
        .hl-feature-card:hover,
        .hl-compact-card:hover,
        .hl-side-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--hl-shadow-lg);
          border-color: rgba(10, 92, 174, 0.14);
        }

        .hl-card-body {
          padding: 26px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .hl-card-title {
          margin: 0;
          color: var(--hl-navy);
          font-size: 22px;
          line-height: 1.32;
          letter-spacing: -0.02em;
        }

        .hl-card-copy {
          margin: 12px 0 0;
          color: var(--hl-text-soft);
          font-size: 14px;
          line-height: 1.82;
        }

        .hl-highlight-box {
          margin-top: 22px;
          padding: 18px 20px;
          border-radius: 20px;
          background: linear-gradient(180deg, #f2f9fe 0%, #eaf6fd 100%);
          border: 1px solid var(--hl-line-soft);
          color: var(--hl-text);
          font-size: 15px;
          line-height: 1.8;
          font-weight: 700;
        }

        .hl-symptom-icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #eef7fd, #ffffff);
          border: 1px solid rgba(13, 59, 125, 0.08);
          box-shadow: 0 10px 18px rgba(13, 59, 125, 0.05);
          color: var(--hl-blue);
          font-size: 24px;
          font-weight: 900;
          margin-bottom: 18px;
          flex-shrink: 0;
        }

        .hl-flow-wrap {
          margin-top: 24px;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }

        .hl-flow-pill {
          min-height: 84px;
          padding: 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--hl-line);
          box-shadow: var(--hl-shadow-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--hl-navy);
          font-size: 14px;
          font-weight: 800;
          position: relative;
        }

        .hl-flow-pill:not(:last-child)::after {
          content: "→";
          position: absolute;
          right: -11px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--hl-blue);
          font-size: 18px;
          font-weight: 900;
        }

        .hl-equal-grid {
          display: grid;
          gap: 18px;
        }

        .hl-equal-grid-4 {
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .hl-equal-grid-3 {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .hl-equal-grid-2 {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .hl-shell-2col {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        .hl-shell-2col-wide {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
          gap: 24px;
          align-items: stretch;
        }

        .hl-note {
          margin-top: 18px;
          color: var(--hl-text-soft);
          font-size: 14px;
          line-height: 1.82;
        }

        .hl-text-stack {
          display: grid;
          gap: 14px;
          max-width: 1020px;
        }

        .hl-warning-band {
          padding: 28px;
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.12), transparent 24%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          box-shadow: var(--hl-shadow-lg);
        }

        .hl-warning-band .hl-kicker,
        .hl-warning-band .hl-h2,
        .hl-warning-band .hl-body,
        .hl-warning-band li {
          color: var(--hl-white);
        }

        .hl-warning-band .hl-kicker::before {
          background: rgba(255,255,255,0.4);
        }

        .hl-warning-list {
          margin: 18px 0 0;
          padding-left: 18px;
          display: grid;
          gap: 8px;
        }

        .hl-check-list {
          margin: 14px 0 0;
          padding-left: 18px;
          display: grid;
          gap: 10px;
          color: var(--hl-text-soft);
          font-size: 14px;
          line-height: 1.78;
        }

        .hl-impact-shell {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: 24px;
          align-items: stretch;
        }

        .hl-impact-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .hl-checklist-shell {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          gap: 24px;
          align-items: stretch;
        }

        .hl-checklist-card {
          padding: 28px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--hl-line);
          box-shadow: var(--hl-shadow-md);
        }

        .hl-checklist-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 18px;
        }

        .hl-check-row {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--hl-text);
          font-size: 14px;
          line-height: 1.72;
          font-weight: 700;
        }

        .hl-check-dot {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #eef7fd;
          color: var(--hl-blue);
          font-size: 12px;
          font-weight: 900;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .hl-side-card {
          padding: 28px;
        }

        .hl-side-card-dark {
          padding: 28px;
          border-radius: 24px;
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.12), transparent 24%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          box-shadow: var(--hl-shadow-lg);
        }

        .hl-side-card-dark .hl-h3,
        .hl-side-card-dark .hl-body {
          color: var(--hl-white);
        }

        .hl-test-shell {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        .hl-test-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .hl-step-timeline {
          display: grid;
          gap: 16px;
          max-width: 1100px;
        }

        .hl-step-row {
          display: grid;
          grid-template-columns: 64px minmax(0, 1fr);
          gap: 18px;
          align-items: start;
          padding: 24px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--hl-line);
          box-shadow: var(--hl-shadow-md);
        }

        .hl-step-number {
          width: 48px;
          height: 48px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--hl-amber);
          color: var(--hl-navy);
          font-weight: 900;
          box-shadow: 0 10px 20px rgba(255, 202, 40, 0.28);
        }

        .hl-list-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .hl-list-card {
          padding: 18px 20px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--hl-line);
          box-shadow: var(--hl-shadow-sm);
          color: var(--hl-text);
          font-size: 14px;
          line-height: 1.72;
          font-weight: 700;
        }

        .hl-myth-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .hl-trust-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 20px;
        }

        .hl-trust-pill {
          min-height: 60px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--hl-line);
          box-shadow: var(--hl-shadow-sm);
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--hl-text);
          font-size: 14px;
          line-height: 1.6;
          font-weight: 700;
        }

        .hl-trust-pill::before {
          content: "✓";
          width: 24px;
          height: 24px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #eef7fd;
          color: var(--hl-blue);
          font-size: 12px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .hl-final-cta {
          padding: 34px;
          border-radius: var(--hl-radius-xl);
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 24%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          box-shadow: var(--hl-shadow-lg);
          color: var(--hl-white);
          text-align: center;
        }

        .hl-final-cta .hl-h2,
        .hl-final-cta .hl-body {
          color: var(--hl-white);
        }

        .hl-faq-list {
          display: grid;
          gap: 12px;
          max-width: 1060px;
        }

        .hl-faq-item {
          background: rgba(255, 255, 255, 0.99);
          border: 1px solid var(--hl-line);
          box-shadow: var(--hl-shadow-sm);
          overflow: hidden;
        }

        .hl-faq-summary {
          list-style: none;
          width: 100%;
          min-height: 66px;
          padding: 20px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          cursor: pointer;
          color: var(--hl-navy);
          font-size: 18px;
          font-weight: 800;
          line-height: 1.5;
        }

        .hl-faq-summary::-webkit-details-marker {
          display: none;
        }

        .hl-faq-icon {
          color: var(--hl-blue);
          font-size: 22px;
          font-weight: 900;
          flex-shrink: 0;
          transition: transform 220ms ease;
        }

        .hl-faq-item[open] .hl-faq-icon {
          transform: rotate(45deg);
        }

        .hl-faq-content {
          padding: 0 22px 22px;
        }

        @media (max-width: 1220px) {
          .hl-h1 {
            font-size: 48px;
          }

          .hl-h2 {
            font-size: 38px;
          }

          .hl-grid-4,
          .hl-equal-grid-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .hl-equal-grid-3,
          .hl-grid-3,
          .hl-impact-mini-grid,
          .hl-test-mini-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .hl-shell-2col,
          .hl-shell-2col-wide,
          .hl-impact-shell,
          .hl-checklist-shell,
          .hl-test-shell {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 980px) {
          .hl-grid-2,
          .hl-list-grid,
          .hl-myth-grid,
          .hl-trust-grid,
          .hl-checklist-grid {
            grid-template-columns: 1fr;
          }

          .hl-flow-wrap {
            grid-template-columns: 1fr;
          }

          .hl-flow-pill:not(:last-child)::after {
            content: "↓";
            right: auto;
            left: 50%;
            top: auto;
            bottom: -15px;
            transform: translateX(-50%);
          }
        }

        @media (max-width: 767px) {
          .hl-container {
            padding: 0 16px;
          }

          .hl-page {
            padding-top: 126px;
          }

          .hl-section {
            padding: 72px 0;
          }

          .hl-section-tight {
            padding: 44px 0;
          }

          .hl-hero-image-wrap {
            height: 240px;
          }

          .hl-h1,
          .hl-h2 {
            font-size: 34px;
          }

          .hl-lead,
          .hl-body-lg {
            font-size: 16px;
            line-height: 1.76;
          }

          .hl-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .hl-btn {
            width: 100%;
          }

          .hl-grid-4,
          .hl-grid-3,
          .hl-grid-2,
          .hl-equal-grid-4,
          .hl-equal-grid-3,
          .hl-equal-grid-2,
          .hl-impact-mini-grid,
          .hl-test-mini-grid,
          .hl-list-grid,
          .hl-myth-grid,
          .hl-trust-grid {
            grid-template-columns: 1fr;
          }

          .hl-card-body,
          .hl-side-card,
          .hl-side-card-dark,
          .hl-warning-band,
          .hl-checklist-card,
          .hl-final-cta,
          .hl-step-row {
            padding: 22px;
          }

          .hl-step-row {
            grid-template-columns: 1fr;
          }

          .hl-faq-summary {
            font-size: 16px;
          }
        }
      `}</style>

      <main className="hl-page">
        <div className="hl-breadcrumb-wrap">
          <div className="hl-container">
            <nav className="hl-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="hl-breadcrumb-sep">/</span>
              <span aria-current="page">Hearing Loss</span>
            </nav>
          </div>
        </div>

        <section
          className="hl-hero-image-section"
          aria-label="Hearing loss hero image"
        >
          <div className="hl-hero-image-card hl-hero-image-card-full">
            <div className="hl-hero-image-wrap">
              <Image
                src="/images/hearing-loss-hero.jpg"
                alt="Audiologist supporting a patient with hearing loss guidance"
                fill
                priority
                className="hl-hero-image"
              />
              <div className="hl-hero-image-overlay" />
            </div>
          </div>
        </section>

        <section className="hl-section">
          <div className="hl-container">
            <div className="hl-intro-shell">
              <div className="hl-kicker">Trusted Hearing Care</div>
              <h1 className="hl-h1">
                Hearing Loss: Understand the Signs Before It Affects Daily Life
              </h1>
              <p className="hl-lead" style={{ marginTop: 24 }}>
                Hearing loss does not always mean complete deafness. Many people
                can hear sounds but struggle to understand words clearly,
                especially in noisy places, family conversations, phone calls,
                meetings, or public spaces.
              </p>
              <p className="hl-lead" style={{ marginTop: 16 }}>
                You may feel that people are mumbling, the TV volume is never
                enough, or one ear hears better than the other. These changes
                can feel small at first, but over time they can affect
                confidence, relationships, work, safety, and daily comfort.
              </p>
              <p className="hl-lead" style={{ marginTop: 16 }}>
                At Sound for Life, we help you understand your hearing with
                care, clarity, and compassion. The first step is not to assume.
                The first step is to get your hearing checked.
              </p>

              <div className="hl-actions">
                <Link
                  href={buildCtaHref({
                    intent: "hearing-test",
                    sourcePage: "hearing-loss",
                    cta: "intro-book-hearing-test",
                    referrerSection: "intro",
                  })}
                  className="hl-btn hl-btn-primary"
                >
                  Book a Hearing Test
                </Link>
                <Link
  href={buildCtaHref({
    intent: "audiologist",
    sourcePage: "hearing-loss",
    cta: "intro-speak-to-audiologist",
    referrerSection: "intro",
  })}
>
                  className="hl-btn hl-btn-secondary"
          
                  Speak to an Audiologist
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="hl-section-tight hl-section-soft">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Quick Symptom Checker"
              title="Do These Hearing Loss Symptoms Feel Familiar?"
              copy="Hearing loss symptoms often begin slowly. Many people do not notice them immediately because they adjust their behaviour without realising it. They may sit closer to the speaker, increase the volume, avoid noisy places, or depend on lip reading."
              centered
            />

            <div className="hl-grid hl-grid-4">
              {symptomItems.map((item) => (
                <article key={item.title} className="hl-card">
                  <div className="hl-card-body">
                    <div className="hl-symptom-icon" aria-hidden="true">
                      {item.icon}
                    </div>
                    <h3 className="hl-card-title">{item.title}</h3>
                    <p className="hl-card-copy">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="hl-actions">
              <Link
                href={buildCtaHref({
                  intent: "hearing-test",
                  sourcePage: "hearing-loss",
                  cta: "symptom-checker-book-hearing-test",
                  referrerSection: "symptom-checker",
                })}
                className="hl-btn hl-btn-primary"
              >
                Noticing these signs? Book a Hearing Test
              </Link>
            </div>
          </div>
        </section>

        <section className="hl-section">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Understanding Hearing Loss"
              title="What Is Hearing Loss?"
              copy="Hearing loss is a condition where sounds do not reach the brain clearly. It may affect one ear or both ears. It may be mild, moderate, severe, or profound. For some people, sounds become softer. For others, the bigger problem is speech clarity."
            />
            <div className="hl-text-stack">
              <p className="hl-body hl-body-lg">
                In simple words, hearing loss means you may hear a voice but may
                not understand the words clearly. This is why hearing loss is
                not only about volume. It is also about clarity, comfort,
                communication, and confidence.
              </p>
            </div>
            <div className="hl-highlight-box">
              Hearing loss does not always mean you cannot hear anything. Many
              people with hearing loss can hear sounds but struggle to
              understand speech clearly, especially in background noise.
            </div>
          </div>
        </section>

        <section className="hl-section hl-section-blue">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Definition"
              title="What Is Hearing Impairment?"
              copy="Hearing impairment is a broad term used for any reduction in hearing ability. It may be temporary or permanent. It may affect one ear or both ears. It may be present from birth or develop later in life."
            />

            <div className="hl-shell-2col">
              <article className="hl-side-card">
                <h3 className="hl-h3">Everyday Meaning</h3>
                <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                  When people search for what is hearing impairment, what is
                  hearing impairment definition, or hearing impaired meaning,
                  they are usually trying to understand whether their hearing
                  difficulty is normal or needs attention.
                </p>
              </article>

              <article className="hl-side-card">
                <h3 className="hl-h3">How People Use the Term</h3>
                <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                  A person may be described as hearing impaired if they have
                  difficulty hearing everyday sounds, understanding speech, or
                  following conversations without extra effort. However, many
                  people prefer the term hard of hearing because it feels more
                  respectful and practical in daily communication.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="hl-section">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Language and Meaning"
              title="Hard of Hearing Meaning and Deaf Definition"
              copy="These terms are used differently in medical, social, and everyday contexts. Understanding them can reduce confusion and help families speak about hearing loss more respectfully."
            />

            <div className="hl-shell-2col">
              <article className="hl-side-card">
                <h3 className="hl-h3">Hard of Hearing Meaning</h3>
                <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                  Hard of hearing means a person has some level of hearing
                  difficulty but is not completely deaf. A hard of hearing
                  person may hear certain sounds but may struggle with speech
                  clarity, soft voices, background noise, or group
                  conversations.
                </p>
                <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                  Being hard of hearing can affect phone calls, meetings, family
                  conversations, and social confidence.
                </p>
              </article>

              <article className="hl-side-card">
                <h3 className="hl-h3">Deaf Definition</h3>
                <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                  Deafness usually refers to severe or profound hearing loss
                  where a person may not hear normal speech clearly or may rely
                  more on visual communication, sign language, lip reading,
                  assistive devices, or other support.
                </p>
                <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                  The term deaf can have different meanings depending on
                  medical, social, and personal identity contexts.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="hl-section hl-section-soft">
          <div className="hl-container">
            <SectionHeader
              eyebrow="How Hearing Works"
              title="How Do We Hear?"
              copy="Hearing begins when sound enters the outer ear and travels through the ear canal to the eardrum. The eardrum vibrates and passes the sound through tiny bones in the middle ear. These vibrations then reach the inner ear, where tiny hearing cells convert them into signals."
            />

            <p className="hl-body hl-body-lg" style={{ maxWidth: 980 }}>
              The hearing nerve then carries these signals to the brain. The
              brain understands these signals as speech, music, alarms, traffic
              sounds, background noise, or voices. A problem at any stage of
              this pathway can lead to hearing loss, muffled hearing, ear
              problems, or difficulty understanding speech.
            </p>

            <div className="hl-flow-wrap">
              <div className="hl-flow-pill">Outer Ear</div>
              <div className="hl-flow-pill">Middle Ear</div>
              <div className="hl-flow-pill">Inner Ear</div>
              <div className="hl-flow-pill">Hearing Nerve</div>
              <div className="hl-flow-pill">Brain</div>
            </div>
          </div>
        </section>

        <section className="hl-section">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Causes"
              title="Why Does Hearing Loss Happen?"
              copy="Hearing loss causes can be different for every person. Some causes are temporary and treatable, while others may need long-term hearing management."
              centered
            />

            <div className="hl-equal-grid hl-equal-grid-4">
              {causes.map((item) => (
                <article key={item.title} className="hl-card">
                  <div className="hl-card-body">
                    <h3 className="hl-card-title">{item.title}</h3>
                    <p className="hl-card-copy">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hl-section hl-section-blue">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Types"
              title="Types of Hearing Loss"
              copy="There are different types of hearing loss. Understanding the type is important because the treatment or management depends on where the problem is happening."
              centered
            />

            <div className="hl-equal-grid hl-equal-grid-2">
              {hearingLossTypes.map((item) => (
                <article key={item.title} className="hl-card">
                  <div className="hl-card-body">
                    <h3 className="hl-card-title">{item.title}</h3>
                    <p className="hl-card-copy">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="hl-section">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Classification"
              title="Classification and Degree of Hearing Loss"
              copy="Classification of hearing impairment means grouping hearing loss based on type, severity, cause, or affected ear. A hearing professional may classify hearing loss by type, degree, one ear or both ears, sudden or gradual onset, temporary or permanent nature, speech understanding ability, and cause."
            />

            <div className="hl-equal-grid hl-equal-grid-2">
              {degreeItems.map((item) => (
                <article key={item.title} className="hl-card">
                  <div className="hl-card-body">
                    <h3 className="hl-card-title">{item.title}</h3>
                    <p className="hl-card-copy">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="hl-note">
              The degree of hearing loss does not always show the full real-life
              struggle. Some people mainly struggle with clarity, especially in
              noisy environments.
            </p>
          </div>
        </section>

        <section className="hl-section hl-section-soft">
          <div className="hl-container">
            <div className="hl-shell-2col">
              <article className="hl-side-card">
                <div className="hl-kicker hl-kicker-orange">
                  Speech Clarity
                </div>
                <h2 className="hl-h2">High Frequency Hearing Loss</h2>
                <p className="hl-body hl-body-lg" style={{ marginTop: 16 }}>
                  High frequency hearing loss means a person has difficulty
                  hearing higher-pitched sounds. These sounds are important for
                  speech clarity.
                </p>
                <div className="hl-highlight-box">
                  A person with high frequency hearing loss may hear someone
                  talking but miss words that contain sounds like “s,” “f,”
                  “sh,” “th,” or “k.” This can make speech sound unclear,
                  especially when there is background noise.
                </div>
              </article>

              <article className="hl-side-card">
                <div className="hl-kicker hl-kicker-orange">
                  Noise Exposure
                </div>
                <h2 className="hl-h2">Noise Induced Hearing Loss</h2>
                <p className="hl-body hl-body-lg" style={{ marginTop: 16 }}>
                  Noise induced hearing loss happens when loud sound damages the
                  inner ear. It may happen suddenly after a very loud sound, or
                  slowly after repeated exposure over months or years.
                </p>
                <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                  Common sources include loud earphones, factory machines,
                  traffic noise, construction work, concerts, clubs,
                  firecrackers, loudspeakers, and industrial equipment.
                </p>
                <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                  Noise induced hearing loss is important because it is often
                  preventable. Ear safety, hearing protection, safe listening
                  habits, and early testing can reduce the risk.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="hl-section-tight">
          <div className="hl-container">
            <div className="hl-shell-2col">
              <div className="hl-warning-band">
                <div className="hl-kicker">Urgent attention</div>
                <h2 className="hl-h2">Sudden Hearing Loss</h2>
                <p className="hl-body hl-body-lg" style={{ marginTop: 16 }}>
                  Sudden hearing loss means hearing reduces quickly, often
                  within hours or a few days. It may affect one ear or both
                  ears, but sudden hearing loss in one ear is more commonly
                  noticed.
                </p>
                <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                  Sudden sensorineural hearing loss should not be ignored. Some
                  people mistake it for earwax, cold, or blocked ear. However,
                  sudden hearing changes should be checked urgently by an ENT
                  specialist or hearing care professional.
                </p>
                <ul className="hl-warning-list">
                  <li>Sudden reduced hearing</li>
                  <li>Sudden deafness in one ear</li>
                  <li>Blocked feeling with hearing drop</li>
                  <li>Ringing sound with sudden hearing loss</li>
                  <li>Dizziness along with hearing difficulty</li>
                </ul>
              </div>

              <article className="hl-side-card">
                <div className="hl-kicker hl-kicker-orange">
                  One-Sided Hearing Difficulty
                </div>
                <h2 className="hl-h2">Hearing Loss in One Ear</h2>
                <p className="hl-body hl-body-lg" style={{ marginTop: 16 }}>
                  Hearing loss in one ear can affect more than people realise.
                  Even if the other ear hears well, one-sided hearing
                  difficulty can make it harder to locate sounds, follow group
                  conversations, and hear clearly in noisy places.
                </p>
                <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                  A person who is deaf in one ear may turn one side toward the
                  speaker, miss sounds from one direction, or struggle in
                  meetings and traffic environments.
                </p>
                <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                  One-sided hearing loss should always be evaluated, especially
                  if it is sudden, progressive, or linked with tinnitus,
                  dizziness, pain, or ear discharge.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="hl-section">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Children and Infants"
              title="Hearing Loss in Children and Infants"
              copy="Hearing loss in children needs early attention because hearing supports speech, language, learning, and social development."
            />

            <div className="hl-shell-2col">
              <article className="hl-side-card">
                <h3 className="hl-h3">Signs of Hearing Loss in Infants</h3>
                <ul className="hl-check-list">
                  <li>A baby may not startle at loud sounds.</li>
                  <li>A baby may not respond to their name.</li>
                  <li>A baby may not turn toward sound.</li>
                  <li>Speech milestones may be delayed.</li>
                  <li>The child may not react to familiar voices.</li>
                </ul>
              </article>

              <article className="hl-side-card">
                <h3 className="hl-h3">Signs in Older Children</h3>
                <ul className="hl-check-list">
                  <li>Delayed speech</li>
                  <li>Unclear pronunciation</li>
                  <li>Increasing TV volume</li>
                  <li>Poor response to instructions</li>
                  <li>Difficulty in school</li>
                  <li>Frequent ear infections</li>
                  <li>Watching faces closely while listening</li>
                  <li>Appearing inattentive</li>
                </ul>
              </article>
            </div>

            <p className="hl-note">
              Congenital hearing loss or congenital deafness may be present from
              birth. Early screening, diagnosis, and hearing management can make
              a major difference in the child’s communication development.
            </p>
          </div>
        </section>

        <section className="hl-section hl-section-soft">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Adults and Seniors"
              title="Hearing Loss in Adults and Seniors"
              copy="In adults, hearing loss often develops slowly. A person may not notice it at first because the brain adjusts. They may avoid noisy places, ask people to repeat, or depend more on facial expressions without realising it."
            />

            <div className="hl-text-stack">
              <p className="hl-body hl-body-lg">
                In seniors, hearing loss is commonly linked with presbycusis, or
                age-related hearing loss. It may affect speech clarity, family
                conversations, phone calls, and social confidence.
              </p>
              <p className="hl-body hl-body-lg">
                Many people delay testing because they feel hearing loss is a
                normal part of ageing. But early testing helps people understand
                the problem and manage it before it deeply affects daily life.
              </p>
            </div>
          </div>
        </section>

        <section className="hl-section hl-section-blue">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Daily Impact"
              title="How Hearing Loss Affects Daily Life"
              copy="Hearing difficulty can affect much more than sound. It can influence communication, relationships, work, confidence, and safety."
              centered
            />

            <div className="hl-impact-shell">
              <article className="hl-feature-card">
                <div className="hl-card-body">
                  <h3 className="hl-h3">Why daily life feels harder</h3>
                  <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                    Hearing loss is not only about missing sound. It also
                    changes how much effort daily listening takes, how easily
                    families communicate, and how confident people feel in work,
                    social, and safety situations.
                  </p>
                  <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                    This is why early management of hearing loss is important.
                    It protects not just hearing, but confidence, connection,
                    and independence.
                  </p>
                </div>
              </article>

              <div className="hl-impact-mini-grid">
                {dailyLifeItems.map((item) => (
                  <article key={item.title} className="hl-compact-card">
                    <div className="hl-card-body">
                      <h3 className="hl-card-title">{item.title}</h3>
                      <p className="hl-card-copy">{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="hl-section">
          <div className="hl-container">
            <SectionHeader
              eyebrow="When to Test"
              title="When Should You Get a Hearing Test?"
              copy="You should consider a hearing test if hearing difficulty is repeated, noticeable, or affecting daily life."
            />

            <div className="hl-checklist-shell">
              <div className="hl-checklist-card">
                <div className="hl-checklist-grid">
                  {testingChecklist.map((item) => (
                    <div key={item} className="hl-check-row">
                      <span className="hl-check-dot">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hl-side-card-dark">
                <h3 className="hl-h3">
                  A hearing test is simple, painless, and helps identify the
                  type and degree of hearing loss.
                </h3>
                <p className="hl-body hl-body-lg" style={{ marginTop: 14 }}>
                  It can show whether the issue is temporary, progressive,
                  one-sided, noise-related, or something that needs urgent
                  attention.
                </p>
                <div
                  className="hl-actions"
                  style={{ justifyContent: "flex-start" }}
                >
                  <Link
                    href={buildCtaHref({
                      intent: "hearing-test",
                      sourcePage: "hearing-loss",
                      cta: "when-to-test-book-hearing-test",
                      referrerSection: "when-to-test",
                    })}
                    className="hl-btn hl-btn-primary"
                  >
                    Book a Hearing Test
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hl-section hl-section-soft">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Diagnosis"
              title="How Is Hearing Loss Diagnosed?"
              copy="A proper hearing evaluation helps identify the type, degree, and possible cause of hearing loss."
              centered
            />

            <div className="hl-test-shell">
              <article className="hl-feature-card">
                <div className="hl-card-body">
                  <h3 className="hl-h3">A proper hearing evaluation gives clarity</h3>
                  <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                    A hearing test also helps the audiologist understand whether
                    the issue is conductive hearing loss, sensorineural hearing
                    loss, mixed hearing loss, or another hearing-related
                    concern.
                  </p>
                </div>
              </article>

              <div className="hl-test-mini-grid">
                {diagnosticTests.map((item) => (
                  <article key={item.title} className="hl-compact-card">
                    <div className="hl-card-body">
                      <h3 className="hl-card-title">{item.title}</h3>
                      <p className="hl-card-copy">{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="hl-section">
          <div className="hl-container">
            <SectionHeader
              eyebrow="What to Expect"
              title="What Happens During a Hearing Test?"
              copy="A hearing test is designed to be simple, calm, and easy to understand."
              centered
            />

            <div className="hl-step-timeline">
              {hearingTestSteps.map((item) => (
                <article key={item.step} className="hl-step-row">
                  <div className="hl-step-number">{item.step}</div>
                  <div>
                    <h3 className="hl-card-title">{item.title}</h3>
                    <p className="hl-card-copy">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="hl-actions">
              <Link
                href={buildCtaHref({
                  intent: "hearing-test",
                  sourcePage: "hearing-loss",
                  cta: "hearing-test-steps-schedule-test",
                  referrerSection: "hearing-test-steps",
                })}
                className="hl-btn hl-btn-primary"
              >
                Schedule Your Hearing Test
              </Link>
            </div>
          </div>
        </section>

        <section className="hl-section hl-section-blue">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Treatment and Management"
              title="Hearing Loss Treatment and Management"
              copy="Hearing loss treatment depends on the cause, type, and severity of the condition. Some ear problems can improve with medical care, while others may need long-term hearing support."
            />

            <div className="hl-list-grid">
              {[
                "Professional earwax removal",
                "Medical treatment for ear infections",
                "ENT consultation for eardrum or middle ear problems",
                "Monitoring of mild hearing loss",
                "Counselling and hearing care guidance",
                "Hearing support where required",
                "Cochlear implant referral in selected severe cases",
                "Communication strategies and auditory rehabilitation",
              ].map((item) => (
                <div key={item} className="hl-list-card">
                  {item}
                </div>
              ))}
            </div>

            <p className="hl-note">
              Management of hearing loss should always begin with proper testing.
              Self-treatment may delay the right care, especially in sudden
              hearing loss or recurring ear diseases.
            </p>
          </div>
        </section>

        <section className="hl-section">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Sensorineural Hearing Loss"
              title="Management of Sensorineural Hearing Loss"
              copy="Management of sensorineural hearing loss depends on the cause, degree, and speech understanding ability."
            />

            <div className="hl-text-stack">
              <p className="hl-body hl-body-lg">
                In many cases, sensorineural hearing loss is permanent because
                it involves the inner ear, ear nerves, or hearing cells.
                However, that does not mean nothing can be done. The goal is to
                improve hearing access, speech clarity, confidence, and
                communication.
              </p>
              <p className="hl-body hl-body-lg">
                Management may include audiologist consultation, regular hearing
                tests, hearing counselling, hearing support based on test
                results, tinnitus support if ringing is present, communication
                training, and cochlear implant evaluation in selected cases.
              </p>
              <p className="hl-body hl-body-lg">
                Sensorineural hearing loss treatment should be personalised
                because every patient’s hearing difficulty, lifestyle, and
                comfort level are different.
              </p>
            </div>
          </div>
        </section>

        <section className="hl-section hl-section-soft">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Ear Problems and Ear Diseases"
              title="Ear Problems and Ear Diseases That May Affect Hearing"
              copy="Many ear problems and ear diseases can affect hearing. Some may be temporary, while others may need medical attention."
            />

            <div className="hl-list-grid">
              {[
                "Earwax blockage",
                "Outer ear infection",
                "Middle ear infection",
                "Fluid in the middle ear",
                "Eardrum perforation",
                "Otosclerosis",
                "Tinnitus",
                "Ménière’s disease",
                "Age-related inner ear changes",
                "Noise induced hearing loss",
                "Sudden sensorineural hearing loss",
                "Congenital hearing loss",
              ].map((item) => (
                <div key={item} className="hl-list-card">
                  {item}
                </div>
              ))}
            </div>

            <p className="hl-note">
              If you have repeated ear pain, discharge, blocked sensation,
              dizziness, tinnitus, or hearing difficulty, it is better to get
              your ears checked instead of waiting.
            </p>
          </div>
        </section>

        <section className="hl-section">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Prevention"
              title="Ear Safety and Hearing Loss Prevention"
              copy="Hearing loss prevention is especially important for noise-related hearing damage. Some hearing problems cannot be prevented, but many risks can be reduced with safe habits."
              centered
            />

            <div className="hl-equal-grid hl-equal-grid-3">
              {earSafetyItems.map((item) => (
                <article key={item.title} className="hl-card">
                  <div className="hl-card-body">
                    <h3 className="hl-card-title">{item.title}</h3>
                    <p className="hl-card-copy">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="hl-note" style={{ maxWidth: 980 }}>
              Ear safety is not only for people who already have hearing loss.
              It is for anyone who wants to protect their hearing for the
              future.
            </p>
          </div>
        </section>

        <section className="hl-section hl-section-blue">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Common Myths"
              title="Common Myths About Hearing Loss"
              copy="Mild confusion, delayed action, and fear often come from myths. Clear information helps people act sooner and with more confidence."
              centered
            />

            <div className="hl-myth-grid">
              {myths.map((item) => (
                <details key={item.myth} className="hl-faq-item">
                  <summary className="hl-faq-summary">
                    <span>{item.myth}</span>
                    <span className="hl-faq-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="hl-faq-content">
                    <p className="hl-body">
                      <strong>Truth:</strong> {item.truth}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="hl-section">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Why Timing Matters"
              title="Why Early Action Matters"
              copy="Hearing loss often develops slowly, but its impact grows over time. When sounds remain unclear for a long period, conversations become harder, listening becomes tiring, and people may begin to withdraw from social situations."
            />

            <div className="hl-text-stack">
              <p className="hl-body hl-body-lg">
                Early testing helps you understand what is happening. It can
                also help identify treatable ear problems, monitor hearing
                changes, and guide the right management plan.
              </p>
              <p className="hl-body hl-body-lg">
                The earlier hearing loss is identified, the easier it is to
                manage its effect on daily life.
              </p>
            </div>
          </div>
        </section>

        <section className="hl-section hl-section-soft">
          <div className="hl-container">
            <SectionHeader
              eyebrow="Why Choose Sound for Life"
              title="Get the Right Hearing Guidance with Sound for Life"
              copy="At Sound for Life, we help you understand your hearing concerns with proper testing, expert guidance, and personalised care. Our focus is not just on identifying hearing loss, but on helping you take the right next step with confidence."
            />

            <div className="hl-shell-2col-wide">
              <div>
                <p className="hl-body hl-body-lg">
                  Whether you are experiencing muffled hearing, hearing loss in
                  one ear, age-related hearing difficulty, noise induced hearing
                  loss, or signs of hearing loss in your child, our team can
                  guide you with care.
                </p>

                <div className="hl-trust-grid">
                  {trustPoints.map((item) => (
                    <div key={item} className="hl-trust-pill">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hl-side-card-dark">
                <h3 className="hl-h3">Take the next step with clarity</h3>
                <p className="hl-body hl-body-lg" style={{ marginTop: 14 }}>
                  Start with testing, speak to an audiologist, and find the
                  right clinic support before hearing difficulty affects more of
                  daily life.
                </p>
                <div
                  className="hl-actions"
                  style={{ justifyContent: "flex-start" }}
                >
                  <Link
                    href={buildCtaHref({
                      intent: "hearing-test",
                      sourcePage: "hearing-loss",
                      cta: "why-choose-book-hearing-test",
                      referrerSection: "why-choose-sfl",
                    })}
                    className="hl-btn hl-btn-primary"
                  >
                    Book a Hearing Test
                  </Link>
                  <Link href="/clinics" className="hl-btn hl-btn-secondary">
                    Find Your Nearest Clinic
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="hl-section-tight">
          <div className="hl-container">
            <div className="hl-final-cta">
              <h2 className="hl-h2">
                Not Sure If It Is Hearing Loss? Start with a Simple Hearing
                Test.
              </h2>
              <p className="hl-body hl-body-lg" style={{ marginTop: 16 }}>
                If conversations feel unclear, people sound like they are
                mumbling, or your family has noticed changes in your hearing, do
                not wait. A hearing test can help you understand whether it is
                temporary ear blockage, conductive hearing loss, sensorineural
                hearing loss, mixed hearing loss, or another hearing concern.
              </p>
              <p className="hl-body hl-body-lg" style={{ marginTop: 12 }}>
                The first step is not to worry. The first step is to understand
                your hearing.
              </p>
              <div className="hl-actions">
                <Link
                  href={buildCtaHref({
                    intent: "hearing-test",
                    sourcePage: "hearing-loss",
                    cta: "final-cta-book-hearing-test",
                    referrerSection: "final-cta",
                  })}
                  className="hl-btn hl-btn-primary"
                >
                  Book a Hearing Test
                </Link>
                <Link
  href={buildCtaHref({
    intent: "audiologist",
    sourcePage: "hearing-loss",
    cta: "intro-speak-to-audiologist",
    referrerSection: "intro",
  })}
>
                  className="hl-btn hl-btn-secondary"
              
                  Speak to an Audiologist
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="hl-section" id="hearing-loss-faqs">
          <div className="hl-container">
            <SectionHeader
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              copy="Short, clear answers to common questions about hearing loss, hearing impairment, diagnosis, treatment, and prevention."
              centered
            />

            <div className="hl-faq-list">
              {faqs.map((faq) => (
                <details key={faq.question} className="hl-faq-item">
                  <summary className="hl-faq-summary">
                    <span>{faq.question}</span>
                    <span className="hl-faq-icon" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="hl-faq-content">
                    <p className="hl-body">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalWebPageSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
      </main>
    </>
  );
}