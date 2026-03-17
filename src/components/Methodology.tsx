import { Search, Code, Rocket, Zap, Wallet, Landmark, CreditCard } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Diagnóstico Técnico',
      description:
        'Auditamos tu infraestructura actual, definimos los objetivos de conversión y trazamos una estrategia de desarrollo clara con entregables documentados.',
    },
    {
      icon: Code,
      number: '02',
      title: 'Desarrollo Ágil',
      description:
        'Ejecución del código mediante sprints semanales. Evaluamos el progreso real cada 7 días con demostraciones funcionales de tu sitio web.',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Deploy y Escalamiento',
      description:
        'Lanzamiento en servidores de alto rendimiento, configuración de analítica avanzada y soporte técnico continuo para asegurar la estabilidad.',
    },
  ];

  const paymentMethods = [
    {
      icon: Zap,
      name: 'Binance Pay',
      description: 'USDT / USDC',
      highlight: true,
    },
    {
      icon: Wallet,
      name: 'Bybit',
      description: 'USDT / USDC',
      highlight: false,
    },
    {
      icon: Landmark,
      name: 'Facebank',
      description: 'Transferencia USA',
      highlight: false,
    },
    {
      icon: CreditCard,
      name: 'Wallets Digitales',
      description: 'Zinli / Airtm',
      highlight: false,
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Nuestra Metodología de <span className="text-emerald-400 block sm:inline">Desarrollo Web</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-2">
            Un proceso de ingeniería transparente y predecible. Sabes exactamente qué código se entrega en cada fase de tu proyecto.
          </p>
        </div>

        {/* Metodología: Grid y Línea conectora */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col h-full">
              {/* Línea conectora solo visible en escritorio */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[3.5rem] left-[50%] w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent z-0"></div>
              )}
              
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 relative z-10 flex-grow hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/20">
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="text-xs sm:text-sm text-cyan-400 font-bold mb-1 tracking-wider uppercase">Fase {step.number}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Panel de Pagos */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 sm:p-8 md:p-12 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center leading-tight">
            Gestión de Pagos <span className="text-cyan-400 block sm:inline">Internacionales</span>
          </h3>

          {/* Grid de métodos de pago corregido */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className={`flex flex-col items-center justify-center text-center p-4 sm:p-6 rounded-xl border transition-all duration-300 ${
                  method.highlight
                    ? 'bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                    : 'bg-slate-900/50 border-slate-700 hover:border-cyan-500/30'
                }`}
              >
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 ${
                    method.highlight ? 'bg-cyan-500/20' : 'bg-slate-800'
                  }`}
                >
                  <method.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    method.highlight ? 'text-cyan-400' : 'text-slate-400'
                  }`} />
                </div>
                <h4 className="font-semibold text-white text-sm sm:text-base mb-1">{method.name}</h4>
                <p className="text-xs sm:text-sm text-slate-400 mb-2">{method.description}</p>
                
                {/* Etiqueta condicional corregida */}
                {method.highlight && (
                  <span className="text-[10px] sm:text-xs text-cyan-300 font-bold tracking-wider uppercase bg-cyan-500/20 px-2 py-1 rounded-full">
                    Sugerido
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Sección de Esquemas */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-5 sm:p-8">
            <h4 className="font-bold text-white mb-3 text-lg sm:text-xl text-center">Planificación Financiera Flexible</h4>
            <p className="text-slate-400 text-center mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
              Adapta la inversión a los flujos de caja de tu empresa mediante dos esquemas de trabajo por hitos.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Opción A */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 sm:p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 group-hover:w-2 transition-all"></div>
                <h5 className="font-bold text-emerald-400 mb-4 text-base sm:text-lg border-b border-slate-700 pb-3">Opción A: Estándar (50/50)</h5>
                <ul className="space-y-3 sm:space-y-4 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold w-10 shrink-0 text-base">50%</span>
                    <span className="pt-0.5">Anticipo inicial. Cubre la arquitectura base y contratación de infraestructura (Hosting/Dominio) si se requiere.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold w-10 shrink-0 text-base">50%</span>
                    <span className="pt-0.5">Al finalizar, tras el control de calidad, entrega y aprobación del proyecto funcional.</span>
                  </li>
                </ul>
              </div>

              {/* Opción B */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 sm:p-6 relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 group-hover:w-2 transition-all"></div>
                <h5 className="font-bold text-cyan-400 mb-4 text-base sm:text-lg border-b border-slate-700 pb-3">Opción B: Por Hitos (25/25/50)</h5>
                <ul className="space-y-3 sm:space-y-4 text-slate-300 text-xs sm:text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold w-10 shrink-0 text-base">25%</span>
                    <span className="pt-0.5">Anticipo inicial. Inicio del diseño de interfaces y estructuración del código.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold w-10 shrink-0 text-base">25%</span>
                    <span className="pt-0.5">Punto medio. Tras la demostración y aprobación de los avances estructurales principales.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold w-10 shrink-0 text-base">50%</span>
                    <span className="pt-0.5">Al finalizar, posterior al despliegue final en producción.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}