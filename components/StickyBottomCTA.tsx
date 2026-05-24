"use client";

export default function StickyBottomCTA() {
  return (
    <>
      <style>{`
        .sfl-sticky-cta {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999;
          padding: 12px 16px calc(12px + env(safe-area-inset-bottom));
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-top: 1px solid rgba(13, 59, 125, 0.10);
          box-shadow: 0 -10px 30px rgba(13, 59, 125, 0.08);
        }

        .sfl-sticky-cta-inner {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sfl-sticky-cta-btn {
          min-height: 56px;
          padding: 0 24px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 15px;
          font-weight: 800;
          line-height: 1;
          white-space: nowrap;
          text-decoration: none;
          transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease, border-color 150ms ease;
        }

        .sfl-sticky-cta-btn:hover {
          transform: translateY(-2px);
        }

        .sfl-sticky-cta-primary {
          background: linear-gradient(180deg, #f89a3f 0%, #f4831f 100%);
          color: #ffffff;
          box-shadow: 0 14px 28px rgba(244, 131, 31, 0.24);
        }

        .sfl-sticky-cta-primary:hover {
          background: linear-gradient(180deg, #f48b34 0%, #df7417 100%);
          box-shadow: 0 18px 32px rgba(244, 131, 31, 0.28);
        }

        .sfl-sticky-cta-secondary {
          background: #ffffff;
          color: #0d3b7d;
          border: 1px solid rgba(13, 59, 125, 0.14);
          box-shadow: 0 10px 20px rgba(13, 59, 125, 0.06);
        }

        .sfl-sticky-cta-secondary:hover {
          border-color: rgba(13, 59, 125, 0.22);
        }

        @media (max-width: 767px) {
          .sfl-sticky-cta {
            padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
          }

          .sfl-sticky-cta-inner {
            gap: 10px;
          }

          .sfl-sticky-cta-btn {
            flex: 1 1 0;
            min-width: 0;
            min-height: 52px;
            padding: 0 16px;
            font-size: 14px;
          }
        }
      `}</style>

      <div className="sfl-sticky-cta">
        <div className="sfl-sticky-cta-inner">
          <a className="sfl-sticky-cta-btn sfl-sticky-cta-primary" href="/book-hearing-test">
            Book Hearing Test
          </a>
          <a className="sfl-sticky-cta-btn sfl-sticky-cta-secondary" href="tel:+919015401540">
            Call Clinic
          </a>
        </div>
      </div>
    </>
  );
}