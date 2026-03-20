"use client";

import { motion } from "framer-motion";

const LINKS = {
  Products: [
    { label:"iPhone 16 Series",    href:"#iphone"       },
    { label:"MacBook Pro & Air",   href:"#macbook"      },
    { label:"iPad Series",         href:"#ipad"         },
    { label:"Apple Watch",         href:"#watch"        },
    { label:"AirPods Pro",         href:"#airpods"      },
    { label:"Nothing Phone 3a",    href:"#nothing-phone"},
    { label:"Nothing Ear / CMF",   href:"#nothing-ear"  },
  ],
  Services: [
    { label:"Retail Distribution", href:"#services"  },
    { label:"Corporate Orders",    href:"#corporate" },
    { label:"Official Warranty",   href:"#warranty"  },
    { label:"Trade-In Program",    href:"#tradein"   },
    { label:"EMI & Financing",     href:"#emi"       },
    { label:"Partner Programme",   href:"#services"  },
  ],
  Company: [
    { label:"About Us",         href:"#about"   },
    { label:"Our Credentials",  href:"#about"   },
    { label:"Leadership",       href:"#about"   },
    { label:"Contact",          href:"#contact" },
    { label:"Get a Quote",      href:"#quote"   },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      background:"#000000",
      borderTop:"1px solid rgba(255,255,255,0.06)",
      padding:"80px 0 0",
    }}>
      <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 24px" }}>
        {/* Top row */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(min(100%,200px), 1fr))",
          gap:48, marginBottom:64,
        }}>
          {/* Brand col */}
          <div style={{ gridColumn:"span 1" }}>
            {/* Logo */}
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
              <div style={{ position:"relative", width:32, height:32 }}>
                <div style={{
                  position:"absolute", inset:0, borderRadius:8,
                  background:"linear-gradient(135deg,#C8A96E,#7A5C0A)"
                }}/>
                <div style={{
                  position:"absolute", inset:2, borderRadius:6,
                  background:"#000000",
                  display:"flex", alignItems:"center", justifyContent:"center"
                }}>
                  <span style={{
                    fontFamily:"var(--font-display)", fontWeight:800,
                    fontSize:12, color:"#C8A96E"
                  }}>H</span>
                </div>
              </div>
              <div>
                <p style={{
                  fontFamily:"var(--font-display)", fontWeight:800,
                  fontSize:12, letterSpacing:"0.07em", color:"#F5F5F7"
                }}>HORIZON TECH</p>
                <p style={{
                  fontFamily:"var(--font-body)", fontSize:9, fontWeight:500,
                  letterSpacing:"0.18em", color:"#C8A96E",
                  textTransform:"uppercase", marginTop:1
                }}>Official Distributor</p>
              </div>
            </div>

            <p style={{
              fontFamily:"var(--font-body)", fontSize:13, fontWeight:400,
              color:"#6E6E73", lineHeight:1.7, marginBottom:20, maxWidth:220,
            }}>
              Pakistan's most trusted authorized distributor for Apple and Nothing devices.
            </p>

            {/* Brand badges */}
            <div style={{ display:"flex", gap:8, marginBottom:24 }}>
              {["🍎 Apple", "◎ Nothing"].map(b => (
                <span key={b} style={{
                  padding:"4px 12px", borderRadius:999,
                  fontFamily:"var(--font-body)", fontSize:11, fontWeight:600,
                  color:"#C8A96E",
                  background:"rgba(200,169,110,.08)",
                  border:"1px solid rgba(200,169,110,.15)",
                }}>{b}</span>
              ))}
            </div>

            {/* Social */}
            <div style={{ display:"flex", gap:10 }}>
              {[
                { label:"LinkedIn", href:"#", icon:(
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                )},
                { label:"Instagram", href:"#", icon:(
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                )},
                { label:"Facebook", href:"#", icon:(
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                )},
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  style={{
                    width:34, height:34, borderRadius:8,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    background:"rgba(255,255,255,.05)",
                    border:"1px solid rgba(255,255,255,.08)",
                    color:"#6E6E73", textDecoration:"none",
                    transition:"color .2s, border-color .2s",
                  }}
                  onMouseEnter={e=>{
                    (e.currentTarget as HTMLElement).style.color="#C8A96E";
                    (e.currentTarget as HTMLElement).style.borderColor="rgba(200,169,110,.25)";
                  }}
                  onMouseLeave={e=>{
                    (e.currentTarget as HTMLElement).style.color="#6E6E73";
                    (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.08)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p style={{
                fontFamily:"var(--font-body)", fontSize:11, fontWeight:700,
                color:"#F5F5F7", letterSpacing:"0.12em",
                textTransform:"uppercase", marginBottom:16
              }}>{heading}</p>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {links.map(l => (
                  <a key={l.label} href={l.href}
                    style={{
                      fontFamily:"var(--font-body)", fontSize:13, fontWeight:400,
                      color:"#6E6E73", textDecoration:"none",
                      transition:"color .2s",
                    }}
                    onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.color="#A1A1A6"; }}
                    onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.color="#6E6E73"; }}
                  >{l.label}</a>
                ))}
              </div>
            </div>
          ))}

          {/* Contact col */}
          <div>
            <p style={{
              fontFamily:"var(--font-body)", fontSize:11, fontWeight:700,
              color:"#F5F5F7", letterSpacing:"0.12em",
              textTransform:"uppercase", marginBottom:16
            }}>Contact</p>
            <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
              {[
                { icon:"📍", text:"Hall Road, Lahore, Punjab, Pakistan" },
                { icon:"📞", text:"+92 300 123 4567" },
                { icon:"✉️", text:"sales@horizontech.pk" },
                { icon:"⏰", text:"Mon–Fri 9AM–7PM" },
              ].map(c => (
                <div key={c.icon} style={{
                  display:"flex", gap:10, alignItems:"flex-start"
                }}>
                  <span style={{ fontSize:12, lineHeight:1.7, flexShrink:0 }}>{c.icon}</span>
                  <span style={{
                    fontFamily:"var(--font-body)", fontSize:13, fontWeight:400,
                    color:"#6E6E73", lineHeight:1.6
                  }}>{c.text}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="https://wa.me/923001234567"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale:1.03 }} whileTap={{ scale:.97 }}
              style={{
                display:"inline-flex", alignItems:"center", gap:8,
                marginTop:20, padding:"10px 18px", borderRadius:10,
                fontFamily:"var(--font-body)", fontSize:13, fontWeight:700,
                background:"rgba(37,209,102,.1)",
                border:"1px solid rgba(37,209,102,.2)",
                color:"#25D166", textDecoration:"none",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop:"1px solid rgba(255,255,255,0.06)",
          padding:"24px 0",
          display:"flex", flexWrap:"wrap",
          alignItems:"center", justifyContent:"space-between", gap:12,
        }}>
          <p style={{
            fontFamily:"var(--font-body)", fontSize:12, fontWeight:400, color:"#3A3A3A"
          }}>
            © {new Date().getFullYear()} Horizon Tech Pvt. Ltd. · All rights reserved.
          </p>
          <div style={{ display:"flex", gap:20 }}>
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(l => (
              <a key={l} href="#"
                style={{
                  fontFamily:"var(--font-body)", fontSize:12, fontWeight:400,
                  color:"#3A3A3A", textDecoration:"none",
                  transition:"color .2s",
                }}
                onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.color="#6E6E73"; }}
                onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.color="#3A3A3A"; }}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}