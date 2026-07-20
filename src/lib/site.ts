/**
 * Canonical site URL. Priority:
 *   1. NEXT_PUBLIC_SITE_URL   — set this when a custom domain is connected.
 *   2. Vercel production URL  — provided automatically on Vercel.
 *   3. localhost              — local development fallback.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

export const siteConfig = {
  name: "Dereck Kawakami",
  title: "Dereck Kawakami — Digital Designer & Creative Developer",
  description:
    "Dereck Kawakami desenha e constrói interfaces, produtos e sistemas de conteúdo — na interseção entre design, front-end, conteúdo e IA aplicada.",
  descriptionEn:
    "Dereck Kawakami designs and builds interfaces, products and content systems — at the intersection of design, front-end, content and applied AI.",
};
