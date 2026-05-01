"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const faqs = [
  {
    question: "¿Cuál es el mínimo de inversión para empezar?",
    answer: "No existe un monto mínimo fijo. Diseñamos estrategias adaptadas a cada perfil, desde pequeños ahorristas hasta patrimonios importantes. Lo importante es empezar con un plan claro.",
  },
  {
    question: "¿Cómo se cobra la asesoría?",
    answer: "Trabajo con un modelo de fee-only (solo honorarios), sin comisiones ocultas por productos vendidos. Esto garantiza que mis recomendaciones estén 100% alineadas con tus intereses. El fee depende de la complejidad y el servicio contratado.",
  },
  {
    question: "¿Dónde se custodian mis activos?",
    answer: "Tus activos se mantienen a tu nombre en entidades financieras reguladas por el BCRA y la CNV. Yo no tengo acceso a tu dinero; mi rol es asesorarte en las decisiones de inversión.",
  },
  {
    question: "¿Con qué frecuencia nos reunimos?",
    answer: "La frecuencia depende del plan contratado. Generalmente hacemos reuniones trimestrales de seguimiento, pero estoy disponible para consultas puntuales cuando lo necesites.",
  },
  {
    question: "¿Qué diferencia a un asesor independiente de un banco?",
    answer: "Como asesor independiente no tengo conflictos de interés: no cobro comisiones por vender productos de ninguna entidad. Mi único objetivo es optimizar tu patrimonio con las mejores opciones del mercado.",
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
