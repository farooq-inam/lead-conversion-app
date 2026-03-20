"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Usman Tariq",
    role: "Owner, Mobile Zone Gulberg",
    location: "Lahore",
    text: "We've been buying Apple stock from Horizon Tech for 4 years. The pricing is competitive, delivery is next-day, and every device comes with full warranty documentation. Never had a counterfeit issue — not once.",
    rating: 5,
    tag: "Retail Partner",
  },
  {
    name: "Sana Khalid",
    role: "IT Procurement Head",
    org: "Packages Group",
    location: "Lahore",
    text: "Procured 120 MacBook Pros and 80 iPhones for our team. Horizon Tech handled the entire order, provided proper invoices for tax purposes, and delivered on schedule. Their corporate pricing saved us over PKR 4M.",
    rating: 5,
    tag: "Corporate Client",
  },
  {
    name: "Bilal Chaudhry",
    role: "CEO, DigiWorld Electronics",
    location: "Faisalabad",
    text: "The Nothing distribution has been great. We get Phone 3a stock before any other supplier in our city. Their Glyph accessory bundles and CMF earbuds move fast. Highly recommend for retailers targeting younger demographics.",
    rating: 5,
    tag: "Retail Partner",
  },
  {
    name: "Rabia Noor",
    role: "Operations Manager",
    org: "TechHub Pvt. Ltd.",
    location: "Islamabad",
    text: "Trade-in program is genuinely useful. We send used iPhones and get credited toward new stock. Clean process, fair valuations, and the team communicates every step. Sets them apart from other distributors.",
    rating: 5,
    tag: "Trade-In Client",
  },
  {
    name: "Hamza Sheikh",
    role: "Retail Chain Director",
    org: "iZone Technologies",
    location: "Lahore",
    text: "Horizon Tech gave us Apple launch-day allocation for iPhone 16. No other distributor could offer that. We sold out in 3 days. The relationship and the exclusivity is worth every PKR.",
    rating: 5,
    tag: "Launch Partner",
  },
  {
    name: "Tariq Mahmood",
    role: "Procurement Officer",
    org: "Punjab Education Foundation",
    location: "Lahore",
    text: "Government procurement is strict on documentation. Horizon Tech provided every certificate, warranty card, and compliance document we needed. The process was completely transparent.",
    rating: 5,
    tag: "Government Client",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display:"flex", gap:3 }}>
      {[...Array(count)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#C8A96E">
          <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.437.59 3.441L7 8.77l-3.09 1.742.59-3.44L2 4.634l3.455-.504L7 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section style={{
      background:"#080808",
      padding:"120px 0",
      borderTop:"1px solid rgba(255,255,255,0.04)",
      overflow:"hidden",
    }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:"-60px" }}
          transition={{ duration:.65 }}
          style={{ textAlign:"center", marginBottom:72 }}
        >
          <p style={{
            fontFamily:"var(--font-body)", fontSize:11, fontWeight:600,
            color:"#C8A96E", letterSpacing:"0.18em",
            textTransform:"uppercase", marginBottom:14,
          }}>Client Stories</p>
          <h2 style={{
            fontFamily:"var(--font-display)",
            fontSize:"clamp(28px,5vw,52px)",
            fontWeight:800, lineHeight:1.1,
            color:"#F5F5F7", letterSpacing:"-0.03em",
            marginBottom:12,
          }}>
            What Partners Say
          </h2>
          <p style={{
            fontFamily:"var(--font-body)", fontSize:16,
            color:"#6E6E73", maxWidth:480, margin:"0 auto"
          }}>
            1,200+ active partners. Here's what a few of them have shared.
          </p>
        </motion.div>

        {/* Main featured testimonial */}
        <div style={{ maxWidth:720, margin:"0 auto 48px", position:"relative" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-20 }}
              transition={{ duration:.4 }}
              style={{
                padding:"40px 40px 36px",
                borderRadius:20,
                background:"#0C0C0C",
                border:"1px solid rgba(255,255,255,0.08)",
                position:"relative",
              }}
            >
              {/* Quote mark */}
              <div style={{
                position:"absolute", top:28, right:32,
                fontFamily:"var(--font-display)",
                fontSize:96, lineHeight:.8,
                color:"rgba(200,169,110,.07)",
                userSelect:"none", pointerEvents:"none",
              }}>"</div>

              <div style={{
                display:"inline-flex", padding:"3px 10px", borderRadius:999,
                background:"rgba(200,169,110,.08)",
                border:"1px solid rgba(200,169,110,.15)",
                marginBottom:20,
              }}>
                <span style={{
                  fontFamily:"var(--font-body)", fontSize:10, fontWeight:700,
                  color:"#C8A96E", letterSpacing:"0.1em", textTransform:"uppercase"
                }}>{TESTIMONIALS[active].tag}</span>
              </div>

              <p style={{
                fontFamily:"var(--font-body)", fontSize:17, fontWeight:400,
                color:"#C8C8CC", lineHeight:1.75, marginBottom:28,
              }}>
                "{TESTIMONIALS[active].text}"
              </p>

              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                  <div style={{
                    width:44, height:44, borderRadius:12,
                    background:"linear-gradient(135deg,rgba(200,169,110,.2),rgba(200,169,110,.05))",
                    border:"1px solid rgba(200,169,110,.15)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    flexShrink:0,
                  }}>
                    <span style={{
                      fontFamily:"var(--font-display)", fontWeight:800,
                      fontSize:16, color:"#C8A96E"
                    }}>{TESTIMONIALS[active].name[0]}</span>
                  </div>
                  <div>
                    <p style={{
                      fontFamily:"var(--font-body)", fontSize:14, fontWeight:600,
                      color:"#F5F5F7"
                    }}>{TESTIMONIALS[active].name}</p>
                    <p style={{
                      fontFamily:"var(--font-body)", fontSize:12, fontWeight:400,
                      color:"#6E6E73", marginTop:1
                    }}>
                      {TESTIMONIALS[active].role}
                      {TESTIMONIALS[active].org && ` · ${TESTIMONIALS[active].org}`}
                      {" · "}{TESTIMONIALS[active].location}
                    </p>
                  </div>
                </div>
                <StarRating count={TESTIMONIALS[active].rating}/>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div style={{
            display:"flex", justifyContent:"center", gap:8, marginTop:24
          }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{
                  width: active===i ? 24 : 8,
                  height:8, borderRadius:999,
                  background: active===i ? "#C8A96E" : "rgba(255,255,255,.12)",
                  border:"none", cursor:"pointer",
                  transition:"width .25s, background .2s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Small cards grid */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fill, minmax(min(100%,240px),1fr))",
          gap:12,
        }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.name}
              onClick={() => setActive(i)}
              initial={{ opacity:0, y:16 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay: i*.06 }}
              style={{
                padding:"16px 18px", borderRadius:12, textAlign:"left",
                background: active===i ? "rgba(200,169,110,.08)" : "#0C0C0C",
                border:`1px solid ${active===i ? "rgba(200,169,110,.22)" : "rgba(255,255,255,.06)"}`,
                cursor:"pointer", transition:"all .2s",
              }}
            >
              <p style={{
                fontFamily:"var(--font-body)", fontSize:13, fontWeight:600,
                color:"#F5F5F7", marginBottom:2
              }}>{t.name}</p>
              <p style={{
                fontFamily:"var(--font-body)", fontSize:11, fontWeight:400,
                color:"#6E6E73"
              }}>{t.location} · {t.tag}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}