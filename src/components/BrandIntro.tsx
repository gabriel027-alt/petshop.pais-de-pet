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

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    // Ao atingir exatamente 10 segundos, encerra e transiciona suavemente
    if (e.currentTarget.currentTime >= 10) {
      handleClose();
    }
  };

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

    // Timer de segurança de exatamente 10 segundos (10000ms)
    const timer = setTimeout(() => {
      handleClose();
    }, 10000);

    return () => clearTimeout(timer);
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
          className="fixed inset-0 z-[100] w-full h-[100dvh] min-h-[100dvh] bg-[#FAF8F5] sm:bg-white flex items-center justify-center overflow-hidden select-none touch-none"
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
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleClose}
              className="absolute inset-0 w-full h-full object-cover object-center bg-transparent z-20 transition-opacity duration-300"
            />

            {/* VINHETA SUTIL PARA CONTRASTE DA COPY NA PARTE INFERIOR (SEM ESCURECER O ROSTO DO CACHORRO) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-25 bg-gradient-to-t from-black/60 via-transparent to-black/25" />

            {/* BOTÃO DISCRETO 'PULAR INTRODUÇÃO' NO CANTO SUPERIOR DIREITO DO VÍDEO */}
            <motion.button
              type="button"
              onClick={handleClose}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-40 inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-[#2C1820]/80 hover:bg-[#2C1820] text-white border border-white/20 backdrop-blur-md text-xs font-sans font-medium tracking-wide transition-all shadow-lg active:scale-95 cursor-pointer touch-manipulation pointer-events-auto"
              aria-label="Pular Introdução"
            >
              <span>Pular Introdução</span>
              <span className="text-white/60 text-[10px]">✕</span>
            </motion.button>

            {/* COMPOSIÇÃO CENTRAL-INFERIOR: CACHORRO 100% LIVRE NO MEIO/TOPO, CONFINADO À LARGURA DO VÍDEO */}
            <div className="absolute inset-x-0 bottom-7 sm:bottom-10 pb-[env(safe-area-inset-bottom,0px)] z-30 flex flex-col items-center w-full max-w-[310px] sm:max-w-[360px] mx-auto px-4 text-center pointer-events-none space-y-2 sm:space-y-2.5">
              
              {/* 1. LOGOMARCA OFICIAL ELEGANTE E PROPORCIONAL (TAMANHO CONTROLADO RIGOROSAMENTE) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
                className="w-12 h-12 min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px] sm:w-14 sm:h-14 sm:min-w-[56px] sm:min-h-[56px] sm:max-w-[56px] sm:max-h-[56px] rounded-full overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.6)] border border-white/35 shrink-0"
                style={{ width: "48px", height: "48px" }}
              >
                <img
                  src="/foto-perfil-pais-de-pet.jpg"
                  alt="Pais de Pet"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>

              {/* 2. COPY PRINCIPAL (SURGE AOS 0.5S, LIMPA, SEM BORDAS E PERFEITAMENTE CONFINADA AO VÍDEO) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="space-y-1 w-full"
              >
                <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-tight leading-snug [text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_4px_28px_rgba(0,0,0,0.9)]">
                  Amor de pai e mãe com o cuidado de especialista
                </h1>
                <p className="text-[11px] sm:text-xs font-sans font-semibold text-white/90 uppercase tracking-widest [text-shadow:_0_2px_8px_rgba(0,0,0,0.95)]">
                  Dra. Natalia Possas • CRMV-MG 20572
                </p>
              </motion.div>

            </div>

            {/* BARRA MINIMALISTA DE PROGRESSO DE 10 SEGUNDOS NA BASE DA COLUNA */}
            <div className="absolute bottom-0 inset-x-0 pb-[env(safe-area-inset-bottom,0px)] z-30">
              <div className="h-[2px] w-full bg-white/20 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: isPlaying ? "100%" : "0%" }}
                  transition={{ duration: 10, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-[#FF2E93] to-[#84CC16]"
                />
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

