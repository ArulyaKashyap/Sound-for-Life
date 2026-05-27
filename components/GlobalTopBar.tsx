"use client";

import Link from "next/link";
import { buildCtaHref } from "@/lib/cta";

export default function GlobalTopBar() {
  const hearingTestHref = buildCtaHref({
    intent: "hearing-test",
    sourcePage: "global-topbar",
    cta: "Book My Hearing Test",
    referrerSection: "topbar",
  });

  const audiologistHref = buildCtaHref({
    intent: "audiologist",
    sourcePage: "global-topbar",
    cta: "Call Clinic",
    referrerSection: "topbar",
  });

  return (
    <>
      <style>{`
        .sfl-global-topbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1100;
          background: linear-gradient(90deg, #0d3b7d, #0b4f9f);
          color: #ffffff;
          border-bottom: 1px solid rgba(255,255,255,0.10);
        }

        .sfl-global-topbar-inner {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          min-height: 44px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          padding: 8px 28px;
          font-size: 12px;
        }

        .sfl-global-topbar-help {
          color: #ffffff;
          text-decoration: none;
          font-weight: 700;
          white-space: nowrap;
        }

        .sfl-global-topbar-help:hover {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .sfl-global-topbar-cta {
          padding: 9px 14px;
          border-radius: 999px;
          background: #f4831f;
          color: #ffffff;
          font-weight: 800;
          box-shadow: 0 12px 24px rgba(244,131,31,0.22);
          transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease;
          white-space: nowrap;
          text-decoration: none;
        }

        .sfl-global-topbar-cta:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 18px 28px rgba(244,131,31,0.28);
          background: #df7417;
        }

        @media (max-width: 767px) {
          .sfl-global-topbar-inner {
            min-height: 52px;
            padding: 10px 16px;
          }
        }
      `}</style>

      <div className="sfl-global-topbar">
        <div className="sfl-global-topbar-inner">
          <div>Choose Your Nearest Clinic</div>

          <Link className="sfl-global-topbar-help" href={audiologistHref}>
            Need help deciding? Call +919015401540 · Mon–Sat 10am–7pm
          </Link>

          <Link className="sfl-global-topbar-cta" href={hearingTestHref}>
            Book My Hearing Test →
          </Link>
        </div>
      </div>
    </>
  );
}