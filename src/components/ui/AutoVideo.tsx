"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Looping showcase video: muted, inline, autoplays only while in view, pauses
 * when scrolled away. When the user prefers reduced motion it does not autoplay
 * and shows native controls instead.
 */
export function AutoVideo({
  src,
  poster,
  label,
  className,
}: {
  src: string;
  poster?: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster || undefined}
      muted
      loop
      playsInline
      preload="metadata"
      controls={!!reduce}
      aria-label={label}
    >
      <source src={src} type="video/webm" />
    </video>
  );
}
