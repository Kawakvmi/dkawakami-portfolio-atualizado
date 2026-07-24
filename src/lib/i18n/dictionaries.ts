import type { Locale } from "@/lib/i18n/config";
import type { ProjectCategory } from "@/lib/types";

const pt = {
  skipToContent: "Pular para o conteúdo",
  langToggleLabel: "Ver em inglês",
  langToggleShort: "EN",
  menuOpen: "Abrir menu",
  menuClose: "Fechar menu",

  hero: {
    availability: "Disponível para novos projetos",
    viewWork: "Ver trabalhos",
    getInTouch: "Falar comigo",
    scroll: "Role para explorar",
  },

  work: {
    eyebrow: "Trabalhos selecionados",
    heading: "Projetos onde design e código se encontram",
    viewCase: "Ver case",
    confidential: "Confidencial",
    featured: "Case principal",
  },

  expertise: {
    eyebrow: "Expertise",
    heading: "Quatro frentes, um só par de mãos",
    intro:
      "Não escolho entre desenhar, construir e comunicar. As quatro frentes operam juntas em cada projeto.",
  },

  process: {
    eyebrow: "Processo",
    heading: "Um sistema flexível, não uma metodologia rígida",
    intro:
      "A ordem se adapta ao problema. O que não muda é a intenção acompanhar a ideia do rascunho ao que vai no ar.",
  },

  about: {
    eyebrow: "Sobre",
    heading: "Entre o design e o código",
    skills: "Ferramentas & Skills",
  },

  contact: {
    eyebrow: "Contato",
    headingPre: "Vamos ",
    headingNeon: "criar",
    headingPost: " juntos?",
    blurb:
      "Aberto a vagas CLT, contrato e projetos freelance. Para propostas, parcerias ou só uma conversa:",
    sendEmail: "Enviar e-mail",
    downloadCv: "Baixar CV",
    copied: "E-mail copiado",
    copyEmail: "Copiar e-mail",
  },

  footer: {
    tagline: "Criando na interseção entre design, código e conteúdo.",
    toolsLabel: "Ferramentas do dia a dia",
    rights: "Todos os direitos reservados.",
    builtWith: "Desenhado e construído com Next.js e Motion.",
    backToTop: "Voltar ao topo",
  },

  caseStudy: {
    back: "Voltar",
    allWork: "Todos os trabalhos",
    overview: "Visão geral",
    problem: "Problema",
    strategy: "Estratégia",
    solution: "Solução",
    impact: "Impacto",
    decisions: "Decisões-chave",
    interface: "Interface",
    gallery: "Peças selecionadas",
    pipeline: "Pipeline",
    techStack: "Stack técnica",
    role: "Papel",
    year: "Ano",
    category: "Categoria",
    links: "Links",
    nextProject: "Próximo projeto",
    assetPending: "Material em produção",
    confidentialNote:
      "Projeto corporativo confidencial. Nome do cliente, dados e visuais originais foram omitidos ou adaptados.",
  },

  categories: {
    "Product & Interfaces": "Produto & Interfaces",
    "Automation & AI": "Automação & IA",
    "Content & Video": "Conteúdo & Vídeo",
    "Brand & Campaign": "Marca & Campanha",
    "Corporate Communication": "Comunicação Corporativa",
  } satisfies Record<ProjectCategory, string>,
};

export type Dictionary = typeof pt;

const en: Dictionary = {
  skipToContent: "Skip to content",
  langToggleLabel: "View in Portuguese",
  langToggleShort: "PT",
  menuOpen: "Open menu",
  menuClose: "Close menu",

  hero: {
    availability: "Available for new projects",
    viewWork: "View work",
    getInTouch: "Get in touch",
    scroll: "Scroll to explore",
  },

  work: {
    eyebrow: "Selected work",
    heading: "Projects where design and code meet",
    viewCase: "View case",
    confidential: "Confidential",
    featured: "Lead case",
  },

  expertise: {
    eyebrow: "Expertise",
    heading: "Four disciplines, one pair of hands",
    intro:
      "I don't choose between designing, building and communicating. The four disciplines work together on every project.",
  },

  process: {
    eyebrow: "Process",
    heading: "A flexible system, not a rigid methodology",
    intro:
      "The order adapts to the problem. What doesn't change is intent following the idea from sketch to what ships.",
  },

  about: {
    eyebrow: "About",
    heading: "Between design and code",
    skills: "Tools & Skills",
  },

  contact: {
    eyebrow: "Contact",
    headingPre: "Let's ",
    headingNeon: "create",
    headingPost: " together?",
    blurb:
      "Open to full-time, contract and freelance work. For proposals, partnerships or just a chat:",
    sendEmail: "Send email",
    downloadCv: "Download CV",
    copied: "Email copied",
    copyEmail: "Copy email",
  },

  footer: {
    tagline: "Creating at the intersection of design, code and content.",
    toolsLabel: "Everyday tools",
    rights: "All rights reserved.",
    builtWith: "Designed and built with Next.js and Motion.",
    backToTop: "Back to top",
  },

  caseStudy: {
    back: "Back",
    allWork: "All work",
    overview: "Overview",
    problem: "Problem",
    strategy: "Strategy",
    solution: "Solution",
    impact: "Impact",
    decisions: "Key decisions",
    interface: "Interface",
    gallery: "Selected pieces",
    pipeline: "Pipeline",
    techStack: "Tech stack",
    role: "Role",
    year: "Year",
    category: "Category",
    links: "Links",
    nextProject: "Next project",
    assetPending: "Asset in production",
    confidentialNote:
      "Confidential corporate project. Client name, data and original visuals have been omitted or adapted.",
  },

  categories: {
    "Product & Interfaces": "Product & Interfaces",
    "Automation & AI": "Automation & AI",
    "Content & Video": "Content & Video",
    "Brand & Campaign": "Brand & Campaign",
    "Corporate Communication": "Corporate Communication",
  },
};

const dictionaries: Record<Locale, Dictionary> = { pt, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function categoryLabel(
  locale: Locale,
  category: ProjectCategory,
): string {
  return dictionaries[locale].categories[category];
}
