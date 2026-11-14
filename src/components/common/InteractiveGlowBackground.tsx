"use client";

import React, { useEffect, useRef, useState } from "react";

export interface InteractiveGlowBackgroundProps {
  className?: string;
}

export function InteractiveGlowBackground({
  className = "",
}: InteractiveGlowBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50, opacity: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
        setMousePos({ x, y, opacity: 0.5 });
      } else {
        setMousePos((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden -z-10 ${className}`}
    >
      {/* Drifting fluid ambient auras */}
      <div className="absolute -top-32 -left-32 size-[450px] rounded-full bg-brand/15 blur-[120px] animate-aura-drift" />
      <div className="absolute -bottom-32 -right-32 size-[500px] rounded-full bg-brand-accent/20 blur-[130px] animate-aura-drift [animation-delay:4s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[350px] rounded-full bg-white/40 dark:bg-white/5 blur-[100px]" />

      {/* Dynamic interactive mouse follower spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-700 ease-out"
        style={{
          background: `radial-gradient(circle 380px at ${mousePos.x}% ${mousePos.y}%, rgba(150, 200, 65, 0.22), transparent 70%)`,
          opacity: mousePos.opacity,
        }}
      />
    </div>
  );
}
