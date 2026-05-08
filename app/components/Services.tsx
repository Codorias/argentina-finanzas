import { Landmark, LineChart, ClipboardList, MessagesSquare } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const services = [
  {
    icon: ClipboardList,
    title: "Planificación financiera",
    description: "Plan a medida con metas concretas: vacaciones, casa, auto, retiro. Mensual, anual y a 10 años.",
  },
  {
    icon: LineChart,
    title: "Gestión de carteras",
    description: "Carteras globales armadas y monitoreadas. Reportes periódicos con el rendimiento real, sin maquillaje.",
  },
  {
    icon: Landmark,
    title: "Cartera de retiro",
    description: "Empezás joven, llegás tranquilo. Estrategia de largo plazo aprovechando el interés compuesto.",
  },
  {
    icon: MessagesSquare,
    title: "Acompañamiento humano",
    description: "Atención personalizada. Te explico cada decisión hasta que la entiendas. Sin algoritmos, sin chatbots.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16 max-w-2xl mx-auto">
          <p className="font-mono text-xs tracking-widest uppercase text-red-800 mb-3">Servicios</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Asesoramiento + gestión, con <span className="text-red-800">acompañamiento real</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-600">No solamente te decimos qué hacer. Lo hacemos juntos.</p>
        </AnimatedSection>
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
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
