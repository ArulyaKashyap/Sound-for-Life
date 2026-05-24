"use client";

import { useEffect, useMemo, useState } from "react";

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

export default function SideActivityPopup() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [visible, setVisible] = useState(true);

  const currentItem = useMemo(() => popupItems[currentIndex], [currentIndex]);

  useEffect(() => {

    const cycleDurationMs = 5000;

    const showDurationMs = 3800;

    let hideTimeout: ReturnType<typeof setTimeout> | null = null;

    const showCurrent = () => {

      setVisible(true);

      if (hideTimeout) {

        clearTimeout(hideTimeout);

      }

      hideTimeout = setTimeout(() => {

        setVisible(false);

      }, showDurationMs);

    };

    showCurrent();

    const interval = window.setInterval(() => {

      setVisible(false);

      window.setTimeout(() => {

        setCurrentIndex((prev) => (prev + 1) % popupItems.length);

      }, 220);

    }, cycleDurationMs);

    return () => {

      window.clearInterval(interval);

      if (hideTimeout) {

        clearTimeout(hideTimeout);

      }

    };

  }, []);

  useEffect(() => {

    const hideTimeout = window.setTimeout(() => {

      setVisible(false);

    }, 3800);

    const showTimeout = window.setTimeout(() => {

      setVisible(true);

    }, 40);

    return () => {

      window.clearTimeout(hideTimeout);

      window.clearTimeout(showTimeout);

    };

  }, [currentIndex]);

  return (

    <>

      <style>{`

        .sfl-side-popup-wrap {

          position: fixed;

          right: 18px;

          top: 50%;

          transform: translateY(-50%);

          z-index: 998;

          width: min(390px, calc(100vw - 32px));

          pointer-events: none;

        }

        .sfl-side-popup-card {

          position: relative;

          overflow: hidden;

          display: grid;

          grid-template-columns: 56px minmax(0, 1fr);

          gap: 14px;

          align-items: center;

          padding: 16px 18px;

          border-radius: 22px;

          background:

            radial-gradient(circle at top right, rgba(255,255,255,0.45), transparent 28%),

            linear-gradient(180deg, #eef2f6 0%, #dde4ec 100%);

          border: 1px solid rgba(13, 59, 125, 0.12);

          box-shadow: 0 20px 40px rgba(13, 59, 125, 0.14);

          transition: opacity 220ms ease, transform 220ms ease;

        }

        .sfl-side-popup-card-visible {

          opacity: 1;

          transform: translateX(0);

        }

        .sfl-side-popup-card-hidden {

          opacity: 0;

          transform: translateX(-10px);

        }

        .sfl-side-popup-card::before {

          content: "";

          position: absolute;

          left: 0;

          top: 0;

          bottom: 0;

          width: 6px;

          background: linear-gradient(180deg, #f4831f 0%, #0a5cae 100%);

        }

        .sfl-side-popup-icon {

          width: 56px;

          height: 56px;

          border-radius: 18px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          background: linear-gradient(145deg, #0d3b7d, #0a5cae);

          color: #ffffff;

          font-size: 26px;

          box-shadow: 0 12px 24px rgba(13, 59, 125, 0.18);

          flex-shrink: 0;

        }

        .sfl-side-popup-content {

          min-width: 0;

        }

        .sfl-side-popup-kicker {

          display: inline-flex;

          align-items: center;

          gap: 8px;

          margin-bottom: 6px;

          color: #5b6b7e;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 0.12em;

          text-transform: uppercase;

        }

        .sfl-side-popup-kicker::before {

          content: "💡";

          font-size: 12px;

        }

        .sfl-side-popup-title {

          margin: 0;

          color: #163760;

          font-size: 16px;

          font-weight: 800;

          line-height: 1.45;

          letter-spacing: -0.01em;

        }

        .sfl-side-popup-meta {

          margin-top: 6px;

          color: #66778a;

          font-size: 13px;

          font-weight: 700;

          line-height: 1.5;

        }

        @media (max-width: 767px) {

          .sfl-side-popup-wrap {

            left: 12px;

            top: 50%;

            transform: translateY(-50%);

            width: min(340px, calc(100vw - 24px));

          }

          .sfl-side-popup-card {

            grid-template-columns: 48px minmax(0, 1fr);

            gap: 12px;

            padding: 14px;

            border-radius: 18px;

          }

          .sfl-side-popup-icon {

            width: 48px;

            height: 48px;

            border-radius: 14px;

            font-size: 22px;

          }

          .sfl-side-popup-title {

            font-size: 14px;

          }

          .sfl-side-popup-meta {

            font-size: 12px;

          }

        }

      `}</style>

      <div className="sfl-side-popup-wrap" aria-live="polite" aria-atomic="true">

        <div

          className={`sfl-side-popup-card ${

            visible ? "sfl-side-popup-card-visible" : "sfl-side-popup-card-hidden"

          }`}

        >

          <div className="sfl-side-popup-icon" aria-hidden="true">

            💡

          </div>

          <div className="sfl-side-popup-content">

            <div className="sfl-side-popup-kicker">Recent Activity</div>

            <p className="sfl-side-popup-title">{currentItem.title}</p>

            <div className="sfl-side-popup-meta">{currentItem.meta}</div>

          </div>

        </div>

      </div>

    </>

  );

}