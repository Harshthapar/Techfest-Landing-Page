"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Compass, ArrowRight, Users, Trophy, Star, Mic, Sparkles } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";
import Countdown from "./Countdown";

const stats = [
  {
    value: 175000,
    suffix: "+",
    label: "Total Footfall",
    prefix: "",
    icon: Users,
    color: "#00f3ff",
  },
  {
    value: 75000,
    suffix: "+",
    label: "Student Delegates",
    prefix: "",
    icon: Star,
    color: "#7000ff",
  },
  {
    value: 45,
    suffix: "L+",
    label: "Prize Pool",
    prefix: "₹",
    icon: Trophy,
    color: "#00f3ff",
  },
  {
    value: 60,
    suffix: "+",
    label: "Global Speakers",
    prefix: "",
    icon: Mic,
    color: "#7000ff",
  },
];

function useCountUp(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({
  stat,
  index,
  inView,
}: {
  stat: (typeof stats)[0];
  index: number;
  inView: boolean;
}) {
  const count = useCountUp(stat.value, 2200, inView);
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.12, duration: 0.5, ease: "easeOut" }}
      className="stat-card rounded-xl p-5 flex flex-col gap-3 hover-glow-border"
    >
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{
            background: `rgba(${stat.color === "#00f3ff" ? "0,243,255" : "112,0,255"}, 0.1)`,
            border: `1px solid ${stat.color}30`,
          }}
        >
          <Icon size={18} style={{ color: stat.color }} />
        </div>
        {/* HUD accent line */}
        <div
          className="h-px w-12 mt-5"
          style={{
            background: `linear-gradient(90deg, transparent, ${stat.color})`,
          }}
        />
      </div>

      <div>
        <div
          className="font-orbitron text-3xl font-bold"
          style={{ color: stat.color, textShadow: `0 0 15px ${stat.color}60` }}
        >
          {stat.prefix}
          {inView ? count.toLocaleString() : "0"}
          {stat.suffix}
        </div>
        <div
          className="font-space text-sm mt-1"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {stat.label}
        </div>
      </div>

      {/* Progress bar decoration */}
      <div className="w-full h-px" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          initial={{ width: "0%" }}
          animate={inView ? { width: "100%" } : {}}
          transition={{ delay: 0.4 + index * 0.1, duration: 1.5, ease: "easeOut" }}
          className="h-full"
          style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden cyber-grid"
    >
      {/* Particle Background */}
      <ParticleCanvas />

      {/* Radial gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,243,255,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 80%, rgba(112,0,255,0.07) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col items-center text-center gap-8">

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: "rgba(0,243,255,0.06)",
            border: "1px solid rgba(0,243,255,0.25)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full blink-dot"
            style={{ background: "#39ff14", boxShadow: "0 0 8px #39ff14" }}
          />
          <span
            className="font-space text-xs sm:text-sm font-medium tracking-wider"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            ● LIVE REGISTRATIONS OPEN
          </span>
          <span
            className="font-space text-xs"
            style={{ color: "rgba(0,243,255,0.7)" }}
          >
            | DEC 16–18, IIT BOMBAY
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="flex flex-col gap-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <h1
              className="glitch-text font-orbitron text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight"
              data-text="TECHFEST"
              style={{
                color: "white",
                textShadow: "0 0 40px rgba(0,243,255,0.4), 0 0 80px rgba(0,243,255,0.15)",
              }}
            >
              TECHFEST
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex items-center justify-center gap-3"
          >
            <div
              className="h-px flex-1 max-w-24"
              style={{ background: "linear-gradient(90deg, transparent, rgba(0,243,255,0.4))" }}
            />
            <span
              className="font-orbitron text-4xl sm:text-5xl md:text-6xl font-black"
              style={{ color: "#00f3ff", textShadow: "0 0 30px rgba(0,243,255,0.6)" }}
            >
              2026
            </span>
            <div
              className="h-px flex-1 max-w-24"
              style={{ background: "linear-gradient(90deg, rgba(0,243,255,0.4), transparent)" }}
            />
          </motion.div>
        </div>

        {/* Sub heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="font-space text-base sm:text-lg md:text-xl font-medium max-w-2xl tracking-wide"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          ASIA'S LARGEST SCIENCE & TECHNOLOGY FESTIVAL
          <span className="block mt-1 font-normal text-sm" style={{ color: "rgba(0,243,255,0.6)" }}>
            IIT Bombay · 30th Annual Edition · December 16–18, 2026
          </span>
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="w-full"
        >
          <Countdown />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <a
            href="#events"
            id="hero-explore-btn"
            className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-xl font-space text-sm font-semibold"
          >
            <Compass size={18} />
            Explore Events
            <ArrowRight size={16} />
          </a>
          <a
            href="#register"
            id="hero-register-btn"
            className="btn-secondary flex items-center gap-2 px-7 py-3.5 rounded-xl font-space text-sm font-semibold"
            style={{
              borderColor: "rgba(0, 243, 255, 0.4)",
              color: "#00f3ff",
            }}
          >
            <Sparkles size={16} />
            Register Now
          </a>
        </motion.div>

        {/* Stats grid */}
        <div ref={statsRef} className="w-full mt-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} inView={statsInView} />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="font-space text-xs tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full flex items-start justify-center pt-1"
            style={{ border: "1px solid rgba(0,243,255,0.3)" }}
          >
            <div
              className="w-1 h-2 rounded-full"
              style={{ background: "#00f3ff", boxShadow: "0 0 6px #00f3ff" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
