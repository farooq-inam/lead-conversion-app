"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  firstName:    string;
  lastName:     string;
  email:        string;
  phone:        string;
  businessName: string;
  businessType: string;
  city:         string;
  requirement:  string;
  message:      string;
}

const BUSINESS_TYPES = [
  "Mobile Retail Shop",
  "Electronics Distributor",
  "Corporate / Enterprise",
  "Government / Institutional",
  "E-Commerce Seller",
  "Repair & Service Centre",
  "Other",
];

const CITIES = [
  "Lahore", "Karachi", "Islamabad", "Rawalpindi",
  "Faisalabad", "Multan", "Gujranwala", "Other",
];

const REQUIREMENTS = [
  "iPhone 16 Series",
  "MacBook Pro / Air",
  "iPad Series",
  "Apple Watch / AirPods",
  "Nothing Phone 3a",
  "Nothing Ear / CMF",
  "Mixed Apple + Nothing",
  "Custom Quote",
];

function InputField({
  label, id, type = "text", value, onChange, error, placeholder, required,
}: {
  label: string; id: string; type?: string;
  value: string; onChange: (v: string) => void;
  error?: string; placeholder?: string; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
      <label htmlFor={id} style={{
        fontFamily:"var(--font-body)", fontSize:12, fontWeight:600,
        color: error ? "#FF6B6B" : "#A1A1A6",
        letterSpacing:"0.04em",
      }}>
        {label}{required && <span style={{ color:"#C8A96E", marginLeft:3 }}>*</span>}
      </label>
      <input
        id={id} type={type} value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        style={{
          padding:"12px 16px", borderRadius:10,
          fontFamily:"var(--font-body)", fontSize:14, fontWeight:400,
          color:"#F5F5F7", background:"#111111",
          border:`1px solid ${error ? "#FF6B6B" : focused ? "rgba(200,169,110,.5)" : "rgba(255,255,255,0.09)"}`,
          outline:"none", transition:"border-color .2s",
        }}
      />
      {error && (
        <span style={{
          fontFamily:"var(--font-body)", fontSize:11, color:"#FF6B6B", marginTop:2
        }}>{error}</span>
      )}
    </div>
  );
}

function SelectField({
  label, id, value, onChange, options, error, required,
}: {
  label: string; id: string; value: string;
  onChange: (v: string) => void; options: string[];
  error?: string; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
      <label htmlFor={id} style={{
        fontFamily:"var(--font-body)", fontSize:12, fontWeight:600,
        color: error ? "#FF6B6B" : "#A1A1A6", letterSpacing:"0.04em",
      }}>
        {label}{required && <span style={{ color:"#C8A96E", marginLeft:3 }}>*</span>}
      </label>
      <select id={id} value={value} onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          padding:"12px 16px", borderRadius:10,
          fontFamily:"var(--font-body)", fontSize:14, fontWeight:400,
          color: value ? "#F5F5F7" : "#6E6E73",
          background:"#111111",
          border:`1px solid ${error ? "#FF6B6B" : focused ? "rgba(200,169,110,.5)" : "rgba(255,255,255,0.09)"}`,
          outline:"none", transition:"border-color .2s", cursor:"pointer",
        }}
      >
        <option value="" disabled style={{ color:"#6E6E73" }}>Select an option</option>
        {options.map(o => (
          <option key={o} value={o} style={{ background:"#111111", color:"#F5F5F7" }}>{o}</option>
        ))}
      </select>
      {error && (
        <span style={{
          fontFamily:"var(--font-body)", fontSize:11, color:"#FF6B6B"
        }}>{error}</span>
      )}
    </div>
  );
}

