"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { clinicMetadata } from "@/data/clinicMetadata";
import { faqData } from "@/data/faqData";

// =============================================================================
// ELEMENTOS VISUAIS PROPRIETÁRIOS DA MARCA (ZERO ÍCONES GENÉRICOS DE TERCEIROS)
// =============================================================================

function BrandPaw({ className = "w-5 h-5", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="12" cy="15.5" rx="4.5" ry="4" />
      <ellipse cx="6.5" cy="10" rx="2" ry="2.8" transform="rotate(-15 6.5 10)" />
      <ellipse cx="17.5" cy="10" rx="2" ry="2.8" transform="rotate(15 17.5 10)" />
      <ellipse cx="9.5" cy="6.5" rx="1.8" ry="2.5" transform="rotate(-6 9.5 6.5)" />
      <ellipse cx="14.5" cy="6.5" rx="1.8" ry="2.5" transform="rotate(6 14.5 6.5)" />
    </svg>
  );
}

function BrandCatEar({ className = "w-5 h-5", stroke = "currentColor" }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 18C4 18 5 12 7 9C8.5 6.8 10 5 10 5C10 5 11 10 12 11C13 10 14 5 14 5C14 5 15.5 6.8 17 9C19 12 20 18 20 18" />
    </svg>
  );
}

function BrandArrow({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 13L13 3M13 3H6M13 3V10" />
    </svg>
  );
}

function BrandCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 8.5L6.5 12L13 4.5" />
    </svg>
  );
}

function BrandMenu({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M4 7H20M4 12H15M4 17H20" />
    </svg>
  );
}

function BrandClose({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
      <path d="M6 6L18 18M6 18L18 6" />
    </svg>
  );
}

function BrandCross({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.5 2H9.5V6.5H14V9.5H9.5V14H6.5V9.5H2V6.5H6.5V2Z" />
    </svg>
  );
}

function BrandChevron({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 6L8 10L12 6" />
    </svg>
  );
}

