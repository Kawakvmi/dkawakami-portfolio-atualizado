import {
  Fraunces,
  Inter,
  JetBrains_Mono,
  Petit_Formal_Script,
} from "next/font/google";

/**
 * Display serif, editorial, variable optical sizing.
 * Used for hero, chapter titles and project names only.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

/** UI / body sans, everything readable. */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/** Mono, metadata, labels, years, categories. */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

/** Script, single accent word in the hero (elegant calligraphy). */
export const petitScript = Petit_Formal_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-petit-script",
});
