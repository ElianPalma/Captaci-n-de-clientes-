import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
          <p className="text-cyan-400 text-sm font-medium">Red de Especialistas · +6 Años de Experiencia</p>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transformamos tu infraestructura web en una{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            máquina de ingresos
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Desarrollo técnico avanzado para empresas que no permiten fallos. Sin intermediarios, solo resultados medibles.
        </p>

        <p className="text-lg text-slate-400 mb-12">
          Especialistas independientes optimizando la adquisición de clientes en España, México y Latinoamérica.
        </p>

        <button
          onClick={onCtaClick}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-lg font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
        >
          Obtener Auditoría de Rendimiento Gratis
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '99.9%', label: 'Continuidad' },
            { value: '+6', label: 'Años Experiencia' },
            { value: '24h', label: 'Respuesta' },
            { value: '3', label: 'Continentes' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}