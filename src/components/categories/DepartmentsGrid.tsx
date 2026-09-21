"use client";

import React from "react";
import {
  Utensils,
  PlusSquare,
  Droplets,
  Compass,
  Smile,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { DEPARTMENTS_LIST } from "../../config/unit-config";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";

const DEPT_ICONS: Record<string, React.ElementType> = {
  Utensils,
  Cross: PlusSquare,
  Droplets,
  Compass,
  Smile,
  Sparkle: Sparkles,
};

export function DepartmentsGrid() {
  return (
    <section id="departamentos" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
              <ShoppingBag className="w-3.5 h-3.5 text-corporate-blue" />
              <span>Loja Física & Farmácia Especializada</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Departamentos & Conveniências da Loja
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
              Curadoria rigorosa das melhores marcas mundiais de nutrição animal, farmácia completa e acessórios ergonômicos disponíveis a pronta entrega.
            </p>
          </div>

          <a
            href={getGeneralWhatsAppUrl("Olá! Gostaria de verificar a disponibilidade de produtos na loja física de vocês.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold transition-all shadow-xs"
          >
            <span>Consultar Estoque via WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-corporate-blue" />
          </a>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS_LIST.map((dept) => {
            const Icon = DEPT_ICONS[dept.icon] || ShoppingBag;

            return (
              <div
                key={dept.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 text-corporate-blue flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                      {dept.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    {dept.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 font-normal leading-relaxed">
                    {dept.subtitle}
                  </p>

                  {/* Brands List */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Marcas & Linhas em Destaque:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {dept.popularItems.map((item, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium text-slate-700 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-semibold text-[11px] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Disponível a pronta entrega
                  </span>

                  <a
                    href={getGeneralWhatsAppUrl(`Olá! Gostaria de consultar itens do departamento *${dept.title}*.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-corporate-blue font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>Pedir</span>
                    <ArrowRight className="w-3 h-3" />
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
