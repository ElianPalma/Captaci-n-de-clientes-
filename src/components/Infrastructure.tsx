import { Shield, Zap, Satellite, Battery } from 'lucide-react';

export default function Infrastructure() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <p className="text-emerald-400 text-sm font-medium">Continuidad Operativa Garantizada</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Infraestructura <span className="text-emerald-400">Resiliente</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Contamos con infraestructura redundante para asegurar el cumplimiento de plazos sin interrupciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Satellite,
              title: 'Conectividad Starlink',
              description: 'Internet satelital de respaldo con latencia ultra-baja para asegurar comunicación y despliegue continuo.',
              color: 'cyan',
            },
            {
              icon: Battery,
              title: 'Energía Redundante',
              description: 'Sistemas UPS y generadores de respaldo que garantizan nuestra operación 24/7 frente a eventualidades.',
              color: 'emerald',
            },
            {
              icon: Shield,
              title: 'Seguridad de Datos',
              description: 'Manejo de credenciales bajo estrictos protocolos de encriptación y acuerdos de confidencialidad (NDA).',
              color: 'cyan',
            },
            {
              icon: Zap,
              title: 'Gestión Ágil',
              description: 'Consultores disponibles en horario CET y LATAM. Comunicación directa, documentada y sin intermediarios.',
              color: 'emerald',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  item.color === 'cyan' ? 'bg-cyan-500/10' : 'bg-emerald-500/10'
                }`}
              >
                <item.icon
                  className={`w-6 h-6 ${
                    item.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                  }`}
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-xl p-8 text-center">
          <p className="text-lg text-slate-200">
            <span className="font-semibold text-cyan-400">Fiabilidad técnica en cada entrega.</span>{' '}
            Nuestro flujo de trabajo está respaldado por sistemas de contingencia energética y satelital, mitigando riesgos operativos y garantizando la estabilidad de tu proyecto en cualquier escenario.
          </p>
        </div>
      </div>
    </section>
  );
}