"use client";

import { useState } from "react";
import { MessageCircle, Send, AlertTriangle, CalendarDays } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section id="contacto" className="py-20 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Contacto</h2>
          <p className="mt-4 text-lg text-neutral-600">Elegí la forma que prefieras para empezar.</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Opciones de contacto */}
          <AnimatedSection direction="left" className="space-y-4">
            <a
              href="https://calendly.com/tu-usuario" /* <-- REEMPLAZAR CON TU LINK DE CALENDLY */
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-red-800 transition-colors">
                <CalendarDays size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold">Agendá una reunión</p>
                <p className="text-sm text-neutral-400">Elegí día y horario en mi calendario. Sin compromiso.</p>
              </div>
              <svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20recibir%20asesoría%20financiera"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold">Escribime por WhatsApp</p>
                <p className="text-sm text-green-100">Respuesta en menos de 24 horas.</p>
              </div>
              <svg className="w-5 h-5 text-green-200 group-hover:text-white transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-100">
              <p className="font-medium text-neutral-900 mb-1">Email directo</p>
              <a href="mailto:contacto@argentinafinanzas.com" className="text-red-800 hover:underline">
                contacto@argentinafinanzas.com
              </a>
              <p className="text-sm text-neutral-500 mt-1">Para consultas técnicas o documentación.</p>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-100">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-sm text-amber-800">
                <p className="font-medium">Importante</p>
                <p className="mt-1">
                  Los rendimientos pasados no garantizan resultados futuros. La información proporcionada tiene carácter orientativo y no constituye oferta pública ni asesoramiento de inversión personalizado sin evaluación previa.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Formulario */}
          <AnimatedSection direction="right">
            <div className="bg-neutral-50 rounded-2xl border border-neutral-100 p-6 sm:p-8">
              <h3 className="font-semibold text-neutral-900 mb-1">O completá el formulario</h3>
              <p className="text-sm text-neutral-500 mb-6">Te contacto por email o teléfono a la brevedad.</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-neutral-700 mb-1">Nombre completo</label>
                  <input
                    required
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all"
                    placeholder="Ej: María González"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Correo electrónico</label>
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all"
                    placeholder="maria@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-neutral-700 mb-1">Teléfono (opcional)</label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all"
                    placeholder="+54 11 0000 0000"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-neutral-700 mb-1">Mensaje</label>
                  <textarea
                    required
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    value={form.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all resize-none"
                    placeholder="Cuéntame brevemente en qué puedo ayudarte..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-red-800 transition-colors disabled:opacity-70"
                >
                  <Send size={18} />
                  {status === "sending" ? "Enviando..." : status === "sent" ? "¡Mensaje enviado!" : "Enviar mensaje"}
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
