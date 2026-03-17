import { Linkedin } from 'lucide-react';

export default function About() {
  const specialists = [
    {
      name: 'Elian Palma Muñoz',
      role: 'Arquitecto Full Stack & Líder Técnico',
      bio: 'Dirijo la estrategia de arquitectura y ejecución de cada fase del proyecto. Especialista en desarrollo web a medida (Frontend/Backend) y optimización de rendimiento para garantizar ecosistemas digitales rápidos y seguros.',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQFeS_2lR1KOTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681421295448?e=1775088000&v=beta&t=l2ffEPIBGmmESqCI4k1Z_ccdvcOiD_V1vLB5bJU5YtY',
      linkedin: 'https://www.linkedin.com/in/elian-wilfredo-palma-munoz/',
    },
    {
      name: 'Wismeily Carolina',
      role: 'Diseñadora UI/UX & Identidad Visual',
      bio: 'Crea interfaces de usuario (UI) impactantes y centradas en la conversión. Define la arquitectura de información y flujos de navegación para garantizar que el diseño de tu tienda online o web corporativa sea intuitivo.',
      image: 'https://media.licdn.com/dms/image/v2/D4E2DAQEUhLAjU0We6A/profile-treasury-image-shrink_800_800/B4EZzvU.U6HsAk-/0/1773541779264?e=1774148400&v=beta&t=YNxL5t4o0cCQwSabsWToZFBNcS0Wo0nExzzd-mpaNa8',
      linkedin: 'https://www.linkedin.com/in/wismeily-palma/',
    },
    {
      name: 'Rodolfo Hernández',
      role: 'Consultor Técnico SEO',
      bio: 'Estructura el código y el contenido para dominar los resultados de Google. Convierte el desarrollo web estático en activos dinámicos de captación de tráfico orgánico y clientes recurrentes.',
      image: 'https://media.licdn.com/dms/image/v2/D4E2DAQFDxvfsE_WY4Q/profile-treasury-image-shrink_800_800/B4EZzvU7qNHEAY-/0/1773541768392?e=1774148400&v=beta&t=MnWaQegC2J96akFvb5dOpFBwX0CRdwS6CdRwddMwKhQ',
      linkedin: 'https://www.linkedin.com/',
    },
  ];

  return (
    <section id="equipo" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="text-emerald-400 text-xs sm:text-sm font-medium tracking-wide">
              Agencia de Desarrollo Independiente
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Consultores Técnicos <span className="text-emerald-400 block sm:inline">Especializados</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-2">
            Desarrolladores y diseñadores de alto nivel técnico, integrados estratégicamente según los requerimientos de tu infraestructura web.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specialists.map((member) => (
            <div
              key={member.name}
              className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col active:scale-[0.98] sm:hover:-translate-y-2"
            >
              {/* Ajuste de altura responsiva: 48 en móvil, 64 en tablet, 72 en escritorio ancho */}
              <div className="w-full h-48 md:h-64 lg:h-72 bg-slate-800 flex-shrink-0 relative">
                <img
                  src={member.image}
                  alt={`Perfil profesional de ${member.name} - ${member.role}`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <div className="pr-4">
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mb-1">{member.name}</h3>
                    <p className="text-cyan-400 text-xs sm:text-sm font-medium">{member.role}</p>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                    aria-label={`Ver perfil de LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Ventajas del Modelo Freelance B2B</h3>
              <ul className="space-y-3 sm:space-y-4 text-slate-300 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                  <span>Especialización técnica profunda por cada área de desarrollo web.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                  <span>Arquitecturas orientadas a métricas de negocio y velocidad de carga.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                  <span>Sin costos ocultos de agencias: tu inversión va directo a la calidad del código.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Metodología de Trabajo</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Operamos como una unidad consolidada bajo estrictos estándares de calidad. Esto nos permite ejecutar proyectos complejos con la agilidad de un equipo interno, pero sin la carga administrativa.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Gestión centralizada: Mantendrás comunicación directa y transparente conmigo (Elián Palma) como tu Arquitecto Técnico durante todo el ciclo de vida del proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}