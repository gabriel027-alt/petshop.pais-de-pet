"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function EditorialHeader() {
  const whatsappUrl = "https://wa.me/5531983380139?text=" + encodeURIComponent("Olá! Gostaria de agendar um atendimento na Pais de Pet.");

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#181816]/10 transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#" className="flex items-baseline gap-3 group">
          <span className="text-2xl lg:text-3xl font-serif font-bold tracking-tight text-[#181816]">
            Pais de Pet
          </span>
          <span className="hidden sm:inline-block text-[10px] tracking-widest uppercase font-mono px-2.5 py-0.5 bg-[#1E3A2F] text-[#FAF8F5] rounded-full">
            Sagrada Família • BH
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider uppercase text-[#181816]/70">
          <a href="#especialidades" className="hover:text-[#1E3A2F] transition-colors">Especialidades</a>
          <a href="#domiciliar" className="hover:text-[#1E3A2F] transition-colors">Home Care</a>
          <a href="#horarios" className="hover:text-[#1E3A2F] transition-colors">Horários & Local</a>
          <a href="#duvidas" className="hover:text-[#1E3A2F] transition-colors">Dúvidas</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2.5 px-5 bg-[#1E3A2F] hover:bg-[#162B23] text-white text-xs font-bold tracking-wider uppercase rounded-full shadow-sm transition-all active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>(31) 98338-0139</span>
          </a>
        </div>
      </div>
    </header>
  );
}