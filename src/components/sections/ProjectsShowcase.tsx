"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Facebook, Globe } from "lucide-react";

interface Project {
  id: string;
  company: string;
  category: string;
  role: string;
  logo: string;
  logoBg: string;
  accent: "blue" | "amber" | "green";
  view: string;
  links: {
    instagram: string;
    facebook: string;
    website: string;
  };
}

const projects: Project[] = [
  {
    id: "rymel",
    company: "RYMEL SAS",
    category: "B2B Industrial",
    role: "Estrategia, Branding & Zoho",
    logo: "/assets/rymel-logo.png",
    logoBg: "bg-white",
    accent: "blue",
    view: "explore_rymel",
    links: {
      instagram: "https://www.instagram.com/rymel.sas/?hl=es",
      facebook: "https://www.facebook.com/Rymel.com.co",
      website:
        "https://rymel.com.co/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAcGRvZgJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAaf9KGkS_250DrmYv4IPC7WuKPGVgT34SEjEHIW91vObaH3JJwWWTqLNp5t1TQ_aem_OXC3kQgjk0IgEdIyLvcoJw",
    },
  },
  {
    id: "easyhitch",
    company: "Easy Hitch",
    category: "E-Commerce & Social",
    role: "Performance & Contenido",
    logo: "/assets/easyhitch-logo.png",
    logoBg: "bg-black",
    accent: "amber",
    view: "explore_easyhitch",
    links: {
      instagram: "https://www.instagram.com/easyhitchoficial/?hl=es",
      facebook: "https://www.facebook.com/easyhitch",
      website: "https://easyhitch.com.co/",
    },
  },
  {
    id: "bdc",
    company: "Bodega del Carguero",
    category: "Conversión Shopify",
    role: "Administración E-Commerce",
    logo: "/assets/bdc-logo.png",
    logoBg: "bg-white",
    accent: "green",
    view: "explore_bdc",
    links: {
      instagram: "https://www.instagram.com/labodegadelcarguero/?hl=es",
      facebook: "https://www.facebook.com/labodegadelcarguero",
      website: "https://bodegadelcarguero.com",
    },
  },
];

const accentMap: Record<
  string,
  { badge: string; btn: string; ring: string; borderHover: string }
> = {
  blue: {
    badge: "bg-blue-100 text-blue-900 border-blue-200",
    btn: "hover:bg-blue-600",
    ring: "border-blue-100/90",
    borderHover: "hover:border-blue-300",
  },
  amber: {
    badge: "bg-amber-100 text-amber-900 border-amber-200",
    btn: "hover:bg-amber-600",
    ring: "border-amber-100/90",
    borderHover: "hover:border-amber-300",
  },
  green: {
    badge: "bg-green-100 text-green-900 border-green-200",
    btn: "hover:bg-green-600",
    ring: "border-green-100/90",
    borderHover: "hover:border-green-300",
  },
};

export function ProjectsShowcase({
  onViewProject,
}: {
  onViewProject?: (view: string) => void;
}) {
  return (
    <div className="w-full h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 xl:p-10 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full my-auto flex flex-col gap-4 md:gap-5">
        {/* ── Top Header: Same structure, margins and impact as other sections ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-2">
            Proyectos{" "}
            <span className="text-blue-600 font-extrabold">Destacados</span>
          </h2>
          <p className="text-gray-700 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
            Casos reales con resultados medibles 2025–2026.
          </p>
        </motion.div>

        {/* ── 3 Original Cards: Identical margins, responsive grid, zero scroll ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 xl:gap-6">
          {projects.map((p, idx) => {
            const ac = accentMap[p.accent];
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.35 }}
                className={`bg-white/95 backdrop-blur-xl rounded-[2rem] border shadow-lg flex flex-col justify-between overflow-hidden ${ac.ring} ${ac.borderHover} hover:shadow-2xl transition-all group`}
              >
                {/* Logo container */}
                <div
                  className={`h-36 md:h-40 lg:h-44 p-6 lg:p-8 flex items-center justify-center relative border-b border-gray-100 ${p.logoBg} shrink-0`}
                >
                  <img
                    src={p.logo}
                    alt={p.company}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Body Content */}
                <div className="flex flex-col p-4 lg:p-5 justify-between gap-3">
                  <div className="flex flex-col items-center text-center gap-2">
                    {/* Category Badge */}
                    <span
                      className={`text-[11px] md:text-xs font-extrabold px-3.5 py-1 rounded-full border uppercase tracking-wider ${ac.badge}`}
                    >
                      {p.category}
                    </span>

                    {/* Company Title & Role */}
                    <div>
                      <h3 className="text-xl lg:text-2xl font-black text-gray-900 leading-tight">
                        {p.company}
                      </h3>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-0.5">
                        {p.role}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-2.5 mt-1">
                      <a
                        href={p.links.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all shadow-sm"
                        title="Instagram"
                      >
                        <Instagram size={15} />
                      </a>
                      <a
                        href={p.links.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all shadow-sm"
                        title="Facebook"
                      >
                        <Facebook size={15} />
                      </a>
                      <a
                        href={p.links.website}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-black hover:text-white transition-all shadow-sm"
                        title="Sitio Web"
                      >
                        <Globe size={15} />
                      </a>
                    </div>
                  </div>

                  {/* CTA Button: Explorar proyecto */}
                  <button
                    onClick={() => onViewProject?.(p.view)}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 md:py-3 px-4 rounded-xl md:rounded-2xl bg-black text-white text-xs md:text-sm font-bold shadow-md transition-all cursor-pointer ${ac.btn} active:scale-[0.98] shrink-0`}
                  >
                    <span>Explorar proyecto</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
