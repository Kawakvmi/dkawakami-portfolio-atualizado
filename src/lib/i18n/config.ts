export const locales = ["pt", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

/** A value provided in both supported languages. */
export type Localized<T = string> = Record<Locale, T>;

/** Home path for a given locale ("" → "/", "en" → "/en"). */
export function localeHref(locale: Locale, path = ""): string {
  const clean = path.replace(/^\//, "");
  const base = locale === defaultLocale ? "" : `/${locale}`;
  return `${base}/${clean}`.replace(/\/+$/, "") || "/";
}

/** The same route in the other language, used by the header toggle. */
export function alternateLocale(locale: Locale): Locale {
  return locale === "pt" ? "en" : "pt";
}
