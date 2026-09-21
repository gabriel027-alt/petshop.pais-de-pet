"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { clinicMetadata } from "@/data/clinicMetadata";
import { faqData } from "@/data/faqData";
import BrandIntro from "@/components/BrandIntro";

// =============================================================================
// ELEMENTOS VISUAIS PROPRIETÁRIOS DA MARCA (ZERO ÍCONES GENÉRICOS DE TERCEIROS)
// =============================================================================

function BrandPaw({ className = "w-5 h-5", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
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
    <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 18C4 18 5 12 7 9C8.5 6.8 10 5 10 5C10 5 11 10 12 11C13 10 14 5 14 5C14 5 15.5 6.8 17 9C19 12 20 18 20 18" />
    </svg>
  );
}

function BrandArrow({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 13L13 3M13 3H6M13 3V10" />
    </svg>
  );
}

function BrandCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 8.5L6.5 12L13 4.5" />
    </svg>
  );
}

function BrandMenu({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
      <path d="M4 7H20M4 12H15M4 17H20" />
    </svg>
  );
}

function BrandClose({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className}>
      <path d="M6 6L18 18M6 18L18 6" />
    </svg>
  );
}

function BrandCross({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
      <path d="M6.5 2H9.5V6.5H14V9.5H9.5V14H6.5V9.5H2V6.5H6.5V2Z" />
    </svg>
  );
}

function BrandChevron({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 6L8 10L12 6" />
    </svg>
  );
}

function BrandStar({ className = "w-4 h-4", fill = "currentColor" }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill={fill} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}

