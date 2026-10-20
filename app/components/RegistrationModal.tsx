"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, UserCheck, Zap, Mail, User, Phone, School } from "lucide-react";

export default function RegistrationModal() {
  const [submitted, setSubmitted] = useState(false);
  const [category, setCategory] = useState("all-access");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="register" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0, 243, 255, 0.05) 0%, rgba(112, 0, 255, 0.05) 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(0,243,255,0.5))" }} />
            <span className="font-space text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(0,243,255,0.7)" }}>
              Early Access Portal
            </span>
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, rgba(0,243,255,0.5), transparent)" }} />
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            REGISTER FOR{" "}
            <span style={{ color: "#00f3ff", textShadow: "0 0 25px rgba(0,243,255,0.6)" }}>
              TECHFEST 2026
            </span>
          </h2>
          <p className="font-space text-base mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Claim your digital delegate passport for Asia&apos;s largest science &amp; technology festival at IIT Bombay.
          </p>
        </motion.div>

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-6 sm:p-10 md:p-12 relative overflow-hidden"
          style={{
            border: "1px solid rgba(0, 243, 255, 0.25)",
            boxShadow: "0 0 50px rgba(0, 243, 255, 0.08), inset 0 0 40px rgba(112, 0, 255, 0.05)",
          }}
        >
          {/* Top subtle highlight */}
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{
              background: "linear-gradient(90deg, transparent, #00f3ff, #7000ff, transparent)",
            }}
          />

          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12 flex flex-col items-center gap-4"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                style={{
                  background: "rgba(57, 255, 20, 0.15)",
                  border: "1px solid rgba(57, 255, 20, 0.4)",
                  boxShadow: "0 0 30px rgba(57, 255, 20, 0.3)",
                }}
              >
                <CheckCircle2 size={36} className="text-[#39ff14]" />
              </div>
              <h3 className="font-orbitron text-2xl font-bold text-white">
                PASS CONFIRMED!
              </h3>
              <p className="font-space text-sm text-gray-300 max-w-md">
                Welcome aboard, <span className="text-[#00f3ff] font-semibold">{formData.name}</span>! Your Techfest 2026 QR pass and orientation briefing have been dispatched to{" "}
                <span className="text-[#00f3ff] font-semibold">{formData.email}</span>.
              </p>
              <div
                className="mt-4 px-5 py-2.5 rounded-lg font-space text-xs flex items-center gap-2"
                style={{
                  background: "rgba(0, 243, 255, 0.08)",
                  border: "1px solid rgba(0, 243, 255, 0.2)",
                  color: "#00f3ff",
                }}
              >
                <Zap size={14} /> ID: TF-2026-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 font-space text-xs text-gray-400 hover:text-white underline transition-colors"
              >
                Register another attendee
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Category selector */}
              <div>
                <label className="block font-space text-xs font-semibold uppercase tracking-wider text-gray-300 mb-3">
                  Select Pass Type
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "all-access", title: "All-Access Delegate", price: "Free Entry", tag: "Most Popular" },
                    { id: "competitor", title: "Competition Team", price: "Free Entry", tag: "Robowar & AI" },
                    { id: "workshop", title: "Workshop Pass", price: "Certificates", tag: "Hands-on Tech" },
                  ].map((p) => {
                    const isSelected = category === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setCategory(p.id)}
                        className="p-4 rounded-xl text-left transition-all duration-200 relative"
                        style={{
                          background: isSelected ? "rgba(0, 243, 255, 0.12)" : "rgba(255, 255, 255, 0.03)",
                          border: `1px solid ${isSelected ? "#00f3ff" : "rgba(255, 255, 255, 0.1)"}`,
                          boxShadow: isSelected ? "0 0 20px rgba(0, 243, 255, 0.2)" : "none",
                        }}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-orbitron text-xs font-bold text-white">
                            {p.title}
                          </span>
                          <span
                            className="font-space text-[10px] px-2 py-0.5 rounded-full"
                            style={{
                              background: isSelected ? "rgba(0, 243, 255, 0.2)" : "rgba(255, 255, 255, 0.08)",
                              color: isSelected ? "#00f3ff" : "rgba(255, 255, 255, 0.6)",
                            }}
                          >
                            {p.tag}
                          </span>
                        </div>
                        <span className="font-space text-xs font-semibold text-[#00f3ff]">
                          {p.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-space text-xs text-gray-300 mb-2">
                    Full Name <span className="text-[#00f3ff]">*</span>
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl font-space text-sm bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-space text-xs text-gray-300 mb-2">
                    Email Address <span className="text-[#00f3ff]">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="name@college.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl font-space text-sm bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-space text-xs text-gray-300 mb-2">
                    College / Organization
                  </label>
                  <div className="relative">
                    <School size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="e.g. IIT Bombay / BITS Pilani"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl font-space text-sm bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-space text-xs text-gray-300 mb-2">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl font-space text-sm bg-black/40 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00f3ff] focus:ring-1 focus:ring-[#00f3ff] transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button & trust badge */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-space text-gray-400">
                  <ShieldCheck size={16} className="text-[#00f3ff]" />
                  <span>Free Instant Digital Pass · Official IIT Bombay Entry</span>
                </div>

                <button
                  type="submit"
                  id="submit-registration-btn"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-space text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg, #00f3ff, #7000ff)",
                    color: "#07090e",
                    fontWeight: 700,
                    boxShadow: "0 0 25px rgba(0, 243, 255, 0.4)",
                  }}
                >
                  <Sparkles size={16} />
                  Complete Registration
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
