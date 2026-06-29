"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Github, Linkedin, Code2, ExternalLink } from "lucide-react";
import { achievements, codingProfiles } from "@/lib/data";
import ScrollReveal from "./ui/ScrollReveal";
import GlassCard from "./ui/GlassCard";

function AnimatedCounter({
  value,
  suffix,
  isDecimal = false,
}: {
  value: number;
  suffix: string;
  isDecimal?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) =>
    isDecimal ? v.toFixed(2) : Math.round(v).toString()
  );

  useEffect(() => {
    if (isInView) motionVal.set(value);
  }, [isInView, value, motionVal]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-[#6C63FF]">
      <motion.span>{display}</motion.span>
      <span className="text-[#A78BFA]">{suffix}</span>
    </span>
  );
}

const platformIcons: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
};

export default function CodingProfiles() {
  return (
    <section id="profiles" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[#6C63FF] text-sm">05.</span>
            <span className="font-mono text-[#64748B] text-sm">Profiles</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#E2E8F0] mb-12">
              Find Me On
          </h2>
        </ScrollReveal>


        {/* Coding profiles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {codingProfiles.map((profile, i) => {
            const Icon = platformIcons[profile.icon] || Code2;
            return (
              <ScrollReveal key={profile.platform} delay={i * 0.1}>
                <GlassCard glow className="p-5 group">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${profile.color}15` }}
                    >
                      <Icon size={18} style={{ color: profile.color }} />
                    </div>
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64748B] hover:text-[#E2E8F0] transition-colors"
                      aria-label={`Visit ${profile.platform}`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <h4 className="font-display font-semibold text-[#E2E8F0] mb-0.5">
                    {profile.platform}
                  </h4>
                  <p className="font-mono text-xs text-[#64748B] mb-3">@{profile.handle}</p>
                  <div
                    className="inline-block font-mono text-xs px-2 py-1 rounded-md"
                    style={{ background: `${profile.color}10`, color: profile.color }}
                  >
                    {profile.stat}
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
