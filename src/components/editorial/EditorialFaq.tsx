"use client";

import React, { useState } from "react";
import { ChevronDown, Clock, MapPin } from "lucide-react";

export function EditorialFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const whatsappBase = "https://wa.me/5531983380139";

  const faqs = [
    {
      q: "Quais são os dias e horários de funcionamento da clínica e pet shop?",
      a: "Atendemos de Segunda a Sexta-feira das 09:00 às 18:00, e aos Sábados das 08:30 às 13:00. Aos domingos e feriados nossa unidade permanece fechada. Recomendamos o agendamento prévio para consultas e banhos.",
    },
    {
      q: "Como funciona o Atendimento Veterinário Domiciliar (Home Care)?",
      a: "Você entra em contato pelo nosso WhatsApp (31) 98338-0139 e combinamos o melhor dia e horário. O veterinário vai até a sua residência com os equipamentos necessários para realizar a consulta clínica, vacinação ou coleta de exames sem estressar seu pet com transporte.",
    },
    {
      q: "A Pais de Pet aceita planos de saúde veterinários como Petlove?",
      a: "Sim! Somos uma clínica credenciada em redes de planos de saúde pet (como Petlove e DogLife). Caso você tenha um plano, entre em contato para confirmar a cobertura do procedimento desejado.",
    },
    {
      q: "Qual é a localização exata da unidade no Sagrada Família?",
      a: "Estamos localizados na Rua Silvestre Ferraz, 27 - Bairro Sagrada Família, Belo Horizonte - MG (CEP 31030-120). É uma rua tranquila, de fácil acesso pela Av. Silviano Brandão e Cristiano Machado, com facilidade para estacionar.",
    },
    {
      q: "Como funciona o agendamento de Banho e Tosa?",
      a: "Para garantir o tempo calmo e individual de cada pet, realizamos os banhos e tosas com horário marcado. Basta nos chamar no WhatsApp informando o porte, raça e o serviço desejado.",
    },
    {
      q: "Quais são as formas de pagamento aceitas?",
      a: "Aceitamos Pix instantâneo, cartões de crédito e débito de todas as bandeiras.",
    },
  ];

  return (
    <section id="duvidas" className="py-24 px-6 lg:px-12 bg-white border-t border-[#181816]/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Bloco de Horários e Endereço em Destaque */}
        <div id="horarios" className="mb-20 p-8 rounded-3xl bg-[#FAF8F5] border border-[#181816]/10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#1E3A2F] font-bold">
              <Clock className="w-4 h-4" />
              <span>Horário de Funcionamento</span>
            </div>
            <p className="text-xl font-serif font-bold text-[#181816]">
              Segunda a Sexta: 09h às 18h
            </p>
            <p className="text-base font-serif text-[#181816]/80">
              Sábados: 08h30 às 13h
            </p>
            <p className="text-xs text-[#181816]/60 font-mono">
              Domingos e Feriados: Fechado
            </p>
          </div>

          <div className="space-y-3 md:border-l md:border-[#181816]/10 md:pl-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C24D38] font-bold">
              <MapPin className="w-4 h-4" />
              <span>Localização da Unidade</span>
            </div>
            <p className="text-base font-serif font-bold text-[#181816]">
              Rua Silvestre Ferraz, 27
            </p>
            <p className="text-xs text-[#181816]/70 leading-relaxed font-light">
              Bairro Sagrada Família • Belo Horizonte - MG<br />
              CEP: 31030-120 • Fácil acesso na região leste
            </p>
            <a
              href="https://maps.google.com/?q=Rua+Silvestre+Ferraz,+27+-+Sagrada+Família,+Belo+Horizonte+-+MG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-bold text-[#1E3A2F] hover:underline pt-1"
            >
              Abrir no Google Maps &rarr;
            </a>
          </div>
        </div>

        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#1E3A2F] font-bold block">
            Tira-Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#181816]">
            Tudo o que você precisa saber
          </h2>
          <p className="text-sm text-[#181816]/70 font-light leading-relaxed">
            Esclarecimentos sobre atendimentos domiciliares, banhos, convênios e agendamentos.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl border border-[#181816]/10 bg-[#FAF8F5]/60 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-serif font-bold text-[#181816]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#181816]/60 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#1E3A2F]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#181816]/75 leading-relaxed font-light border-t border-[#181816]/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-[#FAF8F5] border border-[#181816]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-serif font-bold text-[#181816]">
              Ainda tem alguma pergunta sobre o seu pet?
            </h4>
            <p className="text-xs text-[#181816]/65 mt-0.5 font-light">
              Nossa equipe no Sagrada Família está disponível para te atender diretamente pelo WhatsApp.
            </p>
          </div>

          <a
            href={`${whatsappBase}?text=${encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre meu pet na Pais de Pet.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 rounded-full bg-[#1E3A2F] hover:bg-[#162B23] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider transition-all shrink-0 active:scale-95"
          >
            Falar no WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}