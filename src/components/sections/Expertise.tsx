import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { expertise } from "@/data/expertise";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Expertise({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section id="expertise">
      <SectionHeader
        eyebrow={dict.expertise.eyebrow}
        heading={dict.expertise.heading}
        intro={dict.expertise.intro}
      />

      <Stagger className="border-border bg-border mt-14 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-2">
        {expertise.map((pillar) => (
          <StaggerItem
            key={pillar.id}
            className="group bg-background hover:bg-surface/50 relative flex flex-col overflow-hidden p-8 transition-colors duration-300 md:p-10"
          >
            <span
              aria-hidden
              className="from-accent absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-linear-to-r to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -top-12 -left-12 -z-10 h-44 w-44 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--accent) 22%, transparent), transparent 70%)",
              }}
            />
            <span className="text-accent-text font-mono text-xs tracking-[0.2em]">
              {pillar.index}
            </span>
            <h3 className="mt-5 text-2xl md:text-[1.75rem]">
              {pillar.title[locale]}
            </h3>
            <p className="text-muted mt-3 leading-relaxed text-pretty">
              {pillar.description[locale]}
            </p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {pillar.practices[locale].map((practice) => (
                <li
                  key={practice}
                  className="text-muted-strong flex items-center gap-3 text-sm"
                >
                  <span
                    aria-hidden
                    className="bg-accent/60 group-hover:bg-accent h-px w-4 shrink-0 transition-all duration-300 group-hover:w-6"
                  />
                  {practice}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
