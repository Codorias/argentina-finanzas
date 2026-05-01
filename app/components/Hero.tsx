"use client";

import { ArrowDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import HeroDuck from "./HeroDuck";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-48 md:pb-32 px-6 bg-neutral-50 overflow-hidden">
      {/* Ilustración del pato contracorriente - fondo decorativo */}
      <HeroDuck />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-tight"
        >
          Construye tu patrimonio con <span className="text-red-800">estrategia</span> y confianza
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto"
        >
          Asesoría financiera independiente especializada en planificación de jubilación, inversión y gestión de patrimonio.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="https://wa.me/1234567890?text=Hola,%20me%20gustaría%20agendar%20una%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-red-800 transition-colors w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            Agenda por WhatsApp
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contacto")}
            className="flex items-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-900 rounded-full font-medium hover:border-red-800 hover:text-red-800 transition-colors w-full sm:w-auto justify-center"
          >
            <ArrowDown size={18} />
            Formulario de contacto
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 flex justify-center mt-16"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-neutral-300 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
