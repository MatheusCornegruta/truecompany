import { Heart, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-[#FFF5D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#9E0000] mb-4">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-[#F6BD50] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-800">
              Somos uma empresa que vai além do óbvio: oferecemos um cuidado humano,
              exclusivo e verdadeiro. Acreditamos em conexões recíprocas, onde o sucesso
              respeita a saúde mental e celebra a essência de cada pessoa.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Nosso diferencial está no respeito, na transparência e na coragem de
              transformar relações em evolução com propósito. Não somos uma agência de
              marketing — somos uma consultoria empresarial completa que resolve as
              dores reais do seu negócio.
            </p>
            <p className="text-lg leading-relaxed text-gray-800 font-semibold text-[#9E0000]">
              Escutamos. Entendemos. Entregamos.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#9E0000] hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[#9E0000] p-3 rounded-full">
                  <Heart className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#9E0000] mb-2">Cuidado Humano</h3>
                  <p className="text-gray-700">
                    Valorizamos cada pessoa e cada história, criando soluções que respeitam a essência humana.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#F6BD50] hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[#F6BD50] p-3 rounded-full">
                  <Users className="text-[#9E0000]" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#9E0000] mb-2">Conexões Verdadeiras</h3>
                  <p className="text-gray-700">
                    Construímos relacionamentos baseados em transparência, confiança e resultados mútuos.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#C50505] hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[#C50505] p-3 rounded-full">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#9E0000] mb-2">Evolução com Propósito</h3>
                  <p className="text-gray-700">
                    Transformamos desafios em oportunidades de crescimento sustentável e significativo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
