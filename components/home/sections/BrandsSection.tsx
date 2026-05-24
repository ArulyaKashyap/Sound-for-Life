type Brand = {
  name: string;
  models: string;
};

type BrandTone = {
  accent: string;
  soft: string;
  mark: string;
  note: string;
  href: string;
};

type BrandsSectionProps = {
  brands: Brand[];
  getBrandTone: (name: string) => BrandTone;
};

export default function BrandsSection({
  brands,
  getBrandTone,
}: BrandsSectionProps) {
  return (
    <section className="section">
      <div className="section-separator-top" />
      <div className="container brands-premium-shell">
        <div className="section-header-shell fade-up">
          <h2 className="section-title">Trusted hearing aid brands, matched to your needs</h2>
          <div className="section-soft-panel fade-up delay-1">
            <p className="section-intro">
              The right hearing aid is not chosen by brand name alone. It depends on your
              hearing profile, comfort, lifestyle, daily listening needs, and budget.
            </p>
          </div>
        </div>

        <div className="brands-top-row fade-up delay-2">
          <div className="brands-pill-row">
            <span className="brands-pill">Multi-brand comparison</span>
            <span className="brands-pill">Audiologist guidance</span>
            <span className="brands-pill">Trial support available</span>
          </div>

          <a className="btn btn-secondary" href="/hearing-aids/compare">
            Compare Hearing Aid Options →
          </a>
        </div>

        <div className="brands-grid-premium premium-grid-glow">
          {brands.map((brand, index) => {
            const tone = getBrandTone(brand.name);
            const modelList = brand.models.split(",").map((item) => item.trim());

            return (
              <article
                key={brand.name}
                className={`brand-premium-card fade-up delay-${index % 3}`}
                style={{ background: tone.soft }}
              >
                <div className="brand-premium-top">
                  <div
                    className="brand-premium-mark"
                    style={{ background: `linear-gradient(145deg, ${tone.accent}, #0d3b7d)` }}
                  >
                    {tone.mark}
                  </div>

                  <div className="brand-premium-head">
                    <div className="brand-kicker">Associated Brand</div>
                    <h3 className="brand-premium-name">{brand.name}</h3>
                  </div>
                </div>

                <p className="brand-premium-copy">
                  Explore leading options from {brand.name} with audiologist-led guidance around fit,
                  listening comfort, technology level, and daily use suitability.
                </p>

                <div className="brand-model-chip-row">
                  {modelList.map((model) => (
                    <span key={model} className="brand-model-chip">
                      {model}
                    </span>
                  ))}
                </div>

                <div className="brand-premium-footer">
                  <div className="brand-note">{tone.note}</div>

                  <div className="brand-link-row">
                    <a className="brand-link" href={tone.href}>
                      Explore {brand.name} →
                    </a>
                    <span className="brand-compare-tag">Audiologist matched</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="brands-copy fade-up delay-2">
          At Sound for Life, our audiologists help you compare leading hearing aid options across trusted
          brands like Signia hearing aid, Phonak hearing aids, and ReSound hearing aids.
        </p>
      </div>
    </section>
  );
}