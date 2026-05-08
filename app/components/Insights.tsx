import { ArrowRight, Clock } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

const articles = [
  {
    tag: "Educación",
    title: "Hasta el dólar se devalúa: por qué tener «guardada» tu plata es perderla",
    excerpt: "La inflación de EE.UU. también te corre. Te muestro qué significa esto en números concretos para tus ahorros.",
    readTime: "5 min",
    date: "2026",
  },
  {
    tag: "Cartera global",
    title: "Cómo invertir desde Argentina hacia el mundo (sin volverte loco)",
    excerpt: "Brokers, instrumentos, regulación y los pasos reales para acceder a mercados globales operando legalmente desde acá.",
    readTime: "7 min",
    date: "2026",
  },
  {
    tag: "Retiro",
    title: "Empezá tu cartera de retiro a los 30: el costo real de esperar 10 años",
    excerpt: "El interés compuesto premia los años, no los pesos. Una cuenta clara de cuánto te cuesta postergar.",
    readTime: "6 min",
    date: "2026",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-20 md:py-32 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <p className="font-mono text-xs tracking-widest uppercase text-red-800 mb-3">Insights</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">
            Lo que te conviene saber antes de invertir
          </h2>
          <p className="mt-4 text-lg text-neutral-600">Conceptos claros, sin chamuyo, en criollo.</p>
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
