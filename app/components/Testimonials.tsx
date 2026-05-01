import { Quote } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

/*
  INSTRUCCIONES PARA EDITAR TESTIMONIOS:
  Reemplazá los placeholders con testimonios reales de tus clientes.
  Agregá o quitá objetos del array 'testimonials' según necesites.
*/

const testimonials = [
  {
    quote: "Joaquín me ayudó a ordenar mis finanzas y hoy tengo un plan claro para mi jubilación. La tranquilidad que me dio no tiene precio.",
    name: "María G.",
    role: "Médica, Buenos Aires",
  },
  {
    quote: "Profesionalismo y transparencia en cada reunión. Mi portafolio creció de forma constante y entiendo cada decisión que tomamos.",
    name: "Carlos R.",
    role: "Empresario, Córdoba",
  },
  {
    quote: "Finalmente encontré un asesor que habla en criollo y no me vende productos que no necesito. 100% recomendable.",
    name: "Lucía M.",
    role: "Contadora, Rosario",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-32 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Lo que dicen mis clientes</h2>
          <p className="mt-4 text-lg text-neutral-600">Historias reales de familias y profesionales que confían en Argentina Finanzas.</p>
        </AnimatedSection>
        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="group h-full p-8 rounded-2xl bg-white border border-neutral-100 hover:shadow-xl hover:shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1">
                <Quote className="w-8 h-8 text-red-800 mb-4" strokeWidth={1.5} />
                <p className="text-neutral-700 leading-relaxed italic">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <p className="font-semibold text-neutral-900">{t.name}</p>
                  <p className="text-sm text-neutral-500">{t.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
