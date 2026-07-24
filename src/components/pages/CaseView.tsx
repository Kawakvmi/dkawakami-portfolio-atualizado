import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { alternateLocale, localeHref } from "@/lib/i18n/config";
import { categoryLabel, getDictionary } from "@/lib/i18n/dictionaries";
import { getProject, projects } from "@/data/projects";
import type { Localized } from "@/lib/i18n/config";
import { SiteShell } from "@/components/layout/SiteShell";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { coverIcon, IconMonitor } from "@/components/ui/icons";
import { ToolLogo } from "@/components/ui/ToolLogo";
import { cn } from "@/lib/utils";

function base(locale: Locale) {
  const href = localeHref(locale);
  return href === "/" ? "" : href;
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-muted font-mono text-[11px] tracking-[0.18em] uppercase">
        {label}
      </dt>
      <dd className="text-foreground mt-2 text-sm leading-relaxed">{value}</dd>
    </div>
  );
}

function NarrativeBlock({
  label,
  body,
  lead = false,
}: {
  label: string;
  body: string;
  lead?: boolean;
}) {
  return (
    <Reveal>
      <div>
        <span className="text-accent-text font-mono text-xs tracking-[0.2em] uppercase">
          {label}
        </span>
        <p
          className={cn(
            "mt-4 leading-relaxed text-pretty",
            lead
              ? "text-foreground text-xl md:text-2xl"
              : "text-muted-strong text-lg",
          )}
        >
          {body}
        </p>
      </div>
    </Reveal>
  );
}

