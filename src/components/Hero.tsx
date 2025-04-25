import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-blue-900 text-white "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900/95"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-screen flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Emplacamento rápido e seguro para seu veículo
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Soluções completas de emplacamento com qualidade e agilidade em
              Piracicaba
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 text-center"
              >
                Nossos Serviços
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 text-center"
              >
                Entre em Contato
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <img
              src="/image/hero.png"
              alt="Placa New Logo"
              className="w-[400px] md:w-[700px] animate-fade-in rounded-lg"
            />
          </div>
        </div>
      </div>
      {/* 
      <div className="absolute bottom-8 left-0 right-0 text-center animate-bounce">
        <a href="#about" className="inline-block text-white">
          <span className="sr-only">Rolar para baixo</span>
          <ChevronDown className="h-8 w-8" />
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
