"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "Retail Distribution",
    desc: "We supply genuine Apple and Nothing products to retail shops, mobile stores, and electronics outlets across Punjab. Competitive margins, fast fulfilment.",
    points: ["Next-day Lahore delivery", "Weekly Punjab runs", "Flexible MOQ"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    title: "Corporate Bulk Orders",
    desc: "Supplying offices, enterprises, and government departments with MacBooks, iPhones, and iPads at exclusive trade pricing with volume discounts.",
    points: ["Dedicated account manager", "Volume pricing tiers", "Priority stock allocation"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Official Warranty & Repair",
    desc: "All products come with manufacturer warranty. Our authorised service team handles repairs, replacements, and after-sales support for Apple and Nothing.",
    points: ["Apple Care eligible", "Nothing certified repairs", "12-month coverage"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M17 9V7a5 5 0 00-10 0v2"/>
        <rect x="3" y="9" width="18" height="13" rx="2"/>
        <circle cx="12" cy="15" r="1"/>
      </svg>
    ),
    title: "Trade-In Program",
    desc: "We accept trade-ins on used Apple devices. Retailers can bring in old stock and receive credit toward new inventory orders. Transparent valuations.",
    points: ["Fair market valuations", "Instant credit applied", "Any condition considered"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="2" y="5" width="20" height="14" rx="2"/>
        <path d="M2 10h20"/>
      </svg>
    ),
    title: "EMI & Financing",
    desc: "B2B financing available for qualified retailers and corporates. Spread inventory costs across 3–12 months with 0% interest on select orders.",
    points: ["0% markup on 3-month plans", "Credit up to PKR 50L", "Quick approval in 48hrs"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: "Partner Programme",
    desc: "Become an official sub-distributor. Access exclusive pricing tiers, co-branded marketing support, and priority allocation during product launches.",
    points: ["Tiered pricing structure", "Launch-day allocations", "Co-branded collateral"],
  },
];

export default function Services() {
  return (
    <section id="services" style={{
      background:"#080808",
      padding:"120px 0",
      borderTop:"1px solid rgba(255,255,255,0.04)",
    }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:"-60px" }}
          transition={{ duration:.65 }}
          style={{ marginBottom:72, maxWidth:600 }}
        >
          <p style={{
            fontFamily:"var(--font-body)", fontSize:11, fontWeight:600,
            color:"#C8A96E", letterSpacing:"0.18em",
            textTransform:"uppercase", marginBottom:14,
          }}>What We Offer</p>
          <h2 style={{
            fontFamily:"var(--font-display)",
            fontSize:"clamp(32px,5vw,52px)",
            fontWeight:800, lineHeight:1.1,
            color:"#F5F5F7", letterSpacing:"-0.03em",
            marginBottom:16,
          }}>
            End-to-End<br/>Distribution Services
          </h2>
          <p style={{
            fontFamily:"var(--font-body)", fontSize:16, fontWeight:400,
            color:"#6E6E73", lineHeight:1.7,
          }}>
            From single-unit retail to 500-unit corporate orders — we handle it all,
            backed by official distributor status.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill, minmax(min(100%,340px),1fr))",
          gap:16,
        }}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity:0, y:28 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-30px" }}
              transition={{ duration:.55, delay: i*.07 }}
              style={{
                padding:28,
                borderRadius:16,
                background:"#0C0C0C",
                border:"1px solid rgba(255,255,255,0.07)",
                transition:"border-color .25s, transform .25s",
                cursor:"default",
              }}
              whileHover={{ y:-4 }}
            >
              {/* Icon */}
              <div style={{
                width:44, height:44, borderRadius:12,
                background:"rgba(200,169,110,.08)",
                border:"1px solid rgba(200,169,110,.15)",
                display:"flex", alignItems:"center", justifyContent:"center",
                color:"#C8A96E", marginBottom:18,
              }}>
                {s.icon}
              </div>

              <h3 style={{
                fontFamily:"var(--font-display)",
                fontSize:18, fontWeight:700,
                color:"#F5F5F7", marginBottom:10,
                letterSpacing:"-0.01em",
              }}>{s.title}</h3>

              <p style={{
                fontFamily:"var(--font-body)",
                fontSize:14, fontWeight:400,
                color:"#6E6E73", lineHeight:1.65,
                marginBottom:18,
              }}>{s.desc}</p>

              {/* Points */}
              <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                {s.points.map(pt => (
                  <div key={pt} style={{
                    display:"flex", alignItems:"center", gap:8
                  }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="rgba(200,169,110,0.12)"/>
                      <path d="M4 7l2 2 4-4" stroke="#C8A96E" strokeWidth="1.4"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{
                      fontFamily:"var(--font-body)", fontSize:12, fontWeight:500,
                      color:"#A1A1A6"
                    }}>{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}