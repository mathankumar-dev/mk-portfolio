"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  targetAlpha: number;
  color: string;
}

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Dynamic particles with crisp visibility
    const count = Math.min(50, Math.max(20, Math.floor((width * height) / 24000)));
    const particles: Particle[] = [];

    const isDark = resolvedTheme === "dark";

    const darkColors = [
      "rgba(255, 255, 255,",
      "rgba(52, 211, 153,", // emerald-400
      "rgba(96, 165, 250,", // blue-400
      "rgba(167, 139, 250,", // violet-400
      "rgba(45, 212, 191,", // teal-400
    ];

    const lightColors = [
      "rgba(15, 23, 42,", // slate-900
      "rgba(16, 185, 129,", // emerald-500
      "rgba(59, 130, 246,", // blue-500
      "rgba(139, 92, 246,", // violet-500
      "rgba(20, 184, 166,", // teal-500
    ];

    const colors = isDark ? darkColors : lightColors;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.6,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3 - 0.05,
        alpha: Math.random() * 0.4 + (isDark ? 0.15 : 0.08),
        targetAlpha: Math.random() * 0.5 + (isDark ? 0.2 : 0.1),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse influence
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen borders
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle alpha breathing
        p.alpha += (p.targetAlpha - p.alpha) * 0.02;
        if (Math.abs(p.targetAlpha - p.alpha) < 0.03) {
          p.targetAlpha = Math.random() * (isDark ? 0.6 : 0.35) + (isDark ? 0.15 : 0.06);
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        if (isDark) {
          ctx.shadowBlur = 5;
          ctx.shadowColor = `${p.color} 0.7)`;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
      {/* Frosted Glow Orb 1 - Top Left (Emerald & Cyan / Pastel in Light) */}
      <div
        className="absolute -top-24 -left-24 w-[500px] h-[500px] sm:w-[680px] sm:h-[680px] rounded-full bg-gradient-to-br from-emerald-500/20 via-cyan-500/15 to-transparent dark:from-emerald-500/25 dark:via-cyan-500/18 blur-[100px] sm:blur-[130px] transform-gpu animate-pulse"
        style={{ animationDuration: "10s" }}
      />

      {/* Frosted Glow Orb 2 - Middle Right (Indigo / Violet) */}
      <div
        className="absolute top-1/4 -right-32 w-[520px] h-[520px] sm:w-[720px] sm:h-[720px] rounded-full bg-gradient-to-bl from-indigo-400/18 via-violet-400/12 to-transparent dark:from-indigo-500/28 dark:via-violet-600/20 blur-[110px] sm:blur-[140px] transform-gpu animate-pulse"
        style={{ animationDuration: "14s", animationDelay: "2s" }}
      />

      {/* Frosted Glow Orb 3 - Bottom Left (Teal & Emerald) */}
      <div
        className="absolute -bottom-28 -left-28 w-[480px] h-[480px] sm:w-[640px] sm:h-[640px] rounded-full bg-gradient-to-tr from-emerald-400/16 via-teal-400/12 to-transparent dark:from-emerald-500/22 dark:via-teal-500/18 blur-[100px] sm:blur-[130px] transform-gpu animate-pulse"
        style={{ animationDuration: "12s", animationDelay: "4s" }}
      />

      {/* Frosted Glow Orb 4 - Bottom Right (Midnight Blue / Cyan) */}
      <div
        className="absolute -bottom-20 right-0 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] rounded-full bg-gradient-to-tl from-blue-400/16 via-cyan-400/12 to-transparent dark:from-blue-600/22 dark:via-cyan-600/18 blur-[100px] sm:blur-[130px] transform-gpu"
      />

      {/* Floating Stardust Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-85 dark:opacity-100"
      />
    </div>
  );
}
