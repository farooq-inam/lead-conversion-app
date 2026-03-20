"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * StickyCTA
 * Appears after the user scrolls past the hero (600px),
 * disappears when they reach the quote section.
 * Mobile-first, never blocks content.
 */
export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const quoteEl = document.getElementById("quote");
      const quoteTop = quoteEl
        ? quoteEl.getBoundingClientRect().top + window.scrollY - 200
        : Infinity;

      if (!dismissed && scrollY > 600 && scrollY < quoteTop) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          exit={{   y: 80, opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 260 }}
          style={{
            position:       "fixed",
            bottom:         0,
            left:           0,
            right:          0,
            zIndex:         40,
            padding:        "12px 20px",
            background:     "rgba(8,8,8,0.97)",
            borderTop:      "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div style={{
            maxWidth:       1280,
            margin:         "0 auto",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            gap:            16,
            flexWrap:       "wrap",
          }}>
            {/* Left: message */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Pulse dot */}
              <div style={{ position: "relative", flexShrink: 0 }}>
                <motion.div
                  animate={{ scale: [1, 1.6, 1.6], opacity: [0.6, 0, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position:     "absolute",
                    inset:        0,
                    borderRadius: "50%",
                    background:   "rgba(200,169,110,0.4)",
                  }}
                />
                <div style={{
                  width:        10,
                  height:       10,
                  borderRadius: "50%",
                  background:   "#C8A96E",
                  position:     "relative",
                }} />
              </div>

              <div>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   14,
                  fontWeight: 600,
                  color:      "#F5F5F7",
                  lineHeight: 1.3,
                }}>
                  Get trade pricing on Apple & Nothing devices
                </p>
                <p style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   12,
                  fontWeight: 400,
                  color:      "#6E6E73",
                  marginTop:  2,
                }}>
                  Official distributor · Response within 2–4 hrs
                </p>
              </div>
            </div>

            {/* Right: CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
              <motion.a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  gap:            7,
                  padding:        "10px 18px",
                  borderRadius:   10,
                  fontFamily:     "var(--font-body)",
                  fontSize:       13,
                  fontWeight:     700,
                  background:     "rgba(37,209,102,0.12)",
                  border:         "1px solid rgba(37,209,102,0.25)",
                  color:          "#25D166",
                  textDecoration: "none",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </motion.a>

              <motion.a
                href="#quote"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  gap:            7,
                  padding:        "10px 20px",
                  borderRadius:   10,
                  fontFamily:     "var(--font-body)",
                  fontSize:       13,
                  fontWeight:     700,
                  background:     "linear-gradient(135deg,#C8A96E 0%,#7A5C0A 100%)",
                  color:          "#050505",
                  textDecoration: "none",
                  boxShadow:      "0 4px 14px rgba(200,169,110,0.25)",
                }}
              >
                Get Free Quote
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>

              {/* Dismiss */}
              <button
                onClick={() => setDismissed(true)}
                aria-label="Dismiss"
                style={{
                  width:      32,
                  height:     32,
                  borderRadius: 8,
                  display:    "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.05)",
                  border:     "1px solid rgba(255,255,255,0.08)",
                  color:      "#6E6E73",
                  cursor:     "pointer",
                  flexShrink: 0,
                }}
              >
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none"
                  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M1 1l10 10M11 1L1 11" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}