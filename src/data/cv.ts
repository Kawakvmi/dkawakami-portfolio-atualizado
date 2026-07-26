/**
 * CV content, tailored to the "Digital Designer & Creative Developer"
 * positioning, focused on design/UX. Rendered at /cv and exported to /public
 * as a PDF.
 *
 * Privacy: full street address and personal data beyond city/phone/email are
 * intentionally omitted, since /cv and the PDF are public. To include the full
 * address for a specific formal application, add it to `contact.address`.
 */
export const cv = {
  name: "Dereck Biasoli Kawakami",
  title: "Digital Designer & Creative Developer",
  contact: {
    age: "25 anos",
    phone: "(16) 98266-2000",
    email: "dereckkawakami@gmail.com",
    location: "Ribeirão Preto, SP",
    linkedin: "linkedin.com/in/dereck-kawakami-ab08711bb",
    github: "github.com/Kawakvmi",
  },
  objective:
    "Designer digital com base em publicidade e especialização em UX/UI e desenvolvimento front-end. Uno design, conteúdo e tecnologia para criar interfaces, campanhas e peças que unem estética, usabilidade e resultado.",

  experience: [
    {
      company: "Paschoalotto Serviços Financeiros",
      role: "Analista Conteudista",
      period: "fev/2023, atual",
      bullets: [
        "Design de campanhas, peças gráficas, brindes e vídeos para comunicação interna e externa.",
        "Direção de arte e layout de materiais on e offline, do digital ao impresso.",
        "Produção de conteúdo com apoio de IA e análise de métricas de desempenho.",
      ],
    },
  ],

  education: [
    {
      course: "Desenvolvedor Front-End",
      school: "EBAC, Escola Britânica de Artes Criativas e Tecnologia",
      period: "concluído em 2026",
      highlight: true,
      detail:
        "HTML5, CSS3 (Flexbox, Grid, responsivo), JavaScript (ES6+), consumo de APIs REST, Git e GitHub, introdução a React.js, princípios de UX/UI, acessibilidade, performance e Figma.",
    },
    {
      course: "Publicidade e Propaganda",
      school: "UNIP",
      period: "concluído em 2023",
      highlight: false,
    },
  ],

  skillGroups: [
    {
      label: "UX/UI & Design",
      items: [
        "Figma",
        "Princípios de UX/UI",
        "Wireframes e protótipos",
        "Acessibilidade e usabilidade",
      ],
    },
    {
      label: "Design gráfico & Vídeo",
      items: ["Photoshop", "Illustrator", "After Effects", "Premiere"],
    },
    {
      label: "Front-End",
      items: [
        "HTML5 e semântica",
        "CSS3 (Flexbox, Grid, responsivo)",
        "JavaScript (ES6+)",
        "Introdução a React.js",
        "Git e GitHub",
      ],
    },
    {
      label: "IA & Conteúdo",
      items: [
        "ChatGPT",
        "Leonardo.AI",
        "MidJourney",
        "Estratégia e planejamento de conteúdo",
        "Copywriting criativo",
      ],
    },
  ],

  /** `highlight: true` marks the courses most relevant to this market. */
  certifications: [
    {
      name: "Workshop, IA no Audiovisual",
      issuer: "Brainstorm Academy",
      highlight: true,
    },
    {
      name: "Storytelling para Criadores de Conteúdo",
      issuer: "Brainstorm Academy",
      highlight: true,
    },
    {
      name: "Planejamento de Conteúdo para Mídias Sociais",
      issuer: "Workshop",
      highlight: false,
    },
    {
      name: "Dominando o Premiere 2.0",
      issuer: "Brainstorm Academy",
      highlight: false,
    },
    {
      name: "Conhecimentos em IA",
      issuer: "Paschoalotto",
      highlight: false,
    },
    {
      name: "GestorFlix, Tráfego Pago para empresas locais",
      issuer: "Pablo Negri",
      highlight: false,
    },
    {
      name: "Internet das Coisas (IoT)",
      issuer: "Santander Academy",
      highlight: false,
    },
  ],
} as const;
