"use client";

import { TrendingDown, Plane, Home, Car, Sparkles } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const goals = [
  { icon: Plane, label: "Vacaciones sin pedir préstamo" },
  { icon: Home, label: "La casa propia" },
  { icon: Car, label: "El auto que necesitás" },
  { icon: Sparkles, label: "Independencia real" },
];

export default function WhyInvest() {
  return (
    <section id="por-que" className="py-20 md:py-32 px-6 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="max-w-3xl">
          <p className="font-mono text-xs tracking-widest uppercase text-red-800 mb-4">¿Por qué invertir?</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
            Si todos entendieran que <span className="text-red-800">hasta el dólar se devalúa</span>,
            nadie se quedaría mirando.
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            La plata quieta pierde valor todos los días. La inflación local te corre, la global también.
            Invertir no es para ricos: es la forma de cuidar lo que ganaste y convertirlo en metas reales.
          </p>
        </AnimatedSection>

        {/* Visualización del costo de no invertir */}
        <AnimatedSection delay={0.2} className="mt-12">
          <div className="rounded-2xl bg-neutral-900 text-white p-6 sm:p-10 grid md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-2 text-red-400">
                <TrendingDown size={18} />
                <p className="font-mono text-xs tracking-widest uppercase">Plata quieta</p>
              </div>
              <p className="mt-3 text-3xl sm:text-4xl font-bold">−2 a −8%</p>
              <p className="mt-1 text-sm text-neutral-400">poder adquisitivo perdido al año, incluso en dólares.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-emerald-400">
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="font-mono"
                >
                  ↗
                </motion.span>
                <p className="font-mono text-xs tracking-widest uppercase">Cartera global</p>
              </div>
              <p className="mt-3 text-3xl sm:text-4xl font-bold">~7 a 10%</p>
              <p className="mt-1 text-sm text-neutral-400">retorno histórico promedio de un portafolio diversificado en USD.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-amber-400">
                <p className="font-mono text-xs tracking-widest uppercase">El costo de esperar</p>
              </div>
              <p className="mt-3 text-3xl sm:text-4xl font-bold">10 años</p>
              <p className="mt-1 text-sm text-neutral-400">la diferencia entre empezar hoy o &quot;cuando junte más&quot;.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Metas tangibles */}
        <AnimatedSection delay={0.3} className="mt-12">
          <p className="text-sm text-neutral-500 mb-4">No invertís por números. Invertís por:</p>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4" staggerDelay={0.08}>
            {goals.map((g) => (
              <StaggerItem key={g.label}>
                <div className="group p-4 sm:p-5 rounded-xl border border-neutral-200 hover:border-red-800/40 hover:bg-red-50/30 transition-all duration-300 h-full">
                  <g.icon className="w-6 h-6 text-red-800 mb-3" strokeWidth={1.5} />
                  <p className="text-sm sm:text-base font-medium text-neutral-900 leading-snug">{g.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </section>
  );
}
