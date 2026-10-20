"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Star, Zap, Bot, Mic, Music, Globe, Shield, Brain } from "lucide-react";

type EventType = "keynote" | "competition" | "workshop" | "pronite" | "exhibition";

interface ScheduleEvent {
  time: string;
  title: string;
  venue: string;
  type: EventType;
  icon: React.ElementType;
  highlight?: boolean;
  description: string;
}

const schedule: Record<string, ScheduleEvent[]> = {
  "Day 1": [
    { time: "09:00 AM", title: "Inauguration Ceremony", venue: "Main Auditorium", type: "keynote", icon: Star, highlight: true, description: "Grand opening with IIT Bombay Director and eminent guests" },
    { time: "10:30 AM", title: "AI Summit — Future of Intelligence", venue: "Convocation Hall", type: "keynote", icon: Brain, highlight: true, description: "Global AI leaders share visions for autonomous futures" },
    { time: "12:00 PM", title: "GenAI Workshop Batch 1", venue: "LH-101", type: "workshop", icon: Brain, description: "Hands-on with LLMs, RAG pipelines and Agents" },
    { time: "02:00 PM", title: "Robowar Qualifiers", venue: "Ground Arena", type: "competition", icon: Bot, description: "250+ combat bots battle for qualification" },
    { time: "04:30 PM", title: "ISRO & Defense Tech Exhibition Opens", venue: "Exhibition Hall A", type: "exhibition", icon: Globe, description: "Real ISRO satellites and DRDO defense prototypes on display" },
    { time: "06:00 PM", title: "Quantum Computing Workshop", venue: "LH-201", type: "workshop", icon: Zap, description: "Intro to Qiskit: Build your first quantum circuit" },
    { time: "08:00 PM", title: "Ignite Talks Night 1", venue: "Main Stage", type: "pronite", icon: Mic, description: "Fast-paced 5-minute visionary talks" },
    { time: "10:00 PM", title: "DJ Night — Neon Pulse", venue: "Open Ground", type: "pronite", icon: Music, highlight: true, description: "International EDM act with laser & light show" },
  ],
  "Day 2": [
    { time: "09:30 AM", title: "Hackathon Kickoff — 48H Sprint", venue: "Hack Arena", type: "competition", icon: Zap, highlight: true, description: "₹3L+ prize hackathon begins — 1200+ participants" },
    { time: "11:00 AM", title: "CyberSecurity Workshop & CTF", venue: "Lab Complex", type: "workshop", icon: Shield, description: "Learn ethical hacking, live CTF challenges" },
    { time: "12:30 PM", title: "Humanoid Robotics Demo", venue: "Exhibition Hall B", type: "exhibition", icon: Bot, description: "International humanoid robots — live demonstrations" },
    { time: "02:30 PM", title: "CozmoClench — Bot Racing", venue: "Racetrack Arena", type: "competition", icon: Bot, highlight: true, description: "Autonomous bot drag racing at full speed" },
    { time: "04:00 PM", title: "Robowar Finals", venue: "Ground Arena", type: "competition", icon: Bot, highlight: true, description: "Top 8 combat bots battle for ₹5L championship" },
    { time: "06:00 PM", title: "Space Tech Keynote — ISRO Chief", venue: "Convocation Hall", type: "keynote", icon: Globe, description: "India's future in space: Gaganyaan, Moon missions & beyond" },
    { time: "09:00 PM", title: "Drone Light Show Spectacular", venue: "Open Sky Arena", type: "pronite", icon: Zap, highlight: true, description: "1000 synchronized drones paint the night sky" },
  ],
  "Day 3": [
    { time: "09:00 AM", title: "IoT & Edge AI Workshop", venue: "LH-301", type: "workshop", icon: Zap, description: "Build smart devices with Raspberry Pi & TensorFlow Lite" },
    { time: "10:30 AM", title: "Meshmerize Finals", venue: "Strategy Hall", type: "competition", icon: Globe, description: "Network design supremacy — top teams battle it out" },
    { time: "12:00 PM", title: "Startup Expo & VC Panel", venue: "Exhibition Hall C", type: "exhibition", icon: Brain, description: "100+ startups pitch to top VCs in live sessions" },
    { time: "02:00 PM", title: "AI Hackathon Final Judging", venue: "Hack Arena", type: "competition", icon: Brain, highlight: true, description: "Top teams present AI solutions to global judges" },
    { time: "04:30 PM", title: "Grand Prize Ceremony", venue: "Main Auditorium", type: "keynote", icon: Star, highlight: true, description: "Winners announced. ₹45L+ in prizes distributed." },
    { time: "07:00 PM", title: "Closing Keynote — Future of Humanity & Tech", venue: "Main Auditorium", type: "keynote", icon: Globe, description: "Visionary talk on technology and civilization" },
    { time: "09:00 PM", title: "Grand Pronite — Closing Night Concert", venue: "Main Stage", type: "pronite", icon: Music, highlight: true, description: "Headline performance to close Techfest 2026 in style" },
  ],
};

const typeStyles: Record<EventType, { color: string; label: string; bg: string }> = {
  keynote: { color: "#f59e0b", label: "Keynote", bg: "rgba(245,158,11,0.1)" },
  competition: { color: "#00f3ff", label: "Competition", bg: "rgba(0,243,255,0.1)" },
  workshop: { color: "#7000ff", label: "Workshop", bg: "rgba(112,0,255,0.1)" },
  pronite: { color: "#ff4088", label: "Pronite", bg: "rgba(255,64,136,0.1)" },
  exhibition: { color: "#39ff14", label: "Exhibition", bg: "rgba(57,255,20,0.1)" },
};

