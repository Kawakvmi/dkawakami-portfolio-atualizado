/**
 * CV content, tailored to the "Digital Designer & Creative Developer"
 * positioning. Rendered at /cv and exported to /public as a PDF.
 *
 * Privacy: full street address and personal data beyond city/phone/email are
 * intentionally omitted, since /cv and the PDF are public. To include the full
 * address for a specific formal application, add it to `contact.address`.
 */
export const cv = {
  name: "Dereck Biasoli Kawakami",
  title: "Digital Designer & Creative Developer",
  contact: {
    age: "23 anos",
    phone: "(16) 99637-2005",
    email: "dereckkawakami@gmail.com",
    location: "Ribeirão Preto, SP",
    linkedin: "linkedin.com/in/dereck-kawakami-ab08711bb",
    github: "github.com/Kawakvmi",
  },
  objective:
    "Atuar entre design digital, front-end e conteúdo, aplicando tecnologia, automação, IA e UX para potencializar resultados. Uno a experiência como analista conteudista na estruturação de campanhas, treinamentos e comunicação interna à formação em desenvolvimento front-end, entregando projetos funcionais, conectados à experiência do usuário e à performance das equipes.",

  experience: [
    {
      company: "Paschoalotto Serviços Financeiros",
      role: "Analista Conteudista",
      period: "fev/2023, atual",
      bullets: [
        "Desenvolvimento de campanhas motivacionais e comitês de resultados.",
        "Criação de imagens e vídeos corporativos de endomarketing.",
        "Estratégias de marketing interno e externo, com foco em inovação e análise de métricas.",
        "Fortalecimento da cultura organizacional por meio de comunicação e conteúdo.",
      ],
    },
    {
      company: "Lojas Riachuelo",
      role: "Assistente Administrativo",
      period: "mar/2022, fev/2023",
      bullets: [
        "Caixa, controle de cofre e de pontos; processos de admissão e rescisão.",
        "Emissão e baixa de notas fiscais; acompanhamento de entregas via SFTP.",
        "Acompanhamento de dashboards em BI.",
      ],
    },
    {
      company: "Brasil Center",
      role: "Analista de Backoffice",
      period: "nov/2021, mar/2022",
      bullets: ["Rotinas de backoffice e apoio operacional."],
    },
    {
      company: "Lojas Pernambucanas",
      role: "Assessor de Caixa e Gestão E-commerce WhatsApp",
      period: "set/2019, nov/2021",
      bullets: [
        "Atendimento ao cliente e operação de caixa.",
        "Acompanhamento de vendas por regionais e estratégias para alavancar o e-commerce.",
        "Cumprimento de metas diárias de cadastros e produtos.",
      ],
    },
  ],

  education: [
    {
      course: "Desenvolvedor Front-End",
      school: "EBAC, Escola Britânica de Artes Criativas e Tecnologia",
      period: "conclusão prevista 01/2026",
      highlight: true,
      detail:
        "Formação em desenvolvimento de interfaces web: HTML5, CSS3 (Flexbox, Grid, responsivo), JavaScript (ES6+), consumo de APIs REST, Git e GitHub, introdução a React.js, princípios de UX/UI, acessibilidade, performance e Figma.",
    },
    {
      course: "Publicidade e Propaganda",
      school: "UNIP",
      period: "concluído em 2023",
      highlight: false,
    },
    {
      course: "Ensino Médio",
      school: "Colégio Metodista",
      period: "concluído em 2018",
      highlight: false,
    },
  ],

  skillGroups: [
    {
      label: "Front-End",
      items: [
        "HTML5 e semântica",
        "CSS3 (Flexbox, Grid, responsivo)",
        "JavaScript (ES6+)",
        "Introdução a React.js",
        "Git e GitHub",
        "UX/UI, acessibilidade e performance",
      ],
    },
    {
      label: "Design & Vídeo",
      items: ["Photoshop", "Illustrator", "After Effects", "Premiere", "Figma"],
    },
    {
      label: "IA & Conteúdo",
      items: [
        "ChatGPT",
        "Leonardo.AI",
        "MidJourney",
        "Estratégia e planejamento de conteúdo",
        "Copywriting criativo",
        "Análise de métricas de campanhas",
      ],
    },
  ],

  /** `highlight: true` marks the certifications most relevant to this market. */
  certifications: [
    {
      name: "Desenvolvedor Front-End",
      issuer: "EBAC",
      highlight: true,
    },
    {
      name: "Workshop, IA no Audiovisual",
      issuer: "Brainstorm Academy",
      highlight: true,
    },
    {
      name: "Workshop, Conhecimentos em IA",
      issuer: "Paschoalotto",
      highlight: true,
    },
    {
      name: "Dominando o Premiere 2.0",
      issuer: "Brainstorm Academy",
      highlight: false,
    },
    {
      name: "Storytelling para Criadores de Conteúdo",
      issuer: "Brainstorm Academy",
      highlight: false,
    },
    {
      name: "Planejamento de Conteúdo para Mídias Sociais",
      issuer: "Workshop",
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
