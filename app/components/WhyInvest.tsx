"use client";

import { TrendingDown } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";
import { motion, Variants } from "framer-motion";

const centerOrigin = { transformBox: "fill-box" as const, transformOrigin: "center" as const };

/* ---------- helpers ---------- */

function Sparkle({ x, y, s = 1, delay = 0 }: { x: number; y: number; s?: number; delay?: number }) {
  return (
    <motion.path
      d={`M${x} ${y - 3.2 * s} L${x + 0.9 * s} ${y - 0.9 * s} L${x + 3.2 * s} ${y} L${x + 0.9 * s} ${y + 0.9 * s} L${x} ${y + 3.2 * s} L${x - 0.9 * s} ${y + 0.9 * s} L${x - 3.2 * s} ${y} L${x - 0.9 * s} ${y - 0.9 * s} Z`}
      fill="#dc2626"
      style={centerOrigin}
      variants={{
        rest: { scale: 0, opacity: 0 },
        hover: {
          scale: [0, 1.15, 0.9],
          opacity: [0, 1, 0.9],
          transition: { duration: 0.5, delay, ease: "easeOut" },
        },
      }}
    />
  );
}

/* ---------- 1. Vacaciones — vuelo a destino ---------- */

const planeVar: Variants = {
  rest: { x: 288, y: 635, opacity: 0, transition: { duration: 0.3 } },
  hover: {
    x: [288, 313.5, 343, 376.5, 414],
    y: [635, 512.7, 430.8, 389.2, 388],
    opacity: [0, 1, 1, 1, 1],
    transition: { duration: 1.8, ease: "easeInOut", times: [0, 0.25, 0.5, 0.75, 1] },
  },
};

function SceneTravel() {
  return (
    <svg viewBox="30.767 241.591 784.077 458.627" className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet">
      {/* mapamundi real */}
      <image href="/world-map.svg" x="30.767" y="241.591" width="784.077" height="458.627" opacity="0.9" />

      {/* ruta Argentina → Europa */}
      <motion.path
        d="M288 635 Q 335 350 414 388"
        stroke="#dc2626"
        strokeWidth="4"
        strokeDasharray="4 11"
        strokeLinecap="round"
        variants={{ rest: { opacity: 0.5 }, hover: { opacity: 1 } }}
      />

      {/* origen: Argentina */}
      <circle cx="288" cy="635" r="7" fill="#fff" stroke="#737373" strokeWidth="3.5" />

      {/* destino: Europa */}
      <motion.g style={{ transformBox: "fill-box", transformOrigin: "414px 388px" }} variants={{ rest: { scale: 0.7, opacity: 0.5 }, hover: { scale: 1, opacity: 1, transition: { delay: 1.1 } } }}>
        <motion.circle cx="414" cy="388" r="13" fill="none" stroke="#dc2626" strokeWidth="3" style={centerOrigin} variants={{ rest: { opacity: 0 }, hover: { opacity: [0, 0.6, 0], scale: [0.5, 1.2, 1.6], transition: { repeat: Infinity, duration: 1.4, delay: 1.2 } } }} />
        <circle cx="414" cy="388" r="6.5" fill="#dc2626" />
      </motion.g>

      {/* avión */}
      <motion.g variants={planeVar}>
        <g transform="translate(-31.2,-31.2) scale(2.6)">
          <path
            d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2Z"
            fill="#991b1b"
          />
        </g>
      </motion.g>
    </svg>
  );
}

/* ---------- 2. Casa propia — luz que se enciende ---------- */

