"use client";

import { Download, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

export default function LeadMagnet() {
  return (
    <section className="py-16 px-6 bg-red-800 overflow-hidden">
      <AnimatedSection className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Guía gratuita: 5 pasos para planificar tu jubilación</h3>
          <p className="mt-3 text-red-100 leading-relaxed">
            Descargá el PDF con el mismo framework que uso con mis clientes para proyectar su retiro con tranquilidad.
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
