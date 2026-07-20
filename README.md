# Dereck Kawakami — Portfólio

Portfólio pessoal de **Dereck Kawakami**, _Digital Designer & Creative Developer_.
Dark editorial, bilíngue (PT/EN), construído com Next.js.

**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion (Framer Motion) · deploy na Vercel.

---

## Rodar localmente

Pré-requisitos: **Node.js 20+** e **npm**.

```bash
npm install
npm run dev
```

Abra <http://localhost:3000>. A versão em inglês fica em <http://localhost:3000/en>.

### Scripts

| Comando          | O que faz                               |
| ---------------- | --------------------------------------- |
| `npm run dev`    | Servidor de desenvolvimento (Turbopack) |
| `npm run build`  | Build de produção                       |
| `npm run start`  | Sobe o build de produção                |
| `npm run lint`   | ESLint                                  |
| `npm run format` | Prettier (formata tudo)                 |

Antes de qualquer push: `npm run lint` e `npm run build` devem passar sem erros.

---

## Estrutura

```
src/
  app/                       # Rotas (App Router)
    page.tsx                 # Home PT  (/)
    en/page.tsx              # Home EN  (/en)
    work/[slug]/page.tsx     # Case PT  (/work/creatorflow)
    en/work/[slug]/page.tsx  # Case EN  (/en/work/creatorflow)
    opengraph-image.tsx      # Imagem OG (social) gerada dinamicamente
    icon.svg                 # Favicon (monograma DK)
    sitemap.ts / robots.ts / manifest.ts / not-found.tsx
    layout.tsx / globals.css # Layout raiz + tokens de design
  components/
    layout/                  # Header, Footer, SiteShell, toggle de idioma
    sections/                # Seções da home (Hero, SelectedWork, ...)
    ui/                      # Primitivos (Section, Reveal, ProjectMedia, ...)
    pages/                   # HomeView e CaseView (compõem as rotas)
  data/                      # >>> CONTEÚDO editável (ver abaixo)
  lib/                       # tipos, i18n, fontes, utils, config de site
```

**Conteúdo é separado da UI.** Para editar textos e projetos, mexa apenas em `src/data/` — não é preciso tocar nos componentes.

---

## Como manter o conteúdo

### Adicionar ou editar um projeto

Edite [`src/data/projects.ts`](src/data/projects.ts). Cada projeto segue o tipo `Project`
([`src/lib/types.ts`](src/lib/types.ts)). Campos de texto são **bilíngues** — sempre preencha `pt` e `en`:

```ts
{
  slug: "meu-projeto",              // vira /work/meu-projeto e /en/work/meu-projeto
  title: { pt: "Nome", en: "Name" },
  subtitle: { pt: "...", en: "..." },
  year: { pt: "2025", en: "2025" },
  category: ["Product & Interfaces"], // uma ou mais categorias
  role: { pt: ["..."], en: ["..."] },
  technologies: ["Next.js", "..."],
  cover: { type: "image", src: "", alt: { pt: "...", en: "..." } },
  featured: false,                   // true = card grande na home (destaque)
  hasCaseStudy: true,                // true = gera página /work/[slug]
  summary: { pt: "...", en: "..." },
  // opcionais: problem, strategy, solution, impact, decisions, pipeline, screens, links
}
```

A home mostra automaticamente o projeto `featured` em destaque e os demais em grid.
O sitemap e as rotas de case são gerados a partir dessa lista.

### Trocar uma imagem ou vídeo

As mídias ficam em **`public/`**. Enquanto uma mídia não existe, o campo `src: ""`
renderiza um _placeholder_ elegante identificado (“Material em produção”) — nunca uma imagem falsa.

Para publicar uma mídia real:

1. Coloque o arquivo em `public/media/` (ex.: `public/media/creatorflow-kanban.webp`).
2. No projeto em `projects.ts`, aponte o `src`:

```ts
cover: {
  type: "image",
  src: "/media/creatorflow-kanban.webp",
  alt: { pt: "Descrição", en: "Description" },
  width: 1600, height: 1000,
}
```

**Vídeo do hero do case** (ex.: CreatorFlow): use `type: "video"`, exporte em `.webm`
comprimido, e informe um `poster` (frame estático) para evitar salto de layout:

```ts
cover: {
  type: "video",
  src: "/media/creatorflow.webm",
  poster: "/media/creatorflow-poster.webp",
  alt: { pt: "...", en: "..." },
}
```

O vídeo entra silencioso, em loop, dá play só quando visível e pausa fora da tela.
Com `prefers-reduced-motion` ligado, não dá autoplay e mostra os controles.

### Editar perfil, expertise, contato e navegação

