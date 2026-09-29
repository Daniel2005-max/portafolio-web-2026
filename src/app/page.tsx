"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  Mail,
  ArrowUpRight,
  GitBranch,
  Wrench,
  Heart,
  Bookmark,
  Share2,
  GraduationCap,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { AboutMe } from "@/components/sections/AboutMe";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { EducationSection } from "@/components/sections/EducationSection";
import { RymelExperience } from "@/components/experiences/RymelExperience";
import { EasyHitchExperience } from "@/components/experiences/EasyHitchExperience";
import { BdcExperience } from "@/components/experiences/BdcExperience";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroCreativeComposition } from "@/components/hero/HeroCreativeComposition";

type View =
  | "home"
  | "about"
  | "services"
  | "methodology"
  | "tools"
  | "projects"
  | "education"
  | "explore_rymel"
  | "explore_easyhitch"
  | "explore_bdc"
  | "contact";

export default function HomeDashboard() {
  const [currentView, setCurrentView] = useState<View>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const validViews: View[] = [
      "home",
      "about",
      "services",
      "methodology",
      "tools",
      "projects",
      "education",
      "explore_rymel",
      "explore_easyhitch",
      "explore_bdc",
      "contact",
    ];

    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "") as View;
      if (validViews.includes(hash)) {
        setCurrentView(hash);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const nav = (v: View) => {
    setCurrentView(v);
    if (typeof window !== "undefined") {
      window.location.hash = v;
    }
  };

  return (
    <>
      {/* FONDO EXTERIOR FOTOGRÁFICO: Estudio de Diseño & Estrategia Digital */}
      <div
        className="fixed inset-0 w-full h-full z-[-1] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/exterior_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/15 backdrop-blur-[1.5px]" />
      </div>

      <div className="relative w-full max-w-[1700px] 2xl:max-w-[1850px] h-[100dvh] md:h-[96dvh] lg:h-[92vh] sm:min-h-0 md:min-h-[700px] bg-[#E3F2FD]/60 backdrop-blur-3xl rounded-none md:rounded-[2rem] lg:rounded-[3.5rem] shadow-2xl overflow-hidden flex border-0 md:border md:border-white/60">

        {/* ── SIDEBAR NAV ── */}
        <nav className="hidden md:flex flex-col items-center justify-between py-6 lg:py-8 px-3 lg:px-4 w-16 lg:w-20 z-30 shrink-0">
          <div className="flex flex-col gap-3 lg:gap-4 items-center">
            <NavItem icon={<Home size={20} />}      isActive={currentView === "home"}        onClick={() => nav("home")}        title="Inicio" />
            <NavItem icon={<User size={20} />}      isActive={currentView === "about"}       onClick={() => nav("about")}       title="Sobre Mí" />
            <NavItem icon={<Briefcase size={20} />} isActive={currentView === "services"}    onClick={() => nav("services")}    title="Servicios" />
            <NavItem icon={<GitBranch size={20} />} isActive={currentView === "methodology"} onClick={() => nav("methodology")} title="Metodología" />
            <NavItem icon={<Wrench size={20} />}    isActive={currentView === "tools"}       onClick={() => nav("tools")}       title="Herramientas" />
            <NavItem icon={<FolderOpen size={20} />}isActive={currentView === "projects"}   onClick={() => nav("projects")}    title="Proyectos" />
            <NavItem icon={<GraduationCap size={20} />} isActive={currentView === "education"} onClick={() => nav("education")} title="Formación" />
          </div>

          <div className="flex flex-col gap-3 lg:gap-4 items-center">
            <div
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-white shadow-md cursor-pointer hover:scale-105 transition-transform"
              onClick={() => nav("about")}
            >
              <img src="/assets/profile_3d.png" alt="Daniel Giraldo" className="w-full h-full object-cover bg-slate-900" />
            </div>
            <NavItem icon={<Mail size={20} />} isActive={currentView === "contact"} onClick={() => nav("contact")} title="Contacto" />
          </div>
        </nav>

        {/* ── MAIN CONTENT ── */}
        <div className="flex-1 min-w-0 w-full relative h-full p-2 sm:p-3 md:p-5 lg:p-6 z-10 overflow-hidden flex flex-col">

          {/* Top Header */}
          <header className="flex justify-between items-center mb-1.5 sm:mb-3 md:mb-4 relative z-20 shrink-0 px-1 md:px-0 w-full">
            {/* Brand with Status Badge */}
            <button
              type="button"
              onClick={() => nav("home")}
              className="glass-panel px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 sm:gap-2.5 bg-white/95 shadow-sm border border-white/80 cursor-pointer active:scale-95 hover:scale-105 transition-transform shrink-0 touch-manipulation text-left"
            >
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden border border-white shadow-sm shrink-0">
                <img src="/assets/profile_3d.png" alt="Daniel Giraldo" className="w-full h-full object-cover bg-slate-900" />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-bold tracking-wide text-gray-900">Daniel Giraldo</span>
                <span className="inline-block md:hidden w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Disponible para proyectos" />
              </div>
            </button>

            {/* Nav pills — compact on tablet, full on desktop */}
            <div className="hidden md:flex glass-panel rounded-full p-1 gap-0.5 bg-white/90 shadow-sm border border-white/60">
              <NavPill label="Inicio"       isActive={currentView === "home"}        onClick={() => nav("home")} />
              <NavPill label="Sobre Mí"     isActive={currentView === "about"}       onClick={() => nav("about")} />
              <NavPill label="Servicios"    isActive={currentView === "services"}    onClick={() => nav("services")} />
              <NavPill label="Metodología"  isActive={currentView === "methodology"} onClick={() => nav("methodology")} />
              <NavPill label="Herramientas" isActive={currentView === "tools"}       onClick={() => nav("tools")} />
              <NavPill label="Proyectos"    isActive={currentView === "projects"}    onClick={() => nav("projects")} />
              <NavPill label="Formación"    isActive={currentView === "education"}   onClick={() => nav("education")} />
            </div>

            {/* CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => nav("contact")}
                className="px-3 xs:px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full flex items-center gap-1.5 cursor-pointer bg-white text-gray-900 font-bold shadow-md active:scale-95 hover:scale-105 transition-transform border border-white/80 shrink-0 touch-manipulation"
              >
                <span className="text-xs sm:text-sm hidden lg:inline">Trabajemos Juntos</span>
                <span className="text-xs sm:text-sm lg:hidden font-semibold">Hablemos</span>
                <ArrowUpRight size={14} className="text-blue-600" />
              </button>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Abrir Menú de Navegación"
                className="md:hidden w-8 h-8 rounded-full bg-white/95 border border-white/80 shadow-sm flex items-center justify-center text-slate-700 active:scale-95 touch-manipulation cursor-pointer"
              >
                <Menu size={16} />
              </button>
            </div>
          </header>

          {/* ── VIEWS ── */}
          <div className="relative w-full flex-1 rounded-2xl md:rounded-[1.8rem] sm:rounded-[2.2rem] lg:rounded-[2.5rem] overflow-hidden min-h-0">
            <AnimatePresence mode="wait">

              {/* HOME: Editorial Creative Design Composition */}
              {currentView === "home" && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute inset-0 w-full h-full rounded-2xl md:rounded-[1.8rem] sm:rounded-[2.2rem] lg:rounded-[2.5rem] overflow-hidden"
                >
                  <HeroCreativeComposition onNavigate={nav} />
                </motion.div>
              )}

              {/* ABOUT */}
              {currentView === "about" && (
                <ViewWrapper key="about">
                  <AboutMe />
                </ViewWrapper>
              )}

              {/* SERVICES */}
              {currentView === "services" && (
                <ViewWrapper key="services">
                  <ServicesGrid />
                </ViewWrapper>
              )}

              {/* METHODOLOGY */}
              {currentView === "methodology" && (
                <ViewWrapper key="methodology">
                  <MethodologySection />
                </ViewWrapper>
              )}

              {/* TOOLS */}
              {currentView === "tools" && (
                <ViewWrapper key="tools">
                  <ToolsSection />
                </ViewWrapper>
              )}

              {/* PROJECTS */}
              {currentView === "projects" && (
                <ViewWrapper key="projects">
                  <ProjectsShowcase onViewProject={(v) => nav(v as View)} />
                </ViewWrapper>
              )}

              {/* EDUCATION & CERTIFICATIONS */}
              {currentView === "education" && (
                <ViewWrapper key="education">
                  <EducationSection />
                </ViewWrapper>
              )}

              {/* PROJECT EXPERIENCES */}
              {currentView === "explore_rymel" && (
                <ViewWrapper key="explore_rymel">
                  <RymelExperience onBack={() => nav("projects")} />
                </ViewWrapper>
              )}
              {currentView === "explore_easyhitch" && (
                <ViewWrapper key="explore_easyhitch">
                  <EasyHitchExperience onBack={() => nav("projects")} />
                </ViewWrapper>
              )}
              {currentView === "explore_bdc" && (
                <ViewWrapper key="explore_bdc">
                  <BdcExperience onBack={() => nav("projects")} />
                </ViewWrapper>
              )}

              {/* CONTACT */}
              {currentView === "contact" && (
                <ViewWrapper key="contact">
                  <ContactSection />
                </ViewWrapper>
              )}

            </AnimatePresence>
          </div>

          {/* Mobile Bottom Nav Dock (Ergonomic Minimalist Icon Dock - No Text Clutter) */}
          <nav className="md:hidden fixed bottom-[max(0.85rem,env(safe-area-inset-bottom,0.85rem))] left-4 right-4 max-w-[360px] mx-auto bg-white/95 backdrop-blur-2xl border border-white/85 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.16)] z-[9999] flex justify-between items-center px-2 py-1.5 pointer-events-auto">
            <MobileNavItem icon={<Home size={20} />}       label="Inicio"    isActive={currentView === "home"}     onClick={() => nav("home")} />
            <MobileNavItem icon={<Briefcase size={20} />}  label="Servicios" isActive={currentView === "services"} onClick={() => nav("services")} />
            <MobileNavItem icon={<FolderOpen size={20} />} label="Proyectos" isActive={currentView === "projects" || currentView.startsWith("explore_")} onClick={() => nav("projects")} />
            <MobileNavItem icon={<GraduationCap size={20} />} label="Formación" isActive={currentView === "education"} onClick={() => nav("education")} />
            <MobileNavItem icon={<User size={20} />}       label="Sobre Mí"  isActive={currentView === "about"}    onClick={() => nav("about")} />
            <MobileNavItem icon={<Mail size={20} />}       label="Contacto"  isActive={currentView === "contact"}  onClick={() => nav("contact")} />
          </nav>

          {/* Mobile Bottom Sheet Drawer (Menú Desplegable de Alta Legibilidad) */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="md:hidden fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[10000]"
                />
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 350 }}
                  className="md:hidden fixed bottom-0 left-0 right-0 bg-white backdrop-blur-2xl rounded-t-[28px] border-t border-slate-200/90 shadow-[0_-20px_50px_rgba(0,0,0,0.25)] z-[10001] px-4 pt-3.5 pb-8 pointer-events-auto max-h-[85vh] overflow-y-auto"
                >
                  {/* Drag Handle */}
                  <div className="w-12 h-1.5 rounded-full bg-slate-300 mx-auto mb-3.5" />

                  {/* Header */}
                  <div className="flex items-center justify-between px-1 pb-3 mb-3 border-b border-slate-100">
                    <div>
                      <h3 className="text-lg font-black tracking-tight text-[#10182B]">
                        Menú de Navegación
                      </h3>
                      <p className="text-xs text-slate-600 font-medium mt-0.5">
                        Explora las secciones del portafolio
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsMobileMenuOpen(false)}
                      aria-label="Cerrar menú"
                      className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 flex items-center justify-center text-slate-700 transition-all cursor-pointer"
                    >
                      <X size={18} strokeWidth={2.5} />
                    </button>
                  </div>

                  {/* Menu Items with High Legibility & Crisp Contrast */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {[
                      {
                        id: "home",
                        label: "Inicio",
                        desc: "Portada & presentación",
                        icon: <Home size={20} strokeWidth={2.3} />,
                      },
                      {
                        id: "services",
                        label: "Servicios",
                        desc: "Especialidades & soluciones digitales",
                        icon: <Briefcase size={20} strokeWidth={2.3} />,
                      },
                      {
                        id: "projects",
                        label: "Proyectos",
                        desc: "Casos de éxito & marcas destacadas",
                        icon: <FolderOpen size={20} strokeWidth={2.3} />,
                      },
                      {
                        id: "education",
                        label: "Formación",
                        desc: "Certificaciones & habilidades técnicas",
                        icon: <GraduationCap size={20} strokeWidth={2.3} />,
                      },
                      {
                        id: "about",
                        label: "Sobre Mí",
                        desc: "Perfil profesional & trayectoria",
                        icon: <User size={20} strokeWidth={2.3} />,
                      },
                      {
                        id: "contact",
                        label: "Contacto",
                        desc: "Inicia una conversación directa",
                        icon: <Mail size={20} strokeWidth={2.3} />,
                      },
                    ].map((item) => {
                      const isActive =
                        currentView === item.id ||
                        (item.id === "projects" && currentView.startsWith("explore_"));
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            nav(item.id as View);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`flex items-center justify-between w-full p-3.5 rounded-2xl text-left transition-all cursor-pointer border ${
                            isActive
                              ? "bg-blue-600 text-white border-blue-600 shadow-[0_8px_22px_rgba(37,99,235,0.35)]"
                              : "bg-slate-50/95 hover:bg-slate-100 active:bg-slate-200/60 text-slate-900 border-slate-200"
                          }`}
                        >
                          <div className="flex items-center gap-3.5 min-w-0">
                            <div
                              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                                isActive
                                  ? "bg-white/20 text-white"
                                  : "bg-white text-blue-600 shadow-sm border border-slate-200"
                              }`}
                            >
                              {item.icon}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-[15px] font-extrabold tracking-tight leading-none ${
                                    isActive ? "text-white" : "text-[#0F172A]"
                                  }`}
                                >
                                  {item.label}
                                </span>
                                {isActive && (
                                  <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                                )}
                              </div>
                              <p
                                className={`text-[12px] mt-1 leading-snug font-medium ${
                                  isActive
                                    ? "text-blue-100"
                                    : "text-slate-600"
                                }`}
                              >
                                {item.desc}
                              </p>
                            </div>
                          </div>
                          <ChevronRight
                            size={18}
                            strokeWidth={2.5}
                            className={`shrink-0 ml-2 ${
                              isActive ? "text-white" : "text-slate-400"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

/* ── Helpers ── */

function ViewWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14 }}
      transition={{ duration: 0.25 }}
      className="absolute inset-0 bg-white/75 backdrop-blur-2xl rounded-[1.4rem] md:rounded-[1.8rem] sm:rounded-[2.2rem] lg:rounded-[2.5rem] overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

function NavItem({
  icon, isActive = false, onClick, title,
}: {
  icon: React.ReactNode; isActive?: boolean; onClick?: () => void; title?: string;
}) {
  return (
    <div
      onClick={onClick}
      title={title}
      className={`w-10 lg:w-11 h-10 lg:h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
        isActive
          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/35 scale-110"
          : "text-gray-500 hover:bg-white/90 hover:text-blue-600 hover:shadow-md"
      }`}
    >
      {icon}
    </div>
  );
}

function MobileNavItem({
  icon, label, isActive, onClick,
}: {
  icon: React.ReactNode; label: string; isActive: boolean; onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`relative flex items-center justify-center h-10 w-11 rounded-xl transition-all duration-200 cursor-pointer active:scale-95 touch-manipulation ${
        isActive
          ? "bg-blue-600 text-white shadow-[0_4px_14px_rgba(37,99,235,0.35)] scale-105"
          : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/60"
      }`}
    >
      {icon}
    </button>
  );
}

function NavPill({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`px-2.5 lg:px-3.5 py-1.5 lg:py-2 rounded-full cursor-pointer transition-all text-xs lg:text-sm whitespace-nowrap ${
        isActive
          ? "bg-white text-blue-600 shadow-sm font-bold"
          : "text-gray-600 hover:text-blue-600 hover:bg-white/60 font-semibold"
      }`}
    >
      {label}
    </div>
  );
}

function ActionIcon({ icon, label }: { icon: React.ReactNode; label?: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-white/20 transition border border-white/5">
        {icon}
      </div>
      {label && <span className="text-[10px] text-gray-400">{label}</span>}
    </div>
  );
}
