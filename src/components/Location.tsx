import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const LocationInfo = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossa Localização</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos estrategicamente localizados para melhor atender nossos clientes.
            Visite-nos ou entre em contato para mais informações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3566610481156!2d-43.18085388503428!3d-22.90554788501169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5fd24e0b33%3A0x352dca41a97d3597!2sCentro%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1624383950987!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              title="Mapa de localização"
            ></iframe>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Endereço</h3>
                  <p className="text-gray-700">Av. Rio Branco, 156</p>
                  <p className="text-gray-700">Centro, Rio de Janeiro - RJ</p>
                  <p className="text-gray-700">CEP: 20040-901</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-700">Sábado: 8h às 12h</p>
                  <p className="text-gray-700">Domingo: Fechado</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Contato</h3>
                  <p className="text-gray-700">Telefone: (21) 3333-4444</p>
                  <p className="text-gray-700">WhatsApp: (21) 99999-8888</p>
                  <p className="text-gray-700">Email: contato@placasfacil.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;