"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Instagram, Menu, X, Clock, ArrowUpRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = "https://wa.link/2ooc5p";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#FAF8F5]/95 backdrop-blur-2xl shadow-sm border-b border-[#FF2E93]/10"
          : "py-4 sm:py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between gap-4 bg-white/95 backdrop-blur-2xl border-2 border-[#FF2E93]/20 rounded-full px-5 sm:px-7 py-3 shadow-xl shadow-pink-500/5 overflow-hidden">
          
          {/* Linha de Assinatura Tricolor Milimétrica no Topo do Header */}
          <div className="absolute top-0 inset-x-0 h-[2px] brand-tricolor-line" />

          {/* Logo Pais de Pet com Selo e Indicador Vivo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="flex items-center gap-3.5 group"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-[2.5px] bg-gradient-to-tr from-[#84CC16] via-[#FF2E93] to-[#FF6B00] shadow-md shrink-0">
              <img
                src="/foto-perfil-pais-de-pet.jpg"
                alt="Pais de Pet - Logotipo Oficial"
                className="w-full h-full rounded-full object-cover bg-white"
              />
              <span
                className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#84CC16] border-2 border-white shadow-xs"
                title="Clínica Aberta no Sagrada Família"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-serif italic font-bold text-xl sm:text-2xl text-[#2C1820] tracking-tight leading-none">
                  Pais de Pet
                </span>
                <span className="text-[10px] uppercase font-mono font-black tracking-widest text-[#FF2E93] bg-[#FFF0F6] px-2 py-0.5 rounded-full border border-[#FF2E93]/20">
                  BH
                </span>
              </div>
              <span className="text-[11px] text-[#2C1820]/70 font-mono tracking-tight mt-0.5">
                Rua Silvestre Ferraz, 27 • Sagrada Família
              </span>
            </div>
          </motion.a>

          {/* Links Centrais com Tipografia Arejada de Estúdio */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-black uppercase tracking-wider text-[#2C1820]/80">
            <a
              href="#consultorio"
              className="hover:text-[#84CC16] transition-colors"
            >
              Consultório
            </a>
            <a
              href="#banho"
              className="hover:text-[#FF2E93] transition-colors"
            >
              Banho Fear-Free
            </a>
            <a
              href="#homecare"
              className="hover:text-[#FF6B00] transition-colors"
            >
              Home Care
            </a>
            <a
              href="#boutique"
              className="hover:text-[#84CC16] transition-colors"
            >
              Boutique
            </a>
            <a
              href="#aumigos"
              className="hover:text-[#FF2E93] transition-colors flex items-center gap-1.5"
            >
              <span>Aumigos</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
            </a>
            <a
              href="#faq"
              className="hover:text-[#2C1820] transition-colors"
            >
              Dúvidas
            </a>
            <a
              href="https://instagram.com/petshoppaisdepet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF2E93] hover:opacity-80 transition-opacity font-mono text-[11px] font-bold"
            >
              @petshoppaisdepet
            </a>
          </nav>

          {/* CTA Bespoke de Estúdio para WhatsApp em Pink Vibrante */}
          <div className="flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 text-[11px] font-mono text-[#2C1820]/70 bg-white px-3 py-1.5 rounded-full border border-[#FF6B00]/30 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] animate-pulse" />
              <span>Seg-Sex 9h-18h | Sáb 8h30-13h</span>
            </div>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center gap-2.5 py-3 px-6 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-pink-500/25 group"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#2C1820] hover:text-[#FF2E93] rounded-full hover:bg-pink-50 transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Menu Mobile Animado */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-4 mt-2 p-6 bg-white/98 backdrop-blur-2xl border-2 border-[#FF2E93]/20 rounded-3xl shadow-2xl text-xs font-bold tracking-wide space-y-3 relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] brand-tricolor-line" />

            <div className="flex items-center gap-2 pb-3 border-b border-pink-100 text-[#2C1820]/80 font-mono text-xs">
              <Clock className="w-4 h-4 text-[#84CC16]" />
              <span>Seg a Sex: 9h às 18h | Sáb: 8h30 às 13h</span>
            </div>
            <a
              href="#consultorio"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#2C1820] hover:text-[#84CC16] text-sm font-bold"
            >
              🩺 Consultório Clínico (Dra. Natalia)
            </a>
            <a
              href="#banho"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#2C1820] hover:text-[#FF2E93] text-sm font-bold"
            >
              🛁 Banho Fear-Free com Toalhas Esterilizadas
            </a>
            <a
              href="#homecare"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#2C1820] hover:text-[#FF6B00] text-sm font-bold"
            >
              🚗 Atendimento Domiciliar BH
            </a>
            <a
              href="#boutique"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#2C1820] hover:text-[#84CC16] text-sm font-bold"
            >
              🦴 Boutique & Nutrição Super Premium
            </a>
            <a
              href="#aumigos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#2C1820] hover:text-[#FF2E93] text-sm font-bold"
            >
              🐾 Aumigos & Comunidade
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#2C1820] text-sm font-bold"
            >
              ❓ Dúvidas Frequentes
            </a>
            <a
              href="https://instagram.com/petshoppaisdepet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 pt-3 border-t border-pink-100 text-[#FF2E93] text-sm font-mono font-bold"
            >
              <Instagram className="w-4 h-4" />
              <span>@petshoppaisdepet</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}