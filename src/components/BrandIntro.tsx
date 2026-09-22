"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface BrandIntroProps {
  onComplete?: () => void;
}

export default function BrandIntro({ onComplete }: BrandIntroProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closedRef = useRef(false);

  const handleClose = useCallback(() => {
    if (closedRef.current) return;
    closedRef.current = true;
    setIsVisible(false);
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  useEffect(() => {
    // Autoplay forçado com atributos imperativos no DOM para compatibilidade total com iOS e Android
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.setAttribute("autoplay", "");

      const triggerPlayback = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // Fallback para destravar no primeiro toque caso o SO imponha restrição de bateria
              const unlockOnTouch = () => {
                video.play().then(() => setIsPlaying(true)).catch(() => {});
              };
              window.addEventListener("touchstart", unlockOnTouch, { once: true, passive: true });
              window.addEventListener("pointerdown", unlockOnTouch, { once: true, passive: true });
              window.addEventListener("click", unlockOnTouch, { once: true, passive: true });
            });
        }
      };

      triggerPlayback();
      video.addEventListener("loadedmetadata", triggerPlayback, { once: true });
      video.addEventListener("canplay", triggerPlayback, { once: true });
      video.addEventListener("loadeddata", triggerPlayback, { once: true });
    }
  }, []);

  // Transição natural ao rolar ou deslizar para cima
  useEffect(() => {
    let startY = 0;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 20) {
        handleClose();
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        startY = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (e.changedTouches && e.changedTouches.length > 0) {
        const diffY = startY - e.changedTouches[0].clientY;
        if (diffY > 40) {
          handleClose();
        }
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 20) {
        handleClose();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="brand-intro-overlay"
          key="brand-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] w-full h-[100dvh] min-h-[100dvh] bg-[#FAF8F5] sm:bg-white flex items-center justify-center overflow-hidden select-none"
        >
          {/* COLUNA CENTRAL DO VÍDEO: 100% EM TELA CHEIA NO MOBILE / PROPORÇÃO 9:16 COM LATERAIS BRANCAS NO PC */}
          <div className="relative w-full h-full sm:w-auto sm:h-full sm:aspect-[9/16] sm:max-w-[calc(100dvh*9/16)] flex items-center justify-center overflow-hidden sm:shadow-[0_25px_60px_-15px_rgba(44,24,32,0.18)]">
            
            {/* Frame 0 instantâneo para eliminar tela cinza/branca (fade-out assim que o vídeo começa) */}
            <img
              src="/intro-poster.jpg"
              alt="Pais de Pet"
              fetchPriority="high"
              decoding="sync"
              className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-300 z-10 ${
                isPlaying ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Vídeo institucional 720x1280 (9:16): contínuo, sem congelamentos e 100% fluido */}
            <video
              ref={videoRef}
              src="/intro-paisdepet.mp4"
              poster="/intro-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disableRemotePlayback
              onPlay={() => setIsPlaying(true)}
              onPlaying={() => setIsPlaying(true)}
              className="absolute inset-0 w-full h-full object-cover object-center bg-transparent z-20 transition-opacity duration-300"
            />

            {/* VINHETA SUTIL PARA CONTRASTE DA COPY NA PARTE INFERIOR (SEM ESCURECER O ROSTO DO CACHORRO) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-25 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />

            {/* BOTÃO DISCRETO 'PULAR INTRODUÇÃO' NO CANTO SUPERIOR DIREITO DO VÍDEO */}
            <motion.button
              type="button"
              onClick={handleClose}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-40 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2C1820]/75 hover:bg-[#2C1820] text-white border border-white/20 backdrop-blur-md text-xs font-sans font-medium tracking-wide transition-all shadow-lg active:scale-95 cursor-pointer touch-manipulation pointer-events-auto"
              aria-label="Pular Introdução"
            >
              <span>Pular Introdução</span>
              <span className="text-white/60 text-[10px]">✕</span>
            </motion.button>

            {/* COMPOSIÇÃO CENTRAL-INFERIOR: CACHORRO 100% LIVRE NO MEIO/TOPO, CONFINADO À LARGURA DO VÍDEO */}
            <div className="absolute inset-x-0 bottom-5 sm:bottom-8 pb-[env(safe-area-inset-bottom,0px)] z-30 flex flex-col items-center w-full max-w-[340px] sm:max-w-[370px] mx-auto px-4 text-center space-y-2.5 sm:space-y-3 pointer-events-auto">
              
              {/* 1. LOGOMARCA OFICIAL ELEGANTE E PROPORCIONAL NO MOBILE COM FADE-IN SUAVE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: -6, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="w-[72px] h-[72px] min-w-[72px] min-h-[72px] max-w-[72px] max-h-[72px] sm:w-14 sm:h-14 sm:min-w-[56px] sm:min-h-[56px] sm:max-w-[56px] sm:max-h-[56px] rounded-full overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.65)] border-2 border-white/50 shrink-0 mb-1"
              >
                <img
                  src="/foto-perfil-pais-de-pet.jpg"
                  alt="Pais de Pet"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              {/* 2. COPY PRINCIPAL (TYPE REVEAL ELEGANTE, MAIOR NO MOBILE, SEM BORDAS E COM ALTA LEGIBILIDADE) */}
              <motion.div
                initial={{ opacity: 0, y: 12, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="space-y-1 w-full"
              >
                <h1 className="text-[20px] leading-[1.25] sm:text-xl sm:leading-snug md:text-2xl font-extrabold text-white tracking-tight [text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_4px_28px_rgba(0,0,0,0.9)]">
                  Amor de pai e mãe com o cuidado de especialista
                </h1>
                <p className="text-xs sm:text-xs font-mono font-bold text-white/90 uppercase tracking-widest [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]">
                  Dra. Natalia Possas • CRMV-MG 20572
                </p>
              </motion.div>

              {/* 3. BOTÃO DE WHATSAPP DE ALTA CONVERSÃO INTEGRADO NA BASE DO VÍDEO */}
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
                className="w-full pt-1 flex flex-col items-center"
              >
                <a
                  href="https://wa.me/5531994685116?text=Ol%C3%A1%2C%20Dra.%20Natalia!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20e%20agendar%20uma%20consulta%20para%20o%20meu%20pet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-[280px] sm:max-w-[300px] inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#FF2E93] via-[#FF3B9B] to-[#FF2E93] text-white font-black text-xs sm:text-[13px] uppercase tracking-wider shadow-[0_10px_30px_rgba(255,46,147,0.5)] hover:shadow-[0_14px_40px_rgba(255,46,147,0.7)] hover:scale-[1.03] active:scale-95 transition-all text-center border border-white/35 backdrop-blur-md cursor-pointer pointer-events-auto touch-manipulation group"
                  aria-label="Conversar com a Dra. Natalia no WhatsApp"
                >
                  <div className="w-5 h-5 rounded-full overflow-hidden p-[1px] bg-white shrink-0 shadow-2xs">
                    <img src="/foto-perfil-pais-de-pet.jpg" alt="WhatsApp" className="w-full h-full object-cover rounded-full" />
                  </div>
                  <span>Conversar com a Dra. Natália</span>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                    <path d="M4 12L12 4M12 4H6M12 4V10" />
                  </svg>
                </a>

                {/* Gatilho para conhecer o restante do site */}
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center gap-1 text-[11px] font-sans font-medium text-white/70 hover:text-white transition-colors cursor-pointer pt-2"
                >
                  <span>Conhecer a Clínica</span>
                  <span className="text-[10px]">↓</span>
                </button>
              </motion.div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

