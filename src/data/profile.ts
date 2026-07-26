import type { Localized } from "@/lib/i18n/config";

export const profile = {
  name: "Dereck Kawakami",
  monogram: "DK",
  title: {
    pt: "Digital Designer & Creative Developer",
    en: "Digital Designer & Creative Developer",
  } satisfies Localized,
  location: {
    pt: "Brasil, remoto",
    en: "Brazil, remote",
  } satisfies Localized,
  availability: {
    pt: "Aberto a vagas CLT, contrato e projetos freelance",
    en: "Open to full-time, contract and freelance work",
  } satisfies Localized,
  /** Short profile / skills, shown as tags in the About section. */
  roles: {
    pt: ["Publicitário", "Especialização em UX/UI", "Front-end Dev"],
    en: ["Advertising background", "UX/UI specialization", "Front-end Dev"],
  } satisfies Localized<string[]>,
  /**
   * Hero statement. `scriptWord` is rendered in the display script font for
   * emphasis; it must appear verbatim (accents included) inside `headline`.
   */
  headline: {
    pt: "Ideias que viram interface, código e conteúdo.",
    en: "Ideas that turn into interface, code and content.",
  } satisfies Localized,
  scriptWord: {
    pt: "conteúdo",
    en: "content",
  } satisfies Localized,
  intro: {
    pt: "Na interseção entre design, front-end, conteúdo e IA aplicada, o mesmo par de mãos define a hierarquia de uma tela, implementa o componente em React e escreve o que vai dentro dele.",
    en: "At the intersection of design, front-end, content and applied AI, the same pair of hands sets a screen's hierarchy, ships the React component and writes what goes inside it.",
  } satisfies Localized,
  /**
   * Portrait shown in the About section. Set `src` to "/media/dereck.jpg"
   * (or .webp) after adding the file under public/media. Empty shows a
   * tasteful monogram frame, never a broken image.
   */
  photo: {
    src: "/media/dereck.png",
    alt: {
      pt: "Retrato de Dereck Kawakami",
      en: "Portrait of Dereck Kawakami",
    } satisfies Localized,
  },
  /** About section, short and career-focused. */
  about: {
    pt: [
      "Publicitário com especialização em UX/UI e front-end, há mais de quatro anos criando conteúdo e design. Como analista conteudista, desenvolve campanhas, vídeos e comunicação para marcas, unindo estratégia, design e tecnologia.",
      "Transita entre o design e o código: projeta interfaces, escreve front-end em React e Next.js e monta pipelines de conteúdo com IA. Sempre com o mesmo foco, reduzir o atrito entre a ideia e a execução.",
    ],
    en: [
      "Advertising graduate specialized in UX/UI and front-end, with over four years creating content and design. As a content analyst, he builds campaigns, video and communication for brands, blending strategy, design and technology.",
      "He moves between design and code: designing interfaces, shipping front-end in React and Next.js and building AI content pipelines. Always with the same focus, cutting the friction between idea and execution.",
    ],
  } satisfies Localized<string[]>,
  /** Tools grouped by discipline, shown as a skills showcase in About. */
  toolGroups: [
    {
      label: { pt: "Design & Marca", en: "Design & Brand" },
      tools: ["Figma", "Photoshop", "Illustrator", "PowerPoint", "Excel"],
    },
    {
      label: { pt: "Vídeo & Motion", en: "Video & Motion" },
      tools: ["Premiere", "After Effects"],
    },
    {
      label: { pt: "Front-end", en: "Front-end" },
      tools: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "VS Code"],
    },
    {
      label: { pt: "IA & Automação", en: "AI & Automation" },
      tools: ["Claude Code", "ChatGPT", "Python", "FFmpeg"],
    },
  ],
} as const;
