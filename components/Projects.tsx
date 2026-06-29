"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Github,
  ExternalLink,
  ChevronDown,
  Layers,
  Zap,
  Target,
  GitBranch,
} from "lucide-react";
import { projects } from "@/lib/data";
import ScrollReveal from "./ui/ScrollReveal";

// ─── Paper Airplane SVG ───────────────────────────────────────────────────────
function PaperPlane({ color, isOpen }: { color: string; isOpen: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-9 h-9 flex-shrink-0"
      animate={
        isOpen
          ? { x: 5, rotate: -10, scale: 0.85, opacity: 0.6 }
          : { x: 0, rotate: 0, scale: 1, opacity: 1 }
      }
      whileHover={{ x: 4, rotate: -6 }}
      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <polygon
        points="4,24 44,8 32,24 44,40"
        fill={color}
        fillOpacity={0.15}
        stroke={color}
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <polygon points="4,24 44,8 28,28" fill={color} fillOpacity={0.3} />
      <line x1="28" y1="28" x2="32" y2="38" stroke={color} strokeWidth={1.2} strokeLinecap="round" />
      <line x1="4" y1="24" x2="44" y2="8" stroke={color} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
}

// ─── Crease Lines ─────────────────────────────────────────────────────────────
function CreaseLines({ color }: { color: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="60" x2="400" y2="40" stroke={color} strokeWidth={1} opacity={0.07} />
      <line x1="200" y1="0" x2="180" y2="200" stroke={color} strokeWidth={0.8} opacity={0.07} />
      <line x1="0" y1="140" x2="400" y2="160" stroke={color} strokeWidth={0.5} opacity={0.05} />
      <line x1="320" y1="0" x2="350" y2="200" stroke={color} strokeWidth={0.6} opacity={0.04} />
    </svg>
  );
}

// ─── Paper Line Texture ───────────────────────────────────────────────────────
function PaperLines() {
  return (
    <div
      className="absolute inset-0 rounded-xl pointer-events-none"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 22px)",
      }}
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[#6C63FF] text-sm">03.</span>
            <span className="font-mono text-[#64748B] text-sm">projects</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#E2E8F0] mb-3">
            Selected Work
          </h2>
          <p className="text-[#64748B] mb-10">
            Every card opens a complete engineering case study.
          </p>
        </ScrollReveal>

        {/*
          Grid layout:
          - Mobile:  1 column
          - Desktop: 2 columns, but an open card spans both columns (col-span-2)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          {projects.map((project, i) => {
            const isOpen = expanded === project.id;
            return (
              <ScrollReveal
                key={project.id}
                delay={i * 0.08}
                // When open on desktop, take full width
                className={isOpen ? "lg:col-span-2" : ""}
              >
                <motion.div
                  layout
                  className="rounded-2xl overflow-hidden h-full"
                  style={{
                    border: `1px solid ${isOpen ? project.color + "40" : "rgba(255,255,255,0.06)"}`,
                    background: "rgba(17,17,24,0.85)",
                    backdropFilter: "blur(20px)",
                    transition: "border-color 0.3s",
                  }}
                  whileHover={{ borderColor: project.color + "28" }}
                >
                  {/* ── Card header (always visible) ──────────────────── */}
                  <div
                    className="p-5 cursor-pointer select-none"
                    onClick={() => toggle(project.id)}
                  >
                    {/* Top row: plane icon + tag + links + chevron */}
                    <div className="flex items-center gap-3 mb-3">
                      <PaperPlane color={project.color} isOpen={isOpen} />

                      <span
                        className="font-mono text-[10px] px-2 py-0.5 rounded-md border"
                        style={{
                          color: project.color,
                          borderColor: `${project.color}30`,
                          background: `${project.color}10`,
                        }}
                      >
                        {project.tag}
                      </span>

                      <div className="flex-1" />

                      {/* Links — stop propagation so click doesn't toggle card */}
                      <div className="flex gap-1.5" onClick={(e) => e.stopPropagation()}>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#64748B] hover:text-[#E2E8F0] hover:border-white/20 transition-colors"
                            aria-label="GitHub"
                          >
                            <Github size={13} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#64748B] hover:text-[#A78BFA] hover:border-[rgba(108,99,255,0.3)] transition-colors"
                            aria-label="Live Demo"
                          >
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-[#64748B] flex-shrink-0"
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    </div>

                    {/* Title + subtitle */}
                    <h3 className="font-display text-lg font-bold text-[#E2E8F0] mb-0.5 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-[#64748B] text-xs mb-3">{project.subtitle}</p>

                    {/* Description — 2 lines when closed, full when open */}
                    <p
                      className="text-[#94A3B8] text-sm leading-relaxed mb-4 transition-all duration-300"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: isOpen ? "unset" : 2,
                        WebkitBoxOrient: "vertical",
                        overflow: isOpen ? "visible" : "hidden",
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-[#64748B]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact */}
                    <div
                      className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg"
                      style={{ background: `${project.color}10`, color: project.color }}
                    >
                      <Zap size={10} />
                      {project.impact}
                    </div>

                    {/* Bottom hint bar */}
                    <div className="mt-3 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                      <span className="text-[10px] text-[#475569] font-mono">
                        {isOpen ? "↑ fold back" : "↓ unfold case study"}
                      </span>
                      <div className="flex gap-1">
                        {[0, 1, 2].map((d) => (
                          <motion.div
                            key={d}
                            className="w-1 h-1 rounded-full"
                            style={{ background: project.color }}
                            animate={{ opacity: isOpen ? 1 : [0.3, 1, 0.3] }}
                            transition={{
                              duration: 1.5,
                              repeat: isOpen ? 0 : Infinity,
                              delay: d * 0.3,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── Unfolded case study ────────────────────────────── */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="unfolded"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div
                          className="mx-4 mb-5 rounded-xl p-4 relative overflow-hidden"
                          style={{
                            background: `${project.color}06`,
                            border: `1px solid ${project.color}18`,
                          }}
                        >
                          <PaperLines />
                          <CreaseLines color={project.color} />

                          <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            {/* Problem */}
                            <div
                              className="p-4 rounded-xl"
                              style={{
                                background: `${project.color}08`,
                                border: `1px solid ${project.color}18`,
                              }}
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <Target size={12} style={{ color: project.color }} />
                                <span className="font-display font-semibold text-xs text-[#E2E8F0]">
                                  The Problem
                                </span>
                              </div>
                              <p className="text-[#64748B] text-xs leading-relaxed">
                                {project.problem}
                              </p>
                            </div>

                            {/* Architecture */}
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                              <div className="flex items-center gap-2 mb-2">
                                <GitBranch size={12} className="text-[#A78BFA]" />
                                <span className="font-display font-semibold text-xs text-[#E2E8F0]">
                                  Architecture
                                </span>
                              </div>
                              <p className="text-[#64748B] text-xs leading-relaxed">
                                {project.architecture}
                              </p>
                            </div>

                            {/* Features */}
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] sm:col-span-2 lg:col-span-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Layers size={12} className="text-[#34D399]" />
                                <span className="font-display font-semibold text-xs text-[#E2E8F0]">
                                  Key Features
                                </span>
                              </div>
                              <ul className="grid grid-cols-2 gap-1.5">
                                {project.features.map((f, fi) => (
                                  <li key={fi} className="flex items-start gap-1.5">
                                    <span
                                      className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                                      style={{ background: project.color }}
                                    />
                                    <span className="text-[#64748B] text-xs">{f}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}