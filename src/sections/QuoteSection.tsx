"use client";

import { motion } from "framer-motion";
import LeadForm from "./LeadForm";

const CONTACT_METHODS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "+92 300 123 4567",
    href: "https://wa.me/923001234567",
    color: "#25D166",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
    label: "Phone",
    value: "+92 300 123 4567",
    href: "tel:+923001234567",
    color: "#C8A96E",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "sales@horizontech.pk",
    href: "mailto:sales@horizontech.pk",
    color: "#A1A1A6",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: "Address",
    value: "Hall Road, Lahore, Punjab",
    href: "https://maps.google.com/?q=Hall+Road+Lahore",
    color: "#A1A1A6",
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
  { day: "Saturday",        time: "10:00 AM – 5:00 PM" },
  { day: "Sunday",          time: "Closed"             },
];

export default function QuoteSection() {
  return (
    <section id="quote" style={{
      background:"#050505",
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
          style={{ textAlign:"center", marginBottom:72 }}
        >
          <p style={{
            fontFamily:"var(--font-body)", fontSize:11, fontWeight:600,
            color:"#C8A96E", letterSpacing:"0.18em",
            textTransform:"uppercase", marginBottom:14,
          }}>Get a Quote</p>
          <h2 style={{
            fontFamily:"var(--font-display)",
            fontSize:"clamp(28px,5vw,52px)",
            fontWeight:800, lineHeight:1.1,
            color:"#F5F5F7", letterSpacing:"-0.03em", marginBottom:12,
          }}>
            Let's Talk Business
          </h2>
          <p style={{
            fontFamily:"var(--font-body)", fontSize:16, color:"#6E6E73",
            maxWidth:460, margin:"0 auto"
          }}>
            Fill in the form and we'll send you trade pricing within 2–4 hours.
          </p>
        </motion.div>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          gap:32, alignItems:"start",
        }}>
          {/* Form */}
          <motion.div
            initial={{ opacity:0, y:32 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:"-40px" }}
            transition={{ duration:.65 }}
          >
            <LeadForm />
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity:0, y:32 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, margin:"-40px" }}
            transition={{ duration:.65, delay:.1 }}
            style={{ display:"flex", flexDirection:"column", gap:20 }}
          >
            {/* Contact methods */}
            <div style={{
              padding:28, borderRadius:16,
              background:"#0C0C0C",
              border:"1px solid rgba(255,255,255,0.07)",
            }}>
              <p style={{
                fontFamily:"var(--font-display)", fontSize:16, fontWeight:700,
                color:"#F5F5F7", marginBottom:20
              }}>Contact Us Directly</p>
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {CONTACT_METHODS.map(c => (
                  <a key={c.label} href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      display:"flex", alignItems:"center", gap:14,
                      padding:"12px 14px", borderRadius:10,
                      background:"rgba(255,255,255,0.02)",
                      border:"1px solid rgba(255,255,255,0.06)",
                      textDecoration:"none",
                      transition:"border-color .2s, background .2s",
                    }}
                    onMouseEnter={e=>{
                      (e.currentTarget as HTMLElement).style.borderColor="rgba(200,169,110,.2)";
                      (e.currentTarget as HTMLElement).style.background="rgba(200,169,110,.04)";
                    }}
                    onMouseLeave={e=>{
                      (e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.02)";
                    }}
                  >
                    <div style={{
                      width:36, height:36, borderRadius:9, flexShrink:0,
                      background:`${c.color}18`,
                      border:`1px solid ${c.color}28`,
                      display:"flex", alignItems:"center", justifyContent:"center",
                      color:c.color,
                    }}>
                      {c.icon}
                    </div>
                    <div>
                      <p style={{
                        fontFamily:"var(--font-body)", fontSize:11, fontWeight:600,
                        color:"#6E6E73", letterSpacing:"0.06em",
                        textTransform:"uppercase", marginBottom:2
                      }}>{c.label}</p>
                      <p style={{
                        fontFamily:"var(--font-body)", fontSize:14, fontWeight:500,
                        color:"#A1A1A6"
                      }}>{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business hours */}
            <div style={{
              padding:24, borderRadius:16,
              background:"#0C0C0C",
              border:"1px solid rgba(255,255,255,0.07)",
            }}>
              <p style={{
                fontFamily:"var(--font-display)", fontSize:15, fontWeight:700,
                color:"#F5F5F7", marginBottom:16
              }}>Business Hours</p>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {HOURS.map(h => (
                  <div key={h.day} style={{
                    display:"flex", alignItems:"center",
                    justifyContent:"space-between",
                  }}>
                    <span style={{
                      fontFamily:"var(--font-body)", fontSize:13, fontWeight:500,
                      color:"#6E6E73"
                    }}>{h.day}</span>
                    <span style={{
                      fontFamily:"var(--font-body)", fontSize:13, fontWeight:600,
                      color: h.time === "Closed" ? "#3A3A3A" : "#A1A1A6"
                    }}>{h.time}</span>
                  </div>
                ))}
              </div>
              <div style={{
                marginTop:16, padding:"10px 14px", borderRadius:8,
                background:"rgba(37,209,102,.06)",
                border:"1px solid rgba(37,209,102,.12)",
              }}>
                <p style={{
                  fontFamily:"var(--font-body)", fontSize:12, fontWeight:500,
                  color:"#25D166"
                }}>
                  💬 WhatsApp available 7 days · 8 AM – 10 PM
                </p>
              </div>
            </div>

            {/* Map placeholder */}
            <div style={{
              padding:0, borderRadius:16, overflow:"hidden",
              border:"1px solid rgba(255,255,255,0.07)", height:180,
              background:"#0C0C0C",
              display:"flex", alignItems:"center", justifyContent:"center",
              position:"relative",
            }}>
              <div style={{
                position:"absolute", inset:0,
                backgroundImage:`
                  linear-gradient(rgba(200,169,110,.06) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(200,169,110,.06) 1px, transparent 1px)
                `,
                backgroundSize:"24px 24px",
              }}/>
              <div style={{ position:"relative", textAlign:"center" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="#C8A96E" strokeWidth="1.8" strokeLinecap="round"
                  strokeLinejoin="round" style={{ marginBottom:8 }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <p style={{
                  fontFamily:"var(--font-body)", fontSize:13, fontWeight:600,
                  color:"#A1A1A6"
                }}>Hall Road, Lahore</p>
                <a href="https://maps.google.com/?q=Hall+Road+Lahore"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    fontFamily:"var(--font-body)", fontSize:11, fontWeight:600,
                    color:"#C8A96E", textDecoration:"none", marginTop:4,
                    display:"inline-block", letterSpacing:"0.06em"
                  }}>
                  View on Google Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}