"use client";

import { useRef, type ReactNode } from "react";

/**
 * Lightweight 3D tilt: the card leans toward the cursor with a soft glare,
 * giving a premium, tactile feel with zero 3D libraries. No-ops if the user
 * prefers reduced motion.
 */
export default function TiltCard({
  children,
  className = "",
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 2 * max;
    const rotateX = -(py - 0.5) * 2 * max;

    el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    el.style.setProperty("--glare-x", `${px * 100}%`);
    el.style.setProperty("--glare-y", `${py * 100}%`);
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`group relative transition-transform duration-300 ease-out [transform-style:preserve-3d] ${className}`}
    >
      {/* cursor glare */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--glare-x,50%) var(--glare-y,50%), rgba(255,255,255,0.10), transparent 40%)",
        }}
      />
      {children}
    </div>
  );
}
