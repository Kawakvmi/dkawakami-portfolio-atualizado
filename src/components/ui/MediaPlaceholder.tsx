import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Intentional, on-brand stand-in for media that isn't available yet (real
 * screenshots/video are added under /public and wired via the project's
 * `cover.src`). Never fabricates a fake screenshot: it shows a fitting icon and
 * a production label while keeping the layout composed.
 */
export function MediaPlaceholder({
  label,
  tag,
  icon,
  className,
}: {
  label: string;
  tag: string;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-surface flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      {/* accent glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 70%)",
        }}
      />
      {/* dotted grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--muted) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
        {icon && (
          <span
            aria-hidden
            className="border-border-strong text-accent-text bg-background/40 flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-sm"
          >
            {icon}
          </span>
        )}
        <span className="text-muted-strong font-display max-w-[18ch] text-xl leading-tight">
          {label}
        </span>
        <span className="text-muted font-mono text-[10px] tracking-[0.22em] uppercase">
          {tag}
        </span>
      </div>
    </div>
  );
}
