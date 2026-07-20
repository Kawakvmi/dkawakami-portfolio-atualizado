import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-focus";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-contrast hover:brightness-110 hover:-translate-y-0.5",
  secondary:
    "border border-border text-foreground hover:border-border-strong hover:bg-surface hover:-translate-y-0.5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  arrow = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={cn(base, variants[variant], className)}
    >
      {children}
      {arrow && (
        <svg
          aria-hidden
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      )}
    </a>
  );
}
