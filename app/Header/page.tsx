"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { buildCtaHref } from "@/lib/cta";

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
          { label: "Hearing Problems in Parents / Seniors", href: "/hearing-loss/parents-seniors" },
          { label: "Hearing Problems in Children", href: "/hearing-loss/children" },
          { label: "Helping a Family Member Hear Better", href: "/hearing-loss/helping-family-member" },
        ],
      },
      {
        heading: "How",
        links: [
          { label: "Do I Need a Hearing Test?", href: "/hearing-loss/do-i-need-a-hearing-test" },
          { label: "Should I Visit an Audiologist?", href: "/hearing-loss/visit-audiologist" },
          { label: "Is It Hearing Loss or Ear Blockage?", href: "/hearing-loss/hearing-loss-or-ear-blockage" },
          { label: "Take an Online Hearing Check", href: "/hearing-loss/online-hearing-check" },
          {
            label: "Book a Free Hearing Test",
            href: buildCtaHref({
              intent: "hearing-test",
              sourcePage: "header",
              cta: "Book a Free Hearing Test",
              referrerSection: "hearing-loss-menu",
            }),
          },
        ],
      },
    ],
  },
  {
    title: "Hearing Aids",
    href: "/hearing-aids",
    groups: [
      {
        heading: "Hearing Aid Guide",
        links: [
          { label: "Types of Hearing Aids", href: "/hearing-aids/types" },
          { label: "How to Choose a Hearing Aid", href: "/hearing-aids/how-to-choose" },
          { label: "Compare Hearing Aids", href: "/hearing-aids/compare" },
          { label: "Hearing Aids for First-Time Users", href: "/hearing-aids/first-time-users" },
          { label: "Hearing Aids for Seniors", href: "/hearing-aids/seniors" },
          { label: "Hearing Aids for Severe Hearing Loss", href: "/hearing-aids/severe-hearing-loss" },
        ],
      },
      {
        heading: "Types",
        links: [
          { label: "RIE Hearing Aids", href: "/hearing-aids/rie" },
          { label: "BTE Hearing Aids", href: "/hearing-aids/bte" },
          { label: "ITE Hearing Aids", href: "/hearing-aids/ite" },
          { label: "CIC Hearing Aids", href: "/hearing-aids/cic" },
          { label: "IIC Hearing Aids", href: "/hearing-aids/iic" },
          { label: "Invisible Hearing Aids", href: "/hearing-aids/invisible" },
          { label: "Rechargeable Hearing Aids", href: "/hearing-aids/rechargeable" },
          { label: "Bluetooth Hearing Aids", href: "/hearing-aids/bluetooth" },
        ],
      },
      {
        heading: "Brands",
        links: [
          { label: "Signia Hearing Aids", href: "/hearing-aids/signia" },
          { label: "Phonak Hearing Aids", href: "/hearing-aids/phonak" },
          { label: "Unitron Hearing Aids", href: "/hearing-aids/unitron" },
          { label: "ReSound Hearing Aids", href: "/hearing-aids/resound" },
          { label: "Sonic Hearing Aids", href: "/hearing-aids/sonic" },
          { label: "A&M Hearing Aids", href: "/hearing-aids/am" },
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
          { label: "Free Trial", href: "/services/free-trial" },
          { label: "Hearing Aid Fitting", href: "/services/hearing-aid-fitting" },
          { label: "Home Visit", href: "/services/home-visit" },
        ],
      },
      {
        heading: "Special Care Services",
        links: [
          { label: "Ringing in Ears Support", href: "/services/ringing-in-ears-support" },
          { label: "Home Service for Seniors", href: "/services/home-service-for-seniors" },
          { label: "Hearing Care for Children", href: "/services/hearing-care-for-children" },
        ],
      },
      {
        heading: "Support",
        links: [
          { label: "Warranty", href: "/services/warranty" },
          { label: "Device Care", href: "/services/device-care" },
          { label: "Battery / Charging Support", href: "/services/battery-charging-support" },
          { label: "Bluetooth Pairing Help", href: "/services/bluetooth-pairing-help" },
          { label: "Hearing Aid Maintenance", href: "/services/hearing-aid-maintenance" },
          { label: "Hearing Aid Not Working", href: "/services/hearing-aid-not-working" },
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
          {
            label: "Book Free Hearing Test",
            href: buildCtaHref({
              intent: "hearing-test",
              sourcePage: "header",
              cta: "Book Free Hearing Test",
              referrerSection: "clinics-menu",
            }),
          },
          {
            label: "Call Clinic",
            href: buildCtaHref({
              intent: "audiologist",
              sourcePage: "header",
              cta: "Call Clinic",
              referrerSection: "clinics-menu",
            }),
          },
        ],
      },
      {
        heading: "Clinic Landing Pages",
        links: [
          { label: "Delhi Greater Kailash Clinic", href: "/clinics/delhi/greater-kailash-clinic" },
          { label: "Delhi Janakpuri Clinic", href: "/clinics/delhi/janakpuri-clinic" },
          { label: "Noida Sector 22 Clinic", href: "/clinics/noida/sector-22-clinic" },
          { label: "Noida Sector 3 Clinic", href: "/clinics/noida/sector-3-clinic" },
        ],
      },
    ],
  },
  {
    title: "Explore",
    href: "/stories",
    groups: [
      {
        heading: "Stories",
        links: [
          { label: "Company Growth Story", href: "/stories/company-growth" },
          { label: "Employee Growth Story", href: "/stories/employee-growth" },
          { label: "Individual Clinic Story", href: "/stories/clinic-story" },
        ],
      },
      {
        heading: "Testimonials",
        links: [
          { label: "Patient Testimonials", href: "/testimonials" },
          { label: "Video Testimonials", href: "/testimonials" },
          { label: "Clinic-Specific Testimonials", href: "/testimonials" },
        ],
      },
      {
        heading: "FAQs",
        links: [
          { label: "General FAQs", href: "/faqs" },
          { label: "Hearing Test FAQs", href: "/faqs" },
          { label: "Hearing Aid FAQs", href: "/faqs" },
        ],
      },
    ],
  },
  {
    title: "About",
    href: "/about",
    groups: [
      {
        heading: "About SFL",
        links: [
          { label: "About Sound for Life", href: "/about" },
          { label: "Our Story", href: "/about/our-story" },
          { label: "Why SFL", href: "/about/why-sfl" },
          { label: "Our Audiologists", href: "/about/audiologists" },
        ],
      },
      {
        heading: "Govt Schemes",
        links: [
          { label: "ADIP Scheme for Hearing Aids", href: "/about/adip-scheme" },
          { label: "Government Subsidy for Hearing Aids", href: "/about/government-subsidy-hearing-aids" },
          { label: "Insurance Coverage for Hearing Aids", href: "/about/insurance-coverage-hearing-aids" },
        ],
      },
    ],
  },
];

