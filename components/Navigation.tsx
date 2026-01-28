"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ];

    const sections = ["home", "skills", "projects", "education", "contact"];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Detect active section
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-white/5"
                    : "bg-transparent"
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="#home"
                        className="text-2xl font-bold tracking-wider group"
                    >
                        <span className="text-white group-hover:text-gray-300 transition-colors duration-300">
                            ABDULAZIZ
                        </span>
                        <span className="text-white/40 ml-1">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${isActive
                                            ? "text-white"
                                            : "text-white/70 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                    {/* Active indicator */}
                                    <span
                                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${isActive ? "w-8" : "w-0 group-hover:w-8"
                                            }`}
                                    />
                                </Link>
                            );
                        })}

                        {/* CTA Button */}
                        <Link
                            href="#contact"
                            className="ml-4 px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg shadow-white/20 hover:shadow-white/30"
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 space-y-2">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${isActive
                                        ? "bg-white/10 text-white"
                                        : "text-white/70 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 bg-white text-black text-center font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 mt-4"
                    >
                        Let's Talk
                    </Link>
                </div>
            </div>
        </nav>
    );
}
