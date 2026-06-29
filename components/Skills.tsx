"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { skills } from "@/lib/data";
import ScrollReveal from "./ui/ScrollReveal";

const CENTER_X = 260;
const CENTER_Y = 260;
const INNER_RADIUS = 70;
const CATEGORY_RADIUS = 155;
const ITEM_RADIUS = 240;

function polarToXY(angle: number, radius: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: CENTER_X + radius * Math.cos(rad),
    y: CENTER_Y + radius * Math.sin(rad),
  };
}

export default function Skills() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[#6C63FF] text-sm">02.</span>
            <span className="font-mono text-[#64748B] text-sm">skills</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#E2E8F0] mb-3">
            Tech Stack
          </h2>
          <p className="text-[#64748B] mb-12">Hover a category to expand the technologies.</p>
        </ScrollReveal>

        <div className="flex flex-col xl:flex-row items-center gap-12">
          {/* SVG Skill Wheel */}
          <ScrollReveal className="flex-shrink-0">
            <div className="relative">
              <svg
                viewBox="0 0 520 520"
                width="520"
                height="520"
                className="max-w-[min(520px,90vw)] h-auto"
                aria-label="Interactive skill wheel"
              >
                {/* Background glow */}
                <defs>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#6C63FF" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse cx={CENTER_X} cy={CENTER_Y} rx="200" ry="200" fill="url(#centerGlow)" />

                {/* Connection lines to active items */}
                {skills.map((skill, si) => {
                  const totalCategories = skills.length;
                  const catAngle = (si / totalCategories) * 360;
                  const catPos = polarToXY(catAngle, CATEGORY_RADIUS);

                  return (
                    <g key={`lines-${si}`}>
                      {/* Center → category line */}
                      <motion.line
                        x1={CENTER_X}
                        y1={CENTER_Y}
                        x2={catPos.x}
                        y2={catPos.y}
                        stroke={active === si ? skill.color : "rgba(255,255,255,0.05)"}
                        strokeWidth={active === si ? 1.5 : 0.5}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Category → items lines */}
                      {active === si &&
                        skill.items.map((_, ii) => {
                          const totalItems = skill.items.length;
                          const spread = Math.min(50, 30 + totalItems * 3);
                          const startAngle = catAngle - ((totalItems - 1) / 2) * spread / totalItems;
                          const itemAngle = startAngle + (ii / (totalItems - 1 || 1)) * spread;
                          const itemPos = polarToXY(itemAngle, ITEM_RADIUS);
                          return (
                            <motion.line
                              key={`item-line-${ii}`}
                              x1={catPos.x}
                              y1={catPos.y}
                              x2={itemPos.x}
                              y2={itemPos.y}
                              stroke={skill.color}
                              strokeWidth={0.5}
                              strokeOpacity={0.4}
                              initial={{ pathLength: 0, opacity: 0 }}
                              animate={{ pathLength: 1, opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.25, delay: ii * 0.04 }}
                            />
                          );
                        })}
                    </g>
                  );
                })}

                {/* Center circle */}
                <motion.circle
                  cx={CENTER_X}
                  cy={CENTER_Y}
                  r={INNER_RADIUS}
                  fill="rgba(17,17,24,0.95)"
                  stroke="rgba(108,99,255,0.3)"
                  strokeWidth="1"
                  animate={{ r: active !== null ? 60 : INNER_RADIUS }}
                  transition={{ duration: 0.3 }}
                />
                <text
                  x={CENTER_X}
                  y={CENTER_Y - 6}
                  textAnchor="middle"
                  fill="#A78BFA"
                  fontSize="13"
                  fontFamily="Space Grotesk"
                  fontWeight="600"
                >
                  {active !== null ? skills[active].category : "Skills"}
                </text>
                <text
                  x={CENTER_X}
                  y={CENTER_Y + 10}
                  textAnchor="middle"
                  fill="#64748B"
                  fontSize="9"
                  fontFamily="JetBrains Mono"
                >
                  {active !== null ? `${skills[active].items.length} techs` : "hover to explore"}
                </text>

                {/* Category nodes */}
                {skills.map((skill, si) => {
                  const totalCategories = skills.length;
                  const catAngle = (si / totalCategories) * 360;
                  const catPos = polarToXY(catAngle, CATEGORY_RADIUS);
                  const isActive = active === si;

                  return (
                    <g
                      key={`cat-${si}`}
                      onMouseEnter={() => setActive(si)}
                      onMouseLeave={() => setActive(null)}
                      onTouchStart={() => setActive(isActive ? null : si)}
                      style={{ cursor: "pointer" }}
                    >
                      <motion.circle
                        cx={catPos.x}
                        cy={catPos.y}
                        r="32"
                        fill="rgba(17,17,24,0.9)"
                        stroke={isActive ? skill.color : "rgba(255,255,255,0.08)"}
                        strokeWidth={isActive ? 1.5 : 0.5}
                        animate={{
                          r: isActive ? 36 : 32,
                          filter: isActive ? `drop-shadow(0 0 8px ${skill.color}50)` : "none",
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      <text
                        x={catPos.x}
                        y={catPos.y + 4}
                        textAnchor="middle"
                        fill={isActive ? skill.color : "#94A3B8"}
                        fontSize="9.5"
                        fontFamily="Space Grotesk"
                        fontWeight="600"
                        style={{ pointerEvents: "none" }}
                      >
                        {skill.category}
                      </text>

                      {/* Item nodes */}
                      <AnimatePresence>
                        {isActive &&
                          skill.items.map((item, ii) => {
                            const totalItems = skill.items.length;
                            const spread = Math.min(50, 30 + totalItems * 3);
                            const startAngle =
                              catAngle - ((totalItems - 1) / 2) * spread / totalItems;
                            const itemAngle =
                              startAngle + (ii / (totalItems - 1 || 1)) * spread;
                            const itemPos = polarToXY(itemAngle, ITEM_RADIUS);

                            return (
                              <motion.g
                                key={`item-${ii}`}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.3 }}
                                transition={{ duration: 0.2, delay: ii * 0.04 }}
                              >
                                <circle
                                  cx={itemPos.x}
                                  cy={itemPos.y}
                                  r="26"
                                  fill="rgba(17,17,24,0.95)"
                                  stroke={`${skill.color}40`}
                                  strokeWidth="1"
                                />
                                <text
                                  x={itemPos.x}
                                  y={itemPos.y + 4}
                                  textAnchor="middle"
                                  fill="#E2E8F0"
                                  fontSize={item.length > 8 ? "7.5" : "9"}
                                  fontFamily="JetBrains Mono"
                                  style={{ pointerEvents: "none" }}
                                >
                                  {item}
                                </text>
                              </motion.g>
                            );
                          })}
                      </AnimatePresence>
                    </g>
                  );
                })}
              </svg>
            </div>
          </ScrollReveal>

          {/* Side list: expanded view for active skill on mobile / detail */}
          <div className="flex-1 w-full">
            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skills.map((skill, si) => (
                  <motion.div
                    key={skill.category}
                    onMouseEnter={() => setActive(si)}
                    onMouseLeave={() => setActive(null)}
                    animate={{
                      borderColor: active === si ? `${skill.color}60` : "rgba(255,255,255,0.06)",
                      backgroundColor:
                        active === si ? `${skill.color}08` : "rgba(17,17,24,0.7)",
                    }}
                    className="rounded-xl p-4 border cursor-default transition-all"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: skill.color }}
                      />
                      <span
                        className="font-display font-semibold text-sm"
                        style={{ color: active === si ? skill.color : "#E2E8F0" }}
                      >
                        {skill.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[10px] px-2 py-0.5 rounded-md"
                          style={{
                            background: `${skill.color}12`,
                            color: active === si ? skill.color : "#64748B",
                            border: `1px solid ${skill.color}20`,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
