type TrustStripProps = {
  items: string[];
};

export default function TrustStrip({ items }: TrustStripProps) {
  return (
    <section className="trust-strip">
      <div className="container trust-grid">
        {items.map((item) => (
          <div className="trust-item fade-up" key={item}>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}