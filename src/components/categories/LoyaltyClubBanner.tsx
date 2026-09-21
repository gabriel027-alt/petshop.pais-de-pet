"use client";

import React from "react";
import { Sparkles, Check, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";
import { UNIT_CONFIG } from "../../config/unit-config";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";

export function LoyaltyClubBanner() {
  return (
    <section id="clube" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-corporate-navy text-white overflow-hidden p-8 sm:p-12 border border-slate-800 shadow-xl">
          {/* Subtle geometric pattern overlay */}
          <div
            className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-corporate-blue/20 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-corporate-blue text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Programa de Fidelidade Corporativo</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Clube Lat & Mia Prime: Cuidados Periódicos com Vantagens Exclusivas
              </h3>

              <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
                Mantenha a saúde preventiva, a tosa e a nutrição do seu pet em dia com benefícios automáticos em todos os atendimentos na {UNIT_CONFIG.unitName}.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>10% de desconto em banhos semanais</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Prioridade na fila do Leva & Traz</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Lembretes vacinais automáticos com veterinário</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Check-up clínico semestral bonificado</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="w-full max-w-xs bg-slate-900/90 rounded-2xl border border-slate-700/80 p-6 text-center shadow-lg backdrop-blur-md">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                  Sem Carência ou Multa
                </span>
                <p className="text-2xl font-black text-white mt-1">Assinatura Gratuita</p>
                <p className="text-xs text-slate-400 mt-1">
                  Ative na sua primeira visita ou direto pelo WhatsApp da loja.
                </p>

                <a
                  href={getGeneralWhatsAppUrl("Olá! Gostaria de me cadastrar no Clube Lat & Mia Prime para ter os benefícios na unidade.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-corporate-blue hover:bg-corporate-blue-hover text-white text-xs font-bold transition-all shadow-md active:scale-95"
                >
                  <span>Ativar Benefícios no WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
