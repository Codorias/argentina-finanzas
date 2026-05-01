import { Shield, Users, Award } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export default function TrustBar() {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 bg-white border-b border-neutral-100">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
        <AnimatedSection delay={0}>
          <p className="text-2xl md:text-3xl font-bold text-neutral-900">15+</p>
          <p className="text-sm text-neutral-500 mt-1">Años de experiencia</p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-2xl md:text-3xl font-bold text-neutral-900">300+</p>
          <p className="text-sm text-neutral-500 mt-1">Familias asesoradas</p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col items-center justify-center">
            <Shield className="w-6 h-6 text-red-800 mb-1" strokeWidth={1.5} />
            <p className="text-sm font-medium text-neutral-900">Regulado por CNV</p>
            <p className="text-xs text-neutral-500">Mat. AAGI #XXXX</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col items-center justify-center">
            <Award className="w-6 h-6 text-red-800 mb-1" strokeWidth={1.5} />
            <p className="text-sm font-medium text-neutral-900">CFP® Certificado</p>
            <p className="text-xs text-neutral-500">Standards Board</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