export function CaseView({ slug, locale }: { slug: string; locale: Locale }) {
  const project = getProject(slug);
  if (!project) notFound();

  const dict = getDictionary(locale);
  const t = (v: Localized) => v[locale];
  const b = base(locale);
  const altBase = base(alternateLocale(locale));
  const altHref = `${altBase}/work/${slug}`;

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];
  const nextHref = `${b}/work/${next.slug}`;

  const placeholderTag = project.confidential
    ? dict.work.confidential
    : dict.caseStudy.assetPending;

  return (
    <SiteShell locale={locale} onHome={false} altHref={altHref}>
      <article className="pb-28">
        {/* Intro */}
        <header className="container-editorial pt-32 md:pt-40">
          <Reveal y={10}>
            <Link
              href={`${b}/#work`}
              className="text-muted hover:text-foreground group inline-flex items-center gap-2 font-mono text-xs tracking-wide transition-colors"
            >
              <svg
                aria-hidden
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover:-translate-x-1"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {dict.caseStudy.allWork}
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-8">
              <Eyebrow>
                {project.category
                  .map((c) => categoryLabel(locale, c))
                  .join(" · ")}
              </Eyebrow>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-[clamp(2.5rem,7vw,5rem)] leading-[1.02]">
              {t(project.title)}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-strong mt-4 max-w-2xl text-xl">
              {t(project.subtitle)}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="border-border mt-12 grid gap-8 border-t pt-8 md:grid-cols-[1fr_auto] md:items-start md:gap-12">
              <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
                <MetaItem
                  label={dict.caseStudy.role}
                  value={project.role[locale].join(", ")}
                />
                <MetaItem
                  label={dict.caseStudy.year}
                  value={project.year[locale]}
                />
                <MetaItem
                  label={dict.caseStudy.category}
                  value={project.category
                    .map((c) => categoryLabel(locale, c))
                    .join(", ")}
                />
              </dl>
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap items-start gap-3">
                  {project.links.map((link, i) => (
                    <ButtonLink
                      key={link.url}
                      href={link.url}
                      external
                      arrow
                      variant={i === 0 ? "primary" : "secondary"}
                    >
                      {t(link.label)}
                    </ButtonLink>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </header>

        {/* Hero cover — full for real media, a compact band for placeholders */}
        <div className="container-editorial mt-12">
          <Reveal y={24}>
            <ProjectMedia
              media={project.cover}
              locale={locale}
              label={t(project.title)}
              pendingTag={placeholderTag}
              icon={coverIcon(project)}
              priority
              sizes="(min-width: 1152px) 1152px, 100vw"
              className={cn(
                "border-border rounded-2xl border",
                project.cover.src
                  ? "aspect-video"
                  : "aspect-[16/7] sm:aspect-[16/5] md:aspect-[24/6]",
              )}
            />
          </Reveal>
        </div>

        {/* Confidential note */}
        {project.confidential && (
          <div className="container-editorial mt-8">
            <Reveal>
              <p className="border-border bg-surface/40 text-muted flex items-start gap-3 rounded-xl border p-5 text-sm leading-relaxed">
                <svg
                  aria-hidden
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent-text mt-0.5 shrink-0"
                >
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                {dict.caseStudy.confidentialNote}
              </p>
            </Reveal>
          </div>
        )}

        {/* Narrative */}
        <div className="container-editorial mt-20 md:mt-28">
          <div className="mx-auto flex max-w-3xl flex-col gap-16">
            <NarrativeBlock
              label={dict.caseStudy.overview}
              body={t(project.summary)}
              lead
            />
            {project.problem && (
              <NarrativeBlock
                label={dict.caseStudy.problem}
                body={t(project.problem)}
              />
            )}
            {project.strategy && (
              <NarrativeBlock
                label={dict.caseStudy.strategy}
                body={t(project.strategy)}
              />
            )}
            {project.solution && (
              <NarrativeBlock
                label={dict.caseStudy.solution}
                body={t(project.solution)}
              />
            )}
          </div>
        </div>

        {/* Impact */}
        {project.impact && (
          <div className="container-editorial mt-20 md:mt-28">
            <Reveal y={20}>
              <div className="border-border bg-surface relative overflow-hidden rounded-2xl border p-8 md:p-14">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-80"
                  style={{
                    background:
                      "radial-gradient(60% 80% at 100% 0%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <span className="text-accent-text font-mono text-xs tracking-[0.2em] uppercase">
                    {dict.caseStudy.impact}
                  </span>
                  <p className="font-display mt-5 max-w-3xl text-2xl leading-snug text-pretty md:text-[2rem]">
                    {t(project.impact)}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        )}

        {/* Key decisions */}
        {project.decisions && project.decisions.length > 0 && (
          <div className="container-editorial mt-24">
            <Reveal>
              <h2 className="text-3xl md:text-4xl">
                {dict.caseStudy.decisions}
              </h2>
            </Reveal>
            <Stagger className="border-border bg-border mt-8 grid gap-px overflow-hidden rounded-2xl border md:grid-cols-2">
              {project.decisions.map((d, i) => (
                <StaggerItem
                  key={i}
                  className="bg-background flex flex-col p-8 md:p-10"
                >
                  <span className="text-muted font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl">{t(d.title)}</h3>
                  <p className="text-muted mt-3 leading-relaxed text-pretty">
                    {t(d.body)}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}

        {/* Pipeline */}
        {project.pipeline && project.pipeline.length > 0 && (
          <div className="container-editorial mt-24">
            <Reveal>
              <h2 className="text-3xl md:text-4xl">
                {dict.caseStudy.pipeline}
              </h2>
            </Reveal>
            <Stagger
              as="ol"
              className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
            >
              {project.pipeline.map((step, i) => (
                <StaggerItem
                  as="li"
                  key={i}
                  className="border-border bg-surface/40 relative rounded-xl border p-5"
                >
                  <span className="text-accent-text font-mono text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base">{t(step.label)}</h3>
                  <p className="text-muted mt-1 text-sm leading-relaxed">
                    {t(step.detail)}
                  </p>
                  {project.pipeline && i < project.pipeline.length - 1 && (
                    <svg
                      aria-hidden
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-border-strong absolute top-1/2 -right-3 hidden -translate-y-1/2 lg:block"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  )}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        )}

        {/* Interface gallery */}
        {project.screens && project.screens.length > 0 && (
          <div className="container-editorial mt-24">
            <Reveal>
              <h2 className="text-3xl md:text-4xl">
                {dict.caseStudy.interface}
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {project.screens.map((screen, i) => (
                <Reveal key={i} delay={(i % 2) * 0.05} y={20}>
                  <figure>
                    <ProjectMedia
                      media={screen.media}
                      locale={locale}
                      label={t(screen.caption)}
                      pendingTag={placeholderTag}
                      icon={<IconMonitor />}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="border-border aspect-[16/10] rounded-xl border"
                    />
                    <figcaption className="text-muted mt-3 flex items-start gap-2.5 text-sm">
                      <span
                        aria-hidden
                        className="bg-accent-text/60 mt-2 h-px w-3 shrink-0"
                      />
                      {t(screen.caption)}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Design gallery — hover spotlight, minimal text */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="container-editorial mt-24">
            <Reveal>
              <h2 className="text-3xl md:text-4xl">{dict.caseStudy.gallery}</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-muted mt-3 font-mono text-xs tracking-wide">
                {dict.caseStudy.galleryNote}
              </p>
            </Reveal>
            <Reveal y={20}>
              <div className="design-gallery mt-8 grid gap-4 sm:grid-cols-2">
                {project.gallery.map((media, i) => {
                  const portrait =
                    (media.height ?? 0) > (media.width ?? 1);
                  return (
                    <div
                      key={i}
                      className={cn(
                        "design-gallery-item border-border overflow-hidden rounded-xl border",
                        portrait && "sm:row-span-2",
                      )}
                    >
                      <ProjectMedia
                        media={media}
                        locale={locale}
                        label={t(project.title)}
                        pendingTag={placeholderTag}
                        icon={<IconMonitor />}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className={
                          portrait
                            ? "aspect-[3/4] sm:aspect-auto sm:h-full sm:min-h-[30rem]"
                            : "aspect-[16/10]"
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        )}

        {/* Tech stack */}
        <div className="container-editorial mt-24">
          <Reveal>
            <h2 className="text-3xl md:text-4xl">{dict.caseStudy.techStack}</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="border-border bg-surface/40 text-muted-strong flex items-center gap-2 rounded-full border py-1.5 pr-4 pl-1.5 font-mono text-xs"
                >
                  <ToolLogo name={tech} />
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Next project */}
        <div className="container-editorial mt-28">
          <Link
            href={nextHref}
            className="group border-border block border-t pt-10"
          >
            <span className="text-muted font-mono text-xs tracking-[0.2em] uppercase">
              {dict.caseStudy.nextProject}
            </span>
            <div className="mt-4 flex items-center justify-between gap-6">
              <h2 className="group-hover:text-accent-text text-3xl transition-colors md:text-5xl">
                {t(next.title)}
              </h2>
              <svg
                aria-hidden
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted group-hover:text-accent-text shrink-0 transition-all duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}
