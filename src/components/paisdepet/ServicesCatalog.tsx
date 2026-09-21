"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, ArrowUpRight, Heart, Sparkles, MapPin } from "lucide-react";

export function ServicesCatalog() {
  const whatsappUrl = "https://wa.link/2ooc5p";

  return (
    <div className="w-full relative">
      
      {/* ========================================================================= */}
      {/* 1. MANIFESTO FEAR-FREE: TRANQUILIDADE FELINA & ACOLHIMENTO */}
      {/* ========================================================================= */}
      <section id="manifesto" className="py-28 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] border-t border-[#FF2E93]/15">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF2E93] font-black block">
              Filosofia Fear-Free • Zero Estresse
            </span>

            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] text-[#2C1820]">
              Sem gaiolas, sem barulhos e com toalhas 100% esterilizadas.
            </h2>

            <p className="text-[#2C1820]/80 text-lg leading-relaxed font-normal">
              Criamos um refúgio seguro onde o seu pet é tratado com respeito absoluto. Horários dedicados, aromaterapia calmante com feromônios e uma equipe treinada para transmitir afeto e paz desde o primeiro contato.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border-2 border-[#FF2E93]/30 font-mono text-xs font-bold text-[#2C1820] shadow-xs text-center">
                ✓ Credenciada Petlove
              </div>
              <div className="p-4 rounded-2xl bg-white border-2 border-[#FF6B00]/30 font-mono text-xs font-bold text-[#2C1820] shadow-xs text-center">
                ✓ DogLife Convênios
              </div>
              <div className="p-4 rounded-2xl bg-white border-2 border-[#84CC16]/40 font-mono text-xs font-bold text-[#2C1820] shadow-xs text-center">
                ✓ Atendimento Ético
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-[3.5rem] overflow-hidden bg-white border-4 border-white shadow-2xl aspect-[4/5] relative">
              <video
                src="/consultorio-gatinho-paisdepet.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#84CC16]/30 shadow-md">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#84CC16] font-bold block">
                  Acolhimento Felino Fear-Free
                </span>
                <span className="text-sm font-serif italic text-[#2C1820] block mt-0.5">
                  Gatinhos atendidos em ritmo calmo, sem cães latindo por perto.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PILAR 1: CONSULTÓRIO CLÍNICO & VACINAS (FUNDO SUAVE VERDE #F4FBEA) */}
      {/* ========================================================================= */}
      <section id="consultorio" className="py-28 px-6 sm:px-12 lg:px-16 bg-[#F4FBEA] border-y border-[#84CC16]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-mono font-bold text-[#84CC16] uppercase tracking-widest block">
              🩺 Dra. Natalia Possas • CRMV-MG 20572
            </span>

            <h2 className="text-4xl sm:text-6xl font-black text-[#2C1820] tracking-tight leading-[1.05]">
              Consultas sem pressa para proteger quem você ama.
            </h2>

            <p className="text-[#2C1820]/80 text-base sm:text-lg leading-relaxed font-normal">
              Consultas investigativas completas com comprovação de procedência de vacinas importadas (V8/V10, Giárdia, Gripe e Raiva), rastreamento térmico e acompanhamento ético contínuo.
            </p>

            <div className="space-y-2.5 text-sm text-[#2C1820] font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0" />
                <span>Ambiente climatizado com feromônios calmantes antiestresse</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0" />
                <span>Carteirinha com lote e rastreamento oficial das vacinas</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#84CC16] shrink-0" />
                <span>Atendimento especializado para filhotes, adultos e pets idosos</span>
              </div>
            </div>

            <div className="pt-2">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 py-4 px-9 rounded-full bg-[#84CC16] hover:bg-[#73b412] text-[#2C1820] font-black text-xs uppercase tracking-widest shadow-lg shadow-lime-500/20 transition-all"
              >
                <span>Agendar Consulta Veterinária</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-[3rem] overflow-hidden aspect-[16/11] bg-white border-4 border-white shadow-2xl">
              <video
                src="/consultorio-aplicacaodevacina-paisdepet.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PILAR 2: BANHO & TOSA FEAR-FREE (FUNDO SUAVE PINK #FFF0F6) */}
      {/* ========================================================================= */}
      <section id="banho" className="py-28 px-6 sm:px-12 lg:px-16 bg-[#FFF0F6] border-b border-[#FF2E93]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-[3rem] overflow-hidden aspect-[16/11] bg-white border-4 border-white shadow-2xl">
              <video
                src="/banhoetosa-paisdepet1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <span className="text-xs font-mono font-bold text-[#FF2E93] uppercase tracking-widest block">
              ✨ Estética Animal Fear-Free
            </span>

            <h2 className="text-4xl sm:text-6xl font-black text-[#2C1820] tracking-tight leading-[1.05]">
              Água morna, carinho e zero traumas ou gaiolas.
            </h2>

            <p className="text-[#2C1820]/80 text-base sm:text-lg leading-relaxed font-normal">
              Sabemos o pavor que muitos pets sentem em banhos barulhentos. Aqui os horários são dedicados, com água na temperatura ideal, cosméticos hipoalergênicos e tosa carinhosa na tesoura.
            </p>

            {/* Destaque das Toalhas Esterilizadas Descartáveis */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#FF2E93]/25 shadow-md space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF2E93] text-white flex items-center justify-center font-bold text-base shadow-sm">
                  ✨
                </div>
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#2C1820] block">
                    100% Toalhas Esterilizadas Descartáveis
                  </span>
                  <span className="text-[11px] font-mono text-[#FF2E93] font-bold block">
                    Risco Zero de Contaminação Cruzada
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#2C1820]/75 leading-relaxed font-normal">
                Toalhas lacradas individualmente que são descartadas após cada pet. Segurança e higiene absoluta contra fungos e bactérias.
              </p>
            </div>

            <div className="pt-2">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 py-4 px-9 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-pink-500/25 transition-all"
              >
                <span>Reservar Horário de Banho</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. PILAR 3: ATENDIMENTO DOMICILIAR (FUNDO SUAVE LARANJA #FFF7ED) */}
      {/* ========================================================================= */}
      <section id="homecare" className="py-28 px-6 sm:px-12 lg:px-16 bg-[#FFF7ED] border-b border-[#FF6B00]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-widest block">
              🚗 Home Care em Belo Horizonte
            </span>

            <h2 className="text-4xl sm:text-6xl font-black text-[#2C1820] tracking-tight leading-[1.05]">
              A veterinária vai até o conforto do seu sofá.
            </h2>

            <p className="text-[#2C1820]/80 text-base sm:text-lg leading-relaxed font-normal">
              Ideal para gatos que se estressam na caixinha de transporte ou cães idosos com dor articular. A Dra. Natalia realiza consultas, coletas e vacinas no ambiente onde seu pet se sente protegido.
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-[#FF6B00] uppercase tracking-wider font-bold block">
                Rotas Frequentes de Atendimento em BH:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                {["Sagrada Família", "Santa Tereza", "Floresta", "Horto", "Cidade Nova", "Nova Floresta", "Região Leste"].map((b, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-xl bg-white border border-[#FF6B00]/30 text-[#2C1820] font-mono text-xs font-bold shadow-2xs">
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 py-4 px-9 rounded-full bg-[#FF6B00] hover:bg-orange-600 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-orange-500/25 transition-all"
              >
                <span>Solicitar Atendimento em Casa</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-[3rem] overflow-hidden aspect-[16/11] bg-white border-4 border-white shadow-2xl">
              <video
                src="/atendimento-clinicaeadomicio-paisdepet.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PILAR 4: BOUTIQUE EDITORIAL (LOOKBOOK ASSIMÉTRICO DE ESTILO PET) */}
      {/* ========================================================================= */}
      <section id="boutique" className="py-28 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] border-b border-[#FF2E93]/15">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <div className="max-w-3xl space-y-4 text-left">
            <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-widest block">
              Boutique & Farmácia Selecionada
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#2C1820] leading-[1.05]">
              Nutrição de elite e mimos essenciais.
            </h2>
            <p className="text-[#2C1820]/80 text-base sm:text-lg font-normal leading-relaxed">
              Curadoria cuidadosa de rações Super Premium, antipulgas originais, caminhas ortopédicas e roupinhas térmicas confortáveis.
            </p>
          </div>

          {/* Lookbook Heterogêneo Assimétrico (Zero Grids Repetitivos 4x1) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Roupinha de Frio em Destaque Dominante (7 Colunas) */}
            <div className="lg:col-span-7 rounded-[3rem] overflow-hidden bg-white border-2 border-[#FF6B00]/25 shadow-xl relative aspect-[16/10]">
              <video
                src="/colocando-roupa-de-frio-em-pet-paisdepet.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono font-bold text-[#2C1820] border border-[#FF6B00]/30 shadow-xs">
                🧣 Coleção Térmica • Roupinhas de Inverno
              </div>
            </div>

            {/* Curadoria em 3 Blocos de Revista (5 Colunas) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="col-span-2 p-5 rounded-3xl bg-white border-2 border-[#84CC16]/30 shadow-sm flex items-center gap-4">
                <img src="/racao-cao-paisdepet.jpg" alt="Rações" className="w-24 h-24 object-cover rounded-2xl shrink-0" />
                <div>
                  <span className="font-black text-sm block text-[#2C1820]">Rações Super Premium</span>
                  <p className="text-xs text-[#2C1820]/70 mt-1">Fórmulas terapêuticas e naturais de alta digestibilidade.</p>
                </div>
              </div>

              <div className="p-4 rounded-3xl bg-white border-2 border-[#FF2E93]/25 shadow-sm space-y-2">
                <img src="/camas-paisdepet.jpg" alt="Caminhas" className="w-full h-28 object-cover rounded-2xl" />
                <span className="font-black text-xs block text-[#2C1820]">Caminhas Ortopédicas</span>
              </div>

              <div className="p-4 rounded-3xl bg-white border-2 border-[#FF6B00]/25 shadow-sm space-y-2">
                <img src="/coleira-paisdepet.jpg" alt="Coleiras" className="w-full h-28 object-cover rounded-2xl" />
                <span className="font-black text-xs block text-[#2C1820]">Coleiras & Guias</span>
              </div>
            </div>

          </div>

          <div className="pt-2 text-left">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 py-4 px-9 rounded-full bg-[#2C1820] hover:bg-[#3D1A2E] text-white font-black text-xs uppercase tracking-widest shadow-xl transition-all"
            >
              <span>Consultar Produtos pelo WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#84CC16]" />
            </motion.a>
          </div>

        </div>
      </section>

    </div>
  );
}