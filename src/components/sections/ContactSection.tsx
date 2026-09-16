"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <div className="w-full h-full flex flex-col justify-between p-6 md:p-8 xl:p-10 overflow-y-auto hide-scrollbar">
      
      <div className="max-w-4xl mx-auto w-full my-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 uppercase mb-3 leading-tight">
            ¿TRABAJEMOS <span className="text-blue-600">JUNTOS?</span>
          </h2>
          <p className="text-gray-700 font-medium max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Cuéntame tu proyecto y en 24 horas te responderé con ideas concretas y un plan de acción.
          </p>
        </motion.div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8">
          
          <motion.a 
            href="mailto:daniel2005giraldo@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/95 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/80 border-t-4 border-t-amber-500 text-gray-900 flex flex-col items-center text-center hover:scale-105 transition-transform group cursor-pointer shadow-xl"
          >
            <div className="w-11 h-11 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:text-white transition-colors border border-amber-100">
              <Mail size={20} />
            </div>
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-1">EMAIL</span>
            <span className="text-sm font-bold text-gray-900 break-all">daniel2005giraldo@gmail.com</span>
          </motion.a>

          <motion.a 
            href="https://wa.me/573042946782"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/95 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/80 border-t-4 border-t-teal-500 text-gray-900 flex flex-col items-center text-center hover:scale-105 transition-transform group cursor-pointer shadow-xl"
          >
            <div className="w-11 h-11 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-3 group-hover:bg-teal-500 group-hover:text-white transition-colors border border-teal-100">
              <Phone size={20} />
            </div>
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-1">WHATSAPP</span>
            <span className="text-sm font-bold text-gray-900">+57 304 294 6782</span>
          </motion.a>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/95 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/80 border-t-4 border-t-purple-500 text-gray-900 flex flex-col items-center text-center shadow-xl"
          >
            <div className="w-11 h-11 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-3 border border-purple-100">
              <MapPin size={20} />
            </div>
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-1">UBICACIÓN</span>
            <span className="text-sm font-bold text-gray-900">Medellín, Colombia</span>
          </motion.div>

        </div>

        {/* Footer Brand */}
        <div className="text-center pt-5 border-t border-gray-200">
          <p className="text-gray-900 font-extrabold text-base tracking-widest uppercase">DANIEL GIRALDO</p>
          <p className="text-xs text-gray-600 font-bold uppercase tracking-wider mt-0.5">Estrategia • Diseño • Resultados</p>
        </div>
      </div>

    </div>
  );
}
