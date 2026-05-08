import { TrendingUp, Users, Building2, ArrowRight } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const segments = [
  {
    icon: TrendingUp,
    title: "Inversores minoristas",
    subtitle: "Empezás de cero o con lo que tenés",
    description: "Hacele caso al vos del futuro. Armamos tu cartera de retiro paso a paso, con foco en el largo plazo y reportes claros mes a mes.",
    cta: "Empezar mi cartera",
    badge: "Ideal para 25–45",
  },
  {
    icon: Users,
    title: "Familias",
    subtitle: "Patrimonio que dura generaciones",
    description: "Estructuramos los ahorros familiares: educación de los chicos, protección y transmisión de bienes con visión global.",
    cta: "Cuidar a los míos",
  },
  {
    icon: Building2,
    title: "Pymes",
    subtitle: "Tesorería y excedentes",
    description: "Tu negocio genera excedentes. Los hacemos rendir con una estrategia que protege capital y mantiene liquidez operativa.",
    cta: "Optimizar mi tesorería",
  },
];

export default function ClientSegments() {
  return (
    <section id="segmentos" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-red-800 mb-4">Para quién</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Tres perfiles, una misma idea: <span className="text-red-800">poner tu plata a trabajar</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Estrategias diferenciadas para inversores minoristas, familias y pymes.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {segments.map((seg) => (
            <StaggerItem key={seg.title}>
              <div className="group h-full p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-red-800/20 hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1 relative">
                {seg.badge && (
                  <span className="absolute -top-2 right-4 text-[10px] font-mono tracking-widest uppercase bg-red-800 text-white px-2 py-1 rounded-full">
                    {seg.badge}
                  </span>
                )}
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
