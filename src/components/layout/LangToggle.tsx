import Link from "next/link";
import { cn } from "@/lib/utils";

export function LangToggle({
  href,
  label,
  short,
  className,
}: {
  href: string;
  label: string;
  short: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "text-muted hover:text-foreground hover:border-border-strong border-border inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-xs tracking-wide transition-colors",
        className,
      )}
    >
      <svg
        aria-hidden
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
      </svg>
      {short}
    </Link>
  );
}
