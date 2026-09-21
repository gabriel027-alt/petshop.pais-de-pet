"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MessageCircle, MapPin, Play, Pause, Volume2, VolumeX, ArrowUpRight, Sparkles } from "lucide-react";
import { ThreePetCanvas } from "./ThreePetCanvas";

export function HeroSection() {
  const whatsappUrl = "https://wa.link/2ooc5p";
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
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] overflow-hidden">
      {/* Luzes Difusas de Fundo com as 3 Cores Oficiais da Marca (Zero Frieza) */}
      <div className="absolute top-12 left-[-6%] w-[600px] h-[600px] rounded-full bg-[#84CC16]/15 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/4 right-[-6%] w-[650px] h-[650px] rounded-full bg-[#FF2E93]/15 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] rounded-full bg-[#FF6B00]/12 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-12 sm:space-y-16">
        
        {/* MASTHEAD EDITORIAL QUENTE (METADADOS TÉCNICOS) */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#FF2E93]/15 pb-4 text-[11px] font-mono tracking-widest text-[#2C1820]/70 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
            <span className="font-bold text-[#2C1820]">Pais de Pet • Sagrada Família, Belo Horizonte</span>
          </div>
          <div className="flex items-center gap-4 text-[#2C1820]/60">
            <span>Rua Silvestre Ferraz, 27</span>
            <span>•</span>
            <span className="font-bold text-[#FF2E93]">Dra. Natalia Possas CRMV-MG 20572</span>
          </div>
        </div>

        {/* COMPOSIÇÃO EDITORIAL ASSIMÉTRICA: TEXTO À ESQUERDA & MÍDIA CINEMA À DIREITA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Tipografia Editorial Dinâmica */}
          <div className="lg:col-span-7 space-y-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border-2 border-[#84CC16]/50 text-xs font-mono font-bold uppercase tracking-widest text-[#2C1820] shadow-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF2E93] animate-pulse" />
              <span>Rua Silvestre Ferraz, 27 • Sagrada Família, BH</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-[#2C1820] leading-[1.02]"
            >
              O amor de pai e mãe. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E93] via-[#FF6B00] to-[#84CC16]">
                A ciência que acolhe.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-lg sm:text-2xl text-[#2C1820]/80 font-normal max-w-2xl leading-relaxed"
            >
              Clínica veterinária sob a responsabilidade técnica da <strong className="text-[#2C1820] font-black">Dra. Natalia Possas</strong> (CRMV-MG 20572), estética fear-free e atendimento domiciliar exclusivo. Sem salas frias, sem gaiolas e sem pressa.
            </motion.p>

            {/* AÇÕES DE CONVERSÃO TÁTEIS (ZERO PRETO) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="py-4 px-9 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-pink-500/30 flex items-center justify-center gap-3 group transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Agendar Horário Oficial 🐾</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              <div className="px-6 py-4 rounded-full bg-white border-2 border-[#FF6B00]/40 text-xs font-mono font-bold text-[#2C1820] text-center shadow-xs">
                Seg a Sex: 9h às 18h • Sáb: 8h30 às 13h
              </div>
            </motion.div>

            {/* Selos de Confiança Médica */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-4 py-2 rounded-xl bg-white border border-[#84CC16]/40 font-mono text-xs font-bold text-[#2C1820] shadow-xs">
                ✓ Credenciada Petlove
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-[#FF6B00]/40 font-mono text-xs font-bold text-[#2C1820] shadow-xs">
                ✓ DogLife Convênios
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-[#FF2E93]/30 font-mono text-xs font-bold text-[#2C1820] shadow-xs">
                ✓ Atendimento Ético
              </span>
            </div>
          </div>

          {/* Lado Direito: Palco Límpido com Vídeo Real da Clínica e Escultura 3D */}
          <div className="lg:col-span-5 space-y-6 relative">
            
            {/* Player de Vídeo em Moldura Clara e Iluminada */}
            <div className="relative rounded-[3rem] p-3 bg-white border-2 border-[#FF2E93]/20 shadow-2xl">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-pink-50/50 group shadow-inner">
                <video
                  ref={videoRef}
                  src="/video-apresentação-por-dentro-paisdepet.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Controles Táteis de Estúdio */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="p-2.5 rounded-full bg-white/90 hover:bg-white text-[#2C1820] shadow-md border border-[#FF2E93]/20 transition-all active:scale-95"
                    aria-label={isPlaying ? "Pausar Vídeo" : "Reproduzir Vídeo"}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    className="p-2.5 rounded-full bg-white/90 hover:bg-white text-[#2C1820] shadow-md border border-[#FF2E93]/20 transition-all active:scale-95"
                    aria-label={isMuted ? "Ativar Áudio" : "Silenciar Áudio"}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#84CC16]" />}
                  </button>
                </div>

                {/* Tag de Autenticidade */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#2C1820] font-mono text-[10px] uppercase tracking-wider font-bold border border-[#84CC16]/40 shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-ping" />
                    <span>Tour Oficial • Unidade Física BH</span>
                  </span>
                </div>

                {/* Card Inferior de Localização & Acolhimento */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#FF2E93]/20 shadow-md">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#84CC16] font-bold block">
                    Espaço Exclusivo no Sagrada Família
                  </span>
                  <span className="text-sm font-serif italic text-[#2C1820] block mt-0.5">
                    Um refúgio seguro para o seu melhor amigo ser tratado como filho.
                  </span>
                </div>
              </div>
            </div>

            {/* Pod 3D WebGL Compacto de Apoio */}
            <div className="relative w-full rounded-2xl bg-white border border-[#84CC16]/30 shadow-sm p-3 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#FAF8F5] relative shrink-0">
                <ThreePetCanvas className="w-full h-full" />
              </div>
              <div className="text-left leading-tight">
                <span className="text-[10px] font-mono font-bold text-[#84CC16] uppercase tracking-wider block">
                  ✨ Escultura 3D em Tempo Real
                </span>
                <span className="text-xs font-bold text-[#2C1820] block mt-0.5">
                  Interaja com a patinha da marca
                </span>
                <span className="text-[10px] text-[#2C1820]/60 font-mono">
                  Mova o cursor para navegar na física 3D
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}