"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Award } from "lucide-react";
import { experience, education } from "@/lib/data";
import ScrollReveal from "./ui/ScrollReveal";

const timelineItems = [
  ...education.map((e) => ({
    type: "education" as const,
    period: e.period,
    title: e.degree,
    org: e.institution,
    grade: e.grade,
    highlight: e.highlight,
    items: [] as string[],
  })),
  ...experience.map((e) => ({
    type: "experience" as const,
    period: e.period,
    title: e.title,
    org: e.org,
    grade: e.type,
    highlight: true,
    items: e.highlights,
  })),
].sort((a, b) => {
  // Sort by latest first
  const getYear = (p: string) => {
    const match = p.match(/\d{4}/g);
    return match ? parseInt(match[match.length - 1]) : 0;
  };
  return getYear(b.period) - getYear(a.period);
});

const typeConfig = {
  education: { icon: GraduationCap, color: "#60A5FA", label: "Education" },
  experience: { icon: Code2, color: "#A78BFA", label: "Experience" },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[#6C63FF] text-sm">04.</span>
            <span className="font-mono text-[#64748B] text-sm">experience & education</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#E2E8F0] mb-12">
            My Journey
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#6C63FF] via-[rgba(108,99,255,0.3)] to-transparent" />

          <div className="space-y-8 ml-12">
            {timelineItems.map((item, i) => {
              const config = typeConfig[item.type];
              const Icon = config.icon;

              return (
                <ScrollReveal key={`${item.title}-${i}`} delay={i * 0.1} direction="left">
                  <div className="relative">
                    {/* Timeline dot */}
                    <div
                      className="absolute -left-[50px] top-1 w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        background: `${config.color}10`,
                        borderColor: `${config.color}30`,
                      }}
                    >
                      <Icon size={16} style={{ color: config.color }} />
                    </div>

                    {/* Content card */}
                    <div
                      className="rounded-xl p-5 border glass-hover"
                      style={{
                        background: item.highlight
                          ? "rgba(17,17,24,0.9)"
                          : "rgba(17,17,24,0.5)",
                        border: item.highlight
                          ? `1px solid ${config.color}20`
                          : "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-display font-semibold text-[#E2E8F0] text-base">
                            {item.title}
                          </h3>
                          <p className="text-[#64748B] text-sm mt-0.5">{item.org}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="font-mono text-xs text-[#64748B] bg-white/[0.04] px-2 py-0.5 rounded-md">
                            {item.period}
                          </span>
                          {item.grade && (
                            <span
                              className="font-mono text-xs px-2 py-0.5 rounded-md"
                              style={{
                                color: config.color,
                                background: `${config.color}10`,
                              }}
                            >
                              {item.grade}
                            </span>
                          )}
                        </div>
                      </div>

                      {item.items.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {item.items.map((point, pi) => (
                            <li key={pi} className="flex items-start gap-2">
                              <span
                                className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                                style={{ background: config.color }}
                              />
                              <span className="text-[#64748B] text-sm">{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
