import { useState } from 'react';
import { TrendingUp, DollarSign } from 'lucide-react';

export default function ROICalculator() {
  const [revenue, setRevenue] = useState(2000);
  
  const increase = 0.35; 
  const estimatedIncrease = revenue * increase;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const min = 1000;
  const max = 50000;
  const progressPercentage = ((revenue - min) / (max - min)) * 100;

  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Calcula tu <span className="text-emerald-400">Retorno de Inversión</span>
          </h2>
          <p className="text-xl text-slate-300">
            Descubre cuánto podrías incrementar optimizando tu embudo de conversión y analítica
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 md:p-12">
          <div className="mb-8">
            <label className="block text-lg font-medium text-slate-300 mb-6 text-center">
              ¿Cuál es tu facturación mensual actual?
            </label>
            
            <div className="relative w-full py-2 flex items-center">
              <input
                type="range"
                min={min}
                max={max}
                step="1000"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-2.5 rounded-full appearance-none cursor-pointer outline-none transition-all
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-6
                  [&::-webkit-slider-thumb]:h-6
                  [&::-webkit-slider-thumb]:bg-white
                  [&::-webkit-slider-thumb]:border-[3px]
                  [&::-webkit-slider-thumb]:border-emerald-500
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:shadow-md
                  [&::-webkit-slider-thumb]:cursor-grab
                  active:[&::-webkit-slider-thumb]:cursor-grabbing
                  active:[&::-webkit-slider-thumb]:scale-110
                  
                  [&::-moz-range-thumb]:appearance-none
                  [&::-moz-range-thumb]:w-6
                  [&::-moz-range-thumb]:h-6
                  [&::-moz-range-thumb]:bg-white
                  [&::-moz-range-thumb]:border-[3px]
                  [&::-moz-range-thumb]:border-emerald-500
                  [&::-moz-range-thumb]:rounded-full
                  [&::-moz-range-thumb]:shadow-md
                  [&::-moz-range-thumb]:cursor-grab
                  active:[&::-moz-range-thumb]:cursor-grabbing
                  active:[&::-moz-range-thumb]:scale-110"
                style={{
                  background: `linear-gradient(to right, #10b981 ${progressPercentage}%, #334155 ${progressPercentage}%)`
                }}
              />
            </div>

            <div className="flex justify-between mt-3 text-sm text-slate-500 font-medium">
              <span>$1,000</span>
              <span>$50,000+</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <div className="flex items-center gap-2 text-slate-400 mb-2">
                <DollarSign className="w-5 h-5" />
                <span className="text-sm font-medium">Facturación Actual</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                {formatCurrency(revenue)}
              </div>
              <div className="text-sm text-slate-500 mt-1">por mes</div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-xl p-6">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Incremento Proyectado</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">
                +{formatCurrency(estimatedIncrease)}
              </div>
              <div className="text-sm text-emerald-400/80 mt-1">+35% estimado por mes</div>
            </div>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">¿Cómo logramos este incremento?</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Experiencia de Usuario (UX) y CRO:</strong> Análisis de comportamiento con mapas de calor para rediseñar la navegación, eliminar fricciones y multiplicar la generación de conversiones.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Analítica Server Side:</strong> Medición precisa con Google Tag Manager desde el servidor para registrar la totalidad de los datos, evadir bloqueadores y optimizar el retorno publicitario.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">•</span>
                <span><strong>Rendimiento y Velocidad de Carga:</strong> Optimización técnica extrema para lograr tiempos de respuesta inmediatos, evitando el abandono de usuarios y mejorando el posicionamiento orgánico.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-400 text-sm italic">
              * Proyección basada en la implementación integral de analítica avanzada y optimización de tasa de conversión. Los resultados reales pueden variar según la industria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}