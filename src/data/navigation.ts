import type { NavItem } from "@/lib/types";

/** In-page anchors on the home route. */
export const navItems: NavItem[] = [
  { label: { pt: "Trabalhos", en: "Work" }, href: "#work" },
  { label: { pt: "Expertise", en: "Expertise" }, href: "#expertise" },
  { label: { pt: "Processo", en: "Process" }, href: "#process" },
  { label: { pt: "Sobre", en: "About" }, href: "#about" },
  { label: { pt: "Contato", en: "Contact" }, href: "#contact" },
];

/** Section ids used for scroll-spy (active section in the header). */
export const sectionIds = [
  "work",
  "expertise",
  "process",
  "about",
  "contact",
] as const;
