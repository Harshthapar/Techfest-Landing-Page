"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Brain,
  Shield,
  Wifi,
  Swords,
  Globe,
  Music,
  Zap,
  ArrowRight,
  Tag,
} from "lucide-react";

const categories = [
  {
    id: "competitions",
    label: "Competitions",
    icon: Swords,
    color: "#00f3ff",
    description: "Battle it out in cutting-edge technical challenges across AI, robotics, and more.",
    events: [
      {
        title: "Robowar",
        subtitle: "Combat Robotics",
        tags: ["Hardware", "Robotics", "Combat"],
        icon: Bot,
        prize: "₹5L+",
        participants: "500+",
      },
      {
        title: "AI Hackathon",
        subtitle: "48-Hour Build Sprint",
        tags: ["ML", "AI", "Hackathon"],
        icon: Brain,
        prize: "₹3L+",
        participants: "1200+",
      },
      {
        title: "Meshmerize",
        subtitle: "Network Design Challenge",
        tags: ["Networking", "Strategy"],
        icon: Wifi,
        prize: "₹1.5L+",
        participants: "300+",
      },
      {
        title: "CozmoClench",
        subtitle: "Autonomous Bot Racing",
        tags: ["Autonomous", "Speed", "Sensors"],
        icon: Zap,
        prize: "₹2L+",
        participants: "400+",
      },
    ],
  },
  {
    id: "workshops",
    label: "Workshops",
    icon: Brain,
    color: "#7000ff",
    description: "Hands-on learning sessions led by industry veterans and global experts.",
    events: [
      {
        title: "GenAI Bootcamp",
        subtitle: "LLMs, RAG & Agents",
        tags: ["Generative AI", "LLM", "Hands-on"],
        icon: Brain,
        prize: "Certificate",
        participants: "600+",
      },
      {
        title: "Quantum Computing",
        subtitle: "Qiskit Fundamentals",
        tags: ["Quantum", "IBM Qiskit"],
        icon: Zap,
        prize: "Certificate",
        participants: "200+",
      },
      {
        title: "CyberSecurity",
        subtitle: "Ethical Hacking & CTF",
        tags: ["CTF", "Hacking", "Security"],
        icon: Shield,
        prize: "Certificate",
        participants: "350+",
      },
      {
        title: "IoT Systems",
        subtitle: "Smart Devices & Edge AI",
        tags: ["IoT", "Edge", "Embedded"],
        icon: Wifi,
        prize: "Certificate",
        participants: "280+",
      },
    ],
  },
  {
    id: "exhibitions",
    label: "Exhibitions",
    icon: Globe,
    color: "#00f3ff",
    description: "Witness groundbreaking technological demonstrations from global innovators.",
    events: [
      {
        title: "International Humanoid Robots",
        subtitle: "Live Humanoid Demos",
        tags: ["Humanoid", "Demo", "Global"],
        icon: Bot,
        prize: "Free Entry",
        participants: "50K+ visitors",
      },
      {
        title: "ISRO Space Tech",
        subtitle: "India's Space Frontier",
        tags: ["Space", "ISRO", "Defense"],
        icon: Globe,
        prize: "Free Entry",
        participants: "40K+ visitors",
      },
      {
        title: "Defense Technology",
        subtitle: "DRDO Showcase",
        tags: ["Defense", "DRDO", "Military Tech"],
        icon: Shield,
        prize: "Free Entry",
        participants: "30K+ visitors",
      },
      {
        title: "Startup Expo",
        subtitle: "Emerging Tech Startups",
        tags: ["Startups", "VC", "Innovation"],
        icon: Zap,
        prize: "Free Entry",
        participants: "100+ startups",
      },
    ],
  },
  {
    id: "pronites",
    label: "Pronites",
    icon: Music,
    color: "#7000ff",
    description: "Electrifying nights of music, light shows, and world-class performances.",
    events: [
      {
        title: "EDM Night",
        subtitle: "International DJ Performance",
        tags: ["EDM", "Party", "Night"],
        icon: Music,
        prize: "Free for Delegates",
        participants: "15K+ crowd",
      },
      {
        title: "Drone Light Show",
        subtitle: "1000-Drone Aerial Spectacle",
        tags: ["Drones", "Light Show", "Aerial"],
        icon: Zap,
        prize: "Free Entry",
        participants: "25K+ audience",
      },
      {
        title: "Tech Keynote",
        subtitle: "Visionary Talks & Panels",
        tags: ["Keynote", "Insights", "Leaders"],
        icon: Globe,
        prize: "Delegate Pass",
        participants: "5K+ attendees",
      },
      {
        title: "Ignite Talks",
        subtitle: "Lightning Innovation Pitches",
        tags: ["Ignite", "Pitches", "Innovation"],
        icon: Brain,
        prize: "Open",
        participants: "3K+ attendees",
      },
    ],
  },
];

