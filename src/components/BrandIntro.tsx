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
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] w-full h-[100dvh] min-h-[100dvh] bg-black flex items-center justify-center overflow-hidden select-none touch-none"
        >
          {/* VÍDEO INSTITUCIONAL DE ESTÚDIO EM TELA CHEIA */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
            <video
              ref={videoRef}
              src="/intro-paisdepet.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              disableRemotePlayback
              onPlay={() => setIsPlaying(true)}
              onPlaying={() => setIsPlaying(true)}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleClose}
              className="w-full h-full object-cover object-center bg-black transition-opacity duration-500"
            />
          </div>

          {/* VINHETA CINEMATOGRÁFICA MINIMALISTA (CONTRASTE PURO SEM CAIXAS ARTIFICIAIS) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/45 pointer-events-none" />

          {/* BOTÃO DISCRETO 'PULAR INTRODUÇÃO' NO CANTO SUPERIOR DIREITO */}
          <motion.button
            type="button"
            onClick={handleClose}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[max(1.25rem,env(safe-area-inset-top))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white border border-white/20 backdrop-blur-md text-xs font-sans font-medium tracking-wide transition-all shadow-lg active:scale-95 cursor-pointer touch-manipulation pointer-events-auto"
            aria-label="Pular Introdução"
          >
            <span>Pular Introdução</span>
            <span className="text-white/60">✕</span>
          </motion.button>

          {/* LOGOMARCA LIMPA/ISOLADA E HEADLINE PROFISSIONAL DE ALTO PADRÃO */}
          <div className="relative z-40 max-w-2xl mx-auto px-6 text-center pointer-events-none flex flex-col items-center justify-center space-y-5">
            
            {/* Logomarca oficial limpa, isolada e imponente (sem molduras ou caixas pesadas) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
            >
              <img
                src="/foto-perfil-pais-de-pet.jpg"
                alt="Pais de Pet"
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>

            {/* Headline moderna, limpa, sem serifa e com contraste cinematográfico */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                Amor de pai e mãe com o cuidado de especialista
              </h1>
              <p className="text-xs sm:text-sm font-sans font-medium text-white/90 uppercase tracking-widest drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                Dra. Natalia Possas • CRMV-MG 20572
              </p>
            </motion.div>

          </div>

          {/* BARRA MINIMALISTA DE PROGRESSO DE 10 SEGUNDOS (HAIRLINE DE ALTO LUXO) */}
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

