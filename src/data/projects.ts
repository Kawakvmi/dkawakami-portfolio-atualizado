import type { Project } from "@/lib/types";

/**
 * Selected work. Content is factual: CreatorFlow is drawn from its public
 * README/repo; the automation and corporate cases describe real work Dereck
 * built, with the corporate client kept confidential (visuals adapted, no
 * names, no unauthorized metrics). Media marked with an empty `src` renders a
 * labeled icon placeholder until the real asset is added under /public.
 */
export const projects: Project[] = [
  {
    slug: "creatorflow",
    title: { pt: "CreatorFlow", en: "CreatorFlow" },
    subtitle: {
      pt: "SaaS de gestão de produção de conteúdo",
      en: "Content production management SaaS",
    },
    year: { pt: "2026", en: "2026" },
    category: ["Product & Interfaces"],
    role: {
      pt: ["Design de produto", "Front-end", "Estratégia de UX"],
      en: ["Product design", "Front-end", "UX strategy"],
    },
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Zustand",
      "Recharts",
      "@hello-pangea/dnd",
      "IndexedDB",
      "cmdk",
    ],
    cover: {
      type: "video",
      src: "/media/creatorflow.mp4",
      poster: "/media/creatorflow-poster.jpg",
      alt: {
        pt: "Vídeo demonstrativo do CreatorFlow, quadro Kanban editorial em tema escuro",
        en: "CreatorFlow demo video, editorial Kanban board in dark theme",
      },
      width: 1600,
      height: 1000,
    },
    featured: true,
    hasCaseStudy: true,
    summary: {
      pt: "Kanban editorial, calendário e um Guidebook dentro de cada card. Um sistema para creators planejarem e produzirem conteúdo sem sair do fluxo.",
      en: "Editorial Kanban, calendar and a Guidebook inside every card. A system for creators to plan and produce content without leaving the flow.",
    },
    problem: {
      pt: "Times de conteúdo vivem espalhados entre planilha de pauta, gerenciador de tarefas, chat de aprovação e uma pasta solta de referências. O contexto de cada peça (briefing, tom, imagens de apoio) mora longe de onde a peça é de fato produzida.",
      en: "Content teams live scattered across a planning spreadsheet, a task manager, an approval chat and a loose folder of references. Each piece's context (brief, tone, supporting images) lives far from where the piece is actually made.",
    },
    strategy: {
      pt: "Concentrar produção e contexto num só lugar. Em vez de mais um Kanban genérico, um Kanban editorial em que cada card carrega o próprio caderno de brainstorm, com texto e imagens, dentro dele.",
      en: "Bring production and context into one place. Not another generic Kanban, but an editorial one where each card carries its own brainstorm notebook, with text and images, inside it.",
    },
    solution: {
      pt: "Um quadro de seis estágios, do roteiro ao publicado, com checklists que mudam conforme o tipo de conteúdo e um fluxo de aprovação. Ao lado, um calendário editorial que destaca prazos vencidos, um dashboard de KPIs, campanhas agrupadas e uma command palette para navegar em Cmd+K.",
      en: "A six-stage board, from script to published, with checklists that adapt to the content type and an approval flow. Alongside it, an editorial calendar that highlights late deadlines, a KPI dashboard, grouped campaigns and a command palette to navigate with Cmd+K.",
    },
    impact: {
      pt: "Projeto de portfólio com demo pública. O diferencial, o Guidebook dentro do card, resolve exatamente o problema que motivou o produto: o contexto acompanha a peça, em vez de ficar em outra aba.",
      en: "A portfolio project with a public demo. The differentiator, the in-card Guidebook, solves the very problem that motivated the product: context travels with the piece instead of sitting in another tab.",
    },
    decisions: [
      {
        title: {
          pt: "Guidebook dentro do card",
          en: "Guidebook inside the card",
        },
        body: {
          pt: "O brainstorm, as referências e as imagens vivem dentro do card, não em uma ferramenta paralela. É o que separa o CreatorFlow de um Kanban editorial qualquer.",
          en: "Brainstorm, references and images live inside the card, not in a parallel tool. It's what separates CreatorFlow from any editorial Kanban.",
        },
      },
      {
        title: {
          pt: "Checklists por tipo de conteúdo",
          en: "Checklists per content type",
        },
        body: {
          pt: "Vídeo, apresentação e game têm etapas diferentes. O card se adapta ao tipo, em vez de impor um checklist único a tudo.",
          en: "Video, presentation and game have different steps. The card adapts to the type instead of forcing one checklist on everything.",
        },
      },
      {
        title: {
          pt: "Calendário que sinaliza atraso",
          en: "A calendar that flags delay",
        },
        body: {
          pt: "Prazos vencidos são destacados visualmente no calendário. A informação crítica aparece sozinha, sem exigir um relatório.",
          en: "Overdue deadlines are visually highlighted on the calendar. The critical information surfaces on its own, no report required.",
        },
      },
      {
        title: {
          pt: "Ferramenta tratada como produto",
          en: "Tool treated as a product",
        },
        body: {
          pt: "Command palette (Cmd+K), estado persistente e uma demo sem cadastro: a experiência é de software de produto, não de formulário interno.",
          en: "Command palette (Cmd+K), persistent state and a sign-up-free demo: it feels like product software, not an internal form.",
        },
      },
    ],
    links: [
      {
        label: { pt: "Ver demo", en: "View demo" },
        url: "https://creatorflow-five.vercel.app",
      },
      {
        label: { pt: "Repositório", en: "Repository" },
        url: "https://github.com/Kawakvmi/creatorflow",
      },
    ],
    screens: [
      {
        caption: {
          pt: "Kanban editorial, seis estágios do roteiro ao publicado",
          en: "Editorial Kanban, six stages from script to published",
        },
        media: {
          type: "image",
          src: "",
          alt: {
            pt: "Quadro Kanban do CreatorFlow com colunas de produção",
            en: "CreatorFlow Kanban board with production columns",
          },
          width: 1600,
          height: 1000,
        },
      },
      {
        caption: {
          pt: "Card com Guidebook: brainstorm, referências e imagens no lugar da peça",
          en: "Card with Guidebook: brainstorm, references and images where the piece lives",
        },
        media: {
          type: "image",
          src: "",
          alt: {
            pt: "Detalhe do card com o Guidebook aberto",
            en: "Card detail with the Guidebook open",
          },
          width: 1600,
          height: 1000,
        },
      },
      {
        caption: {
          pt: "Calendário editorial com prazos vencidos destacados",
          en: "Editorial calendar with overdue deadlines highlighted",
        },
        media: {
          type: "image",
          src: "",
          alt: {
            pt: "Visão mensal do calendário editorial",
            en: "Monthly view of the editorial calendar",
          },
          width: 1600,
          height: 1000,
        },
      },
      {
        caption: {
          pt: "Dashboard com KPIs, gráfico e progresso de campanhas",
          en: "Dashboard with KPIs, chart and campaign progress",
        },
        media: {
          type: "image",
          src: "",
          alt: {
            pt: "Dashboard do CreatorFlow com indicadores",
            en: "CreatorFlow dashboard with indicators",
          },
          width: 1600,
          height: 1000,
        },
      },
    ],
  },

  {
    slug: "content-automation",
    title: { pt: "Automação de Conteúdo", en: "Content Automation" },
    subtitle: {
      pt: "Bots de scraping e pipelines de mídia com IA",
      en: "Scraping bots and AI-assisted media pipelines",
    },
    year: { pt: "2026", en: "2026" },
    category: ["Automation & AI"],
    role: {
      pt: ["Automação", "Engenharia de pipeline", "Produção com IA"],
      en: ["Automation", "Pipeline engineering", "AI production"],
    },
    technologies: [
      "Python",
      "FFmpeg",
      "ElevenLabs",
      "ChatGPT",
      "DALL·E",
      "ManyChat",
    ],
    cover: {
      type: "image",
      src: "",
      alt: {
        pt: "Diagrama de um pipeline de automação de conteúdo",
        en: "Diagram of a content automation pipeline",
      },
      width: 1600,
      height: 1000,
    },
    featured: false,
    hasCaseStudy: true,
    summary: {
      pt: "Sistemas que assumem o repetitivo: um bot que coleta ofertas, formata e publica sozinho, e uma esteira que transforma roteiro em vídeo com apoio de IA.",
      en: "Systems that take over the repetitive: a bot that collects offers, formats and posts on its own, and a pipeline that turns scripts into video with AI.",
    },
    problem: {
      pt: "Distribuir conteúdo com constância, dezenas de posts e vídeos, é inviável na mão. O gargalo não é a ideia; é a repetição: coletar, formatar, publicar, repetir.",
      en: "Distributing content consistently, dozens of posts and videos, is unfeasible by hand. The bottleneck isn't the idea; it's the repetition: collect, format, publish, repeat.",
    },
    strategy: {
      pt: "Separar o que exige julgamento do que é mecânico e entregar o mecânico a um sistema. Cada etapa repetível vira um passo automatizado, observável e ajustável.",
      en: "Separate what needs judgement from what is mechanical, and hand the mechanical to a system. Every repeatable step becomes an automated, observable, tunable stage.",
    },
    solution: {
      pt: "Dois pipelines. Um bot em Python faz scraping de ofertas, remove duplicadas, formata a mensagem e publica de forma agendada nos canais. Em paralelo, uma esteira de vídeo parte do roteiro, gera narração com IA, monta com FFmpeg e exporta cortes prontos para publicar.",
      en: "Two pipelines. A Python bot scrapes offers, removes duplicates, formats the message and posts to channels on a schedule. In parallel, a video pipeline starts from a script, generates AI narration, assembles with FFmpeg and exports publish-ready cuts.",
    },
    impact: {
      pt: "Um volume que seria impossível manualmente passa a rodar de forma constante, com a pessoa no papel de curadoria e ajuste, não de execução repetida.",
      en: "A volume that would be impossible by hand now runs consistently, with the person curating and tuning, not repeating execution.",
    },
    pipeline: [
      {
        label: { pt: "Coleta", en: "Collect" },
        detail: {
          pt: "Scraping de ofertas e captação de fontes",
          en: "Scraping offers and capturing sources",
        },
      },
      {
        label: { pt: "Tratamento", en: "Process" },
        detail: {
          pt: "Deduplicação, formatação e regras",
          en: "Deduplication, formatting and rules",
        },
      },
      {
        label: { pt: "Geração", en: "Generate" },
        detail: {
          pt: "Mídia e narração assistidas por IA",
          en: "AI-assisted media and narration",
        },
      },
      {
        label: { pt: "Montagem", en: "Assemble" },
        detail: {
          pt: "FFmpeg, cortes e render",
          en: "FFmpeg, cuts and render",
        },
      },
      {
        label: { pt: "Distribuição", en: "Distribute" },
        detail: {
          pt: "Publicação agendada nos canais",
          en: "Scheduled publishing to channels",
        },
      },
    ],
  },

  {
    slug: "corporate-communication",
    title: {
      pt: "Comunicação & Design Corporativo",
      en: "Corporate Communication & Design",
    },
    subtitle: {
      pt: "Projeto corporativo confidencial",
      en: "Confidential corporate project",
    },
    year: { pt: "Em curso", en: "Ongoing" },
    category: ["Brand & Campaign", "Corporate Communication"],
    role: {
      pt: ["Design & layout", "Vídeo & motion", "Comunicação interna"],
      en: ["Design & layout", "Video & motion", "Internal communication"],
    },
    technologies: [
      "PowerPoint",
      "Excel",
      "Photoshop",
      "Illustrator",
      "Premiere",
      "After Effects",
      "Figma",
    ],
    cover: {
      type: "image",
      src: "",
      alt: {
        pt: "Composição visual abstrata representando material corporativo confidencial",
        en: "Abstract visual composition representing confidential corporate material",
      },
      width: 1600,
      height: 1000,
    },
    featured: false,
    confidential: true,
    hasCaseStudy: true,
    summary: {
      pt: "Layout, design, apresentações e vídeo para comunicação corporativa: identidade, campanhas internas e materiais on e offline. Cliente sob confidencialidade; visuais adaptados.",
      en: "Layout, design, presentations and video for corporate communication: identity, internal campaigns and on/offline materials. Client under NDA; visuals adapted.",
    },
    problem: {
      pt: "Comunicar de forma clara e consistente dentro de uma organização, para públicos internos e externos, através de muitos formatos e canais diferentes.",
      en: "Communicating clearly and consistently inside an organization, to internal and external audiences, across many different formats and channels.",
    },
    strategy: {
      pt: "Manter uma linguagem visual coerente entre peças digitais, vídeo e material impresso, de modo que cada entrega reforce a mesma identidade.",
      en: "Keep a coherent visual language across digital pieces, video and print, so every deliverable reinforces the same identity.",
    },
    solution: {
      pt: "Layout e design de materiais de comunicação, edição e motion de vídeos institucionais e peças de campanha on e offline, sempre a partir de um sistema visual comum.",
      en: "Layout and design of communication materials, editing and motion for institutional video, and on/offline campaign pieces, always from a shared visual system.",
    },
    impact: {
      pt: "Comunicação com aparência consistente e profissional entre canais. Nome do cliente, dados e resultados específicos são confidenciais.",
      en: "Communication with a consistent, professional look across channels. Client name, data and specific results are confidential.",
    },
    /** Design pieces (real work), shown as a study case. Portrait items are
     *  detected via width/height and laid out taller. */
    gallery: [
      {
        type: "image",
        src: "/media/corp-emanapay-1.jpg",
        alt: {
          pt: "Adesivagem de parede EmanaPay (Natura Avon)",
          en: "EmanaPay wall graphic (Natura Avon)",
        },
        width: 4032,
        height: 3024,
      },
      {
        type: "image",
        src: "/media/corp-sicoob-banner.png",
        alt: {
          pt: "Banner de campanha Sicoob",
          en: "Sicoob campaign banner",
        },
        width: 2551,
        height: 3402,
      },
      {
        type: "image",
        src: "/media/corp-emanapay-2.jpg",
        alt: {
          pt: "Adesivagem de parede EmanaPay com consultora",
          en: "EmanaPay wall graphic with a consultant",
        },
        width: 4032,
        height: 3024,
      },
    ],
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function caseStudies(): Project[] {
  return projects.filter((p) => p.hasCaseStudy);
}
