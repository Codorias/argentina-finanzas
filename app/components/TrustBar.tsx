import { Shield, Scale, GraduationCap, Globe2 } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export default function TrustBar() {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 bg-white border-b border-neutral-100">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
        <AnimatedSection delay={0}>
          <div className="flex flex-col items-center justify-center">
            <Shield className="w-6 h-6 text-red-800 mb-1" strokeWidth={1.5} />
            <p className="text-sm font-medium text-neutral-900">Agente Productor CNV</p>
            <p className="text-xs text-neutral-500 font-mono">Matrícula #2245</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col items-center justify-center">
            <Scale className="w-6 h-6 text-red-800 mb-1" strokeWidth={1.5} />
            <p className="text-sm font-medium text-neutral-900">Abogado</p>
            <p className="text-xs text-neutral-500">Idóneo en Mercado de Capitales</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col items-center justify-center">
            <GraduationCap className="w-6 h-6 text-red-800 mb-1" strokeWidth={1.5} />
            <p className="text-sm font-medium text-neutral-900">Maestrando en Finanzas</p>
            <p className="text-xs text-neutral-500">Universidad de San Andrés</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col items-center justify-center">
            <Globe2 className="w-6 h-6 text-red-800 mb-1" strokeWidth={1.5} />
            <p className="text-sm font-medium text-neutral-900">Carteras globales</p>
            <p className="text-xs text-neutral-500">desde Argentina</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
