"use client";

import { Download, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

export default function LeadMagnet() {
  return (
    <section className="py-16 px-6 bg-red-800 overflow-hidden">
      <AnimatedSection className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-red-200 mb-3">Guía gratuita</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Tu primera cartera global desde Argentina, paso a paso
          </h3>
          <p className="mt-3 text-red-100 leading-relaxed">
            El mismo framework que uso con clientes nuevos: cómo abrir cuenta, qué instrumentos elegir y cómo armar tu plan de retiro empezando con poco.
          </p>
        </div>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contacto"
          className="flex items-center gap-2 px-6 py-3 bg-white text-red-800 rounded-full font-medium hover:bg-neutral-100 transition-colors shrink-0"
        >
          <Download size={18} />
          Descargar gratis
          <ArrowRight size={16} />
        </motion.a>
      </AnimatedSection>
    </section>
  );
}
