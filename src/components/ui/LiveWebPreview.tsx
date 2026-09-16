"use client";

import { useState } from "react";
import { ExternalLink, RotateCw, Lock, Globe } from "lucide-react";

interface LiveWebPreviewProps {
  url: string;
  displayUrl?: string;
  title: string;
  externalUrl?: string;
}

export function LiveWebPreview({
  url,
  displayUrl,
  title,
  externalUrl,
}: LiveWebPreviewProps) {
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const targetExternal = externalUrl || url;
  const cleanDisplay = displayUrl || url.replace(/^https?:\/\//, "").split("/")[0];

  const handleRefresh = () => {
    setIsLoading(true);
    setKey((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl md:rounded-[2.5rem] border border-gray-200 shadow-xl overflow-hidden">
      {/* Browser Chrome Header */}
      <div className="bg-gray-100/90 backdrop-blur-md px-4 py-2.5 border-b border-gray-200 flex items-center justify-between gap-3 shrink-0">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-rose-400/90 border border-rose-500/30" />
          <div className="w-3 h-3 rounded-full bg-amber-400/90 border border-amber-500/30" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/90 border border-emerald-500/30" />
        </div>

        {/* Address bar */}
        <div className="flex-1 max-w-lg mx-auto bg-white px-3.5 py-1 rounded-full border border-gray-200 flex items-center gap-2 text-xs text-gray-700 shadow-inner overflow-hidden">
          <Lock size={12} className="text-emerald-600 shrink-0" />
          <span className="font-mono text-[11px] text-gray-800 truncate select-all">{cleanDisplay}</span>
          <span className="ml-auto text-[10px] text-gray-400 uppercase font-bold tracking-wider shrink-0 hidden sm:inline">En Vivo</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleRefresh}
            title="Recargar página"
            className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-200/80 transition-colors"
          >
            <RotateCw size={14} className={isLoading ? "animate-spin text-blue-600" : ""} />
          </button>
          <a
            href={targetExternal}
            target="_blank"
            rel="noreferrer"
            title="Abrir en ventana completa"
            className="flex items-center gap-1 px-2.5 py-1 bg-black text-white hover:bg-gray-800 text-[11px] font-bold rounded-lg transition-colors shadow-sm"
          >
            <span className="hidden sm:inline">Abrir Web</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* Frame Container - Flexes to exact height of parent */}
      <div className="relative w-full flex-1 min-h-[440px] bg-slate-50 flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 z-10 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
            <span className="text-xs font-bold text-gray-600">Cargando {title}...</span>
          </div>
        )}

        <iframe
          key={key}
          src={url}
          title={title}
          onLoad={() => setIsLoading(false)}
          className="w-full h-full border-0 bg-white"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>

      {/* Footer info bar */}
      <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
        <div className="flex items-center gap-1.5">
          <Globe size={13} className="text-blue-600" />
          <span>Navegación interactiva integrada</span>
        </div>
        <a
          href={targetExternal}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline font-medium"
        >
          Visitar enlace directo &rarr;
        </a>
      </div>
    </div>
  );
}
