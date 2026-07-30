"use client";

import { getPortfolioContent } from "@/data/portfolio";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { GLSLHills } from "@/components/ui/glsl-hills";

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
};

export default function Hero() {
    const { language } = useLanguage();
    const { personalInfo } = getPortfolioContent(language);

    const copy = {
        ar: {
            intro: "مرحبـــاً، أنا",
            yearsExperience: "سنوات من",
            experience: "الخبــرة",
            yearsAge: "سنة",
            age: "",
            contact: "تواصل معي",
            projects: "عرض المشاريع",
            resume: "تحميل السيرة الذاتية",
        },
        en: {
            intro: "Hi, I'm",
            yearsExperience: "Years",
            experience: "Experience",
            yearsAge: "Years",
            age: "Old",
            contact: "Get In Touch",
            projects: "View Projects",
            resume: "Download Resume",
        },
    }[language];

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
                <GLSLHills width="100%" height="100%" />
            </div>
            <div className="container-custom relative z-10 px-4">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.h1 variants={itemVariants} className="text-[clamp(1.25rem,5.5vw,4.5rem)] font-bold mb-6 whitespace-nowrap">
                        {copy.intro} <span className="gradient-text">{personalInfo.name}</span>
                    </motion.h1>
                    <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-white mb-6">
                        {personalInfo.title}
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg text-text/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                        {personalInfo.summary}
                    </motion.p>
                    <motion.div variants={itemVariants} className="flex items-center justify-center gap-8 mb-8">
                        <div className="flex items-center gap-2">
                            <span className="text-4xl font-bold gradient-text">{personalInfo.yearsOfExperience}+</span>
                            <span className="text-sm text-text/60">{copy.yearsExperience}<br />{copy.experience}</span>
                        </div>
                        <div className="w-px h-12 bg-white/30"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-4xl font-bold gradient-text">{personalInfo.age}</span>
                            <span className="text-sm text-text/60">{copy.yearsAge}<br />{copy.age}</span>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Link href="#contact" className="btn-primary block">
                                {copy.contact}
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Link
                                href="#projects"
                                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-background transition-all duration-300 block"
                            >
                                {copy.projects}
                            </Link>
                        </motion.div>
                        <motion.a
                            href="/Abdulaziz Resume.pdf"
                            download="Abdulaziz_AlAswdi_Resume.pdf"
                            className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 inline-flex items-center gap-2"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            {copy.resume}
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
