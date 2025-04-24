import { Award, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre Nossa Empresa
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Há mais de 5 anos oferecendo soluções de emplacamento com qualidade,
            segurança e confiabilidade para nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700">
              A <span className="font-semibold text-blue-900">Placa New</span> é
              uma empresa especializada em serviços de emplacamento veicular,
              trabalhando com todas as categorias de veículos e oferecendo
              atendimento personalizado para cada cliente.
            </p>
            <p className="text-gray-700">
              Nossa equipe é formada por profissionais qualificados com amplo
              conhecimento nas normas e regulamentações do DETRAN, garantindo
              que seu emplacamento esteja em conformidade com todas as
              exigências legais.
            </p>
            <p className="text-gray-700">
              Nosso diferencial está na qualidade do atendimento, na agilidade
              dos processos e no compromisso com a satisfação dos nossos
              clientes, oferecendo sempre as melhores soluções para suas
              necessidades.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <Award className="h-10 w-10 text-blue-900 mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Qualidade
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Materiais de primeira linha
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <Users className="h-10 w-10 text-blue-900 mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Experiência
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Equipe especializada
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <Clock className="h-10 w-10 text-blue-900 mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Agilidade
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Processos rápidos
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <img
              src="/image/local.jpeg"
              alt="Foto do local de atendimento"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
