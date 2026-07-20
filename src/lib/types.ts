import type { Localized } from "@/lib/i18n/config";

export type MediaAsset = {
  type: "image" | "video";
  /** Path under /public, or empty string when the asset is still pending. */
  src: string;
  /** Poster frame for videos (prevents CLS). */
  poster?: string;
  alt: Localized;
  width?: number;
  height?: number;
};

export type ProjectLink = {
  label: Localized;
  url: string;
};

export type ProjectCategory =
  | "Product & Interfaces"
  | "Automation & AI"
  | "Content & Video"
  | "Brand & Campaign"
  | "Corporate Communication";

export type Project = {
  slug: string;
  /** Display name (kept per-locale to allow descriptive, non-branded cases). */
  title: Localized;
  subtitle: Localized;
  year: Localized;
  category: ProjectCategory[];
  role: Localized<string[]>;
  technologies: string[];
  cover: MediaAsset;
  /** Larger visual weight in the Selected Work grid. */
  featured: boolean;
  /** Confidential corporate work — visuals adapted, no client data. */
  confidential?: boolean;
  /** Whether a dedicated /work/[slug] page exists. */
  hasCaseStudy: boolean;
  summary: Localized;
  /** Case narrative: Problem → Strategy → Solution → Impact. */
  problem?: Localized;
  strategy?: Localized;
  solution?: Localized;
  impact?: Localized;
  /** Key UX/technical decisions, each a short titled note. */
  decisions?: {
    title: Localized;
    body: Localized;
  }[];
  links?: ProjectLink[];
  /** Steps of a pipeline/architecture, rendered as a diagram when present. */
  pipeline?: {
    label: Localized;
    detail: Localized;
  }[];
};

export type ExpertisePillar = {
  id: string;
  index: string;
  title: Localized;
  description: Localized;
  practices: Localized<string[]>;
};

export type ProcessStep = {
  index: string;
  title: Localized;
  description: Localized;
};

export type SocialLink = {
  label: string;
  href: string;
  /** Shown on external links. */
  external: boolean;
};

export type NavItem = {
  label: Localized;
  href: string;
};
