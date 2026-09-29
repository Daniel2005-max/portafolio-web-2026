"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Instagram,
  Facebook,
  Globe,
  Camera,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";

interface BdcExperienceProps {
  onBack: () => void;
}

export function BdcExperience({ onBack }: BdcExperienceProps) {
  const bdcWebsite = "https://www.labodegadelcarguero.com";
  const bdcInstagram = "https://www.instagram.com/labodegadelcarguero/?hl=es";
  const bdcFacebook =
    "https://www.facebook.com/share/1GzZSyk7Rk/?mibextid=wwXIfr";

  return (
    <div className="w-full h-full flex flex-col justify-start lg:justify-between p-3.5 md:p-5 lg:p-6 overflow-y-auto hide-scrollbar bg-gradient-to-br from-slate-50 via-white to-green-50/40 pb-36 lg:pb-6">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between shrink-0 pb-3 border-b border-gray-200/80 gap-2 md:gap-3">
        <div className="flex items-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white text-gray-800 hover:text-black hover:bg-gray-100 border border-gray-300 shadow-sm text-xs md:text-sm font-bold transition-all cursor-pointer touch-manipulation group shrink-0"
          >
            <ArrowLeft
              size={15}
              className="group-hover:-translate-x-0.5 transition-transform shrink-0"
            />
            <span>Volver<span className="hidden sm:inline"> a Proyectos</span></span>
          </button>
          <span className="hidden sm:inline-block h-4 w-px bg-gray-300" />
          <h2 className="hidden sm:inline-block text-lg md:text-xl font-black text-gray-900 tracking-tight">
            Bodega del Carguero
          </h2>
        </div>

        {/* Category Pill: Hidden on mobile header, shown as desktop badge */}
        <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-green-100 text-green-900 border border-green-200 text-[11px] md:text-xs font-extrabold tracking-wider uppercase shadow-xs">
          <span>CONVERSIÓN SHOPIFY & FOTOGRAFÍA • E-COMMERCE • 2025–2026</span>
        </div>

        <div className="flex items-center gap-1.5 md:gap-2 shrink-0">
          <a
            href={bdcInstagram}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-black hover:text-white transition-all shadow-sm"
            title="Instagram Bodega del Carguero"
          >
            <Instagram size={15} />
          </a>
          <a
            href={bdcFacebook}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-white text-gray-700 border border-gray-200 hover:bg-[#1877F2] hover:text-white transition-all shadow-sm"
            title="Facebook Bodega del Carguero"
          >
            <Facebook size={15} />
          </a>
          <a
            href={bdcWebsite}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 md:px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs md:text-sm font-bold shadow-sm transition-all"
            title="Sitio Web Oficial"
          >
            <Globe size={14} />
            <span className="hidden md:inline">Web Oficial</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Main Content: Flowing vertical on mobile, 2-column zero-scroll on desktop */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-3.5 md:gap-4 xl:gap-5 flex-1 min-h-0 pt-3 items-stretch pb-28 lg:pb-0">
        {/* Left Column: Context, Metrics & Tools */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="lg:col-span-6 bg-white/95 rounded-2xl md:rounded-[1.75rem] border border-green-100 shadow-md p-4 md:p-5 flex flex-col justify-between h-auto lg:h-full min-h-0 overflow-visible lg:overflow-hidden shrink-0 gap-3"
        >
          {/* Header, Subtitle & Story */}
          <div className="space-y-2 shrink-0">
            {/* Mobile Category Badge */}
            <div className="md:hidden inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-100 text-green-900 border border-green-200 text-[10px] font-extrabold tracking-wider uppercase mb-1">
              <span>CONVERSIÓN SHOPIFY & FOTOGRAFÍA</span>
            </div>

            <h1 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 tracking-tight leading-tight">
              Bodega del Carguero
            </h1>
            <p className="text-xs md:text-sm xl:text-[15px] font-bold text-emerald-800 leading-snug">
              Estructuración de Catálogo Digital, Fotografía de Producto &
              Automatización Shopify.
            </p>
            <p className="text-gray-700 text-xs md:text-[13px] xl:text-[14px] leading-relaxed">
              Transformé una operación comercial tradicional de venta de
              motocargueros y repuestos en una tienda virtual moderna sobre
              Shopify. Estandarizamos el inventario visual de más de 400
              referencias entre vehículos y repuestos (originales, genéricos y
              de marca propia BDC) mediante fotografía profesional y retoque
              digital, configurando simultáneamente la integración con Kommo CRM
              para el cierre sistemático de ventas por mensajería directa.
            </p>
          </div>

          {/* 3 Metrics Row */}
          <div className="grid grid-cols-3 gap-2 md:gap-3 p-3 md:p-3.5 rounded-2xl bg-gradient-to-r from-green-50/90 via-emerald-50/80 to-green-50/90 border border-green-200/80 my-1 md:my-2 shrink-0">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-700 mb-0.5">
                <Camera size={15} />
                <span className="text-sm xs:text-base md:text-xl xl:text-2xl font-black text-gray-900">
                  +500
                </span>
              </div>
              <p className="text-[10px] xs:text-[11px] md:text-xs xl:text-[13px] font-bold text-gray-600 leading-tight">
                Fotos Retocadas
              </p>
            </div>
            <div className="text-center border-x border-green-200">
              <div className="flex items-center justify-center gap-1 text-emerald-700 mb-0.5">
                <ShoppingBag size={15} />
                <span className="text-sm xs:text-base md:text-xl xl:text-2xl font-black text-gray-900">
                  438+
                </span>
              </div>
              <p className="text-[10px] xs:text-[11px] md:text-xs xl:text-[13px] font-bold text-gray-600 leading-tight">
                Ref. Shopify
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-emerald-700 mb-0.5">
                <CheckCircle2 size={15} />
                <span className="text-sm xs:text-base md:text-xl xl:text-2xl font-black text-gray-900">
                  Kommo
                </span>
              </div>
              <p className="text-[10px] xs:text-[11px] md:text-xs xl:text-[13px] font-bold text-gray-600 leading-tight">
                CRM Activo
              </p>
            </div>
          </div>

          {/* Tags: Canales & Herramientas */}
          <div className="space-y-1.5 shrink-0">
            <h4 className="text-[10px] md:text-xs font-extrabold text-gray-500 uppercase tracking-wider">
              CANALES & HERRAMIENTAS
            </h4>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {[
                "Shopify E-Commerce",
                "Retoque Photoshop",
                "Kommo CRM",
                "Fotografía de Producto",
                "Optimización de Checkout",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] md:text-[12.5px] font-semibold px-2.5 md:px-3 py-0.5 md:py-1 rounded-full bg-green-50 text-green-900 border border-green-200 shadow-2xs"
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
          className="lg:col-span-6 flex flex-col justify-between gap-3 h-auto lg:h-full min-h-0 overflow-visible lg:overflow-hidden shrink-0"
        >
          {/* 1. EL DESAFÍO ESTRATÉGICO */}
          <div className="bg-rose-50/80 border border-rose-200 rounded-2xl p-3.5 md:p-4 flex-1 flex flex-col justify-center min-h-0 shrink-0">
            <h3 className="text-xs md:text-sm xl:text-[15px] font-extrabold text-rose-900 flex items-center gap-2 mb-1">
              <span>🔴</span> EL DESAFÍO ESTRATÉGICO
            </h3>
            <p className="text-gray-700 text-xs md:text-[13px] xl:text-[14px] leading-relaxed">
              Falta de catálogo digital organizado, imágenes de baja calidad
              tomadas con celular que restaban credibilidad a la marca y pérdida
              constante de clientes potenciales que abandonaban el carrito de
              compra.
            </p>
          </div>

          {/* 2. ESTRATEGIA & SOLUCIÓN IMPLEMENTADA */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-3.5 md:p-4 flex-[1.4] flex flex-col justify-center min-h-0 shrink-0">
            <h3 className="text-xs md:text-sm xl:text-[15px] font-extrabold text-emerald-900 flex items-center gap-2 mb-1.5">
              <span>🟢</span> ESTRATEGIA & SOLUCIÓN IMPLEMENTADA
            </h3>
            <ul className="space-y-2 text-xs md:text-[12.5px] xl:text-[13.5px] text-gray-700">
              <li className="flex flex-col sm:grid sm:grid-cols-[140px_1fr] xl:grid-cols-[160px_1fr] items-start gap-0.5 sm:gap-2">
                <span className="font-bold text-emerald-950 shrink-0">
                  • Foto & Retoque:
                </span>
                <span>
                  Producción y edición masiva de imágenes de motocargueros y
                  repuestos en alta resolución con fondo profesional neutro.
                </span>
              </li>
              <li className="flex flex-col sm:grid sm:grid-cols-[140px_1fr] xl:grid-cols-[160px_1fr] items-start gap-0.5 sm:gap-2">
                <span className="font-bold text-emerald-950 shrink-0">
                  • Shopify & UX:
                </span>
                <span>
                  Configuración de catálogo por categorías (vehículos,
                  repuestos originales, genéricos y marca BDC) y optimización de
                  checkout.
                </span>
              </li>
              <li className="flex flex-col sm:grid sm:grid-cols-[140px_1fr] xl:grid-cols-[160px_1fr] items-start gap-0.5 sm:gap-2">
                <span className="font-bold text-emerald-950 shrink-0">
                  • Kommo CRM:
                </span>
                <span>
                  Automatización de mensajes de seguimiento para carritos
                  abandonados y soporte en tiempo real.
                </span>
              </li>
            </ul>
          </div>

          {/* 3. IMPACTO TANGIBLE */}
          <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-3.5 md:p-4 flex-1 flex flex-col justify-center min-h-0 shrink-0">
            <h3 className="text-xs md:text-sm xl:text-[15px] font-extrabold text-blue-900 flex items-center gap-2 mb-1">
              <span>🔵</span> IMPACTO TANGIBLE
            </h3>
            <p className="text-gray-700 text-xs md:text-[13px] xl:text-[14px] leading-relaxed">
              La tienda pasó de operar como una cuenta informal a consolidarse
              como un canal de venta en línea confiable y profesional,
              triplicando la tasa de conversión en su primer trimestre.
            </p>
          </div>
        </motion.div>

        {/* Mobile bottom spacer: guarantees 'IMPACTO TANGIBLE' is completely clear of floating dock */}
        <div className="h-28 lg:hidden shrink-0 w-full" aria-hidden="true" />
      </div>
    </div>
  );
}
