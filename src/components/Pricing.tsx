import { useState, useEffect } from 'react';
import { Check, ArrowRight, X, Globe, ShoppingCart, LifeBuoy, Sparkles, ShieldCheck, Palette, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const WHATSAPP_NUMBER = '5804128231012';

interface Plan {
  name: string;
  tag: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

interface CustomPlan {
  name: string;
  description: string;
  chips: string[];
  cta: string;
}

interface Category {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  includes?: string[];
  plans: Plan[];
  custom: CustomPlan;
}

// Ajusta aquí los precios de cada plan. "Consultar" indica cotización a medida.
const categories: Category[] = [
  {
    id: 'web-informativa',
    tabLabel: 'Web Informativa',
    title: 'Web Informativa',
    subtitle: 'Presencia profesional para captar clientes y generar autoridad.',
    icon: Globe,
    plans: [
      {
        name: 'Landing',
        tag: '1 página',
        price: '$600',
        description: 'Una página de alto impacto pensada para captar leads.',
        features: [
          'Diseño exclusivo en Figma',
          'Rápida y adaptable a móvil',
          'Formulario de contacto y WhatsApp',
          'Google Analytics y medición de conversiones',
          'SEO On-Page base',
          'Soporte directo por 30 días',
        ],
        cta: 'Iniciar Proyecto',
      },
      {
        name: 'Web de Varias Pestañas',
        tag: 'Multipágina',
        price: '$1,000',
        description: 'Sitio corporativo completo para ganar autoridad y captar clientes.',
        features: [
          'Todo lo incluido en Landing',
          'Sitio corporativo con varias secciones',
          'Analítica Server-Side (Google Tag Manager)',
          'Mapas de calor y comportamiento',
          'Embudos de conversión base',
          'Optimización y soporte por 30 días',
        ],
        cta: 'Solicitar Proyecto',
        popular: true,
      },
    ],
    custom: {
      name: 'Plan Personalizado',
      description: '¿Necesitas algo más específico? Desarrollo a medida con funcionalidades, integraciones y sistemas complejos.',
      chips: ['SaaS y CRMs', 'Integraciones vía API', 'Automatizaciones', 'Backend y bases de datos'],
      cta: 'Agendar Llamada Técnica',
    },
  },
  {
    id: 'tienda-online',
    tabLabel: 'Tienda Online',
    title: 'Tienda Online',
    subtitle: 'Tiendas a medida, optimizadas para vender y escalar tu facturación.',
    icon: ShoppingCart,
    plans: [
      {
        name: 'Tienda Tipo Landing',
        tag: '1 página',
        price: 'Consultar',
        description: 'Tienda compacta en una sola página, ideal para pocos productos o campañas.',
        features: [
          'Catálogo compacto de productos',
          'Carrito y checkout sin fricción',
          'Pasarelas de pago seguras',
          'Diseño exclusivo en Figma',
          'Medición de conversiones',
          'Soporte directo por 30 días',
        ],
        cta: 'Cotizar Tienda',
      },
      {
        name: 'Tienda de Varias Pestañas',
        tag: 'E-commerce completo',
        price: '$1,500',
        priceNote: 'desde',
        description: 'Tienda online completa a medida, pensada para escalar tu facturación.',
        features: [
          'Catálogo por categorías y checkout sin fricción',
          'GTM Server-Side para e-commerce',
          'Embudos de conversión y carritos abandonados',
          'Pasarelas de pago seguras',
          'Optimización continua y soporte técnico',
        ],
        cta: 'Cotizar Tienda',
        popular: true,
      },
    ],
    custom: {
      name: 'Plan Personalizado',
      description: '¿Tu tienda tiene requerimientos especiales? La construyo a medida con las integraciones que necesites.',
      chips: ['Inventario / ERP / CRM', 'Automatización de pedidos', 'Funciones a medida', 'Alto rendimiento (React)'],
      cta: 'Agendar Llamada Técnica',
    },
  },
  {
    id: 'post-desarrollo',
    tabLabel: 'Post Desarrollo',
    title: 'Post Desarrollo',
    subtitle: 'Soporte y SEO orgánico para que tu sitio siga creciendo después del lanzamiento.',
    icon: LifeBuoy,
    includes: ['Soporte técnico', 'SEO orgánico', 'Accesibilidad', 'Reporte de métricas'],
    plans: [
      {
        name: 'Web Informativa Landing',
        tag: 'Para landing',
        price: 'Consultar',
        description: 'Soporte y SEO para tu sitio informativo de una página.',
        features: [
          'Actualizaciones de contenido',
          'Analytics y Search Console',
          'SEO On-Page: meta tags y velocidad',
        ],
        cta: 'Solicitar Plan',
      },
      {
        name: 'Web Informativa Varias Pestañas',
        tag: 'Para multipágina',
        price: 'Consultar',
        description: 'Soporte y SEO para tu sitio informativo multipágina.',
        features: [
          'SEO On-Page por cada página',
          'Estrategia de palabras clave y contenido',
          'Mapas de calor y comportamiento',
        ],
        cta: 'Solicitar Plan',
        popular: true,
      },
      {
        name: 'Tienda Tipo Landing',
        tag: 'Para tienda landing',
        price: 'Consultar',
        description: 'Soporte y SEO para tu tienda de una sola página.',
        features: [
          'SEO de productos y página principal',
          'Medición de conversiones y compra',
          'Revisión del proceso de checkout',
        ],
        cta: 'Solicitar Plan',
      },
      {
        name: 'Tienda de Varias Pestañas',
        tag: 'Para tienda completa',
        price: 'Consultar',
        description: 'Soporte y SEO para tu tienda online completa.',
        features: [
          'SEO de categorías y fichas de producto',
          'Embudos y carritos abandonados',
          'Eventos de compra con GTM Server-Side',
        ],
        cta: 'Solicitar Plan',
      },
    ],
    custom: {
      name: 'Plan Personalizado',
      description: 'Un plan de soporte, accesibilidad y SEO diseñado según las necesidades de tu proyecto.',
      chips: ['Alcance a tu medida', 'SEO personalizado', 'Métricas avanzadas', 'Rendimiento'],
      cta: 'Agendar Llamada',
    },
  },
];

const trustItems = [
  { icon: Palette, text: 'Diseño 100% a medida' },
  { icon: ShieldCheck, text: 'Pago 50% inicial · 50% al finalizar' },
  { icon: Headphones, text: 'Soporte directo conmigo' },
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
  isPost: boolean;
  includes?: string[];
  onSelect: (planLabel: string) => void;
}

function PlanCard({ plan, categoryTitle, isPost, includes, onSelect }: PlanCardProps) {
  const isConsult = plan.price === 'Consultar';

  const inner = (
    <div className="relative h-full bg-slate-900 rounded-[15px] p-6 sm:p-7 flex flex-col">
      {plan.popular && (
        <span className="absolute top-5 right-5 inline-flex items-center gap-1 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider">
          <Sparkles className="w-3 h-3" /> Recomendado
        </span>
      )}

      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">{plan.tag}</span>
      <h4 className={`text-xl sm:text-2xl font-bold text-white leading-snug mb-2 ${plan.popular ? 'pr-0 mt-6 sm:mt-0 sm:pr-32' : ''}`}>
        {plan.name}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed mb-6">{plan.description}</p>

      <div className="mb-6 pb-6 border-b border-slate-800">
        {isConsult ? (
          <>
            <div className="text-3xl font-bold text-white tracking-tight">Consultar</div>
            <div className="text-xs text-slate-500 mt-1">Cotización según tu proyecto</div>
          </>
        ) : (
          <>
            <div className="flex items-baseline gap-2">
              {plan.priceNote && <span className="text-slate-400 text-sm font-medium">{plan.priceNote}</span>}
              <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">{plan.price}</span>
              <span className="text-slate-500 text-sm">USD</span>
            </div>
            <div className="text-xs text-slate-500 mt-1">Pago único por proyecto</div>
          </>
        )}
      </div>

      {isPost && includes && (
        <p className="text-xs text-slate-500 mb-4">Incluye {includes.join(', ').toLowerCase()} y además:</p>
      )}

      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-emerald-400" strokeWidth={3} />
            </span>
            <span className="text-slate-300 text-sm leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelect(`${plan.name} (${categoryTitle})`)}
        className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base active:scale-[0.98] ${
          plan.popular
            ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-cyan-500/50'
            : 'bg-slate-800 border border-slate-700 text-white hover:bg-slate-700 hover:border-cyan-500/40'
        }`}
      >
        {plan.cta} <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );

  // Borde con degradado para el plan recomendado
  return (
    <div
      className={`rounded-2xl p-px h-full transition-transform duration-300 hover:-translate-y-1 ${
        plan.popular
          ? 'bg-gradient-to-b from-cyan-500 to-emerald-500 shadow-xl shadow-cyan-500/10'
          : 'bg-slate-700/60 hover:bg-slate-600'
      }`}
    >
      {inner}
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

  const [activeTab, setActiveTab] = useState(categories[0].id);

  return (
    <section id="precios" className="py-20 sm:py-28 px-4 sm:px-6 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <span className="text-cyan-400 text-xs sm:text-sm font-medium tracking-wide">Planes y precios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Planes de <span className="text-cyan-400 block sm:inline">Desarrollo Web</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-2">
            No adapto plantillas pre-hechas. Desarrollo infraestructuras técnicas a medida, optimizadas para generar conversiones.
          </p>
        </div>

        {/* Selector de categoría */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div role="tablist" aria-label="Categorías de planes" className="grid grid-cols-3 sm:inline-flex gap-1 p-1.5 bg-slate-800/80 border border-slate-700 rounded-2xl backdrop-blur w-full sm:w-auto">
            {categories.map((category) => {
              const active = activeTab === category.id;
              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`panel-${category.id}`}
                  id={`tab-${category.id}`}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 shadow-lg shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-center leading-tight">{category.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {categories.map((category) => {
          const isPost = category.id === 'post-desarrollo';
          return (
            <div
              key={category.id}
              id={`panel-${category.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${category.id}`}
              className={activeTab === category.id ? 'block' : 'hidden'}
            >
              <div className="text-center mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{category.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">{category.subtitle}</p>
              </div>

              {isPost && category.includes && (
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {category.includes.map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} /> {item}
                    </span>
                  ))}
                </div>
              )}

              <div
                className={`grid grid-cols-1 gap-6 mx-auto ${
                  isPost ? 'md:grid-cols-2 lg:grid-cols-4 max-w-6xl' : 'md:grid-cols-2 max-w-4xl'
                }`}
              >
                {category.plans.map((plan) => (
                  <PlanCard
                    key={plan.name}
                    plan={plan}
                    categoryTitle={category.title}
                    isPost={isPost}
                    includes={category.includes}
                    onSelect={openModal}
                  />
                ))}
              </div>

              {/* Plan personalizado */}
              <div className={`mt-6 mx-auto rounded-2xl border border-dashed border-slate-600 bg-slate-800/40 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center gap-6 ${isPost ? 'max-w-6xl' : 'max-w-4xl'}`}>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4 className="text-lg sm:text-xl font-bold text-white">{category.custom.name}</h4>
                    <span className="text-xs font-semibold text-slate-300 bg-slate-700/60 px-3 py-1 rounded-full">Consultar</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-xl">{category.custom.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.custom.chips.map((chip) => (
                      <span key={chip} className="text-xs text-slate-300 bg-slate-900/70 border border-slate-700 px-3 py-1 rounded-full">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={whatsappLink(category.title, category.custom.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:w-64 py-3.5 px-5 rounded-xl font-semibold flex items-center justify-center gap-2 bg-slate-800 border border-slate-600 text-white hover:bg-slate-700 hover:border-cyan-500/40 transition-colors text-sm sm:text-base active:scale-[0.98]"
                >
                  {category.custom.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          );
        })}

        {/* Garantías */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-3 text-slate-400 text-sm">
              <item.icon className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
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
