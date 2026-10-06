import { useState, useEffect } from 'react';
import { Check, ArrowRight, X, Globe, ShoppingCart, LifeBuoy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const WHATSAPP_NUMBER = '5804128231012';

interface Plan {
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  custom?: boolean;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  plans: Plan[];
}

// Ajusta aquí los precios de cada plan. "Consultar" indica cotización a medida.
const categories: Category[] = [
  {
    id: 'web-informativa',
    title: 'Web Informativa',
    subtitle: 'Presencia profesional para captar clientes y generar autoridad.',
    icon: Globe,
    plans: [
      {
        name: 'Landing',
        price: '$600',
        description: 'Una página de alto impacto orientada a maximizar la captura de leads',
        features: [
          'Diseño de interfaz exclusivo (Figma)',
          'Desarrollo web frontend optimizado y adaptable a móvil',
          'Formulario de contacto y botón de WhatsApp',
          'Generación y medición de conversiones',
          'Integración base con Google Analytics',
          'Optimización de velocidad y SEO On-Page',
          'Soporte técnico directo por 30 días',
        ],
        cta: 'Iniciar Proyecto',
      },
      {
        name: 'Web Informativa de Varias Pestañas',
        price: '$1,000',
        description: 'Sitio web corporativo con varias secciones para establecer autoridad y captar clientes',
        features: [
          'Desarrollo de sitio web corporativo multipágina',
          'Analítica Server-Side (Google Tag Manager)',
          'Medición de comportamiento (Mapas de calor)',
          'Arquitectura para captación de clientes',
          'Sistemas de conversión y embudos base',
          'Optimización y soporte técnico por 30 días',
        ],
        cta: 'Solicitar Proyecto',
        popular: true,
      },
      {
        name: 'Plan Personalizado',
        price: 'Consultar',
        description: 'Desarrollo a medida: funcionalidades, integraciones y sistemas complejos',
        features: [
          'Desarrollo de SaaS y CRMs a medida',
          'Arquitecturas de alto rendimiento (React)',
          'Integraciones complejas mediante APIs',
          'Sistemas de automatización de negocio',
          'Infraestructura backend y bases de datos',
          'Consultoría de arquitectura web completa',
        ],
        cta: 'Agendar Llamada Técnica',
        custom: true,
      },
    ],
  },
  {
    id: 'tienda-online',
    title: 'Tienda Online',
    subtitle: 'Tiendas a medida, optimizadas para vender y escalar tu facturación.',
    icon: ShoppingCart,
    plans: [
      {
        name: 'Tienda Tipo Landing',
        price: 'Consultar',
        description: 'Tienda compacta en una sola página, ideal para pocos productos o campañas',
        features: [
          'Catálogo compacto de productos en una sola página',
          'Carrito y checkout sin fricción',
          'Integración segura de pasarelas de pago',
          'Diseño de interfaz exclusivo (Figma)',
          'Medición de conversiones y analítica base',
          'Soporte técnico directo por 30 días',
        ],
        cta: 'Cotizar Tienda',
      },
      {
        name: 'Tienda de Varias Pestañas',
        price: '$1,500',
        priceNote: 'desde',
        description: 'Tienda online completa a medida, optimizada para escalar facturación',
        features: [
          'Desarrollo de catálogo por categorías y checkout sin fricción',
          'GTM Server-Side nativo para E-commerce',
          'Embudos de conversión para tiendas online',
          'Análisis de carritos abandonados',
          'Integración segura de pasarelas de pago',
          'Optimización continua y soporte técnico',
        ],
        cta: 'Cotizar Tienda',
        popular: true,
      },
      {
        name: 'Plan Personalizado',
        price: 'Consultar',
        description: 'Tienda con requerimientos especiales: integraciones, automatizaciones y más',
        features: [
          'Funcionalidades de tienda a medida',
          'Integraciones con inventario, ERP o CRM',
          'Automatización de pedidos y notificaciones',
          'Arquitectura de alto rendimiento (React)',
          'Infraestructura backend y bases de datos',
          'Consultoría de arquitectura completa',
        ],
        cta: 'Agendar Llamada Técnica',
        custom: true,
      },
    ],
  },
  {
    id: 'post-desarrollo',
    title: 'Post Desarrollo',
    subtitle: 'Soporte técnico, accesibilidad y SEO orgánico para que tu sitio siga creciendo después del lanzamiento.',
    icon: LifeBuoy,
    plans: [
      {
        name: 'Post Desarrollo · Web Informativa Landing',
        price: 'Consultar',
        description: 'Soporte y SEO orgánico para tu sitio informativo tipo landing',
        features: [
          'Soporte técnico y actualizaciones de contenido',
          'Configuración de Analytics y Search Console',
          'SEO On-Page: meta tags, estructura y velocidad',
          'Optimización de accesibilidad',
          'Reporte de métricas y recomendaciones',
        ],
        cta: 'Solicitar Plan',
      },
      {
        name: 'Post Desarrollo · Web Informativa Varias Pestañas',
        price: 'Consultar',
        description: 'Soporte y SEO orgánico para tu sitio informativo multipágina',
        features: [
          'Soporte técnico y actualizaciones de contenido',
          'SEO On-Page por cada página del sitio',
          'Estrategia de palabras clave y contenido',
          'Optimización de accesibilidad y velocidad',
          'Medición de comportamiento (Mapas de calor)',
          'Reporte de métricas y recomendaciones',
        ],
        cta: 'Solicitar Plan',
      },
      {
        name: 'Post Desarrollo · Tienda Tipo Landing',
        price: 'Consultar',
        description: 'Soporte y SEO orgánico para tu tienda tipo landing',
        features: [
          'Soporte técnico y mantenimiento de la tienda',
          'SEO de productos y página principal',
          'Medición de conversiones y de compra',
          'Optimización de accesibilidad y velocidad',
          'Revisión del proceso de checkout',
          'Reporte de métricas y recomendaciones',
        ],
        cta: 'Solicitar Plan',
      },
      {
        name: 'Post Desarrollo · Tienda de Varias Pestañas',
        price: 'Consultar',
        description: 'Soporte y SEO orgánico para tu tienda online completa',
        features: [
          'Soporte técnico y mantenimiento de la tienda',
          'SEO de categorías y fichas de producto',
          'Embudos de conversión y carritos abandonados',
          'Eventos de compra con GTM Server-Side',
          'Optimización de accesibilidad y velocidad',
          'Reporte de métricas y recomendaciones',
        ],
        cta: 'Solicitar Plan',
      },
      {
        name: 'Plan Personalizado',
        price: 'Consultar',
        description: 'Un plan de soporte, accesibilidad y SEO diseñado según las necesidades de tu proyecto',
        features: [
          'Alcance de soporte definido a tu medida',
          'Estrategia de SEO orgánico personalizada',
          'Configuración avanzada de métricas y analítica',
          'Optimización de accesibilidad y rendimiento',
        ],
        cta: 'Agendar Llamada',
        custom: true,
      },
    ],
  },
];

const countryCodes = [
  { code: '+54', label: 'ARG' },
  { code: '+591', label: 'BOL' },
  { code: '+56', label: 'CHI' },
  { code: '+57', label: 'COL' },
  { code: '+506', label: 'CRC' },
  { code: '+53', label: 'CUB' },
  { code: '+593', label: 'ECU' },
  { code: '+503', label: 'SLV' },
  { code: '+34', label: 'ESP' },
  { code: '+1', label: 'USA/CAN' },
  { code: '+502', label: 'GUA' },
  { code: '+504', label: 'HON' },
  { code: '+52', label: 'MEX' },
  { code: '+505', label: 'NIC' },
  { code: '+507', label: 'PAN' },
  { code: '+595', label: 'PRY' },
  { code: '+51', label: 'PER' },
  { code: '+1', label: 'PRI' },
  { code: '+1', label: 'DOM' },
  { code: '+598', label: 'URU' },
  { code: '+58', label: 'VEN' },
].sort((a, b) => a.label.localeCompare(b.label));

const whatsappLink = (categoryTitle: string, planName: string) => {
  const text = `Hola, me interesa el plan "${planName}" (${categoryTitle}). Quisiera más información.`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
};

interface PlanCardProps {
  plan: Plan;
  categoryTitle: string;
  onSelect: (planLabel: string) => void;
}

function PlanCard({ plan, categoryTitle, onSelect }: PlanCardProps) {
  const isConsult = plan.price === 'Consultar';

  return (
    <div
      className={`relative bg-slate-800 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col h-full ${
        plan.popular
          ? 'border-2 border-cyan-500 shadow-xl shadow-cyan-500/20 md:-translate-y-2'
          : 'border border-slate-700'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 w-max z-10">
          <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            Recomendado
          </span>
        </div>
      )}

      <div className="mb-5 sm:mb-6 flex-grow-0 mt-2">
        <h4 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">{plan.name}</h4>
        <div className="flex items-baseline gap-1 mb-2">
          {plan.priceNote && (
            <span className="text-slate-400 text-xs sm:text-sm uppercase font-medium">{plan.priceNote}</span>
          )}
          <span
            className={`font-bold text-white tracking-tight ${isConsult ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'}`}
          >
            {plan.price}
          </span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{plan.description}</p>
      </div>

      <div className="flex-grow mt-4 sm:mt-0">
        <ul className="space-y-3 sm:space-y-4 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 sm:gap-3">
              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span className="text-slate-300 text-sm leading-tight">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        {plan.custom ? (
          <a
            href={whatsappLink(categoryTitle, plan.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-slate-700/50 border border-slate-600 text-white hover:bg-slate-700 transition-colors text-sm sm:text-base active:scale-[0.98]"
          >
            {plan.cta} <ArrowRight className="w-4 h-4" />
          </a>
        ) : (
          <button
            onClick={() => onSelect(`${plan.name} (${categoryTitle})`)}
            className={`w-full py-3.5 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base active:scale-[0.98] ${
              plan.popular
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/50'
                : 'bg-slate-700/50 border border-slate-600 text-white hover:bg-slate-700'
            }`}
          >
            {plan.cta} <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+58',
    phone: '',
    message: '',
  });

  const openModal = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
    setIsSuccess(false);
    // Previene el scroll del fondo cuando el modal está abierto (Mobile UX)
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restaura el scroll del fondo
    document.body.style.overflow = 'unset';
  };

  // Cierra el modal con la tecla Escape
  useEffect(() => {
    if (!isModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isModalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      nombre: formData.name,
      email: formData.email,
      telefono_completo: `${formData.countryCode}${formData.phone}`,
      mensaje: formData.message,
      plan_seleccionado: selectedPlan,
      fecha_solicitud: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/q49ru3xecl4814hdb7vqeoauid2lz4i2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', countryCode: '+58', phone: '', message: '' });
        setTimeout(() => closeModal(), 2500);
      } else {
        throw new Error('Error en el servidor');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión al enviar los datos. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="precios" className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Planes de <span className="text-cyan-400 block sm:inline">Desarrollo Web</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-2">
            No adapto plantillas pre-hechas. Desarrollo infraestructuras técnicas a medida, optimizadas para generar conversiones.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20">
          {categories.map((category) => {
            // Con más de 3 planes, el plan personalizado se muestra como banner de ancho completo
            const customBanner = category.plans.length > 3 ? category.plans.find((p) => p.custom) : undefined;
            const gridPlans = customBanner ? category.plans.filter((p) => p !== customBanner) : category.plans;

            return (
              <div key={category.id} id={category.id}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">{category.title}</h3>
                    <p className="text-slate-400 text-sm sm:text-base mt-1 max-w-3xl">{category.subtitle}</p>
                  </div>
                </div>

                <div
                  className={`grid grid-cols-1 gap-6 ${
                    customBanner ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'
                  }`}
                >
                  {gridPlans.map((plan) => (
                    <PlanCard key={plan.name} plan={plan} categoryTitle={category.title} onSelect={openModal} />
                  ))}
                </div>

                {customBanner && (
                  <div className="mt-6 bg-slate-800 border border-slate-700 rounded-2xl p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
                    <div className="lg:w-1/3">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{customBanner.name}</h4>
                      <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{customBanner.price}</span>
                      <p className="text-slate-400 text-sm leading-relaxed mt-2">{customBanner.description}</p>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                      {customBanner.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 sm:gap-3">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={whatsappLink(category.title, customBanner.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lg:w-56 py-3.5 sm:py-4 px-5 rounded-xl font-semibold flex items-center justify-center gap-2 bg-slate-700/50 border border-slate-600 text-white hover:bg-slate-700 transition-colors text-sm sm:text-base active:scale-[0.98]"
                    >
                      {customBanner.cta} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="plan-modal-title"
        >
          {/* my-8 para que en móviles muy pequeños se pueda hacer scroll si el formulario es más alto que la pantalla */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl relative w-full max-w-[440px] my-8">
            <div className="p-5 sm:p-6 border-b border-slate-800 flex justify-between items-center sticky top-0 bg-slate-900 z-10 rounded-t-2xl">
              <div>
                <h3 id="plan-modal-title" className="text-lg sm:text-xl font-bold text-white">Solicitar Proyecto</h3>
                <p className="text-cyan-400 text-xs sm:text-sm font-medium mt-1">Plan {selectedPlan}</p>
              </div>
              <button onClick={closeModal} className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors" aria-label="Cerrar formulario">
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {isSuccess ? (
              <div className="p-8 sm:p-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <Check className="text-emerald-500 w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">¡Solicitud Enviada!</h4>
                <p className="text-slate-400 text-sm sm:text-base">Analizaré tus requerimientos y te contactaré en las próximas 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex flex-col">
                  <label htmlFor="plan-name" className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-wider ml-1 mb-1">Nombre Completo</label>
                  <input id="plan-name" required type="text" placeholder="Tu nombre o empresa" value={formData.name} className="w-full bg-slate-800 border border-slate-700 rounded-xl text-white p-3 sm:p-3.5 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="plan-email" className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-wider ml-1 mb-1">Email Corporativo</label>
                  <input id="plan-email" required type="email" placeholder="contacto@tuempresa.com" value={formData.email} className="w-full bg-slate-800 border border-slate-700 rounded-xl text-white p-3 sm:p-3.5 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="plan-phone" className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-wider ml-1 mb-1">Teléfono / WhatsApp</label>
                  <div className="flex gap-2">
                    <select
                      aria-label="Código de país"
                      className="bg-slate-800 border border-slate-700 rounded-xl text-white p-3 text-xs sm:text-sm outline-none focus:border-cyan-500 transition-all cursor-pointer w-[100px] sm:w-[110px]"
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    >
                      {countryCodes.map((c) => (
                        <option key={`${c.label}-${c.code}`} value={c.code}>{c.label} ({c.code})</option>
                      ))}
                    </select>
                    <input id="plan-phone" required type="tel" placeholder="Número" value={formData.phone} className="flex-1 bg-slate-800 border border-slate-700 rounded-xl text-white p-3 sm:p-3.5 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="plan-message" className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-wider ml-1 mb-1">Objetivo Técnico</label>
                  <textarea id="plan-message" rows={3} placeholder="Describe brevemente la infraestructura web que necesitas..." value={formData.message} className="w-full bg-slate-800 border border-slate-700 rounded-xl text-white p-3 sm:p-3.5 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none placeholder:text-slate-500" onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                </div>
                <button disabled={isSubmitting} type="submit" className={`w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-lg mt-2 flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-cyan-500/30 active:scale-95'}`}>
                  {isSubmitting ? (
                    <><span className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span> Procesando...</>
                  ) : 'Solicitar Propuesta Técnica'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
