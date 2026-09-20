"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Sparkles, Code2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaGithub, FaFigma } from "react-icons/fa";
import { SiPostman, SiNotion, SiVercel, SiFramer } from "react-icons/si";
import type { IconType } from "react-icons";

export interface TechCategory {
  label: string;
  icon: LucideIcon;
  items: string[];
}

export interface ProjectTechBentoProps {
  categories: TechCategory[];
  typography?: { label: string; font: string };
  speed?: { label: string; loadTime: string };
  mobileReady?: { label: string };
  colors?: { label: string; colors: string[] };
  toolsAndSkills?: { label: string; tools: string[] };
}

// Cycle through the same span pattern used by the bento layout this was
// adapted from: tall-2x2, wide-2x1, tall-2x2, wide-2x1, wide-3x1, wide-3x1.
const SPAN_PATTERN = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2",
  "md:col-span-3",
  "md:col-span-3",
];

const TOOL_ICON_MAP: Record<string, IconType | LucideIcon> = {
  GitHub: FaGithub,
  Figma: FaFigma,
  Postman: SiPostman,
  Notion: SiNotion,
  Vercel: SiVercel,
  Framer: SiFramer,
  "VS Code": Code2,
};

function resolveToolIcon(name: string): IconType | LucideIcon {
  return TOOL_ICON_MAP[name] ?? Sparkles;
}

