"use client";

import { technicalSkills } from "@/data/portfolio";
import { useEffect, useRef } from "react";
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
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Duplicate skills for infinite scroll effect
    const scrollerInner = scroller.querySelector('.scroller-inner');
    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  }, []);

  return (
    <section id="skills" className="">
      <div className="container-custom">
        <h2 className="section-title wow animate__fadeInDown">
          <span className="gradient-text">Skill-Set</span>
        </h2>

        {/* Infinite Scrolling Skills Carousel */}
        <div className="relative overflow-hidden py-8">
          <div ref={scrollerRef} className="scroller">
            <div className="scroller-inner flex gap-6 animate-scroll">
              {technicalSkills.map((skill, index) => {
                const Icon = iconMap[skill.icon];
                return (
                  <div
                    key={`${skill.name}-${index}`}
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
          </div>
        </div>
      </div>

      <style jsx>{`
        .scroller {
          max-width: 100%;
        }

        .scroller-inner {
          padding-block: 1rem;
          display: flex;
          flex-wrap: nowrap;
          gap: 1.5rem;
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .scroller:hover .animate-scroll {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 2));
          }
        }

        .skill-card {
          min-width: 12rem;
        }
      `}</style>
    </section>
  );
}
