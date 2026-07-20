import type { ExpertisePillar, ProcessStep } from "@/lib/types";

export const expertise: ExpertisePillar[] = [
  {
    id: "product-design",
    index: "01",
    title: { pt: "UX/UI & Product Design", en: "UX/UI & Product Design" },
    description: {
      pt: "Interfaces, design systems e fluxos que sustentam produtos reais, do problema à arquitetura de informação, dos protótipos aos componentes que escalam.",
      en: "Interfaces, design systems and flows that hold real products together, from the problem to information architecture, from prototypes to components that scale.",
    },
    practices: {
      pt: [
        "Design de interface & sistemas",
        "Arquitetura de informação",
        "Prototipagem & fluxos",
        "Design tokens & componentes",
      ],
      en: [
        "Interface & systems design",
        "Information architecture",
        "Prototyping & flows",
        "Design tokens & components",
      ],
    },
  },
  {
    id: "front-end",
    index: "02",
    title: { pt: "Front-End & Interactive", en: "Front-End & Interactive" },
    description: {
      pt: "Implementação em React e Next.js com motion refinado e atenção a performance e acessibilidade. O design entregue como código, não como imagem.",
      en: "React and Next.js implementation with refined motion and care for performance and accessibility. Design delivered as code, not as a picture.",
    },
    practices: {
      pt: [
        "React & Next.js (TypeScript)",
        "Motion & micro-interações",
        "Performance & acessibilidade",
        "Ferramentas internas",
      ],
      en: [
        "React & Next.js (TypeScript)",
        "Motion & micro-interactions",
        "Performance & accessibility",
        "Internal tooling",
      ],
    },
  },
  {
    id: "content",
    index: "03",
    title: { pt: "Content & Communication", en: "Content & Communication" },
    description: {
      pt: "Estratégia editorial, campanhas e comunicação, do roteiro e da direção de vídeo à identidade visual e aos materiais que fazem a mensagem chegar.",
      en: "Editorial strategy, campaigns and communication, from scripting and video direction to visual identity and the materials that land the message.",
    },
    practices: {
      pt: [
        "Estratégia editorial",
        "Direção de vídeo & motion",
        "Identidade & campanhas",
        "Comunicação corporativa",
      ],
      en: [
        "Editorial strategy",
        "Video direction & motion",
        "Identity & campaigns",
        "Corporate communication",
      ],
    },
  },
  {
    id: "ai-automation",
    index: "04",
    title: { pt: "AI & Automation", en: "AI & Automation" },
    description: {
      pt: "Pipelines assistidos por IA e automações que assumem o repetitivo (scraping, geração de mídia e distribuição) para liberar tempo ao que exige julgamento.",
      en: "AI-assisted pipelines and automations that take over the repetitive (scraping, media generation and distribution) to free time for what needs judgement.",
    },
    practices: {
      pt: [
        "Automação em Python",
        "Pipelines de mídia (FFmpeg)",
        "Produção assistida por IA",
        "Integrações & distribuição",
      ],
      en: [
        "Python automation",
        "Media pipelines (FFmpeg)",
        "AI-assisted production",
        "Integrations & distribution",
      ],
    },
  },
];

export const process: ProcessStep[] = [
  {
    index: "01",
    title: { pt: "Entender", en: "Understand" },
    description: {
      pt: "Enquadrar o problema real, o público e as restrições antes de qualquer pixel ou linha de código.",
      en: "Frame the real problem, the audience and the constraints before any pixel or line of code.",
    },
  },
  {
    index: "02",
    title: { pt: "Desenhar", en: "Design" },
    description: {
      pt: "Estrutura, hierarquia e sistema visual, decidindo no protótipo o que seria caro decidir no código.",
      en: "Structure, hierarchy and visual system, deciding in the prototype what would be costly to decide in code.",
    },
  },
  {
    index: "03",
    title: { pt: "Construir", en: "Build" },
    description: {
      pt: "Implementação em código com motion, performance e acessibilidade tratados como parte do design, não como acabamento.",
      en: "Implementation in code with motion, performance and accessibility treated as part of the design, not as finish.",
    },
  },
  {
    index: "04",
    title: { pt: "Automatizar", en: "Automate" },
    description: {
      pt: "Identificar o repetitivo e transformá-lo em sistema, ferramentas e pipelines que sustentam o trabalho depois da entrega.",
      en: "Spot the repetitive and turn it into a system, tools and pipelines that keep the work alive after handoff.",
    },
  },
];
