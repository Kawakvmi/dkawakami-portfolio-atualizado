import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Display serif — editorial, variable optical sizing.
 * Used for hero, chapter titles and project names only.
 */
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

/** UI / body sans — everything readable. */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/** Mono — metadata, labels, years, categories. */
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});
