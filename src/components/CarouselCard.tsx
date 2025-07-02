
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselItem {
  src: string;
  alt: string;
}

interface CarouselCardProps {
  title: string;
  description: string;
  items: CarouselItem[];
  icon: React.ReactNode;
  whatsappMessage: string;
}

const CarouselCard = ({ title, description, items, icon, whatsappMessage }: CarouselCardProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-500/30 group border border-white/20 backdrop-blur-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-700 to-orange-900 p-6 border-b border-white/20">
        <div className="flex items-center justify-center mb-4">
          <div className="relative mr-4 group-hover:scale-110 transition-all duration-300">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur opacity-70 animate-pulse" />
            <div className="relative bg-gradient-to-r from-orange-600 to-orange-800 p-3 rounded-full border border-white/30">
              {icon}
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-white/90 font-medium text-center leading-relaxed">
          {description}
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative aspect-square w-full overflow-hidden">
        <div className="relative w-full h-full">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-orange-500/80 p-3 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-orange-500/80 p-3 rounded-full text-white transition-all duration-300 backdrop-blur-sm"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-orange-500 scale-110" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      </div>

      {/* CTA Button */}
      <div className="p-6 bg-gradient-to-r from-orange-800 to-orange-900 border-t border-white/20">
        <div className="relative">
          <div className="absolute -inset-2 bg-[#25D366] rounded-full blur opacity-75 animate-pulse" />
          <div className="absolute -inset-1 rounded-full border-2 border-[#25D366] animate-ping opacity-30" />
          
          <Button
            className="relative w-full text-lg font-bold bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] px-6 py-6 rounded-full border-2 border-white shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href={`https://wa.me/5519993261388?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3"
            >
              <div className="bg-white rounded-full p-2">
                <img src="/wpp.svg" alt="WhatsApp" className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-normal">Atendimento Imediato</span>
                <span className="text-base font-bold">FALE COM ESPECIALISTA</span>
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
      </div>
    </div>
  );
};

export default CarouselCard;
