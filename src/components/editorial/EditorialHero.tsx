"use client";

import React from "react";
import { ArrowRight, MapPin, Clock, ShieldCheck, Heart } from "lucide-react";

export function EditorialHero() {
  const whatsappUrl = "https://wa.me/5531983380139?text=" + encodeURIComponent("Olá! Gostaria de agendar um atendimento na Pais de Pet.");

  return (
    <section className="relative pt-12 lg:pt-20 pb-20 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Lado Esquerdo: Tipografia e Mensagem */}
        <div className="lg:col-span-7 space-y-7 z-10">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#181816]/15 bg-white/75 backdrop-blur-sm text-xs font-mono text-[#181816]/80">
            <span className="w-2 h-2 rounded-full bg-[#1E3A2F] animate-pulse" />
            <span>Rua Silvestre Ferraz, 27 • Sagrada Família, BH</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-[#181816] leading-[1.06]">
            Cuidado de família no coração do <span className="italic font-light text-[#1E3A2F]">Sagrada Família</span>.
          </h1>

          <p className="text-base sm:text-lg text-[#181816]/75 max-w-xl font-light leading-relaxed">
            Mais do que um pet shop, um espaço dedicado à saúde e ao conforto do seu melhor amigo. Consultório veterinário, banho e tosa humanizado, atendimento domiciliar e farmácia completa no leste de Belo Horizonte.
          </p>

          {/* Horários Rápidos */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#181816]/70 pt-1">
            <div className="inline-flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-[#181816]/10">
              <Clock className="w-3.5 h-3.5 text-[#1E3A2F]" />
              <span>Seg a Sex: 09h às 18h</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-[#181816]/10">
              <Clock className="w-3.5 h-3.5 text-[#C24D38]" />
              <span>Sáb: 08h30 às 13h</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 bg-[#1E3A2F] hover:bg-[#162B23] text-[#FAF8F5] text-xs uppercase font-bold tracking-widest text-center rounded-full transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Agendar no WhatsApp • (31) 98338-0139</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C24D38]" />
            </a>

            <a
              href="https://maps.google.com/?q=Rua+Silvestre+Ferraz,+27+-+Sagrada+Família,+Belo+Horizonte+-+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-7 border border-[#181816]/25 text-[#181816] hover:bg-white text-xs uppercase font-bold tracking-widest text-center rounded-full transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5 text-[#1E3A2F]" />
              <span>Como Chegar (Maps)</span>
            </a>
          </div>

          {/* Selos de Confiança */}
          <div className="pt-6 border-t border-[#181816]/10 flex flex-wrap items-center gap-4 text-xs font-mono text-[#181816]/70">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Clínica Credenciada Petlove</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-[#C24D38]" />
              <span>Atendimento Veterinário Domiciliar</span>
            </div>
          </div>
        </div>

        {/* Lado Direito: Composição Visual com Fachada/Espaço Real */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
            <img
              src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1200&q=80"
              alt="Pais de Pet Clínica e Pet Shop"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full inline-block">
                Unidade Sagrada Família
              </span>
              <p className="text-base font-serif font-bold text-white">
                Rua Silvestre Ferraz, 27
              </p>
              <p className="text-xs text-slate-200 font-light leading-relaxed">
                Ambiente tranquilo, consultório acolhedor e atendimento próximo para você e seu pet.
              </p>
            </div>
          </div>

          {/* Badge Flutuante */}
          <div className="absolute -bottom-6 -left-6 bg-[#181816] text-[#FAF8F5] p-6 rounded-2xl shadow-xl hidden sm:block max-w-[220px] border border-white/10">
            <span className="font-mono text-xs text-[#C24D38] uppercase font-bold tracking-wider block">Home Care BH</span>
            <span className="text-sm font-serif font-bold text-white block mt-1">Atendimento no seu lar</span>
            <span className="text-[11px] text-white/60 block mt-1 leading-snug">
              Consultas e coletas na tranquilidade do domicílio.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}