"use client";

import { MessageCircle, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function StickyBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
      <div className="flex items-center gap-3">
        <motion.a
          whileTap={{ scale: 0.97 }}
          href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20recibir%20asesoría%20financiera"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 text-white rounded-full font-medium text-sm"
        >
          <MessageCircle size={18} />
          WhatsApp
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.97 }}
          href="https://calendly.com/tu-usuario" /* <-- REEMPLAZAR CON TU LINK DE CALENDLY */
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-800 text-white rounded-full font-medium text-sm"
        >
          <CalendarDays size={18} />
          Agendar
        </motion.a>
      </div>
    </div>
  );
}
