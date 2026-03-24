"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINK_GROUPS = [
  {
    heading: "Products",
    links: [
      { label: "iPhone 16 Series",  href: "#iphone"        },
      { label: "MacBook Pro & Air", href: "#macbook"       },
      { label: "iPad Series",       href: "#ipad"          },
      { label: "Apple Watch",       href: "#watch"         },
      { label: "AirPods Pro",       href: "#airpods"       },
      { label: "Nothing Phone 3a",  href: "#nothing-phone" },
      { label: "Nothing Ear / CMF", href: "#nothing-ear"   },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Retail Distribution", href: "#services"  },
      { label: "Corporate Orders",    href: "#corporate" },
      { label: "Official Warranty",   href: "#warranty"  },
      { label: "Trade-In Program",    href: "#tradein"   },
      { label: "EMI & Financing",     href: "#emi"       },
      { label: "Partner Programme",   href: "#services"  },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us",        href: "#about"   },
      { label: "Our Credentials", href: "#about"   },
      { label: "Leadership",      href: "#about"   },
      { label: "Contact",         href: "#contact" },
      { label: "Get a Quote",     href: "#quote"   },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "📍  Hall Road, Lahore",    href: "#"                            },
      { label: "📞  0300 123 4567",         href: "tel:+923001234567"            },
      { label: "✉️  sales@horizontech.pk",  href: "mailto:sales@horizontech.pk" },
      { label: "⏰  Mon–Fri  9AM – 7PM",   href: "#"                            },
    ],
  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   AccordionGroup — controlled, no local state
   isOpen and onToggle come from the parent Footer
   This ensures only one is open at a time
───────────────────────────────────────────────────────────────────────────── */
function AccordionGroup({
  heading,
  links,
  isOpen,
  onToggle,
}: {
  heading:  string;
  links:    { label: string; href: string }[];
  isOpen:   boolean;
  onToggle: () => void;
}) {
  return (
    <div className="ftr__accordion">
      <button
        className="ftr__accordion-btn"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="ftr__col-heading">{heading}</span>
        <span className="ftr__accordion-icon">
          {isOpen ? (
            /* Minus */
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M2 7h10"/>
            </svg>
          ) : (
            /* Plus */
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M7 2v10M2 7h10"/>
            </svg>
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{   height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="ftr__accordion-body">
              {links.map(l => (
                <a key={l.label} href={l.href} className="ftr__link">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Footer
───────────────────────────────────────────────────────────────────────────── */
export default function Footer() {
  /* null = all closed on load — no auto-open */
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex(prev => (prev === i ? null : i));

  return (
    /* Outer wrapper — transparent background, just provides bottom padding */
    <footer className="ftr">

      {/* 90vw detached card */}
      <div className="ftr__card">

        {/* ── Top: brand col + link cols ──────────────────────────── */}
        <div className="ftr__top">

          {/* Brand column */}
          <div className="ftr__brand">
            <div className="ftr__logo-row">
              <div className="ftr__logo-mark">
                <div className="ftr__logo-inner">Y</div>
              </div>
              <div>
                <p className="ftr__logo-name">YELLOSTONE TECH</p>
                <p className="ftr__logo-sub">Official Distributor · Lahore</p>
              </div>
            </div>

            <p className="ftr__tagline">
              Pakistan's most trusted authorised distributor for Apple
              and Nothing devices.
            </p>

            <div className="ftr__socials">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} className="ftr__social">
                  {s.icon}
                </a>
              ))}
            </div>

            <motion.a
              href="https://wa.me/923001234567"
              target="_blank" rel="noopener noreferrer"
              className="ftr__wa"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>
          </div>

          {/* Desktop link columns — hidden on mobile */}
          <div className="ftr__cols-desktop">
            {LINK_GROUPS.map(g => (
              <div key={g.heading} className="ftr__col">
                <p className="ftr__col-heading">{g.heading}</p>
                <div className="ftr__col-links">
                  {g.links.map(l => (
                    <a key={l.label} href={l.href} className="ftr__link">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile accordions — hidden on desktop, controlled by openIndex */}
          <div className="ftr__cols-mobile">
            {LINK_GROUPS.map((g, i) => (
              <AccordionGroup
                key={g.heading}
                heading={g.heading}
                links={g.links}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────────── */}
        <div className="ftr__bottom">
          <p className="ftr__copy">
            © {new Date().getFullYear()} Yellostone Tech Pvt. Ltd. · All rights reserved.
          </p>
          <div className="ftr__legal">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(l => (
              <a key={l} href="#" className="ftr__legal-link">{l}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}