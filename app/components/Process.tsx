import { Search, FileText, TrendingUp } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description: "Analizamos tu situación financiera actual, objetivos y tolerancia al riesgo.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Estrategia",
    description: "Diseñamos un plan personalizado adaptado a tus metas a corto, mediano y largo plazo.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Seguimiento",
    description: "Monitoreamos y ajustamos tu portafolio periódicamente para mantenerlo alineado.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Cómo trabajo</h2>
          <p className="mt-4 text-lg text-neutral-600">Un proceso transparente y personalizado en tres etapas.</p>
        </AnimatedSection>
        <StaggerContainer className="grid md:grid-cols-3 gap-8 relative" staggerDelay={0.2}>
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="relative flex flex-col items-center text-center p-6">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 sm:top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-neutral-200 to-transparent" />
                )}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <step.icon className="w-10 h-10 text-red-800" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-bold text-red-800 tracking-widest uppercase mb-2">Paso {step.number}</span>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
