import { useState } from 'react';
import { Check, ArrowRight, X } from 'lucide-react';

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
    message: '' 
  });

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

  const plans = [
    {
      name: 'Starter',
      price: '$600',
      description: 'Landing Page orientada a maximizar la captura de leads B2B',
      features: [
        'Diseño de interfaz exclusivo (Figma)',
        'Desarrollo Web Frontend optimizado',
        'Generación y medición de conversiones',
        'Integración base con Google Analytics',
        'Optimización de velocidad y SEO On-Page',
        'Soporte técnico directo por 30 días',
      ],
      cta: 'Iniciar Proyecto',
      popular: false,
    },
    {
      name: 'Corporate',
      price: '$1,000',
      description: 'Sitio web corporativo para establecer autoridad y captar clientes',
      features: [
        'Desarrollo de sitio web corporativo',
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
      name: 'E-Commerce',
      price: '$1,500',
      priceNote: 'desde',
      description: 'Tienda online a medida, optimizada para escalar facturación',
      features: [
        'Desarrollo de catálogo y checkout sin fricción',
        'GTM Server-Side nativo para E-commerce',
        'Embudos de conversión para tiendas online',
        'Análisis de carritos abandonados',
        'Integración segura de pasarelas de pago',
        'Optimización continua y soporte técnico',
      ],
      cta: 'Cotizar Tienda',
      popular: false,
    },
    {
      name: 'Custom Software',
      price: 'Consultar',
      description: 'Desarrollo de software a medida, SaaS, CRMs e integraciones complejas',
      features: [
        'Desarrollo de SaaS y CRMs a medida',
        'Arquitecturas de alto rendimiento (React)',
        'Integraciones complejas mediante APIs',
        'Sistemas de automatización de negocio',
        'Infraestructura backend y bases de datos',
        'Consultoría de arquitectura web completa',
      ],
      cta: 'Agendar Llamada Técnica',
      popular: false,
      whatsappLink: 'https://api.whatsapp.com/send?phone=5804128231012'
    },
  ];

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      nombre: formData.name,
      email: formData.email,
      telefono_completo: `${formData.countryCode}${formData.phone}`,
      mensaje: formData.message,
      plan_seleccionado: selectedPlan,
      fecha_solicitud: new Date().toISOString()
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
            Sistemas de <span className="text-cyan-400 block sm:inline">Desarrollo Web</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-2">
            No adaptamos plantillas pre-hechas. Desarrollamos infraestructuras técnicas a medida, optimizadas para generar conversiones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-slate-800 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col h-full ${
                plan.popular ? 'border-2 border-cyan-500 shadow-xl shadow-cyan-500/20 md:-translate-y-2' : 'border border-slate-700'
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
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  {plan.priceNote && <span className="text-slate-400 text-xs sm:text-sm uppercase font-medium">{plan.priceNote}</span>}
                  <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{plan.price}</span>
                </div>
                {/* Altura mínima ajustada para que las tarjetas se alineen correctamente incluso en móvil */}
                <p className="text-slate-400 text-sm h-auto sm:h-12 leading-relaxed">{plan.description}</p>
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
                {plan.name === 'Custom Software' ? (
                  <a href={plan.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-slate-700/50 border border-slate-600 text-white hover:bg-slate-700 transition-colors text-sm sm:text-base active:scale-[0.98]">
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button onClick={() => openModal(plan.name)} className={`w-full py-3.5 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base active:scale-[0.98] ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-cyan-500/50' : 'bg-slate-700/50 border border-slate-600 text-white hover:bg-slate-700'}`}>
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
          {/* Añadido my-8 para que en móviles muy pequeños se pueda hacer scroll si el formulario es más alto que la pantalla */}
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl relative w-full max-w-[440px] my-8">
            <div className="p-5 sm:p-6 border-b border-slate-800 flex justify-between items-center sticky top-0 bg-slate-900 z-10 rounded-t-2xl">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Solicitar Proyecto</h3>
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
                <p className="text-slate-400 text-sm sm:text-base">Elian analizará tus requerimientos y te contactará en las próximas 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="flex flex-col">
                  <label className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-wider ml-1 mb-1">Nombre Completo</label>
                  <input required type="text" placeholder="Tu nombre o empresa" value={formData.name} className="w-full bg-slate-800 border border-slate-700 rounded-xl text-white p-3 sm:p-3.5 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-wider ml-1 mb-1">Email Corporativo</label>
                  <input required type="email" placeholder="contacto@tuempresa.com" value={formData.email} className="w-full bg-slate-800 border border-slate-700 rounded-xl text-white p-3 sm:p-3.5 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-wider ml-1 mb-1">Teléfono / WhatsApp</label>
                  <div className="flex gap-2">
                    <select 
                      className="bg-slate-800 border border-slate-700 rounded-xl text-white p-3 text-xs sm:text-sm outline-none focus:border-cyan-500 transition-all cursor-pointer w-[100px] sm:w-[110px]"
                      value={formData.countryCode}
                      onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                    >
                      {countryCodes.map(c => <option key={`${c.label}-${c.code}`} value={c.code}>{c.label} ({c.code})</option>)}
                    </select>
                    <input required type="tel" placeholder="Número" value={formData.phone} className="flex-1 bg-slate-800 border border-slate-700 rounded-xl text-white p-3 sm:p-3.5 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-500" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] sm:text-xs font-bold text-cyan-400 uppercase tracking-wider ml-1 mb-1">Objetivo Técnico</label>
                  <textarea rows={3} placeholder="Describe brevemente la infraestructura web que necesitas..." value={formData.message} className="w-full bg-slate-800 border border-slate-700 rounded-xl text-white p-3 sm:p-3.5 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none placeholder:text-slate-500" onChange={(e) => setFormData({...formData, message: e.target.value})} />
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