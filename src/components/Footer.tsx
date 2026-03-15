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
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error de conexión al enviar los datos.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          
          {/* Columna Izquierda: Info de Marca */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-white font-bold text-2xl">E</span>
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">ELIAN.DEV</span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-md">
              Desarrollo de infraestructuras web y sistemas de adquisición orientados a conversión para empresas operando en España, México y Latinoamérica.
            </p>
            
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <a href="mailto:elianwilfredo17@gmail.com" className="hover:text-cyan-400 transition-colors font-medium">
                  elianwilfredo17@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="font-medium">Venezuela · Operación 100% Remota</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="font-medium">Soporte y Entregas en Horario CET (España)</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Formulario de Contacto */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-2">Hablemos de tu proyecto</h3>
            <p className="text-slate-400 mb-8 text-sm">Déjame tus datos y me pondré en contacto contigo en menos de 24 horas.</p>
            
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center animate-bounce">
                  <Check className="text-emerald-500 w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">¡Mensaje Recibido!</h4>
                <p className="text-slate-400 text-center">Analizaré tu solicitud y te escribiré pronto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Nombre</label>
                  <input required type="text" placeholder="Tu nombre" className="w-full bg-slate-950 border border-slate-800 rounded-xl text-white p-3.5 text-sm outline-none focus:border-cyan-500 transition-all" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Email</label>
                    <input required type="email" placeholder="correo@empresa.com" className="w-full bg-slate-950 border border-slate-800 rounded-xl text-white p-3.5 text-sm outline-none focus:border-cyan-500 transition-all" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Teléfono</label>
                    {/* Contenedor unificado para el input group */}
                    <div className="flex w-full bg-slate-950 border border-slate-800 rounded-xl focus-within:border-cyan-500 transition-all overflow-hidden">
                      <select 
                        className="bg-transparent text-white pl-3 pr-1 py-3.5 text-sm outline-none cursor-pointer border-r border-slate-800 w-[90px] shrink-0 appearance-none"
                        value={formData.countryCode}
                        onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                      >
                        {countryCodes.map(c => (
                          <option key={c.label} value={c.code} className="bg-slate-900">{c.label.split(' ')[0]} {c.code}</option>
                        ))}
                      </select>
                      <input required type="tel" placeholder="000 000 000" className="w-full min-w-0 bg-transparent text-white p-3.5 text-sm outline-none" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-1">Mensaje / Presupuesto</label>
                  <textarea rows={4} placeholder="Detalles de lo que buscas resolver..." className="w-full bg-slate-950 border border-slate-800 rounded-xl text-white p-3.5 text-sm outline-none focus:border-cyan-500 transition-all resize-none" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} />
                </div>
                
                <button disabled={isSubmitting} type="submit" className={`w-full bg-slate-800 text-white font-bold py-4 rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-all hover:bg-slate-700 hover:border-cyan-500/50 ${isSubmitting ? 'opacity-50' : ''}`}>
                  {isSubmitting ? 'Enviando...' : (
                    <>Enviar Mensaje <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Inferior */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © 2026 ELIAN.DEV Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium">
            <button onClick={() => setActiveLegalModal('terms')} className="hover:text-cyan-400 transition-colors">
              Términos de Servicio
            </button>
            <button onClick={() => setActiveLegalModal('privacy')} className="hover:text-cyan-400 transition-colors">
              Privacidad
            </button>
            <button onClick={() => setActiveLegalModal('cookies')} className="hover:text-cyan-400 transition-colors">
              Cookies
            </button>
          </div>
        </div>
      </div>

      {/* Modales Legales */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl relative w-full max-w-2xl max-h-[80vh] flex flex-col">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center shrink-0">
              <h3 className="text-xl font-bold text-white">
                {legalContent[activeLegalModal as keyof typeof legalContent].title}
              </h3>
              <button onClick={() => setActiveLegalModal(null)} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto text-slate-300 text-sm leading-relaxed space-y-4">
              <p>{legalContent[activeLegalModal as keyof typeof legalContent].content}</p>
            </div>
            <div className="p-6 border-t border-slate-800 shrink-0">
              <button onClick={() => setActiveLegalModal(null)} className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 transition-colors">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}