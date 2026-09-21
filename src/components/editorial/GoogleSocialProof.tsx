"use client";

import React from "react";
import { Star, ShieldCheck, Heart } from "lucide-react";

export function GoogleSocialProof() {
  return (
    <section id="reputacao" className="py-24 px-6 lg:px-12 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-[#1E3A2F] font-bold block">
              Comunidade & Confiança
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#181816]">
              O que dizem os tutores do Sagrada Família.
            </h2>
            <p className="text-sm sm:text-base text-[#181816]/70 font-light max-w-2xl leading-relaxed">
              Trabalhamos com carinho genuíno. Cada retorno positivo reforça o compromisso de tratar cada animal como membro legítimo da família.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
            <div className="p-6 rounded-2xl bg-white border border-[#181816]/10 shadow-sm w-full sm:w-auto text-left">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1E3A2F] font-bold block">
                Credenciamento Oficial
              </span>
              <p className="text-base font-serif font-bold text-[#181816] mt-1">
                Rede Credenciada Petlove
              </p>
              <p className="text-xs text-[#181816]/60 mt-1">
                Atendimento clínico e suporte para planos de saúde pet conveniados.
              </p>
              <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-[#181816]/10 text-xs font-mono text-emerald-700">
                <ShieldCheck className="w-4 h-4" />
                <span>CNPJ Ativo: 38.098.030/0001-55</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-8 rounded-2xl bg-white border border-[#181816]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex text-amber-500 mb-4 text-xs">★★★★★</div>
              <p className="text-base font-serif italic text-[#181816]/90 leading-relaxed mb-6">
                &ldquo;Atendimento maravilhoso! O veterinário em domicílio salvou minha gatinha idosa que não podia se estressar saindo de casa. Recomendo muito!&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-[#181816]/10 flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-[#181816]">Tutor Sagrada Família</span>
              <span className="text-[#181816]/40">Atendimento Domiciliar</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#181816]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex text-amber-500 mb-4 text-xs">★★★★★</div>
              <p className="text-base font-serif italic text-[#181816]/90 leading-relaxed mb-6">
                &ldquo;Banho e tosa impecável. Meu cachorro sempre volta calmo, cheiroso e com as unhas cortadas direitinho sem machucar.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-[#181816]/10 flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-[#181816]">Cliente da Clínica</span>
              <span className="text-[#181816]/40">Estética Animal</span>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#181816]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex text-amber-500 mb-4 text-xs">★★★★★</div>
              <p className="text-base font-serif italic text-[#181816]/90 leading-relaxed mb-6">
                &ldquo;Ambiente familiar e acolhedor na Silvestre Ferraz. É muito bom ter um pet shop e clínica de tanta confiança no nosso bairro.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-[#181816]/10 flex items-center justify-between text-xs font-mono">
              <span className="font-bold text-[#181816]">Vizinho do Bairro</span>
              <span className="text-[#181816]/40">Belo Horizonte</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}