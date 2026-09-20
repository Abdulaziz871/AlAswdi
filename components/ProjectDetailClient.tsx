"use client";

import type { ElementType } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Bug,
  CheckCircle2,
  ClipboardList,
  Code,
  Code2,
  Cpu,
  Database,
  Layers,
  Layout,
  Palette,
  Rocket,
  Share2,
  Wrench,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { getPortfolioContent } from "@/data/portfolio";
import Navigation from "@/components/Navigation";
import RadialOrbitalTimeline, {
  type TimelineItem,
} from "@/components/ui/radial-orbital-timeline";
import ProjectTechBento, {
  type TechCategory,
} from "@/components/ui/project-tech-bento";
import { FocusRail, type FocusRailItem } from "@/components/ui/focus-rail";
import { FaGithub } from "react-icons/fa";

// Placeholder images for projects that don't have multiple screenshots yet.
// Swap these out in data/portfolio.ts as real screenshots are added.
const TEST_PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop",
];

const TIMELINE_ICONS: Record<string, ElementType> = {
  ClipboardList,
  Palette,
  Code2,
  Rocket,
  Bug,
  Database,
  CheckCircle2,
  Layers,
  BarChart3,
  Share2,
};

interface ProjectDetailClientProps {
  slug: string;
}

export default function ProjectDetailClient({ slug }: ProjectDetailClientProps) {
  const { language } = useLanguage();
  const { projects } = getPortfolioContent(language);
  const project = projects.find((p) => p.slug === slug);

  const copy = {
    ar: {
      back: "العودة إلى المشاريع",
      timeline: "الجدول الزمني للمشروع",
      techStack: "التقنيات المستخدمة",
      gallery: "صور المشروع",
      github: "عرض على GitHub",
      placeholderCaption: "صورة تجريبية — سيتم استبدالها بلقطة حقيقية",
      viewLive: "زيارة الموقع",
      languages: "لغات البرمجة",
      frameworks: "الأطر والمنصات",
      database: "قواعد البيانات",
      styling: "التصميم",
      tools: "مجالات التركيز",
      techniques: "التقنيات والأساليب",
      typography: "الخط المستخدم",
      speed: "سرعة التحميل",
      mobileReady: "متوافق مع الجوال",
      colorsUsed: "الألوان المستخدمة",
      toolsSkills: "الأدوات والبرامج",
    },
    en: {
      back: "Back to Projects",
      timeline: "Project Timeline",
      techStack: "Tech Stack",
      gallery: "Project Gallery",
      github: "View on GitHub",
      placeholderCaption: "Sample image — will be replaced with a real screenshot",
      viewLive: "Visit Live Site",
      languages: "Languages",
      frameworks: "Frameworks & Platforms",
      database: "Database",
      styling: "Styling",
      tools: "Focus Areas",
      techniques: "Techniques",
      typography: "Typography",
      speed: "Speed (Load Time)",
      mobileReady: "Mobile Ready",
      colorsUsed: "Colors Used",
      toolsSkills: "Tools & Skills",
    },
  }[language];

  if (!project) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen flex items-center justify-center bg-background text-text">
          <Link href="/#projects" className="btn-primary">
            {copy.back}
          </Link>
        </main>
      </>
    );
  }

  const timelineData: TimelineItem[] = project.timeline.map((stage, index) => {
    const id = index + 1;
    const relatedIds = [id - 1, id + 1].filter(
      (relatedId) => relatedId >= 1 && relatedId <= project.timeline.length
    );

    return {
      id,
      title: stage.title,
      date: stage.date,
      content: stage.content,
      category: stage.title,
      icon: TIMELINE_ICONS[stage.icon] ?? Code2,
      relatedIds,
      status: stage.status,
      energy: stage.energy,
    };
  });

  const techCategories: TechCategory[] = [
    { label: copy.languages, icon: Code, items: project.techDetails.languages },
    { label: copy.frameworks, icon: Layout, items: project.techDetails.frameworks },
    { label: copy.database, icon: Database, items: project.techDetails.database },
    { label: copy.styling, icon: Palette, items: project.techDetails.styling },
    { label: copy.tools, icon: Wrench, items: project.techDetails.tools },
    { label: copy.techniques, icon: Cpu, items: project.techDetails.techniques },
  ];

  const galleryItems: FocusRailItem[] = [
    ...project.gallery.map((item, index) => ({
      id: `${project.slug}-${index}`,
      title: project.title,
      description: item.caption,
      imageSrc: item.image,
      meta: project.category,
    })),
    ...TEST_PLACEHOLDER_IMAGES.slice(0, Math.max(0, 4 - project.gallery.length)).map(
      (imageSrc, index) => ({
        id: `${project.slug}-placeholder-${index}`,
        title: project.title,
        description: copy.placeholderCaption,
        imageSrc,
        meta: project.category,
      })
    ),
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-text">
      <div className="container-custom section-padding !pt-32">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-text/70 hover:text-text transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {copy.back}
        </Link>

        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              {project.title}
            </h1>
            <span className="text-xs bg-white/10 text-text px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
          <p className="text-text/70 text-lg max-w-3xl mb-4">
            {project.description}
          </p>
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text font-semibold hover:text-text/70 transition-colors"
            >
              {copy.viewLive} →
            </a>
          )}
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{copy.timeline}</h2>
          <RadialOrbitalTimeline timelineData={timelineData} />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">{copy.techStack}</h2>
          <ProjectTechBento
            categories={techCategories}
            typography={{ label: copy.typography, font: project.techDetails.typography }}
            speed={{ label: copy.speed, loadTime: project.techDetails.loadTime }}
            mobileReady={project.techDetails.mobileReady ? { label: copy.mobileReady } : undefined}
            colors={{ label: copy.colorsUsed, colors: project.techDetails.colors }}
            toolsAndSkills={{ label: copy.toolsSkills, tools: project.techDetails.toolsAndSkills }}
          />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">{copy.gallery}</h2>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-lg border border-white/30 text-text font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
              {copy.github}
            </a>
          )}

          <FocusRail items={galleryItems} />
        </section>
      </div>
      </main>
    </>
  );
}
