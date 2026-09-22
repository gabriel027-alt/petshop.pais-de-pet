"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface BrandIntroProps {
  onComplete?: () => void;
}

export default function BrandIntro({ onComplete }: BrandIntroProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState<"video" | "logo">("video");
  const videoRef = useRef<HTMLVideoElement>(null);
  const closedRef = useRef(false);
  const logoTriggeredRef = useRef(false);

  const handleClose = useCallback(() => {
    if (closedRef.current) return;
    closedRef.current = true;
    setIsVisible(false);
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  // Transição do vídeo para a logo no centro (Fade-out do vídeo -> Fade-in da Logo)
  const triggerLogoPhase = useCallback(() => {
    if (logoTriggeredRef.current || closedRef.current) return;
    logoTriggeredRef.current = true;
    setPhase("logo");

    // A logo permanece visível por um breve momento antes da transição total para a Intro 2
    setTimeout(() => {
      handleClose();
    }, 1800);
  }, [handleClose]);

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

      // Transição de 10s: quando o vídeo atinge o final do ciclo (~8.5s) ou dispara 'ended'
      const handleTimeUpdate = () => {
        if (video.duration && video.currentTime >= Math.max(8.4, video.duration - 1.5)) {
          triggerLogoPhase();
        }
      };

      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("ended", triggerLogoPhase);

      // Fallback timer de segurança para garantir a transição mesmo se timeupdate for throttled
      const fallbackTimer = setTimeout(() => {
        triggerLogoPhase();
      }, 9800);

      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("ended", triggerLogoPhase);
        clearTimeout(fallbackTimer);
      };
    }
  }, [triggerLogoPhase]);

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
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] w-full h-[100dvh] min-h-[100dvh] bg-[#FAF8F5] flex items-center justify-center overflow-hidden select-none"
        >
          {/* BOTÃO DISCRETO 'PULAR' NO CANTO SUPERIOR DIREITO */}
          <motion.button
            type="button"
            onClick={handleClose}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="absolute top-[max(1rem,env(safe-area-inset-top))] right-[max(1rem,env(safe-area-inset-right))] z-40 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white/90 border border-white/20 backdrop-blur-md text-[11px] font-mono tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer touch-manipulation pointer-events-auto"
            aria-label="Pular Introdução"
          >
            <span>Pular</span>
            <span className="text-white/60 text-[10px]">✕</span>
          </motion.button>

          {/* FASE 1: PALCO DO VÍDEO (EXECUTA UMA VEZ E FAZ FADE-OUT SUAVE PARA O FUNDO #FAF8F5) */}
          <motion.div
            animate={{ opacity: phase === "video" ? 1 : 0 }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            className="relative w-full h-full sm:w-auto sm:h-full sm:aspect-[9/16] sm:max-w-[calc(100dvh*9/16)] flex items-center justify-center overflow-hidden"
          >
            {/* CONTAINER DO VÍDEO COM MÁSCARA DE GRADIENTE SUAVE NAS LATERAIS NO PC */}
            <div className="absolute inset-0 w-full h-full sm:[mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] sm:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
              {/* Frame 0 instantâneo para eliminar tela cinza/branca */}
              <img
                src="/intro-poster.jpg"
                alt="Pais de Pet"
                fetchPriority="high"
                decoding="sync"
                className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-300 z-10 ${
                  isPlaying ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Vídeo 'intro-paisdepet.mp4' (Executa uma única vez, SEM loop infinito) */}
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
                className="absolute inset-0 w-full h-full object-cover object-center bg-transparent z-20"
              />
            </div>

            {/* TRANSIÇÃO SUAVE DE GRADIENTE NAS LATERAIS NO DESKTOP */}
            <div className="hidden sm:block absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/60 to-transparent pointer-events-none z-25" />
            <div className="hidden sm:block absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/60 to-transparent pointer-events-none z-25" />

            {/* Vinheta sutil na parte inferior para contraste e legibilidade */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none z-25 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

            {/* HEADLINE E ASSINATURA DA INTRO 1 */}
            <div className="absolute inset-x-0 bottom-6 sm:bottom-10 pb-[env(safe-area-inset-bottom,0px)] z-30 flex flex-col items-center w-full max-w-[340px] sm:max-w-[380px] mx-auto px-4 text-center pointer-events-none space-y-1.5">
              <motion.div
                initial={{ opacity: 0, y: 14, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                className="space-y-1 w-full"
              >
                <h1 className="text-[20px] xs:text-[22px] sm:text-2xl font-black text-white tracking-tight leading-[1.2] [text-shadow:_0_2px_14px_rgba(0,0,0,0.95),_0_4px_30px_rgba(0,0,0,0.85)]">
                  Amor de pai e mãe com o cuidado de especialista
                </h1>
                <p className="text-[11px] sm:text-xs font-mono font-bold text-white/90 uppercase tracking-widest [text-shadow:_0_1px_8px_rgba(0,0,0,0.95)]">
                  DRA. NATALIA POSSAS • CRMV-MG 20572
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* FASE 2: APARECIMENTO ELEGANTE DA LOGO NO CENTRO DA TELA DURANTE O FADE-OUT PARA O FUNDO */}
          <AnimatePresence>
            {phase === "logo" && (
              <motion.div
                key="intro-center-logo"
                initial={{ opacity: 0, scale: 0.88, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.04, filter: "blur(4px)" }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none px-4 text-center"
              >
                <div className="relative">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full p-[3.5px] bg-gradient-to-tr from-[#FF2E93] via-[#FF6B00] to-[#84CC16] shadow-2xl shadow-[#FF2E93]/25 bg-white flex items-center justify-center">
                    <img
                      src="/foto-perfil-pais-de-pet.jpg"
                      alt="Pais de Pet"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-[#FF2E93]/20 blur-2xl -z-10 scale-125 animate-pulse" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-5 space-y-1"
                >
                  <h2 className="text-2xl sm:text-3xl font-black text-[#2C1820] tracking-tight">
                    Pais de Pet
                  </h2>
                  <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
                    Dra. Natalia Possas • CRMV-MG 20572
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
