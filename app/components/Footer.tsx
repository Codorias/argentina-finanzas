"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone, ChevronDown, ChevronUp } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export default function Footer() {
  const [disclaimerOpen, setDisclaimerOpen] = useState(false);

  return (
    <footer className="pt-12 pb-6 px-6 bg-neutral-900 text-neutral-300">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-white font-semibold">Argentina Finanzas</p>
              <p className="text-sm mt-1">Joaquín Rodríguez — Asesor Financiero Independiente</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
              <a href="mailto:contacto@argentinafinanzas.com" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Mail size={14} /> contacto@argentinafinanzas.com
              </a>
              <a href="tel:+54110000000" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Phone size={14} /> +54 11 0000 0000
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-10 pt-8 border-t border-neutral-800">
          <button
            onClick={() => setDisclaimerOpen(!disclaimerOpen)}
            className="flex items-center gap-2 text-xs text-neutral-500 hover:text-neutral-300 transition-colors mx-auto md:mx-0"
          >
            {disclaimerOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            Avisos legales y regulatorios
          </button>

          {disclaimerOpen && (
            <div className="mt-4 text-xs text-neutral-500 leading-relaxed space-y-3 max-w-3xl">
              <p>
                <strong>Argentina Finanzas</strong> es un asesor financiero independiente. La información contenida en este sitio web tiene carácter meramente informativo y no constituye oferta pública, solicitud de oferta ni asesoramiento de inversión personalizado.
              </p>
              <p>
                Los rendimientos pasados no garantizan resultados futuros. Los productos de inversión pueden perder valor. Cualquier decisión de inversión debe ser tomada por el inversor considerando su propia situación y objetivos.
              </p>
              <p>
                <strong>Regulación:</strong> Registrado ante la Comisión Nacional de Valores (CNV) de Argentina. Matrícula AAGI #XXXX. Los fondos de inversión están regulados por la CNV y se rigen por las normas de la Ley N° 24.083 y modificatorias.
              </p>
              <p>
                <strong>Datos personales:</strong> Conforme a la Ley N° 25.326 de Protección de Datos Personales, los datos recolectados a través de este sitio serán tratados de manera confidencial y no serán compartidos con terceros sin consentimiento expreso.
              </p>
              <p>
                <strong>Custodia:</strong> Los activos de nuestros clientes se custodian en entidades financieras reguladas por el Banco Central de la República Argentina (BCRA).
              </p>
            </div>
          )}
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-800 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} Argentina Finanzas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
