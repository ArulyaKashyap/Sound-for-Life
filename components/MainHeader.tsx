// components/MainHeader.tsx
"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type NavLink = {
  label: string;
  href: string;
};

type NavGroup = {
  heading: string;
  links: NavLink[];
};

type NavItem = {
  title: string;
  href: string;
  groups: NavGroup[];
};

const navItems: NavItem[] = [
  {
    title: "Hearing Loss",
    href: "/hearing-loss",
    groups: [
      {
        heading: "Common Hearing Problems",
        links: [
          { label: "I Cannot Hear Clearly", href: "/hearing-loss/i-cannot-hear-clearly" },
          { label: "People Sound Unclear", href: "/hearing-loss/people-sound-unclear" },
          { label: "I Keep Asking People to Repeat", href: "/hearing-loss/i-keep-asking-people-to-repeat" },
          { label: "I Increase TV or Phone Volume", href: "/hearing-loss/i-increase-tv-or-phone-volume" },
          { label: "I Hear Ringing in My Ears", href: "/hearing-loss/i-hear-ringing-in-my-ears" },
          { label: "One Ear Feels Blocked", href: "/hearing-loss/one-ear-feels-blocked" },
          { label: "Sudden Hearing Problem", href: "/hearing-loss/sudden-hearing-problem" },
          { label: "Hearing Problem After Ear Infection", href: "/hearing-loss/hearing-problem-after-ear-infection" },
        ],
      },
      {
        heading: "Who",
        links: [
          { label: "Hearing Problems in Parents / Seniors", href: "/hearing-loss/hearing-problems-in-parents-seniors" },
          { label: "Hearing Problems in Children", href: "/hearing-loss/hearing-problems-in-children" },
          { label: "Helping a Family Member Hear Better", href: "/hearing-loss/helping-a-family-member-hear-better" },
        ],
      },
      {
        heading: "How",
        links: [
          { label: "Do I Need a Hearing Test?", href: "/hearing-loss/do-i-need-a-hearing-test" },
          { label: "Should I Visit an Audiologist?", href: "/hearing-loss/should-i-visit-an-audiologist" },
          { label: "Is It Hearing Loss or Ear Blockage?", href: "/hearing-loss/is-it-hearing-loss-or-ear-blockage" },
          { label: "Take an Online Hearing Check", href: "/hearing-loss/take-an-online-hearing-check" },
          { label: "Book a Hearing Test", href: "/book-hearing-test" },
        ],
      },
    ],
  },
  {
    title: "Hearing Aids",
    href: "/hearing-aids",
    groups: [
      {
        heading: "Types",
        links: [
          { label: "RIC Hearing Aids", href: "/hearing-aids/ric-hearing-aids" },
          { label: "BTE Hearing Aids", href: "/hearing-aids/bte-hearing-aids" },
          { label: "ITE Hearing Aids", href: "/hearing-aids/ite-hearing-aids" },
          { label: "CIC Hearing Aids", href: "/hearing-aids/cic-hearing-aids" },
          { label: "IIC Hearing Aids", href: "/hearing-aids/iic-hearing-aids" },
          { label: "Invisible Hearing Aids", href: "/hearing-aids/invisible-hearing-aids" },
          { label: "Rechargeable Hearing Aids", href: "/hearing-aids/rechargeable-hearing-aids" },
          { label: "Bluetooth Hearing Aids", href: "/hearing-aids/bluetooth-hearing-aids" },
        ],
      },
      {
        heading: "Brands",
        links: [
          { label: "Brand Hub", href: "/hearing-aids/brands" },
          { label: "Signia Hearing Aids", href: "/hearing-aids/brands/signia" },
          { label: "Phonak Hearing Aids", href: "/hearing-aids/brands/phonak" },
          { label: "Unitron Hearing Aids", href: "/hearing-aids/brands/unitron" },
          { label: "ReSound Hearing Aids", href: "/hearing-aids/brands/resound" },
          { label: "Sonic Hearing Aids", href: "/hearing-aids/brands/sonic" },
          { label: "A&M Hearing Aids", href: "/hearing-aids/brands/am" },
        ],
      },
    ],
  },
  {
    title: "Services",
    href: "/services",
    groups: [
      {
        heading: "Our Services",
        links: [
          { label: "Hearing Test", href: "/services/hearing-test" },
          { label: "Hearing Aid Trial", href: "/services/free-trial" },
          { label: "Hearing Aid Fitting", href: "/services/hearing-aid-fitting" },
          { label: "Home Visit", href: "/services/home-visit" },
          { label: "Repair & Servicing", href: "/services/hearing-aid-repair-servicing" },
          { label: "Aftercare Support", href: "/services/aftercare-support" },
          { label: "Device Setup & Guidance", href: "/services/device-setup-guidance" },
          { label: "EMI & Payment Support", href: "/services/easy-payment-support" },
        ],
      },
    ],
  },
  {
    title: "Clinics",
    href: "/clinics",
    groups: [
      {
        heading: "Find a Clinic",
        links: [
          { label: "View All Locations", href: "/clinics" },
          { label: "Delhi", href: "/clinics/delhi" },
          { label: "Noida", href: "/clinics/noida" },
          { label: "Gurugram", href: "/clinics/gurugram" },
          { label: "Faridabad", href: "/clinics/faridabad" },
          { label: "Lucknow", href: "/clinics/lucknow" },
          { label: "Mumbai", href: "/clinics/mumbai" },
          { label: "Bengaluru", href: "/clinics/bengaluru" },
        ],
      },
    ],
  },
  {
    title: "Stories & Education",
    href: "/stories",
    groups: [
      {
        heading: "Explore",
        links: [
          { label: "Stories", href: "/stories" },
          { label: "Testimonials", href: "/testimonials" },
          { label: "Blogs", href: "/blogs" },
          { label: "FAQs", href: "/faqs" },
        ],
      },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    groups: [
      {
        heading: "About SFL",
        links: [
          { label: "About Sound for Life", href: "/about" },
          { label: "Our Story", href: "/about/our-story" },
          { label: "Why SFL", href: "/about/why-sfl" },
          { label: "Our Audiologists", href: "/about/our-audiologists" },
        ],
      },
    ],
  },
];

export default function MainHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function handleMenuEnter(item: NavItem) {
    clearCloseTimer();
    setOpenMenu(item.title);
    setActiveGroup(null);
  }

  function handleMenuLeave() {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      setActiveGroup(null);
    }, 180);
  }

  function toggleMobileMenu() {
    setMobileMenuOpen((current) => {
      const next = !current;
      if (!next) {
        setOpenMobileSection(null);
        setOpenMobileGroup(null);
      }
      return next;
    });
  }

  function toggleMobileSection(title: string) {
    setOpenMobileSection((current) => {
      const next = current === title ? null : title;
      setOpenMobileGroup(null);
      return next;
    });
  }

  function toggleMobileGroup(sectionTitle: string, heading: string) {
    const key = `${sectionTitle}::${heading}`;
    setOpenMobileGroup((current) => (current === key ? null : key));
  }

  return (
    <>
      <style>{`
        .sfl-header-wrap {
          position: fixed;
          top: 44px;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1090;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1px solid rgba(13, 59, 125, 0.08);
          box-shadow: 0 10px 30px rgba(13, 59, 125, 0.04);
        }

        .sfl-header {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .sfl-header-bar {
          min-height: 82px;
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 24px;
        }

        .sfl-logo {
          display: inline-flex;
          align-items: center;
          min-width: 0;
          flex-shrink: 0;
        }

        .sfl-logo-image {
          width: 220px;
          height: auto;
          object-fit: contain;
          display: block;
        }

        .sfl-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-width: 0;
        }

        .sfl-nav-item {
          position: relative;
          padding: 8px 0 12px;
          margin: -8px 0 -12px;
        }

        .sfl-nav-trigger {
          min-height: 42px;
          padding: 0 8px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #163760;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: -0.01em;
          white-space: nowrap;
          transition: color 160ms ease;
        }

        .sfl-nav-trigger:hover,
        .sfl-nav-trigger-active {
          color: #0d3b7d;
        }

        .sfl-nav-caret {
          font-size: 10px;
          opacity: 0.62;
        }

        .sfl-level-1 {
          position: absolute;
          top: calc(100% - 2px);
          left: 0;
          min-width: 220px;
          padding-top: 4px;
          z-index: 1001;
        }

        .sfl-level-1-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 10px 12px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 16px 36px rgba(13, 59, 125, 0.10);
          border: 1px solid rgba(13, 59, 125, 0.06);
        }

        .sfl-level-1-item {
          position: relative;
          width: max-content;
          min-width: 210px;
        }

        .sfl-level-1-link {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          min-height: 26px;
          color: #15365d;
          font-size: 15px;
          font-weight: 800;
          line-height: 1.5;
          transition: color 160ms ease, transform 160ms ease;
        }

        .sfl-level-1-item:hover > .sfl-level-1-link,
        .sfl-level-1-link-active {
          color: #0a5cae;
          transform: translateX(2px);
        }

        .sfl-level-1-arrow {
          font-size: 12px;
          opacity: 0.55;
        }

        .sfl-level-2 {
          position: absolute;
          top: -8px;
          left: calc(100% + 12px);
          min-width: 290px;
          z-index: 1002;
        }

        .sfl-level-2-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 12px 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 16px 36px rgba(13, 59, 125, 0.10);
          border: 1px solid rgba(13, 59, 125, 0.06);
        }

        .sfl-level-2-link {
          display: inline-flex;
          align-items: center;
          min-height: 24px;
          color: #284868;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.55;
          transition: color 160ms ease, transform 160ms ease;
          white-space: nowrap;
        }

        .sfl-level-2-link:hover {
          color: #0a5cae;
          transform: translateX(2px);
        }

        .sfl-mobile-toggle {
          display: none;
          width: 46px;
          height: 46px;
          border-radius: 14px;
          align-items: center;
          justify-content: center;
          color: #0d3b7d;
          cursor: pointer;
        }

        .sfl-mobile-toggle-lines {
          width: 20px;
          height: 14px;
          display: grid;
          align-content: space-between;
        }

        .sfl-mobile-toggle-lines span {
          display: block;
          height: 2px;
          border-radius: 999px;
          background: currentColor;
          transition: transform 180ms ease, opacity 180ms ease;
        }

        .sfl-mobile-toggle-open .sfl-mobile-toggle-lines span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .sfl-mobile-toggle-open .sfl-mobile-toggle-lines span:nth-child(2) {
          opacity: 0;
        }

        .sfl-mobile-toggle-open .sfl-mobile-toggle-lines span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        .sfl-mobile-menu {
          display: none;
          padding: 0 0 18px;
          border-top: 1px solid rgba(13, 59, 125, 0.06);
        }

        .sfl-mobile-menu-inner {
          padding-top: 12px;
          display: grid;
          gap: 10px;
        }

        .sfl-mobile-section {
          border-bottom: 1px solid rgba(13, 59, 125, 0.06);
          padding-bottom: 10px;
        }

        .sfl-mobile-section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .sfl-mobile-section-link {
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          color: #15365d;
          font-size: 15px;
          font-weight: 800;
        }

        .sfl-mobile-section-toggle {
          min-width: 36px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #15365d;
          font-size: 14px;
          cursor: pointer;
        }

        .sfl-mobile-section-body {
          padding: 8px 0 0 10px;
          display: grid;
          gap: 10px;
        }

        .sfl-mobile-group {
          display: grid;
          gap: 6px;
        }

        .sfl-mobile-group-toggle {
          min-height: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: #274868;
          font-size: 14px;
          font-weight: 800;
          text-align: left;
          cursor: pointer;
        }

        .sfl-mobile-group-links {
          padding: 4px 0 2px 12px;
          display: grid;
          gap: 8px;
        }

        .sfl-mobile-link {
          color: #47627e;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.5;
        }

        .sfl-mobile-cta {
          margin-top: 10px;
          min-height: 48px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #f89a3f 0%, #f4831f 100%);
          color: #fff;
          font-size: 14px;
          font-weight: 800;
          box-shadow: 0 16px 30px rgba(244, 131, 31, 0.20);
        }

        @media (max-width: 1180px) {
          .sfl-nav {
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 8px;
          }

          .sfl-nav-trigger {
            font-size: 13px;
          }

          .sfl-logo-image {
            width: 190px;
          }
        }

        @media (max-width: 900px) {
          .sfl-header-wrap {
            top: 52px;
          }

          .sfl-header {
            padding: 0 16px;
          }

          .sfl-nav {
            display: none;
          }

          .sfl-mobile-toggle {
            display: inline-flex;
            justify-self: end;
          }

          .sfl-header-bar {
            grid-template-columns: auto 1fr auto;
            gap: 12px;
            min-height: 74px;
          }

          .sfl-logo-image {
            width: 170px;
          }

          .sfl-mobile-menu {
            display: block;
          }
        }

        @media (max-width: 520px) {
          .sfl-logo-image {
            width: 150px;
          }
        }
      `}</style>

      <header className="sfl-header-wrap">
        <div className="sfl-header">
          <div className="sfl-header-bar">
            <a className="sfl-logo" href="/">
              <Image
                src="/logo.png"
                alt="Sound for Life"
                width={220}
                height={60}
                className="sfl-logo-image"
                priority
              />
            </a>

            <nav className="sfl-nav" aria-label="Main navigation">
              {navItems.map((item) => {
                const isOpen = openMenu === item.title;

                return (
                  <div
                    key={item.title}
                    className="sfl-nav-item"
                    onMouseEnter={() => handleMenuEnter(item)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <a
                      className={`sfl-nav-trigger ${isOpen ? "sfl-nav-trigger-active" : ""}`}
                      href={item.href}
                    >
                      {item.title}
                      {item.groups.length > 0 ? <span className="sfl-nav-caret">▾</span> : null}
                    </a>

                    {isOpen && item.groups.length > 0 ? (
                      <div className="sfl-level-1">
                        <div className="sfl-level-1-list">
                          {item.groups.map((group) => {
                            const isActive = activeGroup === group.heading;

                            return (
                              <div
                                key={group.heading}
                                className="sfl-level-1-item"
                                onMouseEnter={() => {
                                  clearCloseTimer();
                                  setActiveGroup(group.heading);
                                }}
                              >
                                <a
                                  className={`sfl-level-1-link ${isActive ? "sfl-level-1-link-active" : ""}`}
                                  href={item.href}
                                >
                                  <span>{group.heading}</span>
                                  <span className="sfl-level-1-arrow">›</span>
                                </a>

                                {isActive ? (
                                  <div className="sfl-level-2">
                                    <div className="sfl-level-2-list">
                                      {group.links.map((link) => (
                                        <a key={link.label} className="sfl-level-2-link" href={link.href}>
                                          {link.label}
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            <button
              type="button"
              className={`sfl-mobile-toggle ${mobileMenuOpen ? "sfl-mobile-toggle-open" : ""}`}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sfl-mobile-toggle-lines">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>

          {mobileMenuOpen ? (
            <div className="sfl-mobile-menu">
              <div className="sfl-mobile-menu-inner">
                {navItems.map((item) => {
                  const sectionOpen = openMobileSection === item.title;

                  return (
                    <div key={item.title} className="sfl-mobile-section">
                      <div className="sfl-mobile-section-head">
                        <a
                          className="sfl-mobile-section-link"
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.title}
                        </a>

                        {item.groups.length > 0 ? (
                          <button
                            type="button"
                            className="sfl-mobile-section-toggle"
                            aria-expanded={sectionOpen}
                            onClick={() => toggleMobileSection(item.title)}
                          >
                            {sectionOpen ? "−" : "+"}
                          </button>
                        ) : null}
                      </div>

                      {sectionOpen ? (
                        <div className="sfl-mobile-section-body">
                          {item.groups.map((group) => {
                            const groupKey = `${item.title}::${group.heading}`;
                            const groupOpen = openMobileGroup === groupKey;

                            return (
                              <div key={group.heading} className="sfl-mobile-group">
                                <button
                                  type="button"
                                  className="sfl-mobile-group-toggle"
                                  aria-expanded={groupOpen}
                                  onClick={() => toggleMobileGroup(item.title, group.heading)}
                                >
                                  <span>{group.heading}</span>
                                  <span>{groupOpen ? "−" : "+"}</span>
                                </button>

                                {groupOpen ? (
                                  <div className="sfl-mobile-group-links">
                                    {group.links.map((link) => (
                                      <a
                                        key={link.label}
                                        className="sfl-mobile-link"
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                      >
                                        {link.label}
                                      </a>
                                    ))}
                                  </div>
                                ) : null}
                              </div>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  );
                })}

                <a
                  className="sfl-mobile-cta"
                  href="/book-hearing-test"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book My Hearing Test
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </header>
    </>
  );
}