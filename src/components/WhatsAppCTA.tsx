
import { Button } from "@/components/ui/button";

const WhatsAppCTA = () => {
  return (
    <div className="relative max-w-md mx-auto mt-16">
      {/* Animated Rings */}
      <div className="absolute -inset-3 bg-[#25D366] rounded-full blur opacity-75 animate-pulse" />
      <div className="absolute -inset-3 rounded-full border-4 border-[#25D366] animate-ping opacity-30" />
      <div className="absolute -inset-6 rounded-full border-4 border-[#25D366] animate-ping opacity-20" style={{ animationDelay: "300ms" }} />
      <div className="absolute -inset-9 rounded-full border-4 border-[#25D366] animate-ping opacity-10" style={{ animationDelay: "600ms" }} />

      <Button
        className="relative w-full text-xl font-bold bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] px-8 py-8 rounded-full border-2 border-white shadow-xl transition-all duration-300 hover:scale-105"
        asChild
      >
        <a
href="https://wa.me/5519993261388?text=Olá%2C%20tudo%20bem%3F%20Vim%20através%20do%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20personalizado."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4"
        >
          <div className="bg-white rounded-full p-2">
            <img src="/wpp.svg" alt="WhatsApp" className="w-6 h-6" />
          </div>

          <div className="flex flex-col items-start">
            <span className="text-sm font-normal">Atendimento Imediato</span>
            <span className="text-lg font-bold">FALE COM ESPECIALISTA</span>
          </div>

          <span className="absolute -right-2 -top-2 flex h-6 w-6">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-6 w-6 bg-white text-[#25D366] items-center justify-center text-xs font-bold">
              1
            </span>
          </span>
        </a>
      </Button>
    </div>
  );
};

export default WhatsAppCTA;
