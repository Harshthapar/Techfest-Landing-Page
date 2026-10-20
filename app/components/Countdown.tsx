"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Fixed target date constant defined outside component scope
const TARGET_DATE = new Date("2026-12-16T09:00:00+05:30");

function getTimeLeft(target: Date): TimeLeft {
  const now = new Date().getTime();
  const diff = target.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="hud-bracket relative">
        <div
          className="glass-card rounded-lg px-4 py-3 min-w-[72px] text-center"
          style={{
            background: "rgba(0, 243, 255, 0.04)",
            border: "1px solid rgba(0, 243, 255, 0.2)",
          }}
        >
          <motion.span
            key={value}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="font-orbitron text-3xl md:text-4xl font-bold text-glow-cyan"
            style={{ color: "#00f3ff", display: "block" }}
          >
            {pad(value)}
          </motion.span>
        </div>
      </div>
      <span
        className="font-space text-[10px] font-medium tracking-[0.25em] uppercase"
        style={{ color: "rgba(0, 243, 255, 0.6)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 1. Immediately compute time left so there is no 1-second "00:00:00:00" delay
    setTimeLeft(getTimeLeft(TARGET_DATE));

    // 2. Interval update loop
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(TARGET_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-3 items-center justify-center opacity-50">
        {["--", "--", "--", "--"].map((_, i) => (
          <div
            key={i}
            className="glass-card rounded-lg px-4 py-3 min-w-[72px] text-center"
            style={{ border: "1px solid rgba(0, 243, 255, 0.2)" }}
          >
            <span className="font-orbitron text-3xl font-bold" style={{ color: "#00f3ff" }}>
              --
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {/* HUD label */}
      <div className="flex items-center gap-2">
        <div
          className="h-px flex-1 w-16"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,243,255,0.4))" }}
        />
        <span
          className="font-space text-xs tracking-[0.3em] uppercase"
          style={{ color: "rgba(0,243,255,0.5)" }}
        >
          Event Countdown
        </span>
        <div
          className="h-px flex-1 w-16"
          style={{ background: "linear-gradient(90deg, rgba(0,243,255,0.4), transparent)" }}
        />
      </div>

      <div className="flex items-center gap-3 md:gap-5">
        <TimeUnit value={timeLeft.days} label="Days" />
        <span
          className="font-orbitron text-2xl font-bold mb-5 blink-dot"
          style={{ color: "rgba(0,243,255,0.7)" }}
        >
          :
        </span>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <span
          className="font-orbitron text-2xl font-bold mb-5 blink-dot"
          style={{ color: "rgba(0,243,255,0.7)", animationDelay: "0.3s" }}
        >
          :
        </span>
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <span
          className="font-orbitron text-2xl font-bold mb-5 blink-dot"
          style={{ color: "rgba(0,243,255,0.7)", animationDelay: "0.6s" }}
        >
          :
        </span>
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}