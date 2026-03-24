"use client";

import { motion } from "framer-motion";

const TRUST_SIGNALS = [
  { label: "Apple Authorised Reseller",         verified: true  },
  { label: "Nothing Certified Distributor",     verified: true  },
  { label: "SECP Registered Company",           verified: true  },
  { label: "NTN & Active Tax Filer",            verified: true  },
  { label: "PTA Compliance Certified",          verified: true  },
  { label: "ISO-aligned Supply Chain Process",  verified: true  },
];

const MILESTONES = [
  { year:"2016", event:"Founded as a mobile accessories importer in Lahore's Hafeez Centre" },
  { year:"2018", event:"Became official Apple Authorised Reseller for Punjab region" },
  { year:"2020", event:"Scaled to 400+ retail partner network across 12 cities" },
  { year:"2022", event:"Secured Nothing Certified Distributor status for Pakistan" },
  { year:"2024", event:"Crossed PKR 1B in annual device distribution turnover" },
];

export default function Credibility() {
  return (
    <section id="about" style={{
      background:"#050505",
      padding:"80px 0",
      borderTop:"1px solid rgba(255,255,255,0.04)",
    }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px" }}>
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(min(100%,480px), 1fr))",
          gap:64, alignItems:"start",
        }}>
          {/* Left: CEO card */}
          <motion.div
            initial={{ opacity:0, x:-32 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:"-60px" }}
            transition={{ duration:.7 }}
          >
            <p style={{
              fontFamily:"var(--font-body)", fontSize:11, fontWeight:600,
              color:"#C8A96E", letterSpacing:"0.18em",
              textTransform:"uppercase", marginBottom:14,
            }}>Leadership</p>

            <h2 style={{
              fontFamily:"var(--font-display)",
              fontSize:"clamp(28px,4vw,44px)",
              fontWeight:800, lineHeight:1.1,
              color:"#F5F5F7", letterSpacing:"-0.03em",
              marginBottom:24,
            }}>
              Built on Trust &<br/>Industry Expertise
            </h2>

            {/* CEO card */}
            <div style={{
              padding:28, borderRadius:16,
              background:"#0C0C0C",
              border:"1px solid rgba(255,255,255,0.08)",
              marginBottom:28,
            }}>
              <div style={{
                display:"flex", alignItems:"center", gap:16, marginBottom:16
              }}>
                {/* Avatar placeholder */}
                <div style={{
                  width:56, height:56, borderRadius:14,
                  background:"linear-gradient(135deg,rgba(200,169,110,.2),rgba(200,169,110,.05))",
                  border:"1px solid rgba(200,169,110,.18)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  flexShrink:0,
                }}>
                  <span style={{
                    fontFamily:"var(--font-display)", fontWeight:800,
                    fontSize:20, color:"#C8A96E"
                  }}>A</span>
                </div>
                <div>
                  <p style={{
                    fontFamily:"var(--font-display)", fontWeight:700,
                    fontSize:18, color:"#F5F5F7", letterSpacing:"-0.01em"
                  }}>Fareed Ullah Jan</p>
                  <p style={{
                    fontFamily:"var(--font-body)", fontWeight:500,
                    fontSize:12, color:"#C8A96E", marginTop:2
                  }}>CEO & Founder, Yellostone Tech</p>
                </div>
              </div>

              <p style={{
                fontFamily:"var(--font-body)", fontSize:14, fontWeight:400,
                color:"#6E6E73", lineHeight:1.75, fontStyle:"italic",
              }}>
                "I started Yellostone Tech with one goal: bring genuine Apple and Nothing products
                to every retailer in Pakistan at honest prices. Eight years later, we've become
                the most trusted distributor in Punjab — and we're just getting started."
              </p>
            </div>

            {/* Milestones */}
            <div style={{ position:"relative", paddingLeft:20 }}>
              {/* vertical line */}
              <div style={{
                position:"absolute", left:6, top:8, bottom:8,
                width:1,
                background:"linear-gradient(to bottom, #C8A96E, rgba(200,169,110,.1))",
              }}/>

              {MILESTONES.map((m, i) => (
                <motion.div key={m.year}
                  initial={{ opacity:0, x:-12 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ delay: i*.1 }}
                  style={{
                    display:"flex", gap:16,
                    marginBottom: i < MILESTONES.length-1 ? 20 : 0,
                    position:"relative",
                  }}
                >
                  {/* dot */}
                  <div style={{
                    position:"absolute", left:-17, top:6,
                    width:8, height:8, borderRadius:"50%",
                    background: i===0 ? "#C8A96E" : "#1A1A1A",
                    border:`1px solid ${i===0?"#C8A96E":"rgba(200,169,110,.3)"}`,
                    flexShrink:0,
                  }}/>
                  <div>
                    <span style={{
                      fontFamily:"var(--font-display)", fontWeight:700,
                      fontSize:12, color:"#C8A96E", letterSpacing:"0.06em",
                    }}>{m.year}</span>
                    <p style={{
                      fontFamily:"var(--font-body)", fontSize:13, fontWeight:400,
                      color:"#6E6E73", lineHeight:1.55, marginTop:2,
                    }}>{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Trust signals */}
          <motion.div
            initial={{ opacity:0, x:32 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true, margin:"-60px" }}
            transition={{ duration:.7, delay:.1 }}
          >
            <p style={{
              fontFamily:"var(--font-body)", fontSize:11, fontWeight:600,
              color:"#C8A96E", letterSpacing:"0.18em",
              textTransform:"uppercase", marginBottom:14,
            }}>Certifications</p>
            <h3 style={{
              fontFamily:"var(--font-display)",
              fontSize:"clamp(24px,3vw,36px)",
              fontWeight:800, lineHeight:1.1,
              color:"#F5F5F7", letterSpacing:"-0.02em",
              marginBottom:24,
            }}>Verified. Official.<br/>Accountable.</h3>

            <p style={{
              fontFamily:"var(--font-body)", fontSize:14,
              color:"#6E6E73", lineHeight:1.7, marginBottom:32,
            }}>
              Every badge below represents a formal certification or legal compliance status.
              Not marketing language — actual verified status.
            </p>

            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {TRUST_SIGNALS.map((ts, i) => (
                <motion.div key={ts.label}
                  initial={{ opacity:0, x:16 }}
                  whileInView={{ opacity:1, x:0 }}
                  viewport={{ once:true }}
                  transition={{ delay: i*.07 }}
                  style={{
                    display:"flex", alignItems:"center", justifyContent:"space-between",
                    padding:"14px 18px", borderRadius:12,
                    background:"#0C0C0C",
                    border:"1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{
                      width:8, height:8, borderRadius:"50%",
                      background:"#C8A96E", flexShrink:0
                    }}/>
                    <span style={{
                      fontFamily:"var(--font-body)", fontSize:14, fontWeight:500,
                      color:"#A1A1A6"
                    }}>{ts.label}</span>
                  </div>
                  <div style={{
                    display:"flex", alignItems:"center", gap:5,
                    padding:"3px 10px", borderRadius:999,
                    background:"rgba(37,209,102,.08)",
                    border:"1px solid rgba(37,209,102,.18)",
                  }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#25D166"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{
                      fontFamily:"var(--font-body)", fontSize:10, fontWeight:700,
                      color:"#25D166", letterSpacing:"0.06em"
                    }}>Verified</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA card */}
            <motion.div
              initial={{ opacity:0, y:16 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:.5 }}
              style={{
                marginTop:28, padding:24, borderRadius:16,
                background:"rgba(200,169,110,.06)",
                border:"1px solid rgba(200,169,110,.14)",
              }}
            >
              <p style={{
                fontFamily:"var(--font-display)", fontSize:16, fontWeight:700,
                color:"#F5F5F7", marginBottom:8
              }}>Become a Partner</p>
              <p style={{
                fontFamily:"var(--font-body)", fontSize:13, color:"#6E6E73",
                lineHeight:1.6, marginBottom:16
              }}>
                Looking for a reliable supplier with official authorization? Let's talk
                about building a long-term supply relationship.
              </p>
              <a href="#quote"
                style={{
                  display:"inline-flex", alignItems:"center", gap:8,
                  padding:"11px 20px", borderRadius:10,
                  fontFamily:"var(--font-body)", fontSize:13, fontWeight:700,
                  background:"linear-gradient(135deg,#C8A96E,#7A5C0A)",
                  color:"#050505", textDecoration:"none",
                }}
              >
                Start a Partnership
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}