"use client";

import React, { useEffect, useRef, useState } from "react";

export interface AnimatedCounterProps {
  value: string | number;
  duration?: number; // ms
  delay?: number; // ms
  className?: string;
  prefix?: string;
  suffix?: string;
}

function parseValue(val: string | number) {
  const str = String(val).trim();
  const match = str.match(/^([^0-9]*)([\d,.]+)(.*)$/);
  if (!match) {
    return { prefix: "", targetNumber: 0, suffix: str, isNumeric: false };
  }

  const rawNumber = match[2].replace(/,/g, "");
  const targetNumber = parseFloat(rawNumber);
  const isDecimal = match[2].includes(".");
  const decimalPlaces = isDecimal ? match[2].split(".")[1]?.length || 0 : 0;
  const hasComma = match[2].includes(",");

  return {
    prefix: match[1],
    targetNumber: isNaN(targetNumber) ? 0 : targetNumber,
    suffix: match[3],
    isNumeric: !isNaN(targetNumber),
    isDecimal,
    decimalPlaces,
    hasComma,
  };
}

export function AnimatedCounter({
  value,
  duration = 1800,
  delay = 0,
  className = "",
  prefix: propPrefix,
  suffix: propSuffix,
}: AnimatedCounterProps) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  const parsed = parseValue(value);

  useEffect(() => {
    if (!parsed.isNumeric) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      queueMicrotask(() => setCurrentNumber(parsed.targetNumber));
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [parsed.isNumeric, parsed.targetNumber]);

  useEffect(() => {
    if (!hasStarted || !parsed.isNumeric) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const timeoutId = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = easeOut * parsed.targetNumber;

        setCurrentNumber(current);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCurrentNumber(parsed.targetNumber);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted, parsed.isNumeric, parsed.targetNumber, duration, delay]);

  if (!parsed.isNumeric) {
    return <span className={className}>{value}</span>;
  }

  const prefix = propPrefix !== undefined ? propPrefix : parsed.prefix;
  const suffix = propSuffix !== undefined ? propSuffix : parsed.suffix;

  let formattedNumber: string;
  if (parsed.isDecimal) {
    formattedNumber = currentNumber.toFixed(parsed.decimalPlaces);
  } else {
    const rounded = Math.floor(currentNumber);
    formattedNumber = parsed.hasComma
      ? rounded.toLocaleString()
      : String(rounded);
  }

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {formattedNumber}
      {suffix}
    </span>
  );
}
