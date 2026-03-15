import { Search, Code, Rocket, Zap, Wallet, Landmark, CreditCard } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Diagnóstico Gratuito',
      description:
        'Analizamos tu situación actual, objetivos de negocio y definimos una estrategia clara con entregables específicos.',
    },
    {
      icon: Code,
      number: '02',
      title: 'Desarrollo Ágil',
      description:
        'Sprints semanales con entregas incrementales. Ves el progreso real cada 7 días con demos funcionales.',
    },
    {
      icon: Rocket,
      number: '03',
      title: 'Lanzamiento y Soporte',
      description:
        'Deploy profesional, capacitación de tu equipo y soporte continuo para asegurar el éxito del proyecto.',
    },
  ];

  const paymentMethods = [
    {
      icon: Zap,
      name: 'Binance',
      description: 'USDT / USDC (Recomendado)',
      highlight: true,
    },
    {
      icon: Wallet,
      name: 'Bybit',
      description: 'USDT / USDC',
    },
    {
      icon: Landmark,
      name: 'Facebank',
      description: 'Transferencia Bancaria USA',
    },
    {
      icon: CreditCard,
      name: 'Otras Wallets',
      description: 'Airtm, Zinli, Volet',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestra <span className="text-emerald-400">Metodología</span>
          </h2>
          <p className="text-xl text-slate-300">
            Proceso transparente y predecible. Sabes exactamente qué esperar en cada fase.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
              )}
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-sm text-cyan-400 font-bold mb-2">{step.number}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Gestión de Pagos <span className="text-cyan-400">Internacionales</span>
          </h3>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className={`flex flex-col items-center text-center p-6 rounded-xl border transition-all duration-300 ${
                  method.highlight
                    ? 'bg-cyan-500/20 border-cyan-500/50 ring-2 ring-cyan-500/30'
                    : 'bg-slate-900 border-slate-700 hover:border-cyan-500/50'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    method.highlight ? 'bg-cyan-500/30' : 'bg-cyan-500/10'
                  }`}
                >
                  <method.icon className={`w-6 h-6 ${
                    method.highlight ? 'text-cyan-300' : 'text-cyan-400'
                  }`} />
                </div>
                <h4 className="font-semibold text-white mb-1">{method.name}</h4>
                <p className={`text-sm ${
                  method.highlight ? 'text-cyan-300' : 'text-slate-400'
                }`}>{method.description}</p>
                {method.highlight && (
                  <span className="text-xs text-cyan-300 mt-2 font-semibold tracking-wider uppercase">Recomendado</span>
                )}
              </div>
            ))}
          </div>

          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8">
            <h4 className="font-bold text-white mb-6 text-xl text-center">Planes de Inversión Flexibles</h4>
            <p className="text-slate-400 text-center mb-8 text-sm">
              Elige el esquema de pago que mejor se adapte a la planificación financiera de tu negocio.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Opción 1 */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                <h5 className="font-bold text-emerald-400 mb-4 text-lg border-b border-slate-700 pb-3">Opción A: Estándar (50/50)</h5>
                <ul className="space-y-4 text-slate-300 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold w-10 shrink-0">50%</span>
                    <span>Al iniciar. Incluye la gestión y compra de Hosting/Dominio en caso de no poseerlo.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 font-bold w-10 shrink-0">50%</span>
                    <span>Al finalizar, tras la entrega y aprobación total del proyecto.</span>
                  </li>
                </ul>
              </div>

              {/* Opción 2 */}
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
                <h5 className="font-bold text-cyan-400 mb-4 text-lg border-b border-slate-700 pb-3">Opción B: Escalonada (25/25/50)</h5>
                <ul className="space-y-4 text-slate-300 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold w-10 shrink-0">25%</span>
                    <span>Al iniciar, para cubrir requerimientos y gastos operativos iniciales.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold w-10 shrink-0">25%</span>
                    <span>A mitad del desarrollo, posterior a la revisión de avances funcionales.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 font-bold w-10 shrink-0">50%</span>
                    <span>Al finalizar, tras la entrega y aprobación total del proyecto.</span>
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