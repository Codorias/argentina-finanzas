"use client";

import { Check, Sparkles, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion } from "framer-motion";

const advisedFeatures = [
  "Plan financiero hecho a tu medida",
  "Asesoramiento y estrategia continua",
  "Tu plata siempre en cuentas a tu nombre",
  "Acompañamiento paso a paso",
];

const managedFeatures = [
  "Yo gestiono y monitoreo tu cartera",
  "Reportes periódicos del rendimiento real",
  "Rebalanceo y ajustes cuando hace falta",
  "Todo lo de la cuenta asesorada, incluido",
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Costos() {
  return (
    <section id="costos" className="py-20 md:py-32 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="max-w-3xl">
          <p className="font-mono text-xs tracking-widest uppercase text-red-800 mb-4">Costos transparentes</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
            Tenerme como asesor <span className="text-red-800">no te cuesta un peso más</span>.
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            Pagás exactamente lo mismo que la sociedad de bolsa ya te cobra. Sin comisiones ocultas,
            sin letra chica. Solo si elegís que <strong className="text-neutral-900">yo gestione tu cartera</strong> hay
            un costo adicional, y es mínimo.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid md:grid-cols-2 gap-6 items-stretch">
          {/* Cuenta asesorada */}
          <AnimatedSection direction="left" className="h-full">
            <div className="h-full flex flex-col p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
              <p className="font-mono text-xs tracking-widest uppercase text-neutral-500">Cuenta asesorada</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-neutral-900">Sin costo extra</span>
              </div>
              <p className="mt-2 text-neutral-600">
                Pagás lo mismo que tu sociedad de bolsa ya te cobra. Mi asesoramiento no te suma nada.
              </p>
              <ul className="mt-8 space-y-3 flex-1">
                {advisedFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-neutral-700">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-neutral-200 flex items-center justify-center">
                      <Check size={13} className="text-neutral-700" strokeWidth={3} />
                    </span>
                    <span className="text-sm sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Cuenta gestionada — destacada */}
          <AnimatedSection direction="right" className="h-full">
            <div className="relative h-full flex flex-col p-8 rounded-3xl bg-neutral-900 text-white shadow-2xl shadow-red-900/20 ring-1 ring-red-500/30">
              <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-700 text-white text-xs font-semibold">
                <Sparkles size={13} /> Gestión activa
              </span>
              <p className="font-mono text-xs tracking-widest uppercase text-red-400">Cuenta gestionada</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-bold">1%</span>
                <span className="text-neutral-400 text-sm">anual</span>
              </div>
              <p className="mt-2 text-neutral-300">
                Solo <strong className="text-white">0,40% más</strong> que la cuenta no gestionada. Yo me ocupo de
                todo y te muestro cómo viene.
              </p>
              <ul className="mt-8 space-y-3 flex-1">
                {managedFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-neutral-200">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-red-700 flex items-center justify-center">
                      <Check size={13} className="text-white" strokeWidth={3} />
                    </span>
                    <span className="text-sm sm:text-base">{f}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("contacto")}
                className="mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-red-700 hover:text-white transition-colors"
              >
                Quiero que la gestiones
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2}>
          <p className="mt-8 text-center text-sm text-neutral-500 max-w-2xl mx-auto">
            En todos los casos tu plata queda en cuentas a tu nombre. El 1% de la cuenta gestionada es el
            único costo que cobro por encima de lo que ya paga cualquier cuenta en la sociedad de bolsa.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
