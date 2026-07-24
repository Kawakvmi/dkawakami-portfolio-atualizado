import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { localeHref } from "@/lib/i18n/config";
import { categoryLabel, getDictionary } from "@/lib/i18n/dictionaries";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ProjectMedia } from "@/components/ui/ProjectMedia";
import { coverIcon } from "@/components/ui/icons";

function MetaLine({ project, locale }: { project: Project; locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <div className="text-muted flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] tracking-wide uppercase">
      <span className="tabular">{project.year[locale]}</span>
      <span aria-hidden className="bg-border-strong h-3 w-px" />
      <span>
        {project.category.map((c) => categoryLabel(locale, c)).join(" · ")}
      </span>
      {project.confidential && (
        <>
          <span aria-hidden className="bg-border-strong h-3 w-px" />
          <span className="text-accent-text">{dict.work.confidential}</span>
        </>
      )}
    </div>
  );
}

function ViewCaseLink({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  return (
    <span className="text-foreground group-hover:text-accent-text mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors">
      {dict.work.viewCase}
      <svg
        aria-hidden
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-transform duration-200 group-hover:translate-x-1"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </span>
  );
}

export function WorkCard({
  project,
  locale,
  featured = false,
  priority = false,
}: {
  project: Project;
  locale: Locale;
  featured?: boolean;
  priority?: boolean;
}) {
  const dict = getDictionary(locale);
  const href = `${localeHref(locale) === "/" ? "" : localeHref(locale)}/work/${project.slug}`;
  const placeholderTag = project.confidential
    ? dict.work.confidential
    : dict.caseStudy.assetPending;

  return (
    <Link
      href={href}
      className="group card-mirror card-beam border-border/50 hover:border-border-strong block h-full overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
    >
      <div
        className={cn(
          featured
            ? "md:grid md:grid-cols-2 md:items-stretch"
            : "flex h-full flex-col",
        )}
      >
        <div className="relative overflow-hidden">
          <ProjectMedia
            media={project.cover}
            locale={locale}
            label={project.title[locale]}
            pendingTag={placeholderTag}
            icon={coverIcon(project)}
            priority={priority}
            sizes={
              featured
                ? "(min-width: 768px) 50vw, 100vw"
                : "(min-width: 768px) 50vw, 100vw"
            }
            className={cn(
              "transition-transform duration-500 group-hover:scale-[1.02]",
              featured
                ? "aspect-[4/3] md:h-full md:min-h-[26rem]"
                : "aspect-[16/10]",
            )}
          />
          {featured && (
            <span className="bg-accent text-accent-contrast absolute top-4 left-4 rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.15em] uppercase">
              {dict.work.featured}
            </span>
          )}
        </div>

        <div
          className={cn(
            "flex flex-col justify-between",
            featured ? "p-7 md:p-10" : "flex-1 p-6",
          )}
        >
          <div>
            <MetaLine project={project} locale={locale} />
            <h3
              className={cn(
                "mt-4 leading-[1.05]",
                featured ? "text-4xl md:text-5xl" : "text-3xl",
              )}
            >
              {project.title[locale]}
            </h3>
            <p className="text-muted-strong mt-2 text-base">
              {project.subtitle[locale]}
            </p>
            {featured && (
              <p className="text-muted mt-5 max-w-md leading-relaxed text-pretty">
                {project.summary[locale]}
              </p>
            )}
          </div>

          <div>
            {featured && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.role[locale].map((r) => (
                  <li
                    key={r}
                    className="border-border text-muted rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            )}
            <ViewCaseLink locale={locale} />
          </div>
        </div>
      </div>
    </Link>
  );
}
