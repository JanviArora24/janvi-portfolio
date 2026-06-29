"use client";

import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import ScrollReveal from "./ui/ScrollReveal";

export default function Contact() {
 
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[rgba(108,99,255,0.08)] blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-[#6C63FF] text-sm">06.</span>
            <span className="font-mono text-[#64748B] text-sm">contact</span>
            <div className="flex-1 h-px bg-white/[0.06]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#E2E8F0] mb-3">
            Let&apos;s Talk
          </h2>
          <p className="text-[#64748B] mb-12 max-w-lg">
            I&apos;m actively looking for SDE roles. If you&apos;re hiring or want to
            collaborate on something interesting, reach out.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <ScrollReveal direction="left">
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: MapPin, label: "Location", value: personalInfo.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(108,99,255,0.08)] border border-[rgba(108,99,255,0.15)] flex items-center justify-center text-[#6C63FF] flex-shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-[#64748B] text-xs font-mono">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[#E2E8F0] text-sm hover:text-[#A78BFA] transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[#E2E8F0] text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-2">
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
                    <Icon size={16} />
                  </a>
                ))}
              </div>

              {/* Availability note */}
              <div className="mt-6 p-4 rounded-xl bg-[rgba(52,211,153,0.06)] border border-[rgba(52,211,153,0.15)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                  <span className="text-[#34D399] font-display font-semibold text-sm">
                    Open to Opportunities
                  </span>
                </div>
                <p className="text-[#64748B] text-xs mt-1.5 leading-relaxed">
                  Available for SDE roles. Interested in full-stack, AI/LLM, or backend-heavy positions.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          {/* Contact Card */}
<ScrollReveal direction="right">
  <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col justify-between">

    <div>
      <p className="font-display text-2xl text-[#E2E8F0] font-semibold mb-2">
        Let's Connect
      </p>

      <p className="text-[#64748B] text-sm leading-relaxed mb-8">
        Whether it's an internship, full-time opportunity,
        collaboration, or just a tech conversation —
        I'd love to hear from you.
      </p>

      <div className="space-y-5">

        <a
          href={`mailto:${personalInfo.email}`}
          className="flex items-center justify-between group"
        >
          <div>
            <p className="text-xs font-mono text-[#64748B]">
              Email
            </p>

            <p className="text-[#E2E8F0] group-hover:text-[#A78BFA] transition">
              {personalInfo.email}
            </p>
          </div>

          <ArrowUpRight
            size={18}
            className="text-[#64748B] group-hover:text-[#A78BFA]"
          />
        </a>

        <a
          href={personalInfo.links.linkedin}
          target="_blank"
          className="flex items-center justify-between group"
        >
          <div>
            <p className="text-xs font-mono text-[#64748B]">
              LinkedIn
            </p>

            <p className="text-[#E2E8F0] group-hover:text-[#A78BFA] transition">
              Connect with me
            </p>
          </div>

          <ArrowUpRight
            size={18}
            className="text-[#64748B] group-hover:text-[#A78BFA]"
          />
        </a>

        <a
          href={personalInfo.links.github}
          target="_blank"
          className="flex items-center justify-between group"
        >
          <div>
            <p className="text-xs font-mono text-[#64748B]">
              GitHub
            </p>

            <p className="text-[#E2E8F0] group-hover:text-[#A78BFA] transition">
              Explore my repositories
            </p>
          </div>

          <ArrowUpRight
            size={18}
            className="text-[#64748B] group-hover:text-[#A78BFA]"
          />
        </a>

      </div>
    </div>

    <div className="mt-10 rounded-xl bg-[rgba(108,99,255,0.07)] border border-[rgba(108,99,255,0.15)] p-5">

      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />

        <span className="text-[#34D399] font-semibold">
          Open to Opportunities
        </span>
      </div>

      <ul className="space-y-2 text-sm text-[#94A3B8]">
        <li>✓ Software Development Engineer</li>
        <li>✓ Full Stack Development</li>
        <li>✓ Backend Development</li>
        <li>✓ AI / LLM Engineering</li>
      </ul>

      <a
        href={`mailto:${personalInfo.email}`}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#6C63FF] px-5 py-3 text-white text-sm font-medium hover:bg-[#7C74FF] transition"
      >
        <Mail size={16} />
        Email Me
      </a>

    </div>

  </div>
</ScrollReveal>
        </div>

        {/* Footer */}
        <ScrollReveal>
          <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[#64748B] text-xs">
              © {new Date().getFullYear()} Janvi Arora. Designed & built with love.
            </p>
            <p className="font-mono text-[#64748B] text-xs">
              Noida, India
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
