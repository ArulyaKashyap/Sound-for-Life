"use client";

import { useEffect, useState } from "react";

type PopupItem = {
  title: string;
  meta: string;
};

const popupItems: PopupItem[] = [
  { title: "A visitor in Noida requested a callback", meta: "Noida • 19 minutes ago" },
  { title: "A patient in Gurugram booked a consultation", meta: "Gurugram • 27 minutes ago" },
  { title: "A visitor in Mumbai scheduled a hearing test", meta: "Mumbai • 34 minutes ago" },
  { title: "A patient in Bengaluru enquired about hearing aids", meta: "Bengaluru • 41 minutes ago" },
  { title: "A visitor in Delhi booked a free hearing test", meta: "Delhi • 8 minutes ago" },
  { title: "A patient in Faridabad requested a clinic appointment", meta: "Faridabad • 14 minutes ago" },
  { title: "A visitor in Lucknow asked for hearing aid guidance", meta: "Lucknow • 21 minutes ago" },
  { title: "A patient in Jayanagar booked a consultation", meta: "Bengaluru • 29 minutes ago" },
  { title: "A visitor in Andheri scheduled a hearing check", meta: "Mumbai • 33 minutes ago" },
  { title: "A patient in Janakpuri requested a callback", meta: "Delhi • 38 minutes ago" },
  { title: "A visitor in Greater Kailash enquired about hearing aids", meta: "Delhi • 44 minutes ago" },
];

export default function SiteWidePopup() {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout> | null = null;

    const interval = window.setInterval(() => {
      const nextIndex = Math.floor(Math.random() * popupItems.length);
      setCurrentIndex(nextIndex);
      setVisible(true);

      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }

      hideTimeout = setTimeout(() => {
        setVisible(false);
      }, 2500);
    }, 5000);

    return () => {
      window.clearInterval(interval);
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, []);

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
          transition: opacity 250ms ease, transform 250ms ease;
        }

        .sfl-popup-hidden {
          opacity: 0;
          transform: translateY(16px);
          pointer-events: none;
        }

        .sfl-popup-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sfl-popup {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
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

        @media (max-width: 767px) {
          .sfl-popup-wrap {
            left: 12px;
            right: 12px;
            bottom: 12px;
            width: auto;
          }

          .sfl-popup {
            grid-template-columns: 38px minmax(0, 1fr);
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

      <div
        className={`sfl-popup-wrap ${visible ? "sfl-popup-visible" : "sfl-popup-hidden"}`}
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="sfl-popup">
          <div className="sfl-popup-icon">SFL</div>
          <div>
            <p className="sfl-popup-title">{currentItem.title}</p>
            <div className="sfl-popup-meta">{currentItem.meta}</div>
          </div>
        </div>
      </div>
    </>
  );
}