"use client";

import React from "react";
import { MessageCircle, MapPin, Instagram, ArrowUpRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const whatsappUrl = "https://wa.link/2ooc5p";

  return (
    <>
      {/* DIVISOR TRICOLOR DE TRANSIÇÃO ARQUITETÔNICA */}
      <div className="brand-tricolor-line" />

      {/* BANNER PRÉ-FOOTER QUENTE & ALTA CONVERSÃO (ZERO PRETO / ZERO CINZA FRIO) */}
      <section className="py-24 lg:py-32 px-6 sm:px-12 lg:px-16 bg-[#2C1820] text-white relative overflow-hidden">
        
        {/* Iluminação suave nas cores da marca */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#84CC16]/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FF2E93]/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#84CC16] font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF2E93]" />
            <span>Atendimento Humanizado no Sagrada Família • BH</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white max-w-3xl mx-auto leading-[1.04] tracking-tight"
          >
            Pronto para ver o seu pet acolhido com a{" "}
            <span className="font-serif italic font-normal text-[#FF2E93]">
              excelência que ele merece?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-pink-100/90 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Venha nos visitar na <strong className="text-white">Rua Silvestre Ferraz, 27</strong> ou solicite o <strong>atendimento domiciliar</strong> em Belo Horizonte. Seu melhor amigo tratado com amor e rigor de especialista.
          </motion.p>

          {/* Selos de Confiança */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            {[
              { icon: "🩺", text: "Dra. Natalia Possas • CRMV-MG 20572" },
              { icon: "✨", text: "100% Toalhas Esterilizadas Descartáveis" },
              { icon: "🚗", text: "Home Care em Toda a Região de BH" },
              { icon: "🐾", text: "Credenciada Oficial Petlove & DogLife" }
            ].map((b, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white">
                <span>{b.icon}</span>
                <span>{b.text}</span>
              </span>
            ))}
          </motion.div>

          {/* Botões de Ação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto py-4 px-10 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white text-xs uppercase font-black tracking-wider shadow-2xl flex items-center justify-center gap-2.5 group transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-white/20" />
              <span>Chamar no WhatsApp Oficial 🐾</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://maps.google.com/?q=Rua+Silvestre+Ferraz,+27+-+Sagrada+Família,+Belo+Horizonte+-+MG"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto py-4 px-8 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/25 text-xs uppercase font-black tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#FF6B00]" />
              <span>Como Chegar (Google Maps)</span>
            </motion.a>
          </motion.div>

          <div className="pt-4 text-xs font-mono text-pink-200/80 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#FF2E93]" /> Rua Silvestre Ferraz, 27 • Sagrada Família, BH</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#84CC16]" /> Seg a Sex: 9h às 18h | Sáb: 8h30 às 13h</span>
          </div>

        </div>
      </section>

      {/* RODAPÉ QUENTE NOBRE (#23131A / #2C1820) */}
      <footer className="bg-[#23131A] text-pink-100/80 py-16 px-6 sm:px-12 lg:px-16 border-t border-white/10 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Coluna 1: Marca & Redes */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-full p-[3px] bg-gradient-to-tr from-[#84CC16] via-[#FF2E93] to-[#FF6B00] shadow-lg shrink-0">
                <img
                  src="/foto-perfil-pais-de-pet.jpg"
                  alt="Pais de Pet"
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
              <div>
                <span className="text-2xl font-black text-white block leading-tight tracking-tight">
                  Pais de Pet 🐾
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#84CC16] font-bold">
                  Clínica Veterinária & Pet Shop
                </span>
              </div>
            </div>

            <p className="text-pink-100/70 text-xs sm:text-sm max-w-sm leading-relaxed font-normal">
              O espaço onde seu pet é acolhido como membro da família. Consultório veterinário completo, vacinação ética, banho e tosa carinhoso sem sedação, atendimento domiciliar em BH e boutique de nutrição selecionada.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://instagram.com/petshoppaisdepet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white hover:text-[#FF2E93] hover:border-[#FF2E93] transition-all font-bold text-xs"
              >
                <Instagram className="w-4 h-4 text-[#FF2E93]" />
                <span>@petshoppaisdepet</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#84CC16]/20 border border-[#84CC16]/40 text-[#84CC16] hover:bg-[#84CC16]/30 transition-all font-bold text-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#84CC16]" />
                <span>(31) 98338-0139</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Endereço & Localização */}
          <div className="md:col-span-3 space-y-3 text-left font-mono">
            <p className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
              Endereço Físico
            </p>
            <p className="text-pink-100/90 leading-relaxed">
              Rua Silvestre Ferraz, 27<br />
              Sagrada Família<br />
              Belo Horizonte - MG<br />
              CEP: 31030-120
            </p>
            <a
              href="https://maps.google.com/?q=Rua+Silvestre+Ferraz,+27+-+Sagrada+Família,+Belo+Horizonte+-+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#FF6B00] hover:text-[#FF2E93] transition-colors font-bold text-xs"
            >
              <span>Abrir no Google Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Coluna 3: Horários & Responsabilidade Técnica */}
          <div className="md:col-span-4 space-y-3 text-left font-mono">
            <p className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#84CC16]" />
              Horários & Responsabilidade Técnica
            </p>
            <p className="text-pink-100/90 leading-relaxed">
              <strong className="text-white">Segunda a Sexta:</strong> 09:00 às 18:00<br />
              <strong className="text-white">Sábado:</strong> 08:30 às 13:00<br />
              <span className="text-pink-300/70">Domingos e Feriados: Fechado</span>
            </p>
            <div className="pt-2 text-[11px] text-pink-200/70 space-y-1 border-t border-white/10">
              <p>Médica Veterinária Responsável: <strong className="text-white">Dra. Natalia de Paula Possas</strong></p>
              <p className="text-[#84CC16] font-bold">CRMV-MG: 20572</p>
              <p className="text-pink-300/60">CNPJ: 38.098.030/0001-55</p>
            </div>
          </div>

        </div>

        {/* Linha Final de Copyright */}
        <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-pink-200/60">
          <p>© {new Date().getFullYear()} Pais de Pet - Clínica Veterinária e Pet Shop. Cuidado com amor e rigor em BH.</p>
          <div className="flex items-center gap-3 sm:gap-4 font-semibold">
            <span className="text-[#84CC16]">Credenciada Petlove</span>
            <span>•</span>
            <span className="text-[#FF2E93]">DogLife Saúde</span>
            <span>•</span>
            <span className="text-[#FF6B00]">Atendimento Domiciliar BH</span>
          </div>
        </div>
      </footer>
    </>
  );
}