"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { buildCtaHref } from "@/lib/cta";
import { clinics } from "@/lib/clinics";

export default function ClinicsDirectoryClient() {
  const [query, setQuery] = useState("");

  const filteredClinics = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return clinics;
    }

    return clinics.filter((clinic) => {
      const haystack = [
        clinic.centreName,
        clinic.city,
        clinic.state,
        clinic.fullAddress,
        clinic.slug,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <>
      <style>{`
        .cl-page {
          padding-top: 110px;
        }

        .cl-breadcrumb {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 46px;
          color: var(--sfl-text-soft);
          font-size: 14px;
          font-weight: 700;
        }

        .cl-breadcrumb-current {
          color: var(--sfl-navy);
        }

        .cl-divider {
          opacity: 0.45;
        }

        .cl-hero-panel {
          width: 100%;
          padding: 40px;
          border-radius: 32px;
          background:
            radial-gradient(circle at 85% 20%, rgba(244, 131, 31, 0.14), transparent 16%),
            radial-gradient(circle at 12% 20%, rgba(255, 255, 255, 0.24), transparent 18%),
            linear-gradient(135deg, var(--sfl-navy-deep) 0%, var(--sfl-blue) 62%, #2c7ecf 100%);
          color: var(--sfl-white);
          box-shadow: var(--sfl-shadow-lg);
          position: relative;
          overflow: hidden;
        }

        .cl-hero-panel::after {
          content: "";
          position: absolute;
          inset: auto -80px -110px auto;
          width: 260px;
          height: 260px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
        }

        .cl-hero-panel .sfl-h1,
        .cl-hero-panel .sfl-lead,
        .cl-hero-panel .sfl-small {
          color: var(--sfl-white);
        }

        .cl-hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .cl-search-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto auto;
          gap: 10px;
          align-items: center;
          max-width: 100%;
        }

        .cl-search-field {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 58px;
          padding: 0 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.97);
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 0 12px 24px rgba(8, 46, 99, 0.14);
        }

        .cl-search-field span {
          color: var(--sfl-blue);
          font-size: 18px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .cl-search-field input {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: var(--sfl-text);
          font-size: 15px;
          font-family: inherit;
        }

        .cl-search-field input::placeholder {
          color: #6b7c8f;
        }

        .cl-stats {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .cl-stat {
          min-width: 132px;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .cl-stat strong {
          display: block;
          font-size: 22px;
          line-height: 1;
          font-weight: 900;
          color: var(--sfl-white);
        }

        .cl-stat span {
          display: block;
          margin-top: 6px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.84);
        }

        .cl-results-meta {
          margin-top: 16px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-weight: 700;
        }

        .cl-results-grid {
          margin-top: 34px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .cl-result-card {
          min-height: 100%;
        }

        .cl-result-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .cl-city-badge {
          display: inline-flex;
          padding: 8px 10px;
          border-radius: 999px;
          background: var(--sfl-blue-soft);
          color: var(--sfl-blue);
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .cl-city-status {
          padding: 8px 10px;
          border-radius: 999px;
          background: #eef8f1;
          color: #24714c;
          font-size: 12px;
          font-weight: 800;
          white-space: nowrap;
        }

        .cl-card-address {
          margin: 0;
        }

        .cl-card-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: auto;
          padding-top: 18px;
        }

        .cl-empty {
          margin-top: 28px;
          padding: 28px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.98);
          border: 1px solid var(--sfl-line);
          box-shadow: var(--sfl-shadow-md);
        }

        @media (max-width: 1200px) {
          .cl-results-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1023px) {
          .cl-search-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .cl-page {
            padding-top: 102px;
          }

          .cl-hero-panel {
            padding: 22px;
            border-radius: 24px;
          }

          .cl-results-grid {
            grid-template-columns: 1fr;
          }

          .cl-result-card-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .cl-card-actions {
            flex-direction: column;
          }
        }
      `}</style>

      <main className="sfl-page cl-page">
        <div className="sfl-container">
          <nav className="cl-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="cl-divider">/</span>
            <span className="cl-breadcrumb-current" aria-current="page">
              Clinics
            </span>
          </nav>
        </div>

        <section className="sfl-section-tight">
          <div className="sfl-container">
            <div className="cl-hero-panel">
              <div className="sfl-max-980 sfl-stack-5">
                <span className="cl-hero-kicker">Sound for Life Clinics</span>

                <h1 className="sfl-h1 sfl-max-760">
                  Find a Hearing Clinic Near You
                </h1>

                <p className="sfl-lead sfl-max-840">
                  Search by clinic name, city, area, or address to find the right
                  Sound for Life clinic and open its dedicated page.
                </p>

                <div className="cl-search-grid" aria-label="Clinic search">
                  <label className="cl-search-field">
                    <span>⌕</span>
                    <input
                      type="text"
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search by clinic name, city, area, or address"
                      aria-label="Search clinics"
                    />
                  </label>

                  <Link
                    href={buildCtaHref({
                      intent: "clinic-visit",
                      sourcePage: "clinics",
                      cta: "book-clinic-visit",
                      referrerSection: "hero",
                    })}
                    className="sfl-btn sfl-btn-primary sfl-btn-full-mobile"
                  >
                    Book Clinic Visit
                  </Link>

                  <Link
                    href={buildCtaHref({
                      intent: "clinic-visit",
                      sourcePage: "clinics",
                      cta: "request-callback",
                      referrerSection: "hero",
                    })}
                    className="sfl-btn sfl-btn-secondary sfl-btn-full-mobile"
                  >
                    Request Callback
                  </Link>
                </div>

                <div className="cl-results-meta">
                  {filteredClinics.length} clinic
                  {filteredClinics.length === 1 ? "" : "s"} found
                </div>

                <div className="cl-stats">
                  <div className="cl-stat">
                    <strong>{clinics.length}+</strong>
                    <span>Total Clinics</span>
                  </div>
                  <div className="cl-stat">
                    <strong>Mon–Sat</strong>
                    <span>10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="cl-stat">
                    <strong>India</strong>
                    <span>Multi-city support</span>
                  </div>
                </div>
              </div>
            </div>

            {filteredClinics.length === 0 ? (
              <div className="cl-empty">
                <h2 className="sfl-h3">No clinic matched your search</h2>
                <p className="sfl-body" style={{ marginTop: 12 }}>
                  Try searching by city, locality, or clinic name like Greater
                  Kailash, Janakpuri, Noida, Andheri, or Jayanagar.
                </p>
              </div>
            ) : (
              <div className="cl-results-grid">
                {filteredClinics.map((clinic) => (
                  <article
                    key={clinic.slug}
                    className="sfl-card sfl-card-hover cl-result-card"
                  >
                    <div className="sfl-card-body sfl-stack-4">
                      <div className="cl-result-card-top">
                        <div className="sfl-stack-2">
                          <span className="cl-city-badge">
                            {clinic.city}, {clinic.state}
                          </span>
                          <h3 className="sfl-h3">{clinic.centreName}</h3>
                        </div>

                        <div className="cl-city-status">Open for booking</div>
                      </div>

                      <p className="sfl-body cl-card-address">
                        {clinic.fullAddress}
                      </p>

                      <div className="cl-card-actions">
                        <Link
                          href={`/clinics/${clinic.slug}`}
                          className="sfl-btn sfl-btn-primary"
                        >
                          Book Clinic Visit
                        </Link>

                        <Link
                          href={buildCtaHref({
                            intent: "clinic-visit",
                            sourcePage: `clinic-${clinic.slug}`,
                            cta: "request-callback",
                            referrerSection: "directory-card",
                          })}
                          className="sfl-btn sfl-btn-secondary"
                        >
                          Request Callback
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}