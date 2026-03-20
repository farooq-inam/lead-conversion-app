"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STATS = [
  { value: "8+",     label: "Years Active"         },
  { value: "1,200+", label: "Retail Partners"       },
  { value: "50K+",   label: "Devices Distributed"   },
  { value: "100%",   label: "Genuine & Warranted"   },
];

const BADGES = [
  { icon: "🍎", text: "Apple Authorised Reseller"      },
  { icon: "◎",  text: "Nothing Certified Distributor"  },
  { icon: "🏆", text: "PTCL Verified Business"         },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY    = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="hero-section">

      {/* ── Parallax background ─────────────────────────────────── */}
      <motion.div className="hero-bg" style={{ y: bgY }}>
        <div className="hero-bg-glow-left"  />
        <div className="hero-bg-glow-right" />
        <div className="hero-bg-grid"       />
      </motion.div>

      {/* ── Main content wrapper ────────────────────────────────── */}
      <motion.div className="hero-inner" style={{ opacity: fadeOut }}>

        {/* ── LEFT column ─────────────────────────────────────── */}
        <div className="hero-left">

          {/* Eyebrow pill */}
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <span className="hero-eyebrow-dot" />
            <span className="hero-eyebrow-text">
              Pakistan's Premier Authorized Distributor
            </span>
          </motion.div>

          {/* Headline */}
          <div className="hero-headline-wrap">
            <motion.h1
              className="hero-h1"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Official Apple &amp;
            </motion.h1>
            <motion.h1
              className="hero-h1 hero-h1-gradient"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              Nothing Distributor
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.65, delay: 0.44 }}
          >
            Supplying genuine Apple and Nothing devices to retailers,
            bulk buyers, and corporate partners across Pakistan —
            with official warranty and trade pricing.
          </motion.p>

          {/* CTA row */}
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.65, delay: 0.54 }}
          >
            <motion.a
              href="#quote"
              className="cta-primary"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(200,169,110,.4)" }}
              whileTap={{ scale: 0.96 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
              </svg>
              Get Free Quote
            </motion.a>

            <motion.a
              href="https://wa.me/923001234567"
              target="_blank" rel="noopener noreferrer"
              className="cta-whatsapp"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </motion.a>

            <motion.a
              href="tel:+923001234567"
              className="cta-ghost"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              0300 123 4567
            </motion.a>
          </motion.div>
        </div>

        {/* ── RIGHT column ─────────────────────────────────────── */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0  }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Floating brand cards */}
          <div className="hero-brand-stack">

            {/* Apple card */}
            <motion.div
              className="hero-brand-card"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hero-brand-icon">🍎</div>
              <div>
                <p className="hero-brand-name">Apple</p>
                <p className="hero-brand-tag">Authorised Reseller</p>
              </div>
              <span className="hero-brand-badge">Official</span>
            </motion.div>

            {/* Nothing card */}
            <motion.div
              className="hero-brand-card hero-brand-card--offset"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <div className="hero-brand-icon hero-brand-icon--nothing">◎</div>
              <div>
                <p className="hero-brand-name">Nothing</p>
                <p className="hero-brand-tag">Certified Distributor</p>
              </div>
              <span className="hero-brand-badge">Certified</span>
            </motion.div>

            {/* Decorative glow orb */}
            <div className="hero-orb" />
          </div>
        </motion.div>
      </motion.div>

      {/* ── Trust badges — centered below both columns ───────── */}
      <motion.div
        className="hero-badges-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0  }}
        transition={{ delay: 0.85, duration: 0.65 }}
        style={{ opacity: fadeOut }}
      >
        {BADGES.map((b, i) => (
          <motion.div
            key={b.text}
            className="hero-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ delay: 0.9 + i * 0.08 }}
          >
            <span className="hero-badge-icon">{b.icon}</span>
            <span className="hero-badge-text">{b.text}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Stats bar — pinned to bottom of fold ─────────────── */}
      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0  }}
        transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ opacity: fadeOut }}
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="hero-stat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 + i * 0.1 }}
          >
            <span className="hero-stat-value">{s.value}</span>
            <span className="hero-stat-label">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="hero-scroll-text">Scroll</span>
        <motion.div
          className="hero-scroll-line"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        />
      </motion.div>

    </section>
  );
}