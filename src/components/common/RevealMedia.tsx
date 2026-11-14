"use client";

import React, { useEffect, useRef, useState } from "react";

export interface RevealMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number;
  className?: string;
}

export function RevealMedia({
  children,
  delay = 0,
  duration = 850,
  threshold = 0.15,
  className = "",
  ...rest
}: RevealMediaProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      queueMicrotask(() => setIsRevealed(true));
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      {...rest}
    >
      {/* Media content zooming down into final scale */}
      <div
        className={`w-full h-full transition-all ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
          isRevealed ? "scale-100 opacity-100 blur-0" : "scale-110 opacity-40 blur-xs"
        }`}
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>

      {/* Shutter curtain wipe effect */}
      <div
        className={`pointer-events-none absolute inset-0 z-20 bg-brand/20 backdrop-blur-2xs transition-transform ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isRevealed ? "translate-y-full" : "translate-y-0"
        }`}
        style={{
          transitionDuration: `${duration * 0.9}ms`,
          transitionDelay: `${delay}ms`,
        }}
      />
    </div>
  );
}
