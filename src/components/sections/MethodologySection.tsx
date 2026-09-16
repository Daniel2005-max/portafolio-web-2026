"use client";

import { motion } from "framer-motion";
import { Search, Compass, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";

export function MethodologySection() {
  const processSteps = [
    {
      title: "Diagnóstico",
      subtitle: "Auditoría & Embudo",
      color: "text-amber-600",
      cardBorder: "border-amber-200/80 hover:border-amber-400",
      icon: <Search className="w-5 h-5 text-amber-600" />,
      desc: "Entendemos tu modelo de negocio, audiencias y objetivos. Analizo qué funciona y detecto fugas de conversión.",
      outputs: ["Auditoría de Embudo", "Análisis de Competencia", "Diagnóstico de KPIs"]
    },
    {
      title: "Estrategia",
      subtitle: "Plan & Metas",
      color: "text-teal-600",
      cardBorder: "border-teal-200/80 hover:border-teal-400",
      icon: <Compass className="w-5 h-5 text-teal-600" />,
      desc: "Diseño un plan personalizado con acciones concretas, herramientas específicas y métricas claras de éxito.",
      outputs: ["Roadmap a 90 Días", "Selección de Stack", "Arquitectura de Conversión"]
    },
    {
      title: "Ejecución",
      subtitle: "Diseño & Despliegue",
      color: "text-orange-600",
      cardBorder: "border-orange-200/80 hover:border-orange-400",
      icon: <Rocket className="w-5 h-5 text-orange-600" />,
      desc: "Implemento todo lo acordado con precisión. Diseño interfaces, configuro plataformas, lanzo y optimizo en tiempo real.",
      outputs: ["Construcción UI/UX", "Campañas Meta & Google", "Automatización CRM"]
    },
    {
      title: "Resultados",
      subtitle: "ROI & Dashboards",
      color: "text-purple-600",
      cardBorder: "border-purple-200/80 hover:border-purple-400",
      icon: <TrendingUp className="w-5 h-5 text-purple-600" />,
      desc: "Entrego reportes claros y ajustamos continuamente la estrategia para maximizar tu retorno de inversión (ROI).",
      outputs: ["Dashboards de Métricas", "Pruebas A/B Continuas", "Optimización de ROI"]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 xl:p-10 overflow-y-auto hide-scrollbar">
      <div className="max-w-6xl mx-auto w-full my-auto">

        {/* Header */}
        <div className="mb-6 md:mb-8 text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
            Mi proceso, <span className="text-amber-600 font-extrabold">tus resultados</span>
          </h2>
          <p className="text-gray-700 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            Metodología estructurada en 4 pasos claros. Cada etapa construye sobre la anterior para asegurar ejecución sin fricciones y crecimiento medible.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className={`bg-white/95 backdrop-blur-2xl p-6 rounded-[2.2rem] border shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 ${step.cardBorder} group`}
            >
              <div>
                {/* Header inside card - ToolsSection style */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg md:text-xl text-gray-900 leading-tight">{step.title}</h3>
                    <p className={`text-xs font-bold uppercase tracking-wider ${step.color}`}>{step.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-xs md:text-sm font-medium leading-relaxed mb-5">
                  {step.desc}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400">
                  Entregables clave
                </span>
                {step.outputs.map((out, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gray-900 shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
