import { useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import LeadMagnet from './components/LeadMagnet';
import Infrastructure from './components/Infrastructure';
import About from './components/About';
import ROICalculator from './components/ROICalculator';
import Pricing from './components/Pricing';
import Methodology from './components/Methodology';
import Footer from './components/Footer';

function App() {
  const auditoriaRef = useRef<HTMLDivElement>(null);

  const scrollToAuditoria = () => {
    const element = document.getElementById('auditoria');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation onCtaClick={scrollToAuditoria} />
      <Hero onCtaClick={scrollToAuditoria} />
      <LeadMagnet />
      <Infrastructure />
      <About />
      <ROICalculator />
      <Pricing />
      <Methodology />
      <Footer />
    </div>
  );
}

export default App;
