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
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          {/* H2 optimizado con palabras clave SEO B2B */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Calcula el <span className="text-emerald-400 block sm:inline">Retorno de Inversión</span> (ROI)
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-2">
            Descubre cuánto podría incrementar tu facturación mensual optimizando la velocidad de carga y la tasa de conversión (CRO) de tu plataforma.
          </p>
        </div>

        {/* Padding reducido en móvil (p-5) */}
        <div className="bg-slate-900 border border-slate-700 rounded-2xl p-5 sm:p-8 md:p-12 shadow-xl">
          <div className="mb-8">
            <label className="block text-base sm:text-lg font-medium text-slate-300 mb-6 text-center" htmlFor="revenue-slider">
              ¿Cuál es la facturación mensual actual de tu negocio digital?
            </label>
            
            <div className="relative w-full py-2 flex items-center">
              {/* Input range reescrito para compatibilidad cross-browser y móvil. 
                  Se eliminaron las clases de pseudo-elementos complejas que rompen la compilación en NextJS/Vite */}
              <input
                id="revenue-slider"
                type="range"
                min={min}
                max={max}
                step="1000"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-full appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-emerald-500/50 accent-emerald-500 transition-all shadow-inner"
                style={{
                  background: `linear-gradient(to right, #10b981 ${progressPercentage}%, #334155 ${progressPercentage}%)`
                }}
                aria-label="Deslizador de facturación mensual"
              />
            </div>

            <div className="flex justify-between mt-4 text-xs sm:text-sm text-slate-500 font-medium px-1">
              <span>$1,000 USD</span>
              <span>$50,000+ USD</span>
            </div>
          </div>

          {/* Grid de resultados financieros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 sm:p-6 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-400 mb-2">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">Facturación Base</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {formatCurrency(revenue)}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1">por mes</div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-900/40 border border-emerald-500/30 rounded-xl p-5 sm:p-6 text-center sm:text-left shadow-[0_0_15px_rgba(16,185,129,0.15)] relative overflow-hidden">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-emerald-400 mb-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">Potencial de Crecimiento</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 tracking-tight">
                +{formatCurrency(estimatedIncrease)}
              </div>
              <div className="text-xs sm:text-sm text-emerald-400/80 mt-1 font-medium">~35% extra mensual estimado</div>
              
              {/* Brillo decorativo sutil */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            </div>
          </div>

          {/* Sección explicativa optimizada para lectura en móvil */}
          <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-5 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">¿Cómo se logra este incremento técnico?</h3>
            <ul className="space-y-4 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1 flex-shrink-0 font-bold">•</span>
                <span><strong className="text-white">Optimización de Velocidad (WPO):</strong> Por cada segundo extra de carga, pierdes hasta un 7% de conversiones. Refactorizamos el código para lograr métricas Core Web Vitals en verde, reteniendo al usuario.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1 flex-shrink-0 font-bold">•</span>
                <span><strong className="text-white">Analítica Avanzada Server-Side:</strong> Implementación de Google Tag Manager (GTM) del lado del servidor. Recuperamos hasta un 30% de datos perdidos por bloqueadores de anuncios (AdBlockers), optimizando el presupuesto de tus campañas.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1 flex-shrink-0 font-bold">•</span>
                <span><strong className="text-white">Estrategia CRO & UX:</strong> Auditoría de embudos de venta y mapas de calor para rediseñar la arquitectura de información, reduciendo la fricción en el proceso de pago.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 sm:mt-8 text-center px-2">
            <p className="text-slate-500 text-xs sm:text-sm italic leading-relaxed">
              * Proyección referencial basada en la optimización de código y analítica avanzada. El impacto real del desarrollo web varía según la infraestructura previa y el sector del negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}