export default function ScheduleTimeline() {
  const days = Object.keys(schedule);
  const [activeDay, setActiveDay] = useState(days[0]);

  return (
    <section id="schedule" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(112,0,255,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(112,0,255,0.5))" }} />
            <span className="font-space text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(112,0,255,0.7)" }}>
              Festival Timeline
            </span>
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, rgba(112,0,255,0.5), transparent)" }} />
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            EVENT{" "}
            <span style={{ color: "#7000ff", textShadow: "0 0 20px rgba(112,0,255,0.6)" }}>
              SCHEDULE
            </span>
          </h2>
          <p className="font-space text-base mt-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            Three days of non-stop innovation, competition & entertainment.
          </p>
        </motion.div>

        {/* Day tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 justify-center mb-10"
          role="tablist"
          aria-label="Festival days"
        >
          {days.map((day, i) => {
            const isActive = day === activeDay;
            return (
              <button
                key={day}
                role="tab"
                id={`sched-tab-${i}`}
                aria-selected={isActive}
                aria-controls={`sched-panel-${i}`}
                onClick={() => setActiveDay(day)}
                className="relative px-6 py-2.5 rounded-full font-orbitron text-sm font-bold transition-all duration-300"
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, rgba(112,0,255,0.25), rgba(0,243,255,0.15))"
                    : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isActive ? "#7000ff" : "rgba(255,255,255,0.1)"}`,
                  color: isActive ? "white" : "rgba(255,255,255,0.5)",
                  boxShadow: isActive ? "0 0 20px rgba(112,0,255,0.3)" : "none",
                }}
              >
                {day}
                {isActive && (
                  <motion.div
                    layoutId="day-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: "#7000ff", boxShadow: "0 0 6px #7000ff" }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Date label */}
        <div className="text-center mb-8">
          <span className="font-space text-sm" style={{ color: "rgba(0,243,255,0.6)" }}>
            {activeDay === "Day 1" && "📅 Tuesday, December 16, 2026"}
            {activeDay === "Day 2" && "📅 Wednesday, December 17, 2026"}
            {activeDay === "Day 3" && "📅 Thursday, December 18, 2026"}
          </span>
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="relative pl-8"
          >
            {/* Vertical line */}
            <div
              className="absolute left-3 top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(0,243,255,0.4) 10%, rgba(112,0,255,0.4) 90%, transparent)",
              }}
            />

            <div className="flex flex-col gap-6">
              {schedule[activeDay].map((event, i) => {
                const style = typeStyles[event.type];
                const Icon = event.icon;

                return (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                    className="relative flex gap-5 group"
                  >
                    {/* Timeline node */}
                    <div
                      className="absolute -left-8 top-4 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center z-10"
                      style={{
                        background: event.highlight ? style.color : "rgba(255,255,255,0.08)",
                        border: `2px solid ${event.highlight ? style.color : "rgba(255,255,255,0.2)"}`,
                        boxShadow: event.highlight
                          ? `0 0 12px ${style.color}60, 0 0 24px ${style.color}20`
                          : "none",
                      }}
                    >
                      {event.highlight && (
                        <div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: "#07090e" }}
                        />
                      )}
                    </div>

                    {/* Card */}
                    <div
                      className="flex-1 glass-card rounded-xl p-4 hover-glow-border transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        borderColor: event.highlight ? `${style.color}30` : "rgba(255,255,255,0.06)",
                        background: event.highlight ? `${style.bg}` : "rgba(255,255,255,0.02)",
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        {/* Time */}
                        <div className="flex items-center gap-2 sm:w-28 flex-shrink-0">
                          <Clock size={12} style={{ color: style.color, opacity: 0.7 }} />
                          <span
                            className="font-orbitron text-xs font-bold"
                            style={{ color: style.color }}
                          >
                            {event.time}
                          </span>
                        </div>

                        {/* Main content */}
                        <div className="flex-1 flex items-start gap-3">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ background: style.bg, border: `1px solid ${style.color}25` }}
                          >
                            <Icon size={14} style={{ color: style.color }} />
                          </div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2 flex-wrap">
                              <h3
                                className="font-space text-sm font-semibold"
                                style={{ color: event.highlight ? "white" : "rgba(255,255,255,0.85)" }}
                              >
                                {event.title}
                                {event.highlight && (
                                  <Star size={10} className="inline ml-1.5 mb-0.5" style={{ color: style.color }} />
                                )}
                              </h3>
                              <span
                                className="px-2 py-0.5 rounded-full font-space text-[10px] font-medium flex-shrink-0"
                                style={{
                                  background: style.bg,
                                  border: `1px solid ${style.color}30`,
                                  color: style.color,
                                }}
                              >
                                {style.label}
                              </span>
                            </div>
                            <p
                              className="font-space text-xs mt-0.5"
                              style={{ color: "rgba(255,255,255,0.4)" }}
                            >
                              {event.description}
                            </p>
                            <div className="flex items-center gap-1 mt-1.5">
                              <MapPin size={10} style={{ color: "rgba(255,255,255,0.3)" }} />
                              <span className="font-space text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                                {event.venue}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center mt-10"
        >
          {Object.entries(typeStyles).map(([key, val]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: val.color }} />
              <span className="font-space text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                {val.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