function BrandSoundOff({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function BrandSoundOn({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
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
  rounded = "rounded-[2.2rem]",
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
          className={`absolute ${audioPosition === "bottom-right" ? "bottom-4 right-4" : "top-4 right-4"} z-20 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/92 hover:bg-white text-[#2C1820] shadow-md backdrop-blur-md transition-all active:scale-95 text-xs font-mono font-bold tracking-wide`}
          aria-label={isMuted ? "Ativar som do vídeo" : "Silenciar áudio do vídeo"}
        >
          {isMuted ? (
            <>
              <BrandSoundOff className="w-3.5 h-3.5 text-[#FF2E93]" />
              <span className="text-[10px] uppercase font-bold text-[#2C1820]">Ativar Som</span>
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
  // 1º: Vídeo de destaque principal (antigo 3º na sequência, exclusivo para esta seção)
  {
    type: "video",
    id: "depoimento-destaque-lhasa",
    src: "/não-tem-com-quem-deixar-paisdepet.mp4"
  },
  // Demais vídeos de depoimento canino (sem duplicata e sem o gatinho)
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
  // Fotos reais de relatos e avaliações salvas na pasta public
  {
    type: "image",
    id: "foto-depoimento-1",
    src: "/depoimento-paisdepet1.jpeg",
    alt: "Relato real de tutor Pais de Pet"
  },
  {
    type: "image",
    id: "foto-depoimento-2",
    src: "/depoimento-paisdepet2.jpg",
    alt: "Relato real de tutor Pais de Pet"
  },
  {
    type: "image",
    id: "foto-depoimento-3",
    src: "/depoimento-paisdepet3.jpg",
    alt: "Relato real de tutor Pais de Pet"
  },
  {
    type: "image",
    id: "foto-depoimento-5",
    src: "/depoimento-paisdepet5.jpg",
    alt: "Relato real de tutor Pais de Pet"
  },
  {
    type: "image",
    id: "foto-depoimento-6",
    src: "/depoimento-paisdepet6.jpg",
    alt: "Relato real de tutor Pais de Pet"
  }
];

export default function PaisDePetBoutiquePortal() {
  const whatsappUrl = clinicMetadata.contacts.whatsappUrl;
  const containerRef = useRef<HTMLDivElement>(null);

  // Animação de Scroll e Paralaxe Profissional
  const { scrollY, scrollYProgress } = useScroll();
  const heroVideoY = useTransform(scrollY, [0, 800], [0, 100]);
  const heroScale = useTransform(scrollY, [0, 800], [1.0, 1.05]);

  // Sistema de Patinhas Flutuantes em SVG com Paralaxe e Fade
  const pawLeft1Y = useTransform(scrollYProgress, [0, 1], [0, 480]);
  const pawLeft2Y = useTransform(scrollYProgress, [0, 1], [80, -360]);
  const pawLeft3Y = useTransform(scrollYProgress, [0, 1], [0, 320]);
  const pawRight1Y = useTransform(scrollYProgress, [0, 1], [60, -420]);
  const pawRight2Y = useTransform(scrollYProgress, [0, 1], [0, 520]);
  const pawRight3Y = useTransform(scrollYProgress, [0, 1], [140, -280]);

  const pawRotate1 = useTransform(scrollYProgress, [0, 1], [-20, 25]);
  const pawRotate2 = useTransform(scrollYProgress, [0, 1], [15, -30]);

  // Estados de Interface
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

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
    <div ref={containerRef} className="min-h-screen bg-[#FAF8F5] text-[#2C1820] font-sans selection:bg-[#84CC16] selection:text-[#2C1820] relative overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* VÍDEO DE INTRODUÇÃO DA MARCA (8S COM AUTOPLAY E TRANSIÇÃO SUAVE)          */}
      {/* ========================================================================= */}
      <BrandIntro />

      {/* ========================================================================= */}
      {/* SISTEMA DE PATINHAS FLUTUANTES EM SVG COM PARALAXE E FADE NO SCROLL       */}
      {/* ========================================================================= */}
      <div className="fixed inset-y-0 left-2 sm:left-4 lg:left-8 z-10 pointer-events-none hidden md:flex flex-col justify-around py-32 select-none">
        <motion.div
          style={{ y: pawLeft1Y, rotate: pawRotate1 }}
          className="text-[#FF2E93] opacity-25"
        >
          <BrandPaw className="w-10 h-10" />
        </motion.div>
        <motion.div
          style={{ y: pawLeft2Y, rotate: pawRotate2 }}
          className="text-[#84CC16] opacity-20"
        >
          <BrandCatEar className="w-11 h-11" />
        </motion.div>
        <motion.div
          style={{ y: pawLeft3Y, rotate: pawRotate1 }}
          className="text-[#FF6B00] opacity-25"
        >
          <BrandPaw className="w-9 h-9" />
        </motion.div>
      </div>

      <div className="fixed inset-y-0 right-2 sm:right-4 lg:right-8 z-10 pointer-events-none hidden md:flex flex-col justify-around py-36 select-none">
        <motion.div
          style={{ y: pawRight1Y, rotate: pawRotate2 }}
          className="text-[#84CC16] opacity-25"
        >
          <BrandCatEar className="w-11 h-11" />
        </motion.div>
        <motion.div
          style={{ y: pawRight2Y, rotate: pawRotate1 }}
          className="text-[#FF2E93] opacity-20"
        >
          <BrandPaw className="w-10 h-10" />
        </motion.div>
        <motion.div
          style={{ y: pawRight3Y, rotate: pawRotate2 }}
          className="text-[#FF6B00] opacity-25"
        >
          <BrandPaw className="w-9 h-9" />
        </motion.div>
      </div>

      {/* ========================================================================= */}
      {/* 1. CABEÇALHO BOUTIQUE COM SUMÁRIO SIMÉTRICO E ESPAÇAMENTOS GENEROSOS      */}
      {/* ========================================================================= */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#FAF8F5]/92 backdrop-blur-xl border-b border-[#2C1820]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 sm:h-24 flex items-center justify-between gap-6">
          
          {/* Assinatura Oficial da Clínica */}
          <a href="#" className="flex items-center gap-3.5 group text-left shrink-0">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-[2px] bg-gradient-to-tr from-[#FF2E93] via-[#FF6B00] to-[#84CC16] shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/foto-perfil-pais-de-pet.jpg"
                alt="Pais de Pet"
                className="w-full h-full object-cover rounded-full bg-white"
              />
            </div>
            <div>
              <span className="font-black text-xl sm:text-2xl text-[#2C1820] tracking-tight block leading-none">
                Pais de Pet
              </span>
              <span className="text-[11px] font-mono tracking-widest text-[#FF6B00] uppercase font-bold block mt-1">
                Dra. Natalia Possas • CRMV-MG 20572
              </span>
            </div>
          </a>

          {/* Navegação Desktop Simétrica e Generosamente Espaçada */}
          <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-4 text-xs font-bold uppercase tracking-wider text-[#2C1820]/80">
            <a href="#filosofia" className="px-3.5 py-2 rounded-full hover:bg-white hover:text-[#FF2E93] transition-all">
              O Refúgio
            </a>
            <a href="#consultorio" className="px-3.5 py-2 rounded-full hover:bg-white hover:text-[#84CC16] transition-all">
              Medicina Preventiva
            </a>
            <a href="#galeria-videos" className="px-3.5 py-2 rounded-full hover:bg-white hover:text-[#FF2E93] transition-all">
              Depoimentos Reais
            </a>
            <a href="#localizacao" className="px-3.5 py-2 rounded-full hover:bg-white hover:text-[#FF6B00] transition-all">
              Localização & Google 4.9
            </a>
            <a href="#triagem" className="px-3.5 py-2 rounded-full hover:bg-white hover:text-[#84CC16] transition-all">
              Triagem
            </a>
          </nav>

          {/* Ação Oficial com Logomarca + Botão de Menu Detalhado */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-3 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 group"
            >
              <div className="w-6 h-6 rounded-full overflow-hidden p-[1px] bg-white shrink-0 shadow-2xs">
                <img src="/foto-perfil-pais-de-pet.jpg" alt="Dra. Natalia Possas" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="hidden sm:inline">WhatsApp Dra. Natalia</span>
              <span className="sm:hidden">WhatsApp</span>
              <BrandArrow className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              type="button"
              onClick={() => setSideMenuOpen(!sideMenuOpen)}
              className="p-3 rounded-2xl bg-white text-[#2C1820] border border-[#2C1820]/15 hover:border-[#FF2E93] transition-all shadow-2xs"
              aria-label="Abrir Menu de Navegação"
            >
              {sideMenuOpen ? <BrandClose className="w-5 h-5 text-[#FF2E93]" /> : <BrandMenu className="w-5 h-5 text-[#2C1820]" />}
            </button>
          </div>

        </div>
      </header>

      {/* ========================================================================= */}
      {/* MENU DE NAVEGAÇÃO LATERAL (DRAWER SUMÁRIO EXPANSÍVEL)                     */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {sideMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSideMenuOpen(false)}
              className="fixed inset-0 z-50 bg-[#2C1820]/30 backdrop-blur-xs"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[440px] z-50 bg-[#FAF8F5] border-l border-[#2C1820]/10 p-8 sm:p-12 overflow-y-auto flex flex-col justify-between shadow-2xl"
            >
              <div className="space-y-8">
                <div className="flex items-center justify-between pb-6 border-b border-[#2C1820]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-[#FF2E93] to-[#84CC16]">
                      <img src="/foto-perfil-pais-de-pet.jpg" alt="Pais de Pet" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div>
                      <span className="font-black text-lg text-[#2C1820] block leading-none">Pais de Pet</span>
                      <span className="text-[10px] font-mono uppercase text-[#FF6B00] font-bold">Sagrada Família • BH</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSideMenuOpen(false)}
                    className="p-2 rounded-xl text-[#2C1820] hover:bg-white transition-colors"
                  >
                    <BrandClose className="w-6 h-6" />
                  </button>
                </div>

                <div className="space-y-1 text-left">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2E93] block">
                    Sumário Completo
                  </span>
                  <nav className="divide-y divide-[#2C1820]/8 text-base font-black text-[#2C1820]">
                    {[
                      { href: "#filosofia", label: "O Refúgio Fear-Free", desc: "Isolamento de ruídos e acolhimento sensorial" },
                      { href: "#consultorio", label: "Medicina & Vacinação Ética", desc: "Aplicação suave e rastreabilidade total" },
                      { href: "#banho", label: "Estética com Toalha Descartável", desc: "Zero gaiolas e toalhas individuais esterilizadas" },
                      { href: "#homecare", label: "Atendimento no Sofá da sua Casa", desc: "Home care veterinário nos bairros de BH" },
                      { href: "#boutique", label: "Boutique & Nutrição Clínica", desc: "Rações selecionadas e peças anatômicas" },
                      { href: "#galeria-videos", label: "Depoimentos Reais em Vídeo", desc: "Depoimentos autênticos de tutores em vídeo puro" },
                      { href: "#localizacao", label: "Localização & Google 4.9", desc: "Mapa interativo e perfil verificado com nota 4.9" },
                      { href: "#triagem", label: "Triagem Pré-Clínica Inteligente", desc: "Prepare a consulta da Dra. Natalia antes de chegar" },
                      { href: "#faq", label: "Dúvidas Frequentes", desc: "Convenios, toalhas e endereço no Sagrada Família" }
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
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-3.5 rounded-full bg-[#FF2E93] text-white font-black text-xs uppercase tracking-wider"
                >
                  <img src="/foto-perfil-pais-de-pet.jpg" alt="Logo" className="w-5 h-5 rounded-full object-cover" />
                  <span>Falar no WhatsApp Oficial</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* 2. HERO CINEMATOGRÁFICO COM VÍDEO EM AUTOPLAY E ÁUDIO OPCIONAL           */}
      {/* ========================================================================= */}
      <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center pt-28 pb-20 sm:pt-36 sm:pb-28 px-4 sm:px-8 lg:px-16 overflow-hidden">
        
        {/* VÍDEO EM LARGURA TOTAL COM CONTROLE E PROPORÇÃO SUAVE */}
        <motion.div
          style={{ y: heroVideoY, scale: heroScale }}
          className="absolute inset-0 w-full h-full"
        >
          <BoutiqueVideoPlayer
            src="/video-apresentação-por-dentro-paisdepet.mp4"
            aspectRatio="aspect-auto"
            rounded="rounded-none"
            objectFit="object-cover"
            className="w-full h-full absolute inset-0"
            audioPosition="top-right"
          />
          {/* Camada Nobre em Off-White Translúcida para Contraste Impecável */}
          <div className="absolute inset-0 bg-[#FAF8F5]/80 backdrop-blur-[1px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent pointer-events-none" />
        </motion.div>

        {/* CONTAINER EDITORIAL COM VIDRO FOSCO E CONTRASTE ABSOLUTO */}
        <div className="max-w-7xl mx-auto w-full relative z-20 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl xl:max-w-4xl p-8 sm:p-12 lg:p-14 rounded-[2.5rem] lg:rounded-[3rem] bg-white/94 backdrop-blur-2xl border border-white/90 shadow-[0_25px_60px_rgba(44,24,32,0.07)] space-y-8 text-left"
          >
            
            {/* Responsabilidade Técnica & Localização */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-[#FAF8F5] border border-[#84CC16]/50">
              <BrandCross className="w-3.5 h-3.5 text-[#84CC16]" />
              <span className="text-xs font-mono font-bold text-[#2C1820] uppercase tracking-wider">
                Sagrada Família • Rua Silvestre Ferraz, 27 • BH
              </span>
            </div>

            {/* Título Principal Escultural */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[66px] font-black tracking-tight text-[#2C1820] leading-[1.04]">
              A gente sabe o que passa no seu coração quando ele{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2E93] via-[#FF6B00] to-[#84CC16]">
                treme antes de entrar no veterinário.
              </span>
            </h1>

            {/* Subtítulo Empático */}
            <p className="text-base sm:text-xl lg:text-2xl text-[#2C1820]/90 font-normal leading-relaxed">
              Aqui, nenhuma porta bate, nenhum cão late na orelha do seu gato, e nenhuma consulta dura 15 minutos. Criamos uma clínica onde o seu pet entra sem medo e você sai com o coração em paz. Sob o cuidado médico da{" "}
              <strong className="font-bold text-[#FF6B00]">Dra. Natalia Possas (CRMV-MG 20572)</strong>.
            </p>

            {/* Ações Oficiais com a Logo da Clínica */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 group text-center"
              >
                <div className="w-7 h-7 rounded-full overflow-hidden p-[1.5px] bg-white shrink-0 shadow-2xs">
                  <img src="/foto-perfil-pais-de-pet.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
                </div>
                <span>Conversar com a Dra. Natalia</span>
                <BrandArrow className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href="#triagem"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white hover:bg-[#FAF8F5] text-[#2C1820] font-black text-xs uppercase tracking-wider border border-[#2C1820]/15 hover:border-[#84CC16] transition-all text-center"
              >
                <BrandPaw className="w-4 h-4 text-[#84CC16]" />
                <span>Iniciar Triagem Pré-Clínica</span>
              </a>
            </div>

            {/* Pilares com Elementos Visuais Próprios */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#2C1820]/10 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-[#84CC16]/15 text-[#84CC16]">
                  <BrandCheck className="w-3.5 h-3.5" />
                </span>
                <span className="font-bold text-[#2C1820]">100% Toalhas Descartáveis</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-[#FF2E93]/15 text-[#FF2E93]">
                  <BrandCatEar className="w-3.5 h-3.5" />
                </span>
                <span className="font-bold text-[#2C1820]">Manejo Cat-Friendly</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="p-1.5 rounded-lg bg-[#FF6B00]/15 text-[#FF6B00]">
                  <BrandCross className="w-3.5 h-3.5" />
                </span>
                <span className="font-bold text-[#2C1820]">Credenciada Petlove</span>
              </div>
            </div>

          </motion.div>
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
                Medicina sem contenção forçada. Consultório sem cheiro de medo.
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
                rounded="rounded-[2.5rem]"
                objectFit="object-cover"
                showAudioButton={true}
              />
            </motion.div>

            <motion.div {...fadeInRight} className="lg:col-span-7 rounded-[2.5rem] bg-[#F4FBEA] border border-[#84CC16]/30 p-8 sm:p-12 space-y-8 text-left shadow-xs flex flex-col justify-between">
              <div className="space-y-6">
                <span className="text-xs font-mono uppercase text-[#84CC16] font-bold">Arquitetura Sensorial</span>
                <h3 className="text-2xl sm:text-4xl font-black text-[#2C1820] leading-tight">
                  Por que cães e gatos não se cruzam nem sentem o cheiro um do outro aqui?
                </h3>
                <p className="text-base text-[#2C1820]/85 leading-relaxed">
                  Gatos são territorialistas e se estressam com odores caninos. Nós desenvolvemos fluxos separados, desinfecção enzimática sem cloro e difusores contínuos de Feliway e Adaptil.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-[#84CC16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#84CC16]">
                    <BrandPaw className="w-4 h-4" />
                    <span>Atendimento com Hora Marcada</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2C1820]/75">
                    Intervalos generosos entre pacientes para garantir que a recepção esteja sempre vazia e silenciosa quando você chegar.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#84CC16]/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#84CC16]">
                    <BrandCatEar className="w-4 h-4" />
                    <span>Aclimatação sem Mesa Fria</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2C1820]/75">
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
      <section id="consultorio" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#F4FBEA] border-t border-[#84CC16]/20 overflow-hidden">
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
                Uma picadinha que ele nem percebe. Vacinas importadas com cadeia de frio viva.
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
                <div key={item.title} className="p-4 rounded-2xl bg-white border border-[#84CC16]/30 flex items-start gap-3.5">
                  <span className="p-1 rounded-lg bg-[#84CC16]/20 text-[#84CC16] mt-0.5 shrink-0">
                    <BrandCheck className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-black text-[#2C1820]">{item.title}</h4>
                    <p className="text-xs text-[#2C1820]/75 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`${whatsappUrl}?text=${encodeURIComponent("Olá, Dra. Natalia! Gostaria de consultar o protocolo vacinal do meu pet.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#84CC16] hover:bg-lime-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
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
      <section id="banho" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#FFF0F6] border-t border-[#FF2E93]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left">
            <motion.div {...fadeInLeft} className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2E93]">
                Estética Consciente
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
                Você enxugaria o rosto com a toalha usada de outro desconhecido? Nós também não.
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
                rounded="rounded-[2.5rem]"
                objectFit="object-cover"
                showAudioButton={true}
              />
            </motion.div>

            <motion.div {...fadeInRight} className="lg:col-span-7 space-y-6 text-left">
              <div className="p-6 rounded-3xl bg-white border border-[#FF2E93]/25 space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-[#FF2E93]">Zero Gaiolas de Espera</span>
                <p className="text-xs sm:text-sm text-[#2C1820]/85 leading-relaxed">
                  Seu cão não fica trancado em gaiolas de metal esperando a vez. O horário é exclusivo: ele chega, toma o banho relaxante, é seco com calma e já vai para os seus braços.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-[#FF2E93]/25 space-y-3">
                <span className="text-xs font-mono font-bold uppercase text-[#FF2E93]">Água na Temperatura Corporal</span>
                <p className="text-xs sm:text-sm text-[#2C1820]/85 leading-relaxed">
                  Temperatura constante a 38°C para evitar choque térmico, além de dermocosméticos hipoalergênicos e secadores com atenuação acústica.
                </p>
              </div>

              <a
                href={`${whatsappUrl}?text=${encodeURIComponent("Olá! Gostaria de agendar um banho com toalha descartável para o meu pet.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
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
      <section id="homecare" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#FFF7ED] border-t border-[#FF6B00]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div {...fadeInLeft} className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
              Home Care em Belo Horizonte
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
              O consultório no sofá da sua sala. Sem trânsito, sem caixinha de transporte.
            </h2>
            <p className="text-base sm:text-lg text-[#2C1820]/85 leading-relaxed">
              Para gatos que entram em pânico com o carro, cães idosos com dor articular ou tutores com rotina apertada. A Dra. Natalia vai até a sua residência com kit clínico esterilizado completo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#FF6B00]/30">
                <span className="text-xs font-mono uppercase text-[#FF6B00] font-bold block">Bairros de Atendimento</span>
                <span className="text-sm font-black text-[#2C1820] block mt-1">Sagrada Família, Floresta, Santa Tereza, Cidade Nova, Horto e Silveira.</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#FF6B00]/30">
                <span className="text-xs font-mono uppercase text-[#FF6B00] font-bold block">Procedimentos em Casa</span>
                <span className="text-sm font-black text-[#2C1820] block mt-1">Exames de sangue, vacinas importadas, curativos e avaliação geriátrica.</span>
              </div>
            </div>

            <a
              href={`${whatsappUrl}?text=${encodeURIComponent("Olá, Dra. Natalia! Gostaria de agendar um atendimento veterinário no sofá da minha casa em BH.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FF6B00] hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95"
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
              rounded="rounded-[2.5rem]"
              objectFit="object-cover"
              showAudioButton={true}
            />
          </motion.div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. SEÇÃO: BOUTIQUE & NUTRIÇÃO PREVENTIVA                                  */}
      {/* ========================================================================= */}
      <section id="boutique" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[#FF6B00]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left">
            <motion.div {...fadeInLeft} className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF6B00]">
                Boutique Farmácia & Nutrição
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
                Peças que aquecem sem prender o movimento. Ração de verdade.
              </h2>
            </motion.div>
            <motion.div {...fadeInRight} className="max-w-md text-sm sm:text-base text-[#2C1820]/80 leading-relaxed">
              Curadoria médica da Dra. Natalia: nada de roupas que pinicam, petiscos cheios de corantes ou rações com subprodutos tóxicos.
            </motion.div>
          </div>

          {/* 3 VÍDEOS VERTICAIS 9:16 INSTAGRAM REELS (SEM BORDAS ARTIFICIAIS) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <motion.div {...fadeInLeft} className="rounded-[2.5rem] bg-white border border-[#FF6B00]/25 p-5 space-y-4 text-left shadow-xs">
              <BoutiqueVideoPlayer
                src="/colocando-roupa-de-frio-em-pet-paisdepet.mp4"
                aspectRatio="aspect-[9/16]"
                rounded="rounded-[2rem]"
                objectFit="object-cover"
                showAudioButton={true}
              />
              <h4 className="text-base font-black text-[#2C1820]">Moletom Térmico Anatômico</h4>
              <p className="text-xs text-[#2C1820]/75">Design com corte que libera as patas dianteiras e não aperta a traqueia.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="rounded-[2.5rem] bg-white border border-[#84CC16]/30 p-5 space-y-4 text-left shadow-xs">
              <BoutiqueVideoPlayer
                src="/preparado-para-ofrio-paisdepet.mp4"
                aspectRatio="aspect-[9/16]"
                rounded="rounded-[2rem]"
                objectFit="object-cover"
                showAudioButton={true}
              />
              <h4 className="text-base font-black text-[#2C1820]">Proteção de Inverno para Idosos</h4>
              <p className="text-xs text-[#2C1820]/75">Manutenção da temperatura para cães com artrose e dores articulares.</p>
            </motion.div>

            <motion.div {...fadeInRight} className="rounded-[2.5rem] bg-white border border-[#FF2E93]/25 p-5 space-y-4 text-left shadow-xs">
              <BoutiqueVideoPlayer
                src="/saches-paisdepet.mp4"
                aspectRatio="aspect-[9/16]"
                rounded="rounded-[2rem]"
                objectFit="object-cover"
                showAudioButton={true}
              />
              <h4 className="text-base font-black text-[#2C1820]">Hidratação Felina & Sachês Nobres</h4>
              <p className="text-xs text-[#2C1820]/75">Prevenção renal para gatos através de alimentação úmida com alta digestibilidade.</p>
            </motion.div>

          </div>

          {/* VITRINE COM AS FOTOS REAIS DA LOJA */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { img: "/camas-paisdepet.jpg", name: "Camas Ortopédicas", category: "Conforto" },
              { img: "/racao-cao-paisdepet.jpg", name: "Rações Super Premium", category: "Nutrição Canina" },
              { img: "/saches-racoes-biscoitos-gato-paisdepet.jpg", name: "Nutrição Felina", category: "Saúde Renal" },
              { img: "/coleira-paisdepet.jpg", name: "Guias & Peitorais", category: "Passeio Suave" },
              { img: "/petisco-cao-paisdepet.jpg", name: "Petiscos Naturais", category: "Reforço Positivo" },
              { img: "/brinquedo-cao-paisdepet.jpg", name: "Brinquedos Atóxicos", category: "Enriquecimento" }
            ].map((prod) => (
              <div key={prod.name} className="p-3 rounded-2xl bg-white border border-[#2C1820]/10 text-left space-y-2 hover:border-[#FF6B00] transition-colors">
                <div className="rounded-xl overflow-hidden aspect-square bg-[#FAF8F5]">
                  <img src={prod.img} alt={prod.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#FF6B00] block">{prod.category}</span>
                <h5 className="text-xs font-black text-[#2C1820] leading-tight">{prod.name}</h5>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. SEÇÃO: DEPOIMENTOS REAIS (VÍDEOS 9:16 REELS • ZERO BORDAS • ZERO DUPLICATAS) */}
      {/* O VÍDEO DO GOLDEN RETRIEVER APARECE ESTREITAMENTE UMA ÚNICA VEZ AQUI     */}
      {/* ========================================================================= */}
      <section id="galeria-videos" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[#FF2E93]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12 text-left">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div {...fadeInLeft} className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2E93]">
                Casos Reais & Depoimentos
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
                O acolhimento gravado e vivido por quem confia o seu maior amor.
              </h2>
            </motion.div>
          </div>

          {/* GALERIA HÍBRIDA (VÍDEOS 9:16 EM AUTOPLAY & FOTOS 9:16 COM ZOOM SUAVE NO HOVER) */}
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing">
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
                    rounded="rounded-[2.5rem]"
                    objectFit="object-cover"
                    showAudioButton={true}
                    className="shadow-[0_15px_35px_rgba(44,24,32,0.07)]"
                  />
                ) : (
                  <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-[#FAF8F5] shadow-[0_15px_35px_rgba(44,24,32,0.07)] select-none group">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. SEÇÃO: GOOGLE MAPS INTERATIVO & AVALIAÇÃO OFICIAL 4.9 GOOGLE MEU NEGÓCIO */}
      {/* ========================================================================= */}
      <section id="localizacao" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-white border-t border-[#84CC16]/20 text-left overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div {...fadeInLeft} className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#84CC16]">
                Transparência & Proximidade
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
                Localização oficial & nota 4.9 ★ verificada no Google.
              </h2>
            </motion.div>
            <motion.div {...fadeInRight} className="text-xs font-mono uppercase tracking-wider text-[#2C1820]/65 font-bold">
              Rua Silvestre Ferraz, 27 • Bairro Sagrada Família • BH
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* GOOGLE MAPS INTERATIVO EMBED */}
            <motion.div {...fadeInLeft} className="lg:col-span-7 rounded-[2.5rem] overflow-hidden border border-[#84CC16]/30 shadow-md h-[400px] lg:h-auto min-h-[380px] bg-[#FAF8F5] relative">
              <iframe
                title="Localização Pais de Pet no Google Maps"
                src="https://maps.google.com/maps?q=Rua+Silvestre+Ferraz,+27+-+Sagrada+Fam%C3%ADlia,+Belo+Horizonte+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </motion.div>

            {/* CARD DE AVALIAÇÕES E NOTA OFICIAL 4.9 GOOGLE */}
            <motion.div {...fadeInRight} className="lg:col-span-5 rounded-[2.5rem] bg-[#FAF8F5] border border-[#FF2E93]/20 p-8 sm:p-10 flex flex-col justify-between space-y-8 text-left shadow-sm">
              
              <div className="space-y-6">
                
                {/* Selo Oficial Google Score 4.9 */}
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-2xl bg-white border border-[#FF2E93]/20 shadow-xs">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <BrandStar key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
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
                    Avaliações 100% autênticas de tutores de Belo Horizonte.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2C1820]/80 leading-relaxed">
                    Mais de uma centena de avaliações públicas no Google destacando a dedicação e paciência da Dra. Natalia Possas, o banho sem estresse com toalhas descartáveis e o atendimento acolhedor.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#84CC16]/30 space-y-1.5 text-xs text-[#2C1820]/85">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#84CC16] uppercase">
                    <BrandCheck className="w-4 h-4" />
                    <span>Horários de Atendimento</span>
                  </div>
                  <p>Segunda a Sexta: 09h00 às 18h00</p>
                  <p>Sábados: 08h30 às 13h00</p>
                </div>

              </div>

              {/* Botões de Ação Direta */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pais+de+Pet+Rua+Silvestre+Ferraz+27+Sagrada+Fam%C3%ADlia+Belo+Horizonte+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-white hover:bg-[#FFF0F6] text-[#2C1820] font-black text-xs uppercase tracking-wider border border-[#FF2E93]/40 hover:border-[#FF2E93] transition-all shadow-xs group text-center"
                >
                  <BrandStar className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Ver Nota 4.9 e Avaliações no Google</span>
                  <BrandArrow className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Rua+Silvestre+Ferraz+27+Sagrada+Fam%C3%ADlia+Belo+Horizonte+MG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#84CC16] hover:bg-lime-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 text-center"
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
      <section id="triagem" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#F4FBEA]/60 border-t border-[#84CC16]/25 text-left overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <motion.div {...fadeInUp} className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#84CC16]/40 text-[#84CC16] font-mono text-xs font-bold uppercase tracking-wider shadow-2xs">
              <BrandCross className="w-3.5 h-3.5" />
              <span>Triagem Pré-Clínica Inteligente</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
              Facilite o acolhimento do seu pet antes mesmo de chegar à clínica.
            </h2>
            <p className="text-base sm:text-lg text-[#2C1820]/80">
              Responda em 3 etapas rápidas. A Dra. Natalia e nossa recepção preparam a sala sensorial, os feromônios e o protocolo ideal para o temperamento do seu filho.
            </p>
          </motion.div>

          {/* PAINEL INTERATIVO DE TRIAGEM */}
          <motion.div {...fadeInUp} className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-[#84CC16]/30 shadow-[0_20px_50px_rgba(44,24,32,0.06)] space-y-8">
            
            {/* BARRA DE PROGRESSO EM GRADIENTE DA MARCA */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#2C1820]/70">
                <span>Passo {triageStep} de 4</span>
                <span>
                  {triageStep === 1 && "Espécie & Idade"}
                  {triageStep === 2 && "Objetivo ou Sintoma"}
                  {triageStep === 3 && "Comportamento & Sensibilidade"}
                  {triageStep === 4 && "Resumo Pré-Clínico Concluído"}
                </span>
              </div>
              <div className="h-2 w-full bg-[#FAF8F5] rounded-full overflow-hidden border border-[#84CC16]/20">
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
                        ? "bg-[#FFF7ED] border-[#FF6B00] text-[#FF6B00] font-bold shadow-xs"
                        : "bg-[#FAF8F5] border-transparent hover:border-[#FF6B00]/40 text-[#2C1820]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider block opacity-70">Espécie</span>
                      {petSpecies === "Cão" && <BrandCheck className="w-4 h-4 text-[#FF6B00]" />}
                    </div>
                    <span className="text-xl sm:text-2xl font-black block mt-1 text-[#2C1820]">Cachorro</span>
                    <span className="text-xs text-[#2C1820]/70 block mt-1">Acolhimento com difusor Adaptil</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPetSpecies("Gato")}
                    className={`p-5 rounded-2xl border text-left transition-all ${
                      petSpecies === "Gato"
                        ? "bg-[#FFF0F6] border-[#FF2E93] text-[#FF2E93] font-bold shadow-xs"
                        : "bg-[#FAF8F5] border-transparent hover:border-[#FF2E93]/40 text-[#2C1820]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider block opacity-70">Espécie</span>
                      {petSpecies === "Gato" && <BrandCheck className="w-4 h-4 text-[#FF2E93]" />}
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
                            ? "bg-[#F4FBEA] border-[#84CC16] text-[#2C1820] font-bold shadow-xs"
                            : "bg-[#FAF8F5] border-transparent hover:border-[#84CC16]/30 text-[#2C1820]"
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
                    className="px-8 py-3.5 rounded-full bg-[#84CC16] hover:bg-lime-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
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
                          ? "bg-[#FFF0F6] border-[#FF2E93] text-[#2C1820] font-bold shadow-xs"
                          : "bg-[#FAF8F5] border-transparent hover:border-[#FF2E93]/30 text-[#2C1820]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase text-[#FF2E93]">{srv.tag}</span>
                        {petService === srv.title && <BrandCheck className="w-4 h-4 text-[#FF2E93]" />}
                      </div>
                      <span className="text-sm font-black block mt-1 text-[#2C1820]">{srv.title}</span>
                      <span className="text-xs text-[#2C1820]/70 block mt-0.5">{srv.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setTriageStep(1)}
                    className="px-6 py-3 rounded-full bg-white border border-[#2C1820]/20 text-[#2C1820] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF8F5] transition-all"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => setTriageStep(3)}
                    className="px-8 py-3.5 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
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
                          ? "bg-[#FFF7ED] border-[#FF6B00] text-[#2C1820] font-bold shadow-xs scale-[1.01]"
                          : "bg-[#FAF8F5] border-transparent hover:border-[#FF6B00]/30 text-[#2C1820]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold uppercase text-[#FF6B00]">Perfil</span>
                        {petBehavior === beh.value && <BrandCheck className="w-4 h-4 text-[#FF6B00]" />}
                      </div>
                      <span className="text-base font-black block mt-1.5 text-[#2C1820]">{beh.title}</span>
                      <span className="text-xs text-[#2C1820]/70 block mt-1 leading-relaxed">{beh.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setTriageStep(2)}
                    className="px-6 py-3 rounded-full bg-white border border-[#2C1820]/20 text-[#2C1820] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF8F5] transition-all"
                  >
                    Voltar
                  </button>
                  <button
                    type="button"
                    onClick={() => setTriageStep(4)}
                    className="px-8 py-3.5 rounded-full bg-[#FF6B00] hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
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

                <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#84CC16]/30 space-y-4">
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
                    <p className="text-xs sm:text-sm text-[#2C1820]/80">
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
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 text-center"
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
                    className="w-full sm:w-auto px-6 py-4 rounded-full bg-white border border-[#2C1820]/20 text-[#2C1820] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF8F5] transition-all text-center"
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
      <section id="faq" className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[#FF2E93]/20 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-12 text-left">
          
          <motion.div {...fadeInUp} className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#FF2E93]">
              Transparência Sem Enrolação
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] tracking-tight leading-tight">
              Dúvidas que todo pai e mãe de pet tem antes de vir à clínica.
            </h2>
          </motion.div>

          <div className="divide-y divide-[#2C1820]/10 border-y border-[#2C1820]/10">
            {faqData.map((item, index) => (
              <div key={item.id} className="py-6 sm:py-8">
                <button
                  type="button"
                  onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-6 text-left group"
                >
                  <span className="text-lg sm:text-xl font-black text-[#2C1820] group-hover:text-[#FF2E93] transition-colors">
                    {item.question}
                  </span>
                  <span className={`p-2 rounded-xl bg-white border border-[#2C1820]/15 text-[#2C1820] transition-transform duration-300 shrink-0 ${faqOpenIndex === index ? "rotate-180 text-[#FF2E93]" : ""}`}>
                    <BrandChevron className="w-4 h-4" />
                  </span>
                </button>

                <AnimatePresence>
                  {faqOpenIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm sm:text-base text-[#2C1820]/80 leading-relaxed max-w-3xl">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 12. RODAPÉ DE LUXO EM GRADIENTE RADIANTE DA MARCA (ZERO PRETO / ZERO CINZA) */}
      {/* ========================================================================= */}
      <footer className="bg-gradient-to-br from-[#FFF0F6] via-[#FAF8F5] to-[#F4FBEA] border-t-2 border-[#FF2E93]/20 pt-20 pb-16 px-6 sm:px-12 lg:px-16 text-left">
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

              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#84CC16]/40 text-xs font-mono font-bold text-[#2C1820]">
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
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-wider shadow-sm transition-all text-center"
                >
                  <img src="/foto-perfil-pais-de-pet.jpg" alt="Logo" className="w-5 h-5 rounded-full object-cover" />
                  <span>WhatsApp Oficial</span>
                </a>
                <a
                  href={clinicMetadata.contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF8F5] text-[#2C1820] font-bold text-xs uppercase tracking-wider border border-[#2C1820]/15 transition-all text-center"
                >
                  <BrandCatEar className="w-4 h-4 text-[#FF2E93]" />
                  <span>Instagram @paisdepet</span>
                </a>
              </div>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#2C1820]/60">
            <span>© {new Date().getFullYear()} Pais de Pet • Todos os direitos reservados.</span>
            <span>Belo Horizonte - Minas Gerais</span>
          </div>

        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 13. BOTÃO FLUTUANTE EXCLUSIVO COM LOGOMARCA OFICIAL DA PAIS DE PET         */}
      {/* ========================================================================= */}
      <aside aria-label="Canal oficial WhatsApp" className="fixed bottom-6 right-6 z-40">
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative p-3.5 sm:p-4 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white shadow-xl shadow-[#FF2E93]/35 flex items-center justify-center transition-all group"
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