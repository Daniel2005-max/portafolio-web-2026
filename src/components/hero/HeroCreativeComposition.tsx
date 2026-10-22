"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface HeroProps {
  onNavigate: (view: any) => void;
}

export function HeroCreativeComposition({ onNavigate }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHoveringP, setIsHoveringP] = useState(false);

  // Smooth physical parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [2, -2]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-3, 3]);
  const planeTranslateX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const planeTranslateY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full rounded-2xl md:rounded-[2.2rem] lg:rounded-[2.5rem] overflow-y-auto md:overflow-hidden hide-scrollbar md:select-none"
      style={{
        backgroundColor: "#F3F4F2",
        backgroundImage: `
          radial-gradient(ellipse 85% 75% at 50% 45%, #FFFFFF 0%, #F5F6F4 60%, #E7EAE6 100%),
          radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.02) 0%, transparent 60%)
        `,
      }}
    >
      {/* ── SUBTLE PAPER GRAIN & FIBER DOT MATRIX (CSS) ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.22]"
        style={{
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, rgba(16, 24, 43, 0.14) 1.1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* ── 3D PARALLAX MASTER STAGE (DESKTOP/TABLET ONLY) ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="hidden md:block relative w-full h-full"
      >
        {/* ════════════════════════════════════════════════════════════════
            1. TOP-LEFT: DISEÑO VISUAL (DESKTOP/TABLET)
            ════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block absolute top-3 sm:top-4 md:top-4 lg:top-5 left-3 sm:left-4 md:left-4 lg:left-6 w-[200px] md:w-[220px] lg:w-[260px] xl:w-[285px] z-30 pointer-events-auto">
          <div
            className="bg-white/95 backdrop-blur-xs shadow-[0_12px_28px_rgba(16,24,43,0.08)] border border-slate-200/90 -rotate-1 p-2.5 sm:p-3 pr-4 sm:pr-5 rounded-xs"
            style={{
              clipPath: `polygon(
                0% 2%, 8% 0%, 18% 3%, 28% 1%, 40% 3%, 52% 0%, 65% 2%, 78% 0%, 88% 3%, 100% 1%,
                99% 30%, 100% 65%, 98% 100%,
                88% 98%, 75% 100%, 60% 98%, 45% 100%, 30% 98%, 15% 100%, 0% 98%,
                1% 65%, 0% 30%
              )`
            }}
          >
            <div className="flex items-center gap-2 whitespace-nowrap">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" className="text-[#10182B] shrink-0">
                <path
                  d="M 3 21 L 8 20 L 20 8 C 21 7 21 5 20 4 C 19 3 17 3 16 4 L 4 16 L 3 21 Z"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M 14 6 L 18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>

              <div>
                <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-tight text-[#10182B] font-handwriting whitespace-nowrap">
                  Diseño Visual
                </h3>
                <svg width="105" height="4" viewBox="0 0 105 4" fill="none" className="-mt-0.5">
                  <path d="M 2 2 Q 52 1, 103 2" stroke="#EAB308" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-[11px] md:text-xs lg:text-[13px] text-slate-600 font-medium leading-relaxed mt-1.5 pl-0.5">
              Identidad de marca, interfaces UI/UX, tiendas e-commerce, material digital y dirección de arte.
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            DOODLE: HAND-DRAWN ROCKET (DESKTOP/TABLET)
            ════════════════════════════════════════════════════════════════ */}
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 1.5, -0.5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          className="hidden md:block absolute top-[48%] md:top-[48%] lg:top-[48%] left-3 md:left-4 lg:left-8 xl:left-12 z-30 pointer-events-auto cursor-pointer select-none"
        >
          <div className="relative flex items-end">
            <svg
              width="120"
              height="85"
              viewBox="0 0 140 100"
              fill="none"
              className="overflow-visible -mr-3 md:-mr-4 -mb-2 md:-mb-3 pointer-events-none opacity-85 shrink-0"
            >
              <path
                d="M 6 88 C 30 92, 54 66, 75 44 C 96 22, 118 30, 112 55 C 106 80, 82 74, 87 52 C 92 32, 116 34, 140 42"
                stroke="#475569"
                strokeWidth="2"
                strokeDasharray="4 4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            <div className="w-[58px] md:w-[68px] lg:w-[80px] xl:w-[92px] select-none filter drop-shadow-[0_8px_18px_rgba(16,24,43,0.12)] shrink-0 rotate-12">
              <svg viewBox="0 0 100 135" fill="none" className="w-full h-auto overflow-visible">
                <path d="M 36 74 C 30 86, 40 96, 44 99 C 48 96, 58 86, 52 74 Z" fill="#FFFFFF" stroke="#10182B" strokeWidth="2.4" strokeLinejoin="round" />
                <path d="M 39 74 C 37 81, 42 88, 44 90 C 46 88, 51 81, 49 74 Z" fill="#FFFFFF" stroke="#10182B" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M 28 48 C 16 53, 10 65, 12 72 C 19 72, 26 66, 26 61 Z" fill="#FFFFFF" stroke="#10182B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 60 48 C 72 53, 78 65, 76 72 C 69 72, 62 66, 62 61 Z" fill="#FFFFFF" stroke="#10182B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 44 8 C 52 17, 60 35, 61 66 C 52 68, 44 68, 44 67 Z" fill="#F8FAFC" stroke="#10182B" strokeWidth="2.4" strokeLinejoin="round" />
                <path d="M 44 8 C 36 17, 28 35, 27 66 C 36 68, 44 68, 44 67 Z" fill="#FFFFFF" stroke="#10182B" strokeWidth="2.4" strokeLinejoin="round" />
                <path d="M 44 8 L 44 67" stroke="#10182B" strokeWidth="2" strokeLinecap="round" />
                <path d="M 44 8 C 39 16, 34 23, 32 28 L 56 28 C 54 23, 49 16, 44 8 Z" fill="#FFFFFF" stroke="#10182B" strokeWidth="2.4" strokeLinejoin="round" />
                <path d="M 44 8 L 44 28" stroke="#10182B" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 34 66 L 54 66 L 51 74 L 37 74 Z" fill="#10182B" stroke="#10182B" strokeWidth="2.2" strokeLinejoin="round" />
                <circle cx="44" cy="44" r="7.5" fill="#FFFFFF" stroke="#10182B" strokeWidth="2.2" />
                <circle cx="44" cy="44" r="5" fill="#F8FAFC" stroke="#10182B" strokeWidth="1.6" />
                <path d="M 41.5 41.5 Q 44 39.5, 46.5 41.5" stroke="#10182B" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M 76 22 L 76 32 M 71 27 L 81 27" stroke="#10182B" strokeWidth="2" strokeLinecap="round" />
                <circle cx="76" cy="27" r="1.3" fill="#10182B" />
                <path d="M 12 30 L 12 38 M 8 34 L 16 34" stroke="#10182B" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════
            4. BOTTOM-LEFT: E-COMMERCE & TECH (DESKTOP/TABLET)
            ════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block absolute bottom-3 sm:bottom-4 md:bottom-4 lg:bottom-5 left-3 sm:left-4 md:left-4 lg:left-6 w-[210px] md:w-[230px] lg:w-[280px] xl:w-[310px] z-30 pointer-events-auto">
          <div
            className="bg-white/95 backdrop-blur-xs shadow-[0_12px_28px_rgba(16,24,43,0.08)] border border-slate-200/90 rotate-1 p-2.5 sm:p-3 pr-4 sm:pr-5 rounded-xs"
            style={{
              clipPath: `polygon(
                0% 1%, 12% 0%, 25% 3%, 38% 0%, 50% 2%, 65% 0%, 78% 3%, 90% 1%, 100% 3%,
                98% 35%, 100% 70%, 99% 100%,
                88% 98%, 75% 100%, 62% 98%, 48% 100%, 35% 98%, 20% 100%, 0% 98%,
                2% 65%, 0% 30%
              )`
            }}
          >
            <div className="flex items-center gap-2 whitespace-nowrap">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" className="text-[#10182B] shrink-0">
                <path d="M 7 8 L 3 12 L 7 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 17 8 L 21 12 L 17 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 14 4 L 10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>

              <div>
                <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-tight text-[#10182B] font-handwriting whitespace-nowrap">
                  E-Commerce & Tech
                </h3>
                <svg width="140" height="4" viewBox="0 0 140 4" fill="none" className="-mt-0.5">
                  <path d="M 2 2 Q 70 1, 138 2" stroke="#EAB308" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-[11px] md:text-xs lg:text-[13px] text-slate-600 font-medium leading-relaxed mt-1.5 pl-0.5">
              Desarrollo en Shopify y WordPress, catálogo optimizado, reducción de fricción y experiencia móvil.
            </p>
          </div>

          <div className="absolute -right-10 md:-right-12 lg:-right-14 bottom-1 sm:bottom-1.5 pointer-events-none z-40 hidden md:block">
            <svg width="44" height="28" viewBox="0 0 46 30" fill="none">
              <path d="M 2 22 C 14 24, 26 18, 38 8" stroke="#10182B" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M 23 7 L 39 8 L 38 23" stroke="#10182B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            5. TOP-RIGHT: ESTRATEGIA & GROWTH (DESKTOP/TABLET)
            ════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block absolute top-3 sm:top-4 md:top-4 lg:top-5 right-3 sm:right-4 md:right-4 lg:right-6 w-[210px] md:w-[230px] lg:w-[280px] xl:w-[315px] z-30 pointer-events-auto">
          <div
            className="bg-white/95 backdrop-blur-xs shadow-[0_12px_28px_rgba(16,24,43,0.08)] border border-slate-200/90 rotate-1 p-2.5 sm:p-3 pr-4 sm:pr-5 rounded-xs text-left"
            style={{
              clipPath: `polygon(
                0% 2%, 12% 0%, 25% 3%, 38% 0%, 50% 2%, 65% 0%, 78% 3%, 90% 1%, 100% 3%,
                98% 35%, 100% 70%, 99% 100%,
                88% 98%, 75% 100%, 62% 98%, 48% 100%, 35% 98%, 20% 100%, 0% 98%,
                2% 65%, 0% 30%
              )`
            }}
          >
            <div className="flex items-center gap-2 whitespace-nowrap">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" className="text-[#10182B] shrink-0">
                <path d="M 3 20 L 21 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M 6 20 L 6 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M 11 20 L 11 11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M 16 20 L 16 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M 4 14 L 10 9 L 15 13 L 20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

              <div>
                <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-tight text-[#10182B] font-handwriting whitespace-nowrap">
                  Estrategia & Growth
                </h3>
                <svg width="145" height="4" viewBox="0 0 145 4" fill="none" className="-mt-0.5">
                  <path d="M 2 2 Q 72 1, 143 2" stroke="#EAB308" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-[11px] md:text-xs lg:text-[13px] text-slate-600 font-medium leading-relaxed mt-1.5 pl-0.5">
              Campañas en Meta y Google Ads, Social media, embudos de venta y automatización CRM.
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            6. RIGHT LATERAL: ECOSISTEMA DIGITAL (DESKTOP/TABLET)
            ════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block absolute top-[24%] sm:top-[26%] md:top-[26%] lg:top-[27%] right-3 sm:right-4 md:right-4 lg:right-7 z-40 pointer-events-none">
          <div className="absolute top-1 sm:top-2 -left-9 md:-left-10 lg:-left-11 pointer-events-none z-50 hidden md:block">
            <svg width="40" height="36" viewBox="0 0 44 40" fill="none">
              <path d="M 6 4 C 8 18, 16 28, 38 28" stroke="#10182B" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M 24 18 L 38 28 L 25 38" stroke="#10182B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <motion.div
            initial={{ rotate: 2 }}
            animate={{ rotate: 2 }}
            whileHover={{ scale: 1.06, rotate: 2, y: -3, zIndex: 45 }}
            className="w-40 md:w-46 lg:w-52 xl:w-56 p-2.5 sm:p-3 md:p-3.5 bg-white text-[#10182B] shadow-[0_12px_26px_rgba(0,0,0,0.14)] border border-slate-300 rounded-xs pointer-events-auto text-left"
            style={{
              backgroundImage: `repeating-linear-gradient(to bottom, transparent 0px, transparent 19px, #E2E8F0 20px)`,
              clipPath: `polygon(
                0% 0%, 100% 0%, 100% 97%,
                95% 100%, 88% 97%, 80% 100%, 72% 98%, 65% 100%, 55% 97%, 45% 100%, 35% 97%, 25% 100%, 15% 98%, 5% 100%, 0% 97%
              )`
            }}
          >
            <div className="absolute -top-2.5 -right-2 w-8 sm:w-9 h-3.5 sm:h-4 bg-[#FEF08A]/90 rotate-12 shadow-xs border border-yellow-300/80" />
            <div className="absolute left-1.5 top-3 bottom-3 flex flex-col justify-between pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#CBD5E1] border border-slate-400" />
              ))}
            </div>
            <div className="pl-3 sm:pl-3.5">
              <h4 className="font-sans font-extrabold text-xs md:text-sm lg:text-[16px] text-[#10182B] mb-1 tracking-tight">
                Ecosistema Digital:
              </h4>
              <ul className="text-[9.5px] md:text-xs lg:text-[13px] font-sans font-bold text-slate-700 space-y-1 leading-tight">
                <li>• UI/UX & Web Design</li>
                <li>• Tiendas Shopify & WP</li>
                <li>• Meta Ads & Tráfico</li>
                <li>• Automatización CRM</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            8. BOTTOM-RIGHT: DANIEL GIRALDO (DESKTOP/TABLET)
            ════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:block absolute bottom-3 sm:bottom-4 md:bottom-4 lg:bottom-5 right-3 sm:right-4 md:right-4 lg:right-6 w-[180px] md:w-[200px] lg:w-[250px] xl:w-[275px] text-right z-30 pointer-events-auto">
          <div className="flex items-center justify-end gap-2 whitespace-nowrap">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" className="text-[#10182B] shrink-0">
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2.2" />
              <path d="M 4 21 C 4 16.5, 7.5 14, 12 14 C 16.5 14, 20 16.5, 20 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>

            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-handwriting font-bold tracking-tight text-[#10182B] whitespace-nowrap">
                Daniel Giraldo
              </h3>
              <svg width="125" height="4" viewBox="0 0 125 4" fill="none" className="-mt-0.5 ml-auto">
                <path d="M 2 2 Q 62 1, 123 2" stroke="#EAB308" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <p className="text-[11px] md:text-xs lg:text-[13px] text-slate-600 font-medium leading-relaxed mt-1.5 pr-0.5">
            Estratega de crecimiento y diseñador visual enfocado en transformar marcas y crear soluciones de alto valor.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            7. THE MONUMENTAL "PORTAFOLIO" HERO COLLAGE (DESKTOP/TABLET ONLY)
            ════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center z-20 pointer-events-none md:-translate-y-4 lg:-translate-y-6 xl:-translate-y-3">
          <div className="relative flex flex-col items-center justify-center">

            {/* ── BASE CANVAS: Large Torn Millimeter Graph Paper Sheet ── */}
            <div
              className="absolute -inset-x-3 xs:-inset-x-4 sm:-inset-x-8 md:-inset-x-12 lg:-inset-x-16 xl:-inset-x-18 -inset-y-3 xs:-inset-y-4 sm:-inset-y-7 md:-inset-y-10 lg:-inset-y-13 xl:-inset-y-16 bg-white shadow-[0_24px_60px_rgba(16,24,43,0.15)] border border-slate-200 -rotate-1 pointer-events-none -z-10"
              style={{
                clipPath: `polygon(
                  0% 3%, 3% 1%, 7% 3%, 12% 0%, 18% 3%, 24% 1%, 31% 3%, 38% 0%, 45% 3%, 52% 1%, 59% 4%, 66% 1%, 73% 3%, 80% 0%, 87% 3%, 93% 1%, 97% 3%, 100% 1%,
                  100% 97%, 97% 99%, 92% 97%, 86% 100%, 79% 97%, 72% 99%, 65% 97%, 58% 100%, 51% 97%, 44% 99%, 37% 97%, 30% 100%, 23% 97%, 16% 99%, 9% 97%, 3% 99%, 0% 98%
                )`,
                backgroundImage: `
                  linear-gradient(to right, rgba(203, 213, 225, 0.65) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(203, 213, 225, 0.65) 1px, transparent 1px)
                `,
                backgroundSize: "16px 16px",
              }}
            >
              {/* Yellow Masking Tape on Graph Paper corners */}
              <div className="absolute -top-2.5 sm:-top-3 left-3 sm:left-6 w-9 sm:w-14 h-3.5 sm:h-5 bg-[#FEF08A]/85 -rotate-12 shadow-xs border border-yellow-300/70" />
              <div className="absolute -bottom-2.5 sm:-bottom-3 right-4 sm:right-8 w-9 sm:w-14 h-3.5 sm:h-5 bg-[#FEF08A]/85 rotate-6 shadow-xs border border-yellow-300/70" />
            </div>

            {/* ── CHARCOAL INK SPLATTERS (SVGs) ── */}
            <div className="absolute -top-5 right-[15%] opacity-60 pointer-events-none hidden sm:block">
              <svg width="45" height="45" viewBox="0 0 50 50" fill="#10182B">
                <circle cx="25" cy="25" r="4" />
                <circle cx="38" cy="14" r="2.2" />
                <circle cx="14" cy="35" r="2.5" />
                <circle cx="40" cy="32" r="1.5" />
              </svg>
            </div>

            {/* ════════════════════════════════════════════════════════════════
                THE MONUMENTAL "PORTAFOLIO" CUTOUT LETTERS
                Row 1: Black P, White O, Black R, Yellow T, White A
                Row 2: White F, Yellow O, White L, Black I, [DG] Badge
                ════════════════════════════════════════════════════════════════ */}
            <div
              className="relative z-20 flex flex-col items-center justify-center pointer-events-auto"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* ── ROW 1: P - O - R - T - A ── */}
              <div className="relative flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2.5 md:gap-3.5 lg:gap-4 xl:gap-5">

                {/* ── DOODLE: Paper Airplane & Trail ── */}
                <motion.div
                  style={{ x: planeTranslateX, y: planeTranslateY }}
                  animate={{ y: [0, -5, 0], rotate: [0, 1.5, -0.5, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 xs:-top-10 sm:-top-13 md:-top-16 lg:-top-19 xl:-top-22 left-0.5 xs:left-1 sm:left-4 md:left-6 z-[70] pointer-events-none select-none"
                >
                  <div className="relative flex items-center">
                    <svg
                      width="120"
                      height="55"
                      viewBox="0 0 150 70"
                      fill="none"
                      className="overflow-visible w-[70px] xs:w-[85px] sm:w-[110px] md:w-[130px] lg:w-[145px] h-auto -mr-2 sm:-mr-3"
                    >
                      <path
                        d="M 10 65 C 24 25, 58 10, 82 32 C 98 48, 80 62, 66 50 C 52 34, 88 18, 142 36"
                        stroke="#475569"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.85"
                      />
                    </svg>

                    <div className="w-[30px] xs:w-[36px] sm:w-[46px] md:w-[56px] lg:w-[68px] xl:w-[76px] select-none filter drop-shadow-[0_4px_10px_rgba(16,24,43,0.14)] -rotate-6">
                      <img
                        src="/assets/airplane_user_exact.png"
                        alt="Avión de papel"
                        className="w-full h-auto object-contain pointer-events-none"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* LETTER 'P' */}
                <div className="relative">
                  {/* Static hand-drawn arrow */}
                  <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-7 -left-[105px] xs:-left-[120px] sm:-left-[144px] md:-left-[168px] lg:-left-[192px] pointer-events-none z-50 hidden sm:block">
                    <svg width="38" height="34" viewBox="0 0 44 40" fill="none">
                      <path d="M 6 4 C 8 18, 16 28, 38 28" stroke="#10182B" strokeWidth="2.6" strokeLinecap="round" />
                      <path d="M 24 18 L 38 28 L 25 38" stroke="#10182B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* 1. LETTER 'P' CARD */}
                  <motion.div
                    initial={{ rotate: -3.5 }}
                    animate={{ rotate: -3.5 }}
                    whileHover={{ scale: 1.1, y: -6, rotate: -3.5, zIndex: 50 }}
                    whileTap={{ scale: 0.96 }}
                    onMouseEnter={() => setIsHoveringP(true)}
                    onMouseLeave={() => setIsHoveringP(false)}
                    transition={{ type: "spring", stiffness: 450, damping: 22 }}
                    style={{ zIndex: isHoveringP ? 50 : 20 }}
                    className="relative w-[42px] xs:w-[48px] sm:w-[68px] md:w-[84px] lg:w-[104px] xl:w-[124px] h-[62px] xs:h-[72px] sm:h-[102px] md:h-[126px] lg:h-[150px] xl:h-[178px] bg-[#10182B] text-white flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.30)] border border-slate-700 cursor-pointer overflow-hidden transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(0,0,0,0.45)] hover:border-slate-500"
                  >
                    <div className="absolute top-0 left-0 w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 bg-slate-800 border-b border-r border-slate-600/70 shadow-xs pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:6px_6px]" />
                    <span className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px] font-black font-sans tracking-tighter select-none drop-shadow-md pt-0.5">
                      P
                    </span>
                  </motion.div>

                  {/* 2. CARD: IDEAS CREATIVAS / IMPACTO REAL */}
                  <motion.div
                    initial={{ rotate: -5 }}
                    animate={{ rotate: -5 }}
                    whileHover={{ scale: 1.08, rotate: -5, y: -4, zIndex: 60 }}
                    style={{ zIndex: isHoveringP ? 10 : 40 }}
                    className="absolute bottom-1 xs:bottom-1.5 sm:bottom-2 md:bottom-3 lg:bottom-4 -left-3 xs:-left-4 sm:-left-[76px] md:-left-[98px] lg:-left-[122px] xl:-left-[138px] w-[74px] xs:w-[84px] sm:w-[120px] md:w-[138px] lg:w-[156px] xl:w-[168px] p-1.5 xs:p-2 sm:p-2.5 md:p-3 bg-[#FDE047] text-[#10182B] shadow-[0_16px_32px_rgba(0,0,0,0.26)] border border-yellow-400/90 rounded-xs pointer-events-auto cursor-grab active:cursor-grabbing text-center transition-all duration-150"
                  >
                    <div className="absolute -top-2 sm:-top-2.5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
                      <div className="w-2.5 xs:w-3 sm:w-3.5 h-2.5 xs:h-3 sm:h-3.5 rounded-full bg-[#10182B] border border-slate-700 shadow-xs flex items-center justify-center">
                        <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-slate-300" />
                      </div>
                    </div>

                    <div className="absolute -top-1.5 sm:-top-2 -right-1 sm:-right-1.5 w-5 xs:w-6 sm:w-7 h-2.5 sm:h-3 bg-[#FEF08A]/90 rotate-12 shadow-xs border border-yellow-300/80 z-20" />

                    <div className="pt-0.5">
                      <p className="font-handwriting font-bold text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl text-[#10182B] leading-tight">
                        Ideas
                      </p>
                      <p className="font-handwriting font-bold text-[11px] xs:text-xs sm:text-base md:text-lg lg:text-xl text-[#10182B] leading-tight -mt-0.5">
                        Creativas
                      </p>
                      <div className="mt-0.5 xs:mt-1 inline-block bg-[#10182B] text-white font-sans font-black text-[7px] xs:text-[7.5px] sm:text-[9px] md:text-[10px] tracking-wider px-1.5 xs:px-2 sm:px-2.5 py-0.5 rounded-xs shadow-xs uppercase">
                        IMPACTO REAL
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* LETTER 'O' */}
                <motion.div
                  initial={{ rotate: 2.5 }}
                  animate={{ rotate: 2.5 }}
                  whileHover={{ scale: 1.1, y: -6, rotate: 2.5, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[42px] xs:w-[48px] sm:w-[68px] md:w-[84px] lg:w-[104px] xl:w-[124px] h-[62px] xs:h-[72px] sm:h-[102px] md:h-[126px] lg:h-[150px] xl:h-[178px] bg-white text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.20)] border border-slate-300 cursor-pointer overflow-hidden z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(16,24,43,0.25)] hover:border-slate-400 group pt-0.5"
                >
                  <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-2.5 xs:w-3 sm:w-3.5 h-2.5 xs:h-3 sm:h-3.5 rounded-full bg-[#10182B] border border-slate-600 shadow-xs flex items-center justify-center pointer-events-none z-20">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-slate-300" />
                  </div>
                  <div className="w-[88%] h-[88%] flex items-center justify-center mt-0.5 pointer-events-none select-none">
                    <img
                      src="/assets/letter_o_character_clean.png"
                      alt="Letra O - Daniel Giraldo"
                      className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.18)] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.div>

                {/* LETTER 'R' */}
                <motion.div
                  initial={{ rotate: -2.5 }}
                  animate={{ rotate: -2.5 }}
                  whileHover={{ scale: 1.1, y: -6, rotate: -2.5, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[42px] xs:w-[48px] sm:w-[68px] md:w-[84px] lg:w-[104px] xl:w-[124px] h-[62px] xs:h-[72px] sm:h-[102px] md:h-[126px] lg:h-[150px] xl:h-[178px] bg-[#10182B] text-white flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.30)] border border-slate-700 cursor-pointer z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(0,0,0,0.45)] hover:border-slate-500 overflow-visible"
                >
                  <div className="absolute -top-2 sm:-top-2.5 left-1/2 -translate-x-1/2 w-2.5 sm:w-3.5 h-4 sm:h-5 rounded-full border-2 border-slate-300 shadow-xs pointer-events-none z-20 flex items-start justify-center pt-0.5">
                    <div className="w-0.5 h-2.5 sm:h-3 rounded-full border border-slate-400" />
                  </div>
                  <span className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px] font-black font-sans tracking-tighter select-none drop-shadow-md pt-0.5">
                    R
                  </span>
                </motion.div>

                {/* LETTER 'T' */}
                <div className="relative">
                  <motion.div
                    style={{ x: planeTranslateX, y: planeTranslateY }}
                    animate={{ y: [0, -5, 0], rotate: [0, 2, -1, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-8 xs:-top-10 sm:-top-13 md:-top-16 lg:-top-19 xl:-top-22 -right-1 sm:-right-2 pointer-events-none z-[70] filter drop-shadow-xs select-none w-[30px] xs:w-[36px] sm:w-[46px] md:w-[56px] lg:w-[68px] xl:w-[76px]"
                  >
                    <img
                      src="/assets/crown_user_exact.png"
                      alt="Corona Dorada"
                      className="w-full h-auto object-contain pointer-events-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ rotate: 3 }}
                    animate={{ rotate: 3 }}
                    whileHover={{ scale: 1.1, y: -6, rotate: 3, zIndex: 60 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 450, damping: 22 }}
                    className="relative w-[48px] xs:w-[54px] sm:w-[74px] md:w-[92px] lg:w-[114px] xl:w-[136px] h-[70px] xs:h-[80px] sm:h-[114px] md:h-[138px] lg:h-[164px] xl:h-[194px] bg-[#F4C400] text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_16px_32px_rgba(0,0,0,0.26)] border border-amber-600/40 cursor-pointer z-10 transition-shadow duration-200 hover:shadow-[0_24px_48px_rgba(244,196,0,0.4)] hover:border-amber-500 overflow-visible"
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 sm:w-8 h-2 sm:h-3.5 bg-white/50 backdrop-blur-[0.5px] border-t border-b border-white/70 -rotate-1 shadow-xs pointer-events-none z-20" />
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:5px_5px] pointer-events-none rounded-xs" />
                    <span className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[116px] font-black font-sans tracking-tighter select-none pt-0.5">
                      T
                    </span>
                  </motion.div>
                </div>

                {/* LETTER 'A' */}
                <motion.div
                  initial={{ rotate: -2 }}
                  animate={{ rotate: -2 }}
                  whileHover={{ scale: 1.1, y: -6, rotate: -2, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[42px] xs:w-[48px] sm:w-[68px] md:w-[84px] lg:w-[104px] xl:w-[124px] h-[62px] xs:h-[72px] sm:h-[102px] md:h-[126px] lg:h-[150px] xl:h-[178px] bg-white text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.20)] border border-slate-300 cursor-pointer overflow-hidden z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(16,24,43,0.25)] hover:border-slate-400"
                >
                  <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2.5 w-2.5 xs:w-3 sm:w-3.5 h-2.5 xs:h-3 sm:h-3.5 rounded-full bg-amber-500 border border-amber-600 shadow-xs flex items-center justify-center pointer-events-none">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-amber-200" />
                  </div>
                  <span className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px] font-black font-sans tracking-tighter select-none pt-0.5">
                    A
                  </span>
                </motion.div>

              </div>

              {/* ── ROW 2: F - O - L - I - [DG] ── */}
              <div
                className="relative flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2.5 md:gap-3.5 lg:gap-4 xl:gap-5 translate-x-0.5 sm:translate-x-1 md:translate-x-1.5 mt-2 xs:mt-2.5 sm:mt-3.5 md:mt-4 lg:mt-5 xl:mt-6"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* ── CARD: IMPACTFUL PHRASE IN A SINGLE LINE ── */}
                <div className="absolute top-[88%] sm:top-[87%] md:top-[88%] left-0 sm:left-1 md:left-2 z-40 pointer-events-none">
                  <motion.div
                    initial={{ rotate: -4.5 }}
                    animate={{ rotate: -4.5 }}
                    whileHover={{ scale: 1.06, rotate: -4.5, y: -3, zIndex: 60 }}
                    className="w-fit max-w-[92vw] px-2 xs:px-2.5 sm:px-4 md:px-5 py-0.5 xs:py-1 sm:py-1.5 md:py-2 bg-white text-[#10182B] shadow-[0_14px_28px_rgba(0,0,0,0.18)] border border-slate-800 rounded-xs pointer-events-auto cursor-default text-center whitespace-nowrap"
                    style={{
                      backgroundImage: `repeating-linear-gradient(to bottom, transparent 0px, transparent 15px, #F1F5F9 16px)`,
                      clipPath: `polygon(
                        0% 4%, 5% 0%, 15% 3%, 25% 0%, 35% 2%, 45% 0%, 55% 3%, 65% 0%, 75% 2%, 85% 0%, 95% 3%, 100% 1%,
                        98% 30%, 100% 60%, 99% 100%,
                        92% 98%, 82% 100%, 72% 97%, 62% 100%, 52% 98%, 42% 100%, 32% 97%, 22% 100%, 12% 98%, 0% 100%,
                        1% 70%, 0% 35%
                      )`
                    }}
                  >
                    <div className="absolute -top-1.5 sm:-top-2 left-2 w-5 sm:w-7 h-2 sm:h-3 bg-[#334155]/90 -rotate-15 shadow-xs border border-slate-600 z-30" />

                    <p className="font-handwriting font-bold text-[9.5px] xs:text-[10.5px] sm:text-xs md:text-sm lg:text-[16px] xl:text-[17px] text-[#10182B] whitespace-nowrap leading-none tracking-tight py-0.5">
                      &ldquo;Diseño que conecta, estrategia que{" "}
                      <span className="relative inline-block">
                        convierte.&rdquo;
                        <svg width="68" height="5" viewBox="0 0 68 5" fill="none" className="absolute -bottom-1 left-0 w-full">
                          <path d="M 2 2.5 Q 34 1, 66 2.5" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </span>
                    </p>
                  </motion.div>
                </div>

                {/* LETTER 'F' */}
                <motion.div
                  initial={{ rotate: 3 }}
                  animate={{ rotate: 3 }}
                  whileHover={{ scale: 1.1, y: -6, rotate: 3, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[42px] xs:w-[48px] sm:w-[68px] md:w-[84px] lg:w-[104px] xl:w-[124px] h-[62px] xs:h-[72px] sm:h-[102px] md:h-[126px] lg:h-[150px] xl:h-[178px] bg-white text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.20)] border border-slate-300 cursor-pointer z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(16,24,43,0.25)] hover:border-slate-400"
                >
                  <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-2.5 xs:w-3 sm:w-3.5 h-2.5 xs:h-3 sm:h-3.5 rounded-full bg-slate-200 border-2 border-slate-400 shadow-inner flex items-center justify-center pointer-events-none">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-slate-400/80" />
                  </div>
                  <span className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px] font-black font-sans tracking-tighter select-none pt-0.5">
                    F
                  </span>
                </motion.div>

                {/* LETTER 'O' */}
                <motion.div
                  initial={{ rotate: -3 }}
                  animate={{ rotate: -3 }}
                  whileHover={{ scale: 1.1, y: -6, rotate: -3, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[42px] xs:w-[48px] sm:w-[68px] md:w-[84px] lg:w-[104px] xl:w-[124px] h-[62px] xs:h-[72px] sm:h-[102px] md:h-[126px] lg:h-[150px] xl:h-[178px] bg-[#F4C400] text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.24)] border border-amber-600/40 cursor-pointer z-10 transition-shadow duration-200 hover:shadow-[0_24px_48px_rgba(244,196,0,0.4)] hover:border-amber-500 overflow-visible"
                >
                  <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 w-3.5 sm:w-5 h-1.5 bg-slate-600 rounded-full shadow-xs pointer-events-none z-20 border-t border-slate-400" />
                  <span className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px] font-black font-sans tracking-tighter select-none pt-0.5">
                    O
                  </span>
                </motion.div>

                {/* LETTER 'L' */}
                <motion.div
                  initial={{ rotate: 2.5 }}
                  animate={{ rotate: 2.5 }}
                  whileHover={{ scale: 1.1, y: -6, rotate: 2.5, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[42px] xs:w-[48px] sm:w-[68px] md:w-[84px] lg:w-[104px] xl:w-[124px] h-[62px] xs:h-[72px] sm:h-[102px] md:h-[126px] lg:h-[150px] xl:h-[178px] bg-white text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.20)] border border-slate-300 cursor-pointer z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(16,24,43,0.25)] hover:border-slate-400"
                >
                  <div className="absolute top-1.5 sm:top-2 left-1.5 sm:left-2 w-1.5 sm:w-2 h-1.5 sm:h-2 border-t border-l border-slate-400 pointer-events-none opacity-60" />
                  <span className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px] font-black font-sans tracking-tighter select-none pt-0.5">
                    L
                  </span>
                </motion.div>

                {/* LETTER 'I' */}
                <motion.div
                  initial={{ rotate: -2 }}
                  animate={{ rotate: -2 }}
                  whileHover={{ scale: 1.1, y: -6, rotate: -2, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[30px] xs:w-[36px] sm:w-[50px] md:w-[62px] lg:w-[76px] xl:w-[88px] h-[62px] xs:h-[72px] sm:h-[102px] md:h-[126px] lg:h-[150px] xl:h-[178px] bg-[#10182B] text-white flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.30)] border border-slate-700 cursor-pointer z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(0,0,0,0.45)] hover:border-slate-500"
                >
                  <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-slate-300 border border-slate-400 shadow-xs flex items-center justify-center pointer-events-none">
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </div>
                  <span className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[104px] font-black font-sans tracking-tighter select-none drop-shadow-md pt-0.5">
                    I
                  </span>
                </motion.div>

                {/* LETTER 'O' / MONOGRAM BADGE '[DG]' */}
                <div className="relative">
                  <motion.div
                    initial={{ rotate: 2.5 }}
                    animate={{ rotate: 2.5 }}
                    whileHover={{ scale: 1.1, y: -6, rotate: 2.5, zIndex: 60 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 450, damping: 22 }}
                    className="relative w-[42px] xs:w-[48px] sm:w-[68px] md:w-[84px] lg:w-[104px] xl:w-[124px] h-[62px] xs:h-[72px] sm:h-[102px] md:h-[126px] lg:h-[150px] xl:h-[178px] bg-white text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.22)] border border-slate-300 cursor-pointer overflow-hidden z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(16,24,43,0.25)] hover:border-slate-400 group"
                  >
                    <div className="absolute -top-1.5 sm:-top-2 -right-1.5 sm:-right-2 w-5 sm:w-7 h-2.5 sm:h-3.5 bg-[#FEF08A]/90 rotate-45 shadow-xs border border-yellow-300/80 z-20" />
                    <div className="w-[88%] h-[88%] flex items-center justify-center pointer-events-none select-none">
                      <img
                        src="/assets/letter_o_dg_clean.png"
                        alt="O - DG Daniel Giraldo"
                        className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.14)] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>

                  {/* Static hand-drawn arrow */}
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 xl:bottom-6 -right-[90px] xs:-right-[100px] sm:-right-[128px] md:-right-[142px] lg:-right-[156px] xl:-right-[170px] pointer-events-none z-50 hidden sm:block">
                    <svg width="36" height="30" viewBox="0 0 44 38" fill="none">
                      <path d="M 38 34 C 34 20, 24 14, 10 10" stroke="#10182B" strokeWidth="2.6" strokeLinecap="round" />
                      <path d="M 22 7 L 8 10 L 12 24" stroke="#10182B" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* CARD: CONVIRTIENDO IDEAS EN RESULTADOS */}
                  <motion.div
                    initial={{ rotate: -4.5 }}
                    animate={{ rotate: -4.5 }}
                    whileHover={{ scale: 1.08, rotate: -4.5, y: -4, zIndex: 60 }}
                    className="absolute top-0 xs:top-0.5 sm:top-1 md:top-2 -right-[38px] xs:-right-[46px] sm:-right-[90px] md:-right-[104px] lg:-right-[118px] xl:-right-[132px] z-40 w-[62px] xs:w-[70px] sm:w-[94px] md:w-[110px] lg:w-[126px] xl:w-[140px] p-1 xs:p-1.5 sm:p-2 md:p-2.5 lg:p-3 bg-[#FDE047] text-[#10182B] shadow-[0_16px_32px_rgba(0,0,0,0.22)] border border-yellow-400/90 rounded-xs pointer-events-auto cursor-grab active:cursor-grabbing text-center"
                  >
                    <div className="absolute -top-1.5 sm:-top-2 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
                      <div className="w-2 xs:w-2.5 sm:w-3 h-2 xs:h-2.5 sm:h-3 rounded-full bg-[#10182B] border border-slate-700 shadow-xs flex items-center justify-center">
                        <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-slate-300" />
                      </div>
                    </div>

                    <div className="absolute -top-1 sm:-top-1.5 -left-1 w-4 xs:w-5 sm:w-6 h-2 sm:h-2.5 bg-[#FEF08A]/90 -rotate-30 shadow-xs border border-yellow-300/80 z-20" />

                    <div className="pt-0.5">
                      <div className="flex justify-center mb-0.5">
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M 12 1 L 12 3" stroke="#10182B" strokeWidth="2" strokeLinecap="round" />
                          <path d="M 4 5 L 6 7" stroke="#10182B" strokeWidth="2" strokeLinecap="round" />
                          <path d="M 20 5 L 18 7" stroke="#10182B" strokeWidth="2" strokeLinecap="round" />
                          <path
                            d="M 9 18 C 6 15, 6 9, 12 6 C 18 9, 18 15, 15 18 Z"
                            stroke="#10182B"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            fill="#FEF08A"
                          />
                          <path d="M 10 18 L 14 18" stroke="#10182B" strokeWidth="2.2" />
                          <path d="M 10.5 21 L 13.5 21" stroke="#10182B" strokeWidth="2.2" strokeLinecap="round" />
                        </svg>
                      </div>

                      <p className="font-handwriting text-[9px] xs:text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px] font-bold leading-tight text-[#10182B]">
                        Convirtiendo ideas <br />
                        <span className="text-[7px] xs:text-[7.5px] sm:text-[8.5px] md:text-[9.5px] text-slate-700 font-sans italic">en</span>
                      </p>

                      <div className="mt-0.5">
                        <span className="font-sans font-black text-[7px] xs:text-[7.5px] sm:text-[9px] md:text-[10px] lg:text-[11.5px] tracking-wider uppercase text-[#10182B] block">
                          RESULTADOS.
                        </span>
                        <svg width="46" height="3" viewBox="0 0 72 4" fill="none" className="mx-auto mt-0.5 w-[36px] sm:w-[44px] md:w-[50px]">
                          <path d="M 2 2 Q 36 1, 70 2" stroke="#10182B" strokeWidth="2.2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    <div className="absolute top-[28%] -right-2.5 sm:-right-3 pointer-events-none opacity-80 hidden sm:block">
                      <svg className="w-2.5 h-3.5 sm:w-3 sm:h-4" viewBox="0 0 18 24" fill="none">
                        <path d="M 2 4 L 14 2" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
                        <path d="M 2 12 L 16 12" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
                        <path d="M 2 20 L 12 22" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            9. THE 3 BOTTOM NAVIGATION BUTTONS (DESKTOP/TABLET ONLY)
            ════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:flex absolute bottom-3 lg:bottom-4 xl:bottom-5 inset-x-0 items-center justify-center gap-3 z-30 px-2 pointer-events-auto">
          {/* Button 1: Servicios */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate("services")}
            className="px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-50 text-[#10182B] text-xs sm:text-sm md:text-[15px] font-bold shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-slate-200/90 flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] group-hover:scale-125 transition-transform shrink-0" />
            <span>Servicios</span>
            <ArrowUpRight size={15} className="text-slate-500 group-hover:text-[#2563EB] transition-colors shrink-0" />
          </motion.button>

          {/* Button 2: Sobre Daniel */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate("about")}
            className="px-5 xs:px-6 sm:px-7 py-2 xs:py-2.5 sm:py-3 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white text-xs sm:text-sm md:text-[15px] font-bold shadow-[0_8px_20px_rgba(37,99,235,0.32)] border border-blue-500 flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer"
          >
            <span>Sobre Daniel</span>
            <ArrowUpRight size={15} className="shrink-0" />
          </motion.button>

          {/* Button 3: Casos de Éxito */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate("projects")}
            className="px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full bg-[#F4C400] hover:bg-yellow-400 text-[#10182B] text-xs sm:text-sm md:text-[15px] font-black shadow-[0_8px_20px_rgba(244,196,0,0.32)] border border-yellow-400 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Sparkles size={14} className="fill-[#10182B] shrink-0" />
            <span>Casos de Éxito</span>
          </motion.button>
        </div>
      </motion.div>

      {/* ════════════════════════════════════════════════════════════════
          10. MOBILE-DEDICATED EDITORIAL CREATIVE HERO (EXCLUSIVE FOR SMARTPHONES)
          ════════════════════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col w-full min-h-full h-auto overflow-y-auto overflow-x-hidden px-3 pt-2 pb-28 z-30 pointer-events-auto space-y-3.5 shrink-0">
          
          {/* ── A. THE MONUMENTAL MOBILE EDITORIAL CANVAS ── */}
          <div className="relative w-full shrink-0 bg-white shadow-[0_16px_36px_rgba(16,24,43,0.12)] border border-slate-200/90 rounded-2xl overflow-hidden">
            {/* Visual Centerpiece: Fully Digitized HTML & SVG Canvas (Loads Instantly, Infinite Sharpness) */}
            <div className="relative w-full overflow-hidden bg-[#FCFBF8] select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 435 310"
                className="w-full h-auto block select-none pointer-events-none"
              >
                <defs>
                  {/* Paper Grid Pattern */}
                  <pattern id="mobileHeroGrid" width="22" height="22" patternUnits="userSpaceOnUse">
                    <path d="M 22 0 L 0 0 0 22" fill="none" stroke="rgba(203, 213, 225, 0.45)" strokeWidth="1" />
                  </pattern>
                  {/* Post-it Drop Shadow */}
                  <filter id="postitShadow" x="-10%" y="-10%" width="130%" height="130%">
                    <feDropShadow dx="0" dy="7" stdDeviation="5" floodColor="#D97706" floodOpacity="0.25" />
                  </filter>
                </defs>

                {/* Background & Grid */}
                <rect width="435" height="310" fill="#FCFBF8" />
                <rect width="435" height="310" fill="url(#mobileHeroGrid)" />

                {/* ── 1. MAIN HEADLINE (Rotated -14° to match original sketch flow) ── */}
                <g transform="translate(44, 72) rotate(-14)">
                  {/* Yellow radiant rays for "Ideas" */}
                  <path d="M -8 -20 L -18 -26" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 0 -26 L -3 -36" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
                  <text
                    x="0"
                    y="0"
                    fontFamily="CaveatLocal, Caveat, cursive"
                    fontWeight="900"
                    fontSize="53"
                    fill="#10182B"
                    letterSpacing="-1"
                  >
                    Ideas
                  </text>

                  {/* Yellow accent rays for "que se" */}
                  <path d="M -12 28 L -24 26" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
                  <path d="M -10 40 L -22 46" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
                  <text
                    x="4"
                    y="42"
                    fontFamily="CaveatLocal, Caveat, cursive"
                    fontWeight="800"
                    fontSize="45"
                    fill="#10182B"
                    letterSpacing="-1"
                  >
                    que se
                  </text>

                  <text
                    x="6"
                    y="80"
                    fontFamily="CaveatLocal, Caveat, cursive"
                    fontWeight="800"
                    fontSize="40"
                    fill="#10182B"
                    letterSpacing="-0.5"
                  >
                    convierten en
                  </text>

                  {/* "resultados" + Yellow Brush Highlighter Underline */}
                  <text
                    x="6"
                    y="122"
                    fontFamily="CaveatLocal, Caveat, cursive"
                    fontWeight="900"
                    fontSize="47"
                    fill="#10182B"
                    letterSpacing="-1"
                  >
                    resultados
                  </text>
                  {/* Brush Underline */}
                  <path d="M 4 130 C 50 126, 110 127, 210 128 C 160 137, 90 135, 10 136 Z" fill="#FACC15" />
                </g>

                {/* ── 2. PAPER AIRPLANE WITH LOOP TRAIL (DESKTOP ASSET) ── */}
                <g id="airplane">
                  {/* Dashed flight loop */}
                  <path
                    d="M 182 46 C 172 26, 186 14, 202 18 C 216 22, 218 36, 206 44 C 194 50, 186 38, 196 26 C 204 18, 222 16, 234 18"
                    stroke="#475569"
                    strokeWidth="2"
                    strokeDasharray="3.5 3.5"
                    fill="none"
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  {/* Exact desktop airplane asset */}
                  <g transform="translate(230, 0) rotate(-6)">
                    <image
                      href="/assets/airplane_user_exact.png"
                      x="0"
                      y="0"
                      width="46"
                      height="46"
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </g>
                </g>

                {/* ── 3. GOLDEN CROWN (EXACT DESKTOP ASSET) ── */}
                <g id="crown" transform="translate(306, 12) rotate(6)">
                  {/* Golden dynamic burst rays */}
                  <line x1="23" y1="-1" x2="23" y2="-7" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="6" y1="3" x2="0" y2="-2" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="40" y1="3" x2="46" y2="-2" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Exact desktop crown asset */}
                  <image
                    href="/assets/crown_user_exact.png"
                    x="0"
                    y="0"
                    width="46"
                    height="38"
                    preserveAspectRatio="xMidYMid meet"
                  />
                </g>

                {/* ── 4. YELLOW POST-IT NOTE ── */}
                <g id="postit" transform="translate(280, 68) rotate(3.5)" filter="url(#postitShadow)">
                  {/* Note body */}
                  <rect width="104" height="104" rx="2" fill="#FFDE00" stroke="#FDE047" strokeWidth="1" />
                  {/* Pushpin */}
                  <circle cx="52" cy="-2" r="5" fill="#10182B" />
                  <circle cx="51" cy="-3" r="1.5" fill="#FFFFFF" />
                  {/* Handwriting text */}
                  <text
                    x="52"
                    y="36"
                    textAnchor="middle"
                    fontFamily="CaveatLocal, Caveat, cursive"
                    fontWeight="700"
                    fontSize="20"
                    fill="#10182B"
                  >
                    Ideas
                  </text>
                  <text
                    x="52"
                    y="58"
                    textAnchor="middle"
                    fontFamily="CaveatLocal, Caveat, cursive"
                    fontWeight="800"
                    fontSize="24"
                    fill="#10182B"
                  >
                    Creativas
                  </text>
                  {/* Black tape banner */}
                  <rect x="10" y="68" width="84" height="18" rx="1" fill="#10182B" />
                  <text
                    x="52"
                    y="81"
                    textAnchor="middle"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="900"
                    fontSize="8.5"
                    fill="#FFFFFF"
                    letterSpacing="1.5"
                  >
                    IMPACTO REAL
                  </text>
                  {/* Yellow dynamic rays around Post-it */}
                  <line x1="-4" y1="20" x2="-10" y2="16" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="-6" y1="80" x2="-12" y2="86" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="108" y1="28" x2="114" y2="24" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="106" y1="76" x2="112" y2="82" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* ── 5. ROCKET BLASTING OFF (EXACT DESKTOP VECTOR & TRAIL) ── */}
                <g id="rocket" transform="translate(320, 182)">
                  {/* Dotted smoke trail */}
                  <path
                    d="M -28 78 C -14 88, 4 66, 18 46 C 28 30, 22 54, 32 44 C 38 36, 44 30, 48 22"
                    stroke="#475569"
                    strokeWidth="2"
                    strokeDasharray="3.5 3.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.8"
                  />
                  {/* Sparkles */}
                  <text x="-12" y="14" fontSize="12" fill="#10182B">✦</text>
                  <text x="54" y="6" fontSize="10" fill="#10182B">✦</text>

                  {/* Exact Desktop Rocket vector paths */}
                  <g transform="translate(16, -14) scale(0.72) rotate(22)">
                    <path d="M 36 74 C 30 86, 40 96, 44 99 C 48 96, 58 86, 52 74 Z" fill="#FFFFFF" stroke="#10182B" strokeWidth="2.4" strokeLinejoin="round" />
                    <path d="M 39 74 C 37 81, 42 88, 44 90 C 46 88, 51 81, 49 74 Z" fill="#FFFFFF" stroke="#10182B" strokeWidth="1.8" strokeLinejoin="round" />
                    <path d="M 28 48 C 16 53, 10 65, 12 72 C 19 72, 26 66, 26 61 Z" fill="#FFFFFF" stroke="#10182B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 60 48 C 72 53, 78 65, 76 72 C 69 72, 62 66, 62 61 Z" fill="#FFFFFF" stroke="#10182B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 44 8 C 52 17, 60 35, 61 66 C 52 68, 44 68, 44 67 Z" fill="#F8FAFC" stroke="#10182B" strokeWidth="2.4" strokeLinejoin="round" />
                    <path d="M 44 8 C 36 17, 28 35, 27 66 C 36 68, 44 68, 44 67 Z" fill="#FFFFFF" stroke="#10182B" strokeWidth="2.4" strokeLinejoin="round" />
                    <path d="M 44 8 L 44 67" stroke="#10182B" strokeWidth="2" strokeLinecap="round" />
                    <path d="M 44 8 C 39 16, 34 23, 32 28 L 56 28 C 54 23, 49 16, 44 8 Z" fill="#FFFFFF" stroke="#10182B" strokeWidth="2.4" strokeLinejoin="round" />
                    <path d="M 44 8 L 44 28" stroke="#10182B" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M 34 66 L 54 66 L 51 74 L 37 74 Z" fill="#10182B" stroke="#10182B" strokeWidth="2.2" strokeLinejoin="round" />
                    <circle cx="44" cy="44" r="7.5" fill="#FFFFFF" stroke="#10182B" strokeWidth="2.2" />
                    <circle cx="44" cy="44" r="5" fill="#F8FAFC" stroke="#10182B" strokeWidth="1.6" />
                    <path d="M 41.5 41.5 Q 44 39.5, 46.5 41.5" stroke="#10182B" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M 76 22 L 76 32 M 71 27 L 81 27" stroke="#10182B" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="76" cy="27" r="1.3" fill="#10182B" />
                    <path d="M 12 30 L 12 38 M 8 34 L 16 34" stroke="#10182B" strokeWidth="1.8" strokeLinecap="round" />
                  </g>
                </g>

                {/* ── 6. CURVED ARROW & QUOTE ── */}
                <g id="quote" transform="translate(42, 224)">
                  {/* Curved doodle arrow */}
                  <path d="M 2 4 C 0 16, 8 26, 22 26" stroke="#10182B" strokeWidth="2.4" strokeLinecap="round" fill="none" />
                  <path d="M 14 20 L 22 26 L 16 32" stroke="#10182B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

                  {/* Quote text (slanted -3°) */}
                  <g transform="translate(32, 2) rotate(-3)">
                    <text
                      x="0"
                      y="14"
                      fontFamily="CaveatLocal, Caveat, cursive"
                      fontWeight="700"
                      fontSize="16.5"
                      fill="#10182B"
                    >
                      “Diseño que conecta,
                    </text>
                    <text
                      x="6"
                      y="34"
                      fontFamily="CaveatLocal, Caveat, cursive"
                      fontWeight="700"
                      fontSize="16.5"
                      fill="#10182B"
                    >
                      estrategia que <tspan fontWeight="800">convierte.”</tspan>
                    </text>
                    {/* Yellow highlighter line under convierte. */}
                    <path d="M 108 38 L 180 34" stroke="#FACC15" strokeWidth="4.5" strokeLinecap="round" />
                  </g>
                </g>
              </svg>
            </div>

            {/* Mobile Title & Intro */}
            <div className="mt-2.5 text-center shrink-0">
              <h2 className="text-2xl xs:text-3xl font-handwriting font-bold tracking-tight text-[#10182B]">
                Daniel Giraldo
              </h2>
              <svg width="125" height="4" viewBox="0 0 130 4" fill="none" className="mx-auto -mt-0.5">
                <path d="M 2 2 Q 65 1, 128 2" stroke="#EAB308" strokeWidth="2.6" strokeLinecap="round" />
              </svg>

              <p className="font-sans font-bold text-[11px] text-blue-600 tracking-wide uppercase mt-1">
                Estratega de Crecimiento & Diseñador Visual
              </p>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed mt-1 max-w-xs mx-auto">
                Transformo marcas y desarrollo ecosistemas digitales de alto valor mediante diseño de conversión, performance y tecnología.
              </p>
            </div>
          </div>

          {/* ── B. TOUCH-FRIENDLY ACTION BUTTONS (NO HORIZONTAL OVERFLOW) ── */}
          <div className="flex flex-col gap-2 w-full shrink-0">
            {/* Primary Action Button: Casos de Éxito */}
            <button
              type="button"
              onClick={() => onNavigate("projects")}
              className="w-full h-11 xs:h-12 rounded-xl bg-[#F4C400] active:bg-yellow-400 text-[#10182B] text-xs xs:text-sm font-black shadow-[0_6px_16px_rgba(244,196,0,0.35)] border border-yellow-400 flex items-center justify-center gap-2 cursor-pointer transition-all touch-manipulation"
            >
              <Sparkles size={16} className="fill-[#10182B] shrink-0" />
              <span>Ver Casos de Éxito</span>
              <ArrowUpRight size={16} className="shrink-0 text-[#10182B]" />
            </button>

            {/* Secondary Dual Buttons: Servicios & Sobre Daniel */}
            <div className="grid grid-cols-2 gap-2 w-full">
              <button
                type="button"
                onClick={() => onNavigate("services")}
                className="h-10 xs:h-11 rounded-xl bg-white active:bg-slate-100 text-[#10182B] text-xs font-bold shadow-sm border border-slate-200/90 flex items-center justify-center gap-1.5 cursor-pointer transition-all touch-manipulation"
              >
                <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                <span>Servicios</span>
                <ArrowUpRight size={14} className="text-slate-500 shrink-0" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate("about")}
                className="h-10 xs:h-11 rounded-xl bg-[#2563EB] active:bg-blue-700 text-white text-xs font-bold shadow-[0_4px_14px_rgba(37,99,235,0.25)] border border-blue-500 flex items-center justify-center gap-1.5 cursor-pointer transition-all touch-manipulation"
              >
                <span>Sobre Daniel</span>
                <ArrowUpRight size={14} className="shrink-0" />
              </button>
            </div>
          </div>

          {/* ── C. SPECIALTY PILLARS (INTERACTIVE TOUCH CARDS) ── */}
          <div className="space-y-2 pt-0.5 shrink-0">
            <div className="flex items-center justify-between px-1">
              <h3 className="font-handwriting font-bold text-lg text-slate-800">Especialidades</h3>
              <button
                type="button"
                className="text-[11px] text-blue-600 font-semibold cursor-pointer touch-manipulation p-1"
                onClick={() => onNavigate("services")}
              >
                Explorar todo →
              </button>
            </div>

            {/* Card 1: Diseño Visual */}
            <button
              type="button"
              onClick={() => onNavigate("services")}
              className="w-full text-left bg-white/95 shadow-sm border border-slate-200/90 rounded-xl p-3 flex items-start gap-2.5 cursor-pointer active:bg-slate-100 transition-all touch-manipulation"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shrink-0 mt-0.5">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path d="M 3 21 L 8 20 L 20 8 C 21 7 21 5 20 4 C 19 3 17 3 16 4 L 4 16 L 3 21 Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 14 6 L 18 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-handwriting font-bold text-base text-[#10182B]">Diseño Visual</h4>
                  <ArrowUpRight size={14} className="text-slate-400" />
                </div>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                  Identidad de marca, interfaces UI/UX, tiendas e-commerce y dirección de arte.
                </p>
              </div>
            </button>

            {/* Card 2: Estrategia & Growth */}
            <button
              type="button"
              onClick={() => onNavigate("services")}
              className="w-full text-left bg-white/95 shadow-sm border border-slate-200/90 rounded-xl p-3 flex items-start gap-2.5 cursor-pointer active:bg-slate-100 transition-all touch-manipulation"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path d="M 3 20 L 21 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M 6 20 L 6 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M 11 20 L 11 11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M 16 20 L 16 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M 4 14 L 10 9 L 15 13 L 20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-handwriting font-bold text-base text-[#10182B]">Estrategia & Growth</h4>
                  <ArrowUpRight size={14} className="text-slate-400" />
                </div>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                  Campañas Meta & Google Ads, embudos de alta conversión y automatización CRM.
                </p>
              </div>
            </button>

            {/* Card 3: E-Commerce & Tech */}
            <button
              type="button"
              onClick={() => onNavigate("services")}
              className="w-full text-left bg-white/95 shadow-sm border border-slate-200/90 rounded-xl p-3 flex items-start gap-2.5 cursor-pointer active:bg-slate-100 transition-all touch-manipulation"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
                  <path d="M 7 8 L 3 12 L 7 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 17 8 L 21 12 L 17 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 14 4 L 10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-handwriting font-bold text-base text-[#10182B]">E-Commerce & Tech</h4>
                  <ArrowUpRight size={14} className="text-slate-400" />
                </div>
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                  Desarrollo Shopify y WordPress, catálogo optimizado y experiencia móvil sin fricción.
                </p>
              </div>
            </button>
          </div>

        </div>

      </div>
  );
}
