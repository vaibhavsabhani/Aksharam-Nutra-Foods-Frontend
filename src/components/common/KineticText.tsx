"use client";

import React, { useEffect, useRef, useState } from "react";

export interface KineticTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  wordClassName?: string;
  stagger?: number; // ms per word
  delay?: number; // ms initial delay
  threshold?: number;
}

export function KineticText({
  text,
  as: Component = "h1",
  className = "",
  wordClassName = "",
  stagger = 35,
  delay = 0,
  threshold = 0.15,
}: KineticTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      queueMicrotask(() => setIsVisible(true));
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  const words = text.split(" ");

  return (
    <Component
      ref={containerRef as unknown as React.Ref<never>}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => {
        const wordDelay = delay + index * stagger;

        return (
          <span
            key={index}
            className="inline-block overflow-hidden align-top leading-tight"
          >
            <span
              className={`inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                isVisible ? "translate-y-0" : "translate-y-[115%]"
              } ${wordClassName}`}
              style={{
                transitionDelay: `${wordDelay}ms`,
              }}
            >
              {word}
              {index < words.length - 1 ? "\u00A0" : ""}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
