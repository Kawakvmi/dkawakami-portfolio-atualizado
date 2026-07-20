import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Radial accent glow anchored at { x, y } as CSS percentages. */
  glow?: { x: string; y: string };
  /** Remove the default editorial container (for full-bleed content). */
  bleed?: boolean;
};

export function Section({
  id,
  children,
  className,
  glow,
  bleed = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-24 md:py-36", className)}
    >
      {glow && (
        <div
          aria-hidden
          className="section-glow"
          style={{ "--glow-x": glow.x, "--glow-y": glow.y } as CSSProperties}
        />
      )}
      {bleed ? children : <div className="container-editorial">{children}</div>}
    </section>
  );
}
