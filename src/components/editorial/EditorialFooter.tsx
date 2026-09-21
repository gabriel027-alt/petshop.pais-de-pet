"use client";

import React from "react";
import { MessageCircle, MapPin, Phone } from "lucide-react";

export function EditorialFooter() {
  const whatsappUrl = "https://wa.me/5531983380139?text=" + encodeURIComponent("Olá! Gostaria de agendar um atendimento na Pais de Pet.");

  return (
    <>
      {/* BANNER DE CONVERSÃO DIRETA */}
      <section className="py-20 px-6 lg:px-12 bg-[#181816] text-[#FAF8F5] border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs font-mono tracking-widest uppercase text-[#C24D38] block font-bold">
            Atendimento Pessoal & Domiciliar
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white max-w-2xl mx-auto leading-tight">
            Traga seu pet ou agende um atendimento no seu domicílio.
          </h2>

          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-light leading-relaxed">
            Estamos prontos para acolher você e seu amigo na Rua Silvestre Ferraz, 27, ou enviar nosso veterinário até sua residência no Sagrada Família e região.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-4 px-9 bg-[#1E3A2F] hover:bg-[#162B23] text-white text-xs uppercase font-bold tracking-widest rounded-full transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp (31) 98338-0139</span>
            </a>

            <a
              href="https://maps.google.com/?q=Rua+Silvestre+Ferraz,+27+-+Sagrada+Família,+Belo+Horizonte+-+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-4 px-8 border border-white/25 hover:bg-white hover:text-[#181816] text-white text-xs uppercase font-bold tracking-widest rounded-full transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              <span>Ver no Google Maps</span>
            </a>
          </div>

          <div className="pt-6 text-xs font-mono text-white/50 flex flex-wrap items-center justify-center gap-3">
            <span>Rua Silvestre Ferraz, 27 - Sagrada Família, Belo Horizonte - MG</span>
            <span>•</span>
            <span>Seg a Sex: 9h às 18h | Sáb: 8h30 às 13h</span>
          </div>
        </div>
      </section>

      {/* FOOTER CORPORATIVO */}
      <footer className="bg-[#121211] text-white/50 py-12 px-6 lg:px-12 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="font-serif text-lg font-bold text-white block mb-1">
              Pais de Pet • Clínica Veterinária e Pet Shop
            </span>
            <p className="text-white/60">
              Rua Silvestre Ferraz, 27 - Sagrada Família, Belo Horizonte - MG, CEP 31030-120 • Telefone: (31) 98338-0139
            </p>
          </div>

          <div className="text-center sm:text-right font-mono text-[11px] space-y-1">
            <p className="text-white/70">CNPJ: 38.098.030/0001-55 • Credenciada Petlove e DogLife</p>
            <p>© {new Date().getFullYear()} Pais de Pet. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}