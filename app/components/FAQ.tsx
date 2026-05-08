"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const faqs = [
  {
    question: "¿Vos manejás mi plata?",
    answer: "No. Tu plata queda siempre en cuentas a tu nombre, en brokers regulados. Yo asesoro y recomiendo, pero las decisiones y los movimientos los hacés vos (o me autorizás puntualmente). Nunca recibo ni custodio fondos de clientes.",
  },
  {
    question: "¿Se puede invertir desde Argentina hacia el mundo?",
    answer: "Sí, y es lo que hacemos. Armamos carteras globales —EE.UU., Europa, mercados emergentes, índices, bonos— operando legalmente desde Argentina con cuentas habilitadas. No te quedás atado al riesgo argentino.",
  },
  {
    question: "¿Cuál es el mínimo para empezar?",
    answer: "No hay un monto mínimo fijo. La idea es que empieces con lo que tenés, aunque sea poco, y construyas el hábito. Mucho más importante que el monto inicial es el plan, la constancia y empezar temprano.",
  },
  {
    question: "Soy joven. ¿Tiene sentido pensar en jubilación ahora?",
    answer: "Es exactamente cuando más sentido tiene. El interés compuesto premia los años, no los pesos. Empezar a los 30 con poco rinde mucho más que empezar a los 50 con bastante. Mis mejores carteras de retiro son las de quienes empezaron temprano.",
  },
  {
    question: "¿Cómo se cobra la asesoría?",
    answer: "Modelo transparente: honorarios acordados al inicio, sin comisiones ocultas por productos vendidos. Mis recomendaciones se alinean con tus intereses, no con incentivos de terceros.",
  },
  {
    question: "¿Cuánto seguimiento voy a tener?",
    answer: "Acompañamiento constante, no «te doy un plan y chau». Reportes periódicos del rendimiento real de tu cartera, reuniones de revisión y disponibilidad para consultas puntuales cuando aparezcan dudas o cambios.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Preguntas frecuentes</h2>
          <p className="mt-4 text-lg text-neutral-600">Respuestas claras a las dudas más comunes.</p>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="border border-neutral-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-medium text-neutral-900 pr-4">{faq.question}</span>
                  {openIndex === i ? (
                    <ChevronUp className="w-5 h-5 text-red-800 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0" />
                  )}
                </button>
                {openIndex === i && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-neutral-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
