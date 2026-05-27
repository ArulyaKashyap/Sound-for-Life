// components/Footer.tsx
export default function Footer() {
  return (
    <>
      <style>{`
        .sfl-footer {
          background:
            radial-gradient(circle at top left, rgba(10, 92, 174, 0.10), transparent 24%),
            linear-gradient(180deg, #0b0f16 0%, #090d14 100%);
          color: #ffffff;
          border-top: 1px solid rgba(255,255,255,0.06);
          overflow-x: hidden;
        }

        .sfl-footer-inner {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 64px 24px 28px;
        }

        .sfl-footer-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .sfl-footer-brand,
        .sfl-footer-col {
          min-width: 0;
        }

        .sfl-footer-brand h3,
        .sfl-footer-col h4 {
          margin: 0;
          color: #ffffff;
        }

        .sfl-footer-brand h3 {
          font-size: 24px;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .sfl-footer-brand p {
          margin: 18px 0 0;
          max-width: 380px;
          color: rgba(255,255,255,0.76);
          font-size: 14px;
          line-height: 1.9;
        }

        .sfl-footer-phone {
          margin-top: 18px;
          display: inline-block;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.6;
          word-break: break-word;
        }

        .sfl-footer-col h4 {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .sfl-footer-links {
          margin-top: 18px;
          display: grid;
          gap: 12px;
        }

        .sfl-footer-links a {
          display: inline-block;
          color: rgba(255,255,255,0.78);
          font-size: 14px;
          line-height: 1.55;
          transition: color 150ms ease, transform 150ms ease;
          word-break: break-word;
        }

        .sfl-footer-links a:hover {
          color: #ffffff;
          transform: translateX(3px);
        }

        .sfl-footer-divider {
          margin-top: 36px;
          height: 1px;
          background: rgba(255,255,255,0.10);
        }

        .sfl-footer-bottom {
          margin-top: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .sfl-footer-copy {
          color: rgba(255,255,255,0.62);
          font-size: 14px;
          line-height: 1.6;
        }

        .sfl-footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          color: rgba(255,255,255,0.62);
          font-size: 14px;
          line-height: 1.6;
        }

        .sfl-footer-bottom-links a {
          color: rgba(255,255,255,0.62);
          transition: color 150ms ease;
        }

        .sfl-footer-bottom-links a:hover {
          color: #ffffff;
        }

        .sfl-footer-dot {
          opacity: 0.5;
        }

        @media (max-width: 1100px) {
          .sfl-footer-inner {
            padding: 56px 24px 28px;
          }

          .sfl-footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 32px 24px;
          }

          .sfl-footer-brand p {
            max-width: 100%;
          }
        }

        @media (max-width: 767px) {
          .sfl-footer-inner {
            padding: 44px 16px 24px;
          }

          .sfl-footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .sfl-footer-brand h3 {
            font-size: 22px;
          }

          .sfl-footer-brand p,
          .sfl-footer-links a,
          .sfl-footer-copy,
          .sfl-footer-bottom-links,
          .sfl-footer-phone {
            font-size: 14px;
          }

          .sfl-footer-links {
            gap: 10px;
          }

          .sfl-footer-divider {
            margin-top: 28px;
          }

          .sfl-footer-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
          }

          .sfl-footer-bottom-links {
            gap: 6px 10px;
          }
        }

        @media (max-width: 480px) {
          .sfl-footer-inner {
            padding: 38px 14px 22px;
          }

          .sfl-footer-grid {
            gap: 24px;
          }

          .sfl-footer-brand h3 {
            font-size: 20px;
          }

          .sfl-footer-col h4 {
            font-size: 13px;
          }

          .sfl-footer-brand p {
            margin-top: 14px;
            line-height: 1.8;
          }

          .sfl-footer-phone {
            margin-top: 14px;
          }

          .sfl-footer-links {
            margin-top: 14px;
          }

          .sfl-footer-bottom-links {
            display: grid;
            gap: 6px;
          }

          .sfl-footer-dot {
            display: none;
          }
        }
      `}</style>

      <footer className="sfl-footer">
        <div className="sfl-footer-inner">
          <div className="sfl-footer-grid">
            <div className="sfl-footer-brand">
              <h3>Sound for Life</h3>
              <p>
                Sound for Life helps people understand hearing loss, choose suitable
                hearing aids, and receive long-term support from certified hearing care
                professionals.
              </p>
              <a className="sfl-footer-phone" href="tel:+919015401540">
                Phone: +91 9015401540
              </a>
            </div>

            <div className="sfl-footer-col">
              <h4>Services</h4>
              <div className="sfl-footer-links">
                <a href="/hearing-loss">Hearing Loss</a>
                <a href="/hearing-aids">Hearing Aids</a>
                <a href="/book-hearing-test">Hearing Test</a>
                <a href="/services/free-trial">Free Hearing Aid Trial</a>
                <a href="/clinics">Clinics</a>
              </div>
            </div>

            <div className="sfl-footer-col">
              <h4>Stories & Education</h4>
              <div className="sfl-footer-links">
                <a href="/faqs">FAQ</a>
                <a href="/blogs">Blog</a>
                <a href="/about/government-schemes">Government Schemes</a>
                <a href="/about/adip-scheme">ADIP Scheme Guide</a>
                <a href="/about/how-to-read-my-audiogram">How to Read My Audiogram</a>
              </div>
            </div>

            <div className="sfl-footer-col">
              <h4>Connect With Us</h4>
              <div className="sfl-footer-links">
                <a href="/instagram">Instagram</a>
                <a href="/facebook">Facebook</a>
                <a href="/youtube">YouTube</a>
                <a href="/linkedin">LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="sfl-footer-divider" />

          <div className="sfl-footer-bottom">
            <div className="sfl-footer-copy">
              © Sound for Life. All rights reserved.
            </div>

            <div className="sfl-footer-bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <span className="sfl-footer-dot">·</span>
              <a href="/terms-of-use">Terms of Use</a>
              <span className="sfl-footer-dot">·</span>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}