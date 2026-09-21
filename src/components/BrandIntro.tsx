"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface BrandIntroProps {
  onComplete?: () => void;
}

export default function BrandIntro({ onComplete }: BrandIntroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closedRef = useRef(false);

  useEffect(() => {
    try {
      const hasSeen = sessionStorage.getItem("paisdepet_intro_seen");
      if (!hasSeen) {
        setIsVisible(true);
      }
    } catch {
      // Caso sessionStorage esteja bloqueado por políticas de privacidade
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    if (closedRef.current) return;
    closedRef.current = true;
    setIsVisible(false);
    try {
      sessionStorage.setItem("paisdepet_intro_seen", "true");
    } catch {
      // Ignora restrições locais de armazenamento
    }
    if (onComplete) {
      onComplete();
    }
  };

  useEffect(() => {
    if (!isVisible) return;

    // Temporizador garantindo encerramento em exatamente 5 segundos (5000ms)
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [isVisible]);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    // Ao atingir 5 segundos exatos (currentTime >= 5), encerra e transiciona
    if (e.currentTarget.currentTime >= 5) {
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="brand-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#FAF8F5] flex items-center justify-center overflow-hidden select-none"
        >
          {/* VÍDEO DA INTRODUÇÃO DA MARCA (5 SEGUNDOS EXATOS) */}
          <video
            ref={videoRef}
            src="/intro-paisdepet.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleClose}
            className="w-full h-full object-cover sm:object-contain bg-[#FAF8F5]"
          />

          {/* BOTÃO MINIMALISTA DE PULAR INTRODUÇÃO */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 z-50 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2C1820]/60 hover:bg-[#2C1820]/85 text-[#FAF8F5] border border-white/20 backdrop-blur-md text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95"
            aria-label="Pular Introdução"
          >
            <span>Pular Introdução ✕</span>
          </button>

          {/* BARRA SUTIL DE PROGRESSO DOS 5 SEGUNDOS */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-[#2C1820]/10 z-40">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="h-full bg-gradient-to-r from-[#FF2E93] via-[#FF6B00] to-[#84CC16]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
