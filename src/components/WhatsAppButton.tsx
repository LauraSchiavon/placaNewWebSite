import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "551982212948";
  const message =
    "Olá! Gostaria de saber mais sobre os serviços de emplacamento.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg z-50 hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
