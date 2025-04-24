import { Facebook, Instagram, Mail, PhoneCall, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/image/logoBranco.jpg"
                alt="Placa New Logo"
                className="h-12 w-auto rounded-md"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Soluções completas em emplacamento veicular, com qualidade e
              agilidade para sua tranquilidade.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100064824678674"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/placanewpiracicaba/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Localização
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Emplacamento de Carros</li>
              <li className="text-gray-300">Emplacamento de Caminhões</li>
              <li className="text-gray-300">Emplacamento de Motos</li>
              <li className="text-gray-300">Emplacamento Comercial</li>
              <li className="text-gray-300">Entrega de Placas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Piracicaba - SP</span>
              </li>
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">(19) 98221-2948</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  piracicaba@placanew.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 py-4">
        <div className="container mx-auto px-4 md:px-6 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Placa New. Todos os direitos
            reservados. Site criado pela Sansch Agência.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
