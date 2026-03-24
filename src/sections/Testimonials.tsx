"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    name:     "Usman Tariq",
    role:     "Owner, Mobile Zone Gulberg",
    location: "Lahore",
    category: "Retail",
    text:     "We've been buying Apple stock from Yellostone Tech for 4 years. Next-day delivery every time, full warranty docs with every unit. Never had a counterfeit issue — not once.",
    rating:   5,
    initials: "UT",
    color:    "#C8A96E",
  },
  {
    name:     "Sana Khalid",
    role:     "IT Procurement Head",
    org:      "Packages Group",
    location: "Lahore",
    category: "Corporate",
    text:     "120 MacBook Pros and 80 iPhones delivered on schedule, with proper invoices for tax. Their corporate pricing saved us over PKR 4M versus retail.",
    rating:   5,
    initials: "SK",
    color:    "#7C3AED",
  },
  {
    name:     "Bilal Chaudhry",
    role:     "CEO, DigiWorld Electronics",
    location: "Faisalabad",
    category: "Retail",
    text:     "Nothing Phone 3a stock before any other supplier in Faisalabad. CMF earbuds sell out within days. Yellostone Tech is our go-to for the Nothing lineup.",
    rating:   5,
    initials: "BC",
    color:    "#25D166",
  },
  {
    name:     "Rabia Noor",
    role:     "Operations Manager",
    org:      "TechHub Pvt. Ltd.",
    location: "Islamabad",
    category: "Trade-In",
    text:     "The trade-in program is genuinely useful. We send used iPhones, get credited toward new inventory. Fair valuations, clean process every time.",
    rating:   5,
    initials: "RN",
    color:    "#F59E0B",
  },
  {
    name:     "Hamza Sheikh",
    role:     "Retail Chain Director",
    org:      "iZone Technologies",
    location: "Lahore",
    category: "Corporate",
    text:     "Yellostone Tech gave us iPhone 16 launch-day allocation. No other distributor could offer that. We sold out in 3 days. The relationship is worth every PKR.",
    rating:   5,
    initials: "HS",
    color:    "#EF4444",
  },
  {
    name:     "Tariq Mahmood",
    role:     "Procurement Officer",
    org:      "Punjab Education Foundation",
    location: "Lahore",
    category: "Corporate",
    text:     "Government procurement demands complete documentation. Yellostone Tech provided every certificate and compliance doc we needed. Completely transparent process.",
    rating:   5,
    initials: "TM",
    color:    "#3B82F6",
  },
];

const CATEGORIES = ["All", "Retail", "Corporate", "Trade-In"];

function Stars({ count }: { count: number }) {
  return (
    <div className="tmn__stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#C8A96E">
          <path d="M6 1l1.4 2.8L10.5 4.3l-2.25 2.2.53 3.1L6 8.1l-2.78 1.5.53-3.1L1.5 4.3l3.1-.5L6 1z"/>
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  t, index,
}: {
  t: typeof TESTIMONIALS[0];
  index: number;
}) {
  return (
    <motion.div
      className="tmn__card"
      layout
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0,  scale: 1    }}
      exit={{    opacity: 0, y: -12, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Quote mark */}
      <span className="tmn__quote-mark">"</span>

      {/* Category pill */}
      <span className="tmn__category">{t.category}</span>

      {/* Review text */}
      <p className="tmn__text">"{t.text}"</p>

      {/* Footer: avatar + name + rating */}
      <div className="tmn__card-footer">
        <div className="tmn__avatar" style={{ background: `${t.color}22`, border: `1px solid ${t.color}44` }}>
          <span className="tmn__avatar-initials" style={{ color: t.color }}>
            {t.initials}
          </span>
        </div>
        <div className="tmn__meta">
          <p className="tmn__name">{t.name}</p>
          <p className="tmn__role">
            {t.role}{t.org ? ` · ${t.org}` : ""} · {t.location}
          </p>
        </div>
        <Stars count={t.rating} />
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === active);

  return (
    <section id="testimonials" className="tmn section--alt">
      <div className="page-width">

        {/* Header */}
        <motion.div
          className="tmn__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="tmn__eyebrow">Client Stories</p>
          <h2 className="tmn__heading">
            What Our Partners Say
          </h2>
          <p className="tmn__sub">
            1,200+ active partners across Pakistan. Here's what a few of them shared.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="tmn__filters"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`tmn__filter-btn${active === cat ? " tmn__filter-btn--active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
              {cat !== "All" && (
                <span className="tmn__filter-count">
                  {TESTIMONIALS.filter(t => t.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div className="tmn__grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Summary strip */}
        <motion.div
          className="tmn__summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "5.0", label: "Average Rating" },
            { value: "1,200+", label: "Active Partners" },
            { value: "4 yrs",  label: "Avg. Relationship" },
            { value: "100%",   label: "Genuine Stock" },
          ].map(s => (
            <div key={s.label} className="tmn__summary-item">
              <span className="tmn__summary-val">{s.value}</span>
              <span className="tmn__summary-lbl">{s.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}