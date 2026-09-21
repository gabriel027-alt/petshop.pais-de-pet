"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Phone, Search } from "lucide-react";
import { FAQ_LIST, UNIT_CONFIG } from "../../config/unit-config";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const filteredFaq = FAQ_LIST.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-corporate-blue" />
            <span>Central de Ajuda & Políticas</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Perguntas Frequentes dos Tutores
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
            Transparência total sobre protocolos de higiene, carteira de vacinação, funcionamento de emergência e regras de convivência da unidade.
          </p>
        </div>

        {/* Quick Search Input */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquise por vacinas, banho, tosa, plantão 24h, formas de pagamento..."
            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue shadow-xs"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaq.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-slate-500 text-sm">
              Nenhuma pergunta encontrada com o termo pesquisado. Fale diretamente com nossa equipe no WhatsApp.
            </div>
          ) : (
            filteredFaq.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-xs overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-corporate-blue bg-corporate-blue-light px-2 py-0.5 rounded w-fit">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-corporate-blue" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Ainda tem dúvidas sobre seu pet?</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Nossa equipe de atendimento e enfermagem veterinária está disponível para esclarecer qualquer detalhe.
            </p>
          </div>

          <a
            href={getGeneralWhatsAppUrl("Olá! Estava navegando no FAQ e gostaria de tirar uma dúvida.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Atendente</span>
          </a>
        </div>
      </div>
    </section>
  );
}