export default function LeadForm() {
  const [form, setForm]       = useState<FormData>({
    firstName:"", lastName:"", email:"", phone:"",
    businessName:"", businessType:"", city:"",
    requirement:"", message:"",
  });
  const [errors, setErrors]   = useState<Partial<FormData>>({});
  const [status, setStatus]   = useState<FormState>("idle");

  const set = (k: keyof FormData) => (v: string) =>
    setForm(p => ({ ...p, [k]: v }));

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim())  e.lastName  = "Required";
    if (!form.email.trim())     e.email     = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address";
    if (!form.phone.trim())     e.phone     = "Required";
    else if (!/^[\d\s+\-()]{10,15}$/.test(form.phone))
      e.phone = "Enter a valid phone number";
    if (!form.businessName.trim()) e.businessName = "Required";
    if (!form.businessType)     e.businessType = "Please select a type";
    if (!form.city)             e.city = "Please select your city";
    if (!form.requirement)      e.requirement = "Please select a requirement";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") return (
    <motion.div
      initial={{ opacity:0, scale:.97 }}
      animate={{ opacity:1, scale:1 }}
      style={{
        padding:"48px 40px", borderRadius:20,
        background:"#0C0C0C", border:"1px solid rgba(200,169,110,.18)",
        textAlign:"center",
      }}
    >
      <div style={{
        width:56, height:56, borderRadius:"50%",
        background:"rgba(37,209,102,.1)",
        border:"1px solid rgba(37,209,102,.25)",
        display:"flex", alignItems:"center", justifyContent:"center",
        margin:"0 auto 20px",
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="#25D166" strokeWidth="2.2" strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      </div>
      <h3 style={{
        fontFamily:"var(--font-display)", fontSize:24, fontWeight:800,
        color:"#F5F5F7", marginBottom:10
      }}>Quote Request Received!</h3>
      <p style={{
        fontFamily:"var(--font-body)", fontSize:14, color:"#6E6E73", lineHeight:1.65
      }}>
        Our team will review your request and get back to you within
        <strong style={{ color:"#C8A96E" }}> 2–4 business hours</strong>.
        For urgent enquiries, WhatsApp us directly.
      </p>
      <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer"
        style={{
          display:"inline-flex", alignItems:"center", gap:8,
          marginTop:24, padding:"12px 24px", borderRadius:12,
          fontFamily:"var(--font-body)", fontSize:14, fontWeight:700,
          background:"#25D166", color:"#050505", textDecoration:"none",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Chat on WhatsApp
      </a>
    </motion.div>
  );

  return (
    <div style={{
      padding:"36px 36px 32px",
      borderRadius:20, background:"#0C0C0C",
      border:"1px solid rgba(255,255,255,0.08)",
    }}>
      <div style={{ marginBottom:28 }}>
        <p style={{
          fontFamily:"var(--font-body)", fontSize:11, fontWeight:600,
          color:"#C8A96E", letterSpacing:"0.14em",
          textTransform:"uppercase", marginBottom:8,
        }}>Free Quote</p>
        <h3 style={{
          fontFamily:"var(--font-display)", fontSize:22, fontWeight:800,
          color:"#F5F5F7", letterSpacing:"-0.02em"
        }}>Tell us about your requirements</h3>
        <p style={{
          fontFamily:"var(--font-body)", fontSize:13, color:"#6E6E73",
          marginTop:6, lineHeight:1.6
        }}>We'll respond with trade pricing within 2–4 hours.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
        <InputField label="First Name" id="firstName" value={form.firstName}
          onChange={set("firstName")} error={errors.firstName}
          placeholder="Ahmed" required/>
        <InputField label="Last Name" id="lastName" value={form.lastName}
          onChange={set("lastName")} error={errors.lastName}
          placeholder="Raza" required/>
        <InputField label="Email Address" id="email" type="email" value={form.email}
          onChange={set("email")} error={errors.email}
          placeholder="ahmed@business.pk" required/>
        <InputField label="Phone / WhatsApp" id="phone" type="tel" value={form.phone}
          onChange={set("phone")} error={errors.phone}
          placeholder="0300 123 4567" required/>
      </div>

      <div style={{ marginTop:14, display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 }}>
        <InputField label="Business Name" id="businessName" value={form.businessName}
          onChange={set("businessName")} error={errors.businessName}
          placeholder="Your Shop / Company" required/>
        <SelectField label="Business Type" id="businessType" value={form.businessType}
          onChange={set("businessType")} options={BUSINESS_TYPES}
          error={errors.businessType} required/>
        <SelectField label="Your City" id="city" value={form.city}
          onChange={set("city")} options={CITIES} error={errors.city} required/>
        <SelectField label="Primary Requirement" id="requirement" value={form.requirement}
          onChange={set("requirement")} options={REQUIREMENTS}
          error={errors.requirement} required/>
      </div>

      {/* Message */}
      <div style={{ marginTop:14, display:"flex", flexDirection:"column", gap:6 }}>
        <label htmlFor="message" style={{
          fontFamily:"var(--font-body)", fontSize:12, fontWeight:600,
          color:"#A1A1A6", letterSpacing:"0.04em"
        }}>Additional Notes <span style={{ color:"#3A3A3A" }}>(optional)</span></label>
        <textarea id="message" value={form.message}
          onChange={e => setForm(p=>({...p, message:e.target.value}))}
          placeholder="Quantity needed, delivery timeline, specific models, etc."
          rows={3}
          style={{
            padding:"12px 16px", borderRadius:10, resize:"vertical",
            fontFamily:"var(--font-body)", fontSize:14,
            color:"#F5F5F7", background:"#111111",
            border:"1px solid rgba(255,255,255,0.09)", outline:"none",
          }}
        />
      </div>

      {/* Error alert */}
      <AnimatePresence>
        {status === "error" && (
          <motion.div
            initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }}
            exit={{ opacity:0 }}
            style={{
              marginTop:14, padding:"12px 16px", borderRadius:10,
              background:"rgba(255,107,107,.08)",
              border:"1px solid rgba(255,107,107,.2)",
              fontFamily:"var(--font-body)", fontSize:13, color:"#FF6B6B"
            }}
          >
            Something went wrong. Please try again or WhatsApp us directly.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <motion.button
        onClick={submit}
        disabled={status === "loading"}
        whileHover={status !== "loading" ? { scale:1.02 } : {}}
        whileTap={status !== "loading" ? { scale:.98 } : {}}
        style={{
          width:"100%", marginTop:20,
          padding:"15px 0", borderRadius:12,
          fontFamily:"var(--font-body)", fontSize:15, fontWeight:700,
          border:"none", cursor: status==="loading" ? "not-allowed" : "pointer",
          background: status==="loading"
            ? "rgba(200,169,110,.3)"
            : "linear-gradient(135deg,#C8A96E 0%,#7A5C0A 100%)",
          color:"#050505",
          display:"flex", alignItems:"center", justifyContent:"center", gap:10,
          transition:"opacity .2s",
        }}
      >
        {status === "loading" ? (
          <>
            <motion.div
              animate={{ rotate:360 }}
              transition={{ duration:.8, repeat:Infinity, ease:"linear" }}
              style={{
                width:16, height:16, borderRadius:"50%",
                border:"2px solid rgba(5,5,5,.2)",
                borderTopColor:"#050505",
              }}
            />
            Sending...
          </>
        ) : (
          <>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
            Submit Quote Request
          </>
        )}
      </motion.button>

      <p style={{
        fontFamily:"var(--font-body)", fontSize:11, color:"#3A3A3A",
        textAlign:"center", marginTop:14, lineHeight:1.6
      }}>
        By submitting, you agree to be contacted by our team.
        We never share your data with third parties.
      </p>
    </div>
  );
}