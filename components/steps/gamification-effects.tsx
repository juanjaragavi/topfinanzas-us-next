"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Confetti explosion animation - triggers on user interaction
 */
export function ConfettiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      color: string;
      size: number;
    }[] = [];

    // Generate confetti particles
    const createConfetti = (x: number, y: number) => {
      const colors = [
        "#00d4ff", // neon cyan
        "#ff006e", // neon pink
        "#6bff00", // neon green
        "#ffd700", // gold
        "#a78bfa", // purple
      ];

      for (let i = 0; i < 40; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 12,
          vy: Math.random() * -15 - 5,
          life: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 8 + 4,
        });
      }
    };

    // Animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.3; // gravity
        p.life -= 0.01;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      ctx.globalAlpha = 1;
      if (particles.length > 0) {
        requestAnimationFrame(animate);
      }
    };

    // Trigger confetti on mount
    createConfetti(window.innerWidth / 2, window.innerHeight / 2);
    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-40"
      aria-hidden="true"
    />
  );
}

/**
 * Floating particle background effect
 */
export function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    duration: 3 + Math.random() * 2,
    startX: Math.random() * 100,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 to-green-400"
          initial={{
            x: `${particle.startX}%`,
            y: "100vh",
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/**
 * Animated glowing orb showing engagement progress
 */
export function EngagementOrb({
  progress,
  size = "md",
  className,
}: {
  progress: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const normalizedProgress = Math.min(progress / 10, 1);
  const sizeClass = size === "sm" ? "w-16 h-16" : "w-20 h-20";
  const textClass = size === "sm" ? "text-base" : "text-xl";

  return (
    <motion.div
      className={cn("relative mx-auto", sizeClass, className)}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 to-green-400 opacity-75 blur-lg" />

      {/* Progress ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="3"
        />
        {/* Progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="url(#engagementGradient)"
          strokeWidth="3"
          strokeDasharray={`${251.2 * normalizedProgress} 251.2`}
          strokeLinecap="round"
          initial={{ strokeDashoffset: 251.2 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.5 }}
        />
        <defs>
          <linearGradient
            id="engagementGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#ff006e" />
            <stop offset="100%" stopColor="#6bff00" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div
            className={cn(
              "font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-green-400",
              textClass,
            )}
          >
            {Math.floor(normalizedProgress * 100)}%
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Shimmer effect for text or buttons
 */
export function ShimmerText({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg"
      initial={{ backgroundPosition: "200% 0" }}
      animate={{ backgroundPosition: "-200% 0" }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
        backgroundSize: "200% 100%",
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Pulsing reward badge
 */
export function RewardBadge({ unlocked }: { unlocked: boolean }) {
  return (
    <motion.div
      className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-pink-500 shadow-xl"
      animate={
        unlocked
          ? {
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }
          : { scale: 0.8 }
      }
      transition={{
        duration: 0.8,
        repeat: unlocked ? Infinity : 0,
        repeatType: "loop",
      }}
    >
      <div className="text-4xl">🏆</div>
    </motion.div>
  );
}

/**
 * Glowing neon button
 */
export function GlowingButton({
  children,
  onClick,
  color = "cyan",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "cyan" | "pink" | "green" | "gold";
}) {
  const colorMap = {
    cyan: { glow: "from-cyan-400 to-cyan-600", text: "text-cyan-400" },
    pink: { glow: "from-pink-400 to-pink-600", text: "text-pink-400" },
    green: { glow: "from-green-400 to-green-600", text: "text-green-400" },
    gold: { glow: "from-yellow-300 to-yellow-500", text: "text-yellow-300" },
  };

  const colors = colorMap[color];

  return (
    <motion.button
      onClick={onClick}
      className={`relative px-6 py-3 rounded-lg font-semibold overflow-hidden group transition-all ${colors.text}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glowing background */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colors.glow} opacity-0 group-hover:opacity-30 blur-xl transition-opacity`}
      />

      {/* Border glow */}
      <div
        className={`absolute inset-0 border-2 bg-gradient-to-r ${colors.glow} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity`}
      />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
