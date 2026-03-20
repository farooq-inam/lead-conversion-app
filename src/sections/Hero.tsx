"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STATS = [
  { value: "8+",    label: "Years in Business"     },
  { value: "1,200+", label: "Retail Partners"      },
  { value: "50K+",  label: "Devices Distributed"   },
  { value: "100%",  label: "Genuine & Warranted"   },
];

const BADGES = [
  { icon: "🍎", text: "Apple Authorised Reseller" },
  { icon: "◎",  text: "Nothing Certified Distributor" },
  { icon: "🏆", text: "PTCL Verified Business" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y       = useTransform(scrollYProgress, [0,1], ["0%",  "30%"]);
  const opacity = useTransform(scrollYProgress, [0,.7], [1, 0]);

  return (
    <section ref={ref} style={{
      position:"relative", minHeight:"100vh",
      display:"flex", flexDirection:"column",
      justifyContent:"center", alignItems:"center",
      overflow:"hidden",
      background:"#050505",
      paddingTop:120, paddingBottom:80,
    }}>
      {/* ── Background mesh ───────────────────────────────────────────── */}
      <motion.div style={{ position:"absolute", inset:0, y }}>
        {/* radial glow top-left */}
        <div style={{
          position:"absolute", top:"-20%", left:"-10%",
          width:"60vw", height:"60vw", borderRadius:"50%",
          background:"radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%)",
          pointerEvents:"none",
        }}/>
        {/* radial glow bottom-right */}
        <div style={{
          position:"absolute", bottom:"-20%", right:"-10%",
          width:"50vw", height:"50vw", borderRadius:"50%",
          background:"radial-gradient(circle, rgba(200,169,110,0.05) 0%, transparent 70%)",
          pointerEvents:"none",
        }}/>
        {/* grid pattern */}
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:`
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)
          `,
          backgroundSize:"72px 72px",
          maskImage:"radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}/>
      </motion.div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <motion.div
        style={{
          position:"relative", zIndex:2, opacity,
          maxWidth:900, width:"100%",
          padding:"0 24px",
          display:"flex", flexDirection:"column", alignItems:"center",
          textAlign:"center",
        }}
      >
        {/* Brand pill */}
        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:.6, delay:.1 }}
          style={{
            display:"inline-flex", alignItems:"center", gap:8,
            padding:"6px 16px", borderRadius:999, marginBottom:32,
            background:"rgba(200,169,110,.09)",
            border:"1px solid rgba(200,169,110,.22)",
          }}
        >
          <span style={{ width:6, height:6, borderRadius:"50%", background:"#C8A96E", display:"block" }}/>
          <span style={{
            fontFamily:"var(--font-body)", fontSize:12, fontWeight:600,
            color:"#C8A96E", letterSpacing:"0.1em", textTransform:"uppercase"
          }}>Pakistan's Premier Authorized Distributor</span>
        </motion.div>

        {/* Main headline */}
        <div style={{ overflow:"hidden", marginBottom:8 }}>
          <motion.h1
            initial={{ y:80, opacity:0 }}
            animate={{ y:0, opacity:1 }}
            transition={{ duration:.8, delay:.2, ease:[.22,1,.36,1] }}
            style={{
              fontFamily:"var(--font-display)",
              fontSize:"clamp(42px, 8vw, 88px)",
              fontWeight:800,
              lineHeight:1.0,
              color:"#F5F5F7",
              letterSpacing:"-0.03em",
            }}
          >
            Official Apple &
          </motion.h1>
        </div>
        <div style={{ overflow:"hidden", marginBottom:24 }}>
          <motion.h1
            initial={{ y:80, opacity:0 }}
            animate={{ y:0, opacity:1 }}
            transition={{ duration:.8, delay:.32, ease:[.22,1,.36,1] }}
            style={{
              fontFamily:"var(--font-display)",
              fontSize:"clamp(42px, 8vw, 88px)",
              fontWeight:800,
              lineHeight:1.0,
              letterSpacing:"-0.03em",
              background:"linear-gradient(135deg, #C8A96E 0%, #F0D898 50%, #C8A96E 100%)",
              WebkitBackgroundClip:"text",
              WebkitTextFillColor:"transparent",
              backgroundClip:"text",
            }}
          >
            Nothing Distributor
          </motion.h1>
        </div>

        {/* Sub */}
        <motion.p
          initial={{ opacity:0, y:24 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:.7, delay:.45 }}
          style={{
            fontFamily:"var(--font-body)",
            fontSize:"clamp(16px, 2vw, 20px)",
            fontWeight:400,
            color:"#6E6E73",
            lineHeight:1.65,
            maxWidth:580,
            marginBottom:40,
          }}
        >
          Supplying genuine Apple and Nothing devices to retailers, bulk buyers,
          and corporate partners across Pakistan — with official warranty and trade pricing.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity:0, y:24 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:.7, delay:.56 }}
          style={{ display:"flex", alignItems:"center", gap:12, flexWrap:"wrap", justifyContent:"center" }}
        >
          <motion.a
            href="#quote"
            whileHover={{ scale:1.04, boxShadow:"0 8px 32px rgba(200,169,110,.35)" }}
            whileTap={{ scale:.96 }}
            style={{
              display:"flex", alignItems:"center", gap:8,
              padding:"15px 28px", borderRadius:14,
              fontFamily:"var(--font-body)", fontSize:15, fontWeight:700,
              background:"linear-gradient(135deg,#C8A96E 0%,#7A5C0A 100%)",
              color:"#050505", textDecoration:"none",
              boxShadow:"0 4px 20px rgba(200,169,110,.2)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Get Free Quote
          </motion.a>

          <motion.a
            href="https://wa.me/923001234567"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale:1.04 }} whileTap={{ scale:.96 }}
            style={{
              display:"flex", alignItems:"center", gap:8,
              padding:"15px 28px", borderRadius:14,
              fontFamily:"var(--font-body)", fontSize:15, fontWeight:700,
              background:"rgba(37,209,102,.1)",
              border:"1px solid rgba(37,209,102,.25)",
              color:"#25D166", textDecoration:"none",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </motion.a>

          <motion.a
            href="tel:+923001234567"
            whileHover={{ scale:1.04 }} whileTap={{ scale:.96 }}
            style={{
              display:"flex", alignItems:"center", gap:8,
              padding:"15px 28px", borderRadius:14,
              fontFamily:"var(--font-body)", fontSize:15, fontWeight:700,
              border:"1px solid rgba(255,255,255,.1)",
              background:"rgba(255,255,255,.04)",
              color:"#A1A1A6", textDecoration:"none",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            0300 123 4567
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity:0 }}
          animate={{ opacity:1 }}
          transition={{ delay:.8, duration:.7 }}
          style={{
            display:"flex", flexWrap:"wrap", gap:12,
            justifyContent:"center", marginTop:48,
          }}
        >
          {BADGES.map((b, i) => (
            <motion.div key={b.text}
              initial={{ opacity:0, y:12 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:.85 + i*.08 }}
              style={{
                display:"flex", alignItems:"center", gap:8,
                padding:"8px 16px", borderRadius:10,
                background:"rgba(255,255,255,.04)",
                border:"1px solid rgba(255,255,255,.08)",
              }}
            >
              <span style={{ fontSize:14 }}>{b.icon}</span>
              <span style={{
                fontFamily:"var(--font-body)", fontSize:12, fontWeight:500,
                color:"#6E6E73", letterSpacing:"0.02em"
              }}>{b.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Stats bar ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity:0, y:40 }}
        animate={{ opacity:1, y:0 }}
        transition={{ delay:1.0, duration:.7, ease:[.22,1,.36,1] }}
        style={{
          position:"relative", zIndex:2,
          maxWidth:900, width:"100%", padding:"0 24px",
          marginTop:64,
        }}
      >
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(4, 1fr)",
          gap:1,
          background:"rgba(255,255,255,.06)",
          borderRadius:16,
          overflow:"hidden",
          border:"1px solid rgba(255,255,255,.06)",
        }}>
          {STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:1.1 + i*.1 }}
              style={{
                display:"flex", flexDirection:"column",
                alignItems:"center", justifyContent:"center",
                padding:"28px 16px",
                background:"rgba(255,255,255,.02)",
                textAlign:"center",
              }}
            >
              <span style={{
                fontFamily:"var(--font-display)",
                fontSize:"clamp(24px, 3vw, 34px)",
                fontWeight:800, color:"#F5F5F7",
                letterSpacing:"-0.02em", lineHeight:1,
              }}>{s.value}</span>
              <span style={{
                fontFamily:"var(--font-body)",
                fontSize:11, fontWeight:500,
                color:"#6E6E73", marginTop:6,
                letterSpacing:"0.04em", textTransform:"uppercase"
              }}>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:1.4 }}
        style={{
          position:"absolute", bottom:32, left:"50%",
          transform:"translateX(-50%)",
          display:"flex", flexDirection:"column",
          alignItems:"center", gap:8, zIndex:2,
        }}
      >
        <span style={{
          fontFamily:"var(--font-body)", fontSize:10, fontWeight:500,
          color:"#3A3A3A", letterSpacing:"0.15em", textTransform:"uppercase"
        }}>Scroll</span>
        <motion.div
          animate={{ y:[0,6,0] }}
          transition={{ repeat:Infinity, duration:1.6, ease:"easeInOut" }}
          style={{
            width:1, height:32,
            background:"linear-gradient(to bottom, #C8A96E, transparent)"
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 600px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}