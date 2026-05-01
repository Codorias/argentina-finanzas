"use client";

import { motion } from "framer-motion";

export default function HeroDuck() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Pato principal - oculto en mobile, visible en md+ */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute top-1/2 right-0 md:right-4 lg:right-16 -translate-y-1/2 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 opacity-30 lg:opacity-100"
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Líneas de agua / torrente - fluyen hacia la izquierda */}
          <motion.g
            animate={{ x: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <path d="M10 90 Q 40 80, 70 90 T 130 90 T 190 90" stroke="#e5e5e5" strokeWidth="1" strokeLinecap="round" />
            <path d="M0 110 Q 35 100, 70 110 T 140 110 T 200 110" stroke="#e5e5e5" strokeWidth="1" strokeLinecap="round" />
            <path d="M15 130 Q 45 120, 75 130 T 135 130 T 195 130" stroke="#e5e5e5" strokeWidth="1" strokeLinecap="round" />
            <path d="M5 150 Q 40 140, 75 150 T 145 150 T 200 150" stroke="#e5e5e5" strokeWidth="0.8" strokeLinecap="round" />
            <path d="M20 70 Q 50 60, 80 70 T 140 70 T 190 70" stroke="#e5e5e5" strokeWidth="0.8" strokeLinecap="round" />
          </motion.g>

          {/* Silueta de pato nadando hacia la derecha */}
          <g transform="translate(55, 55)">
            {/* Cuerpo */}
            <motion.path
              d="M35 55 C 20 55, 10 45, 10 30 C 10 15, 25 10, 40 12 C 55 14, 70 10, 80 20 C 88 28, 85 40, 75 48 C 65 55, 50 55, 35 55Z"
              stroke="#171717"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Cuello y cabeza */}
            <motion.path
              d="M78 22 C 82 15, 88 8, 90 5 C 92 2, 95 2, 97 4 C 99 6, 98 10, 95 12 C 92 14, 88 16, 85 20"
              stroke="#171717"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Pico */}
            <motion.path
              d="M97 4 L 104 5 L 98 9"
              stroke="#991b1b"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Ojo */}
            <circle cx="93" cy="7" r="1.5" fill="#171717" />
            {/* Ala */}
            <motion.path
              d="M35 38 C 30 38, 25 35, 28 30 C 32 25, 45 25, 55 28 C 62 30, 60 38, 52 40 C 45 42, 38 40, 35 38Z"
              stroke="#171717"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Líneas de plumas en el ala */}
            <path d="M32 32 Q 42 30, 52 33" stroke="#d4d4d4" strokeWidth="0.8" strokeLinecap="round" />
            <path d="M34 36 Q 44 34, 54 37" stroke="#d4d4d4" strokeWidth="0.8" strokeLinecap="round" />
            {/* Cola */}
            <motion.path
              d="M10 32 Q 2 28, 5 22 Q 8 26, 12 28"
              stroke="#171717"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Ondas alrededor del pato */}
            <motion.path
              animate={{ pathLength: [0.8, 1, 0.8], opacity: [0.4, 0.7, 0.4] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              d="M5 58 Q 30 65, 60 58 Q 90 51, 110 58"
              stroke="#991b1b"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* Pequeñas gotas/onda que indican movimiento */}
          <motion.circle
            cx="140"
            cy="125"
            r="2"
            fill="none"
            stroke="#991b1b"
            strokeWidth="1"
            animate={{ cx: [140, 148, 140], opacity: [0.6, 0, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          />
          <motion.circle
            cx="145"
            cy="132"
            r="1.5"
            fill="none"
            stroke="#991b1b"
            strokeWidth="0.8"
            animate={{ cx: [145, 152, 145], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: 0.4, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>

      {/* Elemento decorativo sutil: líneas de contracorriente en el fondo izquierdo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-0 left-0 w-full h-32 md:h-48"
      >
        <svg viewBox="0 0 400 100" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <motion.path
            d="M0 50 Q 100 30, 200 50 T 400 50"
            stroke="#e5e5e5"
            strokeWidth="0.5"
            fill="none"
            animate={{ d: ["M0 50 Q 100 30, 200 50 T 400 50", "M0 50 Q 100 70, 200 50 T 400 50", "M0 50 Q 100 30, 200 50 T 400 50"] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 70 Q 100 50, 200 70 T 400 70"
            stroke="#e5e5e5"
            strokeWidth="0.5"
            fill="none"
            animate={{ d: ["M0 70 Q 100 50, 200 70 T 400 70", "M0 70 Q 100 90, 200 70 T 400 70", "M0 70 Q 100 50, 200 70 T 400 70"] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
