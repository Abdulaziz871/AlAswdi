"use client";

import { getPortfolioContent } from "@/data/portfolio";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
    const { language } = useLanguage();
    const { contact } = getPortfolioContent(language);

    const copy = {
        ar: {
            titleBefore: "",
            titleHighlight: "تواصل",
            titleAfter: " معي",
            intro: "أنا دائماً منفتح لمناقشة المشاريع الجديدة والأفكار الإبداعية وفرص التعاون.",
            info: "معلومات التواصل",
            email: "البريد الإلكتروني",
            phone: "الهاتف",
            portfolio: "معرض الأعمال",
            connect: "تابعني",
            sendMessage: "أرسل رسالة",
            name: "الاسم",
            namePlaceholder: "اسمك",
            emailPlaceholder: "name@example.com",
            message: "الرسالة",
            messagePlaceholder: "اكتب رسالتك...",
            sending: "جارٍ الإرسال...",
            send: "إرسال الرسالة",
            success: "تم إرسال الرسالة بنجاح!",
            rights: "© 2026 عبدالعزيز الأسودي. جميع الحقوق محفوظة.",
            builtWith: "تم التطوير باستخدام Next.js وReact وFramer Motion",
        },
        en: {
            titleBefore: "Get In ",
            titleHighlight: "Touch",
            titleAfter: "",
            intro: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
            info: "Contact Information",
            email: "Email",
            phone: "Phone",
            portfolio: "Portfolio",
            connect: "Connect With Me",
            sendMessage: "Send a Message",
            name: "Name",
            namePlaceholder: "Your name",
            emailPlaceholder: "name@example.com",
            message: "Message",
            messagePlaceholder: "Your message...",
            sending: "Sending...",
            send: "Send Message",
            success: "Message sent successfully!",
            rights: "© 2026 Abdulaziz AlAswdi. All rights reserved.",
            builtWith: "Built with Next.js, React, and Framer Motion",
        },
    }[language];

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus("success");
            setIsSubmitting(false);
            setFormData({ name: "", email: "", message: "" });

            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus("idle"), 3000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="section-padding bg-background">
            <div className="container-custom">
                <h2 className="section-title wow animate__fadeInDown">
                    {copy.titleBefore}<span className="gradient-text">{copy.titleHighlight}</span>{copy.titleAfter}
                </h2>

                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-text/70 text-lg mb-12 wow animate__fadeInUp">
                        {copy.intro}
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold mb-6 wow animate__fadeInLeft">{copy.info}</h3>

                            {/* Email */}
                            <motion.a
                                href={`mailto:${contact.email}`}
                                className="card group flex items-center gap-4 wow animate__fadeInLeft"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="bg-white/10 p-4 rounded-lg group-hover:bg-white/20 transition-colors">
                                    <FaEnvelope className="text-3xl text-text" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">{copy.email}</h4>
                                    <p className="text-text/70 break-all">{contact.email}</p>
                                </div>
                            </motion.a>

                            {/* Phone */}
                            <motion.a
                                href={`tel:${contact.phone}`}
                                className="card group flex items-center gap-4 wow animate__fadeInLeft"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="bg-white/10 p-4 rounded-lg group-hover:bg-white/20 transition-colors">
                                    <FaPhone className="text-3xl text-text" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">{copy.phone}</h4>
                                    <p className="text-text/70">{contact.phone}</p>
                                </div>
                            </motion.a>

                            {/* Portfolio Link */}
                            <motion.a
                                href={contact.portfolioUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card group flex items-center gap-4 wow animate__fadeInLeft"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="bg-white/10 p-4 rounded-lg group-hover:bg-white/20 transition-colors">
                                    <FaGlobe className="text-3xl text-text" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg mb-1">{copy.portfolio}</h4>
                                    <p className="text-text/70">{contact.portfolio}</p>
                                </div>
                            </motion.a>

                            {/* Social Media */}
                            <div className="wow animate__fadeInLeft">
                                <h4 className="text-xl font-semibold mb-4">{copy.connect}</h4>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="bg-hover hover:bg-white/20 p-4 rounded-lg transition-all hover:scale-110"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub className="text-3xl text-text" />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-hover hover:bg-white/20 p-4 rounded-lg transition-all hover:scale-110"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedin className="text-3xl text-text" />
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-hover hover:bg-white/20 p-4 rounded-lg transition-all hover:scale-110"
                                        aria-label="Twitter"
                                    >
                                        <FaTwitter className="text-3xl text-text" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="wow animate__fadeInRight">
                            <h3 className="text-2xl font-bold mb-6">{copy.sendMessage}</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        {copy.name}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-hover border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder={copy.namePlaceholder}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        {copy.email}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-hover border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors"
                                        placeholder={copy.emailPlaceholder}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        {copy.message}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-hover border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors resize-none"
                                        placeholder={copy.messagePlaceholder}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? copy.sending : copy.send}
                                </motion.button>

                                {submitStatus === "success" && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-green-400 text-center"
                                    >
                                        {copy.success}
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-white/20 text-center text-text/60">
                    <p>{copy.rights}</p>
                    <p className="mt-2 text-sm">{copy.builtWith}</p>
                </div>
            </div>
        </section>
    );
}
