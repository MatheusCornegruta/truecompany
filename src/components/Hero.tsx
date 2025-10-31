import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9E0000] via-[#C50505] to-[#FF0000] text-white pt-20">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-4">
            TRUE COMPANY
          </h1>
          <div className="w-32 h-1 bg-[#F6BD50] mx-auto mb-8"></div>
        </div>

        <p className="text-2xl md:text-3xl font-light mb-6 text-[#F8E39F] leading-relaxed">
          Além do óbvio, a solução que você precisa
        </p>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
          Consultoria empresarial completa com um olhar humano, estratégico e verdadeiro.
          Transformamos desafios em resultados reais.
        </p>

        <button
          onClick={scrollToAbout}
          className="bg-[#F6BD50] text-[#9E0000] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F8E39F] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Conheça nosso trabalho
        </button>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
