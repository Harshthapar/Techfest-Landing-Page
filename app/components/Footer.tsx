"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import TechfestEmblem from "./TechfestEmblem";

// Brand SVG icons (removed from lucide-react in v0.400+)
const InstagramIcon = ({ size = 24, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const TwitterIcon = ({ size = 24, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedinIcon = ({ size = 24, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const YoutubeIcon = ({ size = 24, style }: { size?: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={style}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com/techfest_iitb", color: "#e1306c" },
  { icon: TwitterIcon, label: "X (Twitter)", href: "https://x.com/techfest_iitb", color: "#00f3ff" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com/company/techfest-iitb", color: "#0077b5" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com/techfest", color: "#ff0000" },
  { icon: MessageCircle, label: "Discord", href: "https://discord.gg/techfest", color: "#7289da" },
];

const quickLinks = [
  { label: "Competitions", href: "#competitions" },
  { label: "Workshops", href: "#workshops" },
  { label: "Exhibitions", href: "#exhibitions" },
  { label: "Schedule", href: "#schedule" },
  { label: "CA Program", href: "#ca-program" },
  { label: "Sponsors", href: "#sponsors" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms & Conditions", href: "#terms" },
  { label: "Refund Policy", href: "#refund" },
  { label: "Contact Us", href: "#contact" },
];

function SocialIcon({
  icon: Icon,
  label,
  href,
  color,
}: (typeof socialLinks)[0]) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group"
    >
      {/* Tooltip */}
      <div
        className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md font-space text-[10px] font-medium whitespace-nowrap pointer-events-none transition-all duration-200"
        style={{
          background: "rgba(7,9,14,0.95)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "white",
          opacity: hovered ? 1 : 0,
          transform: `translateX(-50%) translateY(${hovered ? "0" : "4px"})`,
        }}
      >
        {label}
      </div>

      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
        style={{
          background: hovered ? `${color}18` : "rgba(255,255,255,0.04)",
          border: `1px solid ${hovered ? color : "rgba(255,255,255,0.1)"}`,
          boxShadow: hovered ? `0 0 16px ${color}40` : "none",
          transform: hovered ? "translateY(-3px)" : "translateY(0)",
        }}
      >
        <Icon size={17} style={{ color: hovered ? color : "rgba(255,255,255,0.55)" }} />
      </div>
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="relative pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      {/* Top divider */}
      <div className="section-divider mb-16" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,243,255,0.03) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center p-1.5"
                style={{
                  background: "linear-gradient(135deg, rgba(0,243,255,0.15), rgba(112,0,255,0.25))",
                  border: "1px solid rgba(0,243,255,0.4)",
                  boxShadow: "0 0 14px rgba(0,243,255,0.3)",
                }}
              >
                <TechfestEmblem size={26} />
              </div>
              <div>
                <div
                  className="font-orbitron text-sm font-bold"
                  style={{ color: "#00f3ff" }}
                >
                  TECHFEST 2026
                </div>
                <div
                  className="font-space text-[10px]"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  IIT BOMBAY · 30th Edition
                </div>
              </div>
            </div>

            <p className="font-space text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Asia's largest science & technology festival, organized by the students of IIT Bombay since 1996.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-2">
              <a
                href="mailto:techfest@iitb.ac.in"
                className="flex items-center gap-2 font-space text-xs transition-colors hover:text-[#00f3ff]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <Mail size={12} style={{ color: "rgba(0,243,255,0.5)" }} />
                techfest@iitb.ac.in
              </a>
              <a
                href="tel:+912225764237"
                className="flex items-center gap-2 font-space text-xs transition-colors hover:text-[#00f3ff]"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                <Phone size={12} style={{ color: "rgba(0,243,255,0.5)" }} />
                +91 22 2576 4237
              </a>
              <div className="flex items-center gap-2 font-space text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                <MapPin size={12} style={{ color: "rgba(0,243,255,0.5)" }} />
                IIT Bombay, Powai, Mumbai 400076
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="font-orbitron text-xs font-bold tracking-[0.2em] uppercase mb-5"
              style={{ color: "rgba(0,243,255,0.7)" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        const target = document.getElementById(link.href.replace("#", ""));
                        if (target) {
                          e.preventDefault();
                          window.history.pushState(null, "", link.href);
                          target.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }
                    }}
                    className="font-space text-sm flex items-center gap-2 transition-all duration-200 hover:translate-x-1 hover:text-[#00f3ff] group"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 group-hover:w-3 transition-all duration-200"
                      style={{ background: "#00f3ff" }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Festival dates */}
          <div>
            <h3
              className="font-orbitron text-xs font-bold tracking-[0.2em] uppercase mb-5"
              style={{ color: "rgba(0,243,255,0.7)" }}
            >
              Event Dates
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { day: "Day 1", date: "Dec 16, 2026", desc: "Inauguration + AI Summit" },
                { day: "Day 2", date: "Dec 17, 2026", desc: "Hackathon + Robowar Finals" },
                { day: "Day 3", date: "Dec 18, 2026", desc: "Prize Ceremony + Closing" },
              ].map((d) => (
                <div
                  key={d.day}
                  className="p-3 rounded-lg"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-orbitron text-xs font-bold" style={{ color: "#00f3ff" }}>
                      {d.day}
                    </span>
                    <span className="font-space text-[10px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {d.date}
                    </span>
                  </div>
                  <p className="font-space text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h3
              className="font-orbitron text-xs font-bold tracking-[0.2em] uppercase mb-5"
              style={{ color: "rgba(0,243,255,0.7)" }}
            >
              Stay Connected
            </h3>

            {/* Newsletter */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2 mb-6"
              aria-label="Newsletter signup"
            >
              <p className="font-space text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                Get updates on events, registrations & more.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 rounded-lg font-space text-xs outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "white",
                  }}
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  id="newsletter-submit"
                  className="px-3 py-2 rounded-lg font-space text-xs font-medium transition-all hover:scale-105"
                  style={{
                    background: "rgba(0,243,255,0.15)",
                    border: "1px solid rgba(0,243,255,0.3)",
                    color: "#00f3ff",
                  }}
                >
                  <ExternalLink size={13} />
                </button>
              </div>
            </form>

            {/* Social icons */}
            <div>
              <p className="font-space text-xs mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                Follow us
              </p>
              <div className="flex gap-2 flex-wrap">
                {socialLinks.map((s) => (
                  <SocialIcon key={s.label} {...s} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p className="font-space text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              © 2026 Techfest, IIT Bombay. All rights reserved.
            </p>
            <span className="font-space text-xs" style={{ color: "rgba(255,255,255,0.15)" }}>
              |
            </span>
            <p className="font-space text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
              Indian Institute of Technology Bombay ⚡
            </p>
          </div>

          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-space text-[11px] transition-colors hover:text-[#00f3ff]"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating social dock (right side) — desktop only */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2">
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="group relative"
          >
            {/* Tooltip */}
            <div
              className="absolute right-12 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md font-space text-[10px] font-medium whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200"
              style={{
                background: "rgba(7,9,14,0.95)",
                border: `1px solid ${s.color}40`,
                color: "white",
              }}
            >
              {s.label}
            </div>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:-translate-x-1"
              style={{
                background: "rgba(7,9,14,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <s.icon size={15} style={{ color: "rgba(255,255,255,0.45)" }} className="group-hover:scale-110 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </footer>
  );
}
