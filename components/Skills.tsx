"use client";

import { getPortfolioContent } from "@/data/portfolio";
import { useLanguage } from "@/components/LanguageProvider";
import {
  FaHtml5, FaCss3Alt, FaPhp, FaLaravel, FaNodeJs, FaPython,
  FaBootstrap, FaChartBar, FaDatabase, FaRobot, FaFileExcel
} from "react-icons/fa";
import { SiNextdotjs, SiMysql, SiJquery, SiC } from "react-icons/si";

const iconMap: { [key: string]: any } = {
  FaHtml5, FaCss3Alt, FaPhp, FaLaravel, FaNodeJs, FaPython,
  SiNextdotjs, SiMysql, FaBootstrap, SiPowerbi: FaChartBar, SiPowerautomate: FaDatabase,
  SiJquery, SiMicrosoftexcel: FaFileExcel, SiC, FaRobot
};

export default function Skills() {
  const { language } = useLanguage();
  const { technicalSkills } = getPortfolioContent(language);

  return (
    <section id="skills" className="">
      <div className="container-custom">
        <h2 className="section-title wow animate__fadeInDown">
          <span className="gradient-text">{language === "ar" ? "المهارات" : "Skills"}</span>
        </h2>

        {/* Infinite Scrolling Skills Carousel.
            The list is rendered twice and the track slides by exactly one copy (-50%),
            so the loop is seamless. The track is forced LTR so it behaves the same in Arabic. */}
        <div className="relative overflow-hidden py-8" dir="ltr">
          <div className="scroller">
            <div className="scroller-track animate-scroll">
              {[0, 1].map((copyIndex) => (
                <div key={copyIndex} className="scroller-group" aria-hidden={copyIndex === 1}>
                  {technicalSkills.map((skill) => {
                    const Icon = iconMap[skill.icon];
                    return (
                      <div
                        key={skill.name}
                        className="skill-card flex-shrink-0 w-48 card text-center"
                      >
                        <div className="flex flex-col items-center gap-3 py-4">
                          {Icon && <Icon className="text-5xl text-primary" />}
                          <h4 className="font-semibold text-lg">{skill.name}</h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroller {
          max-width: 100%;
        }

        .scroller-track {
          display: flex;
          width: max-content;
          padding-block: 1rem;
        }

        .scroller-group {
          display: flex;
          flex-wrap: nowrap;
          gap: 1.5rem;
          padding-inline-end: 1.5rem;
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .scroller:hover .animate-scroll {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .skill-card {
          min-width: 12rem;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
