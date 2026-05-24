type JourneyCard = {
  title: string;
  subtitle: string;
  copy: string;
  cta: string;
  href: string;
};

type JourneySectionProps = {
  cards: JourneyCard[];
};

export default function JourneySection({ cards }: JourneySectionProps) {
  return (
    <section className="section">
      <div className="section-separator-top" />
      <div className="container">
        <div className="section-header-shell fade-up">
          <h2 className="section-title">What made you look for help today?</h2>
          <div className="section-soft-panel fade-up delay-1">
            <p className="section-intro">
              You do not need to know whether it is hearing loss, hearing impairment,
              tinnitus, or a temporary ear problem. Choose what feels closest to your
              situation, and we will guide you from there.
            </p>
          </div>
        </div>

        <div className="journey-grid premium-grid-glow">
          {cards.map((card, index) => (
            <article
              className={`journey-card fade-up delay-${index % 3}`}
              key={card.title}
            >
              <div className="journey-icon" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-subtitle">{card.subtitle}</p>
              <p className="card-copy">{card.copy}</p>
              <a className="link-cta" href={card.href}>
                {card.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}