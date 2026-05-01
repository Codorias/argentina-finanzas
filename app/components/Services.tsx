import { Landmark, TrendingUp, ClipboardList } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const services = [
  {
    icon: ClipboardList,
    title: "Planificación Financiera",
    description: "Diseñamos un plan a medida para tus objetivos: ahorro, educación, compra de vivienda y protección familiar.",
  },
  {
    icon: Landmark,
    title: "Jubilación",
    description: "Planifica tu retiro con tranquilidad. Optimizamos tus recursos para mantener tu estilo de vida cuando dejes de trabajar.",
  },
  {
    icon: TrendingUp,
    title: "Inversión",
    description: "Construye un portafolio diversificado acorde a tu perfil de riesgo. Te guiamos en cada paso del proceso.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Servicios</h2>
          <p className="mt-4 text-lg text-neutral-600">Soluciones integrales para cada etapa de tu vida financiera.</p>
        </AnimatedSection>
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group p-8 rounded-2xl border border-neutral-100 bg-neutral-50 hover:border-red-800/20 hover:shadow-lg hover:shadow-red-800/5 transition-all duration-300 hover:-translate-y-1">
                <s.icon className="w-10 h-10 text-red-800 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{s.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{s.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
