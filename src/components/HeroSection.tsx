import { useState, useEffect } from "react";
import { Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById("background-video") as HTMLVideoElement | null;
    if (video) {
      video.muted = isMuted;
    }
  }, [isMuted]);

  const scrollToMachines = () => {
    const el = document.getElementById("maquinas");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Vídeo de fundo */}
      <div className="absolute inset-0 w-full h-full z-0">
        {!videoLoaded && (
          <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="animate-pulse w-24 h-24 bg-white/10 rounded-full" />
          </div>
        )}

        <video
          id="background-video"
          autoPlay
          loop
          muted
          playsInline
          className={`object-cover w-full h-full transition-opacity duration-1000 ${videoLoaded ? "opacity-100" : "opacity-0"}`}
          onCanPlayThrough={() => setVideoLoaded(true)}
        >
          <source src="https://iyqujwbqfomznelsvebl.supabase.co/storage/v1/object/public/videos-hazap/hero-horizontal-videos.mp4" type="video/mp4" />
        </video>

        {/* Gradientes sobrepostos */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />
      </div>

      {/* Botão flutuante + Mascote */}
      <div className="fixed bottom-5 right-15 sm:bottom-10 sm:right-10 z-20 flex items-end gap-4">
        {/* Mascote alinhado */}
        <div className="hidden sm:block w-24 sm:w-32 md:w-36 lg:w-40">
          <img src="/imgs/mascote.png" alt="Mascote Hazap" className="drop-shadow-2xl w-full" />
        </div>

        {/* Botão principal */}
        <button
          onClick={scrollToMachines}
          className="relative flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 px-4 py-4 rounded-xl border-2 border-orange-400 shadow-2xl transition-all duration-300 hover:scale-105 group min-w-[220px] sm:min-w-[240px]"
        >
          <Laptop className="w-6 h-6 text-white mr-3 animate-pulse" />
          <div className="text-left">
            <h3 className="text-base font-bold text-white">Veja nossas máquinas!</h3>
            <p className="text-xs text-white/80">Confira os modelos disponíveis</p>
          </div>
          <div className="absolute -top-1 -right-1 bg-yellow-400 text-black font-bold px-2 py-1 rounded-full text-[10px] animate-bounce">
            NOVO
          </div>
        </button>
      </div>

      {/* Conteúdo central */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl w-full">
          {/* Logo central */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-12">
            <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-lg animate-pulse" />
            <img
              src="/imgs/logo.png"
              alt="Hazap Logo"
              className="w-full h-full object-contain drop-shadow-2xl transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Título */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12 leading-tight drop-shadow-lg">
            Melhor loja de computadores do Interior de São Paulo
          </h1>

          {/* Botão WhatsApp */}
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-3 bg-[#25D366] rounded-full blur opacity-75 animate-pulse" />
            <div className="absolute -inset-3 rounded-full border-4 border-[#25D366] animate-ping opacity-30" />
            <div className="absolute -inset-6 rounded-full border-4 border-[#25D366] animate-ping opacity-20" style={{ animationDelay: "300ms" }} />
            <div className="absolute -inset-9 rounded-full border-4 border-[#25D366] animate-ping opacity-10" style={{ animationDelay: "600ms" }} />

            <Button
              size="lg"
              className="relative w-full text-lg font-bold bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] 
                px-4 py-4 sm:px-8 sm:py-8 rounded-full border-2 border-white shadow-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a
                href="https://wa.me/5519993261388?text=Olá%2C%20tudo%20bem%3F%20Vim%20através%20do%20site%20e%20gostaria%20de%20solicitar%20um%20orçamento%20personalizado."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <div className="bg-white rounded-full p-2">
                  <img src="/wpp.svg" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs sm:text-sm font-normal">Atendimento Imediato</span>
                  <span className="text-base sm:text-lg font-bold">FALE COM ESPECIALISTA</span>
                </div>

                <span className="absolute -right-2 -top-2 flex h-6 w-6">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-6 w-6 bg-white text-[#25D366] items-center justify-center text-xs font-bold">
                    1
                  </span>
                </span>
              </a>
            </Button>

            {/* Status online */}
           <div className="absolute -bottom-8 left-0 right-0 text-center">
  <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium shadow-md">
    <span className="text-green-600 font-bold text-lg">✓</span>
 
    <span>3 especialistas online agora</span>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
