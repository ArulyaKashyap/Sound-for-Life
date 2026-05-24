"use client";

import { useEffect, useState } from "react";

type PopupItem = {
  title: string;
  meta: string;
};

const popupItems: PopupItem[] = [
  {
    title: "A visitor in Delhi booked a hearing test",
    meta: "Delhi • 12 minutes ago",
  },
  {
    title: "A visitor in Noida requested a callback",
    meta: "Noida • 19 minutes ago",
  },
  {
    title: "A patient in Gurugram booked a consultation",
    meta: "Gurugram • 27 minutes ago",
  },
  {
    title: "A visitor in Mumbai scheduled a hearing test",
    meta: "Mumbai • 34 minutes ago",
  },
  {
    title: "A patient in Bengaluru enquired about hearing aids",
    meta: "Bengaluru • 41 minutes ago",
  },
];

export default function GlobalPurchasePopup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % popupItems.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  if (hidden) {
    return null;
  }

  const currentItem = popupItems[currentIndex];

  return (
    <>
      <style>{`
        .sfl-popup-wrap {
          position: fixed;
          left: 18px;
          bottom: 18px;
          z-index: 999;
          width: min(340px, calc(100vw - 32px));
        }

        .sfl-popup {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr) auto;
          gap: 12px;
          align-items: center;
          padding: 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(13, 59, 125, 0.1);
          box-shadow: 0 18px 34px rgba(13, 59, 125, 0.14);
          backdrop-filter: blur(10px);
        }

        .sfl-popup-icon {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, #0d3b7d, #0a5cae);
          color: #ffffff;
          font-size: 14px;
          font-weight: 800;
        }

        .sfl-popup-copy {
          min-width: 0;
        }

        .sfl-popup-title {
          margin: 0;
          color: #163760;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 800;
        }

        .sfl-popup-meta {
          margin-top: 3px;
          color: #6a788a;
          font-size: 12px;
          line-height: 1.45;
          font-weight: 700;
        }

        .sfl-popup-close {
          width: 30px;
          height: 30px;
          border: 0;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: rgba(13, 59, 125, 0.06);
          color: #163760;
          cursor: pointer;
          flex-shrink: 0;
        }

        .sfl-popup-close:hover {
          background: rgba(13, 59, 125, 0.1);
        }

        @media (max-width: 767px) {
          .sfl-popup-wrap {
            left: 12px;
            right: 12px;
            bottom: 12px;
            width: auto;
          }

          .sfl-popup {
            grid-template-columns: 38px minmax(0, 1fr) auto;
            gap: 10px;
            padding: 12px;
            border-radius: 16px;
          }

          .sfl-popup-icon {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            font-size: 13px;
          }
        }
      `}</style>

      <div className="sfl-popup-wrap" aria-live="polite" aria-atomic="true">
        <div className="sfl-popup">
          <div className="sfl-popup-icon">SFL</div>

          <div className="sfl-popup-copy">
            <p className="sfl-popup-title">{currentItem.title}</p>
            <div className="sfl-popup-meta">{currentItem.meta}</div>
          </div>

          <button
            type="button"
            className="sfl-popup-close"
            aria-label="Close popup"
            onClick={() => setHidden(true)}
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
}