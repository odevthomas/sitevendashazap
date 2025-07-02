
import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoCardProps {
  title: string;
  description: string;
  videoSrc: string;
  icon: React.ReactNode;
  whatsappMessage: string;
}

const VideoCard = ({ title, description, videoSrc, icon, whatsappMessage }: VideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

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

      {/* Video Section */}
      <div className="relative aspect-square w-full overflow-hidden">
        <video
          ref={videoRef}
          className="min-w-full min-h-full object-cover group-hover:scale-105 transition-transform duration-700"
          muted={isMuted}
          loop
          playsInline
          autoPlay
        >
          <source src={videoSrc} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>

        {/* Video Controls */}
        <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
          <button
            onClick={togglePlay}
            className="bg-black/60 hover:bg-orange-500/80 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="bg-black/60 hover:bg-orange-500/80 p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>
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

export default VideoCard;
