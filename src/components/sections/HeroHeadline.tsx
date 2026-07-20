"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Mask/clip reveal, word by word, reserved for the hero title only.
 * `scriptWord` (if present) is rendered in the calligraphy font over a small
 * paper-collage patch (glued, slightly folded). Word spacing uses margin so the
 * overflow-hidden clip wrappers can't collapse the gaps.
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

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, i) => {
        const isScript = scriptWord && strip(word) === scriptWord;
        const isLast = i === words.length - 1;
        const gap = { marginRight: isLast ? 0 : "0.26em" } as CSSProperties;

        // Script word: paper-collage backing, no clip so the paper can bleed.
        if (isScript) {
          return (
            <span
              key={`${word}-${i}`}
              aria-hidden
              className="relative inline-block align-bottom"
              style={gap}
            >
              <motion.span
                className="relative inline-block px-[0.18em] pb-[0.06em]"
                initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduce ? 0 : 0.85,
                  delay: reduce ? 0 : 0.15 + i * 0.05,
                  ease,
                }}
              >
                <span aria-hidden className="paper-patch" />
                <span className="paper-ink font-script relative z-1 italic">
                  {word}
                </span>
              </motion.span>
            </span>
          );
        }

        return (
          <span
            key={`${word}-${i}`}
            aria-hidden
            className="inline-block overflow-hidden pb-[0.14em] align-bottom"
            style={gap}
          >
            <motion.span
              className="inline-block"
              initial={{ y: reduce ? 0 : "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: reduce ? 0 : 0.8,
                delay: reduce ? 0 : 0.15 + i * 0.05,
                ease,
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
