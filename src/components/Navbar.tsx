"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

interface NavChild { label: string; href: string; badge?: string; }
interface NavLink  { label: string; href: string; children?: NavChild[]; }

const NAV_LINKS: NavLink[] = [
  {
    label: "Products", href: "#products",
    children: [
      { label: "iPhone 16 Series",       href: "#iphone",        badge: "New" },
      { label: "MacBook Pro & Air",       href: "#macbook"                     },
      { label: "iPad & Accessories",      href: "#ipad"                        },
      { label: "Apple Watch Series 10",   href: "#watch"                       },
      { label: "AirPods Pro",             href: "#airpods"                     },
      { label: "Nothing Phone 3a",        href: "#nothing-phone", badge: "Hot" },
      { label: "Nothing Ear & CMF",       href: "#nothing-ear"                 },
    ],
  },
  {
    label: "Services", href: "#services",
    children: [
      { label: "Official Warranty & Repair", href: "#warranty"  },
      { label: "Trade-In Program",           href: "#tradein"   },
      { label: "Corporate Bulk Orders",      href: "#corporate" },
      { label: "EMI & Financing",            href: "#emi"       },
    ],
  },
  { label: "About Us", href: "#about"   },
  { label: "Contact",  href: "#contact" },
];

/* ─────────────────────────────────────────────────────────────────────────────
   COLOUR TOKENS (navbar-only)
   ─────────────────────────────────────────────────────────────────────────────
   transparent state  = on top of hero (dark background visible behind)
   scrolled state     = dark frosted glass — never goes light/white
   ───────────────────────────────────────────────────────────────────────── */
const T = {
  // Nav background
  navBg:          "transparent",
  navBgScrolled:  "rgba(10, 10, 10, 0.88)",   // dark, not white

  // Nav border
  navBorder:        "rgba(255,255,255,0)",
  navBorderScrolled:"rgba(255,255,255,0.07)",

  // Nav shadow
  navShadow:        "none",
  navShadowScrolled:"0 8px 32px rgba(0,0,0,0.5)",

  // Logo wordmark
  logoText:         "#F5F5F7",   // always white — readable on both states
  logoSub:          "#C8A96E",   // always gold

  // Nav link text
  linkIdle:         "#6E6E73",   // muted on transparent
  linkIdleScrolled: "#A1A1A6",   // slightly brighter on dark frosted
  linkHover:        "#F5F5F7",   // always white on hover

  // Phone number
  phone:            "#6E6E73",
  phoneScrolled:    "#A1A1A6",

  // Hamburger bars
  hamburger:        "#F5F5F7",   // always white — visible on both states
  hamburgerBg:      "rgba(255,255,255,0.07)",

  // Quote button — stays gold always, doesn't flip dark
  quoteBg:          "linear-gradient(135deg,#C8A96E 0%,#7A5C0A 100%)",
  quoteColor:       "#050505",
  quoteShadow:      "0 4px 14px rgba(200,169,110,0.25)",
} as const;

/* ── Logo ─────────────────────────────────────────────────────────────────── */
function Logo() {
  return (
    <a href="/" aria-label="Horizon Tech Home"
      style={{ display:"flex", alignItems:"center", gap:12, textDecoration:"none" }}>
      <div style={{ position:"relative", width:36, height:36 }}>
        <div style={{
          position:"absolute", inset:0, borderRadius:10,
          background:"linear-gradient(135deg,#C8A96E,#7A5C0A)"
        }}/>
        <div style={{
          position:"absolute", inset:2, borderRadius:8,
          background:"#050505",
          display:"flex", alignItems:"center", justifyContent:"center"
        }}>
          <span style={{
            fontFamily:"var(--font-display)", fontWeight:800,
            fontSize:13, color:"#C8A96E", lineHeight:1
          }}>H</span>
        </div>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
        <span style={{
          fontFamily:"var(--font-display)", fontWeight:800,
          fontSize:13, letterSpacing:"0.07em", color: T.logoText,
        }}>HORIZON TECH</span>
        <span style={{
          fontFamily:"var(--font-body)", fontWeight:500,
          fontSize:9, letterSpacing:"0.22em", textTransform:"uppercase",
          color: T.logoSub,
        }}>Official Distributor · Lahore</span>
      </div>
    </a>
  );
}