function SceneHouse() {
  const lightVar = (delay: number): Variants => ({
    rest: { opacity: 0 },
    hover: { opacity: [0, 1, 0.92], transition: { duration: 0.45, delay } },
  });
  return (
    <svg viewBox="0 0 120 76" className="w-full h-full" fill="none">
      {/* piso + sombra */}
      <line x1="14" y1="62" x2="106" y2="62" stroke="#d4d4d4" strokeWidth="1.5" />
      <motion.ellipse cx="60" cy="64" rx="30" ry="3" fill="#000" variants={{ rest: { opacity: 0.05 }, hover: { opacity: 0.1, scale: 1.05 } }} style={{ transformBox: "fill-box", transformOrigin: "60px 64px" }} />

      <motion.g variants={{ rest: { y: 0 }, hover: { y: -3, transition: { type: "spring", stiffness: 200, damping: 14 } } }}>
        {/* chimenea (detrás del techo) */}
        <rect x="68" y="20" width="4.5" height="10" fill="#fff" stroke="#171717" strokeWidth="1.5" strokeLinejoin="round" />
        {/* paredes */}
        <rect x="42" y="36" width="36" height="26" fill="#fff" stroke="#171717" strokeWidth="1.8" strokeLinejoin="round" />
        {/* techo a dos aguas */}
        <path d="M38 37 L60 19 L82 37 Z" fill="#fff" stroke="#171717" strokeWidth="1.8" strokeLinejoin="round" />

        {/* ventana izquierda (luz) */}
        <motion.rect x="45" y="42" width="8" height="8" rx="0.6" fill="#fbbf24" variants={lightVar(0)} />
        <rect x="45" y="42" width="8" height="8" rx="0.6" stroke="#171717" strokeWidth="1.4" />
        <line x1="49" y1="42" x2="49" y2="50" stroke="#171717" strokeWidth="1" />
        <line x1="45" y1="46" x2="53" y2="46" stroke="#171717" strokeWidth="1" />

        {/* ventana derecha (luz) */}
        <motion.rect x="67" y="42" width="8" height="8" rx="0.6" fill="#fbbf24" variants={lightVar(0.12)} />
        <rect x="67" y="42" width="8" height="8" rx="0.6" stroke="#171717" strokeWidth="1.4" />
        <line x1="71" y1="42" x2="71" y2="50" stroke="#171717" strokeWidth="1" />
        <line x1="67" y1="46" x2="75" y2="46" stroke="#171717" strokeWidth="1" />

        {/* puerta (luz) */}
        <motion.rect x="55" y="50" width="10" height="12" rx="0.6" fill="#f59e0b" variants={lightVar(0.24)} />
        <rect x="55" y="50" width="10" height="12" rx="0.6" stroke="#171717" strokeWidth="1.5" />
        <circle cx="63" cy="56" r="0.9" fill="#171717" />

        <Sparkle x={88} y={22} s={1} delay={0.45} />
        <Sparkle x={32} y={30} s={0.8} delay={0.6} />
      </motion.g>
    </svg>
  );
}

/* ---------- 3. Auto — llega manejando ---------- */

function SceneCar() {
  const wheel: Variants = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { repeat: Infinity, duration: 0.9, ease: "linear" } },
  };
  return (
    <svg viewBox="0 0 120 76" className="w-full h-full" fill="none">
      {/* ruta en movimiento */}
      <motion.g variants={{ rest: { x: 0 }, hover: { x: [0, -16], transition: { repeat: Infinity, duration: 0.5, ease: "linear" } } }}>
        <line x1="10" y1="61" x2="118" y2="61" stroke="#d4d4d4" strokeWidth="2" strokeDasharray="10 8" strokeLinecap="round" />
      </motion.g>

      <motion.g variants={{ rest: { y: 0 }, hover: { y: [0, -0.8, 0], transition: { repeat: Infinity, duration: 0.4 } } }}>
        {/* haz de luz */}
        <motion.path d="M86 46 L104 42 L104 52 L86 50 Z" fill="#fbbf24" variants={{ rest: { opacity: 0 }, hover: { opacity: [0, 0.5, 0.25, 0.5], transition: { duration: 1, repeat: Infinity } } }} />
        {/* carrocería (capó hacia adelante, a la derecha) */}
        <path d="M30 52 L30 42 L36 40 L42 33 L58 33 L66 40 L84 40 L88 52 Z" fill="#fff" stroke="#171717" strokeWidth="1.8" strokeLinejoin="round" />
        {/* ventanas */}
        <path d="M66 40 L60 35 L52 35 L52 40 Z" fill="#fca5a5" stroke="#171717" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M50 35 L44 35 L40 40 L50 40 Z" fill="#fca5a5" stroke="#171717" strokeWidth="1.3" strokeLinejoin="round" />
        {/* faro */}
        <circle cx="87" cy="46" r="1.6" fill="#f59e0b" />
      </motion.g>

      {/* ruedas */}
      <g>
        <motion.g style={centerOrigin} variants={wheel}>
          <circle cx="44" cy="53" r="6.5" fill="#171717" />
          <circle cx="44" cy="53" r="2.4" fill="#fff" />
          <rect x="43.2" y="47" width="1.6" height="12" fill="#fff" rx="0.5" />
          <rect x="38" y="52.2" width="12" height="1.6" fill="#fff" rx="0.5" />
        </motion.g>
        <motion.g style={centerOrigin} variants={wheel}>
          <circle cx="74" cy="53" r="6.5" fill="#171717" />
          <circle cx="74" cy="53" r="2.4" fill="#fff" />
          <rect x="73.2" y="47" width="1.6" height="12" fill="#fff" rx="0.5" />
          <rect x="68" y="52.2" width="12" height="1.6" fill="#fff" rx="0.5" />
        </motion.g>
      </g>
    </svg>
  );
}

/* ---------- 4. Independencia — bandera en la cima ---------- */

