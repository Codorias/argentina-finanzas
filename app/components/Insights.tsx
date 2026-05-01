import { ArrowRight, Clock } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const articles = [
  {
    tag: "Planificación",
    title: "¿Cuánto necesitás para jubilarte sin depender de la ANSES?",
    excerpt: "Un análisis práctico sobre el gap de ingresos en la jubilación y cómo cerrarlo con inversión disciplinada.",
    readTime: "5 min",
    date: "Abr 2025",
  },
  {
    tag: "Inversión",
    title: "Dólar vs. FCI: ¿dónde conviene poner los ahorros en 2025?",
    excerpt: "Comparativa de rendimientos, riesgos y liquidez entre las opciones más elegidas por los ahorristas argentinos.",
    readTime: "7 min",
    date: "Mar 2025",
  },
  {
    tag: "Fiscalidad",
    title: "Bienes Personales: estrategias legales para optimizar la carga tributaria",
    excerpt: "Conocé las herramientas de planificación fiscal que pueden reducir significativamente tu impuesto anual.",
    readTime: "6 min",
    date: "Mar 2025",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-20 md:py-32 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Insights</h2>
          <p className="mt-4 text-lg text-neutral-600">Análisis y estrategias para tomar mejores decisiones financieras.</p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {articles.map((article) => (
            <StaggerItem key={article.title}>
              <article className="group h-full flex flex-col bg-white rounded-2xl border border-neutral-100 overflow-hidden hover:shadow-lg hover:shadow-neutral-900/5 transition-all duration-300 hover:-translate-y-1">
                <div className="h-2 bg-red-800" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-red-800 bg-red-50 px-2.5 py-1 rounded-full">{article.tag}</span>
                    <span className="text-xs text-neutral-400">{article.date}</span>
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-lg leading-snug mb-2 group-hover:text-red-800 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed flex-1">{article.excerpt}</p>
                  <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                      <Clock size={12} />
                      {article.readTime} de lectura
                    </div>
                    <span className="flex items-center gap-1 text-sm font-medium text-red-800 group-hover:gap-2 transition-all">
                      Leer <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
