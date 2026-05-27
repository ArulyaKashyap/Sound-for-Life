// file: components/home/sections/HeroSection.tsx
"use client";

import Link from "next/link";
import { buildCtaHref } from "@/lib/cta";

type HeroSectionProps = {
  form: {
    name: string;
    phone: string;
    city: string;
    clinic: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      phone: string;
      city: string;
      clinic: string;
    }>
  >;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default function HeroSection({
  form,
  setForm,
  onSubmit,
}: HeroSectionProps) {
  function handleHeroFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const href = buildCtaHref({
      intent: "hearing-test",
      sourcePage: "homepage",
      cta: "hero-form",
      referrerSection: form.city ? `hero-${form.city.toLowerCase()}` : "hero",
    });

    window.location.href = href;
  }

  const heroPrimaryHref = buildCtaHref({
    intent: "hearing-test",
    sourcePage: "homepage",
    cta: "hero-primary",
    referrerSection: "hero",
  });

  return (
    <section className="hero-split">
      <div className="hero-bg-fallback" />

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero-clinic.mp4" type="video/mp4" />
      </video>

      <div className="hero-video-overlay" />
      <div className="hero-noise" />

      <div className="container hero-split-shell">
        <div className="hero-split-grid">
          <div className="hero-content fade-up">
            <div className="hero-kicker">
              Trusted hearing care for Indian families
            </div>

            <h1 className="hero-heading">
              When conversations start
              <br />
              feeling distant, start here.
            </h1>

            <p className="hero-lead">
              If voices feel unclear, TV volume keeps rising, or someone you love
              has started withdrawing from conversations, a hearing test can help
              you understand what is happening.
            </p>

            <p className="hero-subcopy">
              Clear answers. Calm guidance. No confusing medical language.
            </p>

            <div className="hero-cta-row">
              <Link className="btn btn-primary" href={heroPrimaryHref}>
                Book My Hearing Test
              </Link>

              <a className="btn hero-secondary-btn" href="#how-it-works">
                How It Works
              </a>
            </div>
          </div>

          <div className="hero-form-wrap fade-up delay-1">
            <div className="hero-form-card">
              <div className="hero-form-card-top">
                <h2 className="hero-form-heading">Get Consultation</h2>
                <p className="hero-form-text">
                  It takes less than 30 seconds. Our team will call to confirm
                  your nearest clinic and preferred time.
                </p>
              </div>

              <form onSubmit={handleHeroFormSubmit} className="hero-inline-form">
                <div className="hero-form-stack">
                  <input
                    className="hero-clean-input"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        name: e.target.value,
                      }))
                    }
                  />

                  <select
                    className="hero-clean-input hero-clean-select"
                    value={form.city}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        city: e.target.value,
                      }))
                    }
                  >
                    <option value="">Select City</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Noida">Noida</option>
                    <option value="Gurugram">Gurugram</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="Lucknow">Lucknow</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Bengaluru">Bengaluru</option>
                  </select>

                  <input
                    className="hero-clean-input"
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        phone: e.target.value,
                      }))
                    }
                  />

                  <button className="btn btn-primary hero-form-submit" type="submit">
                    Book My Hearing Test
                  </button>
                </div>

                <div className="hero-form-footnote">
                  No obligation. Audiologist guidance available.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}