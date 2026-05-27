import Link from "next/link";

type JourneyCard = {
  icon: string;
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
      <div className="container">
        <div className="section-header-shell fade-up">
          <h2 className="section-title">Start with what you need help with</h2>
          <div className="section-soft-panel fade-up delay-1">
            <p className="section-intro">
              Choose the area you want to explore and move toward the right next
              step with clearer hearing care guidance.
            </p>
          </div>
        </div>

        <div className="journey-grid premium-grid-glow">
          {cards.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className={`journey-card fade-up delay-${index % 3}`}
            >
              <div className="journey-icon" aria-hidden="true">
                <span className="journey-icon-emoji">{card.icon}</span>
              </div>

              <h3 className="card-title">{card.title}</h3>
              <p className="card-subtitle">{card.subtitle}</p>
              <p className="card-copy">{card.copy}</p>

              <Link className="link-cta" href={card.href}>
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .journey-icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          background: linear-gradient(145deg, #eef7fd, #ffffff);
          border: 1px solid rgba(13, 59, 125, 0.07);
          box-shadow: 0 10px 18px rgba(13, 59, 125, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .journey-icon-emoji {
          font-size: 24px;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
}