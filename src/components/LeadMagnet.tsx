import { useState } from 'react';
import { Search, CheckCircle, Loader2 } from 'lucide-react';

export default function LeadMagnet() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [loadingStep, setLoadingStep] = useState(0);

  const loadingSteps = [
    'Escaneando tiempos de carga...',
    'Verificando vulnerabilidades...',
    'Analizando SEO y Meta-tags...',
    'Evaluando experiencia de usuario...',
    'Finalizando informe técnico...',
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
      tipo_solicitud: 'Auditoría Web Gratuita',
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
      alert('Hubo un problema al procesar tu solicitud. Intenta de nuevo.');
      setStatus('idle');
      clearInterval(interval);
    }
  };

  return (
    <section id="auditoria" className="py-20 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Auditoría Web <span className="text-cyan-400">Gratuita</span>
          </h2>
          <p className="text-xl text-slate-300">
            Detectamos los errores técnicos que están frenando tu crecimiento. 
            Recibe un reporte detallado con soluciones accionables para tu sitio.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 md:p-12 shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-8 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-emerald-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">¡Análisis Completado!</h3>
            <p className="text-slate-300 text-lg">
              Hemos recibido tu solicitud para <strong>{url}</strong> correctamente. 
              Nuestro equipo técnico realizará el análisis manualmente y te enviaremos el reporte detallado a <strong>{email}</strong> en las próximas 24-48 horas.
            </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                    URL de tu sitio web
                  </label>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://tusitio.com"
                    className="w-full px-4 py-4 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all shadow-inner"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                    Email donde recibir el reporte
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-4 bg-slate-900 border border-slate-600 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all shadow-inner"
                    required
                    disabled={status === 'loading'}
                  />
                </div>
              </div>

              {status === 'loading' && (
                <div className="py-6 space-y-4">
                  <div className="flex items-center gap-3 text-cyan-400">
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span className="text-lg font-medium">{loadingSteps[loadingStep]}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-full transition-all duration-500 ease-out"
                      style={{ width: `${((loadingStep + 1) / loadingSteps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 text-xl font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3 active:scale-[0.98]"
              >
                <Search className="w-6 h-6" />
                {status === 'loading' ? 'Procesando Datos...' : 'Solicitar Auditoría Técnica'}
              </button>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Sin costo
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Reporte Técnico PDF
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Sin compromiso
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}