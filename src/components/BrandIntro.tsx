"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface BrandIntroProps {
  onComplete?: () => void;
}

export default function BrandIntro({ onComplete }: BrandIntroProps) {
  // Inicia como true para garantir renderização imediata desde o primeiro frame do HTML
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closedRef = useRef(false);

  const handleClose = useCallback(() => {
    if (closedRef.current) return;
    closedRef.current = true;
    setIsVisible(false);
    try {
      sessionStorage.setItem("paisdepet_intro_seen", "true");
      document.documentElement.classList.add("intro-seen");
    } catch {
      // Ignora restrições locais de armazenamento
    }
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    // Ao atingir exatamente 8 segundos (currentTime >= 8), encerra e transiciona suavemente
    if (e.currentTarget.currentTime >= 8) {
      handleClose();
    }
  };

  useEffect(() => {
    // Se o visitante já visualizou a intro nesta sessão, remove imediatamente
    try {
      const hasSeen = sessionStorage.getItem("paisdepet_intro_seen");
      if (hasSeen === "true") {
        setIsVisible(false);
        return;
      }
    } catch {
      // Ignora restrições locais de armazenamento
    }

    // Configuração imperativa rigorosa de autoplay para WebKit (iOS Safari) e Blink (Chrome Mobile)
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
        const promise = video.play();
        if (promise !== undefined) {
          promise
            .then(() => {
              setIsPlaying(true);
            })
            .catch(() => {
              // Se o navegador móvel restringir reprodução automática sem interação física,
              // qualquer primeiro toque sutil na tela destrava o vídeo imediatamente
              const unlockOnTouch = () => {
                video.play().then(() => setIsPlaying(true)).catch(() => {});
              };
              window.addEventListener("touchstart", unlockOnTouch, { once: true, passive: true });
              window.addEventListener("pointerdown", unlockOnTouch, { once: true, passive: true });
              window.addEventListener("click", unlockOnTouch, { once: true, passive: true });
            });
        }
      };

      // Dispara imediatamente e se conecta aos ciclos de prontidão da mídia
      triggerPlayback();
      video.addEventListener("loadedmetadata", triggerPlayback, { once: true });
      video.addEventListener("canplay", triggerPlayback, { once: true });
      video.addEventListener("loadeddata", triggerPlayback, { once: true });
    }

    // Temporizador garantindo encerramento e transição em exatamente 8 segundos (8000ms)
    const timer = setTimeout(() => {
      handleClose();
    }, 8000);

    return () => clearTimeout(timer);
  }, [handleClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="brand-intro-overlay"
          key="brand-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] w-full h-[100dvh] min-h-[100dvh] bg-[#FAF8F5] flex items-center justify-center overflow-hidden select-none touch-none"
        >
          {/* CONTAINER RESPONSIVO VERTICAL (CENTRALIZAÇÃO PERFEITA NO SMARTPHONE) */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
            {/* Imagem de poster estática para renderização instantânea (elimina qualquer tela branca/piscar) */}
            <img
              src="/intro-poster.jpg"
              alt="Pais de Pet Apresentação"
              fetchPriority="high"
              decoding="sync"
              className="absolute inset-0 w-full h-full object-cover object-center sm:object-contain pointer-events-none"
            />

            {/* Vídeo da introdução do cão (8 segundos de reprodução fluida) */}
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
              className="absolute inset-0 w-full h-full object-cover object-center sm:object-contain bg-transparent transition-opacity duration-300"
            />
          </div>

          {/* 1. LOGOMARCA OFICIAL CENTRALIZADA E IMPONENTE NO TOPO (COM ANIMAÇÃO SUAVE DE ZOOM/FADE-IN) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: -25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute top-[max(1.25rem,env(safe-area-inset-top))] inset-x-0 flex justify-center z-50 pointer-events-none px-4"
          >
            <div className="inline-flex items-center gap-3 sm:gap-3.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/94 backdrop-blur-xl border border-white/85 shadow-[0_12px_40px_rgba(44,24,32,0.16)] max-w-[85vw] sm:max-w-none">
              <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-[#FF2E93] via-[#FF6B00] to-[#84CC16] shadow-sm shrink-0">
                <img
                  src="/foto-perfil-pais-de-pet.jpg"
                  alt="Pais de Pet"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div className="flex flex-col text-left truncate">
                <div className="flex items-center gap-1.5 truncate">
                  <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse shrink-0" />
                  <span className="font-black text-sm sm:text-base text-[#2C1820] tracking-tight uppercase leading-none truncate">
                    Pais de Pet
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#FF6B00] uppercase tracking-wider block mt-0.5 truncate">
                  Clínica Veterinária & Pet Shop
                </span>
              </div>
            </div>
          </motion.div>

          {/* BOTÃO MINIMALISTA DE PULAR INTRODUÇÃO (CANTO SUPERIOR DIREITO) */}
          <motion.button
            type="button"
            onClick={handleClose}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[max(1.25rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-50 inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#2C1820]/75 hover:bg-[#2C1820]/90 text-white/95 border border-white/20 backdrop-blur-md text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 cursor-pointer touch-manipulation pointer-events-auto"
            aria-label="Pular Introdução"
          >
            <span>Pular ✕</span>
          </motion.button>

          {/* 2. BANNER FOSCO/TRANSLÚCIDO COM A COPY PRINCIPAL NA PARTE INFERIOR CENTRAL */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.65, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-6 sm:bottom-10 inset-x-3 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-50 pointer-events-none max-w-lg w-full px-2"
          >
            <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-[#2C1820]/85 sm:bg-[#2C1820]/80 backdrop-blur-xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.35)] text-center space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#84CC16]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-pulse" />
                <span>Dra. Natalia Possas • CRMV-MG 20572</span>
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-black text-white tracking-tight leading-snug">
                “Amor de pai e mãe com o cuidado de especialista”
              </h2>
              <p className="text-xs text-white/80 font-normal">
                Consultório veterinário com acolhimento sensorial e carinho em BH
              </p>
            </div>
          </motion.div>

          {/* BARRA SUTIL DE PROGRESSO DOS 8 SEGUNDOS */}
          <div className="absolute bottom-0 inset-x-0 pb-[env(safe-area-inset-bottom,0px)] bg-[#2C1820]/10 z-40">
            <div className="h-1 sm:h-1.5 w-full bg-[#2C1820]/15 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: isPlaying ? "100%" : "0%" }}
                transition={{ duration: 8, ease: "linear" }}
                className="h-full bg-gradient-to-r from-[#FF2E93] via-[#FF6B00] to-[#84CC16]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

