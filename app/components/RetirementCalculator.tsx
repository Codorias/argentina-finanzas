"use client";

import { useState, useMemo } from "react";
import { Calculator, TrendingUp, PiggyBank, Calendar } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

export default function RetirementCalculator() {
  const [edadActual, setEdadActual] = useState(35);
  const [edadJubilacion, setEdadJubilacion] = useState(65);
  const [ahorroMensual, setAhorroMensual] = useState(50000);
  const [ahorroActual, setAhorroActual] = useState(500000);
  const [rendimientoAnual, setRendimientoAnual] = useState(8);

  const resultado = useMemo(() => {
    const años = edadJubilacion - edadActual;
    const meses = años * 12;
    const tasaMensual = rendimientoAnual / 100 / 12;

    // FV de aportes mensuales
    const fvAportes = ahorroMensual * ((Math.pow(1 + tasaMensual, meses) - 1) / tasaMensual);
    // FV de ahorro actual
    const fvActual = ahorroActual * Math.pow(1 + tasaMensual, meses);

    return Math.round(fvAportes + fvActual);
  }, [edadActual, edadJubilacion, ahorroMensual, ahorroActual, rendimientoAnual]);

  const formatPesos = (num: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    }).format(num);
  };

  const Slider = ({ label, value, min, max, step, onChange, unit }: {
    label: string; value: number; min: number; max: number; step: number;
    onChange: (v: number) => void; unit: string;
  }) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <label className="font-medium text-neutral-700">{label}</label>
        <span className="font-semibold text-red-800">{value.toLocaleString("es-AR")} {unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-red-800"
      />
    </div>
  );

  return (
    <section id="calculadora" className="py-20 md:py-32 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900">Calculá tu jubilación</h2>
          <p className="mt-4 text-lg text-neutral-600">Descubrí cuánto capital podrías acumular con un plan de ahorro constante.</p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Inputs */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-5 h-5 text-red-800" />
                <h3 className="font-semibold text-neutral-900">Tus datos</h3>
              </div>

              <Slider label="Edad actual" value={edadActual} min={18} max={70} step={1} onChange={setEdadActual} unit="años" />
              <Slider label="Edad de jubilación deseada" value={edadJubilacion} min={Math.max(edadActual + 1, 40)} max={80} step={1} onChange={setEdadJubilacion} unit="años" />
              <Slider label="Ahorro mensual estimado" value={ahorroMensual} min={10000} max={500000} step={10000} onChange={setAhorroMensual} unit="$/mes" />
              <Slider label="Ahorro actual acumulado" value={ahorroActual} min={0} max={10000000} step={50000} onChange={setAhorroActual} unit="$" />
              <Slider label="Rendimiento anual estimado" value={rendimientoAnual} min={1} max={15} step={0.5} onChange={setRendimientoAnual} unit="%" />

              <p className="text-xs text-neutral-400 pt-2">
                *Estimación con interés compuesto. Los rendimientos pasados no garantizan resultados futuros.
              </p>
            </div>

            {/* Resultado */}
            <div className="bg-neutral-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-red-400" />
                <h3 className="font-semibold">Proyección al {edadJubilacion}</h3>
              </div>

              <motion.div
                key={resultado}
                initial={{ scale: 0.95, opacity: 0.7 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm text-neutral-400 mb-1">Capital proyectado</p>
                <p className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  {formatPesos(resultado)}
                </p>
              </motion.div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Años de ahorro</p>
                    <p className="font-semibold">{edadJubilacion - edadActual} años</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <PiggyBank className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-400">Aporte total</p>
                    <p className="font-semibold">{formatPesos(ahorroMensual * 12 * (edadJubilacion - edadActual))}</p>
                  </div>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contacto"
                className="mt-8 w-full py-3 bg-red-800 text-white rounded-full font-medium text-center hover:bg-red-700 transition-colors"
              >
                Quiero un plan real
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
