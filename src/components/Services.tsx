import { BarChart3, Coins, Target, Megaphone, TrendingUp, Share2, CreditCard, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: BarChart3,
      title: 'Gestão Empresarial',
      description: 'Estruturação e otimização de processos para uma gestão eficiente e sustentável.',
    },
    {
      icon: Coins,
      title: 'Gestão Financeira',
      description: 'Planejamento, controle e estratégias financeiras para saúde do seu negócio.',
    },
    {
      icon: Target,
      title: 'Estratégia & Planejamento',
      description: 'Definição de metas, planos de ação e roadmaps para crescimento estruturado.',
    },
    {
      icon: Megaphone,
      title: 'Marketing Estratégico',
      description: 'Estratégias de posicionamento, branding e comunicação efetiva com seu público.',
    },
    {
      icon: TrendingUp,
      title: 'Vendas & Comercial',
      description: 'Estruturação de processos comerciais, treinamento e estratégias de conversão.',
    },
    {
      icon: Share2,
      title: 'Redes Sociais',
      description: 'Consultoria em presença digital, estratégia de conteúdo e engajamento.',
    },
    {
      icon: CreditCard,
      title: 'Meios de Pagamento',
      description: 'Análise e implementação das melhores soluções de pagamento para seu negócio.',
    },
    {
      icon: Users,
      title: 'Treinamento de Equipe',
      description: 'Capacitação personalizada para desenvolver competências e performance do time.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#9E0000] mb-4">
            O Que Fazemos
          </h2>
          <div className="w-24 h-1 bg-[#F6BD50] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Soluções completas para transformar os desafios do seu negócio em resultados concretos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FFF5D7] p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#9E0000]"
            >
              <div className="bg-[#9E0000] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <service.icon className="text-[#F6BD50]" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#9E0000] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#9E0000] to-[#C50505] text-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Consultoria Empresarial Completa</h3>
            <p className="text-lg leading-relaxed">
              Não trabalhamos apenas com marketing. Nossa atuação é estratégica, integrada e focada
              em resolver as dores reais do seu negócio em todas as áreas que importam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
