"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const FEATURES = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
      </svg>
    ),
    label: "Shop Apple & Nothing online",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
    label: "Nationwide delivery across Pakistan",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: "Genuine stock, official warranty",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M2 10h20"/>
      </svg>
    ),
    label: "Secure checkout, multiple payment methods",
  },
];

export default function CubeStore() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="cube section--alt">
      <div className="page-width">

        {/* ── Main grid ──────────────────────────────────────────── */}
        <div className="cube__grid">

          {/* LEFT — copy */}
          <div className="cube__left">

            {/* Eyebrow */}
            <motion.div
              className="cube__eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <span className="cube__eyebrow-dot" />
              Shop Online
            </motion.div>

            {/* Logo + brand name */}
            <motion.div
              className="cube__brand"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22,1,0.36,1] }}
            >
              <div className="cube__logo-wrap">
                <Image
                  src="https://yellostone.com.pk/images/service-cube-icon.png"
                  alt="CUBE Online Store"
                  width={120}
                  height={48}
                  className="cube__logo"
                  unoptimized
                />
              </div>
              <p className="cube__brand-url">cubeonline.pk</p>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="cube__heading"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.22,1,0.36,1] }}
            >
              Our Official<br />
              <span className="cube__heading-accent">Online Store</span>
            </motion.h2>

            {/* Sub */}
            <motion.p
              className="cube__sub"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              Can't visit us in person? CUBE is our dedicated Shopify storefront —
              every Apple and Nothing product you see here, available for order
              online with doorstep delivery anywhere in Pakistan.
            </motion.p>

            {/* Feature list */}
            <motion.ul
              className="cube__features"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 }}
            >
              {FEATURES.map((f, i) => (
                <motion.li
                  key={f.label}
                  className="cube__feature"
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.38 + i * 0.07, duration: 0.45 }}
                >
                  <span className="cube__feature-icon">{f.icon}</span>
                  <span className="cube__feature-label">{f.label}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              className="cube__ctas"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.5 }}
            >
              <motion.a
                href="https://www.cubeonline.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="cube__cta-primary"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(139,92,246,.35)" }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Visit CUBE Store
              </motion.a>

              <motion.a
                href="https://www.cubeonline.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="cube__cta-ghost"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Browse Products →
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT — mockup image */}
          <motion.div
            className="cube__right"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22,1,0.36,1] }}
          >
            {/* Glow behind mockup */}
            <div className="cube__mockup-glow" />

            {/* Floating mockup */}
            <motion.div
              className="cube__mockup-wrap"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="https://yellostone.com.pk/images/service-cube-image.png"
                alt="CUBE Online Store on all devices"
                width={600}
                height={420}
                className="cube__mockup-img"
                unoptimized
                priority
              />
            </motion.div>

            {/* Floating stat chips */}
            <motion.div
              className="cube__chip cube__chip--tl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            >
              <span className="cube__chip-val">100%</span>
              <span className="cube__chip-lbl">Genuine Stock</span>
            </motion.div>

            <motion.div
              className="cube__chip cube__chip--br"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.75, type: "spring", stiffness: 200 }}
            >
              <span className="cube__chip-val">PK-wide</span>
              <span className="cube__chip-lbl">Delivery</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}