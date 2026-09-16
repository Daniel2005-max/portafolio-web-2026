"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  initialX?: number;
  initialY?: number;
  delay?: number;
  glass?: "light" | "dark";
}

export function FloatingCard({
  children,
  className = "",
  initialX = 0,
  initialY = 20,
  delay = 0.2,
  glass = "light",
}: FloatingCardProps) {
  const glassStyle =
    glass === "light"
      ? "bg-white/80 backdrop-blur-2xl border border-white/60 shadow-2xl text-gray-900"
      : "bg-slate-900/80 backdrop-blur-2xl border border-white/10 shadow-2xl text-white";

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-[2.5rem] p-6 md:p-8 ${glassStyle} ${className}`}
    >
      {children}
    </motion.div>
  );
}
