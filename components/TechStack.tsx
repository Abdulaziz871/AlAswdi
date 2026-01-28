"use client";

import { FaGitAlt, FaGithub, FaFigma, FaCode } from "react-icons/fa";
import {
    SiVercel, SiRender, SiOpenai,
    SiMongodb, SiGooglegemini
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";

const techStack = [
    { name: "Git", icon: FaGitAlt, category: "Version Control", size: "medium" },
    { name: "GitHub", icon: FaGithub, category: "Version Control", size: "large" },
    { name: "VS Code", icon: FaCode, category: "Development Tools", size: "medium" },
    { name: "Figma", icon: FaFigma, category: "Design Tools", size: "small" },
    { name: "Vercel", icon: SiVercel, category: "Deployment", size: "large" },
    { name: "Sketch AI", icon: BiCodeAlt, category: "AI Tools", size: "medium" },
    { name: "Gemini", icon: SiGooglegemini, category: "AI Tools", size: "medium" },
    { name: "OpenAI", icon: SiOpenai, category: "AI Tools", size: "large" },
    { name: "Render", icon: SiRender, category: "Deployment", size: "medium" },
    { name: "Cursor", icon: BiCodeAlt, category: "Development Tools", size: "medium" },
    { name: "HuggingFace", icon: BiCodeAlt, category: "AI Tools", size: "medium" },
    { name: "RESTful API", icon: BiCodeAlt, category: "Backend", size: "large" },
    { name: "MongoDB", icon: SiMongodb, category: "Database", size: "small" },
    { name: "LLM", icon: BiCodeAlt, category: "AI Tools", size: "small" },
    { name: "Agile", icon: BiCodeAlt, category: "Methodology", size: "medium" },
    { name: "Antigravity", icon: BiCodeAlt, category: "Tools", size: "medium" },
];

export default function TechStack() {
    return (
        <section className="section-padding bg-background">
            <div className="container-custom">
                <h2 className="section-title wow animate__fadeInDown">
                    Tech Stack & <span className="gradient-text">Tools</span>
                </h2>
                <p className="text-center text-text/70 mb-12 text-lg wow animate__fadeInUp">
                    Technologies and tools I use to bring ideas to life
                </p>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[120px]">
                    {techStack.map((tech, index) => {
                        // Define grid span classes based on size
                        const sizeClasses = {
                            small: "col-span-1 row-span-1",
                            medium: "col-span-2 row-span-1 md:col-span-1 md:row-span-2",
                            large: "col-span-2 row-span-2"
                        };

                        const gridClass = sizeClasses[tech.size as keyof typeof sizeClasses];

                        return (
                            <div style={{ backgroundColor: "#000" }}
                                key={index}
                                className={`${gridClass} group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 wow animate__fadeInUp`}
                                data-wow-delay={`${index * 0.05}s`}
                            >
                                {/* Background gradient effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative h-full flex flex-col items-center justify-center p-4 text-center">
                                    <tech.icon
                                        className={`text-white mb-3 transition-transform duration-500 group-hover:scale-110 ${tech.size === 'large' ? 'text-6xl' :
                                            tech.size === 'medium' ? 'text-5xl' :
                                                'text-4xl'
                                            }`}
                                    />
                                    <h3 className={`font-bold text-white ${tech.size === 'large' ? 'text-xl' :
                                        tech.size === 'medium' ? 'text-lg' :
                                            'text-base'
                                        }`}>
                                        {tech.name}
                                    </h3>
                                    <p className={`text-white/60 mt-1 ${tech.size === 'small' ? 'text-xs' : 'text-sm'
                                        }`}>
                                        {tech.category}
                                    </p>
                                </div>

                                {/* Hover shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
