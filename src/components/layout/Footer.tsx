import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { profile } from "@/data/profile";
import { socials } from "@/data/social";
import { BackToTop } from "./BackToTop";

export function Footer({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="border-border relative border-t">
      <div className="container-editorial py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl">
              {profile.monogram}
              <span className="text-accent">.</span>
            </p>
            <p className="text-muted mt-3 text-sm leading-relaxed">
              {profile.availability[locale]}
            </p>
          </div>

          <nav aria-label="Social" className="flex flex-col gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noreferrer noopener" : undefined}
                className="group text-muted hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
              >
                <span className="bg-border-strong group-hover:bg-accent h-px w-4 transition-colors" />
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-border/60 text-muted mt-14 flex flex-col gap-4 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
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
