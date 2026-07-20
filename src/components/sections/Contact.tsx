import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { contact, socials } from "@/data/social";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CopyEmail } from "./CopyEmail";

export function Contact({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const externalSocials = socials.filter((s) => s.label !== "Email");

  return (
    <Section id="contact" glow={{ x: "50%", y: "0%" }}>
      <div className="max-w-3xl">
        <Reveal>
          <Eyebrow>{dict.contact.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-[clamp(2.5rem,7vw,4.5rem)] leading-[1.02]">
            {dict.contact.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-muted-strong mt-6 text-lg leading-relaxed text-pretty">
            {dict.contact.blurb}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-accent-text font-display mt-8 inline-block text-[clamp(1.5rem,4vw,2.5rem)] break-all transition-colors"
          >
            {contact.email}
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink
              href={`mailto:${contact.email}`}
              variant="primary"
              arrow
            >
              {dict.contact.sendEmail}
            </ButtonLink>
            <CopyEmail
              email={contact.email}
              copyLabel={dict.contact.copyEmail}
              copiedLabel={dict.contact.copied}
            />
            {contact.cv && (
              <ButtonLink href={contact.cv} variant="secondary" external>
                {dict.contact.downloadCv}
              </ButtonLink>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <ul className="border-border mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6">
            {externalSocials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group text-muted hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
                >
                  {s.label}
                  <svg
                    aria-hidden
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
