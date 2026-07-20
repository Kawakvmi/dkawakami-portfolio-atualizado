import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { HtmlLang } from "./HtmlLang";
import { CursorGlow } from "./CursorGlow";

/**
 * Shared page frame for both languages: skip link, sticky header, main landmark
 * and footer. `altHref` is the current page's URL in the other language.
 */
export function SiteShell({
  locale,
  onHome,
  altHref,
  children,
}: {
  locale: Locale;
  onHome: boolean;
  altHref: string;
  children: ReactNode;
}) {
  const dict = getDictionary(locale);

  return (
    <>
      <HtmlLang lang={locale === "en" ? "en" : "pt-BR"} />
      <CursorGlow />
      <a
        href="#main"
        className="focus:bg-accent focus:text-accent-contrast sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        {dict.skipToContent}
      </a>
      <Header locale={locale} onHome={onHome} altHref={altHref} />
      <main id="main" className="relative z-10">
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
