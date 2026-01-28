import Navigation from "@/components/Navigation";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="relative">
            <AnimatedBackground />
            <Navigation />
            <Hero />
            <Skills />
            <TechStack />
            <Projects />
            <Education />
            <Contact />
        </main>
    );
}
