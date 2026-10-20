"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const PARTICLE_COUNT = 90;
    const MAX_CONNECT_DIST = 140;
    const MOUSE_REPEL_RADIUS = 120;
    const MOUSE_REPEL_FORCE = 0.6;
    const CYAN = { r: 0, g: 243, b: 255 };
    const PURPLE = { r: 112, g: 0, b: 255 };

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initParticles() {
      if (!canvas) return;
      particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
      }));
    }

    function lerpColor(
      c1: { r: number; g: number; b: number },
      c2: { r: number; g: number; b: number },
      t: number
    ) {
      return {
        r: Math.round(c1.r + (c2.r - c1.r) * t),
        g: Math.round(c1.g + (c2.g - c1.g) * t),
        b: Math.round(c1.b + (c2.b - c1.b) * t),
      };
    }

    let time = 0;

    function draw() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const particles = particlesRef.current;

      // Update particles
      for (const p of particles) {
        // Mouse interaction
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_RADIUS && dist > 0) {
          const force = (MOUSE_REPEL_RADIUS - dist) / MOUSE_REPEL_RADIUS;
          p.vx += (dx / dist) * force * MOUSE_REPEL_FORCE * 0.05;
          p.vy += (dy / dist) * force * MOUSE_REPEL_FORCE * 0.05;
        }

        // Dampen velocity
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Clamp velocity
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.5) {
          p.vx = (p.vx / speed) * 1.5;
          p.vy = (p.vy / speed) * 1.5;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulsing opacity
        const pulsedOpacity =
          p.opacity * (0.7 + 0.3 * Math.sin(time * p.pulseSpeed * 100 + p.pulsePhase));

        // Color varies with position
        const colorT = (p.x / canvas.width + p.y / canvas.height) / 2;
        const col = lerpColor(CYAN, PURPLE, colorT);

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${pulsedOpacity})`;
        ctx.fill();

        // Glow effect for larger particles
        if (p.radius > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, ${pulsedOpacity * 0.08})`;
          ctx.fill();
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const pa = particles[i];
          const pb = particles[j];
          const dx = pa.x - pb.x;
          const dy = pa.y - pb.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_CONNECT_DIST) {
            const alpha = (1 - dist / MAX_CONNECT_DIST) * 0.25;
            const midX = (pa.x + pb.x) / 2;
            const midY = (pa.y + pb.y) / 2;

            // Mouse proximity boost
            const mdx = midX - mx;
            const mdy = midY - my;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            const mouseBoost = mdist < 200 ? (1 - mdist / 200) * 0.5 : 0;

            const finalAlpha = Math.min(alpha + mouseBoost, 0.6);

            // Gradient line
            const grad = ctx.createLinearGradient(pa.x, pa.y, pb.x, pb.y);
            grad.addColorStop(0, `rgba(0, 243, 255, ${finalAlpha})`);
            grad.addColorStop(0.5, `rgba(112, 0, 255, ${finalAlpha * 0.5})`);
            grad.addColorStop(1, `rgba(0, 243, 255, ${finalAlpha})`);

            ctx.beginPath();
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.5 + mouseBoost;
            ctx.stroke();
          }
        }
      }

      time++;
      animFrameRef.current = requestAnimationFrame(draw);
    }

    function handleMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function handleMouseLeave() {
      mouseRef.current = { x: -9999, y: -9999 };
    }

    resize();
    initParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      initParticles();
    });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
