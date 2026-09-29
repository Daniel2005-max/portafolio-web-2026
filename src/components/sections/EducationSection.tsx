"use client";

import { motion } from "framer-motion";
import {
  PenTool,
  ShoppingBag,
  TrendingUp,
  Sparkles,
  Award,
  GraduationCap,
} from "lucide-react";

interface CourseItem {
  name: string;
  institution: string;
  year: string;
}

interface CategoryPillar {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  dotColor: string;
  icon: React.ReactNode;
  courses: CourseItem[];
}

export function EducationSection() {
  const pillars: CategoryPillar[] = [
    {
      id: "diseno",
      title: "Diseño Visual",
      subtitle: "UI/UX & Multimedia",
      color: "text-teal-600",
      dotColor: "bg-teal-500",
      icon: <PenTool className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />,
      courses: [
        {
          name: "Diseño Gráfico",
          institution: "ATEC",
          year: "2023",
        },
        {
          name: "Dispositivos Móviles",
          institution: "ATEC",
          year: "2023",
        },
        {
          name: "Stop motion con dispositivos móviles",
          institution: "Medellín",
          year: "2026",
        },
      ],
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Tech",
      subtitle: "Plataformas & Seguridad",
      color: "text-purple-600",
      dotColor: "bg-purple-500",
      icon: <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />,
      courses: [
        {
          name: "Comercio electrónico",
          institution: "Google",
          year: "2026",
        },
        {
          name: "Ventas en Línea",
          institution: "HP LIFE - HPE",
          year: "2026",
        },
        {
          name: "Correo Electrónico Comercial",
          institution: "HP LIFE - HPE",
          year: "2026",
        },
        {
          name: "Competencias digitales para profesionales",
          institution: "Google",
          year: "2026",
        },
        {
          name: "Seguridad y Privacidad de la Información",
          institution: "TIC - GovTech",
          year: "2026",
        },
        {
          name: "Seguridad Digital",
          institution: "TIC - GovTech",
          year: "2026",
        },
      ],
    },
    {
      id: "estrategia",
      title: "Estrategia & Growth",
      subtitle: "Marketing & Conversión",
      color: "text-amber-600",
      dotColor: "bg-amber-500",
      icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />,
      courses: [
        {
          name: "Fundamentos de Marketing Digital",
          institution: "Google",
          year: "2026",
        },
        {
          name: "Marketing de Medios Sociales",
          institution: "HP LIFE - HPE",
          year: "2026",
        },
        {
          name: "Estándares y directrices para publicar información",
          institution: "TIC - GovTech",
          year: "2026",
        },
        {
          name: "Fortalecimiento de habilidades digitales avanzadas",
          institution: "Fundetec",
          year: "2026",
        },
        {
          name: "Email Marketing",
          institution: "HubSpot",
          year: "2026",
        },
      ],
    },
    {
      id: "ia",
      title: "IA & Innovación",
      subtitle: "Prompting & Analítica",
      color: "text-blue-600",
      dotColor: "bg-blue-600",
      icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />,
      courses: [
        {
          name: "Inteligencia Artificial Aplicada",
          institution: "TIC - GovTech",
          year: "2026",
        },
        {
          name: "ChatGPT Prompt",
          institution: "HP LIFE - HPE",
          year: "2026",
        },
        {
          name: "IA para profesionales de negocios",
          institution: "HP LIFE - HPE",
          year: "2026",
        },
        {
          name: "Ciencia y Análisis de Datos",
          institution: "HP LIFE - HPE",
          year: "2026",
        },
        {
          name: "Ecosistemas de Innovación",
          institution: "TIC - GovTech",
          year: "2026",
        },
      ],
    },
  ];

  const complementary = [
    {
      institution: "CESDE",
      period: "2024–2025",
      title: "Asesor comercial y de servicios",
    },
    {
      institution: "CEDE NORTE",
      period: "2022–2025",
      title: "Mecánica de motos",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between p-3.5 sm:p-5 md:p-6 lg:px-6 lg:py-3.5 overflow-y-auto hide-scrollbar pb-32 md:pb-6">
      <div className="max-w-6xl mx-auto w-full md:my-auto flex flex-col gap-2.5 md:gap-3.5">
        
        {/* ── Top Header ── */}
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-gray-900 tracking-tight mb-1 leading-tight">
            Aprendizaje Continuo,{" "}
            <span className="text-blue-600 font-extrabold">Certificaciones</span>
          </h2>
          <p className="text-gray-700 text-xs sm:text-sm font-medium max-w-3xl leading-relaxed">
            Respaldo técnico y metodológico continuo orientado a potenciar resultados en diseño visual, comercio electrónico, crecimiento e inteligencia artificial.
          </p>
        </div>

        {/* ── 4-Column Grid: Distribución exacta con espaciado optimizado ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-3.5 xl:gap-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-white/95 backdrop-blur-2xl rounded-[1.8rem] sm:rounded-[2rem] p-3.5 sm:p-4 lg:p-3.5 xl:p-4 border border-white/80 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all"
            >
              <div>
                {/* Header inside card - Estilo ServicesGrid */}
                <div className="flex items-center gap-2.5 mb-2 pb-1.5 border-b border-gray-100">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-2xs shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[15px] sm:text-base text-gray-900 leading-tight">
                      {pillar.title}
                    </h3>
                    <p
                      className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider ${pillar.color}`}
                    >
                      {pillar.subtitle}
                    </p>
                  </div>
                </div>

                {/* Courses List - Lista limpia, legible y proporcionada */}
                <ul className="space-y-1.5">
                  {pillar.courses.map((course, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div
                        className={`w-1.5 h-1.5 mt-1 rounded-full ${pillar.dotColor} shrink-0`}
                      />
                      <div className="min-w-0">
                        <p className="text-[11px] sm:text-[11.5px] font-bold text-gray-800 leading-tight">
                          {course.name}
                        </p>
                        <span className="text-[9px] text-gray-500 font-medium block">
                          {course.institution} · {course.year}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Formación Técnica: Con más color e integrada armónicamente con las tarjetas ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="bg-white/95 backdrop-blur-2xl border border-white/80 rounded-2xl sm:rounded-[1.6rem] p-2.5 sm:p-3 px-3.5 sm:px-4.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 shadow-lg hover:shadow-xl transition-all"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600 shadow-2xs shrink-0">
              <GraduationCap className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold text-gray-900 tracking-tight block leading-tight">
                Formación Técnica
              </span>
              <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                Educación Formal & Aplicada
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {complementary.map((item, idx) => {
              const isFirst = idx === 0;
              return (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-xl border transition-all shadow-2xs ${
                    isFirst
                      ? "bg-gradient-to-r from-blue-50/90 to-indigo-50/90 border-blue-200/90 hover:border-blue-300"
                      : "bg-gradient-to-r from-amber-50/90 to-orange-50/90 border-amber-200/90 hover:border-amber-300"
                  }`}
                >
                  <div
                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                      isFirst ? "bg-blue-600" : "bg-amber-500"
                    }`}
                  />
                  <span
                    className={`font-extrabold text-[11.5px] sm:text-xs ${
                      isFirst ? "text-blue-950" : "text-amber-950"
                    }`}
                  >
                    {item.institution}
                  </span>
                  <span
                    className={`text-[9.5px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-white/95 border ${
                      isFirst
                        ? "text-blue-700 border-blue-200/90"
                        : "text-amber-700 border-amber-200/90"
                    }`}
                  >
                    {item.period}
                  </span>
                  <span className="text-gray-300 text-[10px]">—</span>
                  <span className="text-gray-800 font-bold text-[11px] sm:text-[11.5px]">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
