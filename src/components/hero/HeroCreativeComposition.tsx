"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface HeroProps {
  onNavigate: (view: any) => void;
}

export function HeroCreativeComposition({ onNavigate }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

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
      className="relative w-full h-full rounded-[2.5rem] overflow-hidden select-none"
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

      {/* ── 3D PARALLAX MASTER STAGE ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >
        {/* ════════════════════════════════════════════════════════════════
            1. TOP-LEFT: DISEÑO VISUAL ON TORN PAPER SCRAP & ARROW
            ════════════════════════════════════════════════════════════════ */}
        <div className="absolute top-3 sm:top-4 md:top-5 left-3 sm:left-5 md:left-6 w-[180px] sm:w-[210px] md:w-[235px] lg:w-[255px] z-30 pointer-events-auto">
          <div
            className="bg-white/95 backdrop-blur-xs shadow-[0_12px_28px_rgba(16,24,43,0.08)] border border-slate-200/90 -rotate-1 p-2.5 sm:p-3 rounded-xs"
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
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-[#10182B] font-handwriting whitespace-nowrap">
                  Diseño Visual
                </h3>
                <svg width="105" height="4" viewBox="0 0 105 4" fill="none" className="-mt-0.5">
                  <path d="M 2 2 Q 52 1, 103 2" stroke="#EAB308" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs md:text-[13px] text-slate-600 font-medium leading-relaxed mt-1.5 pl-0.5">
              Identidad de marca, interfaces UI/UX, tiendas e-commerce, material digital y dirección de arte.
            </p>
          </div>
        </div>



        {/* ════════════════════════════════════════════════════════════════
            DOODLE: HAND-DRAWN ROCKET WITH LOOSE FLIGHT TRAIL (TWIN OF AIRPLANE)
            (LOOSE SWEEPING VAPOR TRAIL FLOWING FREELY ACROSS OPEN PAPER)
            ════════════════════════════════════════════════════════════════ */}
        <motion.div
          animate={{ y: [0, -6, 0], rotate: [0, 1.5, -0.5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1, rotate: 3 }}
          className="absolute top-[48%] sm:top-[49%] md:top-[50%] left-6 sm:left-9 md:left-12 lg:left-14 z-30 pointer-events-auto cursor-pointer select-none hidden sm:block"
        >
          <div className="relative flex items-end">
            {/* Loose, sweeping flight smoke trail (exact same style and airy loop as airplane) */}
            <svg
              width="135"
              height="95"
              viewBox="0 0 140 100"
              fill="none"
              className="overflow-visible -mr-3 sm:-mr-4 md:-mr-5 -mb-2 sm:-mb-3 pointer-events-none opacity-85 shrink-0"
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

            {/* The Rocket Figure (Tilted gracefully upwards, pure monochrome ink linework) */}
            <div className="w-[68px] sm:w-[78px] md:w-[88px] lg:w-[96px] select-none filter drop-shadow-[0_8px_18px_rgba(16,24,43,0.12)] shrink-0 rotate-12">
              <svg
                viewBox="0 0 100 135"
                fill="none"
                className="w-full h-auto overflow-visible"
              >
                {/* Rocket Outer Flame (Monochrome Paper White with Ink Stroke) */}
                <path
                  d="M 36 74 C 30 86, 40 96, 44 99 C 48 96, 58 86, 52 74 Z"
                  fill="#FFFFFF"
                  stroke="#10182B"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                {/* Inner Flame */}
                <path
                  d="M 39 74 C 37 81, 42 88, 44 90 C 46 88, 51 81, 49 74 Z"
                  fill="#FFFFFF"
                  stroke="#10182B"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />

                {/* Left Fin */}
                <path
                  d="M 28 48 C 16 53, 10 65, 12 72 C 19 72, 26 66, 26 61 Z"
                  fill="#FFFFFF"
                  stroke="#10182B"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Right Fin */}
                <path
                  d="M 60 48 C 72 53, 78 65, 76 72 C 69 72, 62 66, 62 61 Z"
                  fill="#FFFFFF"
                  stroke="#10182B"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Main Fuselage Body (Origami paper facet folds like paper airplane) */}
                {/* Right facet (subtle paper crease tone) */}
                <path
                  d="M 44 8 C 52 17, 60 35, 61 66 C 52 68, 44 68, 44 67 Z"
                  fill="#F8FAFC"
                  stroke="#10182B"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                {/* Left facet (pure crisp white) */}
                <path
                  d="M 44 8 C 36 17, 28 35, 27 66 C 36 68, 44 68, 44 67 Z"
                  fill="#FFFFFF"
                  stroke="#10182B"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                {/* Center Origami Crease Line (Identical to paper airplane center fold) */}
                <path
                  d="M 44 8 L 44 67"
                  stroke="#10182B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Nose Cone Tip (Pure White with Ink Outline & Fold) */}
                <path
                  d="M 44 8 C 39 16, 34 23, 32 28 L 56 28 C 54 23, 49 16, 44 8 Z"
                  fill="#FFFFFF"
                  stroke="#10182B"
                  strokeWidth="2.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M 44 8 L 44 28"
                  stroke="#10182B"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                {/* Thruster Nozzle */}
                <path
                  d="M 34 66 L 54 66 L 51 74 L 37 74 Z"
                  fill="#10182B"
                  stroke="#10182B"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />

                {/* Porthole Window (Clean hand-drawn ink ring) */}
                <circle
                  cx="44"
                  cy="44"
                  r="7.5"
                  fill="#FFFFFF"
                  stroke="#10182B"
                  strokeWidth="2.2"
                />
                <circle
                  cx="44"
                  cy="44"
                  r="5"
                  fill="#F8FAFC"
                  stroke="#10182B"
                  strokeWidth="1.6"
                />
                {/* Glass reflection arc */}
                <path
                  d="M 41.5 41.5 Q 44 39.5, 46.5 41.5"
                  stroke="#10182B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                {/* Hand-drawn Doodle Stars / Sparks in pure ink (no colors) */}
                <path
                  d="M 76 22 L 76 32 M 71 27 L 81 27"
                  stroke="#10182B"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="76" cy="27" r="1.3" fill="#10182B" />
                <path
                  d="M 12 30 L 12 38 M 8 34 L 16 34"
                  stroke="#10182B"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════
            4. BOTTOM-LEFT: E-COMMERCE & TECH ON TORN PAPER SCRAP & ARROW
            ════════════════════════════════════════════════════════════════ */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 left-3 sm:left-5 md:left-6 w-[185px] sm:w-[215px] md:w-[245px] lg:w-[265px] z-30 pointer-events-auto">

          <div
            className="bg-white/95 backdrop-blur-xs shadow-[0_12px_28px_rgba(16,24,43,0.08)] border border-slate-200/90 rotate-1 p-2.5 sm:p-3 rounded-xs"
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
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-[#10182B] font-handwriting whitespace-nowrap">
                  E-Commerce & Tech
                </h3>
                <svg width="140" height="4" viewBox="0 0 140 4" fill="none" className="-mt-0.5">
                  <path d="M 2 2 Q 70 1, 138 2" stroke="#EAB308" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs md:text-[13px] text-slate-600 font-medium leading-relaxed mt-1.5 pl-0.5">
              Desarrollo en Shopify y WordPress, catálogo optimizado, reducción de fricción y experiencia móvil.
            </p>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            5. TOP-RIGHT: ESTRATEGIA & GROWTH ON TORN PAPER SCRAP & ARROW
            ════════════════════════════════════════════════════════════════ */}
        <div className="absolute top-3 sm:top-4 md:top-5 right-3 sm:right-5 md:right-6 w-[185px] sm:w-[215px] md:w-[245px] lg:w-[265px] z-30 pointer-events-auto">
          <div
            className="bg-white/95 backdrop-blur-xs shadow-[0_12px_28px_rgba(16,24,43,0.08)] border border-slate-200/90 rotate-1 p-2.5 sm:p-3 rounded-xs text-left"
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
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-[#10182B] font-handwriting whitespace-nowrap">
                  Estrategia & Growth
                </h3>
                <svg width="145" height="4" viewBox="0 0 145 4" fill="none" className="-mt-0.5">
                  <path d="M 2 2 Q 72 1, 143 2" stroke="#EAB308" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <p className="text-[11px] sm:text-xs md:text-[13px] text-slate-600 font-medium leading-relaxed mt-1.5 pl-0.5">
              Campañas en Meta y Google Ads, Social media, embudos de venta y automatización CRM.
            </p>
          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════════
            6. RIGHT LATERAL: ECOSISTEMA DIGITAL NOTEBOOK SCRAP & ARROW
            ════════════════════════════════════════════════════════════════ */}
        <div className="absolute top-[24%] sm:top-[26%] md:top-[27%] right-3 sm:right-5 md:right-6 lg:right-7 z-40 pointer-events-none">
          {/* Hand-drawn curved arrow in open space pointing to Ecosistema Digital from top-left (OUTSIDE clipPath, NEVER covered) */}
          <div className="absolute -top-7 sm:-top-8 -left-8 sm:-left-10 pointer-events-none z-50 hidden sm:block">
            <svg width="44" height="38" viewBox="0 0 48 42" fill="none">
              <path d="M 6 6 C 16 6, 28 14, 38 28" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M 24 27 L 39 29 L 36 16" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <motion.div
            initial={{ rotate: 2 }}
            animate={{ rotate: 2 }}
            whileHover={{ scale: 1.06, rotate: 2, y: -3, zIndex: 45 }}
            className="w-40 sm:w-46 md:w-52 lg:w-56 p-2.5 sm:p-3 md:p-3.5 bg-white text-[#10182B] shadow-[0_12px_26px_rgba(0,0,0,0.14)] border border-slate-300 rounded-xs pointer-events-auto text-left"
            style={{
              backgroundImage: `repeating-linear-gradient(to bottom, transparent 0px, transparent 19px, #E2E8F0 20px)`,
              clipPath: `polygon(
                0% 0%, 100% 0%, 100% 97%,
                95% 100%, 88% 97%, 80% 100%, 72% 98%, 65% 100%, 55% 97%, 45% 100%, 35% 97%, 25% 100%, 15% 98%, 5% 100%, 0% 97%
              )`
            }}
          >
            {/* Yellow Masking Tape on top-right corner */}
            <div className="absolute -top-2.5 -right-2 w-8 sm:w-9 h-3.5 sm:h-4 bg-[#FEF08A]/90 rotate-12 shadow-xs border border-yellow-300/80" />
            {/* Spiral Punch Holes along left edge */}
            <div className="absolute left-1.5 top-3 bottom-3 flex flex-col justify-between pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#CBD5E1] border border-slate-400" />
              ))}
            </div>
            <div className="pl-3 sm:pl-3.5">
              <h4 className="font-sans font-extrabold text-xs sm:text-sm md:text-base lg:text-[17px] text-[#10182B] mb-1 tracking-tight">
                Ecosistema Digital:
              </h4>
              <ul className="text-[9.5px] sm:text-[11px] md:text-xs lg:text-[13.5px] font-sans font-bold text-slate-700 space-y-1 leading-tight">
                <li>• UI/UX & Web Design</li>
                <li>• Tiendas Shopify & WP</li>
                <li>• Meta Ads & Tráfico</li>
                <li>• Automatización CRM</li>
              </ul>
            </div>
          </motion.div>
        </div>


        {/* ════════════════════════════════════════════════════════════════
            8. BOTTOM-RIGHT: DANIEL GIRALDO & ARROW
            ════════════════════════════════════════════════════════════════ */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 right-3 sm:right-5 md:right-6 w-[190px] sm:w-[220px] md:w-[250px] lg:w-[275px] text-right z-30 pointer-events-auto">
          {/* Hand-drawn curved arrow pointing up-left directly toward Card 3 (Convirtiendo ideas) */}
          <div className="absolute -top-8 right-14 sm:right-18 hidden sm:block pointer-events-none z-50">
            <svg width="44" height="32" viewBox="0 0 48 36" fill="none">
              <path d="M 44 28 C 32 28, 20 20, 8 8" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M 10 20 L 6 8 L 20 6" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="flex items-center justify-end gap-2 whitespace-nowrap">
            <svg width="21" height="21" viewBox="0 0 24 24" fill="none" className="text-[#10182B] shrink-0">
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2.2" />
              <path d="M 4 21 C 4 16.5, 7.5 14, 12 14 C 16.5 14, 20 16.5, 20 21" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-handwriting font-bold tracking-tight text-[#10182B] whitespace-nowrap">
                Daniel Giraldo
              </h3>
              <svg width="125" height="4" viewBox="0 0 125 4" fill="none" className="-mt-0.5 ml-auto">
                <path d="M 2 2 Q 62 1, 123 2" stroke="#EAB308" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs md:text-[13px] text-slate-600 font-medium leading-relaxed mt-1.5 pr-0.5">
            Estratega de crecimiento y diseñador visual enfocado en transformar marcas y crear soluciones de alto valor.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════════════
            6. THE MONUMENTAL "PORTAFOLIO" HERO COLLAGE
            (CENTERPIECE PROPORTIONALLY CALIBRATED TO REFERENCE DESIGN)
            ════════════════════════════════════════════════════════════════ */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-2 -translate-y-2 sm:-translate-y-3">
          <div className="relative flex flex-col items-center justify-center">

            {/* ── BASE CANVAS: Large Torn Millimeter Graph Paper Sheet ── */}
            <div
              className="absolute -inset-x-9 sm:-inset-x-12 md:-inset-x-15 lg:-inset-x-18 -inset-y-7 sm:-inset-y-10 md:-inset-y-13 lg:-inset-y-16 bg-white shadow-[0_24px_60px_rgba(16,24,43,0.15)] border border-slate-200 -rotate-1 pointer-events-none -z-10"
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
              <div className="absolute -top-3 left-6 w-14 h-5 bg-[#FEF08A]/85 -rotate-12 shadow-xs border border-yellow-300/70" />
              <div className="absolute -bottom-3 right-8 w-14 h-5 bg-[#FEF08A]/85 rotate-6 shadow-xs border border-yellow-300/70" />
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

              {/* ── ROW 1: P - O - R - T - A (SEPARATED WITH VISIBLE GAPS) ── */}
              <div className="relative flex items-center justify-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-4.5 xl:gap-5">

                {/* ── DOODLE: Paper Airplane & Trail starting at 'P' and ending at 'O' (Identical height and size as crown) ── */}
                <motion.div
                  style={{ x: planeTranslateX, y: planeTranslateY }}
                  animate={{ y: [0, -5, 0], rotate: [0, 1.5, -0.5, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-14 sm:-top-16 md:-top-19 lg:-top-22 left-2 sm:left-4 md:left-6 z-[70] pointer-events-none select-none"
                >
                  <div className="relative flex items-center">
                    {/* Flight trail beginning at letter 'P' with graceful loop toward 'O' */}
                    <svg
                      width="140"
                      height="65"
                      viewBox="0 0 150 70"
                      fill="none"
                      className="overflow-visible -mr-2 sm:-mr-3"
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

                    {/* Paper Airplane sitting directly above letter 'O' with exact same size as crown */}
                    <div className="w-[46px] sm:w-[54px] md:w-[64px] lg:w-[76px] select-none filter drop-shadow-[0_4px_10px_rgba(16,24,43,0.14)] -rotate-6">
                      <img
                        src="/assets/airplane_user_exact.png"
                        alt="Avión de papel"
                        className="w-full h-auto object-contain pointer-events-none"
                      />
                    </div>
                  </div>
                </motion.div>


                {/* LETTER 'P' - Deep Black/Navy Card (#10182B), White Letter, Tilted Left (-3.5°) with Ideas Creativas attached at left corner */}
                <div className="relative">
                  {/* ── CARD: IDEAS CREATIVAS / IMPACTO REAL (ON LEFT CORNER OF 'P' - ZERO OVERLAP WITH 'P' LETTER OR OTHER CARDS) ── */}
                  <motion.div
                    initial={{ rotate: -5 }}
                    animate={{ rotate: -5 }}
                    whileHover={{ scale: 1.08, rotate: -5, y: -4, zIndex: 60 }}
                    className="absolute bottom-2 sm:bottom-3 md:bottom-4 -left-[102px] sm:-left-[118px] md:-left-[130px] lg:-left-[142px] z-40 w-[124px] sm:w-[140px] md:w-[154px] lg:w-[168px] p-2.5 sm:p-3 bg-[#FDE047] text-[#10182B] shadow-[0_16px_32px_rgba(0,0,0,0.22)] border border-yellow-400/90 rounded-xs pointer-events-auto cursor-grab active:cursor-grabbing text-center"
                  >
                    {/* Hand-drawn curved arrow in the open left space pointing directly toward Ideas Creativas */}
                    <div className="absolute top-2.5 sm:top-3 -left-12 sm:-left-14 md:-left-16 pointer-events-none z-50">
                      <svg width="44" height="34" viewBox="0 0 48 38" fill="none">
                        <path d="M 4 8 C 16 6, 28 12, 38 24" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" />
                        <path d="M 24 23 L 39 25 L 36 12" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    {/* Classic 3D Black Pin with reflection dot */}
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
                      <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-[#10182B] border border-slate-700 shadow-xs flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      </div>
                    </div>

                    {/* Translucent Yellow Masking Tape on top-right corner */}
                    <div className="absolute -top-2 -right-1.5 w-7 sm:w-8 h-3 sm:h-3.5 bg-[#FEF08A]/90 rotate-12 shadow-xs border border-yellow-300/80 z-20" />

                    <div className="pt-0.5">
                      <p className="font-handwriting font-bold text-base sm:text-lg md:text-xl text-[#10182B] leading-tight">
                        Ideas
                      </p>
                      <p className="font-handwriting font-bold text-base sm:text-lg md:text-xl text-[#10182B] leading-tight -mt-0.5">
                        Creativas
                      </p>
                      <div className="mt-1 inline-block bg-[#10182B] text-white font-sans font-black text-[9px] sm:text-[10px] md:text-[11px] tracking-wider px-2 sm:px-2.5 py-0.5 rounded-xs shadow-xs uppercase">
                        IMPACTO REAL
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ rotate: -3.5 }}
                    animate={{ rotate: -3.5 }}
                    whileHover={{ scale: 1.1, y: -8, rotate: -3.5, zIndex: 60 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 450, damping: 22 }}
                    className="relative w-[76px] sm:w-[90px] md:w-[106px] lg:w-[120px] xl:w-[132px] h-[110px] sm:h-[130px] md:h-[152px] lg:h-[172px] xl:h-[188px] bg-[#10182B] text-white flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.30)] border border-slate-700 cursor-pointer overflow-hidden z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(0,0,0,0.45),0_0_18px_rgba(255,255,255,0.1)] hover:border-slate-500"
                  >
                    {/* Subtle paper fold crease at top-left corner */}
                    <div className="absolute top-0 left-0 w-3.5 sm:w-4 h-3.5 sm:h-4 bg-slate-800 border-b border-r border-slate-600/70 shadow-xs pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:6px_6px]" />
                    <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[112px] font-black font-sans tracking-tighter select-none drop-shadow-md pt-0.5">
                      P
                    </span>
                  </motion.div>
                </div>

                {/* LETTER 'O' - White Cutout Card with Character inside 'O' & Black Pushpin, Tilted Right (+2.5°) */}
                <motion.div
                  initial={{ rotate: 2.5 }}
                  animate={{ rotate: 2.5 }}
                  whileHover={{ scale: 1.1, y: -8, rotate: 2.5, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[76px] sm:w-[90px] md:w-[106px] lg:w-[120px] xl:w-[132px] h-[110px] sm:h-[130px] md:h-[152px] lg:h-[172px] xl:h-[188px] bg-white text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.20)] border border-slate-300 cursor-pointer overflow-hidden z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(16,24,43,0.25),0_0_16px_rgba(0,0,0,0.05)] hover:border-slate-400 group pt-0.5"
                >
                  {/* Classic 3D Black Pin at top */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-[#10182B] border border-slate-600 shadow-xs flex items-center justify-center pointer-events-none z-20">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  </div>

                  {/* Character leaning through the letter 'O' */}
                  <div className="w-[88%] h-[88%] flex items-center justify-center mt-0.5 pointer-events-none select-none">
                    <img
                      src="/assets/letter_o_character_clean.png"
                      alt="Letra O - Daniel Giraldo"
                      className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.18)] group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </motion.div>

                {/* LETTER 'R' - Black/Navy Card (#10182B), White Letter, Wire Paperclip, Tilted Left (-2.5°) */}
                <motion.div
                  initial={{ rotate: -2.5 }}
                  animate={{ rotate: -2.5 }}
                  whileHover={{ scale: 1.1, y: -8, rotate: -2.5, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[76px] sm:w-[90px] md:w-[106px] lg:w-[120px] xl:w-[132px] h-[110px] sm:h-[130px] md:h-[152px] lg:h-[172px] xl:h-[188px] bg-[#10182B] text-white flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.30)] border border-slate-700 cursor-pointer z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(0,0,0,0.45),0_0_18px_rgba(255,255,255,0.1)] hover:border-slate-500 overflow-visible"
                >
                  {/* Silver wire paperclip sliding over top edge */}
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-3 sm:w-3.5 h-5 sm:h-5.5 rounded-full border-2 border-slate-300 shadow-xs pointer-events-none z-20 flex items-start justify-center pt-0.5">
                    <div className="w-0.5 h-3.5 rounded-full border border-slate-400" />
                  </div>
                  <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[112px] font-black font-sans tracking-tighter select-none drop-shadow-md pt-0.5">
                    R
                  </span>
                </motion.div>

                {/* LETTER 'T' - Golden Yellow Card (#F4C400) with independent floating crown, Tilted Right (+3°) */}
                <div className="relative">
                  {/* ── DOODLE: Hand-Drawn Golden Crown hovering above TOP-RIGHT corner of 'T' ── */}
                  <motion.div
                    style={{ x: planeTranslateX, y: planeTranslateY }}
                    animate={{ y: [0, -5, 0], rotate: [0, 2, -1, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-14 sm:-top-16 md:-top-19 lg:-top-22 -right-1.5 sm:-right-2 pointer-events-none z-[70] filter drop-shadow-xs select-none w-[46px] sm:w-[54px] md:w-[64px] lg:w-[76px]"
                  >
                    <img
                      src="/assets/crown_user_exact.png"
                      alt="Corona Dorada"
                      className="w-full h-auto object-contain pointer-events-none"
                    />
                  </motion.div>

                  {/* Golden Yellow Card (#F4C400), Black Letter, Frosted Scotch Tape */}
                  <motion.div
                    initial={{ rotate: 3 }}
                    animate={{ rotate: 3 }}
                    whileHover={{ scale: 1.1, y: -8, rotate: 3, zIndex: 60 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 450, damping: 22 }}
                    className="relative w-[84px] sm:w-[98px] md:w-[116px] lg:w-[132px] xl:w-[144px] h-[124px] sm:h-[146px] md:h-[170px] lg:h-[192px] xl:h-[208px] bg-[#F4C400] text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_16px_32px_rgba(0,0,0,0.26)] border border-amber-600/40 cursor-pointer z-10 transition-shadow duration-200 hover:shadow-[0_24px_48px_rgba(244,196,0,0.4),0_12px_24px_rgba(16,24,43,0.25)] hover:border-amber-500 overflow-visible"
                  >
                    {/* Translucent Frosted Tape strip at top */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 sm:w-9 h-3 sm:h-3.5 bg-white/50 backdrop-blur-[0.5px] border-t border-b border-white/70 -rotate-1 shadow-xs pointer-events-none z-20" />
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:5px_5px] pointer-events-none rounded-xs" />
                    <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[108px] xl:text-[124px] font-black font-sans tracking-tighter select-none pt-0.5">
                      T
                    </span>
                  </motion.div>
                </div>

                {/* LETTER 'A' - White Cutout Card with Black A & Amber Pin, Tilted Left (-2°) */}
                <motion.div
                  initial={{ rotate: -2 }}
                  animate={{ rotate: -2 }}
                  whileHover={{ scale: 1.1, y: -8, rotate: -2, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[76px] sm:w-[90px] md:w-[106px] lg:w-[120px] xl:w-[132px] h-[110px] sm:h-[130px] md:h-[152px] lg:h-[172px] xl:h-[188px] bg-white text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.20)] border border-slate-300 cursor-pointer overflow-hidden z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(16,24,43,0.25),0_0_16px_rgba(0,0,0,0.05)] hover:border-slate-400"
                >
                  {/* Amber / Brass Pin on top right */}
                  <div className="absolute top-2 right-2.5 sm:right-3 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-amber-500 border border-amber-600 shadow-xs flex items-center justify-center pointer-events-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-200" />
                  </div>
                  <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[112px] font-black font-sans tracking-tighter select-none pt-0.5">
                    A
                  </span>
                </motion.div>

              </div>

              {/* ── ROW 2: F - O - L - I - [DG] (SEPARATED FROM ROW 1 BY POSITIVE MARGIN) ── */}
              <div
                className="relative flex items-center justify-center gap-3 sm:gap-3.5 md:gap-4 lg:gap-4.5 xl:gap-5 translate-x-1 sm:translate-x-1.5 md:translate-x-2 mt-4 sm:mt-4.5 md:mt-5 lg:mt-6"
                style={{ transformStyle: "preserve-3d" }}
              >

                {/* ── CARD: IMPACTFUL PHRASE IN A SINGLE LINE (BELOW 'F' & 'O', IN FRONT, SAME LEFT TILT, ZERO OVERLAP WITH BUTTONS) ── */}
                <div className="absolute top-[86%] sm:top-[87%] md:top-[88%] left-0 sm:left-1 md:left-2 z-40 pointer-events-none">
                  {/* Hand-drawn curved arrow pointing directly toward this phrase card from the left (OUTSIDE clipPath so it is 100% visible) */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-12 sm:-left-14 md:-left-16 pointer-events-none z-50 hidden sm:block">
                    <svg width="48" height="28" viewBox="0 0 52 30" fill="none">
                      <path d="M 4 8 C 16 8, 30 12, 42 16" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" />
                      <path d="M 30 8 L 44 16 L 34 24" stroke="#334155" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <motion.div
                    initial={{ rotate: -4.5 }}
                    animate={{ rotate: -4.5 }}
                    whileHover={{ scale: 1.06, rotate: -4.5, y: -3, zIndex: 60 }}
                    className="w-fit max-w-[92vw] px-3.5 sm:px-4.5 md:px-5 py-1.5 sm:py-2 bg-white text-[#10182B] shadow-[0_14px_28px_rgba(0,0,0,0.18)] border border-slate-800 rounded-xs pointer-events-auto cursor-default text-center whitespace-nowrap"
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
                    {/* Dark Charcoal Masking Tape on top-left corner */}
                    <div className="absolute -top-2 left-2 w-7 sm:w-8 h-3 sm:h-3.5 bg-[#334155]/90 -rotate-15 shadow-xs border border-slate-600 z-30" />

                    <p className="font-handwriting font-bold text-xs sm:text-sm md:text-base lg:text-[17px] text-[#10182B] whitespace-nowrap leading-none tracking-tight py-0.5">
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


                {/* LETTER 'F' - White Card with Black F & Punched Binder Hole, Tilted Right (+3°) */}
                <motion.div
                  initial={{ rotate: 3 }}
                  animate={{ rotate: 3 }}
                  whileHover={{ scale: 1.1, y: -8, rotate: 3, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[76px] sm:w-[90px] md:w-[106px] lg:w-[120px] xl:w-[132px] h-[110px] sm:h-[130px] md:h-[152px] lg:h-[172px] xl:h-[188px] bg-white text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.20)] border border-slate-300 cursor-pointer z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(16,24,43,0.25),0_0_16px_rgba(0,0,0,0.05)] hover:border-slate-400"
                >
                  {/* Punched hole cutout with reinforced ring */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-slate-200 border-2 border-slate-400 shadow-inner flex items-center justify-center pointer-events-none">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-slate-400/80" />
                  </div>
                  <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[112px] font-black font-sans tracking-tighter select-none pt-0.5">
                    F
                  </span>
                </motion.div>

                {/* LETTER 'O' - Golden Yellow Card (#F4C400), Black O, Industrial Metal Staple, Tilted Left (-3°) */}
                <motion.div
                  initial={{ rotate: -3 }}
                  animate={{ rotate: -3 }}
                  whileHover={{ scale: 1.1, y: -8, rotate: -3, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[76px] sm:w-[90px] md:w-[106px] lg:w-[120px] xl:w-[132px] h-[110px] sm:h-[130px] md:h-[152px] lg:h-[172px] xl:h-[188px] bg-[#F4C400] text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.24)] border border-amber-600/40 cursor-pointer z-10 transition-shadow duration-200 hover:shadow-[0_24px_48px_rgba(244,196,0,0.4),0_12px_24px_rgba(16,24,43,0.25)] hover:border-amber-500 overflow-visible"
                >
                  {/* Industrial metal staple at top */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-5 sm:w-6 h-1.5 bg-slate-600 rounded-full shadow-xs pointer-events-none z-20 border-t border-slate-400" />
                  <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[112px] font-black font-sans tracking-tighter select-none pt-0.5">
                    O
                  </span>
                </motion.div>

                {/* LETTER 'L' - Crisp White Paper Card, Black L, Clean Cutout, Tilted Right (+2.5°) */}
                <motion.div
                  initial={{ rotate: 2.5 }}
                  animate={{ rotate: 2.5 }}
                  whileHover={{ scale: 1.1, y: -8, rotate: 2.5, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[76px] sm:w-[90px] md:w-[106px] lg:w-[120px] xl:w-[132px] h-[110px] sm:h-[130px] md:h-[152px] lg:h-[172px] xl:h-[188px] bg-white text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.20)] border border-slate-300 cursor-pointer z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(16,24,43,0.25),0_0_16px_rgba(0,0,0,0.05)] hover:border-slate-400"
                >
                  {/* Minimalist crop-mark tick at top-left corner */}
                  <div className="absolute top-2 left-2.5 w-2 h-2 border-t border-l border-slate-400 pointer-events-none opacity-60" />
                  <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[112px] font-black font-sans tracking-tighter select-none pt-0.5">
                    L
                  </span>
                </motion.div>

                {/* LETTER 'I' - Slender Black Card (#10182B), White I, Silver Metal Tack, Tilted Left (-2°) */}
                <motion.div
                  initial={{ rotate: -2 }}
                  animate={{ rotate: -2 }}
                  whileHover={{ scale: 1.1, y: -8, rotate: -2, zIndex: 60 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 450, damping: 22 }}
                  className="relative w-[54px] sm:w-[64px] md:w-[76px] lg:w-[86px] xl:w-[94px] h-[110px] sm:h-[130px] md:h-[152px] lg:h-[172px] xl:h-[188px] bg-[#10182B] text-white flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.30)] border border-slate-700 cursor-pointer z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(0,0,0,0.45),0_0_18px_rgba(255,255,255,0.1)] hover:border-slate-500"
                >
                  {/* Silver metallic tack at top */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-slate-300 border border-slate-400 shadow-xs flex items-center justify-center pointer-events-none">
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </div>
                  <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[112px] font-black font-sans tracking-tighter select-none drop-shadow-md pt-0.5">
                    I
                  </span>
                </motion.div>

                {/* LETTER 'O' / MONOGRAM BADGE '[DG]', Tilted Right (+2.5°) */}
                <div className="relative">
                  <motion.div
                    initial={{ rotate: 2.5 }}
                    animate={{ rotate: 2.5 }}
                    whileHover={{ scale: 1.1, y: -8, rotate: 2.5, zIndex: 60 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 450, damping: 22 }}
                    className="relative w-[76px] sm:w-[90px] md:w-[106px] lg:w-[120px] xl:w-[132px] h-[110px] sm:h-[130px] md:h-[152px] lg:h-[172px] xl:h-[188px] bg-white text-[#10182B] flex items-center justify-center rounded-xs shadow-[0_14px_28px_rgba(0,0,0,0.22)] border border-slate-300 cursor-pointer overflow-hidden z-10 transition-shadow duration-200 hover:shadow-[0_22px_44px_rgba(16,24,43,0.25),0_0_16px_rgba(0,0,0,0.05)] hover:border-slate-400 group"
                  >
                    {/* Yellow Tape on top-right corner as seen in blueprint */}
                    <div className="absolute -top-2 -right-2 w-7 sm:w-8 h-3.5 sm:h-4 bg-[#FEF08A]/90 rotate-45 shadow-xs border border-yellow-300/80 z-20" />

                    {/* Crowned O with DG Monogram & Yellow Sparks */}
                    <div className="w-[88%] h-[88%] flex items-center justify-center pointer-events-none select-none">
                      <img
                        src="/assets/letter_o_dg_clean.png"
                        alt="O - DG Daniel Giraldo"
                        className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.14)] group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>

                  {/* ── CARD: CONVIRTIENDO IDEAS EN RESULTADOS (OVER THE LAST 'O', SAME LEFT TILT) ── */}
                  <motion.div
                    initial={{ rotate: -4.5 }}
                    animate={{ rotate: -4.5 }}
                    whileHover={{ scale: 1.08, rotate: -4.5, y: -4, zIndex: 60 }}
                    className="absolute top-1 sm:top-2 md:top-2.5 -right-[110px] sm:-right-[128px] md:-right-[144px] lg:-right-[156px] z-40 w-36 sm:w-42 md:w-46 lg:w-50 p-3 sm:p-3.5 bg-[#FDE047] text-[#10182B] shadow-[0_16px_32px_rgba(0,0,0,0.22)] border border-yellow-400/90 rounded-xs pointer-events-auto cursor-grab active:cursor-grabbing text-center"
                  >
                    {/* Classic 3D Black Pin with reflection dot */}
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
                      <div className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-[#10182B] border border-slate-700 shadow-xs flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      </div>
                    </div>

                    {/* Subtle top-left yellow tape */}
                    <div className="absolute -top-2 -left-1 w-7 sm:w-8 h-3 sm:h-3.5 bg-[#FEF08A]/90 -rotate-30 shadow-xs border border-yellow-300/80 z-20" />

                    <div className="pt-0.5">
                      {/* Hand-Drawn Lightbulb Icon with Warm Glow */}
                      <div className="flex justify-center mb-0.5">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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

                      <p className="font-handwriting text-sm sm:text-base md:text-lg font-bold leading-tight text-[#10182B]">
                        Convirtiendo ideas <br />
                        <span className="text-[10px] sm:text-[11px] md:text-xs text-slate-700 font-sans italic">en</span>
                      </p>

                      <div className="mt-1">
                        <span className="font-sans font-black text-[11px] sm:text-xs md:text-sm tracking-wider uppercase text-[#10182B] block">
                          RESULTADOS.
                        </span>
                        <svg width="72" height="4" viewBox="0 0 72 4" fill="none" className="mx-auto mt-0.5">
                          <path d="M 2 2 Q 36 1, 70 2" stroke="#10182B" strokeWidth="2.2" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* 3 Radiating sketch ticks to the right of yellow card */}
                    <div className="absolute top-[28%] -right-5 pointer-events-none opacity-80 hidden sm:block">
                      <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
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
            7. THE 3 BOTTOM NAVIGATION BUTTONS
            (CLEAN BREATHING MARGIN BELOW THE COLLAGE)
            ════════════════════════════════════════════════════════════════ */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 inset-x-0 flex items-center justify-center gap-2.5 sm:gap-3.5 z-30 px-2 pointer-events-auto">
          {/* Button 1: Servicios (White Pill with Electric Blue Dot) */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate("services")}
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-50 text-[#10182B] text-xs sm:text-sm md:text-[15px] font-bold shadow-[0_8px_20px_rgba(0,0,0,0.08)] border border-slate-200/90 flex items-center gap-2 transition-all cursor-pointer group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB] group-hover:scale-125 transition-transform shrink-0" />
            <span>Servicios</span>
            <ArrowUpRight size={16} className="text-slate-500 group-hover:text-[#2563EB] transition-colors shrink-0" />
          </motion.button>

          {/* Button 2: Sobre Daniel (Royal Blue Pill) */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate("about")}
            className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white text-xs sm:text-sm md:text-[15px] font-bold shadow-[0_8px_20px_rgba(37,99,235,0.32)] border border-blue-500 flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>Sobre Daniel</span>
            <ArrowUpRight size={16} className="shrink-0" />
          </motion.button>

          {/* Button 3: Casos de Éxito (Golden Yellow Pill) */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate("projects")}
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#F4C400] hover:bg-yellow-400 text-[#10182B] text-xs sm:text-sm md:text-[15px] font-black shadow-[0_8px_20px_rgba(244,196,0,0.32)] border border-yellow-400 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Sparkles size={15} className="fill-[#10182B] shrink-0" />
            <span>Casos de Éxito</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
