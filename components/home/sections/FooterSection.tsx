export default function FooterSection() {
  return (
    <>
      <section className="section final-cta">
        <div className="section-separator-top" />
        <div className="container">
          <h2 className="section-title fade-up">
            You do not have to figure this out alone.
          </h2>

          <p className="final-subtitle fade-up delay-1">
            Start with a hearing test. Understand what is happening, speak to an
            audiologist, and leave with a clear next step.
          </p>

          <p className="final-support fade-up delay-2">
            Clear results. Audiologist-led guidance. No pressure.
          </p>

          <div
            className="hero-cta-row fade-up delay-2"
            style={{ justifyContent: "center", marginTop: 24 }}
          >
            <a className="btn btn-primary" href="/book-hearing-test">
              Book My Hearing Test
            </a>
            <a className="btn btn-ghost" href="/book-hearing-test">
              Talk to an Expert
            </a>
            <a className="btn btn-ghost" href="/clinics">
              Find a Clinic
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h3>Sound for Life</h3>
              <div className="footer-copy">
                Sound for Life helps people understand hearing loss, choose suitable
                hearing aids, and receive long-term support from certified hearing
                care professionals.
              </div>
              <div style={{ marginTop: 16, fontSize: 14 }}>
                Phone: +91 9015401540
              </div>
            </div>

            <div>
              <h4>Services</h4>
              <div className="footer-links">
                <a href="/hearing-loss">Hearing Loss</a>
                <a href="/hearing-aids">Hearing Aids</a>
                <a href="/services/hearing-test">Hearing Test</a>
                <a href="/services/free-trial">Free Hearing Aid Trial</a>
                <a href="/clinics">Clinics</a>
              </div>
            </div>

            <div>
              <h4>Stories & Education</h4>
              <div className="footer-links">
                <a href="/faqs">FAQ</a>
                <a href="/blogs">Blog</a>
                <a href="/about/free-hearing-aid-scheme-india">
                  Government Schemes
                </a>
                <a href="/about/adip-scheme">ADIP Scheme Guide</a>
                <a href="/blogs/how-to-read-my-audiogram">
                  How to Read My Audiogram
                </a>
              </div>
            </div>

            <div>
              <h4>Connect With Us</h4>
              <div className="footer-links">
                <a href="https://www.instagram.com/soundforlife_?igsh=Z3lpNHo4eGpvMmU3">
                  Instagram
                </a>
                <a href="https://www.facebook.com/share/1CkZAeWnZW/?mibextid=wwXIfr">
                  Facebook
                </a>
                <a href="https://youtube.com/@soundsoflifep?si=ID-rbk6mb7Mqc4Gh">
                  YouTube
                </a>
                <a href="https://www.linkedin.com/company/sflhearingsolutions/">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© Sound for Life. All rights reserved.</span>
            <span>Privacy Policy · Terms of Use · Sitemap</span>
          </div>
        </div>
      </footer>
    </>
  );
}