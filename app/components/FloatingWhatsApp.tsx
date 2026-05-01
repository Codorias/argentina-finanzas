"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20recibir%20asesoría%20financiera"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-600 text-white rounded-full shadow-lg shadow-green-900/20 items-center justify-center hover:bg-green-700 transition-colors hidden md:flex"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
    </motion.a>
  );
}
