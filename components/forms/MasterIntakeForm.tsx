"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  DEFAULT_INTENT,
  getIntentContent,
  getIntentOptions,
  isCtaIntent,
  type CtaIntent,
} from "@/lib/cta";

type MasterIntakeFormProps = {
  initialIntent?: string | null;
  sourcePage?: string | null;
  cta?: string | null;
  referrerSection?: string | null;
};

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  city: string;
  service: CtaIntent;
  notes: string;
};

const intentOptions = getIntentOptions();

export default function MasterIntakeForm({
  initialIntent,
  sourcePage,
  cta,
  referrerSection,
}: MasterIntakeFormProps) {
  const resolvedIntent: CtaIntent = isCtaIntent(initialIntent)
    ? initialIntent
    : DEFAULT_INTENT;

  const [form, setForm] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    service: resolvedIntent,
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const content = useMemo(() => getIntentContent(form.service), [form.service]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          phone: form.phone.trim(),
          email: form.email.trim(),
          city: form.city.trim(),
          intent: form.service,
          notes: form.notes.trim(),
          sourcePage: sourcePage ?? "",
          cta: cta ?? "",
          referrerSection: referrerSection ?? "",
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("success");
      setMessage(data.message || "Thanks. Our team will contact you shortly.");

      setForm((prev) => ({
        ...prev,
        fullName: "",
        phone: "",
        email: "",
        city: "",
        notes: "",
      }));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unable to submit the form.";
      setStatus("error");
      setMessage(errorMessage);
    }
  }

  return (
    <>
      <style>{`
        .mi-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(232, 244, 253, 0.45), transparent 30%),
            linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          padding: 126px 0 72px;
        }

        .mi-container {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .mi-shell {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(320px, 1.08fr);
          gap: 24px;
          align-items: start;
        }

        .mi-info-card,
        .mi-form-card {
          border-radius: 24px;
          border: 1px solid rgba(13, 59, 125, 0.1);
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 18px 42px rgba(13, 59, 125, 0.08);
        }

        .mi-info-card {
          padding: 28px;
          background:
            radial-gradient(circle at top right, rgba(255,255,255,0.08), transparent 24%),
            linear-gradient(135deg, #082e63 0%, #0a5cae 100%);
          color: #ffffff;
          box-shadow: 0 28px 70px rgba(13, 59, 125, 0.14);
        }

        .mi-form-card {
          padding: 28px;
        }

        .mi-kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          color: #f4831f;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .mi-kicker::before {
          content: "";
          width: 24px;
          height: 2px;
          background: rgba(244, 131, 31, 0.45);
        }

        .mi-h1 {
          margin: 0;
          color: #0d3b7d;
          font-size: 42px;
          line-height: 1.08;
          letter-spacing: -0.04em;
        }

        .mi-form-card .mi-body {
          color: #5d6d80;
        }

        .mi-info-card .mi-h2,
        .mi-info-card .mi-body,
        .mi-info-card .mi-meta,
        .mi-info-card .mi-list li {
          color: #ffffff;
        }

        .mi-h2 {
          margin: 0;
          font-size: 26px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .mi-body {
          margin: 0;
          font-size: 15px;
          line-height: 1.85;
        }

        .mi-stack > * + * {
          margin-top: 14px;
        }

        .mi-list {
          margin: 8px 0 0;
          padding-left: 18px;
          display: grid;
          gap: 8px;
          font-size: 14px;
          line-height: 1.72;
        }

        .mi-meta {
          margin-top: 18px;
          padding: 16px;
          border-radius: 18px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.14);
          font-size: 13px;
          line-height: 1.72;
        }

        .mi-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .mi-field {
          display: grid;
          gap: 8px;
        }

        .mi-field-full {
          grid-column: 1 / -1;
        }

        .mi-label {
          color: #0d3b7d;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.4;
        }

        .mi-input,
        .mi-select,
        .mi-textarea {
          width: 100%;
          min-height: 52px;
          border-radius: 16px;
          border: 1px solid rgba(13, 59, 125, 0.14);
          background: #ffffff;
          padding: 14px 16px;
          font: inherit;
          color: #263445;
          outline: none;
          transition: border-color 150ms ease, box-shadow 150ms ease;
        }

        .mi-textarea {
          min-height: 132px;
          resize: vertical;
        }

        .mi-input:focus,
        .mi-select:focus,
        .mi-textarea:focus {
          border-color: #0a5cae;
          box-shadow: 0 0 0 4px rgba(10, 92, 174, 0.08);
        }

        .mi-submit {
          min-height: 54px;
          padding: 14px 24px;
          border: 0;
          border-radius: 999px;
          background: linear-gradient(180deg, #f89a3f 0%, #f4831f 100%);
          color: #ffffff;
          font: inherit;
          font-weight: 800;
          cursor: pointer;
          transition: transform 150ms ease, box-shadow 150ms ease;
          box-shadow: 0 14px 28px rgba(244, 131, 31, 0.24);
        }

        .mi-submit:hover {
          transform: translateY(-2px);
        }

        .mi-submit:disabled {
          opacity: 0.75;
          cursor: not-allowed;
          transform: none;
        }

        .mi-status {
          margin-top: 16px;
          padding: 14px 16px;
          border-radius: 16px;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.6;
        }

        .mi-status-success {
          background: #effaf2;
          color: #1d6b3a;
          border: 1px solid rgba(29, 107, 58, 0.14);
        }

        .mi-status-error {
          background: #fff4f4;
          color: #a33131;
          border: 1px solid rgba(163, 49, 49, 0.14);
        }

        @media (max-width: 980px) {
          .mi-shell {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 767px) {
          .mi-page {
            padding: 118px 0 56px;
          }

          .mi-container {
            padding: 0 16px;
          }

          .mi-form-card,
          .mi-info-card {
            padding: 22px;
          }

          .mi-h1 {
            font-size: 32px;
          }

          .mi-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="mi-page">
        <div className="mi-container">
          <div className="mi-shell">
            <aside className="mi-info-card">
              <div className="mi-stack">
                <div className="mi-kicker">Single CTA Form</div>
                <h2 className="mi-h2">{content.heading}</h2>
                <p className="mi-body">{content.subheading}</p>

                <ul className="mi-list">
                  <li>One shared form for every CTA across the website</li>
                  <li>Auto-matched service intent based on the button clicked</li>
                  <li>Hidden source tracking for page, CTA, and section</li>
                </ul>

                <div className="mi-meta">
                  <div><strong>Source page:</strong> {sourcePage || "Not provided"}</div>
                  <div><strong>CTA clicked:</strong> {cta || "Not provided"}</div>
                  <div><strong>Section:</strong> {referrerSection || "Not provided"}</div>
                </div>
              </div>
            </aside>

            <div className="mi-form-card">
              <div className="mi-stack" style={{ marginBottom: 22 }}>
                <div className="mi-kicker">Tell Us About Your Requirement</div>
                <h1 className="mi-h1">{content.heading}</h1>
                <p className="mi-body">{content.subheading}</p>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="mi-grid">
                  <div className="mi-field">
                    <label className="mi-label" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      className="mi-input"
                      type="text"
                      autoComplete="name"
                      value={form.fullName}
                      onChange={(event) => updateField("fullName", event.target.value)}
                      required
                    />
                  </div>

                  <div className="mi-field">
                    <label className="mi-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      className="mi-input"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(event) => updateField("phone", event.target.value)}
                      required
                    />
                  </div>

                  <div className="mi-field">
                    <label className="mi-label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="mi-input"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                    />
                  </div>

                  <div className="mi-field">
                    <label className="mi-label" htmlFor="city">
                      City
                    </label>
                    <input
                      id="city"
                      className="mi-input"
                      type="text"
                      autoComplete="address-level2"
                      value={form.city}
                      onChange={(event) => updateField("city", event.target.value)}
                      required
                    />
                  </div>

                  <div className="mi-field mi-field-full">
                    <label className="mi-label" htmlFor="service">
                      What do you need help with?
                    </label>
                    <select
                      id="service"
                      className="mi-select"
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

                  <div className="mi-field mi-field-full">
                    <label className="mi-label" htmlFor="notes">
                      Additional Notes
                    </label>
                    <textarea
                      id="notes"
                      className="mi-textarea"
                      placeholder="Tell us briefly what you are looking for."
                      value={form.notes}
                      onChange={(event) => updateField("notes", event.target.value)}
                    />
                  </div>

                  <div className="mi-field mi-field-full">
                    <button className="mi-submit" type="submit" disabled={status === "submitting"}>
                      {status === "submitting" ? "Submitting..." : "Submit Request"}
                    </button>
                  </div>
                </div>
              </form>

              {message ? (
                <div
                  className={`mi-status ${
                    status === "success" ? "mi-status-success" : "mi-status-error"
                  }`}
                >
                  {message}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
