type Step = {
  title: string;
  copy: string;
};

type HowItWorksSectionProps = {
  steps: Step[];
};

export default function HowItWorksSection({
  steps,
}: HowItWorksSectionProps) {
  return (
    <section className="section how-section" id="how-it-works">
      <div className="section-separator-top" />
      <div className="container">
        <div className="section-header-shell fade-up">
          <h2 className="section-title">From worry to clarity in three simple steps</h2>
          <div className="section-soft-panel fade-up delay-1">
            <p className="section-intro">
              Most people delay hearing care because they worry they will be pushed
              into buying something. At Sound for Life, the first step is only to
              understand your hearing.
            </p>
          </div>
        </div>

        <div className="steps-grid premium-grid-glow">
          {steps.map((step, index) => (
            <article className={`step-card fade-up delay-${index}`} key={step.title}>
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}