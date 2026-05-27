// app/clinics/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildCtaHref } from "@/lib/cta";
import {
  clinics,
  formatPhoneHref,
  formatWhatsAppHref,
  getClinicBySlug,
} from "@/lib/clinics";

type ClinicDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return clinics.map((clinic) => ({
    slug: clinic.slug,
  }));
}

export async function generateMetadata({
  params,
}: ClinicDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic) {
    return {
      title: "Clinic Not Found | Sound for Life",
      description: "The clinic page you are looking for could not be found.",
    };
  }

  return {
    title: `${clinic.centreName}, ${clinic.city} | Sound for Life Clinic`,
    description: clinic.fullAddress,
    alternates: {
      canonical: `/clinics/${clinic.slug}`,
    },
    openGraph: {
      title: `${clinic.centreName}, ${clinic.city} | Sound for Life Clinic`,
      description: clinic.fullAddress,
      url: `/clinics/${clinic.slug}`,
      type: "website",
    },
  };
}

export default async function ClinicDetailPage({
  params,
}: ClinicDetailPageProps) {
  const { slug } = await params;
  const clinic = getClinicBySlug(slug);

  if (!clinic) {
    notFound();
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "/" },
      { "@type": "ListItem", position: 2, name: "Clinics", item: "/clinics" },
      {
        "@type": "ListItem",
        position: 3,
        name: clinic.centreName,
        item: `/clinics/${clinic.slug}`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.centreName,
    url: `/clinics/${clinic.slug}`,
    telephone: clinic.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.fullAddress,
      addressLocality: clinic.city,
      addressRegion: clinic.state,
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 10:00-19:00",
    medicalSpecialty: "Audiology",
  };

  return (
    <>
      <style>{`
        .cl-detail-page {
          padding-top: 110px;
        }

        .cl-detail-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 46px;
          color: var(--sfl-text-soft);
          font-size: 14px;
          font-weight: 700;
        }

        .cl-detail-divider {
          opacity: 0.45;
        }

        .cl-detail-hero,
        .cl-detail-panel {
          border-radius: 28px;
        }

        .cl-detail-hero {
          padding: 34px;
          background:
            radial-gradient(circle at 85% 20%, rgba(244, 131, 31, 0.14), transparent 16%),
            linear-gradient(135deg, var(--sfl-navy-deep) 0%, var(--sfl-blue) 70%, #2978c6 100%);
          color: #ffffff;
          box-shadow: var(--sfl-shadow-lg);
        }

        .cl-detail-hero .sfl-h1,
        .cl-detail-hero .sfl-lead,
        .cl-detail-hero .sfl-body,
        .cl-detail-hero .sfl-kicker {
          color: #ffffff;
        }

        .cl-detail-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          gap: 24px;
        }

        .cl-detail-panel {
          background: rgba(255,255,255,0.98);
          border: 1px solid var(--sfl-line);
          box-shadow: var(--sfl-shadow-md);
          padding: 28px;
        }

        .cl-detail-list {
          display: grid;
          gap: 14px;
        }

        .cl-detail-item {
          padding: 14px 16px;
          border-radius: 16px;
          background: #f8fafc;
          border: 1px solid rgba(13,59,125,0.08);
        }

        .cl-detail-item strong {
          display: block;
          color: var(--sfl-navy);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .cl-detail-item span,
        .cl-detail-item a {
          display: block;
          margin-top: 6px;
          color: var(--sfl-text);
          line-height: 1.75;
          word-break: break-word;
        }

        .cl-detail-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 22px;
        }

        @media (max-width: 767px) {
          .cl-detail-page {
            padding-top: 102px;
          }

          .cl-detail-grid {
            grid-template-columns: 1fr;
          }

          .cl-detail-hero,
          .cl-detail-panel {
            padding: 22px;
            border-radius: 22px;
          }

          .cl-detail-actions {
            flex-direction: column;
          }
        }
      `}</style>

      <main className="sfl-page cl-detail-page">
        <div className="sfl-container">
          <nav className="cl-detail-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="cl-detail-divider">/</span>
            <Link href="/clinics">Clinics</Link>
            <span className="cl-detail-divider">/</span>
            <span aria-current="page">{clinic.centreName}</span>
          </nav>
        </div>

        <section className="sfl-section-tight">
          <div className="sfl-container">
            <div className="cl-detail-hero">
              <div className="sfl-kicker sfl-kicker-orange">Sound for Life Clinic</div>
              <h1 className="sfl-h1">{clinic.centreName}</h1>
              <p className="sfl-lead" style={{ marginTop: 16 }}>
                {clinic.city}, {clinic.state}
              </p>
              <p className="sfl-body" style={{ marginTop: 12, maxWidth: 860 }}>
                Visit this clinic for hearing tests, hearing aid support, fitting,
                aftercare, and guided hearing-care consultation.
              </p>

              <div className="cl-detail-actions">
                <Link
                  href={buildCtaHref({
                    intent: "clinic-visit",
                    sourcePage: `clinic-${clinic.slug}`,
                    cta: "book-clinic-visit",
                    referrerSection: "hero",
                  })}
                  className="sfl-btn sfl-btn-primary"
                >
                  Book Clinic Visit
                </Link>
                <a
                  href={formatPhoneHref(clinic.phone)}
                  className="sfl-btn sfl-btn-secondary"
                >
                  Call Clinic
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="sfl-section">
          <div className="sfl-container">
            <div className="cl-detail-grid">
              <div className="cl-detail-panel">
                <h2 className="sfl-h2">Clinic details</h2>

                <div className="cl-detail-list" style={{ marginTop: 18 }}>
                  <div className="cl-detail-item">
                    <strong>Address</strong>
                    <span>{clinic.fullAddress}</span>
                  </div>

                  <div className="cl-detail-item">
                    <strong>Phone</strong>
                    <a href={formatPhoneHref(clinic.phone)}>{clinic.phone}</a>
                  </div>

                  <div className="cl-detail-item">
                    <strong>WhatsApp</strong>
                    <a
                      href={formatWhatsAppHref(clinic.whatsapp)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {clinic.whatsapp}
                    </a>
                  </div>

                  <div className="cl-detail-item">
                    <strong>Hours</strong>
                    <span>{clinic.hours}</span>
                  </div>
                </div>
              </div>

              <div className="cl-detail-panel">
                <h2 className="sfl-h2">Need help before visiting?</h2>
                <p className="sfl-body" style={{ marginTop: 16 }}>
                  Start with the shared appointment form and our team will help
                  you with the right clinic visit, hearing test, or callback.
                </p>

                <div className="cl-detail-actions">
                  <Link
                    href={buildCtaHref({
                      intent: "clinic-visit",
                      sourcePage: `clinic-${clinic.slug}`,
                      cta: "request-callback",
                      referrerSection: "sidebar",
                    })}
                    className="sfl-btn sfl-btn-primary"
                  >
                    Request Callback
                  </Link>

                  <Link href="/clinics" className="sfl-btn sfl-btn-secondary">
                    Back to Clinics
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </main>
    </>
  );
}