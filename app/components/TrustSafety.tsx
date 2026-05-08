"use client";

import { Lock, FileText, Eye, Wallet } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const pillars = [
  {
    icon: Wallet,
    title: "Tu plata, tus cuentas",
    description: "Operás con cuentas a tu nombre en brokers regulados. Yo no recibo ni custodio fondos. Punto.",
  },
  {
    icon: Lock,
    title: "Sin acceso a tu dinero",
    description: "No tengo poder para mover, retirar ni operar tu plata sin tu autorización explícita. Vos decidís.",
  },
  {
    icon: Eye,
    title: "Reportes claros",
    description: "Recibís reportes periódicos con el rendimiento real de tu cartera. Nada escondido.",
  },
  {
    icon: FileText,
    title: "Regulación CNV",
    description: "Agente Productor matrícula #2245 ante la Comisión Nacional de Valores. Idóneo en mercado de capitales.",
  },
];

export default function TrustSafety() {
  return (
    <section id="confianza" className="py-20 md:py-32 px-6 bg-neutral-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <AnimatedSection className="max-w-3xl">
          <p className="font-mono text-xs tracking-widest uppercase text-red-400 mb-4">Tu plata es tuya</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
            La pregunta que todos hacen:<br />
            <span className="text-red-400">&quot;¿Vos manejás mi plata?&quot;</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-300 leading-relaxed">
            <strong className="text-white">No.</strong> Tu plata queda siempre en cuentas a tu nombre.
            Yo te asesoro, te explico, y armamos juntos la estrategia. Vos seguís siendo el dueño de cada peso.
          </p>
        </AnimatedSection>

        <StaggerContainer className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.1}>
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-400/30 hover:bg-white/[0.07] transition-all duration-300">
                <p.icon className="w-8 h-8 text-red-400 mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{p.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
