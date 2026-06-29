"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { clsx } from "clsx";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  variant = "primary",
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.25);
    y.set((e.clientY - centerY) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantStyles = {
    primary:
      "bg-[#6C63FF] text-white hover:bg-[#7C74FF] shadow-glow-sm hover:shadow-glow-md",
    secondary:
      "border border-[rgba(108,99,255,0.4)] text-[#A78BFA] hover:border-[#6C63FF] hover:bg-[rgba(108,99,255,0.08)]",
    ghost:
      "text-[#94A3B8] hover:text-[#E2E8F0] hover:bg-white/5",
  };

  const sharedStyles = clsx(
    "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm",
    "transition-all duration-200 cursor-pointer select-none",
    variantStyles[variant],
    className
  );

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className={sharedStyles}
        >
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={sharedStyles}>
          {children}
        </button>
      )}
    </motion.div>
  );

  return content;
}
