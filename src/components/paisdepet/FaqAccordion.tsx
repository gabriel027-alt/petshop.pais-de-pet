"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";

export function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const whatsappUrl = "https://wa.link/2ooc5p";

  const faqs = [
    {
      q: "Como funciona o Atendimento Domiciliar (Home Care) em BH?",
      a: "Super simples e sem nenhum estresse para você e seu pet! Você nos chama pelo WhatsApp e combinamos o melhor horário. A Dra. Natalia Possas vai até a sua residência com vacinas importadas, medicamentos e equipamentos para atender seu melhor amigo onde ele se sente mais seguro: no aconchego do próprio lar.",
    },
    {
      q: "Preciso agendar o Banho e Tosa com antecedência?",
      a: "Sim! Trabalhamos exclusivamente com agendamento prévio para garantir um atendimento calmo, sem filas e individualizado. Não temos gaiolas superlotadas nem barulho de secadores em série: seu pet recebe carinho exclusivo e toalhas 100% esterilizadas e descartáveis, lacradas individualmente.",
    },
    {
      q: "A clínica é credenciada pelo plano Petlove ou DogLife?",
      a: "Sim, somos credenciados oficiais da Rede Petlove Saúde e atendemos convênios parceiros como a DogLife! Basta nos enviar os dados do plano pelo WhatsApp antes da visita para autorizarmos tudo de forma rápida e sem burocracia.",
    },
    {
      q: "Quais são as formas de pagamento aceitas na unidade?",
      a: "Aceitamos Pix instantâneo, dinheiro e cartões de crédito/débito de todas as bandeiras. Para tratamentos clínicos ou protocolos vacinais completos, disponibilizamos opções de parcelamento sem juros no cartão de crédito.",
    },
    {
      q: "Quais são os horários oficiais de funcionamento da clínica?",
      a: "Estamos abertos de Segunda a Sexta-feira das 09:00 às 18:00, e aos Sábados das 08:30 às 13:00. Aos domingos e feriados nossa clínica física permanece fechada para descanso da equipe e higienização técnica completa do espaço.",
    },
    {
      q: "Onde fica a Pais de Pet e há facilidade para estacionar?",
      a: "Estamos situados na Rua Silvestre Ferraz, 27 - Sagrada Família, Belo Horizonte - MG (CEP 31030-120). É uma rua tranquila e de fácil acesso, paralela às principais vias da região leste, com facilidade para estacionar e desembarcar seu pet com total segurança e calma.",
    },
  ];

  return (
    <section id="faq" className="py-28 px-6 sm:px-12 lg:px-16 bg-[#FAF8F5] relative overflow-hidden border-b border-[#FF2E93]/15">
      <div className="max-w-7xl mx-auto space-y-14">
        
        {/* Layout em 2 Colunas: Visual com Vídeo do Gatinho + FAQ Interativo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* COLUNA ESQUERDA: Card do Gatinho & Horários (5 Colunas) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 text-left">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#84CC16]">
                  Informação & Transparência
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-[#2C1820] leading-[1.05] tracking-tight">
                Tudo o que você precisa saber antes de{" "}
                <span className="font-serif italic font-normal text-[#FF2E93]">
                  nos visitar em BH.
                </span>
              </h2>
            </div>

            <p className="text-base text-[#2C1820]/80 font-normal leading-relaxed">
              Sem letras miúdas ou suposições. Um relacionamento transparente e afetuoso construído na confiança de quem cuida como da própria família.
            </p>

            {/* Vídeo do Gatinho Calmo na Clínica em Moldura Clara */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-pink-50/50 border-2 border-[#FF2E93]/20 shadow-xl relative group"
            >
              <video
                src="/consultorio-gatinho-paisdepet.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1820]/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono font-bold uppercase text-[#84CC16] block mb-1">
                  🐾 Manejo Feline-Friendly
                </span>
                <p className="text-xs text-white/90 font-normal leading-snug">
                  Consultório com feromônios calmantes e silêncio para acolher os gatinhos mais sensíveis.
                </p>
              </div>
            </motion.div>

            {/* Box de Horários e Endereço */}
            <div className="p-6 rounded-3xl bg-white border-2 border-[#FF6B00]/25 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-[#2C1820] font-mono text-xs uppercase tracking-wider font-bold">
                <Clock className="w-4 h-4 text-[#FF6B00]" />
                <span>Horários Oficiais de Atendimento</span>
              </div>
              <p className="text-xs text-[#2C1820] leading-relaxed font-bold font-mono">
                Segunda a Sexta: 09:00 às 18:00<br />
                Sábado: 08:30 às 13:00<br />
                <span className="text-[#2C1820]/60 font-normal">Domingos e Feriados: Fechado para higienização</span>
              </p>
              <div className="pt-2 border-t border-pink-100 flex items-center gap-2 text-xs text-[#2C1820]/80 font-mono">
                <MapPin className="w-4 h-4 text-[#FF2E93] shrink-0" />
                <span>Rua Silvestre Ferraz, 27 • Sagrada Família, BH</span>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA: Accordion Interativo com Framer Motion (7 Colunas) */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, i) => {
              const isOpen = openIdx === i;

              return (
                <div
                  key={i}
                  className={`rounded-2xl border-2 transition-all overflow-hidden ${
                    isOpen
                      ? "border-[#FF2E93]/40 bg-white shadow-md"
                      : "border-pink-100 bg-white/90 hover:bg-white hover:border-[#FF2E93]/25"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#2C1820] leading-snug">
                      {faq.q}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-[#FF2E93] text-white" : "bg-pink-50 text-[#2C1820]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-[#2C1820]/80 leading-relaxed font-normal border-t border-pink-100 bg-white">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Card de Atendimento Direto */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-8 p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#84CC16]/30 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5"
            >
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-serif italic font-bold text-[#2C1820]">
                  Ainda tem alguma dúvida sobre seu pet?
                </h4>
                <p className="text-xs sm:text-sm text-[#2C1820]/70 font-normal">
                  Nossa equipe responde em poucos minutos no WhatsApp oficial.
                </p>
              </div>

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="shrink-0 py-3.5 px-7 rounded-full bg-[#FF2E93] hover:bg-pink-600 text-white text-xs font-mono font-bold uppercase tracking-wider shadow-lg shadow-pink-500/25 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chamar no WhatsApp</span>
              </motion.a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}