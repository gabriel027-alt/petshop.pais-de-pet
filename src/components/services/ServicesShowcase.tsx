"use client";

import React, { useState } from "react";
import { Sparkles, Shield, HeartPulse, Stethoscope, Scissors, Check, Award } from "lucide-react";
import { SERVICES_LIST } from "../../config/unit-config";
import { ServiceCard } from "./ServiceCard";

interface ServicesShowcaseProps {
  onOpenBooking: (serviceId?: string) => void;
}

type FilterCategory = "all" | "grooming" | "vet" | "hotel" | "pharmacy";

export function ServicesShowcase({ onOpenBooking }: ServicesShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const filteredServices =
    activeCategory === "all"
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === activeCategory);

  return (
    <section id="servicos" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-blue-light text-corporate-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Serviços & Procedimentos da Unidade</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Protocolos de Alta Precisão para o Bem-Estar do Seu Pet
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
            Unimos o carinho e o respeito ao animal com a infraestrutura médica de um hospital veterinário e a sofisticação de um centro de estética de ponta.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-slate-100 mb-8 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === "all"
                ? "bg-corporate-blue text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Todos os Serviços ({SERVICES_LIST.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory("grooming")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === "grooming"
                ? "bg-corporate-blue text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Banho & Estética Spa
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory("vet")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === "vet"
                ? "bg-corporate-blue text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Hospital & Emergência 24h
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory("hotel")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === "hotel"
                ? "bg-corporate-blue text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Hotel & Day Care
          </button>

          <button
            type="button"
            onClick={() => setActiveCategory("pharmacy")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === "pharmacy"
                ? "bg-corporate-blue text-white shadow-sm"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Farmácia & Manipulação
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpenQuote={(serviceId) => onOpenBooking(serviceId)}
            />
          ))}
        </div>

        {/* Quality & Biosecurity Commitment Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Padrão Hospitalar de Biossegurança e Sanificação Contínua
              </h4>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Todas as toalhas são de uso único individual e esterilizadas. Mesas e baias são desinfetadas com quaternário de amônio de grau médico após cada pet.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenBooking()}
            className="shrink-0 px-5 py-3 rounded-xl bg-corporate-blue hover:bg-corporate-blue-hover text-white text-xs font-bold shadow-sm transition-all"
          >
            Simular Orçamento Personalizado
          </button>
        </div>
      </div>
    </section>
  );
}
