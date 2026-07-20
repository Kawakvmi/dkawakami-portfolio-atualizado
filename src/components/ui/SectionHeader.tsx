import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "text-accent-text inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.2em] uppercase",
        className,
      )}
    >
      <span aria-hidden className="bg-accent-text/50 h-px w-6" />
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  heading,
  intro,
  className,
}: {
  eyebrow: string;
  heading: ReactNode;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05]">
          {heading}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="text-muted-strong mt-6 text-lg leading-relaxed text-pretty">
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
