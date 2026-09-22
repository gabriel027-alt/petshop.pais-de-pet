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
          className="fixed inset-0 z-[100] w-full h-[100dvh] min-h-[100dvh] bg-[#FAF8F5] flex items-center justify-center overflow-hidden select-none touch-none"
        >
          {/* CONTAINER DO VÍDEO COM POSTER SÍNCRONO (ELIMINA QUALQUER TELA BRANCA/CINZA) */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black">
            {/* Frame 0 instantâneo para renderização visual imediata a 0ms */}
            <img
              src="/intro-poster.jpg"
              alt="Pais de Pet"
              fetchPriority="high"
              decoding="sync"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />

            {/* Vídeo institucional otimizado (1.64 MB com +faststart) */}
            <video
              ref={videoRef}
              src="/intro-paisdepet.mp4"
              poster="/intro-poster.jpg"
              autoPlay
              muted
              playsInline
              preload="auto"
              disableRemotePlayback
              onPlay={() => setIsPlaying(true)}
              onPlaying={() => setIsPlaying(true)}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleClose}
              className="absolute inset-0 w-full h-full object-cover object-center bg-transparent transition-opacity duration-300"
            />
          </div>

          {/* VINHETA CINEMATOGRÁFICA SUAVE (CONTRASTE NATURAL SEM ESCURECER EXCESSIVAMENTE) */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/35 pointer-events-none" />

          {/* BOTÃO DISCRETO 'PULAR INTRODUÇÃO' NO CANTO SUPERIOR DIREITO */}
          <motion.button
            type="button"
            onClick={handleClose}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute top-[max(1.25rem,env(safe-area-inset-top))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white border border-white/20 backdrop-blur-md text-xs font-sans font-medium tracking-wide transition-all shadow-lg active:scale-95 cursor-pointer touch-manipulation pointer-events-auto"
            aria-label="Pular Introdução"
          >
            <span>Pular Introdução</span>
            <span className="text-white/60">✕</span>
          </motion.button>

          {/* COMPOSIÇÃO CENTRALIZADA HARMONIOSA: COPY SURGE PRIMEIRO E LOGO APARECE SEGUNDOS DEPOIS */}
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center max-w-2xl mx-auto px-6 text-center pointer-events-none space-y-4 sm:space-y-6">
            
            {/* 1. LOGOMARCA OFICIAL (SURGE SUAVEMENTE EM FADE-IN SEGUNDOS APÓS A COPY, LOGO ACIMA DELA) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 2.2 }}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.7)] border border-white/25 shrink-0"
            >
              <img
                src="/foto-perfil-pais-de-pet.jpg"
                alt="Pais de Pet"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            {/* 2. COPY PRINCIPAL (SURGE PRIMEIRO, PERFEITAMENTE CENTRALIZADA, SEM BORDAS E SEM CAIXAS) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="space-y-2 max-w-xl sm:max-w-2xl"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight [text-shadow:_0_2px_15px_rgba(0,0,0,0.9),_0_4px_35px_rgba(0,0,0,0.85)]">
                Amor de pai e mãe com o cuidado de especialista
              </h1>
              <p className="text-xs sm:text-sm font-sans font-semibold text-white/90 uppercase tracking-widest [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)] mt-1.5">
                Dra. Natalia Possas • CRMV-MG 20572
              </p>
            </motion.div>

          </div>

          {/* BARRA MINIMALISTA DE PROGRESSO DE 10 SEGUNDOS NA BASE DA TELA */}
          <div className="absolute bottom-0 inset-x-0 pb-[env(safe-area-inset-bottom,0px)] z-40">
            <div className="h-[2px] w-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "100%" : "0%" }}
                transition={{ duration: 10, ease: "linear" }}
                className="h-full bg-white/75"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

