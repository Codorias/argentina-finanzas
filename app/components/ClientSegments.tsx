import { User, Users, Building2, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const segments = [
  {
    icon: User,
    title: "Individuos",
    subtitle: "Profesionales y emprendedores",
    description: "Planificá tu futuro con una estrategia personalizada. Desde el primer peso ahorrado hasta la diversificación de tu patrimonio.",
    cta: "Conocer más",
  },
  {
    icon: Users,
    title: "Familias",
    subtitle: "Protección y legado",
    description: "Estructurá el patrimonio familiar con foco en educación, protección y transmisión generacional de bienes.",
    cta: "Conocer más",
  },
  {
    icon: Building2,
    title: "Empresas",
    subtitle: "Estructuración y crecimiento",
    description: "Optimizá la tesorería, planificá la expansión y protegé el capital de tu negocio con decisiones financieras inteligentes.",
    cta: "Conocer más",
  },
];

export default function ClientSegments() {
  return (
    <section id="segmentos" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Soluciones a tu medida</h2>
          <p className="mt-4 text-lg text-neutral-600">Estrategias diferenciadas según tu perfil y objetivos.</p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {segments.map((seg) => (
            <StaggerItem key={seg.title}>
              <div className="group h-full p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-red-800/20 hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-5 group-hover:bg-red-800 transition-colors duration-300">
                  <seg.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{seg.title}</h3>
                <p className="text-sm text-red-800 font-medium mt-1 mb-3">{seg.subtitle}</p>
                <p className="text-neutral-600 leading-relaxed text-sm">{seg.description}</p>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-neutral-900 group-hover:text-red-800 transition-colors"
                >
                  {seg.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
