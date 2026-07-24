import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { IconUser } from "@/components/ui/icons";
import { ToolLogo } from "@/components/ui/ToolLogo";

export function About({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section id="about">
      <div className="grid gap-10 md:grid-cols-12 md:gap-10">
        {/* Portrait */}
        <div className="md:col-span-5 lg:col-span-4">
          <Reveal y={20}>
            <div className="border-border bg-surface relative aspect-4/5 overflow-hidden rounded-2xl border">
              {profile.photo.src ? (
                <Image
                  src={profile.photo.src}
                  alt={profile.photo.alt[locale]}
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <MediaPlaceholder
                  label={profile.name}
                  tag={locale === "pt" ? "Retrato" : "Portrait"}
                  icon={<IconUser />}
                  className="absolute inset-0"
                />
              )}
            </div>
          </Reveal>
        </div>

        {/* Text */}
        <div className="md:col-span-7 md:col-start-6">
          <Reveal>
            <Eyebrow>{dict.about.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-[clamp(2rem,5vw,3.25rem)] leading-[1.05]">
              {dict.about.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-5 flex flex-wrap gap-2">
              {profile.roles[locale].map((role) => (
                <li
                  key={role}
                  className="border-border bg-surface/40 text-muted-strong rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide"
                >
                  {role}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-7 flex flex-col gap-5">
            {profile.about[locale].map((paragraph, i) => (
              <Reveal key={i} delay={0.1 + i * 0.06}>
                <p className="text-muted-strong text-lg leading-relaxed text-pretty">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
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
      </div>

      {/* Skills & tools showcase */}
      <Reveal delay={0.1}>
        <div className="border-border mt-16 border-t pt-10 md:mt-20">
          <Eyebrow>{dict.about.skills}</Eyebrow>
          <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {profile.toolGroups.map((group) => (
              <div key={group.label.en}>
                <p className="text-accent-text font-mono text-[11px] tracking-[0.18em] uppercase">
                  {group.label[locale]}
                </p>
                <ul className="mt-5 flex flex-col gap-3.5">
                  {group.tools.map((tool) => (
                    <li
                      key={tool}
                      className="text-muted-strong flex items-center gap-3 text-sm"
                    >
                      <ToolLogo name={tool} size={26} />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
