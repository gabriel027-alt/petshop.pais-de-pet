"use client";

import React from "react";
import { ArrowRight, CheckCircle2, Stethoscope, Sparkles, Home, ShoppingBag } from "lucide-react";

export function EditorialServices() {
  const whatsappBase = "https://wa.me/5531983380139";

  const services = [
    {
      badge: "01 / CLÍNICA",
      time: "Hora Marcada",
      title: "Consultório Veterinário",
      desc: "Consultas clínicas gerais e preventivas, protocolo vacinal ético com cadeia fria, cirurgias e exames laboratoriais essenciais para a saúde do seu pet.",
      points: [
        "Vacinas importadas (V8, V10, Giárdia e Raiva)",
        "Acompanhamento preventivo individual",
        "Credenciada Petlove e convênios pet",
      ],
      ctaText: "Agendar Consulta",
      ctaMsg: "Olá! Gostaria de agendar uma consulta no Consultório Veterinário da Pais de Pet.",
      icon: Stethoscope,
    },
    {
      badge: "02 / ESTÉTICA",
      time: "60 a 90 min",
      title: "Banho e Tosa",
      desc: "Higienização afetuosa que respeita o ritmo do animal. Shampoos hipoalergênicos dermatológicos, toalhas esterilizadas e tosa na tesoura sem traumas.",
      points: [
        "Toalhas higienizadas de uso individual",
        "Limpeza de ouvidos e corte de unhas inclusos",
        "Manejo calmo e paciente para cães e gatos",
      ],
      ctaText: "Agendar Banho & Tosa",
      ctaMsg: "Olá! Gostaria de agendar Banho e Tosa na Pais de Pet.",
      icon: Sparkles,
    },
    {
      badge: "03 / EXCLUSIVO BH",
      time: "Agendamento Prévio",
      title: "Atendimento Domiciliar",
      desc: "O cuidado veterinário até a sua casa. Ideal para felinos que se estressam com deslocamento, pets idosos, animais reativos ou tutores com rotina corrida.",
      points: [
        "Consultas e exames no conforto do lar",
        "Cobertura no Sagrada Família e bairros vizinhos",
        "Redução total de estresse para o animal",
      ],
      ctaText: "Solicitar Atendimento Domiciliar",
      ctaMsg: "Olá! Gostaria de solicitar informações sobre o Atendimento Domiciliar (Home Care) da Pais de Pet.",
      icon: Home,
    },
    {
      badge: "04 / CURADORIA",
      time: "Pronta Entrega",
      title: "Rações & Produtos",
      desc: "Linhas completas de nutrição super premium, petiscos saudáveis, farmácia veterinária com procedência e acessórios de passeio de alta durabilidade.",
      points: [
        "Antipulgas de referência (Bravecto, Simparic, NexGard)",
        "Rações medicamentosas e de alta digestibilidade",
        "Consulta de estoque e entrega no WhatsApp",
      ],
      ctaText: "Consultar Produtos",
      ctaMsg: "Olá! Gostaria de consultar rações e medicamentos na Pais de Pet.",
      icon: ShoppingBag,
    },
  ];

  return (
    <section id="especialidades" className="py-24 px-6 lg:px-12 bg-[#181816] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest uppercase text-[#C24D38] block mb-2">
              Destaques Oficiais Pais de Pet
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal">
              Especialidades & Cuidado Integral
            </h2>
          </div>
          <p className="text-sm text-white/70 max-w-md font-light leading-relaxed">
            Estrutura planejada para atender todas as fases da vida do seu cão ou gato no Bairro Sagrada Família.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="p-7 rounded-xl bg-white/5 border border-white/10 hover:border-[#1E3A2F]/50 hover:bg-white/[0.07] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono text-[#C24D38]">{item.badge}</span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-white/80">
                      {item.time}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-[#1E3A2F] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs text-white/70 leading-relaxed font-light mb-4">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 text-[11px] text-white/60 pt-3 border-t border-white/10 font-mono">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1E3A2F] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <a
                    href={`${whatsappBase}?text=${encodeURIComponent(item.ctaMsg)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-[#C24D38] hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}