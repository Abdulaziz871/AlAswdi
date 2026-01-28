"use client";

import { education, certifications } from "@/data/portfolio";
import { FaGraduationCap, FaCertificate, FaChartBar, FaDatabase } from "react-icons/fa";

const certIconMap: { [key: string]: any } = {
    SiPowerbi: FaChartBar,
    SiPowerautomate: FaDatabase,
};

export default function Education() {
    return (
        <section id="education" className="section-padding bg-hover/30">
            <div className="container-custom">
                <h2 className="section-title wow animate__fadeInDown">
                    Education & <span className="gradient-text">Certifications</span>
                </h2>

                <div className="max-w-4xl mx-auto">
                    {/* Education */}
                    <div className="mb-16 wow animate__fadeInUp">
                        <div className="card">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-4 rounded-lg">
                                    <FaGraduationCap className="text-4xl text-primary" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                                    <p className="text-xl text-primary mb-2">{education.institution}</p>
                                    <div className="flex flex-wrap gap-4 text-text/70">
                                        <span>📍 {education.location}</span>
                                        <span>📅 {education.period}</span>
                                        <span className="font-semibold text-primary">GPA: {education.gpa}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-8 text-center">
                            Certifications & Licenses
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {certifications.map((cert, index) => {
                                const Icon = certIconMap[cert.icon];
                                return (
                                    <div
                                        key={index}
                                        className="card wow animate__zoomIn"
                                        data-wow-delay={`${index * 0.2}s`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="bg-primary/10 p-3 rounded-lg">
                                                {Icon ? (
                                                    <Icon className="text-3xl text-primary" />
                                                ) : (
                                                    <FaCertificate className="text-3xl text-primary" />
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                                                <p className="text-text/70 text-sm mb-1">{cert.issuer}</p>
                                                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                                    {cert.year}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
