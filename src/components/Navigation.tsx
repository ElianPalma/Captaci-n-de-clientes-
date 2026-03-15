import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onCtaClick: () => void;
}

export default function Navigation({ onCtaClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-white font-bold text-xl">ELIAN.DEV</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('auditoria')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Auditoría
            </button>
            <button
              onClick={() => scrollToSection('equipo')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection('precios')}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Precios
            </button>
            <button
              onClick={onCtaClick}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Iniciar Proyecto
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button
              onClick={() => scrollToSection('auditoria')}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
            >
              Auditoría
            </button>
            <button
              onClick={() => scrollToSection('equipo')}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection('precios')}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
            >
              Precios
            </button>
            <button
              onClick={onCtaClick}
              className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg"
            >
              Iniciar Proyecto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
