import type { NavItem } from "@/lib/types";

/** In-page anchors on the home route (in scroll order). */
export const navItems: NavItem[] = [
  { label: { pt: "Sobre", en: "About" }, href: "#about" },
  { label: { pt: "Trabalhos", en: "Work" }, href: "#work" },
  { label: { pt: "Expertise", en: "Expertise" }, href: "#expertise" },
  { label: { pt: "Processo", en: "Process" }, href: "#process" },
  { label: { pt: "Contato", en: "Contact" }, href: "#contact" },
];

/** Section ids used for scroll-spy (active section in the header). */
export const sectionIds = [
  "about",
  "work",
  "expertise",
  "process",
  "contact",
] as const;