/* ── Desktop Dropdown ─────────────────────────────────────────────────────── */
function Dropdown({ items }: { items: NavChild[] }) {
  return (
    <motion.div
      initial={{ opacity:0, y:8,  scale:.97 }}
      animate={{ opacity:1, y:0,  scale:1   }}
      exit={{   opacity:0, y:4,  scale:.97  }}
      transition={{ duration:.16, ease:"easeOut" }}
      style={{
        position:"absolute", top:"100%", left:"50%",
        transform:"translateX(-50%)",
        marginTop:10, width:236,
        borderRadius:16, overflow:"hidden", zIndex:50,
        background:"#0F0F0F",
        border:"1px solid rgba(255,255,255,0.09)",
        boxShadow:"0 24px 64px rgba(0,0,0,0.75)",
        backdropFilter:"blur(20px)",
      }}
    >
      <div style={{ padding:6 }}>
        {items.map((item, i) => (
          <motion.a
            key={item.label} href={item.href}
            initial={{ opacity:0, x:-4 }}
            animate={{ opacity:1, x:0  }}
            transition={{ delay: i * .03 }}
            style={{
              display:"flex", alignItems:"center", justifyContent:"space-between",
              padding:"10px 12px", borderRadius:10,
              fontFamily:"var(--font-body)", fontSize:13, fontWeight:500,
              color:"#6E6E73", textDecoration:"none",
              transition:"background .15s, color .15s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(200,169,110,.08)";
              (e.currentTarget as HTMLElement).style.color = "#F5F5F7";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#6E6E73";
            }}
          >
            <span>{item.label}</span>
            {item.badge && (
              <span style={{
                fontSize:9, fontWeight:900, letterSpacing:"0.1em",
                padding:"2px 7px", borderRadius:999,
                background:"#C8A96E", color:"#050505",
              }}>{item.badge}</span>
            )}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Desktop Nav Item ─────────────────────────────────────────────────────── */
function DesktopNavItem({ link, scrolled }: { link: NavLink; scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const idleColor  = scrolled ? T.linkIdleScrolled : T.linkIdle;
  const activeColor = T.linkHover;

  return (
    <div ref={ref} style={{ position:"relative" }}
      onMouseEnter={() => link.children && setOpen(true)}
      onMouseLeave={() => link.children && setOpen(false)}
    >
      <a
        href={link.href}
        onClick={e => link.children && e.preventDefault()}
        style={{
          display:"flex", alignItems:"center", gap:4,
          padding:"8px 4px",
          fontFamily:"var(--font-body)", fontSize:13, fontWeight:600,
          color: open ? activeColor : idleColor,
          textDecoration:"none", transition:"color .2s",
        }}
      >
        {link.label}
        {link.children && (
          <motion.svg
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration:.2 }}
            width="11" height="11" viewBox="0 0 12 12" fill="none"
          >
            <path d="M2 4L6 8L10 4" stroke="currentColor"
              strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
        )}
      </a>
      <AnimatePresence>
        {open && link.children && <Dropdown items={link.children} />}
      </AnimatePresence>
    </div>
  );
}

/* ── Mobile Drawer ────────────────────────────────────────────────────────── */
function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);
  useEffect(() => { if (!open) setExpanded(null); }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            transition={{ duration:.25 }}
            onClick={onClose}
            style={{
              position:"fixed", inset:0, zIndex:40,
              background:"rgba(0,0,0,0.75)", backdropFilter:"blur(5px)",
            }}
          />

          {/* Drawer — always dark, never affected by scroll state */}
          <motion.aside
            initial={{ x:"100%" }} animate={{ x:0 }} exit={{ x:"100%" }}
            transition={{ type:"spring", damping:28, stiffness:260 }}
            style={{
              position:"fixed", top:0, right:0, bottom:0, zIndex:50,
              width:"min(88vw,340px)",
              display:"flex", flexDirection:"column",
              background:"#0C0C0C",
              borderLeft:"1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Header */}
            <div style={{
              display:"flex", alignItems:"center", justifyContent:"space-between",
              padding:"16px 20px",
              borderBottom:"1px solid rgba(255,255,255,0.08)",
            }}>
              <div>
                <p style={{
                  fontFamily:"var(--font-display)", fontWeight:800,
                  fontSize:14, letterSpacing:"0.07em", color:"#F5F5F7",
                }}>HORIZON TECH</p>
                <p style={{
                  fontFamily:"var(--font-body)", fontSize:10,
                  letterSpacing:"0.2em", color:"#C8A96E",
                  textTransform:"uppercase", marginTop:3,
                }}>Official Distributor · Lahore</p>
              </div>
              <button
                onClick={onClose} aria-label="Close menu"
                style={{
                  width:36, height:36, borderRadius:10,
                  background:"rgba(255,255,255,0.07)",
                  border:"none", cursor:"pointer",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  color:"#F5F5F7",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none"
                  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M1 1L13 13M13 1L1 13"/>
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav style={{ flex:1, overflowY:"auto", padding:"12px" }}>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity:0, x:16 }}
                  animate={{ opacity:1, x:0  }}
                  transition={{ delay: i * .07 + .05 }}
                >
                  {link.children ? (
                    <div style={{ marginBottom:4 }}>
                      <button
                        onClick={() => setExpanded(expanded === link.label ? null : link.label)}
                        style={{
                          width:"100%", display:"flex", alignItems:"center",
                          justifyContent:"space-between",
                          padding:"12px 16px", borderRadius:12,
                          background: expanded === link.label
                            ? "rgba(200,169,110,.1)" : "transparent",
                          border:"none", cursor:"pointer",
                          fontFamily:"var(--font-body)", fontSize:14, fontWeight:600,
                          color:"#F5F5F7", textAlign:"left",
                        }}
                      >
                        <span>{link.label}</span>
                        <motion.svg
                          animate={{ rotate: expanded === link.label ? 180 : 0 }}
                          transition={{ duration:.2 }}
                          width="13" height="13" viewBox="0 0 14 14" fill="none"
                          stroke="#C8A96E" strokeWidth="1.6"
                          strokeLinecap="round" strokeLinejoin="round"
                        >
                          <path d="M2 5L7 10L12 5"/>
                        </motion.svg>
                      </button>

                      <AnimatePresence>
                        {expanded === link.label && (
                          <motion.div
                            initial={{ height:0, opacity:0 }}
                            animate={{ height:"auto", opacity:1 }}
                            exit={{ height:0, opacity:0 }}
                            transition={{ duration:.2 }}
                            style={{ overflow:"hidden" }}
                          >
                            <div style={{ paddingLeft:12, paddingBottom:4, paddingTop:4 }}>
                              {link.children.map(child => (
                                <a
                                  key={child.label} href={child.href} onClick={onClose}
                                  style={{
                                    display:"flex", alignItems:"center",
                                    justifyContent:"space-between",
                                    padding:"10px 16px", borderRadius:10, marginBottom:2,
                                    fontFamily:"var(--font-body)", fontSize:13,
                                    fontWeight:400, color:"#A1A1A6", textDecoration:"none",
                                    transition:"color .15s, background .15s",
                                  }}
                                  onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.color = "#F5F5F7";
                                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                                  }}
                                  onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.color = "#A1A1A6";
                                    (e.currentTarget as HTMLElement).style.background = "transparent";
                                  }}
                                >
                                  <span>{child.label}</span>
                                  {child.badge && (
                                    <span style={{
                                      fontSize:9, fontWeight:900, letterSpacing:"0.1em",
                                      padding:"2px 7px", borderRadius:999,
                                      background:"#C8A96E", color:"#050505",
                                    }}>{child.badge}</span>
                                  )}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href} onClick={onClose}
                      style={{
                        display:"flex", alignItems:"center",
                        padding:"12px 16px", borderRadius:12, marginBottom:4,
                        fontFamily:"var(--font-body)", fontSize:14, fontWeight:600,
                        color:"#F5F5F7", textDecoration:"none",
                        transition:"background .15s",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    >{link.label}</a>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Footer CTAs */}
            <div style={{
              padding:16,
              borderTop:"1px solid rgba(255,255,255,0.08)",
              display:"flex", flexDirection:"column", gap:10,
            }}>
              <a
                href="https://wa.me/923001234567"
                target="_blank" rel="noopener noreferrer"
                onClick={onClose}
                style={{
                  display:"flex", alignItems:"center", justifyContent:"center", gap:8,
                  padding:"12px 0", borderRadius:12,
                  fontFamily:"var(--font-body)", fontSize:13, fontWeight:700,
                  background:"#25D166", color:"#050505", textDecoration:"none",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us Now
              </a>
              <a
                href="#quote" onClick={onClose}
                style={{
                  display:"flex", alignItems:"center", justifyContent:"center",
                  padding:"12px 0", borderRadius:12,
                  fontFamily:"var(--font-body)", fontSize:13, fontWeight:700,
                  color:"#F5F5F7",
                  border:"1px solid rgba(255,255,255,0.14)",
                  background:"rgba(255,255,255,0.04)", textDecoration:"none",
                }}
              >Get a Free Quote</a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Main Navbar ──────────────────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", v => setScrolled(v > 40));

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Announcement bar ──────────────────────────────────────────── */}
      <motion.div
        animate={{ height: scrolled ? 0 : "auto", opacity: scrolled ? 0 : 1 }}
        transition={{ duration:.3 }}
        style={{
          position:"fixed", top:0, left:0, right:0, zIndex:30,
          overflow:"hidden",
          background:"#0C0C0C",
          borderBottom:"1px solid rgba(255,255,255,0.05)",
        }}
      >
        <p style={{
          fontFamily:"var(--font-body)", fontSize:11, fontWeight:500,
          color:"#6E6E73", letterSpacing:"0.04em",
          padding:"8px 16px", textAlign:"center",
        }}>
          🍎 Official Apple Authorised Reseller &nbsp;·&nbsp;
          ◎ Nothing Certified Distributor &nbsp;·&nbsp;
          <span style={{ color:"#C8A96E", fontWeight:600 }}>
            Free Delivery across Lahore
          </span>
        </p>
      </motion.div>

      {/* ── Nav bar ───────────────────────────────────────────────────── */}
      <motion.header
        initial={{ y:-80, opacity:0 }}
        animate={{ y:0, opacity:1, top: scrolled ? 0 : 32 }}
        transition={{ duration:.55, ease:[.22,1,.36,1] }}
        style={{ position:"fixed", left:0, right:0, zIndex:30 }}
      >
        <motion.nav
          animate={{
            background:     scrolled ? T.navBgScrolled  : T.navBg,
            backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "blur(0px)",
            boxShadow:      scrolled ? T.navShadowScrolled : T.navShadow,
            borderBottomColor: scrolled
              ? T.navBorderScrolled
              : T.navBorder,
          }}
          transition={{ duration:.35 }}
          style={{ borderBottom:"1px solid transparent" }}
        >
          <div style={{
            maxWidth:1280, margin:"0 auto", padding:"0 24px",
            display:"flex", alignItems:"center", justifyContent:"space-between",
            height:64,
          }}>

            {/* Logo — colours never change, always readable on dark */}
            <Logo />

            {/* Desktop nav links */}
            <nav
              className="nav-desktop"
              style={{ display:"flex", alignItems:"center", gap:20 }}
            >
              {NAV_LINKS.map(link => (
                <DesktopNavItem key={link.label} link={link} scrolled={scrolled} />
              ))}
            </nav>

            {/* Right group */}
            <div style={{ display:"flex", alignItems:"center", gap:10 }}>

              {/* Phone number */}
              <a
                href="tel:+923001234567"
                className="nav-phone"
                style={{
                  display:"flex", alignItems:"center", gap:6,
                  fontFamily:"var(--font-body)", fontSize:12, fontWeight:600,
                  color: scrolled ? T.phoneScrolled : T.phone,
                  textDecoration:"none", transition:"color .3s",
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
                </svg>
                0300 123 4567
              </a>

              {/* Get Free Quote — gold always, never flips */}
              <motion.a
                href="#quote"
                className="nav-quote"
                whileHover={{ scale:1.03 }} whileTap={{ scale:.97 }}
                style={{
                  display:"flex", alignItems:"center", gap:8,
                  padding:"10px 18px", borderRadius:12,
                  fontFamily:"var(--font-body)", fontSize:13, fontWeight:700,
                  background: T.quoteBg,
                  color:      T.quoteColor,
                  textDecoration:"none",
                  boxShadow:  T.quoteShadow,
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
                Get Free Quote
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/923001234567"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale:1.06 }} whileTap={{ scale:.94 }}
                style={{
                  width:40, height:40, borderRadius:12,
                  display:"flex", alignItems:"center", justifyContent:"center",
                  background:"rgba(37,209,102,.11)",
                  border:"1px solid rgba(37,209,102,.22)",
                }}
                title="Chat on WhatsApp"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#25D166">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </motion.a>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="nav-hamburger"
                style={{
                  width:40, height:40, borderRadius:12,
                  display:"flex", flexDirection:"column",
                  alignItems:"center", justifyContent:"center", gap:5,
                  background: T.hamburgerBg,
                  border:"none", cursor:"pointer",
                }}
              >
                {[0,1,2].map(i => (
                  <span key={i} style={{
                    display:"block", borderRadius:999, height:1.5,
                    width: i === 1 ? 14 : 18,
                    background: T.hamburger,
                  }}/>
                ))}
              </button>
            </div>
          </div>
        </motion.nav>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Responsive show/hide helpers */}
      <style>{`
        @media (max-width: 1023px) {
          .nav-desktop { display: none !important; }
          .nav-phone   { display: none !important; }
          .nav-quote   { display: none !important; }
        }
        @media (min-width: 1024px) {
          .nav-hamburger { display: none !important; }
        }
        @media (min-width: 1280px) {
          .nav-phone { display: flex !important; }
        }
        @media (min-width: 640px) {
          .nav-quote { display: flex !important; }
        }
      `}</style>
    </>
  );
}