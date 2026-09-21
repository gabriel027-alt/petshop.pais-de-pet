"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Play, ChevronLeft, ChevronRight, ArrowUpRight, Star } from "lucide-react";

export function SocialProofAumigos() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<"todos" | "videos" | "fotos">("todos");

  // Apenas as mídias autênticas reais do acervo (sem textos inventados e sem repetições)
  const authenticProofs = [
    {
      id: 1,
      type: "video",
      mediaUrl: "/depoimento-amigos-paisdepet1.mp4",
      label: "Manejo Afetuoso • Banho & Tosa",
      badge: "Vídeo Real",
    },
    {
      id: 2,
      type: "photo",
      mediaUrl: "/depoimento-paisdepet1.jpeg",
      label: "Story de Tutor • Experiência Real",
      badge: "Instagram Story",
    },
    {
      id: 3,
      type: "video",
      mediaUrl: "/depoimento-paisdepet4.mp4",
      label: "Banho Relaxante com Massagem",
      badge: "Vídeo Real",
    },
    {
      id: 4,
      type: "photo",
      mediaUrl: "/depoimento-paisdepet2.jpg",
      label: "Post Espontâneo no Instagram",
      badge: "Feedback de Cliente",
    },
    {
      id: 5,
      type: "photo",
      mediaUrl: "/depoimento-paisdepet3.jpg",
      label: "Gratidão e Cuidado Dedicado",
      badge: "Cliente Frequente",
    },
    {
      id: 6,
      type: "photo",
      mediaUrl: "/depoimento-paisdepet5.jpg",
      label: "Aumigo Feliz e Saudável",
      badge: "Story da Comunidade",
    },
    {
      id: 7,
      type: "photo",
      mediaUrl: "/depoimento-paisdepet6.jpg",
      label: "Atendimento Humanizado",
      badge: "Registro de Tutor",
    },
  ];

  const filteredProofs =
    activeFilter === "todos"
      ? authenticProofs
      : activeFilter === "videos"
      ? authenticProofs.filter((item) => item.type === "video")
      : authenticProofs.filter((item) => item.type === "photo");

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -440 : 440;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="aumigos" className="py-28 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] relative overflow-hidden border-b border-[#FF2E93]/15">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* CABEÇALHO EDITORIAL DA PROVA SOCIAL */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-[#FF2E93]/15">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF2E93]" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2E93]">
                Mural Vivo • Comunidade Pais de Pet
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-black text-[#2C1820] tracking-tight leading-[1.05]">
              Amor em relatos{" "}
              <span className="font-serif italic font-normal text-[#FF2E93]">
                100% autênticos.
              </span>
            </h2>
          </div>

          {/* Destaque das 5 Estrelas + Controles de Estúdio */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border-2 border-[#FF6B00]/30 shadow-xs">
              <div className="flex text-[#FF6B00]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-mono font-bold text-[#2C1820] ml-1">5.0</span>
              <span className="text-[11px] font-mono text-[#2C1820]/70">• Sagrada Família, BH</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                className="p-3.5 rounded-full bg-white border-2 border-[#FF2E93]/20 text-[#2C1820] hover:bg-pink-50 transition-all active:scale-95 shadow-xs"
                aria-label="Rolar para esquerda"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                className="p-3.5 rounded-full bg-white border-2 border-[#FF2E93]/20 text-[#2C1820] hover:bg-pink-50 transition-all active:scale-95 shadow-xs"
                aria-label="Rolar para direita"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="https://instagram.com/petshoppaisdepet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-3.5 px-6 rounded-full bg-white hover:bg-pink-50 border-2 border-[#FF2E93]/30 text-[#2C1820] text-xs font-mono font-bold uppercase tracking-wider shadow-xs transition-all group"
              >
                <Instagram className="w-4 h-4 text-[#FF2E93] group-hover:scale-110 transition-transform" />
                <span>@petshoppaisdepet</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF2E93]" />
              </a>
            </div>
          </div>
        </div>

        {/* FILTROS MINIMALISTAS DE ESTÚDIO */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => setActiveFilter("todos")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all ${
              activeFilter === "todos"
                ? "bg-[#2C1820] text-white shadow-md"
                : "bg-white text-[#2C1820] hover:bg-pink-50 border-2 border-[#FF2E93]/20"
            }`}
          >
            Todos os Registros ({authenticProofs.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("videos")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all flex items-center gap-1.5 ${
              activeFilter === "videos"
                ? "bg-[#FF2E93] text-white shadow-md"
                : "bg-white text-[#2C1820] hover:bg-pink-50 border-2 border-[#FF2E93]/20"
            }`}
          >
            <Play className="w-3 h-3 fill-current" />
            <span>Vídeos Reais ({authenticProofs.filter((p) => p.type === "video").length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("fotos")}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all ${
              activeFilter === "fotos"
                ? "bg-[#84CC16] text-[#2C1820] shadow-md"
                : "bg-white text-[#2C1820] hover:bg-pink-50 border-2 border-[#FF2E93]/20"
            }`}
          >
            Stories & Posts ({authenticProofs.filter((p) => p.type === "photo").length})
          </button>
        </div>

        {/* MURAL VIVO EM ROLO DE FILME (SEM PRETO) */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredProofs.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-[280px] sm:w-[320px] lg:w-[350px] shrink-0 snap-center rounded-[2.5rem] overflow-hidden bg-white border-2 border-[#FF2E93]/20 shadow-xl relative group"
            >
              {/* Moldura de Mídia Proporção 9:14 */}
              <div className="relative aspect-[9/14] w-full overflow-hidden bg-pink-50/50">
                {item.type === "video" ? (
                  <>
                    <video
                      src={item.mediaUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1820]/80 via-transparent to-transparent pointer-events-none" />
                  </>
                ) : (
                  <>
                    <img
                      src={item.mediaUrl}
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1820]/80 via-transparent to-transparent pointer-events-none" />
                  </>
                )}

                {/* Badge Superior de Autenticidade */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#2C1820] text-[10px] font-mono uppercase tracking-wider font-bold flex items-center gap-1.5 border border-[#FF2E93]/20 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#FF2E93] animate-pulse" />
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Rodapé Interno com Identificação do Story */}
                <div className="absolute bottom-5 left-5 right-5 z-20 text-white flex items-center justify-between">
                  <div className="space-y-0.5 text-left">
                    <span className="text-[12px] font-bold text-white block">
                      {item.label}
                    </span>
                    <span className="text-[10px] font-mono text-[#84CC16] uppercase tracking-wider block font-bold">
                      @petshoppaisdepet
                    </span>
                  </div>

                  <a
                    href="https://instagram.com/petshoppaisdepet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-md text-white transition-all"
                    title="Ver no Instagram"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAIXA MARQUEE EDITORIAL ESCULPIDA EM VINHO/EXPRESSO PROFUNDO (#2C1820) */}
        <div className="overflow-hidden py-4 rounded-full bg-[#2C1820] text-white font-mono text-xs uppercase tracking-wider shadow-lg">
          <div className="animate-marquee gap-8 items-center whitespace-nowrap">
            <span className="flex items-center gap-2 text-[#84CC16] font-bold">
              <span>★</span>
              <span>@PETSHOPPAISDEPET</span>
            </span>
            <span className="text-[#FF2E93]/60">•</span>
            <span>RUA SILVESTRE FERRAZ, 27 • SAGRADA FAMÍLIA, BH</span>
            <span className="text-[#FF2E93]/60">•</span>
            <span className="text-[#FF2E93] font-bold">DRA. NATALIA POSSAS • CRMV-MG 20572</span>
            <span className="text-[#FF2E93]/60">•</span>
            <span>CREDENCIADA PETLOVE & DOGLIFE</span>
            <span className="text-[#FF2E93]/60">•</span>
            <span className="text-[#FF6B00] font-bold">ATENDIMENTO DOMICILIAR EM BH</span>
            <span className="text-[#FF2E93]/60">•</span>
            <span className="flex items-center gap-2 text-[#84CC16] font-bold">
              <span>★</span>
              <span>@PETSHOPPAISDEPET</span>
            </span>
            <span className="text-[#FF2E93]/60">•</span>
            <span>RUA SILVESTRE FERRAZ, 27 • SAGRADA FAMÍLIA, BH</span>
          </div>
        </div>

      </div>
    </section>
  );
}