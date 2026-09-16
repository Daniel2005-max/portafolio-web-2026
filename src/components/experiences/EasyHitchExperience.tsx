"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Instagram,
  Globe,
  Eye,
  TrendingUp,
  MessageSquare,
} from "lucide-react";

interface EasyHitchExperienceProps {
  onBack: () => void;
}

export function EasyHitchExperience({ onBack }: EasyHitchExperienceProps) {
  const easyHitchWebsite = "https://easyhitch.com.co/";
  const easyHitchInstagram =
    "https://www.instagram.com/easyhitchoficial/?hl=es";

  return (
    <div className="w-full h-full flex flex-col justify-between p-3.5 md:p-5 lg:p-6 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/40">
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
            Easy Hitch
          </h2>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-[11px] md:text-xs font-extrabold tracking-wider uppercase shadow-xs">
          <span>E-COMMERCE & PAID SOCIAL • CONVERSIÓN • 2025–2026</span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={easyHitchInstagram}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-black hover:text-white transition-all shadow-sm"
            title="Instagram Easy Hitch"
          >
            <Instagram size={15} />
          </a>
          <a
            href={easyHitchWebsite}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-600 text-black text-xs md:text-sm font-bold shadow-sm transition-all"
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
        {/* Left Column: Context, Metrics & Tools */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-6 bg-white/95 rounded-[1.75rem] border border-amber-100 shadow-md p-4 md:p-5 flex flex-col justify-between h-full min-h-0 overflow-hidden"
        >
          {/* Header, Subtitle & Story */}
          <div className="space-y-2 shrink-0">
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Easy Hitch
            </h1>
            <p className="text-xs md:text-sm xl:text-[15px] font-bold text-amber-700 leading-snug">
              Estrategia de Escalamiento Digital & Campañas de Rendimiento en
              Meta Ads para Accesorios Automotrices.
            </p>
            <p className="text-gray-700 text-xs md:text-[13px] xl:text-[14px] leading-relaxed">
              Diseñé e implementé la estrategia de crecimiento digital para Easy
              Hitch, marca especializada en tiros de arrastre y accesorios de
              remolque para camionetas y SUVs. A través de contenido audiovisual
              dinámico y embudos de pauta publicitaria en Meta Ads, transformamos
              un producto técnico de nicho en una marca altamente deseable y con
              ventas directas predecibles.
            </p>
          </div>

          {/* 3 Metrics Row */}
          <div className="grid grid-cols-3 gap-2 md:gap-3 p-3 md:p-3.5 rounded-2xl bg-gradient-to-r from-amber-50/90 via-orange-50/80 to-amber-50/90 border border-amber-200/80 my-2 shrink-0">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-amber-700 mb-0.5">
                <Eye size={16} />
                <span className="text-base md:text-xl xl:text-2xl font-black text-gray-900">
                  +53.9K
                </span>
              </div>
              <p className="text-[11px] md:text-xs xl:text-[13px] font-bold text-gray-600 leading-tight">
                Vistas (28D)
              </p>
            </div>
            <div className="text-center border-x border-amber-200">
              <div className="flex items-center justify-center gap-1.5 text-amber-700 mb-0.5">
                <TrendingUp size={16} />
                <span className="text-base md:text-xl xl:text-2xl font-black text-gray-900">
                  +7.7K
                </span>
              </div>
              <p className="text-[11px] md:text-xs xl:text-[13px] font-bold text-gray-600 leading-tight">
                Por Publicación
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 text-amber-700 mb-0.5">
                <MessageSquare size={16} />
                <span className="text-base md:text-xl xl:text-2xl font-black text-gray-900">
                  +100%
                </span>
              </div>
              <p className="text-[11px] md:text-xs xl:text-[13px] font-bold text-gray-600 leading-tight">
                Leads WhatsApp
              </p>
            </div>
          </div>

          {/* Tags: Canales & Herramientas */}
          <div className="space-y-1.5 shrink-0">
            <h4 className="text-[11px] md:text-xs font-extrabold text-gray-500 uppercase tracking-wider">
              CANALES & HERRAMIENTAS
            </h4>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {[
                "Meta Ads Manager",
                "Reels & Video Storytelling",
                "WhatsApp Business Automation",
                "Auditoría UX / WordPress",
                "Funnels de Conversión",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs md:text-[12.5px] font-semibold px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Desafío, Estrategia & Solución, Impacto */}
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
              Baja tasa de conversión en la tienda digital, publicaciones en
              redes con poco alcance orgánico y un proceso de ventas dependiente
              de llamadas telefónicas sin automatización comercial.
            </p>
          </div>

          {/* 2. ESTRATEGIA & SOLUCIÓN IMPLEMENTADA */}
          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-3.5 md:p-4 flex-[1.4] flex flex-col justify-center min-h-0">
            <h3 className="text-xs md:text-sm xl:text-[15px] font-extrabold text-amber-900 flex items-center gap-2 mb-1.5">
              <span>🟡</span> ESTRATEGIA & SOLUCIÓN IMPLEMENTADA
            </h3>
            <ul className="space-y-1.5 text-xs md:text-[12.5px] xl:text-[13.5px] text-gray-700">
              <li className="grid grid-cols-[140px_1fr] sm:grid-cols-[150px_1fr] xl:grid-cols-[160px_1fr] items-start gap-2">
                <span className="font-bold text-amber-950 shrink-0">
                  • Meta Ads:
                </span>
                <span>
                  Campañas orientadas por intereses automotrices (Toyota, Ford,
                  Renault) y audiencias similares de compradores.
                </span>
              </li>
              <li className="grid grid-cols-[140px_1fr] sm:grid-cols-[150px_1fr] xl:grid-cols-[160px_1fr] items-start gap-2">
                <span className="font-bold text-amber-950 shrink-0">
                  • Reels & Video:
                </span>
                <span>
                  Storytelling demostrativo: resistencia de materiales, pruebas
                  de carga y facilidad de instalación.
                </span>
              </li>
              <li className="grid grid-cols-[140px_1fr] sm:grid-cols-[150px_1fr] xl:grid-cols-[160px_1fr] items-start gap-2">
                <span className="font-bold text-amber-950 shrink-0">
                  • WhatsApp Auto:
                </span>
                <span>
                  Enrutamiento inmediato desde anuncios para cotizaciones
                  automáticas en menos de 2 minutos.
                </span>
              </li>
            </ul>
          </div>

          {/* 3. IMPACTO TANGIBLE */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-3.5 md:p-4 flex-1 flex flex-col justify-center min-h-0">
            <h3 className="text-xs md:text-sm xl:text-[15px] font-extrabold text-emerald-900 flex items-center gap-2 mb-1">
              <span>🟢</span> IMPACTO TANGIBLE
            </h3>
            <p className="text-gray-700 text-xs md:text-[13px] xl:text-[14px] leading-relaxed">
              Incremento del 100% en mensajes entrantes calificados,
              posicionamiento como marca de referencia en tiros de arrastre en
              Colombia y récord histórico de ventas mensuales.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
