"use client";

import { motion } from "framer-motion";
import { TrendingUp, PenTool, ShoppingBag, Zap } from "lucide-react";

export function ServicesGrid() {
  const services = [
    {
      id: "01",
      title: "Marketing",
      subtitle: "Adquisición & Ads",
      color: "text-amber-600",
      icon: <TrendingUp className="w-5 h-5 text-amber-600" />,
      description: "Campañas en Meta Ads y Google Ads con optimización continua y análisis de métricas para maximizar el retorno.",
      items: [
        "Campañas en Meta Ads y Google Ads",
        "Análisis de métricas y optimización continua",
        "Estrategia de contenido para redes sociales"
      ]
    },
    {
      id: "02",
      title: "Diseño Visual",
      subtitle: "UI/UX & Branding",
      color: "text-teal-600",
      icon: <PenTool className="w-5 h-5 text-teal-600" />,
      description: "Construcción de identidad visual sólida y diseño de tiendas e-commerce optimizadas en Shopify y WordPress.",
      items: [
        "Identidad visual completa",
        "Diseño de tiendas Shopify / WordPress",
        "Material gráfico digital e impreso"
      ]
    },
    {
      id: "03",
      title: "E-Commerce",
      subtitle: "Ventas & Conversión",
      color: "text-purple-600",
      icon: <ShoppingBag className="w-5 h-5 text-purple-600" />,
      description: "Optimización de experiencia móvil, fotografía de catálogo y reducción de fricción en el proceso de compra.",
      items: [
        "Optimización de experiencia móvil",
        "Catálogo con fotografía y edición masiva",
        "Reducción de fricción en la compra"
      ]
    },
    {
      id: "04",
      title: "CRM & Auto",
      subtitle: "Procesos & Lealtad",
      color: "text-orange-600",
      icon: <Zap className="w-5 h-5 text-orange-600" />,
      description: "Implementación de CRM y flujos automáticos de seguimiento y recuperación de carritos por WhatsApp.",
      items: [
        "Implementación de Zoho CRM o Kommo",
        "Flujos automáticos de seguimiento comercial",
        "Recuperación de carritos por WhatsApp"
      ]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 xl:p-10 overflow-y-auto hide-scrollbar">
      <div className="max-w-6xl mx-auto w-full my-auto">
        <div className="mb-6 md:mb-8 text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
            Lo que <span className="text-blue-600 font-extrabold">ofrezco</span>
          </h2>
          <p className="text-gray-700 text-sm md:text-base font-medium max-w-3xl leading-relaxed">
            Cada servicio está diseñado para generar resultados medibles.
            <br className="hidden sm:inline" /> No trabajo por tareas sueltas — trabajo por objetivos de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-white/95 backdrop-blur-2xl rounded-[2.2rem] p-6 border border-white/80 shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all"
            >
              <div>
                {/* Header inside card - ToolsSection style */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg md:text-xl text-gray-900 leading-tight">{service.title}</h3>
                    <p className={`text-xs font-bold uppercase tracking-wider ${service.color}`}>{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-700 font-medium text-xs md:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-xs text-gray-800 font-bold flex items-start gap-2">
                      <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-blue-600 shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
