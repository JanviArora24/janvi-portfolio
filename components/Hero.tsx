"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowDown, FileText, ExternalLink } from "lucide-react";
import ParticleBackground from "./ui/ParticleBackground";
import { personalInfo } from "@/lib/data";
import Image from "next/image";

const ROTATE_INTERVAL = 2800;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % personalInfo.roles.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});

useEffect(() => {
  const move = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", move);

  return () => window.removeEventListener("mousemove", move);
}, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Particle canvas background */}
      <ParticleBackground />

      <motion.div
  className="pointer-events-none absolute inset-0 z-0"
  animate={{
    background: `radial-gradient(500px at ${mousePosition.x}px ${mousePosition.y}px,
      rgba(108,99,255,0.18),
      transparent 70%)`,
  }}
  transition={{
    type: "tween",
    ease: "linear",
    duration: 0.15,
  }}
/>

      {/* Radial glow behind content */}
      <div className="absolute inset-0 bg-glow-violet pointer-events-none" aria-hidden="true" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,99,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left: text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(108,99,255,0.3)] bg-[rgba(108,99,255,0.06)] text-xs text-[#A78BFA] font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C63FF] animate-pulse" />
            Seeking Software Development Opportunities • 2026
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#E2E8F0] leading-[1.05] mb-4"
          >
            {personalInfo.name.split(" ")[0]}{" "}
            <motion.span
className="gradient-text"
animate={{
opacity:[1,0.75,1],
}}
transition={{
repeat:Infinity,
duration:3,
}}
>{personalInfo.name.split(" ")[1]}</motion.span>
          </motion.h1>

          {/* Rotating role */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.35 }}
  className="mb-7"
>
  <p className="text-xl sm:text-2xl font-semibold text-[#A78BFA]">
   Computer Science Student

  </p>

  <p className="mt-2 text-base sm:text-lg text-[#94A3B8]">
    Building Full Stack & AI-Powered Applications
  </p>
</motion.div>

          {/* Bio */}
          <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.45 }}
  className="text-[#94A3B8] text-base sm:text-lg leading-8 max-w-2xl mx-auto lg:mx-0 mb-8"
>
  I'm a Computer Science undergraduate at JIIT Noida who enjoys building
  software that solves practical problems.
  <br />
  <br />
  From full-stack web applications to AI-powered projects, I love learning
  modern technologies and continuously improving my problem-solving and
  development skills.
</motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6C63FF] text-white font-medium text-sm hover:bg-[#7C74FF] transition-all duration-200 shadow-glow-sm hover:shadow-glow-md"
            >
              <>
Explore Projects

<motion.span
animate={{
x:[0,6,0]
}}
transition={{
repeat:Infinity,
duration:1.3
}}
>
→
</motion.span>
</>
            </a>
            <a
              href={personalInfo.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[rgba(108,99,255,0.3)] text-[#A78BFA] font-medium text-sm hover:border-[#6C63FF] hover:bg-[rgba(108,99,255,0.06)] transition-all duration-200"
            >
              <FileText size={15} />
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-[#94A3B8] font-medium text-sm hover:border-white/20 hover:text-[#E2E8F0] hover:bg-white/[0.03] transition-all duration-200"
            >
              <Mail size={15} />
              Contact
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex gap-3 justify-center lg:justify-start"
          >
            {[
              { icon: Github, href: personalInfo.links.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.links.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-xl border border-white/[0.08] flex items-center justify-center text-[#64748B] hover:text-[#A78BFA] hover:border-[rgba(108,99,255,0.3)] hover:bg-[rgba(108,99,255,0.06)] transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-radial from-[rgba(108,99,255,0.2)] to-transparent blur-2xl" />
            
            {/* Photo frame */}
            <div className="group relative w-64 h-64 sm:w-80 sm:h-80 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03]">

  {/* Animated Glow */}
  <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-violet-500/30 via-fuchsia-500/20 to-cyan-500/20 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />

  {/* Gradient Border */}
  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-500 p-[1.5px]">

    <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-[#0b0b14]">
      
      <Image
        src="/myphoto.jpeg"
        alt="Janvi Arora"
        fill
        priority
        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
      />
      
       <motion.div
  className="absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-violet-400/20 to-transparent"
  animate={{
    top: ["-20%", "120%"],
  }}
  transition={{
    duration: 3.5,
    repeat: Infinity,
    ease: "linear",
  }}
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090F]/60 via-transparent to-transparent" />

    </div>

  </div>

</div>

            {/* Floating stat chips */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-6 px-3 py-2 rounded-xl glass border border-[rgba(108,99,255,0.2)] text-sm font-display"
            >
              <span className="text-[#6C63FF] font-bold">400+</span>
              <span className="text-[#64748B] ml-1 text-xs">DSA solved</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-6 px-3 py-2 rounded-xl glass border border-[rgba(108,99,255,0.2)] text-sm font-display"
            >
              <span className="text-[#A78BFA] font-bold">8.79</span>
              <span className="text-[#64748B] ml-1 text-xs">CGPA</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#64748B] text-xs font-mono tracking-widest uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-[#6C63FF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
