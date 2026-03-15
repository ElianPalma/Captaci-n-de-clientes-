import { Linkedin } from 'lucide-react';

export default function About() {
  const specialists = [
    {
      name: 'Elian Muñoz',
      role: 'Líder de Proyecto y Arquitecto Full Stack',
      bio: 'Dirijo la estrategia y ejecución técnica de cada fase. Especialista en auditorías, experiencia de usuario (UX), desarrollo integral (Frontend/Backend) y medición de conversiones para garantizar ecosistemas web de alto rendimiento.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFeS_2lR1KOTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681421295448?e=1775088000&v=beta&t=l2ffEPIBGmmESqCI4k1Z_ccdvcOiD_V1vLB5bJU5YtY',
      linkedin: 'https://www.linkedin.com/in/elian-wilfredo-palma-munoz/',
    },
    {
      name: 'Wismeily Carolina',
      role: 'Diseñadora Gráfica y Experta en Experiencia de Usuario',
      bio: 'Crea identidades visuales impactantes y diseña interfaces intuitivas centradas en el usuario. Define la arquitectura de información y flujos de navegación para garantizar experiencias de conversión fluidas y coherentes.',
      image: 'https://media.licdn.com/dms/image/v2/D4E2DAQEUhLAjU0We6A/profile-treasury-image-shrink_800_800/B4EZzvU.U6HsAk-/0/1773541779264?e=1774148400&v=beta&t=YNxL5t4o0cCQwSabsWToZFBNcS0Wo0nExzzd-mpaNa8',
      linkedin: 'https://www.linkedin.com/in/wismeily-palma/',
    },
    {
      name: 'Rodolfo Hernández',
      role: 'Consultor SEO y Adquisición Orgánica',
      bio: 'Estructura el contenido y la arquitectura web para dominar los motores de búsqueda. Convierte sitios web estáticos en activos de captación de clientes recurrentes.',
      image: 'https://media.licdn.com/dms/image/v2/D4E2DAQFDxvfsE_WY4Q/profile-treasury-image-shrink_800_800/B4EZzvU7qNHEAY-/0/1773541768392?e=1774148400&v=beta&t=MnWaQegC2J96akFvb5dOpFBwX0CRdwS6CdRwddMwKhQ',
      linkedin: 'https://www.linkedin.com/',
    },
  ];

  return (
    <section id="especialistas" className="py-20 px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <p className="text-emerald-400 text-sm font-medium">Red de Especialistas</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Especialistas <span className="text-emerald-400">por Área</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Profesionales independientes de alto nivel técnico, integrados según las necesidades específicas de tu proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((member) => (
            <div
              key={member.name}
              className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-square overflow-hidden bg-slate-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-cyan-400 text-sm font-medium">{member.role}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Ventajas de Nuestro Modelo</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Especialización técnica profunda por cada área de desarrollo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Arquitecturas orientadas métricas de negocio y conversión</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>Flexibilidad para escalar recursos según la fase del proyecto</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Metodología de Integración</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Operamos como consultores independientes consolidados bajo un mismo estándar de calidad. Esto elimina los costos operativos de las agencias tradicionales, permitiendo invertir directamente en el desarrollo de tu solución.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Gestión centralizada y comunicación directa con el arquitecto del proyecto para garantizar la correcta ejecución técnica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}