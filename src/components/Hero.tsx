import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    // CAMBIO APLICADO AQUÍ: Reducción a pt-24 y sm:pt-28
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 overflow-hidden">
      {/* Fondo base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Efectos de iluminación ajustados para no causar overflow en móvil */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center w-full mt-10 md:mt-0">
        
        {/* Etiqueta superior optimizada con palabra clave secundaria */}
        <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
          <span className="text-cyan-400 text-xs sm:text-sm font-medium tracking-wide">
            Agencia de Desarrollo Web · +6 Años de Experiencia
          </span>
        </div>

        {/* H1 optimizado para SEO transaccional. 'block sm:inline' evita cortes abruptos en móvil */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Desarrollo web a medida y{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent block sm:inline">
            tiendas online
          </span>
        </h1>

        {/* Se cambia de <p> a <h2> para establecer jerarquía semántica en el DOM */}
        <h2 className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed px-2">
          Transformamos tu infraestructura técnica en una máquina de ingresos. Diseño y desarrollo web escalable para empresas que no permiten fallos.
        </h2>

        <p className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl mx-auto px-4">
          Especialistas independientes optimizando la adquisición de clientes corporativos en España, México y Latinoamérica.
        </p>

        {/* Botón CTA forzado a ancho completo en móvil (w-full sm:w-auto) para mejor área táctil */}
        <button
          onClick={onCtaClick}
          className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-base sm:text-lg font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-1"
        >
          Solicitar Auditoría Técnica Gratuita
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Grid de estadísticas con tarjetas difuminadas para mejor legibilidad y gaps responsivos */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-2">
          {[
            { value: '99.9%', label: 'Continuidad' },
            { value: '+6', label: 'Años Experiencia' },
            { value: '24h', label: 'Soporte Técnico' },
            { value: '3', label: 'Continentes' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}