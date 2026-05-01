"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Orden exacto de las secciones en la página
const mainLinks = [
  { label: "Segmentos", id: "segmentos" },
  { label: "Servicios", id: "servicios" },
  { label: "Proceso", id: "proceso" },
  { label: "Calculadora", id: "calculadora" },
];

const moreLinks = [
  { label: "Sobre mí", id: "sobre-mi" },
  { label: "Testimonios", id: "testimonios" },
  { label: "FAQ", id: "faq" },
  { label: "Insights", id: "insights" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    setMoreOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 text-lg font-bold tracking-tight text-neutral-900 shrink-0">
          <img src="/logo.png" alt="Argentina Finanzas" className="h-8 w-auto" />
          <span className="hidden sm:inline">Argentina Finanzas</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-600">
          {mainLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:text-red-800 transition-colors"
            >
              {link.label}
            </button>
          ))}

          {/* Dropdown "Más" */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 hover:text-red-800 transition-colors"
            >
              Más <ChevronDown size={14} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl border border-neutral-100 shadow-lg shadow-neutral-900/5 py-2"
                >
                  {moreLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => scrollTo(link.id)}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-neutral-50 hover:text-red-800 transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contacto")}
            className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-red-800 transition-colors"
          >
            Agenda una llamada
          </motion.button>
        </div>

        {/* Tablet nav (md-lg): primeros 3 links en orden de página */}
        <div className="hidden md:flex lg:hidden items-center gap-5 text-sm font-medium text-neutral-600">
          {[{ label: "Segmentos", id: "segmentos" }, { label: "Servicios", id: "servicios" }, { label: "Proceso", id: "proceso" }].map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="hover:text-red-800 transition-colors">
              {link.label}
            </button>
          ))}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("contacto")}
            className="px-4 py-2 bg-neutral-900 text-white rounded-full hover:bg-red-800 transition-colors text-sm"
          >
            Agenda
          </motion.button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-neutral-900 p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white border-t border-neutral-100"
          >
            <div className="px-6 py-4 flex flex-col gap-1 text-base font-medium text-neutral-600 max-h-[70vh] overflow-y-auto">
              {[
                { label: "Segmentos", id: "segmentos" },
                { label: "Servicios", id: "servicios" },
                { label: "Proceso", id: "proceso" },
                { label: "Calculadora", id: "calculadora" },
                { label: "Sobre mí", id: "sobre-mi" },
                { label: "Testimonios", id: "testimonios" },
                { label: "FAQ", id: "faq" },
                { label: "Insights", id: "insights" },
                { label: "Contacto", id: "contacto" },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-3 py-3 rounded-xl hover:bg-neutral-50 hover:text-red-800 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contacto")}
                className="mt-2 px-4 py-3 bg-neutral-900 text-white rounded-full text-center font-medium"
              >
                Agenda una llamada
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
