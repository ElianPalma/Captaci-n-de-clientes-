import { useState } from 'react';
import { Search, CheckCircle, Loader2 } from 'lucide-react';

export default function LeadMagnet() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    'Escaneando tiempos de carga (Core Web Vitals)...',
    'Verificando vulnerabilidades y seguridad...',
    'Analizando estructura SEO y Meta-tags...',
    'Evaluando experiencia de usuario (UX)...',
    'Compilando reporte de optimización...',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) return;

    setStatus('loading');
    setLoadingStep(0);

    // Simulación visual de pasos técnicos
    const interval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= loadingSteps.length - 1) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    const payload = {
      sitio_web: url,
      email_contacto: email,
      tipo_solicitud: 'Auditoría Desarrollo Web Corporativo',
      fecha: new Date().toISOString()
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/nvrili7bbmop6mxao1yf1pmr1oth5g7b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Error en el servidor');
      }
    } catch (error) {
      console.error('Error enviando auditoría:', error);
      alert('Hubo un problema al procesar tu solicitud. Por favor, revisa tu conexión e intenta de nuevo.');
      setStatus('idle');
      clearInterval(interval);
    }
  };

  return (
    <section id="auditoria" className="py-12 sm:py-20 px-4 sm:px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          {/* H2 ajustado para evitar rotura de línea incómoda en pantallas muy pequeñas */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Auditoría de <span className="text-cyan-400">Desarrollo Web</span> Gratuita
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-2">
            Detectamos los cuellos de botella técnicos que están frenando tus ventas. 
            Recibe un diagnóstico profesional con soluciones accionables para escalar tu negocio.
          </p>
        </div>

        {/* Padding reducido en móvil (p-5) para maximizar espacio de pantalla */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 sm:p-8 md:p-12 shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-4 sm:py-8 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-400" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">¡Solicitud Procesada!</h3>
              <p className="text-slate-300 text-sm sm:text-base md:text-lg px-2">
                El análisis inicial de <strong>{url}</strong> ha comenzado. 
                Nuestro equipo técnico estructurará el diagnóstico y te enviaremos el reporte de viabilidad a <strong>{email}</strong> en las próximas 24 horas laborables.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-wider mb-1 sm:mb-2">
                    Sitio web actual (URL)
                  </label>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://tuempresa.com"
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner text-sm sm:text-base"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-cyan-400 uppercase tracking-wider mb-1 sm:mb-2">
                    Email corporativo (Reporte)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="director@tuempresa.com"
                    className="w-full px-3 py-3 sm:px-4 sm:py-4 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner text-sm sm:text-base"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {status === 'loading' && (
                <div className="py-3 sm:py-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 text-cyan-400">
                    <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin flex-shrink-0" />
                    <span className="text-sm sm:text-base md:text-lg font-medium leading-tight">{loadingSteps[loadingStep]}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2 sm:h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-full transition-all duration-500 ease-out"
                      style={{ width: `${((loadingStep + 1) / loadingSteps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Botón CTA reducido en móvil (text-base, py-3) para no verse abrumador */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 sm:py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 text-base sm:text-lg md:text-xl font-bold rounded-xl hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 sm:gap-3 active:scale-[0.98]"
              >
                <Search className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>{status === 'loading' ? 'Procesando...' : 'Obtener Diagnóstico Técnico'}</span>
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-400 mt-4">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" /> Sin costo
                </span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" /> Reporte Técnico PDF
                </span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" /> Confidencialidad 100%
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}