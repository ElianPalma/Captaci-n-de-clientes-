import { useState } from 'react';
import { Mail, MapPin, Clock, X, Send, Check } from 'lucide-react';

export default function Footer() {
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);
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
    { code: '+34', label: '🇪🇸 ESP' },
    { code: '+52', label: '🇲🇽 MEX' },
    { code: '+54', label: '🇦🇷 ARG' },
    { code: '+56', label: '🇨🇱 CHI' },
    { code: '+57', label: '🇨🇴 COL' },
    { code: '+51', label: '🇵🇪 PER' },
    { code: '+1',  label: '🇺🇸 USA' },
    { code: '+58', label: '🇻🇪 VEN' },
  ];

  const legalContent = {
    terms: {
      title: 'Términos de Servicio',
      content: 'Los presentes términos y condiciones regulan el uso de los servicios de desarrollo y consultoría web. Al contratar nuestros servicios, el cliente acepta las metodologías de trabajo, estructuras de pago y plazos de entrega estipulados en la propuesta comercial correspondiente. Nos reservamos el derecho de modificar estos términos, notificando a los clientes activos con antelación.'
    },
    privacy: {
      title: 'Política de Privacidad',
      content: 'En cumplimiento con las normativas internacionales de protección de datos, informamos que los datos personales recopilados a través de los formularios de este sitio web serán utilizados exclusivamente para gestionar las solicitudes de contacto y envío de propuestas comerciales. No compartimos, cedemos ni vendemos información a terceros. Puede solicitar el acceso, rectificación o eliminación de sus datos en cualquier momento contactando a nuestro correo principal.'
    },
    cookies: {
      title: 'Política de Cookies',
      content: 'Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y cookies analíticas de terceros (como integraciones de mapas de calor y analítica de tráfico) para medir el rendimiento y optimizar la experiencia del usuario. Al continuar navegando, acepta el uso de estas tecnologías. Puede configurar su navegador para bloquearlas, aunque esto podría afectar ciertas funcionalidades y la precisión de la navegación.'
    }
  };

  const openLegalModal = (modalType: string) => {
    setActiveLegalModal(modalType);
    document.body.style.overflow = 'hidden'; 
  };

  const closeLegalModal = () => {
    setActiveLegalModal(null);
    document.body.style.overflow = 'unset';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      nombre: formData.name,
      email: formData.email,
      telefono_completo: `${formData.countryCode} ${formData.phone}`,
      mensaje: formData.message,
      origen: 'Formulario Footer',
      fecha_solicitud: new Date().toISOString()
    };

    try {
      const response = await fetch('https://hook.us2.make.com/t6v2ttgc2925jha63tktd9n8j5inhwxw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', countryCode: '+58', phone: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
         throw new Error('Error en la respuesta del servidor');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión al enviar los datos. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
                <span className="text-white font-bold text-xl sm:text-2xl">E</span>
              </div>
              <span className="text-white font-bold text-xl sm:text-2xl tracking-tight">ELIAN.DEV</span>
            </div>
            <p className="text-slate-400 mb-8 text-sm sm:text-base leading-relaxed max-w-md">
              Desarrollo de infraestructuras web y sistemas de adquisición orientados a conversión para empresas operando en España, México y Latinoamérica.
            </p>
            
            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <a href="mailto:elianwilfredo17@gmail.com" className="text-sm sm:text-base hover:text-cyan-400 transition-colors font-medium break-all">
                  elianwilfredo17@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm sm:text-base font-medium">Venezuela · Operación 100% Remota</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-sm sm:text-base font-medium">Soporte y Entregas en Horario CET (España)</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Hablemos de tu proyecto</h3>
            <p className="text-slate-400 mb-6 sm:mb-8 text-xs sm:text-sm">Déjame tus datos y me pondré en contacto contigo en menos de 24 horas.</p>
            
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center animate-bounce">
                  <Check className="text-emerald-500 w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">¡Mensaje Recibido!</h4>
                <p className="text-slate-400 text-sm sm:text-base text-center">Analizaré tu solicitud y te escribiré a la brevedad.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="flex flex-col">
                  <label htmlFor="footer-name" className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">Nombre Completo</label>
                  <input id="footer-name" required type="text" placeholder="Tu nombre o empresa" className="w-full bg-slate-950 border border-slate-800 rounded-xl text-white p-3 sm:p-3.5 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex flex-col">
                    <label htmlFor="footer-email" className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">Email</label>
                    <input id="footer-email" required type="email" placeholder="correo@empresa.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl text-white p-3 sm:p-3.5 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-slate-600" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  
                  <div className="flex flex-col">
                    <label htmlFor="footer-phone" className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">Teléfono</label>
                    <div className="flex w-full bg-slate-950 border border-slate-800 rounded-xl focus-within:border-cyan-500 focus-within:ring-1 focus-within:ring-cyan-500 transition-all overflow-hidden">
                      <select 
                        aria-label="Código de país"
                        className="bg-transparent text-white pl-3 pr-1 py-3 sm:py-3.5 text-xs sm:text-sm outline-none cursor-pointer border-r border-slate-800 w-[85px] sm:w-[90px] shrink-0"
                        value={formData.countryCode}
                        onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                      >
                        {countryCodes.map(c => (
                          <option key={c.label} value={c.code} className="bg-slate-900">{c.label.split(' ')[0]} {c.code}</option>
                        ))}
                      </select>
                      <input id="footer-phone" required type="tel" placeholder="000 000 000" className="w-full min-w-0 bg-transparent text-white p-3 sm:p-3.5 text-sm outline-none placeholder:text-slate-600" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="footer-message" className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5 ml-1">Detalles del Proyecto</label>
                  <textarea id="footer-message" rows={4} placeholder="¿Qué infraestructura necesitas desarrollar?" className="w-full bg-slate-950 border border-slate-800 rounded-xl text-white p-3 sm:p-3.5 text-sm outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none placeholder:text-slate-600" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                </div>
                
                <button disabled={isSubmitting} type="submit" className={`w-full bg-slate-800 text-white font-bold py-3.5 sm:py-4 rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-all mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-slate-700 hover:border-cyan-500/50 active:scale-98'}`}>
                  {isSubmitting ? (
                    <><span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span> Procesando...</>
                  ) : (
                    <>Enviar Mensaje <Send className="w-4 h-4 sm:w-5 sm:h-5" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <p className="text-slate-500 text-xs sm:text-sm font-medium text-center md:text-left">
            © {currentYear} ELIAN.DEV Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-500 font-medium">
            <button onClick={() => openLegalModal('terms')} className="hover:text-cyan-400 transition-colors">
              Términos de Servicio
            </button>
            <button onClick={() => openLegalModal('privacy')} className="hover:text-cyan-400 transition-colors">
              Privacidad
            </button>
            <button onClick={() => openLegalModal('cookies')} className="hover:text-cyan-400 transition-colors">
              Cookies
            </button>
          </div>
        </div>
      </div>

      {activeLegalModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl relative w-full max-w-2xl max-h-[85vh] flex flex-col my-8">
            <div className="p-5 sm:p-6 border-b border-slate-800 flex justify-between items-center shrink-0">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {legalContent[activeLegalModal as keyof typeof legalContent].title}
              </h3>
              <button onClick={closeLegalModal} className="text-slate-400 hover:text-white transition-colors p-1" aria-label="Cerrar modal legal">
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="p-5 sm:p-6 overflow-y-auto text-slate-300 text-xs sm:text-sm leading-relaxed space-y-4 custom-scrollbar">
              <p>{legalContent[activeLegalModal as keyof typeof legalContent].content}</p>
            </div>
            <div className="p-5 sm:p-6 border-t border-slate-800 shrink-0">
              <button onClick={closeLegalModal} className="w-full bg-slate-800 text-white font-bold py-3 sm:py-3.5 rounded-xl hover:bg-slate-700 transition-colors active:scale-95">
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}