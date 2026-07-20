"use client";

import { useEffect } from "react";

/** Syncs <html lang> with the active locale (root layout defaults to pt-BR). */
export function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
