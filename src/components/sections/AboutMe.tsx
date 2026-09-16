"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Code,
  PenTool,
  BarChart3,
  Presentation,
  Target,
  Award,
} from "lucide-react";

export function AboutMe() {
  const stack = [
    {
      label: "ESTRATEGIA",
      icon: <Presentation size={19} className="text-amber-600" />,
      bg: "bg-amber-50 border-amber-200/80",
      desc: "Modelos de negocio & crecimiento",
    },
    {
      label: "DISEÑO",
      icon: <PenTool size={19} className="text-teal-600" />,
      bg: "bg-teal-50 border-teal-200/80",
      desc: "UI/UX & Identidad Visual",
    },
    {
      label: "CONTENIDO",
      icon: <Zap size={19} className="text-orange-600" />,
      bg: "bg-orange-50 border-orange-200/80",
      desc: "Storytelling & Fotografía",
    },
    {
      label: "TECNOLOGÍA",
      icon: <Code size={19} className="text-purple-600" />,
      bg: "bg-purple-50 border-purple-200/80",
      desc: "Shopify, WordPress & Web",
    },
    {
      label: "DATOS",
      icon: <BarChart3 size={19} className="text-blue-600" />,
      bg: "bg-blue-50 border-blue-200/80",
      desc: "Métricas & Analítica CRM",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-7 xl:p-8 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full my-auto flex flex-col gap-3 md:gap-4">
        {/* ── Top Header: Identical margins, hierarchy & alignment as Servicios, Metodología, Herramientas ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-gray-900 tracking-tight leading-tight mb-1 md:mb-1.5">
            Diseño que{" "}
            <span className="text-blue-600 font-extrabold">escala negocios</span>
          </h2>
          <p className="text-gray-700 text-xs md:text-sm lg:text-[15px] font-medium max-w-2xl leading-relaxed">
            Fusión de creatividad y métricas: combino diseño visual de alto
            impacto con estrategias comerciales orientadas a resultados reales.
          </p>
        </motion.div>

        {/* ── Middle: 2 Value Proposition Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 md:gap-4">
          {/* Card 1: ¿Qué puedo hacer por tu negocio? */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.35 }}
            className="bg-white/95 backdrop-blur-2xl p-4 md:p-5 rounded-[1.8rem] border border-white/80 text-gray-900 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-2 border border-amber-200 shadow-xs">
                <Target size={19} />
              </div>
              <h3 className="text-base md:text-lg font-extrabold mb-1 text-gray-900 leading-snug">
                ¿Qué puedo hacer por tu negocio?
              </h3>
              <p className="text-gray-700 text-xs md:text-[13px] leading-relaxed font-medium">
                Entiendo tu modelo de negocio, pienso la estrategia, diseño la
                experiencia visual, configuro las plataformas y optimizo
                continuamente con datos reales.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-bold">
              <span>Visión Holística</span>
              <span className="text-amber-700 font-bold">
                Orientado a Objetivos
              </span>
            </div>
          </motion.div>

          {/* Card 2: Mi Filosofía */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.35 }}
            className="bg-white/95 backdrop-blur-2xl p-4 md:p-5 rounded-[1.8rem] border border-teal-200/80 text-gray-900 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all"
          >
            <div>
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-2 border border-teal-200 shadow-xs">
                <Award size={19} />
              </div>
              <h3 className="text-base md:text-lg font-extrabold mb-0.5 text-gray-900 leading-snug">
                Mi Filosofía
              </h3>
              <p className="text-teal-700 font-bold text-xs mb-1">
                "Si no se puede medir, no es estrategia."
              </p>
              <p className="text-gray-700 text-xs md:text-[13px] leading-relaxed font-medium">
                Diseño con propósito claro. Cada decisión estética responde a un
                objetivo de conversión o retención de clientes.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-bold">
              <span>Diseño + Datos</span>
              <span className="text-teal-700 font-bold">
                Retorno de Inversión
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom: El Ecosistema Completo ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.24, duration: 0.35 }}
          className="w-full"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px bg-gray-200/80 flex-1 max-w-32 sm:max-w-44" />
            <span className="text-[11px] md:text-xs font-black tracking-widest text-gray-500 uppercase">
              El Ecosistema Completo
            </span>
            <div className="h-px bg-gray-200/80 flex-1 max-w-32 sm:max-w-44" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 md:gap-3">
            {stack.map((item) => (
              <div
                key={item.label}
                className="bg-white/95 backdrop-blur-xl p-3 md:p-3.5 rounded-2xl border border-gray-100 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-gray-900 text-center flex flex-col items-center justify-center group"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${item.bg} border flex items-center justify-center mb-1.5 shadow-2xs group-hover:scale-105 transition-transform`}
                >
                  {item.icon}
                </div>
                <h4 className="text-xs md:text-[13px] font-black tracking-wider mb-0.5 text-gray-900">
                  {item.label}
                </h4>
                <p className="text-[10.5px] md:text-[11px] text-gray-600 font-medium leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
