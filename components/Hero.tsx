"use client";

import { personalInfo } from "@/data/portfolio";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-32">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="wow animate__fadeInUp">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-white mb-6">
                            {personalInfo.title}
                        </h2>
                        <p className="text-lg text-text/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                            {personalInfo.summary}
                        </p>
                        <div className="flex items-center justify-center gap-8 mb-8">
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold gradient-text">{personalInfo.yearsOfExperience}+</span>
                                <span className="text-sm text-text/60">Years<br />Experience</span>
                            </div>
                            <div className="w-px h-12 bg-white/30"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold gradient-text">{personalInfo.age}</span>
                                <span className="text-sm text-text/60">Years<br />Old</span>
                            </div>
                        </div>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Link href="#contact" className="btn-primary">
                                Get In Touch
                            </Link>
                            <Link
                                href="#projects"
                                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-background transition-all duration-300"
                            >
                                View Projects
                            </Link>
                            <a
                                href="/Abdulaziz Resume.pdf"
                                download="Abdulaziz_AlAswdi_Resume.pdf"
                                className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 inline-flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
