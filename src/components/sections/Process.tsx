import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { process } from "@/data/expertise";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

export function Process({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);

  return (
    <Section id="process">
      <SectionHeader
        eyebrow={dict.process.eyebrow}
        heading={dict.process.heading}
        intro={dict.process.intro}
      />

      <Stagger className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
        {process.map((step, i) => (
          <StaggerItem key={step.index} className="border-border border-t pt-6">
            <span
              className="process-num text-border-strong font-display text-5xl leading-none"
              style={{ animationDelay: `${i * 1.5}s` }}
            >
              {step.index}
            </span>
            <h3 className="mt-5 text-xl">{step.title[locale]}</h3>
            <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
              {step.description[locale]}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
