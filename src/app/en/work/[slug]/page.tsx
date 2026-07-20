import type { Metadata } from "next";
import { CaseView } from "@/components/pages/CaseView";
import { getProject, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title.en,
    description: project.summary.en,
    alternates: {
      canonical: `/en/work/${slug}`,
      languages: { "en-US": `/en/work/${slug}`, "pt-BR": `/work/${slug}` },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <CaseView slug={slug} locale="en" />;
}
