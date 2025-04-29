import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Início", href: "home" },
    { label: "Sobre Nós", href: "about" },
    { label: "Serviços", href: "services" },
    { label: "Localização", href: "location" },
  ];

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "551982212948";
    const message =
      "Olá! Gostaria de saber mais sobre os serviços de emplacamento.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img src="/image/logo.png" alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {links.map((item, index) => (
              <a
                key={index}
                href={`#${item.href}`}
                className="px-4 py-2 text-blue-900 font-medium hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleWhatsAppRedirect}
              className="ml-4 px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              Solicitar Orçamento
            </button>
          </nav>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-blue-900 hover:bg-blue-50"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {links.map((item, index) => (
              <a
                key={index}
                href={`#${item.href}`}
                className="block px-4 py-2 text-blue-900 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                handleWhatsAppRedirect();
              }}
              className="block w-full px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
