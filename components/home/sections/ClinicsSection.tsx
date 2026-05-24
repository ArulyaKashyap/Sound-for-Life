type Clinic = {
  city: string;
  locality: string;
  address: string;
};

type ClinicsSectionProps = {
  cityFilter: string;
  setCityFilter: React.Dispatch<React.SetStateAction<string>>;
  cityPills: string[];
  clinics: Clinic[];
};

export default function ClinicsSection({
  cityFilter,
  setCityFilter,
  cityPills,
  clinics,
}: ClinicsSectionProps) {
  return (
    <section className="section clinic-section">
      <div className="section-separator-top" />
      <div className="container">
        <div className="section-header-shell fade-up">
          <h2 className="section-title">Find expert hearing care near you</h2>
          <div className="section-soft-panel fade-up delay-1">
            <p className="section-intro">
              Choose your city and find the nearest Sound for Life clinic for a hearing
              test, hearing aid trial, fitting, repair, or aftercare support.
            </p>
            <p className="clinic-support">
              Use the clinic locator if you are searching for a hearing clinic near me,
              hearing aid near me, or hearing aid centre near me.
            </p>
          </div>
        </div>

        <div className="section-actions-row fade-up delay-2">
          <div className="section-chip-row">
            <span className="section-chip section-chip-active">Clinic-based care</span>
            <span className="section-chip">Audiologist-led support</span>
            <span className="section-chip">Multiple cities</span>
          </div>

          <a className="btn btn-secondary" href="/clinics">
            View All Clinics
          </a>
        </div>

        <div className="search-wrap fade-up delay-2">
          <input placeholder="Search by City" aria-label="Search by city" />
        </div>

        <div className="city-pills fade-up delay-2">
          {cityPills.map((city) => (
            <button
              key={city}
              type="button"
              className={`pill ${cityFilter === city ? "pill-active" : ""}`}
              onClick={() => setCityFilter(city)}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="clinics-grid premium-grid-glow">
          {clinics.map((clinic, index) => (
            <article
              className={`clinic-card fade-up delay-${index % 3}`}
              key={`${clinic.city}-${clinic.locality}`}
            >
              <div className="clinic-meta">
                <div className="clinic-city">{clinic.city}</div>
                <h3>{clinic.locality}</h3>
                <p className="clinic-address">{clinic.address}</p>
              </div>

              <div className="clinic-bottom">
                <div className="clinic-helper">
                  Book a visit or speak with the clinic team directly.
                </div>

                <div className="hero-cta-row" style={{ marginTop: 0 }}>
                  <a className="btn btn-secondary" href="tel:+919015401540">
                    Call Clinic
                  </a>
                  <a className="btn btn-primary" href="/book-hearing-test">
                    Book Hearing Test
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}