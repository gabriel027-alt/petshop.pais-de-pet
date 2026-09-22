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

          {/* VINHETA SUTIL APENAS NO TOPO E NA BASE (MEIO DA TELA 100% LÍMPIDO PARA O CÃO) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/55 pointer-events-none" />

          {/* 1. LOGOMARCA LIMPA E MENOR NO CANTO SUPERIOR ESQUERDO (SEM OBSTRUIR O CÃO) */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="absolute top-[max(1.25rem,env(safe-area-inset-top))] left-[max(1.25rem,env(safe-area-inset-left))] z-50 pointer-events-auto"
          >
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/50 backdrop-blur-md border border-white/20 shadow-lg text-white transition-all">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden shadow-xs shrink-0">
                <img
                  src="/foto-perfil-pais-de-pet.jpg"
                  alt="Pais de Pet"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="text-xs sm:text-sm font-black tracking-tight font-sans">
                Pais de Pet
              </span>
            </div>
          </motion.div>

          {/* 2. BOTÃO DISCRETO 'PULAR INTRODUÇÃO' NO CANTO SUPERIOR DIREITO */}
          <motion.button
            type="button"
            onClick={handleClose}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="absolute top-[max(1.25rem,env(safe-area-inset-top))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white border border-white/20 backdrop-blur-md text-xs font-sans font-medium tracking-wide transition-all shadow-lg active:scale-95 cursor-pointer touch-manipulation pointer-events-auto"
            aria-label="Pular Introdução"
          >
            <span>Pular Introdução</span>
            <span className="text-white/60">✕</span>
          </motion.button>

          {/* ÁREA CENTRAL: 100% LIVRE DE OBSTRUÇÃO PARA O ROSTO E CORPO DO GOLDEN RETRIEVER */}

          {/* 3. HEADLINE REPOSICIONADA ESTRITAMENTE NO RODAPÉ EM CARD FOSCO MINIMALISTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute bottom-5 sm:bottom-7 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-50 pointer-events-none max-w-lg w-full px-2"
          >
            <div className="p-3.5 sm:p-4 rounded-2xl bg-black/45 sm:bg-black/40 backdrop-blur-xl border border-white/15 text-center shadow-[0_15px_35px_rgba(0,0,0,0.4)] space-y-1">
              <h2 className="text-sm sm:text-base md:text-lg font-extrabold text-white tracking-tight leading-snug">
                “Amor de pai e mãe com o cuidado de especialista”
              </h2>
              <p className="text-[10px] sm:text-xs font-sans font-semibold text-white/80 uppercase tracking-widest">
                Dra. Natalia Possas • CRMV-MG 20572
              </p>
            </div>
          </motion.div>

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

