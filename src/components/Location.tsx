import { MapPin, Clock, Phone } from "lucide-react";

const LocationInfo = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossa Localização
          </h2>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos estrategicamente localizados para melhor atender nossos
            clientes. Visite-nos ou entre em contato para mais informações.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2188.0376687852577!2d-47.62191364021468!3d-22.734705461813693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c6303427aa29db%3A0xc7488f22b012a181!2sAv.%20Antonia%20Pazinato%20Sturion%2C%20562%20-%20Jardim%20Petropolis%2C%20Piracicaba%20-%20SP%2C%2013420-640!5e0!3m2!1spt-BR!2sbr!4v1745528678676!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Mapa de localização"
            />
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Endereço
                  </h3>
                  <p className="text-gray-700">
                    Av. Antonia Pazinatto Sturion, 562
                  </p>
                  <p className="text-gray-700">Morumbi, Piracicaba - SP</p>
                  <p className="text-gray-700">CEP: 13420-640</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-700">Sábado: 8h às 12h</p>
                  <p className="text-gray-700">Domingo e Feriado: Fechado</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Contato
                  </h3>
                  <p className="text-gray-700">WhatsApp: (19) 98221-2948</p>
                  <p className="text-gray-700">
                    Email: piracicaba@placanew.com
                  </p>
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
