"use client";

import { useState } from "react";
import { MessageCircle, Mail, ChevronDown, ChevronUp } from "lucide-react";
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
              <p className="text-sm mt-1">Joaquín Rodríguez Nuin — Agente Productor CNV #2245</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
              <a href="mailto:contacto@argentinafinanzas.com" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Mail size={14} /> contacto@argentinafinanzas.com
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
              <a href="https://www.instagram.com/argentinafinanzas" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@argentinafinanzas" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.39a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.81z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@argentinafinanzas" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/joaquin-rodriguez-nuin" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
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
                <strong>Argentina Finanzas</strong> — Joaquín Rodríguez Nuin, Agente Productor inscripto en la Comisión Nacional de Valores (CNV) bajo matrícula <strong>#2245</strong>. La información contenida en este sitio tiene carácter meramente informativo y no constituye oferta pública, solicitud de oferta ni asesoramiento de inversión personalizado sin evaluación previa.
              </p>
              <p>
                Los rendimientos pasados no garantizan resultados futuros. Los productos de inversión pueden perder valor. Cualquier decisión de inversión debe ser tomada por el inversor considerando su propia situación y objetivos.
              </p>
              <p>
                <strong>Custodia:</strong> Los activos de los clientes se mantienen en cuentas a nombre del propio cliente en entidades reguladas por la CNV y/o el Banco Central de la República Argentina (BCRA). Argentina Finanzas no recibe, custodia ni administra fondos de terceros.
              </p>
              <p>
                <strong>Datos personales:</strong> Conforme a la Ley N° 25.326 de Protección de Datos Personales, los datos recolectados a través de este sitio serán tratados de manera confidencial y no serán compartidos con terceros sin consentimiento expreso.
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
