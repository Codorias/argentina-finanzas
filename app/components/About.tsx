"use client";

import { Award, Users, Calendar } from "lucide-react";
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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Sobre mí</h2>
          <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
            Soy Joaquín Rodríguez, fundador de Argentina Finanzas. Con más de 15 años de experiencia en el sector financiero, ayudo a familias y profesionales a tomar decisiones inteligentes con su dinero. Mi enfoque se basa en la transparencia, el análisis riguroso y un plan personalizado para cada cliente.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
            <div className="text-center p-2 sm:p-0">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-red-800 mb-1 sm:mb-2" strokeWidth={1.5} />
              <p className="text-xl sm:text-2xl font-bold text-neutral-900">15+</p>
              <p className="text-xs sm:text-sm text-neutral-500">Años de experiencia</p>
            </div>
            <div className="text-center p-2 sm:p-0">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-red-800 mb-1 sm:mb-2" strokeWidth={1.5} />
              <p className="text-xl sm:text-2xl font-bold text-neutral-900">300+</p>
              <p className="text-xs sm:text-sm text-neutral-500">Clientes asesorados</p>
            </div>
            <div className="text-center p-2 sm:p-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-red-800 mb-1 sm:mb-2" strokeWidth={1.5} />
              <p className="text-xl sm:text-2xl font-bold text-neutral-900">CFP®</p>
              <p className="text-xs sm:text-sm text-neutral-500">Certificación internacional</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
