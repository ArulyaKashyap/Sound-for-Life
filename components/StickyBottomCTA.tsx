// components/StickyBottomCTA.tsx
"use client";

import Link from "next/link";
import { buildCtaHref } from "@/lib/cta";

export default function StickyBottomCTA() {
  const whatsappHref = "#";

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

        .sfl-sticky-cta-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1 1 auto;
          min-width: 0;
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
          transition:
            transform 150ms ease,
            box-shadow 150ms ease,
            background 150ms ease,
            border-color 150ms ease;
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

        .sfl-sticky-cta-whatsapp {
          width: 56px;
          height: 56px;
          flex: 0 0 56px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #2bd66b 0%, #18b957 100%);
          color: #ffffff;
          box-shadow: 0 14px 28px rgba(24, 185, 87, 0.22);
          transition:
            transform 150ms ease,
            box-shadow 150ms ease,
            background 150ms ease;
        }

        .sfl-sticky-cta-whatsapp:hover {
          transform: translateY(-2px);
          background: linear-gradient(180deg, #24c862 0%, #13a74d 100%);
          box-shadow: 0 18px 32px rgba(24, 185, 87, 0.28);
        }

        .sfl-sticky-cta-whatsapp svg {
          width: 26px;
          height: 26px;
          display: block;
        }

        @media (max-width: 767px) {
          .sfl-sticky-cta {
            padding: 10px 12px calc(10px + env(safe-area-inset-bottom));
          }

          .sfl-sticky-cta-inner {
            gap: 10px;
          }

          .sfl-sticky-cta-actions {
            gap: 10px;
            flex: 1 1 auto;
          }

          .sfl-sticky-cta-btn {
            flex: 1 1 0;
            min-width: 0;
            min-height: 52px;
            padding: 0 16px;
            font-size: 14px;
          }

          .sfl-sticky-cta-whatsapp {
            width: 52px;
            height: 52px;
            flex-basis: 52px;
          }

          .sfl-sticky-cta-whatsapp svg {
            width: 24px;
            height: 24px;
          }
        }
      `}</style>

      <div className="sfl-sticky-cta">
        <div className="sfl-sticky-cta-inner">
          <div className="sfl-sticky-cta-actions">
            <Link
              className="sfl-sticky-cta-btn sfl-sticky-cta-primary"
              href={buildCtaHref({
                intent: "hearing-test",
                sourcePage: "sticky-bottom-cta",
                cta: "Book Hearing Test",
                referrerSection: "sticky-footer",
              })}
            >
              Book Hearing Test
            </Link>

            <Link
              className="sfl-sticky-cta-btn sfl-sticky-cta-secondary"
              href={buildCtaHref({
                intent: "clinic-visit",
                sourcePage: "sticky-bottom-cta",
                cta: "Call Clinic",
                referrerSection: "sticky-footer",
              })}
            >
              Call Clinic
            </Link>
          </div>

          <a
            className="sfl-sticky-cta-whatsapp"
            href={whatsappHref}
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <path
                fill="currentColor"
                d="M19.11 17.2c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.76.95-.93 1.15-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.58-.49-.51-.66-.52h-.56c-.2 0-.51.07-.78.36-.27.29-1.02 1-.99 2.43.02 1.44 1.04 2.83 1.19 3.02.15.19 2.03 3.1 5 4.23.71.31 1.27.49 1.7.63.71.22 1.36.19 1.88.12.57-.08 1.72-.7 1.96-1.37.24-.66.24-1.24.17-1.36-.07-.12-.27-.19-.56-.34Z"
              />
              <path
                fill="currentColor"
                d="M16.02 3.2c-7.08 0-12.8 5.72-12.8 12.78 0 2.26.59 4.46 1.71 6.39L3.2 28.8l6.59-1.69a12.77 12.77 0 0 0 6.22 1.6h.01c7.06 0 12.78-5.72 12.78-12.79 0-3.42-1.33-6.64-3.75-9.05A12.7 12.7 0 0 0 16.02 3.2Zm0 23.35h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.24-3.91 1 1.04-3.81-.25-.39a10.6 10.6 0 0 1-1.64-5.63c0-5.84 4.75-10.6 10.59-10.6 2.83 0 5.49 1.1 7.49 3.1a10.5 10.5 0 0 1 3.1 7.49c0 5.84-4.75 10.6-10.61 10.6Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}