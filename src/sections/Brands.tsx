"use client";

import { motion } from "framer-motion";

const BRANDS = [
  {
    id: "apple",
    name: "Apple",
    icon: "🍎",
    tag: "Authorised Reseller",
    tagline: "The world's most trusted devices. Officially supplied.",
    accent: "#F5F5F7",
    accentDim: "rgba(245,245,247,0.06)",
    accentBorder: "rgba(245,245,247,0.1)",
    products: [
      { name: "iPhone 16 Series",     detail: "A18 Pro chip · 48MP ProRes · Titanium", badge:"New" },
      { name: "MacBook Pro M4",        detail: "22-hr battery · Liquid Retina XDR"             },
      { name: "MacBook Air M3",        detail: "Ultra-thin · Fanless · All-day power"          },
      { name: "iPad Pro M4",           detail: "OLED · Apple Pencil Pro compatible"            },
      { name: "Apple Watch Series 10", detail: "Largest display ever · Health sensors"         },
      { name: "AirPods Pro 2",         detail: "H2 chip · Adaptive Audio · USB-C"             },
    ],
  },
  {
    id: "nothing",
    name: "Nothing",
    icon: "◎",
    tag: "Certified Distributor",
    tagline: "Transparent design. Distinct identity. Genuine stock.",
    accent: "#C8A96E",
    accentDim: "rgba(200,169,110,0.07)",
    accentBorder: "rgba(200,169,110,0.15)",
    products: [
      { name: "Nothing Phone 3a",   detail: "Snapdragon 7s Gen 3 · Glyph Interface", badge:"Hot" },
      { name: "Nothing Phone 3a Pro",detail: "Periscope zoom · 50MP triple camera"             },
      { name: "Nothing Phone (2a)", detail: "Dimensity 7200 Pro · 45W fast charge"             },
      { name: "Nothing Ear (open)", detail: "Open-ear · Dual-driver · 8-hr playtime"          },
      { name: "CMF Buds Pro 2",     detail: "11mm driver · 45dB ANC · Type-C"                 },
      { name: "CMF Watch Pro 2",    detail: "1.32\" AMOLED · 13-day battery life"             },
    ],
  },
];

export default function Brands() {
  return (
    <section
      id="products"
      style={{
        background: "#050505",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle divider glow */}
      <div style={{
        position:"absolute", top:"50%", left:"50%",
        transform:"translate(-50%,-50%)",
        width:1, height:"70%",
        background:"linear-gradient(to bottom, transparent, rgba(200,169,110,.15), transparent)",
        pointerEvents:"none",
      }}/>

      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px" }}>
        {/* Section header */}
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
          }}>Our Brands</p>
          <h2 style={{
            fontFamily:"var(--font-display)",
            fontSize:"clamp(32px,5vw,56px)",
            fontWeight:800, lineHeight:1.1,
            color:"#F5F5F7", letterSpacing:"-0.03em",
            marginBottom:16,
          }}>
            Two Icons. One Source.
          </h2>
          <p style={{
            fontFamily:"var(--font-body)", fontSize:17, fontWeight:400,
            color:"#6E6E73", maxWidth:520, margin:"0 auto", lineHeight:1.7,
          }}>
            Horizon Tech is the only distributor in Lahore carrying both Apple and Nothing
            under one roof — with full official warranty coverage.
          </p>
        </motion.div>

        {/* Brand cards */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
          gap:20,
        }}>
          {BRANDS.map((brand, bi) => (
            <motion.div
              key={brand.id}
              initial={{ opacity:0, y:32 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-40px" }}
              transition={{ duration:.65, delay:bi*.12 }}
              style={{
                borderRadius:20,
                background:"#0C0C0C",
                border:`1px solid ${brand.accentBorder}`,
                padding:32,
                position:"relative",
                overflow:"hidden",
              }}
            >
              {/* Card glow */}
              <div style={{
                position:"absolute", top:-40, right:-40,
                width:200, height:200, borderRadius:"50%",
                background:`radial-gradient(circle, ${brand.accentDim} 0%, transparent 70%)`,
                pointerEvents:"none",
              }}/>

              {/* Brand header */}
              <div style={{
                display:"flex", alignItems:"flex-start",
                justifyContent:"space-between", marginBottom:24,
              }}>
                <div>
                  <div style={{
                    display:"inline-flex", alignItems:"center", gap:6,
                    padding:"4px 12px", borderRadius:999, marginBottom:12,
                    background:brand.accentDim, border:`1px solid ${brand.accentBorder}`,
                  }}>
                    <span style={{ fontSize:12 }}>{brand.icon}</span>
                    <span style={{
                      fontFamily:"var(--font-body)", fontSize:10, fontWeight:700,
                      color:brand.accent, letterSpacing:"0.12em", textTransform:"uppercase"
                    }}>{brand.tag}</span>
                  </div>
                  <h3 style={{
                    fontFamily:"var(--font-display)",
                    fontSize:32, fontWeight:800,
                    color:"#F5F5F7", letterSpacing:"-0.02em",
                    lineHeight:1,
                  }}>{brand.name}</h3>
                </div>
                <span style={{ fontSize:40, lineHeight:1, marginTop:4 }}>{brand.icon}</span>
              </div>

              <p style={{
                fontFamily:"var(--font-body)", fontSize:14, fontWeight:400,
                color:"#6E6E73", marginBottom:24, lineHeight:1.65,
              }}>{brand.tagline}</p>

              {/* Product list */}
              <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
                {brand.products.map((p, pi) => (
                  <motion.div key={p.name}
                    initial={{ opacity:0, x:-12 }}
                    whileInView={{ opacity:1, x:0 }}
                    viewport={{ once:true }}
                    transition={{ delay:bi*.1 + pi*.06 }}
                    style={{
                      display:"flex", alignItems:"center",
                      justifyContent:"space-between",
                      padding:"12px 14px", borderRadius:10,
                      transition:"background .15s",
                    }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,.03)"; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background="transparent"; }}
                  >
                    <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                      <div style={{
                        width:6, height:6, borderRadius:"50%",
                        background:brand.accent, flexShrink:0, opacity:.6
                      }}/>
                      <div>
                        <p style={{
                          fontFamily:"var(--font-body)", fontSize:14, fontWeight:600,
                          color:"#F5F5F7", lineHeight:1.3,
                        }}>{p.name}</p>
                        <p style={{
                          fontFamily:"var(--font-body)", fontSize:11, fontWeight:400,
                          color:"#3A3A3A", lineHeight:1.4, marginTop:2,
                        }}>{p.detail}</p>
                      </div>
                    </div>
                    {p.badge && (
                      <span style={{
                        fontSize:9, fontWeight:900, letterSpacing:"0.1em",
                        padding:"3px 8px", borderRadius:999,
                        background:"#C8A96E", color:"#050505", flexShrink:0,
                      }}>{p.badge}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#quote"
                whileHover={{ scale:1.02 }} whileTap={{ scale:.98 }}
                style={{
                  display:"flex", alignItems:"center", justifyContent:"center",
                  gap:8, width:"100%", marginTop:24,
                  padding:"14px 0", borderRadius:12,
                  fontFamily:"var(--font-body)", fontSize:14, fontWeight:700,
                  background:brand.accentDim,
                  border:`1px solid ${brand.accentBorder}`,
                  color:brand.accent, textDecoration:"none",
                  transition:"border-color .2s",
                }}
              >
                Enquire About {brand.name}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}