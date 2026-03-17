import { Shield, Zap, Satellite, Battery } from 'lucide-react';

export default function Infrastructure() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <h2 className="text-emerald-400 text-xs sm:text-sm font-medium tracking-wide">
              Continuidad Operativa en Desarrollo Web
            </h2>
          </div>
          {/* H3 semántico (asumiendo que hay un H2 previo en la página) o H2 optimizado */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Infraestructura Técnica <span className="text-emerald-400 block sm:inline">Resiliente</span>
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-2">
            Garantizamos la entrega de tu tienda online o sistema corporativo sin retrasos, respaldados por infraestructura tecnológica redundante 24/7.
          </p>
        </div>

        {/* Ajuste de grid para transición suave entre móvil, tablet y escritorio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              icon: Satellite,
              title: 'Conectividad Starlink',
              description: 'Internet satelital de latencia ultra-baja para asegurar comunicación en tiempo real y despliegue de código continuo.',
              color: 'cyan',
            },
            {
              icon: Battery,
              title: 'Energía Redundante',
              description: 'Sistemas UPS y generadores de respaldo que blindan nuestra operación frente a cualquier eventualidad eléctrica.',
              color: 'emerald',
            },
            {
              icon: Shield,
              title: 'Seguridad de Datos',
              description: 'Manejo de credenciales de servidores bajo estrictos protocolos de encriptación y acuerdos de confidencialidad (NDA).',
              color: 'cyan',
            },
            {
              icon: Zap,
              title: 'Gestión Ágil',
              description: 'Consultores de desarrollo disponibles en horario CET y LATAM. Comunicación directa, documentada y sin intermediarios.',
              color: 'emerald',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 sm:p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 active:scale-95 sm:hover:scale-105"
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 ${
                  item.color === 'cyan' ? 'bg-cyan-500/10' : 'bg-emerald-500/10'
                }`}
              >
                <item.icon
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    item.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                  }`}
                />
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Banner inferior optimizado para lectura en móviles */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-xl p-6 sm:p-8 text-center mx-2 sm:mx-0">
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            <span className="font-semibold text-cyan-400 block sm:inline mb-2 sm:mb-0">Fiabilidad técnica en cada entrega. </span>
            Nuestro flujo de desarrollo está respaldado por sistemas de contingencia, mitigando riesgos operativos y garantizando la estabilidad de tu proyecto en cualquier escenario.
          </p>
        </div>
      </div>
    </section>
  );
}