"use client";

import { useState } from "react";
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
} from "lucide-react";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { AboutMe } from "@/components/sections/AboutMe";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
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
  | "explore_rymel"
  | "explore_easyhitch"
  | "explore_bdc"
  | "contact";

export default function HomeDashboard() {
  const [currentView, setCurrentView] = useState<View>("home");

  const nav = (v: View) => setCurrentView(v);

  return (
    <>
      {/* FONDO EXTERIOR FOTOGRÁFICO: Estudio de Diseño & Estrategia Digital */}
      <div
        className="fixed inset-0 w-full h-full z-[-1] bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/exterior_bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-900/15 backdrop-blur-[1.5px]" />
      </div>

      <div className="relative w-full max-w-[1600px] h-[92vh] min-h-[720px] bg-[#E3F2FD]/60 backdrop-blur-3xl rounded-[3.5rem] shadow-2xl overflow-hidden flex border border-white/60">

        {/* ── SIDEBAR NAV ── */}
        <nav className="hidden md:flex flex-col items-center justify-between py-8 px-4 w-20 z-30">
          <div className="flex flex-col gap-4 items-center">
            <NavItem icon={<Home size={20} />}      isActive={currentView === "home"}        onClick={() => nav("home")}        title="Inicio" />
            <NavItem icon={<User size={20} />}      isActive={currentView === "about"}       onClick={() => nav("about")}       title="Sobre Mí" />
            <NavItem icon={<Briefcase size={20} />} isActive={currentView === "services"}    onClick={() => nav("services")}    title="Servicios" />
            <NavItem icon={<GitBranch size={20} />} isActive={currentView === "methodology"} onClick={() => nav("methodology")} title="Metodología" />
            <NavItem icon={<Wrench size={20} />}    isActive={currentView === "tools"}       onClick={() => nav("tools")}       title="Herramientas" />
            <NavItem icon={<FolderOpen size={20} />}isActive={currentView === "projects"}   onClick={() => nav("projects")}    title="Proyectos" />
          </div>

          <div className="flex flex-col gap-4 items-center">
            <div
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md cursor-pointer hover:scale-105 transition-transform"
              onClick={() => nav("about")}
            >
              <img src="/assets/profile_3d.png" alt="Daniel Giraldo" className="w-full h-full object-cover bg-slate-900" />
            </div>
            <NavItem icon={<Mail size={20} />} isActive={currentView === "contact"} onClick={() => nav("contact")} title="Contacto" />
          </div>
        </nav>

        {/* ── MAIN CONTENT ── */}
        <div className="flex-1 relative h-full p-3 md:p-5 lg:p-6 z-10 overflow-hidden flex flex-col">

          {/* Top Header */}
          <header className="flex justify-between items-center mb-3 sm:mb-4 relative z-20 shrink-0">
            {/* Brand */}
            <div
              onClick={() => nav("home")}
              className="glass-panel px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2.5 bg-white/90 shadow-sm border border-white/60 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="w-7 h-7 rounded-full overflow-hidden border border-white shadow-sm shrink-0">
                <img src="/assets/profile_3d.png" alt="Daniel Giraldo" className="w-full h-full object-cover bg-slate-900" />
              </div>
              <span className="text-sm font-bold tracking-wide text-gray-900">Daniel Giraldo</span>
            </div>

            {/* Nav pills — all visible, no scroll */}
            <div className="hidden md:flex glass-panel rounded-full p-1 gap-0.5 bg-white/90 shadow-sm border border-white/60">
              <NavPill label="Inicio"       isActive={currentView === "home"}        onClick={() => nav("home")} />
              <NavPill label="Sobre Mí"     isActive={currentView === "about"}       onClick={() => nav("about")} />
              <NavPill label="Servicios"    isActive={currentView === "services"}    onClick={() => nav("services")} />
              <NavPill label="Metodología"  isActive={currentView === "methodology"} onClick={() => nav("methodology")} />
              <NavPill label="Herramientas" isActive={currentView === "tools"}       onClick={() => nav("tools")} />
              <NavPill label="Proyectos"    isActive={currentView === "projects"}    onClick={() => nav("projects")} />
            </div>

            {/* CTA */}
            <div
              onClick={() => nav("contact")}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full flex items-center gap-2 cursor-pointer bg-white text-gray-900 font-bold shadow-md hover:scale-105 transition-transform border border-white/80"
            >
              <span className="text-sm hidden lg:inline">Trabajemos Juntos</span>
              <span className="text-sm lg:hidden">Contacto</span>
              <ArrowUpRight size={16} />
            </div>
          </header>

          {/* ── VIEWS ── */}
          <div className="relative w-full flex-1 rounded-[2.5rem] overflow-hidden min-h-0">
            <AnimatePresence mode="wait">

              {/* HOME: Editorial Creative Design Composition */}
              {currentView === "home" && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden"
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

          {/* Mobile Bottom Nav */}
          <nav className="md:hidden absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xl border border-white/60 rounded-full shadow-2xl z-50 flex justify-between items-center px-4 py-3">
            <MobileNavItem icon={<Home size={19} />}       isActive={currentView === "home"}        onClick={() => nav("home")} />
            <MobileNavItem icon={<User size={19} />}       isActive={currentView === "about"}       onClick={() => nav("about")} />
            <MobileNavItem icon={<Briefcase size={19} />}  isActive={currentView === "services"}    onClick={() => nav("services")} />
            <MobileNavItem icon={<GitBranch size={19} />}  isActive={currentView === "methodology"} onClick={() => nav("methodology")} />
            <MobileNavItem icon={<Wrench size={19} />}     isActive={currentView === "tools"}       onClick={() => nav("tools")} />
            <MobileNavItem icon={<FolderOpen size={19} />} isActive={currentView === "projects"}    onClick={() => nav("projects")} />
            <MobileNavItem icon={<Mail size={19} />}       isActive={currentView === "contact"}     onClick={() => nav("contact")} />
          </nav>
        </div>
      </div>
    </>
  );
}

/* ── Helpers ── */

function ViewWrapper({ children, key: _key }: { children: React.ReactNode; key: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 bg-white/75 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden"
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
      className={`w-11 h-11 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
        isActive
          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/35 scale-110"
          : "text-gray-500 hover:bg-white/90 hover:text-blue-600 hover:shadow-md"
      }`}
    >
      {icon}
    </div>
  );
}

function MobileNavItem({ icon, isActive, onClick }: { icon: React.ReactNode; isActive: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`p-2.5 rounded-full transition-all duration-300 ${
        isActive ? "bg-blue-600 text-white shadow-md shadow-blue-500/35 -translate-y-1" : "text-gray-600 hover:text-blue-600"
      }`}
    >
      {icon}
    </div>
  );
}

function NavPill({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`px-3.5 py-2 rounded-full cursor-pointer transition-all text-sm whitespace-nowrap ${
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
