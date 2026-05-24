type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
  openFaq: number | null;
  setOpenFaq: React.Dispatch<React.SetStateAction<number | null>>;
};

export default function FAQSection({
  faqs,
  openFaq,
  setOpenFaq,
}: FAQSectionProps) {
  return (
    <section className="section faq-section">
      <div className="section-separator-top" />
      <div className="container">
        <div className="section-header-shell fade-up">
          <h2 className="section-title">Questions people ask before booking</h2>
        </div>

        <div className="faq-list premium-grid-glow">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <article
                className={`faq-item fade-up delay-${index % 3}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="faq-button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span className="faq-question">{faq.question}</span>
                  <span className={`faq-icon ${isOpen ? "faq-icon-open" : ""}`}>
                    +
                  </span>
                </button>

                <div
                  className={`faq-answer-wrap ${
                    isOpen ? "faq-answer-wrap-open" : ""
                  }`}
                >
                  <div className="faq-answer-inner">
                    <div className="faq-answer">{faq.answer}</div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="fade-up delay-2" style={{ marginTop: 20 }}>
          <a className="btn btn-secondary" href="/faqs">
            View All FAQs →
          </a>
        </div>
      </div>
    </section>
  );
}