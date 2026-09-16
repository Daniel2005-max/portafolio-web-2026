"use client";

import { motion } from "framer-motion";
import { PenTool, TrendingUp, ShoppingBag, BarChart3, Code, Link } from "lucide-react";

export function ToolsSection() {
  const toolsStack = [
    {
      title: "Diseño",
      subtitle: "Visual & Prototipado",
      color: "text-purple-700",
      numColor: "text-purple-500",
      bg: "border-purple-200",
      icon: <PenTool className="w-5 h-5 text-purple-600" />,
      primary: ["Canva", "Adobe Express", "CapCut"],
      secondary: ["Figma", "Suite Adobe", "Affinity"]
    },
    {
      title: "Marketing",
      subtitle: "Adquisición & Analítica",
      color: "text-amber-700",
      numColor: "text-amber-500",
      bg: "border-amber-200",
      icon: <TrendingUp className="w-5 h-5 text-amber-600" />,
      primary: ["Meta Ads", "Google Tag Manager"],
      secondary: ["Google Ads"]
    },
    {
      title: "E-Commerce",
      subtitle: "Plataformas de Ventas",
      color: "text-teal-700",
      numColor: "text-teal-500",
      bg: "border-teal-200",
      icon: <ShoppingBag className="w-5 h-5 text-teal-600" />,
      primary: ["Shopify", "WordPress"],
      secondary: ["WooCommerce"]
    },
    {
      title: "Analítica",
      subtitle: "Datos & BI",
      color: "text-orange-700",
      numColor: "text-orange-500",
      bg: "border-orange-200",
      icon: <BarChart3 className="w-5 h-5 text-orange-600" />,
      primary: ["Google Analytics", "Microsoft Excel"],
      secondary: ["Power BI", "Google Sheets"]
    },
    {
      title: "Desarrollo",
      subtitle: "Código & IA Generativa",
      color: "text-blue-700",
      numColor: "text-blue-500",
      bg: "border-blue-200",
      icon: <Code className="w-5 h-5 text-blue-600" />,
      primary: ["IA Generativa", "HTML / CSS"],
      secondary: ["JavaScript", "GitHub", "APIs"]
    },
    {
      title: "Automatización",
      subtitle: "CRM & Operaciones",
      color: "text-green-700",
      numColor: "text-green-500",
      bg: "border-green-200",
      icon: <Link className="w-5 h-5 text-green-600" />,
      primary: ["Zoho CRM", "Kommo"],
      secondary: ["WhatsApp Business"]
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 xl:p-10 overflow-y-auto hide-scrollbar">
      <div className="max-w-6xl mx-auto w-full my-auto">

        {/* Header */}
        <div className="mb-6 md:mb-8 text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
            Stack <span className="text-purple-600 font-extrabold">Tecnológico</span>
          </h2>
          <p className="text-gray-700 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            Herramientas que domino para convertir ideas y estrategias en soluciones digitales reales y medibles.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {toolsStack.map((tool, idx) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className={`bg-white/95 backdrop-blur-xl p-5 md:p-6 rounded-[2rem] border shadow-lg hover:shadow-xl transition-all ${tool.bg}`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-gray-900 leading-tight">{tool.title}</h3>
                  <p className={`text-xs font-bold uppercase tracking-wider ${tool.color}`}>{tool.subtitle}</p>
                </div>
              </div>

              {/* Primary tags */}
              <div className="mb-3">
                <div className="flex flex-wrap gap-2">
                  {tool.primary.map(tag => (
                    <span key={tag} className={`text-xs px-3 py-1 rounded-full font-bold border shadow-sm ${tool.bg} ${tool.color} bg-white`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Secondary tags */}
              {tool.secondary.length > 0 && (
                <div>
                  <div className="flex flex-wrap gap-2">
                    {tool.secondary.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full font-semibold bg-gray-100 border border-gray-200 text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
