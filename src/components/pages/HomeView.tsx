import type { Locale } from "@/lib/i18n/config";
import { alternateLocale, localeHref } from "@/lib/i18n/config";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Expertise } from "@/components/sections/Expertise";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export function HomeView({ locale }: { locale: Locale }) {
  const altHref = localeHref(alternateLocale(locale));

  return (
    <SiteShell locale={locale} onHome altHref={altHref}>
      <Hero locale={locale} />
      <SelectedWork locale={locale} />
      <Expertise locale={locale} />
      <Process locale={locale} />
      <About locale={locale} />
      <Contact locale={locale} />
    </SiteShell>
  );
}