- [`src/data/profile.ts`](src/data/profile.ts) — nome, título, headline, bio, disponibilidade.
- [`src/data/expertise.ts`](src/data/expertise.ts) — os 4 pilares e as etapas do processo.
- [`src/data/social.ts`](src/data/social.ts) — e-mail, LinkedIn, GitHub e o **CV**.
- [`src/data/navigation.ts`](src/data/navigation.ts) — itens do menu.
- Textos de interface (rótulos de seção, botões): [`src/lib/i18n/dictionaries.ts`](src/lib/i18n/dictionaries.ts).

### Foto do perfil (About)

Salve a foto em `public/media/` (ex.: `public/media/dereck.jpg` ou `.webp`) e em
[`src/data/profile.ts`](src/data/profile.ts) troque `photo.src: ""` por
`photo.src: "/media/dereck.jpg"`. Enquanto vazio, mostra um placeholder com o
monograma (nunca imagem quebrada).

### CV (`/cv` + PDF)

O currículo tem uma página web em **`/cv`** e um PDF baixável em
`public/dereck-kawakami-cv.pdf` (é o que o botão “Baixar CV” usa). O conteúdo vem
de [`src/data/cv.ts`](src/data/cv.ts).

Para **atualizar o CV**: edite `src/data/cv.ts` e depois **regenere o PDF** a partir
da página `/cv` (o PDF é um snapshot da página):

1. `npm run dev`
2. Abra `http://localhost:3000/cv` e clique em **Imprimir → Salvar como PDF**
   (papel A4, margens “Nenhuma”, “Gráficos de plano de fundo” ligado), salvando
   por cima de `public/dereck-kawakami-cv.pdf`.

O endereço completo foi omitido por privacidade (a página e o PDF são públicos).
Para adicioná-lo em uma candidatura formal, inclua em `cv.contact`.

---

## Design system

Tokens semânticos em [`src/app/globals.css`](src/app/globals.css) (`--background`, `--foreground`,
`--accent`, etc.), expostos ao Tailwind via `@theme`. Tema **dark editorial** único,
com contraste validado (WCAG AA). Tipografia via `next/font` (self-hosted):

- **Fraunces** (serif variável) — títulos.
- **Inter** — texto e UI.
- **JetBrains Mono** — metadados.

Trocar o accent ou uma fonte é mexer em um só lugar (tokens em `globals.css`, fontes em `src/lib/fonts.ts`).

---

## Deploy na Vercel

O repositório está pronto para a Vercel (detecta Next.js automaticamente).

1. Importe o repositório em <https://vercel.com/new>.
2. `main` → produção; qualquer outra branch → preview automático.
3. Não é preciso configurar nada: sem variáveis de ambiente obrigatórias.

### URL e domínio

A URL base (para SEO, sitemap e OG) é resolvida automaticamente:

1. `NEXT_PUBLIC_SITE_URL` (defina quando tiver **domínio próprio**);
2. URL de produção da Vercel (automática);
3. `localhost` em desenvolvimento.

Ao conectar um domínio, adicione a env var `NEXT_PUBLIC_SITE_URL=https://seudominio.com`
nas configurações do projeto na Vercel e refaça o deploy.

### Analytics (opcional)

Vercel Analytics + Speed Insights não estão incluídos. Se quiser, instale
`@vercel/analytics` e `@vercel/speed-insights` e adicione os componentes no `layout.tsx`.

---

## Convenções de commit

[Conventional Commits](https://www.conventionalcommits.org): `feat:`, `fix:`, `design:`,
`content:`, `refactor:`, `perf:`, `a11y:`, `chore:`, `docs:`. Um commit por unidade lógica.

---

## Materiais pendentes

Itens a substituir quando os arquivos estiverem prontos (hoje em placeholder identificado):

- [x] **Foto do perfil** (`public/media/dereck.png`, ligada no About).
- [x] **Vídeo do CreatorFlow** (`public/media/creatorflow.mp4`, hero do card e do case).
- [x] **CV** especializado em `/cv` + PDF em `public/dereck-kawakami-cv.pdf`.
- [ ] **Screenshots do CreatorFlow** (4 telas: Kanban, Card/Guidebook, Calendário, Dashboard) em `screens` (hoje com ícone placeholder).
- [ ] **Visuais adaptados** do case corporativo (confidencial, sem nome/logo/dados do cliente).
- [ ] Confirmar o **ano** exibido em cada case (`year` em `projects.ts`).
- [ ] Opcional: **poster** do vídeo (`.jpg`) para primeiro frame instantâneo; e comprimir o `.mp4` (hoje ~11 MB).
