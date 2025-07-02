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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Products Section */}
      <section id="maquinas" className="bg-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">
            {/* PC Gamer Card */}
            <VideoCard
              title="COMPUTADOR GAMER"
              description="Jogue Call of Duty, Valorant, CS, LoL e até GTA 6 com alto desempenho, máxima estabilidade, FPS elevado e visual de respeito."
              videoSrc="https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap/pcgamer.mp4"
              icon={<Gamepad2 className="w-8 h-8 text-white" />}
              whatsappMessage="Gostaria de um orçamento para um PC Gamer."
            />

            {/* PC Profissões Card */}
            <CarouselCard
              title="COMPUTADORES PROFISSÕES"
              description="Máquinas desenvolvidas para engenheiros, arquitetos, designers gráficos e outros profissionais que exigem performance, agilidade e confiabilidade no dia a dia."
              items={professionPCs}
              icon={<Cpu className="w-8 h-8 text-white" />}
              whatsappMessage="Olá, gostaria de saber mais sobre os computadores voltados para uso profissional."
            />

            {/* PC Personalizado Card */}
            <VideoCard
              title="COMPUTADORES PERSONALIZADOS"
              description="Montamos seu PC sob medida, com processadores Ryzen ou Intel e placas de vídeo high-end, escolhidas de acordo com sua necessidade e estilo de uso."
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

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-6 mt-10">
        <div className="container mx-auto text-center text-sm text-white/60">
          © {new Date().getFullYear()} Hazap. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
};

export default Index;
