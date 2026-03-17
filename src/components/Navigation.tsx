import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  onCtaClick: () => void;
}

export default function Navigation({ onCtaClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      // El cambio crucial: Si el menú está abierto (isOpen), FORZAMOS el fondo oscuro sólido 
      // para evitar que se mezclen las letras, independientemente de si hicimos scroll o no.
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-lg' 
          : 'bg-transparent border-b border-transparent pt-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between h-10 sm:h-12">
          
          <div className="flex items-center gap-2.5 sm:gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 shrink-0">
              <span className="text-white font-bold text-lg sm:text-xl">E</span>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl tracking-tight leading-none mt-0.5">ELIAN.DEV</span>
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
            <button
              onClick={() => scrollToSection('auditoria')}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors h-full flex items-center"
            >
              Auditoría
            </button>
            <button
              onClick={() => scrollToSection('equipo')}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors h-full flex items-center"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection('precios')}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors h-full flex items-center"
            >
              Precios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors h-full flex items-center"
            >
              Contacto
            </button>
            <button
              onClick={onCtaClick}
              className="ml-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 text-sm font-bold rounded-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 active:scale-95"
            >
              Iniciar Proyecto
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menú Móvil - Fondo integrado por la clase de la etiqueta <nav> superior */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pb-4 border-t border-slate-800 pt-4">
            <button
              onClick={() => scrollToSection('auditoria')}
              className="w-full text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              Auditoría Técnica
            </button>
            <button
              onClick={() => scrollToSection('equipo')}
              className="w-full text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              Consultores y Equipo
            </button>
            <button
              onClick={() => scrollToSection('precios')}
              className="w-full text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              Planes y Precios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="w-full text-left px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              Contacto
            </button>
            <div className="px-4 pt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onCtaClick();
                }}
                className="w-full px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-900 text-sm font-bold rounded-xl shadow-lg active:scale-95 transition-transform"
              >
                Iniciar Proyecto
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}