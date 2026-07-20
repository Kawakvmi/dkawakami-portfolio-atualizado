import type { ReactNode } from "react";
import type { Project } from "@/lib/types";

type IconProps = { className?: string; size?: number };

const svg = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
});

/** Kanban / product interfaces. */
export function IconBoard({ className, size = 26 }: IconProps) {
  return (
    <svg {...svg(size, className)} aria-hidden>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16M15 4v16" />
      <path d="M5 8h2M11 8h2M17 8h2M5 12h2M11 12h2M17 12h2" />
    </svg>
  );
}

/** Automation / AI pipelines. */
export function IconChip({ className, size = 26 }: IconProps) {
  return (
    <svg {...svg(size, className)} aria-hidden>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M8.5 3.5v1M15.5 3.5v1M8.5 19.5v1M15.5 19.5v1M3.5 8.5h1M3.5 15.5h1M19.5 8.5h1M19.5 15.5h1" />
      <circle cx="12" cy="12" r="1.6" />
    </svg>
  );
}

/** Brand / campaign. */
export function IconSpark({ className, size = 26 }: IconProps) {
  return (
    <svg {...svg(size, className)} aria-hidden>
      <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3Z" />
      <path d="M19 15l.7 2.1L22 18l-2.3.9L19 21l-.7-2.1L16 18l2.3-.9L19 15Z" />
    </svg>
  );
}

/** Confidential. */
export function IconLock({ className, size = 26 }: IconProps) {
  return (
    <svg {...svg(size, className)} aria-hidden>
      <rect x="3.5" y="11" width="17" height="10" rx="2" />
      <path d="M7.5 11V7a4.5 4.5 0 0 1 9 0v4" />
    </svg>
  );
}

/** Interface screen (gallery). */
export function IconMonitor({ className, size = 26 }: IconProps) {
  return (
    <svg {...svg(size, className)} aria-hidden>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  );
}

/** Portrait placeholder. */
export function IconUser({ className, size = 26 }: IconProps) {
  return (
    <svg {...svg(size, className)} aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </svg>
  );
}

/** Icon that best fits a project's cover placeholder. */
export function coverIcon(
  project: Pick<Project, "category" | "confidential">,
): ReactNode {
  if (project.confidential) return <IconLock />;
  const category = project.category[0];
  if (category === "Automation & AI") return <IconChip />;
  if (category === "Brand & Campaign") return <IconSpark />;
  return <IconBoard />;
}
