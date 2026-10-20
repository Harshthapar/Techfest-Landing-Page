"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  BookOpen,
  Trophy,
  Cpu,
  Calendar,
  Sparkles,
  Users,
} from "lucide-react";
import TechfestEmblem from "./TechfestEmblem";

const navLinks = [
  { label: "Workshops", href: "#workshops", icon: BookOpen },
  { label: "Competitions", href: "#competitions", icon: Trophy },
  { label: "Exhibitions", href: "#exhibitions", icon: Cpu },
  { label: "Schedule", href: "#schedule", icon: Calendar },
  { label: "CA Program", href: "#ca-program", icon: Users },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync active section based on current hash or scroll position
  useEffect(() => {
    const syncActive = () => {
      const hash = window.location.hash;
      if (hash) {
        const found = navLinks.find((l) => l.href === hash);
        if (found) setActiveLink(found.label);
      }
    };
    syncActive();
    window.addEventListener("hashchange", syncActive);
    return () => window.removeEventListener("hashchange", syncActive);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    setActiveLink(label);
    setMobileOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        e.preventDefault();
        window.history.pushState(null, "", href);
        targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(7, 9, 14, 0.92)"
            : "rgba(7, 9, 14, 0.65)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${scrolled ? "rgba(0, 243, 255, 0.25)" : "rgba(0, 243, 255, 0.1)"}`,
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.7)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Stylized TF Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 group"
              aria-label="Techfest IIT Bombay"
            >
              <div className="relative">
                {/* Logo icon container */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,243,255,0.15), rgba(112,0,255,0.25))",
                    border: "1px solid rgba(0,243,255,0.45)",
                    boxShadow: "0 0 16px rgba(0,243,255,0.35)",
                  }}
                >
                  <TechfestEmblem size={26} />
                </div>
                {/* Pulse ring */}
                <div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    border: "1px solid rgba(0,243,255,0.4)",
                    animation: "pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
                  }}
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span
                    className="font-orbitron text-sm font-bold leading-tight tracking-wider text-glow-cyan"
                    style={{ color: "#00f3ff" }}
                  >
                    TECHFEST
                  </span>
                  <span
                    className="font-space text-[9px] px-1.5 py-0.2 rounded font-bold"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,243,255,0.25), rgba(112,0,255,0.4))",
                      border: "1px solid rgba(0,243,255,0.4)",
                      color: "#ffffff",
                    }}
                  >
                    30th Ed.
                  </span>
                </div>
                <span
                  className="font-space text-[10px] tracking-widest uppercase font-medium"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  IIT BOMBAY
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Primary navigation">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeLink === link.label;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.label)}
                    className="relative px-3.5 py-2 font-space text-sm font-medium transition-all duration-200 group flex items-center gap-1.5 rounded-lg hover:bg-white/5"
                    style={{
                      color: isActive ? "#00f3ff" : "rgba(255,255,255,0.7)",
                    }}
                  >
                    <Icon
                      size={14}
                      className="transition-colors duration-200"
                      style={{
                        color: isActive ? "#00f3ff" : "rgba(0, 243, 255, 0.5)",
                      }}
                    />
                    <span className="relative z-10 group-hover:text-white transition-colors duration-200">
                      {link.label}
                    </span>

                    {/* Active bottom glow bar */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                        style={{
                          background: "linear-gradient(90deg, #00f3ff, #7000ff)",
                          boxShadow: "0 0 8px #00f3ff",
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#register"
                id="nav-register-btn"
                onClick={(e) => handleLinkClick(e, "#register", "Register")}
                className="btn-primary relative font-space text-sm font-semibold px-5 py-2 rounded-lg overflow-hidden group cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgba(0,243,255,0.15), rgba(112,0,255,0.25))",
                  border: "1px solid rgba(0,243,255,0.5)",
                  color: "#00f3ff",
                  boxShadow: "0 0 15px rgba(0,243,255,0.2)",
                }}
              >
                <span className="relative z-10 flex items-center gap-1.5 font-bold">
                  <Sparkles size={14} className="text-[#00f3ff]" />
                  Register Now
                  <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </span>
                <span
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,243,255,0.3), rgba(112,0,255,0.35))",
                  }}
                />
              </a>

              {/* Stylized Avatar Pill */}
              <a
                href="#ca-program"
                onClick={(e) => handleLinkClick(e, "#ca-program", "CA Program")}
                className="w-8 h-8 rounded-full flex items-center justify-center font-orbitron text-xs font-bold transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, rgba(0,243,255,0.25), rgba(112,0,255,0.4))",
                  border: "1px solid rgba(0,243,255,0.4)",
                  color: "#00f3ff",
                  boxShadow: "0 0 10px rgba(0,243,255,0.2)",
                }}
                title="Campus Ambassador Portal"
              >
                <span>TF</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{
                color: mobileOpen ? "#00f3ff" : "rgba(255,255,255,0.8)",
                background: mobileOpen ? "rgba(0,243,255,0.12)" : "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/70"
              style={{ backdropFilter: "blur(6px)" }}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 flex flex-col pt-18 pb-8 px-6"
              style={{
                background: "rgba(7, 9, 14, 0.98)",
                borderLeft: "1px solid rgba(0,243,255,0.25)",
                backdropFilter: "blur(24px)",
                boxShadow: "-10px 0 30px rgba(0,0,0,0.8)",
              }}
            >
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2.5">
                  <TechfestEmblem size={24} />
                  <div>
                    <p className="font-orbitron text-sm font-bold text-[#00f3ff]">
                      TECHFEST 2026
                    </p>
                    <p className="font-space text-[10px] text-gray-400">
                      IIT Bombay · Dec 16–18
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation items with working icons */}
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  const isActive = activeLink === link.label;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ x: 25, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={(e) => handleLinkClick(e, link.href, link.label)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl font-space text-sm font-medium transition-all"
                      style={{
                        color: isActive ? "#00f3ff" : "rgba(255,255,255,0.8)",
                        background: isActive ? "rgba(0,243,255,0.12)" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${isActive ? "rgba(0,243,255,0.3)" : "rgba(255,255,255,0.06)"}`,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{
                            background: "rgba(0,243,255,0.1)",
                            border: "1px solid rgba(0,243,255,0.2)",
                          }}
                        >
                          <Icon size={14} className="text-[#00f3ff]" />
                        </div>
                        <span>{link.label}</span>
                      </div>
                      <ChevronRight size={14} className="text-gray-500" />
                    </motion.a>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-white/10">
                <a
                  href="#register"
                  onClick={(e) => handleLinkClick(e, "#register", "Register")}
                  className="w-full text-center py-3.5 rounded-xl font-space text-sm font-bold flex items-center justify-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #00f3ff, #7000ff)",
                    color: "#07090e",
                    boxShadow: "0 0 20px rgba(0,243,255,0.35)",
                  }}
                >
                  <Sparkles size={16} />
                  Register Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
