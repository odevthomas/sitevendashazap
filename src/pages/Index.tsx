// pages/index.tsx ou pages/index.jsx

import HeroSection from "@/components/HeroSection";
import VideoCard from "@/components/VideoCard";
import CarouselCard from "@/components/CarouselCard";
import ProductShowcase from "@/components/ProductShowcase";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Gamepad2, Cpu, Settings } from "lucide-react";

const Index = () => {
  const professionPCs = [
    { src: "/seupc/pc-designers.png", alt: "PC para Designers" },
    { src: "/seupc/pc-arquitetos.png", alt: "PC para Arquitetos" },
    { src: "/seupc/pc-programador.png", alt: "PC para Programador" },
    { src: "/seupc/pc-ia.png", alt: "PC para Inteligência Artificial" },
    { src: "/seupc/pc-engenheiros.png", alt: "PC para Engenheiros" },
    { src: "/seupc/pc-traders.png", alt: "PC para Traders" },
  ];

  return (
    <div className="min-h-screen bg-black ">
      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <section id="maquinas" className="bg-black py-20">
        <div className="container mx-auto px-4">
          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            {/* PC Gamer Card */}
            <VideoCard
              title="PC GAMER"
              description="Rodando tudo no ultra de Valorant, CS, LoL a GTA 6 com estabilidade, FPS alto e estilo."
              videoSrc="https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap/pcgamer.mp4"
              icon={<Gamepad2 className="w-8 h-8 text-white" />}
              whatsappMessage="Gostaria de um orçamento para um PC Gamer."
            />

            {/* PC Profissões Card */}
            <CarouselCard
              title="PC PROFISSÕES"
              description="Projetado para arquitetos, engenheiros e criativos que não podem perder tempo."
              items={professionPCs}
              icon={<Cpu className="w-8 h-8 text-white" />}
              whatsappMessage="Olá, gostaria de saber mais sobre os computadores voltados para uso profissional."
            />

            {/* PC Personalizado Card */}
            <VideoCard
              title="PC PERSONALIZADO"
              description="Montamos seu PC do zero com os melhores componentes desde Ryzen a Intel com placas de vídeo do seu gosto."
              videoSrc="https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap/pccustom.mp4"
              icon={
                <Settings
                  className="w-8 h-8 text-white animate-spin"
                  style={{ animationDuration: "3s" }}
                />
              }
              whatsappMessage="Olá, gostaria de montar uma máquina customizada e totalmente personalizada por mim."
            />
          </div>

          {/* Product Showcase + WhatsApp CTA */}
          <div className="max-w-7xl mx-auto">
            <ProductShowcase />
            <WhatsAppCTA />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