function SceneSummit() {
  return (
    <svg viewBox="0 0 120 76" className="w-full h-full" fill="none">
      {/* montañas */}
      <path d="M14 62 L44 30 L58 44 L82 16 L106 62 Z" stroke="#171717" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M82 16 L74 26 L80 30 Z" fill="#171717" opacity="0.12" />
      <line x1="10" y1="62" x2="110" y2="62" stroke="#d4d4d4" strokeWidth="1.5" />

      {/* sendero punteado */}
      <path d="M40 62 Q 58 56 66 46 T 82 18" stroke="#f87171" strokeWidth="1.5" strokeDasharray="1.5 4.5" strokeLinecap="round" opacity="0.5" />

      {/* escalador que sube */}
      <motion.circle
        r="2.6"
        fill="#dc2626"
        variants={{
          rest: { cx: 40, cy: 62, opacity: 0 },
          hover: {
            cx: [40, 58, 66, 78, 82],
            cy: [62, 52, 46, 28, 18],
            opacity: [0, 1, 1, 1, 0],
            transition: { duration: 1.3, ease: "easeInOut" },
          },
        }}
      />

      {/* bandera en la cima */}
      <motion.g
        style={{ transformBox: "fill-box", transformOrigin: "82px 16px" }}
        variants={{ rest: { scale: 0, opacity: 0 }, hover: { scale: 1, opacity: 1, transition: { delay: 1.1, type: "spring", stiffness: 220, damping: 12 } } }}
      >
        <line x1="82" y1="16" x2="82" y2="3" stroke="#171717" strokeWidth="1.6" strokeLinecap="round" />
        <motion.path
          d="M82 4 L95 7 L82 10 Z"
          fill="#dc2626"
          style={{ transformBox: "fill-box", transformOrigin: "82px 7px" }}
          variants={{ rest: {}, hover: { skewX: [0, 8, -4, 6, 0], transition: { repeat: Infinity, duration: 1.2, delay: 1.3 } } }}
        />
      </motion.g>

      <Sparkle x={92} y={12} s={1} delay={1.3} />
      <Sparkle x={74} y={8} s={0.8} delay={1.5} />
    </svg>
  );
}

/* ---------- data ---------- */

const goals = [
  { scene: SceneTravel, label: "Vacaciones sin pedir préstamo" },
  { scene: SceneHouse, label: "La casa propia" },
  { scene: SceneCar, label: "El auto que necesitás" },
  { scene: SceneSummit, label: "Independencia real" },
];

export default function WhyInvest() {
  return (
    <section id="por-que" className="py-20 md:py-32 px-6 bg-neutral-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="max-w-3xl">
          <p className="font-mono text-xs tracking-widest uppercase text-red-800 mb-4">¿Por qué invertir?</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
            Si todos entendieran que <span className="text-red-800">hasta el dólar se devalúa</span>,
            nadie se quedaría mirando.
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            La plata quieta pierde valor todos los días. La inflación local te corre, la global también.
            Invertir no es para ricos: es la forma de cuidar lo que ganaste y convertirlo en metas reales.
          </p>
        </AnimatedSection>

        {/* Visualización del costo de no invertir */}
        <AnimatedSection delay={0.2} className="mt-12">
          <div className="rounded-2xl bg-neutral-900 text-white p-6 sm:p-10 grid md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-2 text-red-400">
                <TrendingDown size={18} />
                <p className="font-mono text-xs tracking-widest uppercase">Plata quieta</p>
              </div>
              <p className="mt-3 text-3xl sm:text-4xl font-bold">−2 a −8%</p>
              <p className="mt-1 text-sm text-neutral-400">poder adquisitivo perdido al año, incluso en dólares.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-emerald-400">
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="font-mono"
                >
                  ↗
                </motion.span>
                <p className="font-mono text-xs tracking-widest uppercase">Cartera global</p>
              </div>
              <p className="mt-3 text-3xl sm:text-4xl font-bold">~7 a 10%</p>
              <p className="mt-1 text-sm text-neutral-400">retorno histórico promedio de un portafolio diversificado en USD.</p>
            </div>
            <div>
              <div className="flex items-center gap-2 text-amber-400">
                <p className="font-mono text-xs tracking-widest uppercase">El costo de esperar</p>
              </div>
              <p className="mt-3 text-3xl sm:text-4xl font-bold">10 años</p>
              <p className="mt-1 text-sm text-neutral-400">de interés compuesto que perdés por esperar a &quot;juntar más&quot;.</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Metas tangibles */}
        <AnimatedSection delay={0.3} className="mt-12">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-sm text-neutral-500 mb-4">No invertís por números. Invertís por:</p>
            <p className="hidden sm:block text-xs text-neutral-400 font-mono mb-4">pasá el cursor ✦</p>
          </div>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4" staggerDelay={0.08}>
            {goals.map((g) => (
              <StaggerItem key={g.label}>
                <motion.div
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  whileTap="hover"
                  className="group relative h-full overflow-hidden rounded-xl border border-neutral-200 bg-white hover:border-red-800/40 hover:shadow-lg hover:shadow-red-900/5 transition-colors duration-300"
                >
                  <div className="h-24 sm:h-28 w-full bg-gradient-to-b from-white to-neutral-50/80 group-hover:from-red-50/40 group-hover:to-white transition-colors duration-300">
                    <g.scene />
                  </div>
                  <div className="px-4 pb-4 pt-1 border-t border-neutral-100">
                    <p className="text-sm sm:text-base font-medium text-neutral-900 leading-snug">{g.label}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </AnimatedSection>
      </div>
    </section>
  );
}
