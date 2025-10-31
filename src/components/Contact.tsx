import { Mail, Phone, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#FFF5D7] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-[#9E0000] mb-4">
            Vamos Conversar?
          </h2>
          <div className="w-24 h-1 bg-[#F6BD50] mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar os desafios da sua empresa em resultados
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:contato@basscompany.com"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#9E0000] group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#9E0000] p-4 rounded-full group-hover:bg-[#C50505] transition-colors">
                  <Mail className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#9E0000] mb-2 group-hover:text-[#C50505] transition-colors">
                    E-mail
                  </h3>
                  <p className="text-gray-600 text-lg">
                    contato@truecompany.com
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Clique para enviar um e-mail
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#9E0000] group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#9E0000] p-4 rounded-full group-hover:bg-[#C50505] transition-colors">
                  <MessageCircle className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#9E0000] mb-2 group-hover:text-[#C50505] transition-colors">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 text-lg">
                    (11) 99999-9999
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Clique para conversar agora
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://instagram.com/basscompany"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#9E0000] group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#9E0000] p-4 rounded-full group-hover:bg-[#C50505] transition-colors">
                  <Instagram className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#9E0000] mb-2 group-hover:text-[#C50505] transition-colors">
                    Instagram
                  </h3>
                  <p className="text-gray-600 text-lg">
                    @truecompany
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Siga e envie uma mensagem
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://linkedin.com/company/basscompany"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#9E0000] group"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-[#9E0000] p-4 rounded-full group-hover:bg-[#C50505] transition-colors">
                  <Linkedin className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#9E0000] mb-2 group-hover:text-[#C50505] transition-colors">
                    LinkedIn
                  </h3>
                  <p className="text-gray-600 text-lg">
                    True Company
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Conecte-se conosco
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="bg-gradient-to-br from-[#9E0000] to-[#C50505] text-white p-10 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Horário de Atendimento
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-[#F6BD50] font-bold text-lg mb-1">Segunda a Sexta</p>
                <p className="text-xl">9h às 18h</p>
              </div>
              <div>
                <p className="text-[#F6BD50] font-bold text-lg mb-1">Sábado</p>
                <p className="text-xl">9h às 13h</p>
              </div>
            </div>
            <p className="text-center text-[#F8E39F] mt-6">
              Respondemos mensagens fora do horário comercial em até 24h
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 text-xl font-semibold">
            Preferimos conversar pessoalmente. Entre em contato e vamos entender como podemos ajudar seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
}
