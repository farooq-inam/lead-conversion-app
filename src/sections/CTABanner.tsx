"use client";

import { motion } from "framer-motion";

/**
 * CTABanner
 * High-contrast mid-page conversion section.
 * Place between Services and Credibility in page.tsx.
 */
export default function CTABanner() {
  return (
    <section style={{
      background: "#050505",
      padding:    "0 24px 80px",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65 }}
          style={{
            borderRadius: 24,
            padding:      "64px 56px",
            position:     "relative",
            overflow:     "hidden",
            background:   "linear-gradient(135deg, #0F0D09 0%, #1A1408 50%, #0F0D09 100%)",
            border:       "1px solid rgba(200,169,110,0.18)",
          }}
        >
          {/* Background glow */}
          <div style={{
            position:     "absolute",
            top:          "-30%",
            left:         "50%",
            transform:    "translateX(-50%)",
            width:        "60%",
            height:       "120%",
            background:   "radial-gradient(ellipse, rgba(200,169,110,0.08) 0%, transparent 70%)",
            pointerEvents:"none",
          }} />

          {/* Grid texture */}
          <div style={{
            position:    "absolute",
            inset:       0,
            backgroundImage: `
              linear-gradient(rgba(200,169,110,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200,169,110,0.04) 1px, transparent 1px)
            `,
            backgroundSize:  "48px 48px",
            pointerEvents:   "none",
          }} />

          <div style={{
            position:       "relative",
            zIndex:         1,
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            gap:            40,
            flexWrap:       "wrap",
          }}>
            {/* Left: copy */}
            <div style={{ maxWidth: 580 }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  display:       "inline-flex",
                  alignItems:    "center",
                  gap:           8,
                  padding:       "5px 14px",
                  borderRadius:  999,
                  background:    "rgba(200,169,110,0.1)",
                  border:        "1px solid rgba(200,169,110,0.2)",
                  marginBottom:  20,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C8A96E", display: "block" }} />
                <span style={{
                  fontFamily:    "var(--font-body)",
                  fontSize:      11,
                  fontWeight:    700,
                  color:         "#C8A96E",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}>
                  Limited Allocations Available
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                style={{
                  fontFamily:    "var(--font-display)",
                  fontSize:      "clamp(26px, 4vw, 44px)",
                  fontWeight:    800,
                  lineHeight:    1.1,
                  letterSpacing: "-0.03em",
                  color:         "#F5F5F7",
                  marginBottom:  14,
                }}
              >
                Secure Your iPhone 16<br />
                <span style={{
                  background:            "linear-gradient(135deg,#C8A96E,#F0D898)",
                  WebkitBackgroundClip:  "text",
                  WebkitTextFillColor:   "transparent",
                  backgroundClip:        "text",
                }}>
                  Launch Allocation Today
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   15,
                  fontWeight: 400,
                  color:      "#6E6E73",
                  lineHeight: 1.7,
                }}
              >
                iPhone 16 units are moving fast. Register your interest now and our
                team will confirm your allocation with trade pricing within 4 hours.
              </motion.p>
            </div>

            {/* Right: action card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display:       "flex",
                flexDirection: "column",
                gap:           12,
                minWidth:      220,
              }}
            >
              {/* Stats */}
              <div style={{
                display:       "flex",
                gap:           16,
                marginBottom:  8,
              }}>
                {[
                  { value: "4 hrs",  label: "Response time"  },
                  { value: "100%",   label: "Genuine stock"  },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: "center" }}>
                    <p style={{
                      fontFamily:    "var(--font-display)",
                      fontSize:      22,
                      fontWeight:    800,
                      color:         "#C8A96E",
                      letterSpacing: "-0.02em",
                      lineHeight:    1,
                    }}>{s.value}</p>
                    <p style={{
                      fontFamily: "var(--font-body)",
                      fontSize:   10,
                      fontWeight: 500,
                      color:      "#6E6E73",
                      marginTop:  4,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}>{s.label}</p>
                  </div>
                ))}
              </div>

              <motion.a
                href="#quote"
                whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(200,169,110,0.35)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  gap:            8,
                  padding:        "14px 28px",
                  borderRadius:   12,
                  fontFamily:     "var(--font-body)",
                  fontSize:       14,
                  fontWeight:     700,
                  background:     "linear-gradient(135deg,#C8A96E 0%,#7A5C0A 100%)",
                  color:          "#050505",
                  textDecoration: "none",
                  boxShadow:      "0 4px 20px rgba(200,169,110,0.2)",
                }}
              >
                Reserve My Allocation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>

              <motion.a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  justifyContent: "center",
                  gap:            8,
                  padding:        "13px 28px",
                  borderRadius:   12,
                  fontFamily:     "var(--font-body)",
                  fontSize:       14,
                  fontWeight:     600,
                  background:     "rgba(37,209,102,0.08)",
                  border:         "1px solid rgba(37,209,102,0.2)",
                  color:          "#25D166",
                  textDecoration: "none",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Ask on WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}