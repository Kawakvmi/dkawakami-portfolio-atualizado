import type { Localized } from "@/lib/i18n/config";

export const profile = {
  name: "Dereck Kawakami",
  monogram: "DK",
  title: {
    pt: "Digital Designer & Creative Developer",
    en: "Digital Designer & Creative Developer",
  } satisfies Localized,
  location: {
    pt: "Brasil — remoto",
    en: "Brazil — remote",
  } satisfies Localized,
  availability: {
    pt: "Aberto a vagas CLT, contrato e projetos freelance",
    en: "Open to full-time, contract and freelance work",
  } satisfies Localized,
  /** Two-second read on the hero. */
  headline: {
    pt: "Desenho e construo interfaces, produtos e sistemas de conteúdo.",
    en: "I design and build interfaces, products and content systems.",
  } satisfies Localized,
  intro: {
    pt: "Trabalho na interseção entre design, front-end, conteúdo e IA aplicada — o mesmo par de mãos define a hierarquia de uma tela, implementa o componente em React e escreve o que vai dentro dele.",
    en: "I work at the intersection of design, front-end, content and applied AI — the same pair of hands sets a screen's hierarchy, ships the React component and writes what goes inside it.",
  } satisfies Localized,
  /** About section — hybrid profile, no emotional cliché. */
  about: {
    pt: [
      "Dereck Kawakami transita entre o design e o código. Projeta interfaces e sistemas de produto, escreve front-end em React e Next.js, e desenha pipelines de conteúdo e automação apoiados por IA.",
      "Essa amplitude é o ponto: em vez de passar o trabalho de mão em mão entre design, desenvolvimento e conteúdo, ele mantém a intenção intacta do primeiro rascunho até a interface no ar — e até o texto e o vídeo que a acompanham.",
      "O interesse constante é reduzir o atrito entre ideia e execução: ferramentas internas que economizam horas, sistemas visuais que escalam, automações que assumem o repetitivo para sobrar tempo ao que exige julgamento.",
    ],
    en: [
      "Dereck Kawakami moves between design and code. He designs product interfaces and systems, ships front-end in React and Next.js, and builds AI-assisted content and automation pipelines.",
      "That range is the point: instead of handing work off between design, development and content, he keeps the intent intact from the first sketch to the shipped interface — and to the copy and video that travel with it.",
      "The through-line is reducing the friction between idea and execution: internal tools that save hours, visual systems that scale, automations that take over the repetitive so judgement gets the time it needs.",
    ],
  } satisfies Localized<string[]>,
} as const;
