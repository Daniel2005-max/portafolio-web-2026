"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Instagram,
  Globe,
  TrendingUp,
  Award,
  Layers,
} from "lucide-react";

interface RymelExperienceProps {
  onBack: () => void;
}

export function RymelExperience({ onBack }: RymelExperienceProps) {
  const rymelWebsite =
    "https://rymel.com.co/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaf9KGkS_250DrmYv4IPC7WuKPGVgT34SEjEHIW91vObaH3JJwWWTqLNp5t1TQ_aem_OXC3kQgjk0IgEdIyLvcoJw";
  const rymelInstagram = "https://www.instagram.com/rymel.sas/?hl=es";

  return (
    <div className="w-full h-full flex flex-col justify-between p-3.5 md:p-5 lg:p-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between shrink-0 pb-3 border-b border-gray-200/80 gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-gray-800 hover:text-black hover:bg-gray-100 border border-gray-300 shadow-sm text-xs md:text-sm font-bold transition-all cursor-pointer group"
          >
            <ArrowLeft
              size={15}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            <span>Volver a Proyectos</span>
          </button>
          <span className="hidden sm:inline-block h-4 w-px bg-gray-300" />
          <h2 className="hidden sm:inline-block text-lg md:text-xl font-black text-gray-900 tracking-tight">
            RYMEL SAS
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-200 text-[11px] md:text-xs font-extrabold tracking-wider uppercase shadow-xs">
          <span>B2B INDUSTRIAL • ECOSISTEMA 360° • 2025–2026</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={rymelInstagram}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-black hover:text-white transition-all shadow-sm"
            title="Instagram RYMEL"
          >
            <Instagram size={15} />
          </a>
          <a
            href={rymelWebsite}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-bold shadow-sm transition-all"
            title="Sitio Web Oficial"
          >
            <Globe size={14} />
            <span className="hidden md:inline">Web Oficial</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Main 2-Column Content: Larger readable text, balanced spacing, ZERO scroll */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4 xl:gap-5 flex-1 min-h-0 pt-3 items-stretch">
        {/* Left Column: Context, Metrics & Specialties */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-6 bg-white/95 rounded-[1.75rem] border border-blue-100 shadow-md p-4 md:p-5 flex flex-col justify-between h-full min-h-0 overflow-hidden"
        >
          {/* Header, Subtitle & Story */}
          <div className="space-y-2 shrink-0">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              RYMEL SAS
            </h1>
            <p className="text-xs md:text-sm xl:text-[15px] font-bold text-blue-600 leading-snug">
              Modernización del Ecosistema Digital & Automatización Comercial
              para Líderes de Energía en Colombia.
            </p>
            <p className="text-gray-700 text-xs md:text-[13px] xl:text-[14px] leading-relaxed">
              Lideré la renovación integral de la identidad institucional y la
              infraestructura digital de RYMEL SAS, referente nacional con más
              de 40 años en la fabricación de transformadores y soluciones de
              energía. Unifiqué su presencia corporativa conectando diseño visual
              de alto impacto con herramientas comerciales automatizadas.
            </p>
          </div>

          {/* 3 Metrics Row */}
          <div className="grid grid-cols-3 gap-2 md:gap-3 p-3 md:p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/80 to-blue-50/90 border border-blue-200/80 my-2 shrink-0">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-blue-600 mb-0.5">
                <TrendingUp size={16} />
                <span className="text-base md:text-xl xl:text-2xl font-black text-gray-900">
                  +100%
                </span>
              </div>
              <p className="text-[11px] md:text-xs xl:text-[13px] font-bold text-gray-600 leading-tight">
                Leads Medibles
              </p>
            </div>
            <div className="text-center border-x border-blue-200">
              <div className="flex items-center justify-center gap-1.5 text-blue-600 mb-0.5">
                <Award size={16} />
                <span className="text-base md:text-xl xl:text-2xl font-black text-gray-900">
                  40+ Años
                </span>
              </div>
              <p className="text-[11px] md:text-xs xl:text-[13px] font-bold text-gray-600 leading-tight">
                Marca Renovada
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-blue-600 mb-0.5">
                <Layers size={16} />
                <span className="text-base md:text-xl xl:text-2xl font-black text-gray-900">
                  15+
                </span>
              </div>
              <p className="text-[11px] md:text-xs xl:text-[13px] font-bold text-gray-600 leading-tight">
                Plantillas & UI
              </p>
            </div>
          </div>

          {/* Tags: Especialidades Aplicadas */}
          <div className="space-y-1.5 shrink-0">
            <h4 className="text-[11px] md:text-xs font-extrabold text-gray-500 uppercase tracking-wider">
              ESPECIALIDADES APLICADAS
            </h4>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {[
                "Zoho",
                "Branding Institucional",
                "Plantillas HTML",
                "Merchandising Institucional",
                "Estrategia B2B",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs md:text-[12.5px] font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Desafío, Solución y Ejecución, Impacto */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="lg:col-span-6 flex flex-col justify-between gap-2.5 md:gap-3 h-full min-h-0 overflow-hidden"
        >
          {/* 1. EL DESAFÍO ESTRATÉGICO */}
          <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-3.5 md:p-4 flex-1 flex flex-col justify-center min-h-0">
            <h3 className="text-xs md:text-sm xl:text-[15px] font-extrabold text-rose-900 flex items-center gap-2 mb-1">
              <span>🔴</span> EL DESAFÍO ESTRATÉGICO
            </h3>
            <p className="text-gray-700 text-xs md:text-[13px] xl:text-[14px] leading-relaxed">
              Aunque la empresa gozaba de gran prestigio en el sector industrial,
              su ecosistema digital estaba fragmentado: falta de trazabilidad en
              ventas, plantillas desactualizadas y materiales corporativos que no
              transmitían su verdadero liderazgo tecnológico.
            </p>
          </div>

          {/* 2. SOLUCIÓN & EJECUCIÓN TÉCNICA */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-3.5 md:p-4 flex-[1.4] flex flex-col justify-center min-h-0">
            <h3 className="text-xs md:text-sm xl:text-[15px] font-extrabold text-emerald-900 flex items-center gap-2 mb-1.5">
              <span>🟢</span> SOLUCIÓN & EJECUCIÓN TÉCNICA
            </h3>
            <ul className="space-y-1.5 text-xs md:text-[12.5px] xl:text-[13.5px] text-gray-700">
              <li className="grid grid-cols-[140px_1fr] sm:grid-cols-[150px_1fr] xl:grid-cols-[160px_1fr] items-start gap-2">
                <span className="font-bold text-emerald-950 shrink-0">
                  • Zoho:
                </span>
                <span>
                  Embudos comerciales, email marketing, endomarketing y
                  automatización de seguimiento de prospectos.
                </span>
              </li>
              <li className="grid grid-cols-[140px_1fr] sm:grid-cols-[150px_1fr] xl:grid-cols-[160px_1fr] items-start gap-2">
                <span className="font-bold text-emerald-950 shrink-0">
                  • Identidad & Presencia:
                </span>
                <span>
                  Marketing institucional, plantillas HTML, souvenirs y
                  posicionamiento en la feria FISE de Plaza Mayor.
                </span>
              </li>
              <li className="grid grid-cols-[140px_1fr] sm:grid-cols-[150px_1fr] xl:grid-cols-[160px_1fr] items-start gap-2">
                <span className="font-bold text-emerald-950 shrink-0">
                  • Web Corporativa:
                </span>
                <span>
                  Estructuración visual orientada a captar clientes B2B de gran
                  escala.
                </span>
              </li>
            </ul>
          </div>

          {/* 3. IMPACTO TANGIBLE */}
          <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-3.5 md:p-4 flex-1 flex flex-col justify-center min-h-0">
            <h3 className="text-xs md:text-sm xl:text-[15px] font-extrabold text-blue-900 flex items-center gap-2 mb-1">
              <span>🔵</span> IMPACTO TANGIBLE
            </h3>
            <p className="text-gray-700 text-xs md:text-[13px] xl:text-[14px] leading-relaxed">
              Consolidación de una imagen corporativa sólida y uniforme que
              aumentó la confianza de clientes multinacionales y aceleró el
              cierre de acuerdos comerciales.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
