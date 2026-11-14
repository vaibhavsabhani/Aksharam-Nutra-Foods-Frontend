"use client";

import React, { useEffect, useRef, useState } from "react";

export type RevealAnimation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "zoom-out"
  | "blur-in"
  | "curtain-up";

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  animation?: RevealAnimation;
  delay?: number; // ms
  duration?: number; // ms
  threshold?: number;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "article" | "aside" | "span" | "p" | "header" | "footer";
}

const animationStyles: Record<
  RevealAnimation,
  { hidden: string; visible: string }
> = {
  "fade-up": {
    hidden: "opacity-0 translate-y-10",
    visible: "opacity-100 translate-y-0",
  },
  "fade-down": {
    hidden: "opacity-0 -translate-y-10",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    hidden: "opacity-0 translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    hidden: "opacity-0 -translate-x-10",
    visible: "opacity-100 translate-x-0",
  },
  "zoom-in": {
    hidden: "opacity-0 scale-90",
    visible: "opacity-100 scale-100",
  },
  "zoom-out": {
    hidden: "opacity-0 scale-108",
    visible: "opacity-100 scale-100",
  },
  "blur-in": {
    hidden: "opacity-0 blur-md scale-95",
    visible: "opacity-100 blur-0 scale-100",
  },
  "curtain-up": {
    hidden: "opacity-0 [clip-path:inset(100%_0_0_0)] translate-y-6",
    visible: "opacity-100 [clip-path:inset(0_0_0_0)] translate-y-0",
  },
};

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 750,
  threshold = 0.12,
  once = true,
  className = "",
  as: Component = "div",
  style,
  ...rest
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      queueMicrotask(() => setIsVisible(true));
      return;
    }

    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const anim = animationStyles[animation];

  const transitionStyle: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity, filter",
    ...style,
  };

  return (
    <Component
      ref={elementRef as unknown as React.Ref<never>}
      className={`transition-all transform ${
        isVisible ? anim.visible : anim.hidden
      } ${className}`}
      style={transitionStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}
