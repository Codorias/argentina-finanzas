"use client";

import { Scale, GraduationCap, Shield } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 md:py-32 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection direction="left" className="flex justify-center md:justify-start">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-neutral-900 flex items-center justify-center text-white text-4xl md:text-5xl font-bold tracking-tight overflow-hidden shadow-2xl shadow-neutral-900/20"
          >
            <img src="/logo.png" alt="Argentina Finanzas" className="w-full h-full object-cover" />
          </motion.div>
        </AnimatedSection>
        <AnimatedSection direction="right">
          <p className="font-mono text-xs tracking-widest uppercase text-red-800 mb-3">Sobre mí</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Joaquín Rodríguez Nuin
          </h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Asesor financiero independiente y fundador de Argentina Finanzas. Acompaño a inversores
            minoristas, familias y pymes a construir carteras globales desde Argentina, con atención
            humana, reportes claros de rendimiento y cero conflictos de interés.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
            <div className="text-center p-2 sm:p-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-red-800 mb-1 sm:mb-2" strokeWidth={1.5} />
              <p className="text-base sm:text-lg font-bold text-neutral-900">CNV #2245</p>
              <p className="text-xs sm:text-sm text-neutral-500">Agente Productor</p>
            </div>
            <div className="text-center p-2 sm:p-0">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-red-800 mb-1 sm:mb-2" strokeWidth={1.5} />
              <p className="text-base sm:text-lg font-bold text-neutral-900">Abogado</p>
              <p className="text-xs sm:text-sm text-neutral-500">Idóneo en MdC</p>
            </div>
            <div className="text-center p-2 sm:p-0">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-red-800 mb-1 sm:mb-2" strokeWidth={1.5} />
              <p className="text-base sm:text-lg font-bold text-neutral-900">UdeSA</p>
              <p className="text-xs sm:text-sm text-neutral-500">Maestrando en Finanzas</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
