import { Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [imageFailed, setImageFailed] = useState(false);

  const profile = {
    name: 'Elian Palma Muñoz',
    role: 'Arquitecto Full Stack & Desarrollador Web',
    bio: 'Me encargo personalmente de cada fase de tu proyecto: estrategia, diseño de interfaz, desarrollo, SEO y analítica. Soy especialista en desarrollo web a medida (Frontend/Backend) y optimización de rendimiento, para entregarte ecosistemas digitales rápidos, seguros y orientados a conversión.',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQFeS_2lR1KOTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1681421295448?e=1775088000&v=beta&t=l2ffEPIBGmmESqCI4k1Z_ccdvcOiD_V1vLB5bJU5YtY',
    linkedin: 'https://www.linkedin.com/in/elian-wilfredo-palma-munoz/',
    skills: ['Desarrollo Frontend/Backend', 'Diseño UI/UX', 'SEO Técnico', 'Analítica y Conversión'],
  };

  return (
    <section id="sobre-mi" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
            <span className="text-emerald-400 text-xs sm:text-sm font-medium tracking-wide">
              Desarrollador Web Freelance
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Trabajas <span className="text-emerald-400 block sm:inline">directamente conmigo</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-2">
            Un solo profesional, de principio a fin: sin intermediarios y con comunicación directa durante todo el proyecto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 w-full h-64 md:h-auto min-h-[16rem] bg-slate-800 relative">
            {imageFailed ? (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-500 to-emerald-500">
                <span className="text-white font-bold text-6xl">E</span>
              </div>
            ) : (
              <img
                src={profile.image}
                alt={`Perfil profesional de ${profile.name} - ${profile.role}`}
                className="w-full h-full object-cover object-center absolute inset-0"
                loading="lazy"
                onError={() => setImageFailed(true)}
              />
            )}
          </div>

          <div className="md:col-span-3 p-5 sm:p-8 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="pr-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-1">{profile.name}</h3>
                <p className="text-cyan-400 text-sm font-medium">{profile.role}</p>
              </div>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors p-1"
                aria-label={`Ver perfil de LinkedIn de ${profile.name}`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-5">{profile.bio}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-2xl p-6 sm:p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Ventajas del Modelo Freelance B2B</h3>
              <ul className="space-y-3 sm:space-y-4 text-slate-300 text-sm sm:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                  <span>Especialización técnica profunda en cada área del desarrollo web.</span>
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
                Trabajo bajo estrictos estándares de calidad y con procesos claros. Esto me permite ejecutar proyectos complejos con agilidad, sin la carga administrativa ni los intermediarios de una agencia.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Comunicación directa: hablarás conmigo (Elian Palma) como tu Arquitecto Técnico durante todo el ciclo de vida del proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
