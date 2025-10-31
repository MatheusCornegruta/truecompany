import { CheckCircle, TrendingUp, Users, Sparkles } from 'lucide-react';

export default function Cases() {
  const cases = [
    {
      icon: TrendingUp,
      challenge: 'Cliente não sabia vender',
      problem: 'Empresa com produto excelente, mas sem processo comercial estruturado. Time sem técnicas de vendas e alta taxa de abandono de propostas.',
      solution: 'Treinamento comercial personalizado',
      results: [
        'Estruturação do funil de vendas',
        'Capacitação da equipe com técnicas de fechamento',
        'Aumento de 45% na conversão em 3 meses',
        'Equipe comercial autônoma e confiante',
      ],
      color: 'bg-[#9E0000]',
    },
    {
      icon: Sparkles,
      challenge: 'Gestão de redes sociais sem estratégia',
      problem: 'Presença digital inconsistente, sem identidade clara e baixo engajamento. Posts aleatórios sem conexão com o público-alvo.',
      solution: 'Consultoria estratégica em redes sociais',
      results: [
        'Definição de identidade visual e tom de voz',
        'Planejamento de conteúdo alinhado ao negócio',
        'Crescimento de 200% no engajamento',
        'Geração de leads qualificados pelo Instagram',
      ],
      color: 'bg-[#C50505]',
    },
    {
      icon: Users,
      challenge: 'Equipe desmotivada e sem direção',
      problem: 'Alta rotatividade, processos desalinhados e falta de clareza nos papéis de cada membro. Clima organizacional negativo.',
      solution: 'Gestão de pessoas e treinamento de liderança',
      results: [
        'Reestruturação organizacional com clareza de funções',
        'Programa de desenvolvimento de lideranças',
        'Redução de 60% na rotatividade',
        'Melhoria significativa no clima organizacional',
      ],
      color: 'bg-[#FF0000]',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#9E0000] mb-4">
            Casos Práticos
          </h2>
          <div className="w-24 h-1 bg-[#F6BD50] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Exemplos reais de como transformamos desafios em resultados concretos
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-[#FFF5D7] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className={`${caseItem.color} text-white p-6 flex items-center space-x-4`}>
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                  <caseItem.icon size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {caseItem.challenge}
                </h3>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-[#9E0000] mb-3 flex items-center">
                      <span className="w-2 h-2 bg-[#9E0000] rounded-full mr-2"></span>
                      O Problema
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {caseItem.problem}
                    </p>

                    <h4 className="text-xl font-bold text-[#F6BD50] mb-3 flex items-center">
                      <span className="w-2 h-2 bg-[#F6BD50] rounded-full mr-2"></span>
                      Nossa Solução
                    </h4>
                    <p className="text-gray-700 leading-relaxed font-semibold">
                      {caseItem.solution}
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-[#9E0000] mb-4 flex items-center">
                      <CheckCircle className="text-[#F6BD50] mr-2" size={24} />
                      Resultados Alcançados
                    </h4>
                    <ul className="space-y-3">
                      {caseItem.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="bg-[#9E0000] rounded-full p-1 mr-3 mt-1">
                            <CheckCircle className="text-[#F6BD50]" size={16} />
                          </div>
                          <span className="text-gray-700 leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-[#9E0000] to-[#C50505] text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Qual é o seu desafio?</h3>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Cada negócio é único, e por isso criamos soluções personalizadas.
            Vamos conversar sobre como podemos ajudar sua empresa a crescer?
          </p>
        </div>
      </div>
    </section>
  );
}
