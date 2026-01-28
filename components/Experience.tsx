"use client";

import { workExperience } from "@/data/portfolio";
import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";

export default function Experience() {
    return (
        <section id="experience" className="section-padding bg-hover/30">
            <div className="container-custom">
                <h2 className="section-title wow animate__fadeInDown">
                    Work <span className="gradient-text">Experience</span>
                </h2>

                <div className="max-w-4xl mx-auto">
                    {workExperience.map((job, index) => (
                        <div
                            key={index}
                            className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0 wow animate__fadeInLeft"
                            data-wow-delay={`${index * 0.1}s`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                            {/* Content Card */}
                            <div className="card ml-4">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                    <div className="flex items-start gap-3 mb-2 md:mb-0">
                                        <FaBriefcase className="text-2xl text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="text-xl font-bold text-text">{job.company}</h3>
                                            <p className="text-primary font-semibold">{job.role}</p>
                                        </div>
                                    </div>
                                    <span className="text-sm text-text/60 bg-primary/10 px-3 py-1 rounded-full w-fit">
                                        {job.period}
                                    </span>
                                </div>

                                <p className="text-text/80 mb-4">{job.description}</p>

                                {job.achievements && job.achievements.length > 0 && (
                                    <ul className="space-y-2 mb-4">
                                        {job.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-2 text-text/70">
                                                <span className="text-primary mt-1">•</span>
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {job.link && job.link !== "#" && (
                                    <a
                                        href={job.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-primary hover:text-primaryHover transition-colors"
                                    >
                                        <span>View Project</span>
                                        <FaExternalLinkAlt className="text-sm" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
