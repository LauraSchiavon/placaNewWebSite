import React from "react";
import {
  Car,
  Truck,
  Recycle as Motorcycle,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all hover:shadow-xl hover:transform hover:-translate-y-1">
      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Icon className="h-8 w-8 text-blue-900" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Emplacamento de Carros",
      description:
        "Serviço completo de emplacamento para veículos particulares, seguindo todas as normas do DETRAN.",
    },
    {
      icon: Truck,
      title: "Emplacamento de Caminhões",
      description:
        "Soluções específicas para veículos de carga, com placas resistentes para uso intenso.",
    },
    {
      icon: Motorcycle,
      title: "Emplacamento de Motos",
      description:
        "Placas para motocicletas com instalação segura e de acordo com a legislação vigente.",
    },
    {
      icon: Briefcase,
      title: "Emplacamento Comercial",
      description:
        "Serviços especializados para frotas empresariais com atendimento personalizado.",
    },
    {
      icon: ShieldCheck,
      title: "Entrega de Placas",
      description:
        "Receba suas placas com rapidez e segurança no local desejado, com toda a comodidade que você merece.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título da Seção */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas de emplacamento para todos os tipos de
            veículos, com qualidade e compromisso com as normas vigentes.
          </p>
        </div>

        {/* Cards de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Botão Final */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Precisa de um serviço personalizado? Entre em contato conosco!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=SEU_NUMERO_AQUI&text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
