import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { projects } from "@/data/projects";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { WorkCard } from "./WorkCard";

export function SelectedWork({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="work" glow={{ x: "85%", y: "10%" }}>
      <SectionHeader eyebrow={dict.work.eyebrow} heading={dict.work.heading} />

      <div className="mt-14 flex flex-col gap-6">
        {featured.map((project) => (
          <Reveal key={project.slug} y={24}>
            <WorkCard project={project} locale={locale} featured priority />
          </Reveal>
        ))}

        {rest.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.slug} y={24} delay={i * 0.05}>
                <WorkCard project={project} locale={locale} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
