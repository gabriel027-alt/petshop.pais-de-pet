"use client";

import React, { useState, useEffect, useRef } from "react";
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

    // Dispara reprodução ativa com fallback para mobile (evita pausa/tela estática)
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Em navegadores móveis com restrição de economia de bateria,
            // o poster estático mantém o cachorro perfeitamente visível
            setIsPlaying(true);
          });
      }
    }

    // Temporizador garantindo encerramento e transição em exatamente 8 segundos (8000ms)
    const timer = setTimeout(() => {
      handleClose();
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
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
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    // Ao atingir exatamente 8 segundos (currentTime >= 8), encerra e transiciona suavemente
    if (e.currentTarget.currentTime >= 8) {
      handleClose();
    }
  };

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
              onPlay={() => setIsPlaying(true)}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleClose}
              className="absolute inset-0 w-full h-full object-cover object-center sm:object-contain bg-transparent transition-opacity duration-300"
            />
          </div>

          {/* 1. LOGOMARCA OFICIAL DA CLÍNICA NO TOPO ESQUERDO (COM SURGIMENTO SUAVE E RESPEITANDO SAFE-AREA) */}
          <motion.div
            initial={{ opacity: 0, y: -18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[max(1.25rem,env(safe-area-inset-top))] left-[max(1.25rem,env(safe-area-inset-left))] z-50 inline-flex items-center gap-2.5 sm:gap-3 p-1.5 pr-3.5 sm:pr-4 rounded-full bg-white/90 backdrop-blur-md border border-white/80 shadow-lg pointer-events-none"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-[#84CC16]/70 shadow-xs shrink-0">
              <img
                src="/foto-perfil-pais-de-pet.jpg"
                alt="Pais de Pet"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-mono font-bold text-[#2C1820] uppercase tracking-wider leading-none">
                  Pais de Pet
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-sans font-semibold text-[#FF2E93] uppercase tracking-wider leading-tight mt-0.5">
                Clínica & Pet Shop
              </span>
            </div>
          </motion.div>

          {/* BOTÃO MINIMALISTA DE PULAR INTRODUÇÃO (TOUCH OTIMIZADO E SAFE-AREA) */}
          <motion.button
            type="button"
            onClick={handleClose}
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[max(1.25rem,env(safe-area-inset-top))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#2C1820]/80 hover:bg-[#2C1820]/95 text-[#FAF8F5] border border-white/30 backdrop-blur-md text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-xl active:scale-95 cursor-pointer touch-manipulation pointer-events-auto"
            aria-label="Pular Introdução"
          >
            <span>Pular Introdução ✕</span>
          </motion.button>

          {/* 2. COPY OFICIAL ANIMADA COM A FRASE DA MARCA (SURGIMENTO FLUIDO SEM OBSTRUIR O CÃO) */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 sm:bottom-10 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-50 pointer-events-none flex justify-center"
          >
            <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#2C1820]/80 backdrop-blur-md border border-white/20 shadow-2xl text-center max-w-lg">
              <svg viewBox="0 0 24 24" fill="#FF2E93" className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 animate-pulse" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <p className="text-xs sm:text-sm md:text-base font-sans font-medium text-[#FAF8F5] tracking-normal leading-tight">
                “Amor de pai e mãe com o cuidado de especialista”
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

