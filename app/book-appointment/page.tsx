// file: components/forms/MasterIntakeForm.tsx
"use client";

import { useMemo, useState } from "react";
import {
  DEFAULT_INTENT,
  getIntentContent,
  getIntentOptions,
  isCtaIntent,
  type CtaIntent,
} from "@/lib/cta";

type MasterIntakeFormProps = {
  initialIntent?: string;
  sourcePage?: string;
  cta?: string;
  referrerSection?: string;
};

type FormState = {
  name: string;
  phone: string;
  city: string;
  clinicOrState: string;
  service: CtaIntent;
};

export default function MasterIntakeForm({
  initialIntent,
  sourcePage = "",
  cta = "",
  referrerSection = "",
}: MasterIntakeFormProps) {
  const resolvedIntent = useMemo<CtaIntent>(() => {
    return isCtaIntent(initialIntent) ? initialIntent : DEFAULT_INTENT;
  }, [initialIntent]);

  const content = getIntentContent(resolvedIntent);
  const intentOptions = getIntentOptions();

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    city: "",
    clinicOrState: "",
    service: resolvedIntent,
  });

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = {
      ...form,
      intent: form.service,
      sourcePage,
      cta,
      referrerSection,
    };

    console.log("Master intake form submission:", payload);
    alert("Form captured successfully. Connect this to your CRM, Sheets, email API, or backend next.");
  }

  return (
    <>
      <style>{`
        :root {
          --mif-navy: #0d3b7d;
          --mif-blue: #0a5cae;
          --mif-blue-soft: #eef7fd;
          --mif-orange: #f4831f;
          --mif-orange-deep: #df7417;
          --mif-white: #ffffff;
          --mif-text: #223548;
          --mif-text-soft: #607184;
          --mif-line: rgba(13, 59, 125, 0.1);
          --mif-line-soft: rgba(13, 59, 125, 0.06);
          --mif-shadow-sm: 0 14px 30px rgba(13, 59, 125, 0.06);
          --mif-shadow-md: 0 20px 50px rgba(13, 59, 125, 0.1);
          --mif-shadow-lg: 0 28px 70px rgba(13, 59, 125, 0.14);
          --mif-radius-xl: 30px;
          --mif-radius-lg: 24px;
          --mif-radius-md: 18px;
        }

        * {
          box-sizing: border-box;
        }

        .mif-page {
          min-height: 100vh;
          padding-top: 126px;
          background:
            radial-gradient(circle at top left, rgba(232, 244, 253, 0.48), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
        }

        .mif-shell {
          min-height: calc(100vh - 126px);
          display: flex;
          align-items: center;
          padding: 24px 0 28px;
        }

        .mif-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .mif-card {
          position: relative;
          overflow: hidden;
          border-radius: var(--mif-radius-xl);
          border: 1px solid var(--mif-line);
          background:
            radial-gradient(circle at top right, rgba(244,131,31,0.08), transparent 20%),
            radial-gradient(circle at bottom left, rgba(10,92,174,0.08), transparent 26%),
            linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(247,251,255,0.98) 100%);
          box-shadow: var(--mif-shadow-lg);
        }

        .mif-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, var(--mif-orange) 0%, var(--mif-blue) 100%);
        }

        .mif-inner {
          position: relative;
          padding: 34px;
        }

        .mif-inner::after {
          content: "";
          position: absolute;
          right: -40px;
          top: -40px;
          width: 180px;
          height: 180px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(10,92,174,0.08), rgba(10,92,174,0));
          pointer-events: none;
        }

        .mif-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          color: var(--mif-orange);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .mif-kicker::before {
          content: "";
          width: 28px;
          height: 2px;
          background: rgba(244, 131, 31, 0.4);
        }

        .mif-header {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: flex-start;
          margin-bottom: 22px;
        }

        .mif-header-copy {
          max-width: 760px;
        }

        .mif-title {
          margin: 0;
          color: var(--mif-navy);
          font-size: 54px;
          line-height: 0.98;
          letter-spacing: -0.05em;
        }

        .mif-subtitle {
          margin: 14px 0 0;
          color: var(--mif-text-soft);
          font-size: 18px;
          line-height: 1.72;
          max-width: 760px;
        }

        .mif-intent-pill {
          min-height: 42px;
          padding: 10px 14px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #f3f9ff 0%, #ebf5ff 100%);
          border: 1px solid var(--mif-line-soft);
          color: var(--mif-blue);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          white-space: nowrap;
          box-shadow: var(--mif-shadow-sm);
        }

        .mif-meta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .mif-meta-chip {
          min-height: 38px;
          padding: 10px 14px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          background: rgba(255,255,255,0.96);
          border: 1px solid var(--mif-line-soft);
          color: var(--mif-navy);
          font-size: 12px;
          font-weight: 800;
          line-height: 1;
          box-shadow: 0 8px 18px rgba(13,59,125,0.04);
        }

        .mif-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 16px;
          align-items: end;
        }

        .mif-field {
          display: grid;
          gap: 10px;
        }

        .mif-span-3 {
          grid-column: span 3;
        }

        .mif-span-6 {
          grid-column: span 6;
        }

        .mif-span-12 {
          grid-column: span 12;
        }

        .mif-label {
          color: var(--mif-navy);
          font-size: 14px;
          font-weight: 800;
          line-height: 1.4;
        }

        .mif-input,
        .mif-select {
          width: 100%;
          min-height: 58px;
          padding: 0 18px;
          border-radius: 18px;
          border: 1px solid rgba(13,59,125,0.1);
          background: rgba(255,255,255,0.98);
          color: var(--mif-text);
          font-size: 16px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.7);
          transition: border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;
        }

        .mif-input::placeholder {
          color: #8b98a8;
        }

        .mif-input:focus,
        .mif-select:focus {
          outline: none;
          border-color: var(--mif-blue);
          box-shadow: 0 0 0 4px rgba(10,92,174,0.1);
          transform: translateY(-1px);
        }

        .mif-select {
          appearance: none;
          background-image:
            linear-gradient(45deg, transparent 50%, #5d6d80 50%),
            linear-gradient(135deg, #5d6d80 50%, transparent 50%);
          background-position:
            calc(100% - 18px) calc(50% - 3px),
            calc(100% - 12px) calc(50% - 3px);
          background-size: 6px 6px, 6px 6px;
          background-repeat: no-repeat;
          padding-right: 42px;
        }

        .mif-actions {
          grid-column: span 12;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: 4px;
          padding-top: 4px;
        }

        .mif-note {
          color: var(--mif-text-soft);
          font-size: 13px;
          line-height: 1.6;
          font-weight: 700;
        }

        .mif-submit {
          min-width: 240px;
          min-height: 58px;
          padding: 14px 24px;
          border: 0;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #f89a3f 0%, var(--mif-orange) 100%);
          color: var(--mif-white);
          font-size: 15px;
          font-weight: 800;
          box-shadow: 0 14px 28px rgba(244,131,31,0.24);
          cursor: pointer;
          transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease;
        }

        .mif-submit:hover {
          transform: translateY(-2px);
          background: linear-gradient(180deg, #f48b34 0%, var(--mif-orange-deep) 100%);
          box-shadow: 0 18px 34px rgba(244,131,31,0.28);
        }

        .mif-dots {
          position: absolute;
          left: 26px;
          bottom: 24px;
          display: flex;
          gap: 8px;
          pointer-events: none;
          opacity: 0.7;
        }

        .mif-dots span {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(10,92,174,0.18);
        }

        @media (max-width: 1080px) {
          .mif-title {
            font-size: 44px;
          }

          .mif-span-3 {
            grid-column: span 6;
          }

          .mif-span-6 {
            grid-column: span 12;
          }
        }

        @media (max-width: 767px) {
          .mif-page {
            padding-top: 126px;
          }

          .mif-shell {
            min-height: auto;
            padding: 18px 0 24px;
          }

          .mif-container {
            padding: 0 16px;
          }

          .mif-inner {
            padding: 22px;
          }

          .mif-header {
            flex-direction: column;
            margin-bottom: 18px;
          }

          .mif-title {
            font-size: 34px;
            line-height: 1.04;
          }

          .mif-subtitle {
            font-size: 16px;
            line-height: 1.68;
          }

          .mif-span-3,
          .mif-span-6,
          .mif-span-12 {
            grid-column: span 12;
          }

          .mif-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .mif-submit {
            width: 100%;
            min-width: 0;
          }
        }
      `}</style>

      <main className="mif-page">
        <section className="mif-shell">
          <div className="mif-container">
            <div className="mif-card">
              <div className="mif-inner">
                <div className="mif-header">
                  <div className="mif-header-copy">
                    <div className="mif-kicker">Tell Us About Your Requirement</div>
                    <h1 className="mif-title">{content.heading}</h1>
                    <p className="mif-subtitle">{content.subheading}</p>
                  </div>

                  <div className="mif-intent-pill">{content.optionLabel}</div>
                </div>

                {(sourcePage || cta || referrerSection) && (
                  <div className="mif-meta">
                    {sourcePage ? <div className="mif-meta-chip">Source: {sourcePage}</div> : null}
                    {cta ? <div className="mif-meta-chip">CTA: {cta}</div> : null}
                    {referrerSection ? (
                      <div className="mif-meta-chip">Section: {referrerSection}</div>
                    ) : null}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="intent" value={form.service} />
                  <input type="hidden" name="sourcePage" value={sourcePage} />
                  <input type="hidden" name="cta" value={cta} />
                  <input type="hidden" name="referrerSection" value={referrerSection} />

                  <div className="mif-grid">
                    <div className="mif-field mif-span-3">
                      <label className="mif-label" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        className="mif-input"
                        type="text"
                        placeholder="Enter your full name"
                        value={form.name}
                        onChange={(event) => updateField("name", event.target.value)}
                        required
                      />
                    </div>

                    <div className="mif-field mif-span-3">
                      <label className="mif-label" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        className="mif-input"
                        type="tel"
                        inputMode="tel"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={(event) => updateField("phone", event.target.value)}
                        required
                      />
                    </div>

                    <div className="mif-field mif-span-3">
                      <label className="mif-label" htmlFor="city">
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        className="mif-input"
                        type="text"
                        placeholder="Enter your city"
                        value={form.city}
                        onChange={(event) => updateField("city", event.target.value)}
                        required
                      />
                    </div>

                    <div className="mif-field mif-span-3">
                      <label className="mif-label" htmlFor="clinic">
                        Clinic
                      </label>
                      <input
                        id="clinic"
                        name="clinic"
                        className="mif-input"
                        type="text"
                        placeholder="Preferred clinic"
                        value={form.clinicOrState}
                        onChange={(event) => updateField("clinicOrState", event.target.value)}
                        required
                      />
                    </div>

                    <div className="mif-field mif-span-12">
                      <label className="mif-label" htmlFor="service">
                        What do you need help with?
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="mif-select"
                        value={form.service}
                        onChange={(event) =>
                          updateField("service", event.target.value as CtaIntent)
                        }
                        required
                      >
                        {intentOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mif-actions">
                      <div className="mif-note">
                        One shared form for every CTA across the website.
                      </div>

                      <button type="submit" className="mif-submit">
                        Submit Request
                      </button>
                    </div>
                  </div>
                </form>

                <div className="mif-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}