function EventCard({
  event,
  color,
  index,
}: {
  event: (typeof categories)[0]["events"][0];
  color: string;
  index: number;
}) {
  const Icon = event.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className="glass-card hover-glow-border rounded-xl p-5 flex flex-col gap-4 cursor-pointer group"
      style={{ borderColor: `${color}18` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `${color}12`,
            border: `1px solid ${color}25`,
          }}
        >
          <Icon
            size={20}
            style={{ color }}
            className="group-hover:scale-110 transition-transform duration-200"
          />
        </div>
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
          style={{
            background: `${color}10`,
            border: `1px solid ${color}20`,
          }}
        >
          <Trophy size={11} style={{ color }} />
          <span className="font-space text-[11px] font-semibold" style={{ color }}>
            {event.prize}
          </span>
        </div>
      </div>

      {/* Title */}
      <div>
        <h3
          className="font-orbitron text-base font-bold tracking-wide group-hover:text-glow-cyan transition-all duration-200"
          style={{ color: "white" }}
        >
          {event.title}
        </h3>
        <p
          className="font-space text-xs mt-0.5"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          {event.subtitle}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {event.tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 px-2 py-0.5 rounded-full font-space text-[10px] font-medium"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.55)",
            }}
          >
            <Tag size={8} />
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <span
          className="font-space text-xs"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          👥 {event.participants}
        </span>
        <span
          className="flex items-center gap-1 font-space text-xs font-medium group-hover:gap-2 transition-all"
          style={{ color }}
        >
          Explore
          <ArrowRight size={12} />
        </span>
      </div>

      {/* Hover glow line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />
    </motion.div>
  );
}

// Minimal Trophy icon (avoid re-import naming conflict)
function Trophy({ size, style }: { size: number; style: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export default function EventCategories() {
  const [active, setActive] = useState(categories[0].id);
  const activeCategory = categories.find((c) => c.id === active) || categories[0];

  // Sync active category if URL hash changes
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (categories.some((c) => c.id === hash)) {
        setActive(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section id="events" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Anchor targets for each category link */}
      <span id="competitions" className="absolute -top-24 pointer-events-none" />
      <span id="workshops" className="absolute -top-24 pointer-events-none" />
      <span id="exhibitions" className="absolute -top-24 pointer-events-none" />
      <span id="pronites" className="absolute -top-24 pointer-events-none" />
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,243,255,0.03) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(0,243,255,0.5))" }} />
            <span className="font-space text-xs tracking-[0.3em] uppercase" style={{ color: "rgba(0,243,255,0.6)" }}>
              Event Categories
            </span>
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, rgba(0,243,255,0.5), transparent)" }} />
          </div>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            CORE{" "}
            <span style={{ color: "#00f3ff", textShadow: "0 0 20px rgba(0,243,255,0.5)" }}>
              ATTRACTIONS
            </span>
          </h2>
          <p className="font-space text-base mt-4 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            From cutting-edge competitions to immersive exhibitions — explore what makes Techfest the festival of a lifetime.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
          role="tablist"
          aria-label="Event categories"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                id={`tab-${cat.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${cat.id}`}
                onClick={() => setActive(cat.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-space text-sm font-medium transition-all duration-300"
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${cat.color}20, ${cat.color}10)`
                    : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isActive ? cat.color : "rgba(255,255,255,0.1)"}`,
                  color: isActive ? cat.color : "rgba(255,255,255,0.55)",
                  boxShadow: isActive ? `0 0 15px ${cat.color}30` : "none",
                }}
              >
                <Icon size={15} />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Category description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active + "-desc"}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <p className="font-space text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              {activeCategory.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Events grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative"
          >
            {activeCategory.events.map((event, i) => (
              <EventCard
                key={`${active}-${event.title}`}
                event={event}
                color={activeCategory.color}
                index={i}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* See all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="#all-events"
            className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-space text-sm font-medium"
          >
            View All {activeCategory.label}
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
