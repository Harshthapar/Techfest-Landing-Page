"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Globe, Users, ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  { icon: Award, label: "Official Certificate", desc: "Recognized by IIT Bombay" },
  { icon: Briefcase, label: "Internship Opportunities", desc: "With top tech companies" },
  { icon: Globe, label: "National Network", desc: "Connect with 500+ campuses" },
  { icon: Users, label: "Exclusive Community", desc: "Join the Techfest CA Alumni" },
];

const steps = [
  { num: "01", text: "Apply online through the CA Portal" },
  { num: "02", text: "Get verified and receive your CA Kit" },
  { num: "03", text: "Promote Techfest at your college" },
  { num: "04", text: "Earn rewards, certificates & more" },
];

export default function CampusAmbassadorBanner() {
  return (
    <section id="ca-program" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(112,0,255,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="ca-banner rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(112,0,255,0.08) 0%, rgba(0,243,255,0.04) 100%)",
            border: "1px solid rgba(112,0,255,0.25)",
            boxShadow: "0 0 60px rgba(112,0,255,0.1), inset 0 0 60px rgba(0,0,0,0.3)",
          }}
        >
          {/* Top accent bar */}
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(112,0,255,0.8), rgba(0,243,255,0.6), transparent)",
            }}
          />

          <div className="p-8 md:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="flex flex-col gap-6">
                {/* Badge */}
                <div className="flex items-center gap-2 w-fit">
                  <div
                    className="px-3 py-1 rounded-full font-space text-xs font-semibold"
                    style={{
                      background: "rgba(112,0,255,0.2)",
                      border: "1px solid rgba(112,0,255,0.5)",
                      color: "#b060ff",
                    }}
                  >
                    Campus Ambassador Program
                  </div>
                  <div
                    className="px-3 py-1 rounded-full font-space text-xs"
                    style={{
                      background: "rgba(0,243,255,0.1)",
                      border: "1px solid rgba(0,243,255,0.3)",
                      color: "#00f3ff",
                    }}
                  >
                    500+ Colleges
                  </div>
                </div>

                {/* Heading */}
                <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  <span style={{ color: "white" }}>REPRESENT </span>
                  <span
                    style={{
                      color: "#b060ff",
                      textShadow: "0 0 20px rgba(112,0,255,0.6)",
                    }}
                  >
                    TECHFEST
                  </span>
                  <br />
                  <span style={{ color: "white" }}>AT YOUR </span>
                  <span
                    style={{
                      color: "#00f3ff",
                      textShadow: "0 0 20px rgba(0,243,255,0.5)",
                    }}
                  >
                    COLLEGE
                  </span>
                </h2>

                {/* Description */}
                <p
                  className="font-space text-base leading-relaxed max-w-lg"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  Become an official face of Asia's largest tech festival. Lead a delegation from your campus, unlock exclusive rewards, gain real-world leadership experience, and earn recognition from IIT Bombay.
                </p>

                {/* Steps */}
                <div className="flex flex-col gap-3">
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <span
                        className="font-orbitron text-xs font-bold px-2 py-1 rounded flex-shrink-0"
                        style={{
                          background: "rgba(112,0,255,0.15)",
                          border: "1px solid rgba(112,0,255,0.3)",
                          color: "#b060ff",
                        }}
                      >
                        {step.num}
                      </span>
                      <CheckCircle2 size={14} style={{ color: "rgba(57,255,20,0.7)" }} />
                      <span
                        className="font-space text-sm"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                      >
                        {step.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <a
                    href="#ca-apply"
                    id="ca-join-btn"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-space text-sm font-bold transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(112,0,255,0.4), rgba(0,243,255,0.2))",
                      border: "1px solid rgba(112,0,255,0.6)",
                      color: "white",
                      boxShadow: "0 0 20px rgba(112,0,255,0.3)",
                    }}
                  >
                    Join CA Program
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#ca-info"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-space text-sm font-medium transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right: Perk cards */}
              <div className="grid grid-cols-2 gap-4">
                {perks.map((perk, i) => {
                  const Icon = perk.icon;
                  return (
                    <motion.div
                      key={perk.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.1 }}
                      className="flex flex-col gap-3 p-5 rounded-xl hover-glow-border transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(112,0,255,0.15)",
                      }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: "rgba(112,0,255,0.12)",
                          border: "1px solid rgba(112,0,255,0.25)",
                        }}
                      >
                        <Icon size={20} style={{ color: "#b060ff" }} />
                      </div>
                      <div>
                        <p
                          className="font-space text-sm font-semibold"
                          style={{ color: "white" }}
                        >
                          {perk.label}
                        </p>
                        <p
                          className="font-space text-xs mt-0.5"
                          style={{ color: "rgba(255,255,255,0.45)" }}
                        >
                          {perk.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}

                {/* Stats card spanning full width */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="col-span-2 p-5 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,243,255,0.06), rgba(112,0,255,0.06))",
                    border: "1px solid rgba(0,243,255,0.15)",
                  }}
                >
                  <div className="flex justify-around text-center">
                    <div>
                      <div
                        className="font-orbitron text-2xl font-bold"
                        style={{ color: "#00f3ff" }}
                      >
                        5000+
                      </div>
                      <div
                        className="font-space text-xs mt-1"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        CA Alumni
                      </div>
                    </div>
                    <div className="w-px" style={{ background: "rgba(255,255,255,0.1)" }} />
                    <div>
                      <div
                        className="font-orbitron text-2xl font-bold"
                        style={{ color: "#b060ff" }}
                      >
                        500+
                      </div>
                      <div
                        className="font-space text-xs mt-1"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        Colleges
                      </div>
                    </div>
                    <div className="w-px" style={{ background: "rgba(255,255,255,0.1)" }} />
                    <div>
                      <div
                        className="font-orbitron text-2xl font-bold"
                        style={{ color: "#00f3ff" }}
                      >
                        30+
                      </div>
                      <div
                        className="font-space text-xs mt-1"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                      >
                        Countries
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(0,243,255,0.4), rgba(112,0,255,0.6), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
