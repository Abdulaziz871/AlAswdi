"use client";

import { projects } from "@/data/portfolio";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

type ProjectCategory = "All" | "Front-End" | "Full-Stack" | "Maintenance and quality assurance" | "Power BI";

export default function Projects() {
    const [visibleCount, setVisibleCount] = useState(4);
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

    const showMore = () => {
        setVisibleCount(prev => Math.min(prev + 4, filteredProjects.length));
    };

    // Filter projects based on selected category
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMore = visibleCount < filteredProjects.length;

    const categories: ProjectCategory[] = [
        "All",
        "Front-End",
        "Full-Stack",
        "Maintenance and quality assurance",
        "Power BI"
    ];

    const handleCategoryChange = (category: ProjectCategory) => {
        setSelectedCategory(category);
        setVisibleCount(4); // Reset to show 4 projects when changing category
    };

    return (
        <section id="projects" className="section-padding bg-background">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="section-title wow animate__fadeInDown">
                    Featured <span className="gradient-text">Projects</span>
                </h2>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 wow animate__fadeInUp">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                                ? "bg-white text-black"
                                : "bg-white/10 text-white hover:bg-white/20"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="space-y-8">
                    {visibleProjects.map((project, index) => (
                        <div
                            key={index}
                            className="card group wow animate__fadeInUp"
                            data-wow-delay={`${index * 0.1}s`}
                        >
                            <div className="grid md:grid-cols-2 gap-6 items-center">
                                {/* Project Image */}
                                <div className="relative w-full h-64 md:h-80 bg-hover rounded-lg overflow-hidden border border-white/20">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>

                                {/* Project Info */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-3xl font-bold group-hover:text-white transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs bg-white/10 text-white px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>

                                    <p className="text-text/70 text-base leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-sm bg-white/10 text-white px-4 py-2 rounded-full font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    {project.link && project.link !== "#" && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-semibold text-lg group/link"
                                        >
                                            <span>View Live Project</span>
                                            <FaExternalLinkAlt className="text-base group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More Button */}
                {hasMore && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={showMore}
                            className="btn-primary px-12 py-4 text-lg"
                        >
                            Show More Projects ({filteredProjects.length - visibleCount} remaining)
                        </button>
                    </div>
                )}

                {/* No projects message */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-text/60 text-lg">No projects found in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
