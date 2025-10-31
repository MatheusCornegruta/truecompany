import { useState } from 'react';
import { Menu, X, Mail, Phone, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Cases from './components/Cases';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF5D7]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#9E0000] text-white z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span className="font-bold text-2xl tracking-wider">TRUE COMPANY</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-[#F6BD50] transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-[#F6BD50] transition-colors">
                Quem Somos
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-[#F6BD50] transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('differentials')} className="hover:text-[#F6BD50] transition-colors">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection('cases')} className="hover:text-[#F6BD50] transition-colors">
                Casos
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-[#F6BD50] transition-colors">
                Contato
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#C50505] border-t border-[#F6BD50]">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 hover:text-[#F6BD50] transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 hover:text-[#F6BD50] transition-colors">
                Quem Somos
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-[#F6BD50] transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('differentials')} className="block w-full text-left py-2 hover:text-[#F6BD50] transition-colors">
                Diferenciais
              </button>
              <button onClick={() => scrollToSection('cases')} className="block w-full text-left py-2 hover:text-[#F6BD50] transition-colors">
                Casos
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 hover:text-[#F6BD50] transition-colors">
                Contato
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Sections */}
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="differentials">
        <Differentials />
      </div>
      <div id="cases">
        <Cases />
      </div>
      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-[#9E0000] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="font-bold text-xl tracking-wider">True COMPANY</p>
              <p className="text-sm text-[#F8E39F] mt-1">Consultoria Empresarial</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#F6BD50] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#F6BD50] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contato@basscompany.com" className="hover:text-[#F6BD50] transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-[#F6BD50] text-center text-sm text-[#F8E39F]">
            <p>  Projeto autoral desenvolvido por <strong>Matheus Cornegruta</strong> — para fins de estudo e portfólio.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
