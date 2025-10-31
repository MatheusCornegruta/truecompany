import { Shield, Eye, Zap, HeartHandshake } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      icon: HeartHandshake,
      title: 'Proximidade Humana',
      description: 'Não somos apenas consultores — somos parceiros que entendem suas dores e celebram suas conquistas. Cada projeto é tratado com cuidado genuíno.',
      color: 'from-[#9E0000] to-[#C50505]',
    },
    {
      icon: Shield,
      title: 'Respeito',
      description: 'Valorizamos sua história, seu tempo e seus recursos. Trabalhamos com ética, comprometimento e sempre priorizando o que é melhor para você.',
      color: 'from-[#C50505] to-[#FF0000]',
    },
    {
      icon: Eye,
      title: 'Transparência',
      description: 'Comunicação clara, processos abertos e resultados mensuráveis. Você sempre sabe o que está sendo feito e por quê.',
      color: 'from-[#FF0000] to-[#C50505]',
    },
    {
      icon: Zap,
      title: 'Coragem de Transformar',
      description: 'Não temos medo de desafios complexos. Encaramos cada problema com criatividade, determinação e foco em soluções que realmente funcionam.',
      color: 'from-[#C50505] to-[#9E0000]',
    },
  ];

  return (
    <section className="py-24 bg-[#FFF5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#9E0000] mb-4">
            Nossos Diferenciais
          </h2>
          <div className="w-24 h-1 bg-[#F6BD50] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            O que nos torna únicos e por que empresas escolhem a True Company
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {differentials.map((diff, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${diff.color} p-6 flex items-center space-x-4`}>
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  <diff.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {diff.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#9E0000] via-[#C50505] to-[#9E0000] text-white rounded-2xl p-12 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Empresa Resolvedora de Problemas
            </h3>
            <p className="text-xl leading-relaxed mb-8 text-[#F8E39F]">
              Nossa metodologia é simples e eficaz:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl font-bold text-[#F6BD50] mb-2">01</div>
                <h4 className="text-xl font-bold mb-2">Escutamos</h4>
                <p className="text-[#F8E39F]">Entendemos profundamente seus desafios e objetivos</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl font-bold text-[#F6BD50] mb-2">02</div>
                <h4 className="text-xl font-bold mb-2">Entendemos</h4>
                <p className="text-[#F8E39F]">Analisamos e desenhamos a solução personalizada</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl font-bold text-[#F6BD50] mb-2">03</div>
                <h4 className="text-xl font-bold mb-2">Entregamos</h4>
                <p className="text-[#F8E39F]">Implementamos com excelência e acompanhamos resultados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
