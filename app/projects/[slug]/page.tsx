import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolio";
import ProjectDetailClient from "@/components/ProjectDetailClient";

export function generateStaticParams() {
  return portfolioData.en.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.en.projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Abdulaziz AlAswdi`,
      description: project.description,
      url: `/projects/${project.slug}`,
      images: [{ url: project.image, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Abdulaziz AlAswdi`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exists = portfolioData.en.projects.some((p) => p.slug === slug);

  if (!exists) notFound();

  return <ProjectDetailClient slug={slug} />;
}
