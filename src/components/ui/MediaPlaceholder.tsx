import { cn } from "@/lib/utils";

/**
 * Intentional, on-brand stand-in for media that isn't available yet (real
 * screenshots/video are added under /public and wired via the project's
 * `cover.src`). Never fabricates a fake screenshot — it clearly reads as a
 * production placeholder while keeping the layout composed.
 */
export function MediaPlaceholder({
  label,
  tag,
  confidential = false,
  className,
}: {
  label: string;
  tag: string;
  confidential?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-surface relative flex items-center justify-center overflow-hidden",
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
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        {confidential && (
          <span
            aria-hidden
            className="border-border-strong text-muted flex h-11 w-11 items-center justify-center rounded-full border"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </span>
        )}
        <span className="text-muted-strong font-display max-w-[16ch] text-2xl leading-tight">
          {label}
        </span>
        <span className="text-muted font-mono text-[10px] tracking-[0.22em] uppercase">
          {tag}
        </span>
      </div>
    </div>
  );
}
