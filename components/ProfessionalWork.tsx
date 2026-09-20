"use client";

import { getPortfolioContent } from "@/data/portfolio";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProfessionalWork() {
    const { language } = useLanguage();
    const { projects } = getPortfolioContent(language);
    const professionalProjects = projects.filter((project) => project.workType === "professional");

    const copy = {
        ar: {
            titleBefore: "",
            titleHighlight: "الخبرة العملية",
            titleAfter: "",
            viewProject: "عرض المشروع",
            details: "التفاصيل",
        },
        en: {
            titleBefore: "Professional ",
            titleHighlight: "Work",
            titleAfter: "",
            viewProject: "View Live Project",
            details: "Details",
        },
    }[language];

    if (professionalProjects.length === 0) return null;

    return (
        <section id="professional-work" className="section-padding bg-hover/30">
            <div className="container-custom">
                <h2 className="section-title wow animate__fadeInDown">
                    {copy.titleBefore}<span className="gradient-text">{copy.titleHighlight}</span>{copy.titleAfter}
                </h2>

                <div className="max-w-5xl mx-auto grid gap-8 sm:grid-cols-2">
                    {professionalProjects.map((project, index) => (
                        <div
                            key={project.slug}
                            className="card group overflow-hidden !p-0 flex flex-col wow animate__fadeInUp"
                            data-wow-delay={`${index * 0.1}s`}
                        >
                            {/* Project Image */}
                            <div className="relative w-full h-48 bg-hover overflow-hidden border-b border-white/10">
                                <Image
                                    src={project.image}
                                    alt={project.client ?? project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                                <span className="absolute top-3 right-3 rtl:right-auto rtl:left-3 text-xs font-medium text-text bg-background/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                    {project.duration}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold text-text">{project.client}</h3>
                                <p className="text-primary font-semibold mb-3">{project.role}</p>

                                <p className="text-text/80 mb-4 flex-1">{project.description}</p>

                                <div className="flex flex-wrap items-center gap-6 mt-auto pt-2 border-t border-white/10">
                                    {project.link && project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary hover:text-primaryHover transition-colors"
                                        >
                                            <span>{copy.viewProject}</span>
                                            <FaExternalLinkAlt className="text-sm" />
                                        </a>
                                    )}
                                    <Link
                                        href={`/projects/${project.slug}`}
                                        className="group/details inline-flex items-center gap-2 text-text/70 hover:text-text transition-colors font-medium"
                                    >
                                        {copy.details}
                                        <ArrowRight className="w-4 h-4 group-hover/details:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