function isExternalHref(href: string) {
  return href.startsWith("tel:") || href.startsWith("http://") || href.startsWith("https://");
}

function NavLinkItem({
  href,
  children,
  onClick,
  className,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}) {
  if (isExternalHref(href)) {
    return (
      <a href={href} onClick={onClick} className={className} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

export default function MainHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const currentItem = useMemo(
    () => navItems.find((item) => item.title === openDropdown) ?? null,
    [openDropdown]
  );

  const currentGroup = useMemo(() => {
    if (!currentItem) return null;
    return (
      currentItem.groups.find((group) => group.heading === activeGroup) ??
      currentItem.groups[0] ??
      null
    );
  }, [currentItem, activeGroup]);

  function openMenu(item: NavItem) {
    setOpenDropdown(item.title);
    setActiveGroup(item.groups[0]?.heading ?? null);
  }

  function closeMenu() {
    setOpenDropdown(null);
  }

  function toggleMobileSection(title: string) {
    setOpenMobileSection((current) => (current === title ? null : title));
  }

  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <NavLinkItem className="logo-link" href="/" ariaLabel="Sound for Life home">
            <Image
              src="/logo.png"
              alt="Sound for Life Hearing Solutions logo"
              width={420}
              height={90}
              className="logo-image"
              priority
            />
          </NavLinkItem>

          <nav className="nav" aria-label="Primary navigation">
            {navItems.map((item) => {
              const isOpen = openDropdown === item.title;

              return (
                <div
                  className="nav-wrap"
                  key={item.title}
                  onMouseEnter={() => openMenu(item)}
                  onMouseLeave={closeMenu}
                >
                  <button
                    type="button"
                    className={`nav-button ${isOpen ? "nav-button-active" : ""}`}
                    onMouseEnter={() => openMenu(item)}
                    aria-expanded={isOpen}
                  >
                    {item.title}
                  </button>

                  <div className={`menu-shell ${isOpen ? "menu-shell-open" : ""}`}>
                    <div className="menu-groups">
                      {item.groups.map((group) => (
                        <button
                          key={group.heading}
                          type="button"
                          className={`menu-group-btn ${
                            currentGroup?.heading === group.heading
                              ? "menu-group-btn-active"
                              : ""
                          }`}
                          onMouseEnter={() => setActiveGroup(group.heading)}
                        >
                          {group.heading}
                        </button>
                      ))}
                    </div>

                    <div className="menu-group-links">
                      <div className="menu-links-title">{currentGroup?.heading}</div>
                      <div className="menu-links-list">
                        {currentGroup?.links.map((link) => (
                          <NavLinkItem key={`${link.href}-${link.label}`} href={link.href}>
                            {link.label}
                          </NavLinkItem>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="header-actions">
            <NavLinkItem className="icon-btn search-desktop" href="/blogs" ariaLabel="Search">
              🔍
            </NavLinkItem>

            <NavLinkItem
              className="btn btn-primary cta-desktop"
              href={buildCtaHref({
                intent: "hearing-test",
                sourcePage: "header",
                cta: "Book My Free Hearing Test",
                referrerSection: "desktop-header",
              })}
            >
              Book My Free Hearing Test
            </NavLinkItem>

            <button
              type="button"
              className="icon-btn mobile-toggle"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu ${mobileMenuOpen ? "mobile-menu-open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="mobile-panel" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-header">
            <NavLinkItem className="logo-link" href="/" ariaLabel="Sound for Life home">
              <Image
                src="/logo.png"
                alt="Sound for Life Hearing Solutions logo"
                width={420}
                height={90}
                className="logo-image"
              />
            </NavLinkItem>

            <button
              type="button"
              className="icon-btn"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="mobile-sections">
            {navItems.map((item) => {
              const isOpen = openMobileSection === item.title;

              return (
                <div className="mobile-section" key={item.title}>
                  <button
                    type="button"
                    className="mobile-section-btn"
                    aria-expanded={isOpen}
                    onClick={() => toggleMobileSection(item.title)}
                  >
                    <span>{item.title}</span>
                    <span className={`mobile-chevron ${isOpen ? "mobile-chevron-open" : ""}`}>
                      ▾
                    </span>
                  </button>

                  <div className={`mobile-section-body ${isOpen ? "mobile-section-body-open" : ""}`}>
                    {item.groups.map((group) => (
                      <div className="mobile-group" key={group.heading}>
                        <div className="mobile-group-title">{group.heading}</div>
                        <div className="mobile-group-links">
                          {group.links.map((link) => (
                            <NavLinkItem
                              key={`${link.href}-${link.label}`}
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {link.label}
                            </NavLinkItem>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mobile-cta-row">
            <NavLinkItem
              className="btn btn-primary"
              href={buildCtaHref({
                intent: "hearing-test",
                sourcePage: "header",
                cta: "Book My Free Hearing Test",
                referrerSection: "mobile-header",
              })}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book My Free Hearing Test
            </NavLinkItem>

            <NavLinkItem
              className="btn btn-secondary"
              href={buildCtaHref({
                intent: "clinic-visit",
                sourcePage: "header",
                cta: "Find a Clinic Near You",
                referrerSection: "mobile-header",
              })}
              onClick={() => setMobileMenuOpen(false)}
            >
              Find a Clinic Near You
            </NavLinkItem>
          </div>
        </div>
      </div>
    </>
  );
}