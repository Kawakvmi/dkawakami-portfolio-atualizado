import type { CSSProperties } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroHeadline } from "./HeroHeadline";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-32 pb-24"
    >
      <div aria-hidden className="hero-grain" />
      <div
        aria-hidden
        className="section-glow"
        style={{ "--glow-y": "8%" } as CSSProperties}
      />

      <div className="container-editorial">
        <Reveal y={12}>
          <div className="flex flex-col gap-3">
            <span className="text-muted inline-flex items-center gap-2.5 font-mono text-xs tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
                <span className="bg-accent relative inline-flex h-2 w-2 rounded-full" />
              </span>
              {dict.hero.availability}
            </span>
            <span className="font-mono text-sm tracking-[0.18em] uppercase">
              {profile.name}
              <span className="text-muted"> · {profile.title[locale]}</span>
            </span>
          </div>
        </Reveal>

        <HeroHeadline
          text={profile.headline[locale]}
          scriptWord={profile.scriptWord[locale]}
          className="font-display mt-8 max-w-[18ch] text-[clamp(2.75rem,8.5vw,6.75rem)] leading-[1.02] tracking-[-0.02em]"
        />

        <Reveal delay={0.5} y={16}>
          <p className="text-muted-strong mt-8 max-w-xl text-lg leading-relaxed text-pretty">
            {profile.intro[locale]}
          </p>
        </Reveal>

        <Reveal delay={0.6} y={16}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="#work" variant="primary" arrow>
              {dict.hero.viewWork}
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              {dict.hero.getInTouch}
            </ButtonLink>
          </div>
        </Reveal>
      </div>

      <div className="container-editorial pointer-events-none absolute inset-x-0 bottom-8 hidden md:block">
        <span className="text-muted flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase">
          <svg
            aria-hidden
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
          {dict.hero.scroll}
        </span>
      </div>
    </section>
  );
}
