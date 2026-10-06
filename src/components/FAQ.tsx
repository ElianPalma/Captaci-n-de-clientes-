import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuáles son las condiciones de pago?',
    answer:
      'Se requiere el pago del 50% inicial para comenzar el proyecto y el 50% restante al finalizar el proyecto, una vez revisado y aprobado.',
  },
  {
    question: '¿Qué métodos de pago aceptas?',
    answer:
      'Acepto transferencia bancaria (en euros y en dólares), Binance (Binance Pay), Airtm, Bybit, Facebank (transferencia USA) y Zinli. Si prefieres otro método, escríbeme y lo revisamos.',
  },
  {
    question: '¿Trabajas con plantillas o desarrollas a medida?',
    answer:
      'Desarrollo a medida. No adapto plantillas pre-hechas: diseño la interfaz según tu marca y tus objetivos, y la construyo con código optimizado para velocidad, SEO y conversión.',
  },
  {
    question: '¿Cuánto tarda en estar listo mi proyecto?',
    answer:
      'Depende del alcance: una landing es más rápida que una web de varias pestañas o una tienda online. En la propuesta te indico el plazo estimado antes de empezar, y avanzamos con aprobaciones en cada etapa.',
  },
  {
    question: '¿Qué incluye el soporte tras la entrega?',
    answer:
      'Los planes de desarrollo incluyen soporte técnico directo durante 30 días. Si después quieres seguir con soporte, SEO orgánico, accesibilidad y medición de resultados, tengo los planes de Post Desarrollo para cada tipo de proyecto.',
  },
  {
    question: '¿Qué pasa si necesito algo que no está en los planes?',
    answer:
      'Para eso existe el Plan Personalizado: funcionalidades a medida, integraciones, automatizaciones o sistemas más complejos. Cuéntame qué necesitas y te preparo una cotización.',
  },
  {
    question: '¿Necesito tener hosting y dominio?',
    answer:
      'No es indispensable. Si todavía no los tienes, te oriento y puedo encargarme de contratarlos y configurarlos como parte del proyecto.',
  },
  {
    question: '¿Trabajas con clientes de otros países?',
    answer:
      'Sí. Trabajo 100% en remoto con empresas de España, México y Latinoamérica, con soporte y entregas en horario CET (España), y comunicación directa conmigo durante todo el proyecto.',
  },
  {
    question: '¿En qué consiste la auditoría técnica gratuita?',
    answer:
      'Reviso tu sitio actual (velocidad, seguridad, SEO y experiencia de usuario) y te envío un reporte con las mejoras que más impacto pueden tener, sin costo y sin compromiso.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <section id="faq" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Preguntas <span className="text-cyan-400 block sm:inline">Frecuentes</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto px-2">
            Lo que suelen preguntarme antes de empezar un proyecto.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className={`bg-slate-800 border rounded-xl transition-colors duration-300 ${
                  isOpen ? 'border-cyan-500/50' : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                <h3>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    className="w-full flex items-center justify-between gap-4 text-left p-4 sm:p-5"
                  >
                    <span className="text-white font-semibold text-sm sm:text-base leading-snug">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-button-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-slate-300 text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