// Big word that cycles through the category's items, e.g. language names.
function WordCycle({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const interval = setInterval(() => setIndex((prev) => (prev + 1) % items.length), 1800);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="flex items-center justify-center h-full px-4">
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold text-3xl md:text-5xl text-white text-center"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// Reshuffling grid blocks, one per item (capped), lifted from the reference
// "LayoutAnimation" widget.
function BlockShuffle({ count }: { count: number }) {
  const [layout, setLayout] = useState(0);
  const layouts = ["grid-cols-2", "grid-cols-3", "grid-cols-1"];
  const blocks = Array.from({ length: Math.min(Math.max(count, 1), 4) });

  useEffect(() => {
    const interval = setInterval(() => setLayout((prev) => (prev + 1) % layouts.length), 2200);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className={`grid ${layouts[layout]} gap-1.5 w-full max-w-[160px]`}
        layout
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {blocks.map((_, i) => (
          <motion.div
            key={i}
            className="bg-white/20 rounded-md h-6 w-full"
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </motion.div>
    </div>
  );
}

// Concentric pulse rings around the category icon, lifted from the reference
// "GlobalNetwork" widget.
function RadarPulse({ icon: Icon }: { icon: LucideIcon }) {
  const pulses = [0, 1, 2];

  return (
    <div className="flex items-center justify-center h-full relative">
      <Icon className="w-14 h-14 text-white/80 z-10" />
      {pulses.map((pulse) => (
        <motion.div
          key={pulse}
          className="absolute w-14 h-14 border-2 border-white/30 rounded-full"
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: pulse * 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

// Row of dots lighting up one after another, lifted from the reference
// "SecurityBadge" widget.
function SequentialGlow({ icon: Icon, count }: { icon: LucideIcon; count: number }) {
  const size = Math.min(Math.max(count, 2), 4);
  const [dots, setDots] = useState(() =>
    Array.from({ length: size }, (_, i) => ({ id: i, active: false }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        const nextIndex = prev.findIndex((d) => !d.active);
        if (nextIndex === -1) {
          return prev.map((d) => ({ ...d, active: false }));
        }
        return prev.map((d, i) => (i === nextIndex ? { ...d, active: true } : d));
      });
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full gap-3">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className={`w-11 h-11 rounded-lg flex items-center justify-center ${
            dot.active ? "bg-white/20" : "bg-white/5"
          }`}
          animate={{ scale: dot.active ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className={`w-5 h-5 ${dot.active ? "text-white" : "text-white/30"}`} />
        </motion.div>
      ))}
    </div>
  );
}

// Scale-pulsing "Aa" in the project's font, lifted from the reference
// "TypeTester" widget.
function TypeTester({ font }: { font: string }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => setScale((prev) => (prev === 1 ? 1.5 : 1)), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full">
      <motion.span
        style={{ fontFamily: font }}
        className="text-6xl md:text-8xl text-white font-medium"
        animate={{ scale }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        Aa
      </motion.span>
    </div>
  );
}

// Loading skeleton that resolves into the load-time figure, lifted from the
// reference "SpeedIndicator" widget.
function SpeedIndicator({ loadTime }: { loadTime: string }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="h-10 flex items-center justify-center overflow-hidden relative w-full">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              className="h-8 w-24 bg-white/10 rounded"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ) : (
            <motion.span
              key="text"
              initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              className="text-3xl md:text-4xl font-medium text-white"
            >
              {loadTime}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <div className="w-full max-w-[120px] h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white rounded-full"
          initial={{ width: 0 }}
          animate={{ width: loading ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
        />
      </div>
    </div>
  );
}

function MobileWidget() {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Smartphone className="w-16 h-16 text-white" />
      </motion.div>
    </div>
  );
}

function ColorSwatches({ colors }: { colors: string[] }) {
  return (
    <div className="flex items-center justify-center h-full gap-3">
      {colors.map((color, index) => (
        <motion.div
          key={color}
          className="w-12 h-12 rounded-full border border-white/20"
          style={{ backgroundColor: color }}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.12, type: "spring", stiffness: 260, damping: 18 }}
          whileHover={{ scale: 1.15 }}
        />
      ))}
    </div>
  );
}

function ToolIconRow({ tools }: { tools: string[] }) {
  const [dots, setDots] = useState(() => tools.map((_, i) => ({ id: i, active: false })));

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        const nextIndex = prev.findIndex((d) => !d.active);
        if (nextIndex === -1) {
          return prev.map((d) => ({ ...d, active: false }));
        }
        return prev.map((d, i) => (i === nextIndex ? { ...d, active: true } : d));
      });
    }, 700);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-full gap-3">
      {tools.map((tool, i) => {
        const Icon = resolveToolIcon(tool);
        const active = dots[i]?.active;
        return (
          <motion.div
            key={tool}
            className={`w-11 h-11 rounded-lg flex items-center justify-center ${
              active ? "bg-white/20" : "bg-white/5"
            }`}
            animate={{ scale: active ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className={active ? "text-white" : "text-white/30"} size={18} />
          </motion.div>
        );
      })}
    </div>
  );
}

const WIDGETS = [WordCycle, BlockShuffle, RadarPulse, SequentialGlow];

interface Tile {
  key: string;
  label: string;
  icon?: LucideIcon;
  widget: ReactNode;
  tags?: string[];
  isColorTile?: boolean;
}

export default function ProjectTechBento({
  categories,
  typography,
  speed,
  mobileReady,
  colors,
  toolsAndSkills,
}: ProjectTechBentoProps) {
  const populated = categories.filter((category) => category.items.length > 0);

  const tiles: Tile[] = [];

  if (typography) {
    tiles.push({
      key: "typography",
      label: typography.label,
      widget: <TypeTester font={typography.font} />,
      tags: [typography.font],
    });
  }

  if (speed) {
    tiles.push({
      key: "speed",
      label: speed.label,
      widget: <SpeedIndicator loadTime={speed.loadTime} />,
    });
  }

  if (mobileReady) {
    tiles.push({
      key: "mobile",
      label: mobileReady.label,
      widget: <MobileWidget />,
    });
  }

  if (colors && colors.colors.length > 0) {
    tiles.push({
      key: "colors",
      label: colors.label,
      widget: <ColorSwatches colors={colors.colors} />,
      tags: colors.colors,
      isColorTile: true,
    });
  }

  if (toolsAndSkills && toolsAndSkills.tools.length > 0) {
    tiles.push({
      key: "tools-skills",
      label: toolsAndSkills.label,
      widget: <ToolIconRow tools={toolsAndSkills.tools} />,
      tags: toolsAndSkills.tools,
    });
  }

  populated.forEach((category, index) => {
    const Icon = category.icon;
    const Widget = WIDGETS[index % WIDGETS.length];

    tiles.push({
      key: category.label,
      label: category.label,
      icon: Icon,
      tags: category.items,
      widget:
        Widget === WordCycle ? (
          <WordCycle items={category.items} />
        ) : Widget === BlockShuffle ? (
          <BlockShuffle count={category.items.length} />
        ) : Widget === RadarPulse ? (
          <RadarPulse icon={Icon} />
        ) : (
          <SequentialGlow icon={Icon} count={category.items.length} />
        ),
    });
  });

  if (tiles.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(220px,auto)]">
      {tiles.map((tile, index) => (
        <motion.div
          key={tile.key}
          className={`${SPAN_PATTERN[index % SPAN_PATTERN.length]} card flex flex-col overflow-hidden`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex-1 min-h-[96px]">{tile.widget}</div>

          <div className="mt-4 flex items-center gap-2">
            {tile.icon && <tile.icon className="w-5 h-5 text-text" />}
            <h3 className="font-bold text-lg text-text">{tile.label}</h3>
          </div>

          {tile.tags && tile.isColorTile && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tile.tags.map((hex) => (
                <span
                  key={hex}
                  className="inline-flex items-center gap-1.5 text-xs bg-white/10 text-text/80 px-2.5 py-1 rounded-full font-medium"
                >
                  <span
                    className="w-3 h-3 rounded-full border border-white/30"
                    style={{ backgroundColor: hex }}
                  />
                  {hex.toUpperCase()}
                </span>
              ))}
            </div>
          )}

          {tile.tags && !tile.isColorTile && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tile.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/10 text-text/80 px-2.5 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
