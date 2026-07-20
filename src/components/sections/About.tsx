import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function About({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section id="about" glow={{ x: "80%", y: "30%" }}>
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>{dict.about.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05]">
              {dict.about.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="border-border mt-8 flex flex-col gap-3 border-t pt-6 font-mono text-xs">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted">{profile.name}</dt>
                <dd className="text-muted-strong">
                  {profile.location[locale]}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted">Status</dt>
                <dd className="text-accent-text text-right">
                  {profile.availability[locale]}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="flex flex-col gap-6 md:col-span-6 md:col-start-7">
          {profile.about[locale].map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-muted-strong text-lg leading-relaxed text-pretty">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
