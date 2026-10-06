import { Zap, Wallet, Landmark, CreditCard, Banknote, Smartphone } from 'lucide-react';

interface Step {
  title: string;
  description: string;
}

interface Phase {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  accent: 'cyan' | 'emerald';
  steps: Step[];
}

const phases: Phase[] = [
  {
    id: 'proceso-desarrollo',
    label: 'Fase 01',
    title: 'Proceso de Desarrollo',
    subtitle: 'De principio a fin',
    accent: 'cyan',
    steps: [
      {
        title: 'Inicio de fase de diseño y aprobación',
        description:
          'Diseño la interfaz de tu sitio y te la presento para tu aprobación antes de escribir una sola línea de código.',
      },
      {
        title: 'Inicio de desarrollo web',
        description:
          'Con el diseño aprobado, construyo tu sitio con código optimizado, rápido y adaptable a cualquier dispositivo.',
      },
      {
        title: 'Reunión de muestras y validación',
        description:
          'Nos reunimos para revisar una muestra funcional, validar que todo cumple lo acordado y ajustar los detalles necesarios.',
      },
      {
        title: 'Entrega del proyecto y revisión de manual',
        description:
          'Te entrego el proyecto terminado y revisamos juntos el manual para que sepas exactamente cómo funciona.',
      },
      {
        title: 'Entrega de certificado y manual en vivo',
        description:
          'Recibes tu certificado de entrega y te explico en vivo, paso a paso, cómo usar y gestionar tu sitio.',
      },
      {
        title: 'Cierre de propuesta y continuidad en caso de requerir',
        description:
          'Cerramos la propuesta y, si lo necesitas, damos continuidad al proyecto con el plan de Post Desarrollo.',
      },
    ],
  },
  {
    id: 'proceso-post-desarrollo',
    label: 'Fase 02',
    title: 'Proceso Post Desarrollo',
    subtitle: 'Marketing digital, accesibilidad y SEO',
    accent: 'emerald',
    steps: [
      {
        title: 'Reunión de propuesta',
        description:
          'Definimos tus objetivos, tu público y las prioridades de marketing digital para tu sitio.',
      },
      {
        title: 'Preparación y configuración web con métricas',
        description:
          'Configuro Analytics, Tag Manager y Search Console para empezar a medir desde el primer día.',
      },
      {
        title: 'Optimización de accesibilidad y SEO',
        description:
          'Mejoro la accesibilidad, la velocidad y la estructura del contenido para que tu sitio sea más fácil de usar y de encontrar en Google.',
      },
      {
        title: 'Preparación de compra',
        description:
          'Preparo el recorrido de compra o contacto: formularios, llamadas a la acción y embudos listos para convertir visitas en clientes.',
      },
      {
        title: 'Medición y métricas',
        description:
          'Analizo los resultados con datos reales y te comparto recomendaciones para seguir mejorando.',
      },
    ],
  },
];

const paymentMethods = [
  {
    icon: Banknote,
    name: 'Transferencia Bancaria',
    description: 'En euros (EUR) y en dólares (USD)',
    highlight: false,
  },
  {
    icon: Zap,
    name: 'Binance Pay',
    description: 'USDT / USDC',
    highlight: true,
  },
  {
    icon: Smartphone,
    name: 'Airtm',
    description: 'Wallet digital',
    highlight: false,
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
    name: 'Zinli',
    description: 'Wallet digital',
    highlight: false,
  },
];

export default function Methodology() {
  return (
    <section id="proceso" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Mi Metodología de <span className="text-emerald-400 block sm:inline">Desarrollo Web</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-2">
            Un proceso transparente y predecible. Sabes exactamente qué se entrega en cada fase de tu proyecto, y qué pasa después del lanzamiento.
          </p>
        </div>

        {/* Dos fases: línea de tiempo vertical */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {phases.map((phase) => {
            const isCyan = phase.accent === 'cyan';
            return (
              <div
                key={phase.id}
                id={phase.id}
                className={`bg-slate-800 border border-slate-700 rounded-2xl p-5 sm:p-8 transition-all duration-300 ${
                  isCyan ? 'hover:border-cyan-500/50' : 'hover:border-emerald-500/50'
                }`}
              >
                <div className="mb-6 sm:mb-8">
                  <div
                    className={`text-xs sm:text-sm font-bold mb-1 tracking-wider uppercase ${
                      isCyan ? 'text-cyan-400' : 'text-emerald-400'
                    }`}
                  >
                    {phase.label}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{phase.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base mt-1">{phase.subtitle}</p>
                </div>

                <ol className="relative">
                  {phase.steps.map((step, index) => {
                    const isLast = index === phase.steps.length - 1;
                    return (
                      <li key={step.title} className="relative flex gap-4 sm:gap-5 pb-6 last:pb-0">
                        {!isLast && (
                          <span
                            aria-hidden="true"
                            className={`absolute left-[17px] top-9 bottom-0 w-0.5 ${
                              isCyan ? 'bg-cyan-500/30' : 'bg-emerald-500/30'
                            }`}
                          ></span>
                        )}
                        <span
                          className={`relative z-10 w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 text-slate-900 font-bold text-sm flex items-center justify-center shadow-lg ${
                            isCyan ? 'shadow-cyan-500/20' : 'shadow-emerald-500/20'
                          }`}
                        >
                          {index + 1}
                        </span>
                        <div className="pt-0.5">
                          <h4 className="text-base sm:text-lg font-semibold text-white leading-snug mb-1">{step.title}</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            );
          })}
        </div>

        {/* Panel de Pagos */}
        <div id="pagos" className="bg-slate-800 border border-slate-700 rounded-2xl p-5 sm:p-8 md:p-12 shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center leading-tight">
            Gestión de Pagos <span className="text-cyan-400 block sm:inline">Internacionales</span>
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
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
                  <method.icon
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${method.highlight ? 'text-cyan-400' : 'text-slate-400'}`}
                  />
                </div>
                <h4 className="font-semibold text-white text-sm sm:text-base mb-1">{method.name}</h4>
                <p className="text-xs sm:text-sm text-slate-400 mb-2">{method.description}</p>

                {method.highlight && (
                  <span className="text-[10px] sm:text-xs text-cyan-300 font-bold tracking-wider uppercase bg-cyan-500/20 px-2 py-1 rounded-full">
                    Sugerido
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Condiciones de pago */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-xl p-5 sm:p-8">
            <h4 className="font-bold text-white mb-3 text-lg sm:text-xl text-center">Condiciones de Pago</h4>
            <p className="text-slate-400 text-center mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
              Un esquema simple y transparente, en dos pagos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 sm:p-6 relative overflow-hidden group hover:border-emerald-500/50 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500 group-hover:w-2 transition-all"></div>
                <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2 pl-2">50%</div>
                <h5 className="font-bold text-white mb-2 text-base sm:text-lg pl-2">Pago inicial</h5>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-2">
                  Para comenzar el proyecto. Cubre el inicio del diseño, la arquitectura base y la contratación de infraestructura (hosting/dominio) si se requiere.
                </p>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 sm:p-6 relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 group-hover:w-2 transition-all"></div>
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2 pl-2">50%</div>
                <h5 className="font-bold text-white mb-2 text-base sm:text-lg pl-2">Al finalizar el proyecto</h5>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pl-2">
                  Al terminar el proyecto, tras el control de calidad, la entrega y tu aprobación del sitio funcional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