function BrandStar({ className = "w-4 h-4", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

function BrandSoundOff({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function BrandSoundOn({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

// =============================================================================
// COMPONENTE DE VÍDEO VERTICAL INSTAGRAM 9:16 (AUTOPLAY, LOOP, ZERO BORDAS & ÁUDIO OPCIONAL)
// =============================================================================

function BoutiqueVideoPlayer({
  src,
  aspectRatio = "aspect-[9/16]",
  className = "",
  rounded = "rounded-3xl",
  objectFit = "object-cover",
  showAudioButton = true,
  audioPosition = "top-right"
}: {
  src: string;
  aspectRatio?: string;
  className?: string;
  rounded?: string;
  objectFit?: "object-cover" | "object-contain";
  showAudioButton?: boolean;
  audioPosition?: "top-right" | "bottom-right";
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div className={`relative ${aspectRatio} ${rounded} overflow-hidden bg-[#FAF8F5] select-none ${className}`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className={`w-full h-full ${objectFit} transition-transform duration-700 ease-out`}
      />
      {showAudioButton && (
        <button
          type="button"
          onClick={toggleAudio}
          aria-pressed={!isMuted}
          className={`absolute ${audioPosition === "bottom-right" ? "bottom-4 right-4" : "top-4 right-4"} z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 text-xs font-mono font-medium tracking-wide shadow-sm cursor-pointer`}
          aria-label={isMuted ? "Ativar som deste vídeo" : "Silenciar som deste vídeo"}
        >
          {isMuted ? (
            <>
              <BrandSoundOff className="w-3.5 h-3.5 text-white/80" />
              <span className="text-[10px] uppercase font-bold text-white/90">Ativar Som</span>
            </>
          ) : (
            <>
              <BrandSoundOn className="w-3.5 h-3.5 text-[#84CC16]" />
              <span className="text-[10px] uppercase font-bold text-[#84CC16]">Áudio Ativo</span>
            </>
          )}
        </button>
      )}
    </div>
  );
}

// =============================================================================
// GALERIA HÍBRIDA DE CASOS REAIS & DEPOIMENTOS (VÍDEOS E FOTOS • SEM DUPLICAÇÕES)
// O PRIMEIRO VÍDEO É O DESTAQUE PRINCIPAL (EXCLUSIVO, SEM MISTURAR COM O HERO)
// =============================================================================

type TestimonialMedia =
  | { type: "video"; id: string; src: string }
  | { type: "image"; id: string; src: string; alt: string };

const hybridTestimonials: TestimonialMedia[] = [
  {
    type: "video",
    id: "depoimento-destaque-lhasa",
    src: "/não-tem-com-quem-deixar-paisdepet.mp4"
  },
  {
    type: "video",
    id: "depoimento-golden",
    src: "/depoimento-amigos-paisdepet1.mp4"
  },
  {
    type: "video",
    id: "depoimento-homecare",
    src: "/depoimento-paisdepet4.mp4"
  },
  {
    type: "image",
    id: "foto-depoimento-1",
    src: "/depoimento-paisdepet1.jpeg",
    alt: "Depoimento real de tutor elogiando o carinho e paciência no atendimento da Dra. Natalia"
  },
  {
    type: "image",
    id: "foto-depoimento-2",
    src: "/depoimento-paisdepet2.jpg",
    alt: "Avaliação no Google sobre banho tranquilo com toalhas 100% descartáveis na Pais de Pet"
  },
  {
    type: "image",
    id: "foto-depoimento-3",
    src: "/depoimento-paisdepet3.jpg",
    alt: "Relato de cliente destacando o acolhimento sem estresse e pontualidade na consulta clínica"
  },
  {
    type: "image",
    id: "foto-depoimento-5",
    src: "/depoimento-paisdepet5.jpg",
    alt: "Depoimento real com foto de paciente canino tranquilo e feliz após procedimento veterinário"
  },
  {
    type: "image",
    id: "foto-depoimento-6",
    src: "/depoimento-paisdepet6.jpg",
    alt: "Avaliação 5 estrelas no Google recomendando o atendimento veterinário humanizado da Pais de Pet"
  }
];

export default function PaisDePetBoutiquePortal() {
  const whatsappUrl = clinicMetadata.contacts.whatsappUrl;
  const containerRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [heroMuted, setHeroMuted] = useState(true);

  const toggleHeroAudio = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (heroVideoRef.current) {
      const nextMuted = !heroVideoRef.current.muted;
      heroVideoRef.current.muted = nextMuted;
      setHeroMuted(nextMuted);
      if (heroVideoRef.current.paused) {
        heroVideoRef.current.play().catch(() => {});
      }
    }
  };

  // Animação de Scroll e Paralaxe Profissional
  const { scrollY } = useScroll();
  const heroVideoY = useTransform(scrollY, [0, 800], [0, 100]);
  const heroScale = useTransform(scrollY, [0, 800], [1.0, 1.05]);

  // Estados de Interface
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Monitoramento Resiliente de Scroll para o Botão Flutuante
  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 250);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -330 : 330;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleCarouselScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = 330;
      const index = Math.round(scrollLeft / cardWidth);
      setCarouselIndex(Math.min(Math.max(index, 0), hybridTestimonials.length - 1));
    }
  };

  const handleCarouselKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollCarousel("left");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollCarousel("right");
    }
  };

  // Estados da Triagem Pré-Clínica Inteligente
  const [triageStep, setTriageStep] = useState<1 | 2 | 3 | 4>(1);
  const [petSpecies, setPetSpecies] = useState<"Cão" | "Gato">("Cão");
  const [petAge, setPetAge] = useState<"Filhote (< 1 ano)" | "Adulto (1 a 7 anos)" | "Idoso / Sênior (8+ anos)">("Adulto (1 a 7 anos)");
  const [petService, setPetService] = useState<string>("Consulta Preventiva Fear-Free");
  const [petBehavior, setPetBehavior] = useState<"Calmo & Sociável" | "Sensível / Agitado" | "Amedrontado / Traumatizado">("Calmo & Sociável");

  // Animações Direcionais Visíveis e Marcantes por Bloco
  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#2C1820] font-sans selection:bg-[#84CC16]/30 selection:text-[#2C1820] relative overflow-x-hidden flex flex-col">
      
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO BOUTIQUE: DESIGN MODERNO, EQUILIBRADO E SEM SOBREPOSIÇÃO     */}
      {/* ========================================================================= */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#FAF8F5]/96 backdrop-blur-xl border-b border-[#2C1820]/10 transition-all duration-300 pt-[env(safe-area-inset-top,0px)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 h-16 sm:h-20 lg:h-24 flex items-center justify-between gap-4">
          
          {/* Assinatura Oficial da Clínica (Logotipo Nítido e Título Bem Dimensionado) */}
          <a href="/" className="flex items-center gap-3 group text-left shrink-0 max-w-[65%] sm:max-w-none" aria-current="page" aria-label="Pais de Pet - Página Inicial">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full p-[2px] bg-gradient-to-tr from-[#FF2E93] via-[#FF6B00] to-[#84CC16] shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/foto-perfil-pais-de-pet.jpg"
                alt="Pais de Pet"
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>
            <div className="min-w-0">
              <span className="font-black text-lg sm:text-xl lg:text-2xl text-[#2C1820] tracking-tight block leading-none truncate">
                Pais de Pet
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#FF6B00] uppercase font-bold block mt-0.5 sm:mt-1 truncate">
                Dra. Natalia Possas • CRMV-MG 20572
              </span>
            </div>
          </a>

          {/* Navegação Desktop Simétrica e Generosamente Espaçada */}
          <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-4 text-xs font-bold uppercase tracking-wider text-[#2C1820]/80" aria-label="Navegação Principal">
            <a href="#refugio" className="px-3.5 py-2 rounded-full hover:bg-white hover:text-[#FF2E93] transition-all">
              O Refúgio
            </a>
            <a href="#filosofia" className="px-3.5 py-2 rounded-full hover:bg-white hover:text-[#FF2E93] transition-all">
              Filosofia
            </a>
            <a href="#consultorio" className="px-3.5 py-2 rounded-full hover:bg-white hover:text-[#84CC16] transition-all">
              Prevenção
            </a>
            <a href="#galeria-videos" className="px-3.5 py-2 rounded-full hover:bg-white hover:text-[#FF2E93] transition-all">
              Depoimentos
            </a>
            <a href="#localizacao" className="px-3.5 py-2 rounded-full hover:bg-white hover:text-[#FF6B00] transition-all">
              Localização
            </a>
            <a href="#triagem" className="px-3.5 py-2 rounded-full hover:bg-white hover:text-[#84CC16] transition-all">
              Triagem
            </a>
          </nav>

          {/* Grupo de Ação Rápida: Botão WhatsApp Elegante + Botão Sumário/Menu */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 group touch-manipulation min-h-[44px]"
              aria-label="Falar com a Dra. Natalia no WhatsApp"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden p-[1px] bg-white shrink-0 shadow-2xs">
                <img src="/foto-perfil-pais-de-pet.jpg" alt="WhatsApp" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="inline">WhatsApp</span>
              <BrandArrow className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              type="button"
              onClick={() => setSideMenuOpen(!sideMenuOpen)}
              aria-haspopup="dialog"
              aria-expanded={sideMenuOpen}
              aria-controls="drawer-sumario"
              className="p-2.5 sm:p-3 rounded-2xl bg-white text-[#2C1820] border border-[#2C1820]/15 hover:border-[#FF2E93] transition-all shadow-2xs active:scale-95 cursor-pointer touch-manipulation flex items-center gap-1.5 min-h-[44px]"
              aria-label="Abrir Menu de Navegação e Sumário"
            >
              {sideMenuOpen ? <BrandClose className="w-5 h-5 text-[#FF2E93]" /> : <BrandMenu className="w-5 h-5 text-[#2C1820]" />}
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider hidden md:inline">Sumário</span>
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* MENU DE NAVEGAÇÃO LATERAL (DRAWER SUMÁRIO EXPANSÍVEL)                     */}
      {/* ========================================================================= */}
      <div
        onClick={() => setSideMenuOpen(false)}
        hidden={!sideMenuOpen}
        inert={!sideMenuOpen}
        className={`fixed inset-0 z-50 bg-[#2C1820]/30 backdrop-blur-xs transition-opacity duration-300 ${
          sideMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        id="drawer-sumario"
        role="dialog"
        aria-modal="true"
        aria-label="Sumário da página"
        hidden={!sideMenuOpen}
        inert={!sideMenuOpen}
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[440px] z-50 bg-[#FAF8F5] border-l border-[#2C1820]/10 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.25rem,env(safe-area-inset-bottom))] px-6 sm:px-10 overflow-y-auto flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
          sideMenuOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
      >
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center justify-between pb-5 border-b border-[#2C1820]/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF2E93] to-[#84CC16] shrink-0">
                <img src="/foto-perfil-pais-de-pet.jpg" alt="Pais de Pet" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="min-w-0">
                <span className="font-black text-lg text-[#2C1820] block leading-none truncate">Pais de Pet</span>
                <span className="text-[10px] font-mono uppercase text-[#FF6B00] font-bold block mt-0.5 truncate">Sagrada Família • BH</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSideMenuOpen(false)}
              className="p-2.5 rounded-2xl bg-white border border-[#2C1820]/15 text-[#2C1820] hover:bg-[#FAF8F5] transition-colors active:scale-95 cursor-pointer touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Fechar Sumário"
            >
              <BrandClose className="w-5 h-5 text-[#FF2E93]" />
            </button>
          </div>

          <div className="space-y-1 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2E93] block">
              Sumário Completo
            </span>
            <nav className="divide-y divide-[#2C1820]/8 text-base font-black text-[#2C1820]" aria-label="Links do Sumário">
              {[
                { href: "#refugio", label: "O Refúgio e Boas-Vindas", desc: "História, dedicação e acolhimento familiar" },
                { href: "#filosofia", label: "Filosofia Fear-Free", desc: "Isolamento de ruídos e arquitetura sensorial" },
                { href: "#consultorio", label: "Medicina & Vacinação Ética", desc: "Aplicação suave e rastreabilidade total" },
                { href: "#banho", label: "Estética com Toalha Descartável", desc: "Zero gaiolas e toalhas individuais esterilizadas" },
                { href: "#homecare", label: "Atendimento no Sofá da sua Casa", desc: "Home care veterinário nos bairros de BH" },
                { href: "#boutique", label: "Boutique & Nutrição Clínica", desc: "Rações selecionadas e peças anatômicas" },
                { href: "#galeria-videos", label: "Depoimentos Reais em Vídeo", desc: "Depoimentos autênticos de tutores em vídeo puro" },
                { href: "#localizacao", label: "Localização & Google 4.9", desc: "Mapa interativo e perfil verificado com nota 4.9" },
                { href: "#triagem", label: "Triagem Pré-Clínica Inteligente", desc: "Prepare a consulta da Dra. Natalia antes de chegar" },
                { href: "#faq", label: "Dúvidas Frequentes", desc: "Convênios, toalhas e endereço no Sagrada Família" }
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setSideMenuOpen(false)}
                  className="py-3.5 block group hover:translate-x-1.5 transition-transform"
                >
                  <span className="block text-sm sm:text-base font-black group-hover:text-[#FF2E93] transition-colors">
                    {item.label}
                  </span>
                  <span className="text-xs text-[#2C1820]/65 font-normal block mt-0.5">
                    {item.desc}
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="pt-8 border-t border-[#2C1820]/10 text-left space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#84CC16] uppercase">
            <BrandCross className="w-4 h-4" />
            <span>Dra. Natalia Possas • CRMV-MG 20572</span>
          </div>
          <p className="text-xs text-[#2C1820]/75">
            Rua Silvestre Ferraz, 27 • Sagrada Família, Belo Horizonte - MG
          </p>
          <a
            href="tel:+5531983380139"
            className="text-xs font-mono font-bold text-[#2C1820] hover:underline block pt-1"
          >
            Ligar: (31) 98338-0139
          </a>
          <a
            href="https://wa.link/2ooc5p?text=Ol%C3%A1%2C%20Dra.%20Natalia!%20Vim%20pelo%20menu%20do%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 py-3.5 rounded-full bg-[#FF2E93] text-white font-black text-xs uppercase tracking-wider"
          >
            <img src="/foto-perfil-pais-de-pet.jpg" alt="Logo" className="w-5 h-5 rounded-full object-cover" />
            <span>Falar no WhatsApp Oficial</span>
          </a>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* LANDMARK SEMÂNTICO PRINCIPAL (<main>)                                      */}
      {/* ========================================================================= */}
      <main id="conteudo-principal" className="flex-grow">

      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 2. INTRO 2: HERO PRINCIPAL COM BACKGROUND VIDEO REAL FULL-BLEED (EDGE-TO-EDGE) */}
      {/* ========================================================================= */}
      {/* ========================================================================= */}
      {/* 2. HERO PRINCIPAL COM BACKGROUND VIDEO REAL FULL-BLEED (EDGE-TO-EDGE)     */}
      {/* ========================================================================= */}
      <section className="relative w-full sm:w-[100vw] h-[100dvh] min-h-[100dvh] overflow-hidden flex flex-col justify-end items-center pb-12 sm:pb-16 select-none bg-black">
        
        {/* VÍDEO DO GOLDEN RETRIEVER: LOOP LIMPO, FLUIDO E FULL-BLEED REAL (100VW x 100VH) */}
        <video
          ref={heroVideoRef}
          src="/intro-interativa-4k.mp4"
          poster="/intro-interativa-poster.jpg"
          autoPlay
          muted={heroMuted}
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full sm:w-[100vw] sm:h-[100vh] sm:max-w-none sm:m-0 sm:p-0 object-cover object-center sm:object-[center_28%] z-0 pointer-events-none bg-black"
          style={{ objectFit: "cover" }}
        />

        {/* OVERLAY ESCURO DENSO DE FUNDO PARA CONTRASTE E LEGIBILIDADE WCAG 2.2 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/40 pointer-events-none z-10" />

        {/* BOTÃO DISCRETO DE ÁUDIO NO HERO COM ARIA-PRESSED E LABEL DINÂMICO */}
        <button
          type="button"
          onClick={toggleHeroAudio}
          aria-pressed={!heroMuted}
          className="absolute top-20 sm:top-24 right-4 sm:right-8 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 text-xs font-mono font-medium tracking-wide shadow-md cursor-pointer touch-manipulation"
          aria-label={heroMuted ? "Ativar som deste vídeo" : "Silenciar som deste vídeo"}
        >
          {heroMuted ? (
            <>
              <BrandSoundOff className="w-3.5 h-3.5 text-white/80" />
              <span className="text-[10px] uppercase font-bold text-white/90">Ativar Som</span>
            </>
          ) : (
            <>
              <BrandSoundOn className="w-3.5 h-3.5 text-[#84CC16]" />
              <span className="text-[10px] uppercase font-bold text-[#84CC16]">Áudio Ativo</span>
            </>
          )}
        </button>

        {/* COMPOSIÇÃO CINEMATOGRÁFICA COM TIPOGRAFIA EM TEXT-REVEAL SEQUENCIAL & VINHETA PROTETORA */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center space-y-4 sm:space-y-6 before:absolute before:-inset-8 before:rounded-[3rem] before:bg-radial before:from-black/80 before:via-black/40 before:to-transparent before:-z-10 before:blur-2xl before:pointer-events-none">
          
          <div className="space-y-3 sm:space-y-4 w-full">
            {/* Headline Principal: Tipografia editorial de alto contraste e destaque emocional */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.28] sm:leading-[1.22] text-white max-w-4xl mx-auto inline-block pb-4 pt-1 px-1 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              Medicina veterinária de excelência, com o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A1A] via-[#FF2E93] to-[#FFA8D5]">carinho que seu melhor amigo merece.</span>
            </h1>

            {/* Assinatura Médica da Dra. Natália e CRMV com alto contraste e legibilidade impecável */}
            <div className="flex items-center justify-center gap-2.5 pt-1">
              <div className="h-px w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#FF7A1A]" />
              <p className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-white/95 [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)]">
                DRA. NATALIA POSSAS • CRMV-MG 20572
              </p>
              <div className="h-px w-6 sm:w-10 bg-gradient-to-l from-transparent to-[#FFA8D5]" />
            </div>

            {/* Subtítulo Complementar: Introduz o que vem a seguir */}
            <p className="text-sm sm:text-base md:text-lg font-medium text-white/90 max-w-2xl mx-auto leading-relaxed [text-shadow:_0_2px_12px_rgba(0,0,0,0.95)]">
              Consultas especializadas, exames e acolhimento em um ambiente projetado para reduzir o estresse do seu animal.
            </p>
          </div>

          {/* GRUPO DE CTAS DE ALTA CONVERSÃO: WHATSAPP PRIMÁRIO SÓLIDO & AGENDAR TRIAGEM GHOST */}
          <div className="pt-2 sm:pt-3 w-full flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* 1. BOTÃO PRIMÁRIO DE DESTAQUE ABSOLUTO (CRO / LEI DE FITTS): WHATSAPP DA DRA. NATALIA */}
            <div className="relative group/btn">
              <div className="hidden sm:block absolute -inset-1 rounded-full bg-gradient-to-r from-[#84CC16]/60 via-[#FF6B00]/70 to-[#FF2E93]/80 blur-md opacity-80 group-hover/btn:opacity-100 transition-opacity pointer-events-none" />
              <a
                href={`${whatsappUrl}?text=${encodeURIComponent("Olá, Dra. Natalia! Gostaria de tirar dúvidas e agendar uma consulta para o meu pet na Pais de Pet.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#FF2E93] via-[#FF3B9B] to-[#FF2E93] hover:scale-105 active:scale-95 text-white font-black text-xs sm:text-sm uppercase tracking-wider text-center border border-white/40 backdrop-blur-md cursor-pointer touch-manipulation group ring-4 ring-[#FF2E93]/20 sm:ring-2 sm:ring-white/40 shadow-xl transition-all min-h-[44px]"
                aria-label="Conversar com a Dra. Natalia no WhatsApp Oficial (Canal Primário de Agendamento)"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden p-[1px] bg-white shrink-0 shadow-2xs">
                  <img src="/foto-perfil-pais-de-pet.jpg" alt="WhatsApp" className="w-full h-full object-cover rounded-full" />
                </div>
                <span>Conversar com a Dra. Natália</span>
                <BrandArrow className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* 2. BOTÃO SECUNDÁRIO ELEGANTE (CRO / LEI DE HICK / GHOST OUTLINE): AGENDAR TRIAGEM */}
            <div className="relative group/triagem hidden sm:inline-flex">
              <a
                href="#triagem"
                className="relative inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-4 sm:py-4.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-center border border-white/40 hover:border-white/70 backdrop-blur-md shadow-md hover:shadow-lg hover:shadow-white/10 cursor-pointer touch-manipulation transition-all min-h-[44px]"
                aria-label="Agendar Triagem Pré-Clínica (Opção Secundária)"
              >
                <BrandPaw className="w-4 h-4 text-[#BEF264] shrink-0" />
                <span>Agendar Triagem</span>
              </a>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* 3. MANIFESTO BOUTIQUE & SELOS DE QUALIDADE EXCLUSIVOS                    */}
      {/* ========================================================================= */}
      <section id="refugio" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#FAF8F5] border-t border-[#2C1820]/10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Manifesto Empático */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2E93] block">
                Filosofia Fear-Free • Pais de Pet
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2C1820] tracking-tight leading-snug">
                Criamos uma clínica onde o seu pet entra sem medo e você sai com o <span className="text-[#FF2E93]">coração em paz.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#2C1820]/80 leading-relaxed">
                A gente sabe o que passa no seu coração quando ele treme antes de entrar no veterinário. Aqui, nenhuma porta bate, nenhum cão late na orelha do seu gato, e nenhuma consulta dura 15 minutos.
              </p>
              <div className="pt-2">
                <a
                  href="#triagem"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-white/80 text-[#2C1820] font-black text-xs sm:text-sm uppercase tracking-wider border border-[#2C1820]/15 hover:border-[#84CC16] transition-all shadow-2xs min-h-[44px]"
                >
                  <BrandPaw className="w-4 h-4 text-[#84CC16]" />
                  <span>Iniciar Triagem Pré-Clínica</span>
                </a>
              </div>
            </div>

            {/* Selos de Qualidade */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex flex-col items-start p-4 sm:p-5 rounded-2xl bg-white border border-[#2C1820]/10 shadow-2xs space-y-2">
                <span className="p-2.5 rounded-xl bg-[#84CC16]/15 text-[#84CC16]">
                  <BrandPaw className="w-5 h-5" />
                </span>
                <span className="font-bold text-[#2C1820] text-sm block">100% Toalhas Descartáveis</span>
                <span className="text-sm text-[#2C1820]/75 block">Esterilizadas e individuais para cada atendimento</span>
              </div>
              <div className="flex flex-col items-start p-4 sm:p-5 rounded-2xl bg-white border border-[#2C1820]/10 shadow-2xs space-y-2">
                <span className="p-2.5 rounded-xl bg-[#FF2E93]/15 text-[#FF2E93]">
                  <BrandCatEar className="w-5 h-5" />
                </span>
                <span className="font-bold text-[#2C1820] text-sm block">Manejo Cat-Friendly</span>
                <span className="text-sm text-[#2C1820]/75 block">Zero estresse e isolamento total de ruídos caninos</span>
              </div>
              <div className="flex flex-col items-start p-4 sm:p-5 rounded-2xl bg-white border border-[#2C1820]/10 shadow-2xs space-y-2">
                <span className="p-2.5 rounded-xl bg-[#FF6B00]/15 text-[#FF6B00]">
                  <BrandCross className="w-5 h-5" />
                </span>
                <span className="font-bold text-[#2C1820] text-sm block">Credenciada Petlove</span>
                <span className="text-sm text-[#2C1820]/75 block">Ampla cobertura e facilidade no seu plano de saúde pet</span>
              </div>
            </div>

          </div>

          {/* FAIXA COMPACTA DE PROVA SOCIAL E REPUTAÇÃO COM ÍCONES VIVOS (PRIMEIRA DOBRA IMPONENTE) */}
          <div className="mt-3.5 sm:mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 text-center shadow-xs flex flex-col items-center justify-center">
              <div className="flex items-center gap-1.5">
                <BrandPaw className="w-3.5 h-3.5 text-[#FF2E93]" />
                <span className="font-black text-lg sm:text-xl text-[#FF2E93] leading-tight">10+ Anos</span>
              </div>
              <span className="text-xs font-mono uppercase text-[#2C1820]/75 font-bold block mt-0.5">de Dedicação</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 text-center shadow-xs flex flex-col items-center justify-center">
              <div className="flex items-center gap-1.5">
                <BrandPaw className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span className="font-black text-lg sm:text-xl text-[#FF6B00] leading-tight">1.500+</span>
              </div>
              <span className="text-xs font-mono uppercase text-[#2C1820]/75 font-bold block mt-0.5">Pets Acolhidos</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 text-center shadow-xs flex flex-col items-center justify-center">
              <div className="flex items-center gap-1.5">
                <BrandStar className="w-3.5 h-3.5 text-[#84CC16] fill-[#84CC16]" />
                <span className="font-black text-lg sm:text-xl text-[#84CC16] leading-tight">★ 4.9</span>
              </div>
              <span className="text-xs font-mono uppercase text-[#2C1820]/75 font-bold block mt-0.5">Google Reviews</span>
            </div>
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 text-center shadow-xs flex flex-col items-center justify-center">
              <div className="flex items-center gap-1.5">
                <BrandCatEar className="w-3.5 h-3.5 text-[#2C1820]" />
                <span className="font-black text-lg sm:text-xl text-[#2C1820] leading-tight">0 Gaiolas</span>
              </div>
              <span className="text-xs font-mono uppercase text-[#2C1820]/75 font-bold block mt-0.5">100% Fear-Free</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SEÇÃO: O REFÚGIO FEAR-FREE (SILÊNCIO, TEMPO & ACOLHIMENTO)              */}
      {/* ========================================================================= */}
      <section id="filosofia" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[#FF2E93]/15 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left">
            <motion.div {...fadeInLeft} className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2E93]">
                Filosofia Fear-Free
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
                Medicina sem contenção forçada. <span className="text-[#FF2E93]">Consultório sem cheiro de medo.</span>
              </h2>
            </motion.div>
            <motion.div {...fadeInRight} className="max-w-md text-sm sm:text-base text-[#2C1820]/80 leading-relaxed">
              Animais sentem o estresse pelo olfato e pela audição antes mesmo de verem o veterinário. Na Pais de Pet, nós isolamos estímulos para que o atendimento seja uma experiência de relaxamento e segurança.
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* VÍDEO VERTICAL 9:16 INSTAGRAM REELS (SEM BORDAS ARTIFICIAIS) */}
            <motion.div {...fadeInLeft} className="lg:col-span-5 max-w-sm mx-auto w-full">
              <BoutiqueVideoPlayer
                src="/consultorio-atendimentos-paisdepet.mp4"
                aspectRatio="aspect-[9/16]"
                rounded="rounded-[2rem]"
                objectFit="object-cover"
                showAudioButton={true}
              />
            </motion.div>

            <motion.div {...fadeInRight} className="lg:col-span-7 rounded-[2rem] bg-white border border-[#2C1820]/10 p-8 sm:p-12 space-y-8 text-left shadow-xs flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-xs font-mono uppercase text-[#84CC16] font-bold">Arquitetura Sensorial</span>
                <h3 className="text-2xl sm:text-4xl font-black text-[#2C1820] leading-tight">
                  Por que cães e gatos <span className="text-[#FF2E93]">não se cruzam</span> nem sentem o cheiro um do outro aqui?
                </h3>
                <p className="text-sm sm:text-base text-[#2C1820]/85 leading-relaxed">
                  Gatos são territorialistas e se estressam com odores caninos. Nós desenvolvemos fluxos separados, desinfecção enzimática sem cloro e difusores contínuos de Feliway e Adaptil.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#84CC16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#84CC16]">
                    <BrandPaw className="w-4 h-4" />
                    <span>Atendimento com Hora Marcada</span>
                  </div>
                  <p className="text-sm text-[#2C1820]/80">
                    Intervalos generosos entre pacientes para garantir que a recepção esteja sempre vazia e silenciosa quando você chegar.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#84CC16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#84CC16]">
                    <BrandCatEar className="w-4 h-4" />
                    <span>Aclimatação sem Mesa Fria</span>
                  </div>
                  <p className="text-sm text-[#2C1820]/80">
                    O pet cheira, explora e relaxa no chão aquecido antes de qualquer toque. Jamais colocamos o animal em mesas frias e intimidadoras.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SEÇÃO: VACINAÇÃO ÉTICA & MEDICINA PREVENTIVA                            */}
      {/* ========================================================================= */}
      <section id="consultorio" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-white border-t border-[#2C1820]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* VÍDEOS VERTICAIS 9:16 INSTAGRAM REELS (CONSULTÓRIO & VACINAÇÃO • SEM BORDAS) */}
          <motion.div {...fadeInLeft} className="lg:col-span-5 max-w-md mx-auto w-full grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-2">
              <BoutiqueVideoPlayer
                src="/consultorio-aplicacaodevacina-paisdepet.mp4"
                aspectRatio="aspect-[9/16]"
                rounded="rounded-[2rem]"
                objectFit="object-cover"
                showAudioButton={true}
              />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#84CC16] block text-center">
                Vacinação Suave
              </span>
            </div>
            <div className="space-y-2">
              <BoutiqueVideoPlayer
                src="/consultorio-gatinho-paisdepet.mp4"
                aspectRatio="aspect-[9/16]"
                rounded="rounded-[2rem]"
                objectFit="object-cover"
                showAudioButton={true}
              />
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#FF2E93] block text-center">
                Manejo Cat-Friendly
              </span>
            </div>
          </motion.div>

          <motion.div {...fadeInRight} className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#84CC16]">
                Imunização Ética & Prevenção
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
                Uma picadinha que ele nem percebe. <span className="text-[#65A30D]">Vacinas importadas com cadeia de frio viva.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#2C1820]/80 leading-relaxed">
                Vacina não é apenas aplicar uma dose. É garantir que o lote nunca tenha sofrido variação de temperatura, usar agulhas ultra-finas e associar o momento a um reforço positivo delicioso para criar memórias boas.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: "Rastreabilidade Rigorosa de Lote", desc: "Cada frasco tem registro formal anexado à carteirinha física e ao prontuário médico." },
                { title: "Avaliação Clínica Completa Inclusa", desc: "Nenhum pet é vacinado sem checagem de temperatura, linfonodos, ausculta cardíaca e pulmão." },
                { title: "Odontologia Preventiva sem Trauma", desc: "Detecção precoce de tártaro, gengivite e reabsorção dentária felina sem procedimentos desnecessários." }
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#84CC16]/25 flex items-start gap-3.5">
                  <span className="p-1 rounded-lg bg-[#84CC16]/20 text-[#84CC16] mt-0.5 shrink-0">
                    <BrandCheck className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-black text-[#2C1820]">{item.title}</h4>
                    <p className="text-sm text-[#2C1820]/80 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`${whatsappUrl}?text=${encodeURIComponent("Olá, Dra. Natalia! Gostaria de consultar o protocolo vacinal do meu pet.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#84CC16] hover:bg-lime-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 min-h-[44px]"
            >
              <img src="/foto-perfil-pais-de-pet.jpg" alt="Logo" className="w-6 h-6 rounded-full object-cover" />
              <span>Agendar Vacinação Ética</span>
              <BrandArrow className="w-3.5 h-3.5" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SEÇÃO: BANHO & ESTÉTICA COM TOALHA DESCARTÁVEL                         */}
      {/* ========================================================================= */}
      <section id="banho" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[#2C1820]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left">
            <motion.div {...fadeInLeft} className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2E93]">
                Estética Consciente
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
                Você enxugaria o rosto com a toalha usada de outro desconhecido? <span className="text-[#FF2E93]">Nós também não.</span>
              </h2>
            </motion.div>
            <motion.div {...fadeInRight} className="max-w-md text-sm sm:text-base text-[#2C1820]/80 leading-relaxed">
              O maior foco de contaminação cruzada, fungos e dermatites em pet shops tradicionais são toalhas de tecido lavadas em lote. Na Pais de Pet, a toalha é 100% celulose hospitalar, aberta na sua frente e descartada em seguida.
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* VÍDEO VERTICAL 9:16 INSTAGRAM REELS (SEM BORDAS ARTIFICIAIS) */}
            <motion.div {...fadeInLeft} className="lg:col-span-5 max-w-sm mx-auto w-full">
              <BoutiqueVideoPlayer
                src="/banhoetosa-paisdepet1.mp4"
                aspectRatio="aspect-[9/16]"
                rounded="rounded-[2rem]"
                objectFit="object-cover"
                showAudioButton={true}
              />
            </motion.div>

            <motion.div {...fadeInRight} className="lg:col-span-7 space-y-6 text-left">
              <div className="p-6 rounded-3xl bg-white border border-[#FF2E93]/25 space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-[#FF2E93]">Zero Gaiolas de Espera</span>
                <p className="text-sm sm:text-base text-[#2C1820]/85 leading-relaxed">
                  Seu cão não fica trancado em gaiolas de metal esperando a vez. O horário é exclusivo: ele chega, toma o banho relaxante, é seco com calma e já vai para os seus braços.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-[#FF2E93]/25 space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-[#FF2E93]">Água na Temperatura Corporal</span>
                <p className="text-sm sm:text-base text-[#2C1820]/85 leading-relaxed">
                  Temperatura constante a 38°C para evitar choque térmico, além de dermocosméticos hipoalergênicos e secadores com atenuação acústica.
                </p>
              </div>

              <a
                href={`${whatsappUrl}?text=${encodeURIComponent("Olá! Gostaria de agendar um banho com toalha descartável para o meu pet.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 min-h-[44px]"
              >
                <img src="/foto-perfil-pais-de-pet.jpg" alt="Logo" className="w-6 h-6 rounded-full object-cover" />
                <span>Reservar Horário de Banho</span>
                <BrandArrow className="w-3.5 h-3.5" />
              </a>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. SEÇÃO: ATENDIMENTO EM DOMICÍLIO (HOME CARE BH)                         */}
      {/* ========================================================================= */}
      <section id="homecare" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[#2C1820]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div {...fadeInLeft} className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
              Home Care em Belo Horizonte
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
              O consultório no sofá da sua sala. <span className="text-[#EA580C]">Sem trânsito, sem caixinha de transporte.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#2C1820]/85 leading-relaxed">
              Para gatos que entram em pânico com o carro, cães idosos com dor articular ou tutores com rotina apertada. A Dra. Natalia vai até a sua residência com kit clínico esterilizado completo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#FF6B00]/25 shadow-2xs">
                <span className="text-xs font-mono uppercase text-[#FF6B00] font-bold block">Bairros de Atendimento</span>
                <span className="text-sm font-black text-[#2C1820] block mt-1">Sagrada Família, Floresta, Santa Tereza, Cidade Nova, Horto e Silveira.</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#FF6B00]/25 shadow-2xs">
                <span className="text-xs font-mono uppercase text-[#FF6B00] font-bold block">Procedimentos em Casa</span>
                <span className="text-sm font-black text-[#2C1820] block mt-1">Exames de sangue, vacinas importadas, curativos e avaliação geriátrica.</span>
              </div>
            </div>

            <a
              href={`${whatsappUrl}?text=${encodeURIComponent("Olá, Dra. Natalia! Gostaria de agendar um atendimento veterinário no sofá da minha casa em BH.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF6B00] hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 min-h-[44px]"
            >
              <img src="/foto-perfil-pais-de-pet.jpg" alt="Logo" className="w-6 h-6 rounded-full object-cover" />
              <span>Solicitar Home Care em BH</span>
              <BrandArrow className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* VÍDEO VERTICAL 9:16 INSTAGRAM REELS (SEM BORDAS ARTIFICIAIS) */}
          <motion.div {...fadeInRight} className="lg:col-span-5 max-w-sm mx-auto w-full order-1 lg:order-2">
            <BoutiqueVideoPlayer
              src="/atendimento-clinicaeadomicio-paisdepet.mp4"
              aspectRatio="aspect-[9/16]"
              rounded="rounded-[2rem]"
              objectFit="object-cover"
              showAudioButton={true}
            />
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SEÇÃO: BOUTIQUE & NUTRIÇÃO PREVENTIVA                                  */}
      {/* ========================================================================= */}
      <section id="boutique" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[#2C1820]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left">
            <motion.div {...fadeInLeft} className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
                Boutique Farmácia & Nutrição
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
                Peças que aquecem sem prender o movimento. <span className="text-[#EA580C]">Ração de verdade.</span>
              </h2>
            </motion.div>
            <motion.div {...fadeInRight} className="max-w-md text-sm sm:text-base text-[#2C1820]/80 leading-relaxed">
              Curadoria médica da Dra. Natalia: nada de roupas que pinicam, petiscos cheios de corantes ou rações com subprodutos tóxicos.
            </motion.div>
          </div>

          {/* VÍDEOS VERTICAIS 9:16 INSTAGRAM REELS (CURADORIA CLÍNICA EXCLUSIVA) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            
            <motion.div {...fadeInLeft} className="rounded-[2rem] bg-white border border-[#FF6B00]/25 p-6 space-y-4 text-left shadow-xs">
              <BoutiqueVideoPlayer
                src="/colocando-roupa-de-frio-em-pet-paisdepet.mp4"
                aspectRatio="aspect-[9/16]"
                rounded="rounded-[2rem]"
                objectFit="object-cover"
                showAudioButton={true}
              />
              <h4 className="text-base font-black text-[#2C1820]">Moletom Térmico Anatômico</h4>
              <p className="text-sm text-[#2C1820]/80">Design com corte que libera as patas dianteiras e não aperta a traqueia.</p>
            </motion.div>

            <motion.div {...fadeInRight} className="rounded-[2rem] bg-white border border-[#84CC16]/30 p-6 space-y-4 text-left shadow-xs">
              <BoutiqueVideoPlayer
                src="/preparado-para-ofrio-paisdepet.mp4"
                aspectRatio="aspect-[9/16]"
                rounded="rounded-[2rem]"
                objectFit="object-cover"
                showAudioButton={true}
              />
              <h4 className="text-base font-black text-[#2C1820]">Proteção de Inverno para Idosos</h4>
              <p className="text-sm text-[#2C1820]/80">Manutenção da temperatura para cães com artrose e dores articulares.</p>
            </motion.div>

          </div>

          {/* VITRINE COM PRESCRIÇÕES CLÍNICAS DA DRA. NATALIA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: "/camas-paisdepet.jpg",
                name: "Camas Ortopédicas",
                badge: "Prescrição Postural",
                desc: "Alívio de pressão nas articulações e suporte de coluna para cães de todas as idades."
              },
              {
                img: "/racao-cao-paisdepet.jpg",
                name: "Rações Super Premium",
                badge: "Manejo Nutricional",
                desc: "Proteína nobre de alta absorção biológica, digestibilidade superior e livre de corantes."
              },
              {
                img: "/saches-racoes-biscoitos-gato-paisdepet.jpg",
                name: "Nutrição Felina",
                badge: "Saúde Renal Felina",
                desc: "Alimentação úmida nobre desenvolvida para estímulo diário de hidratação contínua."
              },
              {
                img: "/coleira-paisdepet.jpg",
                name: "Guias & Peitorais",
                badge: "Ergonomia de Passeio",
                desc: "Design que distribui a tração e libera as escápulas sem estrangular a traqueia."
              },
              {
                img: "/petisco-cao-paisdepet.jpg",
                name: "Petiscos Naturais",
                badge: "Reforço Positivo Puro",
                desc: "Ingredientes 100% desidratados a frio, sem sódio excessivo, aditivos químicos ou glúten."
              },
              {
                img: "/brinquedo-cao-paisdepet.jpg",
                name: "Brinquedos Atóxicos",
                badge: "Enriquecimento Sensorial",
                desc: "Borracha natural atóxica projetada para estímulo cognitivo e alívio de ansiedade."
              }
            ].map((prod) => (
              <div
                key={prod.name}
                className="p-5 rounded-3xl bg-white border border-[#2C1820]/10 text-left space-y-4 hover:border-[#FF6B00]/40 transition-all shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden aspect-square bg-[#FAF8F5] relative">
                    <img
                      src={prod.img}
                      alt={prod.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain p-4 transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF6B00] block">
                    {prod.badge}
                  </span>
                  <h4 className="text-base font-black text-[#2C1820] leading-tight">
                    {prod.name}
                  </h4>
                </div>
                <p className="text-sm text-[#2C1820]/80 leading-relaxed">
                  {prod.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SEÇÃO: DEPOIMENTOS REAIS (VÍDEOS 9:16 REELS • ZERO BORDAS • ZERO DUPLICATAS) */}
      {/* O VÍDEO DO GOLDEN RETRIEVER APARECE ESTREITAMENTE UMA ÚNICA VEZ AQUI     */}
      {/* ========================================================================= */}
      <section id="galeria-videos" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-white border-t border-[#2C1820]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-10 text-left">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div {...fadeInLeft} className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2E93]">
                Casos Reais & Depoimentos
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
                O acolhimento gravado e vivido por quem confia o seu <span className="text-[#FF2E93]">maior amor.</span>
              </h2>
            </motion.div>

            {/* CONTROLES DE NAVEGAÇÃO LATERAL DO CARROSSEL (WCAG 2.2 / LEI DE FITTS) */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                aria-label="Ver depoimento anterior à esquerda"
                className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#2C1820]/15 hover:border-[#FF2E93] text-[#2C1820] hover:text-[#FF2E93] flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E93]"
              >
                <BrandChevron className="w-5 h-5 rotate-90" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                aria-label="Ver próximo depoimento à direita"
                className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#2C1820]/15 hover:border-[#FF2E93] text-[#2C1820] hover:text-[#FF2E93] flex items-center justify-center shadow-xs transition-all active:scale-95 cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E93]"
              >
                <BrandChevron className="w-5 h-5 -rotate-90" />
              </button>
            </div>
          </div>

          {/* GALERIA HÍBRIDA ACESSÍVEL (CARROSSEL COM ARIA, SUPORTE A SWIPE E FOCO DE TECLADO) */}
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            onKeyDown={handleCarouselKeyDown}
            role="region"
            aria-label="Carrossel de Casos Reais e Depoimentos"
            aria-roledescription="carousel"
            aria-live="polite"
            tabIndex={0}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E93]/40 rounded-3xl"
          >
            {hybridTestimonials.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="snap-start shrink-0 w-[270px] sm:w-[310px] md:w-[330px]"
              >
                {item.type === "video" ? (
                  <BoutiqueVideoPlayer
                    src={item.src}
                    aspectRatio="aspect-[9/16]"
                    rounded="rounded-[2rem]"
                    objectFit="object-cover"
                    showAudioButton={true}
                    className="shadow-[0_15px_35px_rgba(44,24,32,0.07)]"
                  />
                ) : (
                  <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden bg-[#FAF8F5] shadow-[0_15px_35px_rgba(44,24,32,0.07)] select-none group">
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* INDICADOR VISUAL DISCRETO DE NAVEGAÇÃO LATERAL (PAGINAÇÃO W3C TABLIST WCAG 2.2) */}
          <div role="tablist" aria-label="Indicadores de slides do carrossel" className="flex items-center justify-center gap-2 pt-2">
            {hybridTestimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={carouselIndex === idx}
                aria-label={`Ir para depoimento ${idx + 1}`}
                onClick={() => {
                  if (carouselRef.current) {
                    carouselRef.current.scrollTo({ left: idx * 330, behavior: "smooth" });
                  }
                }}
                className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E93] ${
                  carouselIndex === idx
                    ? "w-8 h-2 bg-[#FF2E93]"
                    : "w-2 h-2 bg-[#2C1820]/20 hover:bg-[#2C1820]/40"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SEÇÃO: GOOGLE MAPS INTERATIVO & AVALIAÇÃO OFICIAL 4.9 GOOGLE MEU NEGÓCIO */}
      {/* ========================================================================= */}
      <section id="localizacao" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[#2C1820]/10 text-left overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div {...fadeInLeft} className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#84CC16]">
                Transparência & Proximidade
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
                Localização oficial & nota <span className="text-[#EA580C]">4.9 ★</span> verificada no Google.
              </h2>
            </motion.div>
            <motion.div {...fadeInRight} className="text-xs font-mono uppercase tracking-wider text-[#2C1820]/65 font-bold">
              Rua Silvestre Ferraz, 27 • Bairro Sagrada Família • BH
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* GOOGLE MAPS INTERATIVO EMBED */}
            <motion.div {...fadeInLeft} className="lg:col-span-7 rounded-[2rem] overflow-hidden border border-[#2C1820]/15 shadow-md h-[400px] lg:h-auto min-h-[380px] bg-white relative">
              <iframe
                title="Localização Pais de Pet no Google Maps"
                src="https://maps.google.com/maps?q=Rua+Silvestre+Ferraz,+27+-+Sagrada+Fam%C3%ADlia,+Belo+Horizonte+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </motion.div>

            {/* CARD DE AVALIAÇÕES E NOTA OFICIAL 4.9 GOOGLE */}
            <motion.div {...fadeInRight} className="lg:col-span-5 rounded-[2rem] bg-white border border-[#2C1820]/10 p-8 sm:p-10 flex flex-col justify-between space-y-8 text-left shadow-sm">
              
              <div className="space-y-6">
                
                {/* Selo Oficial Google Score 4.9 */}
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#FF2E93]/20 shadow-2xs">
                    <div className="flex items-center gap-1 text-amber-500" aria-label="5 de 5 estrelas">
                      {[...Array(5)].map((_, i) => (
                        <BrandStar key={i} className="w-5 h-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-black text-[#2C1820] leading-none block">4.9 ★</span>
                    <span className="text-xs font-mono uppercase font-bold text-[#FF2E93] block mt-1">Google Meu Negócio • Excelente</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-black text-[#2C1820] leading-snug">
                    Avaliações <span className="text-[#FF2E93]">100% autênticas</span> de tutores de Belo Horizonte.
                  </h3>
                  <p className="text-sm text-[#2C1820]/80 leading-relaxed">
                    Mais de uma centena de avaliações públicas no Google destacando a dedicação e paciência da Dra. Natalia Possas, o banho sem estresse com toalhas descartáveis e o atendimento acolhedor.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#84CC16]/30 space-y-1.5 text-xs text-[#2C1820]/85">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#84CC16] uppercase">
                    <BrandCheck className="w-4 h-4" />
                    <span>Horários & Telefone</span>
                  </div>
                  <p>Segunda a Sexta: 09h00 às 18h00</p>
                  <p>Sábados: 08h30 às 13h00</p>
                  <p className="pt-1 text-xs">
                    Telefone: <a href="tel:+5531983380139" className="hover:underline font-bold text-[#2C1820]">(31) 98338-0139</a>
                  </p>
                </div>

              </div>

              {/* Botões de Ação Direta */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pais+de+Pet+Rua+Silvestre+Ferraz+27+Sagrada+Fam%C3%ADlia+Belo+Horizonte+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-white hover:bg-[#FFF0F6] text-[#2C1820] font-black text-xs uppercase tracking-wider border border-[#FF2E93]/40 hover:border-[#FF2E93] transition-all shadow-xs group text-center min-h-[44px]"
                >
                  <BrandStar className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Ver Nota 4.9 e Avaliações no Google</span>
                  <BrandArrow className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <a
                  href="https://maps.google.com/?daddr=Rua+Silvestre+Ferraz,+27+-+Sagrada+Família,+Belo+Horizonte+-+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#84CC16] hover:bg-lime-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 text-center min-h-[44px]"
                >
                  <BrandPaw className="w-4 h-4" />
                  <span>Traçar Rota no Google Maps</span>
                  <BrandArrow className="w-4 h-4" />
                </a>
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. SEÇÃO: SISTEMA DE TRIAGEM PRÉ-CLÍNICA INTELIGENTE                     */}
      {/* ========================================================================= */}
      <section id="triagem" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-white border-t border-[#2C1820]/10 text-left overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <motion.div {...fadeInUp} className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#84CC16]/40 text-[#84CC16] font-mono text-xs font-bold uppercase tracking-wider shadow-2xs">
              <BrandCross className="w-3.5 h-3.5" />
              <span>Triagem Pré-Clínica Inteligente</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
              Facilite o acolhimento do seu pet <span className="text-[#65A30D]">antes mesmo de chegar à clínica.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#2C1820]/80">
              Responda em 3 etapas rápidas. A Dra. Natalia e nossa recepção preparam a sala sensorial, os feromônios e o protocolo ideal para o temperamento do seu filho.
            </p>
          </motion.div>

          {/* PAINEL INTERATIVO DE TRIAGEM */}
          <motion.div {...fadeInUp} className="bg-[#FAF8F5] rounded-[2rem] p-6 sm:p-10 border border-[#2C1820]/10 shadow-[0_20px_50px_rgba(44,24,32,0.04)] space-y-8">
            
            {/* BARRA DE PROGRESSO EM GRADIENTE DA MARCA */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#2C1820]/70">
                <span>Passo {triageStep} de 4 • Conclusão em menos de 1 minuto</span>
                <span>
                  {triageStep === 1 && "Espécie & Idade"}
                  {triageStep === 2 && "Objetivo ou Sintoma"}
                  {triageStep === 3 && "Comportamento & Sensibilidade"}
                  {triageStep === 4 && "Resumo Pré-Clínico Concluído"}
                </span>
              </div>
              <div
                role="progressbar"
                aria-valuenow={(triageStep / 4) * 100}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Progresso da triagem pré-clínica"
                className="h-2.5 w-full bg-white rounded-full overflow-hidden border border-[#84CC16]/25"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#FF2E93] via-[#FF6B00] to-[#84CC16] transition-all duration-500 rounded-full"
                  style={{ width: `${(triageStep / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* ETAPA 1: ESPÉCIE & IDADE */}
            {triageStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#2C1820]">
                    1. Qual é a espécie do seu pet?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C1820]/70">
                    Gatos e cães têm salas, feromônios e abordagens distintas na Pais de Pet.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPetSpecies("Cão")}
                    className={`p-5 rounded-2xl border text-left transition-all ${
                      petSpecies === "Cão"
                        ? "ring-2 ring-[#84CC16] bg-[#F4FBEA] border-[#84CC16] text-[#2C1820] font-black shadow-sm"
                        : "bg-white border-[#2C1820]/10 hover:border-[#84CC16]/50 text-[#2C1820]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider block opacity-70">Espécie</span>
                      {petSpecies === "Cão" && <BrandCheck className="w-4 h-4 text-[#84CC16]" />}
                    </div>
                    <span className="text-xl sm:text-2xl font-black block mt-1 text-[#2C1820]">Cachorro</span>
                    <span className="text-xs text-[#2C1820]/70 block mt-1">Acolhimento com difusor Adaptil</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPetSpecies("Gato")}
                    className={`p-5 rounded-2xl border text-left transition-all ${
                      petSpecies === "Gato"
                        ? "ring-2 ring-[#84CC16] bg-[#F4FBEA] border-[#84CC16] text-[#2C1820] font-black shadow-sm"
                        : "bg-white border-[#2C1820]/10 hover:border-[#84CC16]/50 text-[#2C1820]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider block opacity-70">Espécie</span>
                      {petSpecies === "Gato" && <BrandCheck className="w-4 h-4 text-[#84CC16]" />}
                    </div>
                    <span className="text-xl sm:text-2xl font-black block mt-1 text-[#2C1820]">Gato</span>
                    <span className="text-xs text-[#2C1820]/70 block mt-1">Acolhimento com difusor Feliway & Cat-Friendly</span>
                  </button>
                </div>

                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono font-bold text-[#2C1820] uppercase tracking-wider block">
                    Faixa etária aproximada:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { label: "Filhote", desc: "Menor de 1 ano", value: "Filhote (< 1 ano)" },
                      { label: "Adulto", desc: "1 a 7 anos", value: "Adulto (1 a 7 anos)" },
                      { label: "Sênior / Idoso", desc: "8 anos ou mais", value: "Idoso / Sênior (8+ anos)" }
                    ].map((age) => (
                      <button
                        key={age.value}
                        type="button"
                        onClick={() => setPetAge(age.value as any)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          petAge === age.value
                            ? "ring-2 ring-[#84CC16] bg-[#F4FBEA] border-[#84CC16] text-[#2C1820] font-black shadow-sm"
                            : "bg-white border-[#2C1820]/10 hover:border-[#84CC16]/40 text-[#2C1820]"
                        }`}
                      >
                        <span className="text-base font-black block">{age.label}</span>
                        <span className="text-xs text-[#2C1820]/70 block mt-0.5">{age.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={() => setTriageStep(2)}
                    className="px-8 py-3.5 rounded-full bg-[#84CC16] hover:bg-lime-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 min-h-[44px]"
                  >
                    Continuar para o Motivo
                  </button>
                </div>
              </div>
            )}

            {/* ETAPA 2: OBJETIVO OU SINTOMA */}
            {triageStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#2C1820]">
                    2. Qual é a necessidade principal do seu pet?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C1820]/70">
                    Selecione o serviço ou o sintoma que você deseja investigar.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { title: "Consulta Preventiva / Check-up", desc: "Exame geral calmo e sem pressa", tag: "Clínica" },
                    { title: "Vacinação Ética Importada", desc: "Cadeia de frio rigorosa e aplicação suave", tag: "Prevenção" },
                    { title: "Dermatologia, Coceira ou Alergia", desc: "Investigação detalhada de pele e ouvido", tag: "Especialidade" },
                    { title: "Sintoma Agudo ou Desconforto", desc: "Vômito, prostração, falta de apetite", tag: "Atenção" },
                    { title: "Banho com Toalha Descartável", desc: "Zero gaiolas e produtos dermocosméticos", tag: "Estética" },
                    { title: "Atendimento em Domicílio (BH)", desc: "Consulta no sofá de casa sem estresse", tag: "Home Care" },
                    { title: "Hospedagem & Acolhimento", desc: "Hospedagem afetuosa em ambiente familiar", tag: "Hotel" }
                  ].map((srv) => (
                    <button
                      key={srv.title}
                      type="button"
                      onClick={() => setPetService(srv.title)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        petService === srv.title
                          ? "ring-2 ring-[#FF2E93] bg-[#FFF0F6] border-[#FF2E93] text-[#2C1820] font-black shadow-sm"
                          : "bg-white border-[#2C1820]/10 hover:border-[#FF2E93]/40 text-[#2C1820]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase text-[#FF2E93]">{srv.tag}</span>
                        {petService === srv.title && <BrandCheck className="w-4 h-4 text-[#FF2E93]" />}
                      </div>
                      <span className="text-sm font-black block mt-1 text-[#2C1820]">{srv.title}</span>
                      <span className="text-xs text-[#2C1820]/75 block mt-0.5">{srv.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setTriageStep(1)}
                    className="px-6 py-3 rounded-full bg-white border border-[#2C1820]/20 text-[#2C1820] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF8F5] transition-all min-h-[44px]"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => setTriageStep(3)}
                    className="px-8 py-3.5 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 min-h-[44px]"
                  >
                    Continuar para o Comportamento
                  </button>
                </div>
              </div>
            )}

            {/* ETAPA 3: COMPORTAMENTO & SENSIBILIDADE */}
            {triageStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-[#2C1820]">
                    3. Como seu pet reage a visitas veterinárias?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C1820]/70">
                    Essa informação é essencial para a Dra. Natalia calibrar o ambiente antes de você chegar.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Calmo & Sociável",
                      desc: "Lida bem com novas pessoas, cheiros e aproximação carinhosa.",
                      value: "Calmo & Sociável"
                    },
                    {
                      title: "Sensível / Agitado",
                      desc: "Fica em alerta com sons bruscos ou movimentos rápidos.",
                      value: "Sensível / Agitado"
                    },
                    {
                      title: "Amedrontado / Traumatizado",
                      desc: "Entra em pânico, treme ou necessita de isolamento total de ruídos.",
                      value: "Amedrontado / Traumatizado"
                    }
                  ].map((beh) => (
                    <button
                      key={beh.value}
                      type="button"
                      onClick={() => setPetBehavior(beh.value as any)}
                      className={`p-5 rounded-2xl border text-left transition-all ${
                        petBehavior === beh.value
                          ? "ring-2 ring-[#FF6B00] bg-[#FFF7ED] border-[#FF6B00] text-[#2C1820] font-black shadow-sm scale-[1.01]"
                          : "bg-white border-[#2C1820]/10 hover:border-[#FF6B00]/40 text-[#2C1820]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase text-[#FF6B00]">Perfil</span>
                        {petBehavior === beh.value && <BrandCheck className="w-4 h-4 text-[#FF6B00]" />}
                      </div>
                      <span className="text-base font-black block mt-1.5 text-[#2C1820]">{beh.title}</span>
                      <span className="text-sm text-[#2C1820]/80 block mt-1 leading-relaxed">{beh.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setTriageStep(2)}
                    className="px-6 py-3 rounded-full bg-white border border-[#2C1820]/20 text-[#2C1820] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF8F5] transition-all min-h-[44px]"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => setTriageStep(4)}
                    className="px-8 py-3.5 rounded-full bg-[#FF6B00] hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 min-h-[44px]"
                  >
                    Ver Resumo & Enviar
                  </button>
                </div>
              </div>
            )}

            {/* ETAPA 4: RESUMO ESTRUTURADO & ENVIO AO WHATSAPP */}
            {triageStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#84CC16]">
                    Ficha Pré-Clínica Pronta
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#2C1820]">
                    Resumo da Triagem do seu Pet
                  </h3>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-[#84CC16]/30 space-y-4 shadow-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-[#2C1820]/10">
                    <div>
                      <span className="text-[11px] font-mono uppercase font-bold text-[#2C1820]/60 block">Paciente</span>
                      <span className="text-base font-black text-[#2C1820]">{petSpecies} ({petAge})</span>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase font-bold text-[#2C1820]/60 block">Objetivo Principal</span>
                      <span className="text-base font-black text-[#FF2E93]">{petService}</span>
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase font-bold text-[#2C1820]/60 block">Perfil Emocional</span>
                      <span className="text-base font-black text-[#FF6B00]">{petBehavior}</span>
                    </div>
                  </div>

                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-mono uppercase font-bold text-[#84CC16] block">
                      Protocolo Especial Preparado pela Dra. Natalia:
                    </span>
                    <p className="text-sm text-[#2C1820]/80 leading-relaxed">
                      {petSpecies === "Gato"
                        ? "Sala sensorial com difusor ativo de Feliway, iluminação indireta suave, consulta sem jalecos intimidadores e isolamento rigoroso de odores caninos."
                        : petBehavior === "Amedrontado / Traumatizado"
                        ? "Ambiente previamente aclimatado com Adaptil, recepção silenciosa reservada, zero gaiolas e acolhimento no ritmo de confiança do cão."
                        : "Consulta preventiva humanizada com toalha individual descartável, reforço positivo com petiscos nobres e exame completo sem pressa."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <a
                    href={`${whatsappUrl}?text=${encodeURIComponent(
                      `Olá, Dra. Natalia! Acabei de preencher a Triagem Pré-Clínica no portal da Pais de Pet:\n\n🐾 Pet: ${petSpecies} (${petAge})\n🩺 Serviço/Necessidade: ${petService}\n🧘 Comportamento: ${petBehavior}\n\nGostaria de verificar os horários disponíveis para atendimento na Rua Silvestre Ferraz (ou em domicílio).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 text-center min-h-[44px]"
                  >
                    <div className="w-6 h-6 rounded-full overflow-hidden p-[1px] bg-white shrink-0 shadow-2xs">
                      <img src="/foto-perfil-pais-de-pet.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <span>Enviar Triagem para Dra. Natalia no WhatsApp</span>
                    <BrandArrow className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setTriageStep(1)}
                    className="w-full sm:w-auto px-6 py-4 rounded-full bg-white border border-[#2C1820]/20 text-[#2C1820] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF8F5] transition-all text-center min-h-[44px]"
                  >
                    Refazer Triagem
                  </button>
                </div>
              </div>
            )}

          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. SEÇÃO: PERGUNTAS SINCERAS (FAQ EDITORIAL)                             */}
      {/* ========================================================================= */}
      <section id="faq" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[#2C1820]/10 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-12 text-left">
          
          <motion.div {...fadeInUp} className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2E93]">
              Transparência Sem Enrolação
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
              Dúvidas que todo pai e mãe de pet tem <span className="text-[#FF2E93]">antes de vir à clínica.</span>
            </h2>
          </motion.div>

          <div className="divide-y divide-[#2C1820]/10 border-y border-[#2C1820]/10">
            {faqData.map((item, index) => (
              <div key={item.id} className="py-6 sm:py-8">
                <button
                  type="button"
                  id={`faq-pergunta-${item.id}`}
                  aria-expanded={faqOpenIndex === index}
                  aria-controls={`faq-resposta-${item.id}`}
                  onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF2E93] rounded-xl p-2 -m-2"
                >
                  <span className="text-lg sm:text-xl font-black text-[#2C1820] group-hover:text-[#FF2E93] transition-colors">
                    {item.question}
                  </span>
                  <span className={`p-2 rounded-xl bg-white border border-[#2C1820]/15 transition-transform duration-300 shrink-0 ${faqOpenIndex === index ? "rotate-180 text-[#FF2E93]" : "text-[#2C1820]"}`}>
                    <BrandChevron className="w-4 h-4" />
                  </span>
                </button>

                <div
                  id={`faq-resposta-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-pergunta-${item.id}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    faqOpenIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                  style={{
                    height: faqOpenIndex === index ? "auto" : "0px",
                    opacity: faqOpenIndex === index ? 1 : 0,
                  }}
                >
                  <p className="pt-4 text-sm sm:text-base text-[#2C1820]/80 leading-relaxed max-w-3xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      </main>

      {/* ========================================================================= */}
      {/* 12. RODAPÉ DE LUXO EM GRADIENTE RADIANTE DA MARCA (ZERO PRETO / ZERO CINZA) */}
      {/* ========================================================================= */}
      <footer id="contato" className="bg-white border-t border-[#2C1820]/10 pt-20 pb-16 px-6 sm:px-12 lg:px-16 text-left">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2C1820]/10">
            
            {/* Coluna 1: Assinatura */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-[#FF2E93] via-[#FF6B00] to-[#84CC16] shadow-sm shrink-0">
                  <img src="/foto-perfil-pais-de-pet.jpg" alt="Pais de Pet" className="w-full h-full object-cover rounded-full bg-white" />
                </div>
                <div>
                  <h3 className="font-black text-2xl text-[#2C1820] tracking-tight">Pais de Pet</h3>
                  <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase block">Clínica & Pet Shop Boutique</span>
                </div>
              </div>

              <p className="text-sm text-[#2C1820]/80 leading-relaxed max-w-md">
                Criamos a Pais de Pet porque não aceitávamos mais ver animais tremendo de medo em consultórios frios ou enxugados com toalhas usadas em banhos coletivos. Aqui, seu filho é acolhido como membro da família.
              </p>

              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#84CC16]/40 text-xs font-mono font-bold text-[#2C1820]">
                <BrandCross className="w-3.5 h-3.5 text-[#84CC16]" />
                <span>Responsabilidade Técnica: Dra. Natalia Possas • CRMV-MG 20572</span>
              </div>
            </div>

            {/* Coluna 2: Localização & Horários */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF2E93] block">
                Localização & Atendimento
              </span>
              <div className="space-y-2 text-sm text-[#2C1820]/85">
                <p className="font-bold text-[#2C1820]">
                  Rua Silvestre Ferraz, 27 • Bairro Sagrada Família
                </p>
                <p className="text-xs font-mono text-[#2C1820]/70">
                  Belo Horizonte - MG • CEP 31030-120
                </p>
                <p className="pt-2 text-xs font-mono font-bold text-[#84CC16]">
                  Segunda a Sexta: 09h00 às 18h00
                </p>
                <p className="text-xs font-mono font-bold text-[#84CC16]">
                  Sábados: 08h30 às 13h00
                </p>
                <p className="pt-1 text-sm font-mono text-[#2C1820]">
                  Telefone: <a href="tel:+5531983380139" className="hover:underline font-bold text-[#2C1820]">(31) 98338-0139</a>
                </p>
              </div>
            </div>

            {/* Coluna 3: Ação Direta */}
            <div className="lg:col-span-3 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF6B00] block">
                Canais Oficiais
              </span>
              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider shadow-sm transition-all text-center min-h-[44px]"
                >
                  <img src="/foto-perfil-pais-de-pet.jpg" alt="Logo" className="w-5 h-5 rounded-full object-cover" />
                  <span>WhatsApp Oficial</span>
                </a>
                <a
                  href={clinicMetadata.contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#FAF8F5] hover:bg-white text-[#2C1820] font-bold text-xs uppercase tracking-wider border border-[#2C1820]/15 transition-all text-center min-h-[44px]"
                >
                  <BrandCatEar className="w-4 h-4 text-[#FF2E93]" />
                  <span>Instagram @petshoppaisdepet</span>
                </a>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#2C1820]/60">
            <span>© 2026 Pais de Pet • Todos os direitos reservados.</span>
            <span>Belo Horizonte - Minas Gerais</span>
          </div>

        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 13. BOTÃO FLUTUANTE EXCLUSIVO COM LOGOMARCA OFICIAL DA PAIS DE PET         */}
      {/* ========================================================================= */}
      <aside
        aria-label="Canal oficial WhatsApp"
        className="fixed bottom-6 right-6 z-40 transition-all duration-300 opacity-100 scale-100 pointer-events-auto"
      >
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative p-3.5 sm:p-4 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white shadow-xl shadow-[#FF2E93]/35 flex items-center justify-center transition-all group min-w-[48px] min-h-[48px]"
          aria-label="Falar com Dra. Natalia Possas no WhatsApp Oficial"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden p-[2px] bg-white shrink-0 shadow-xs">
            <img src="/foto-perfil-pais-de-pet.jpg" alt="Dra. Natalia Possas" className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform" />
          </div>
        </motion.a>
      </aside>

    </div>
  );
}