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
      description: 'Landing Page orientada a maximizar la captura de leads',
      features: [
        'Diseño de interfaz exclusivo en Figma',
        'Desarrollo Frontend optimizado',
        'Generación y medición de conversiones',
        'Conexión base con Google Analytics',
        'Optimización SEO On-Page',
        'Soporte técnico por 30 días',
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
        'Tag Manager con método Server-Side',
        'Medición con mapas de calor',
        'Análisis de leads y comportamiento',
        'Generación de conversiones avanzada',
        'Optimización y soporte por 30 días',
      ],
      cta: 'Solicitar Proyecto',
      popular: true,
    },
    {
      name: 'E-Commerce',
      price: '$1,500',
      priceNote: 'desde',
      description: 'Tienda online optimizada para escalar facturación',
      features: [
        'Desarrollo de catálogo y checkout optimizado',
        'Tag Manager Server-Side para E-commerce',
        'Embudos de conversión y mapas de calor',
        'Análisis de leads y carritos abandonados',
        'Integración de pasarelas de pago',
        'Optimización y soporte técnico continuo',
      ],
      cta: 'Cotizar Tienda',
      popular: false,
    },
    {
      name: 'Custom Software',
      price: 'Consultar',
      description: 'Desarrollo de software a medida, SaaS, CRMs e integraciones complejas para escalar operaciones',
      features: [
        'Desarrollo de SaaS y CRMs a medida',
        'Arquitecturas escalables (React, SQL, Supabase)',
        'Integraciones complejas (APIs de Google, Meta)',
        'Sistemas de automatización y WhatsApp API',
        'Infraestructura Server-Side y bases de datos',
        'Consultoría de arquitectura y despliegue',
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
        setTimeout(() => setIsModalOpen(false), 2500);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión al enviar los datos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="precios" className="py-20 px-6 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sistemas de <span className="text-cyan-400">Adquisición y Gestión</span>
          </h2>
          <p className="text-xl text-slate-300">
            No vendemos plantillas. Desarrollamos infraestructuras medidas y optimizadas para tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-slate-800 rounded-2xl p-6 transition-all duration-300 flex flex-col h-full ${
                plan.popular ? 'border-2 border-cyan-500 shadow-xl shadow-cyan-500/20 md:-translate-y-2' : 'border border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-max">
                  <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-lg">
                    Más Elegido
                  </span>
                </div>
              )}
              <div className="mb-6 flex-grow-0 mt-2">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  {plan.priceNote && <span className="text-slate-400 text-xs uppercase font-medium">{plan.priceNote}</span>}
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                </div>
                <p className="text-slate-400 text-sm h-12 leading-relaxed">{plan.description}</p>
              </div>
              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                {plan.name === 'Custom Software' ? (
                  <a href={plan.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 bg-slate-700/50 border border-slate-600 text-white hover:bg-slate-700 transition-colors">
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                ) : (
                  <button onClick={() => openModal(plan.name)} className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]' : 'bg-slate-700/50 border border-slate-600 text-white hover:bg-slate-700'}`}>
                    {plan.cta} <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl relative overflow-hidden w-full max-w-[440px]">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">🚀 Solicitar Plan {selectedPlan}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white"><X /></button>
            </div>

            {isSuccess ? (
              <div className="p-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto animate-bounce"><Check className="text-emerald-500 w-8 h-8" /></div>
                <h4 className="text-xl font-bold text-white">¡Solicitud Enviada!</h4>
                <p className="text-slate-400">Te contactaré a la brevedad para analizar tu proyecto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider ml-1">Nombre Completo</label>
                  <input required type="text" placeholder="Tu nombre o empresa" className="w-full bg-slate-800 border border-slate-700 rounded-xl text-white p-3 mt-2 text-sm outline-none focus:border-cyan-500 transition-all" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider ml-1">Email Profesional</label>
                  <input required type="email" placeholder="contacto@empresa.com" className="w-full bg-slate-800 border border-slate-700 rounded-xl text-white p-3 mt-2 text-sm outline-none focus:border-cyan-500 transition-all" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider ml-1">Teléfono / WhatsApp</label>
                  <div className="flex gap-2 mt-2">
                    <select 
                      className="bg-slate-800 border border-slate-700 rounded-xl text-white p-3 text-xs outline-none focus:border-cyan-500 transition-all cursor-pointer w-[110px]"
                      value={formData.countryCode}
                      onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                    >
                      {countryCodes.map(c => <option key={`${c.label}-${c.code}`} value={c.code}>{c.label} ({c.code})</option>)}
                    </select>
                    <input required type="tel" placeholder="Número de contacto" className="flex-1 bg-slate-800 border border-slate-700 rounded-xl text-white p-3 text-sm outline-none focus:border-cyan-500 transition-all" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider ml-1">Objetivo de Negocio</label>
                  <textarea rows={3} placeholder="¿Qué problema necesitas resolver con este desarrollo?" className="w-full bg-slate-800 border border-slate-700 rounded-xl text-white p-3 mt-2 text-sm outline-none focus:border-cyan-500 transition-all resize-none" onChange={(e) => setFormData({...formData, message: e.target.value})} />
                </div>
                <button disabled={isSubmitting} type="submit" className={`w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg ${isSubmitting ? 'opacity-50' : 'hover:scale-[1.02] active:scale-95'}`}>
                  {isSubmitting ? 'Procesando...' : 'Solicitar Propuesta'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}