"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Mask/clip reveal, word by word, reserved for the hero title only.
 * `scriptWord` (if present in the text) is emphasized in the calligraphy font.
 * Word spacing uses margin (not whitespace) so the overflow-hidden clip wrappers
 * can't collapse the gaps.
 */
export function HeroHeadline({
  text,
  scriptWord,
  className,
}: {
  text: string;
  scriptWord?: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  const strip = (w: string) => w.replace(/[.,;:!?]/g, "");

  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, i) => {
        const isScript = scriptWord && strip(word) === scriptWord;
        const isLast = i === words.length - 1;
        return (
          <span
            key={`${word}-${i}`}
            aria-hidden
            className="inline-block overflow-hidden pb-[0.14em] align-bottom"
            style={{ marginRight: isLast ? 0 : "0.26em" } as CSSProperties}
          >
            <motion.span
              className={cn(
                "inline-block",
                isScript &&
                  "text-accent-text font-script px-[0.04em] tracking-normal italic",
              )}
              style={
                isScript
                  ? {
                      textShadow:
                        "0 0 44px color-mix(in oklab, var(--accent) 45%, transparent)",
                    }
                  : undefined
              }
              initial={{ y: reduce ? 0 : "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: reduce ? 0 : 0.8,
                delay: reduce ? 0 : 0.15 + i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
}
