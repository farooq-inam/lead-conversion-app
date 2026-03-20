"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Real retailer/partner brand names for a Pakistani Apple distributor
const CLIENTS = [
  { name: "TCS Express",          abbr: "TCS"   },
  { name: "Daraz Pakistan",        abbr: "Daraz" },
  { name: "Metro Cash & Carry",   abbr: "Metro" },
  { name: "Alfatah Electronics",  abbr: "Alfatah"},
  { name: "Mobile Zone PK",       abbr: "MZ"    },
  { name: "iZone Technologies",   abbr: "iZone" },
  { name: "CellPlex Lahore",       abbr: "Cell+" },
  { name: "DigiWorld Pakistan",   abbr: "Digi"  },
  { name: "Core Computing",       abbr: "Core"  },
  { name: "Galaxy Mobiles",       abbr: "Galaxy"},
  { name: "ProTech Solutions",    abbr: "Pro"   },
  { name: "TechHub Gulberg",       abbr: "Hub"   },
];

// Duplicated for seamless loop
const TRACK = [...CLIENTS, ...CLIENTS];

function LogoCard({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div
      style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 24px",
        borderRadius: 12,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        userSelect: "none",
        whiteSpace: "nowrap",
      }}
    >
      {/* Monogram badge */}
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "rgba(200,169,110,0.1)",
          border: "1px solid rgba(200,169,110,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 10,
            fontWeight: 800,
            color: "#C8A96E",
            letterSpacing: "-0.02em",
          }}
        >
          {abbr.slice(0, 2)}
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          fontWeight: 600,
          color: "#6E6E73",
          letterSpacing: "0.01em",
        }}
      >
        {name}
      </span>
    </div>
  );
}

export default function Clients() {
  const ref = useInView(useRef(null), { once: true, margin: "-80px" });

  return (
    <section
      style={{
        background: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        padding: "64px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          marginBottom: 40,
          padding: "0 24px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 11,
            fontWeight: 600,
            color: "#C8A96E",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Trusted by 1,200+ Partners
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 15,
            fontWeight: 400,
            color: "#3A3A3A",
            maxWidth: 480,
            margin: "0 auto",
          }}
        >
          Retailers, distributors, and corporate buyers across Pakistan rely on us
          for genuine Apple and Nothing products.
        </p>
      </motion.div>

      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background: "linear-gradient(to right, #050505, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: 120,
          background: "linear-gradient(to left, #050505, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Track 1 — left to right */}
      <div style={{ overflow: "hidden", marginBottom: 12 }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: 12, width: "max-content" }}
        >
          {TRACK.map((c, i) => (
            <LogoCard key={`a-${i}`} name={c.name} abbr={c.abbr} />
          ))}
        </motion.div>
      </div>

      {/* Track 2 — right to left */}
      <div style={{ overflow: "hidden" }}>
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 26, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: 12, width: "max-content" }}
        >
          {TRACK.map((c, i) => (
            <LogoCard key={`b-${i}`} name={c.name} abbr={c.abbr} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}