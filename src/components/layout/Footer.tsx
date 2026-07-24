import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { profile } from "@/data/profile";
import { socials } from "@/data/social";
import { BackToTop } from "./BackToTop";

function SocialIcon({ label }: { label: string }) {
  if (label === "GitHub") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    );
  }
  if (label === "LinkedIn") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
      </svg>
    );
  }
  // Email
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function SocialPill({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className="group border-border bg-surface/40 text-muted hover:text-foreground hover:border-border-strong inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-14px_var(--accent)]"
    >
      <span className="group-hover:text-accent-text text-muted-strong transition-colors">
        <SocialIcon label={label} />
      </span>
      {label}
      {external && (
        <svg
          aria-hidden
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
        >
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      )}
    </a>
  );
}

export function Footer({ locale }: { locale: Locale }): ReactNode {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-border relative z-10 border-t">
      <div className="container-editorial py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl">
              {profile.monogram}
              <span className="text-accent">.</span>
            </p>
            <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
              {dict.footer.tagline}
            </p>
          </div>

          <nav aria-label="Social" className="flex flex-wrap gap-2.5">
            {socials.map((s) => (
              <SocialPill
                key={s.label}
                href={s.href}
                label={s.label}
                external={s.external}
              />
            ))}
          </nav>
        </div>

        <div className="border-border/60 text-muted mt-12 flex flex-col gap-4 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. {dict.footer.rights}
          </p>
          <p className="font-mono tracking-wide">{dict.footer.builtWith}</p>
          <BackToTop label={dict.footer.backToTop} />
        </div>
      </div>
    </footer>
  );
}
