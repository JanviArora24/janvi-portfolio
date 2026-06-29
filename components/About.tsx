"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Layers, Zap } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import GlassCard from "./ui/GlassCard";

const pillars = [
  {
    icon: Layers,
    title: "Full Stack Development",
    body: "Building responsive web applications using React, Next.js, FastAPI, Node.js and MongoDB with clean, scalable architecture.",
    color: "#6C63FF",
  },
  {
    icon: Brain,
    title: "AI Projects",
    body: "Exploring practical AI applications using LLM APIs, OCR pipelines, Retrieval-Augmented Generation and intelligent automation.",
    color: "#A78BFA",
  },
  {
    icon: Code2,
    title: "Problem Solving",
    body: "Solved 400+ DSA problems while strengthening algorithms, data structures and system design fundamentals for software engineering.",
    color: "#34D399",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    body: "Always learning new technologies, building projects from scratch and improving through real-world implementation.",
    color: "#FBBF24",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[#6C63FF] text-sm">01.</span>
            <span className="font-mono text-[#64748B] text-sm">about</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#E2E8F0] mb-6">
            Who I Am
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: narrative */}
          <div className="space-y-5">
            <ScrollReveal delay={0.1}>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
I'm a Computer Science undergraduate at
<span className="text-[#E2E8F0]"> JIIT Noida</span>,
graduating in 2027 and actively preparing for Software Development Engineer
roles.

I enjoy building software that combines strong backend engineering,
clean user experiences and practical AI capabilities.
</p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[#94A3B8] leading-relaxed">
Through my projects I've worked with React, Next.js, FastAPI, MongoDB,
Python and modern AI APIs to build applications ranging from full-stack
platforms to intelligent document processing systems.

Every project has helped me understand software architecture,
API design and scalable development practices.
</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-[#94A3B8] leading-relaxed">
Apart from development, I enjoy solving algorithmic problems and learning
core computer science subjects including Operating Systems, DBMS,
Computer Networks and Object-Oriented Programming.

My goal is to become a software engineer who builds products that create
real impact.
</p>
            </ScrollReveal>

            {/* Stat row */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-6 pt-4">
                {[
                 { value: "4+", label: "Projects Built" },
                  { value: "400+", label: "DSA Problems" },
                  { value: "8.79", label: "CGPA" },
                  { value: "2027", label: "Graduation" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-display font-bold text-[#6C63FF]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#64748B] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: pillars */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={0.1 * i} direction="right">
                <GlassCard className="p-5 h-full">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${p.color}15` }}
                  >
                    <p.icon size={18} style={{ color: p.color }} />
                  </div>
                  <h3 className="font-display font-semibold text-[#E2E8F0] text-sm mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">{p.body}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
