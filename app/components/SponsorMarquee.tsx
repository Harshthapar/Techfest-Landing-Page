"use client";

import { motion } from "framer-motion";

const sponsors = [
  { name: "Google", abbr: "GOOG" },
  { name: "Microsoft", abbr: "MSFT" },
  { name: "Amazon", abbr: "AMZN" },
  { name: "NVIDIA", abbr: "NVDA" },
  { name: "Intel", abbr: "INTL" },
  { name: "Samsung", abbr: "SMSG" },
  { name: "Sony", abbr: "SONY" },
  { name: "IBM", abbr: "IBM" },
  { name: "Qualcomm", abbr: "QCOM" },
  { name: "Adobe", abbr: "ADBE" },
  { name: "Siemens", abbr: "SIEMENS" },
  { name: "Bosch", abbr: "BOSCH" },
  { name: "ISRO", abbr: "ISRO" },
  { name: "DRDO", abbr: "DRDO" },
  { name: "Tata", abbr: "TATA" },
  { name: "Mahindra", abbr: "M&M" },
];

// Duplicate the list for seamless loop
const doubledSponsors = [...sponsors, ...sponsors];

function SponsorPill({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div
      className="flex items-center gap-3 px-6 py-3 rounded-xl flex-shrink-0 cursor-default group transition-all duration-300 hover:-translate-y-1"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Logo placeholder — stylized text box */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:border-[rgba(0,243,255,0.4)]"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <span
          className="font-orbitron text-[8px] font-bold text-center leading-tight transition-colors duration-300 group-hover:text-[#00f3ff]"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {abbr.length > 4 ? abbr.substring(0, 4) : abbr}
        </span>
      </div>
      <span
        className="font-space text-sm font-medium whitespace-nowrap transition-colors duration-300 group-hover:text-white"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        {name}
      </span>
    </div>
  );
}

export default function SponsorMarquee() {
  return (
    <section id="sponsors" className="relative py-20 overflow-hidden">
      {/* Side gradient fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, #07090e, transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(270deg, #07090e, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-4"
      >
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, rgba(0,243,255,0.4))" }} />
          <span className="font-space text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
            Our Partners & Sponsors
          </span>
          <div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(0,243,255,0.4), transparent)" }} />
        </div>
        <p className="font-space text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
          Trusted by industry leaders powering the future of technology
        </p>
      </motion.div>

      {/* Marquee track 1 (forward) */}
      <div className="flex gap-4 mb-4 overflow-hidden" aria-label="Sponsor logos">
        <div className="marquee-track flex gap-4">
          {doubledSponsors.map((s, i) => (
            <SponsorPill key={`${s.name}-${i}`} name={s.name} abbr={s.abbr} />
          ))}
        </div>
      </div>

      {/* Marquee track 2 (reverse, offset) */}
      <div className="flex gap-4 overflow-hidden" aria-hidden="true">
        <div
          className="flex gap-4"
          style={{ animation: "marquee 20s linear infinite reverse" }}
        >
          {[...doubledSponsors].reverse().map((s, i) => (
            <SponsorPill key={`rev-${s.name}-${i}`} name={s.name} abbr={s.abbr} />
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center mt-8 px-4">
        <a
          href="#sponsorship"
          className="font-space text-xs inline-flex items-center gap-1.5 transition-colors"
          style={{ color: "rgba(0,243,255,0.45)" }}
        >
          <span style={{ borderBottom: "1px solid rgba(0,243,255,0.3)" }}>
            Interested in sponsoring Techfest 2026?
          </span>
          →
        </a>
      </div>
    </section>
  );
}
