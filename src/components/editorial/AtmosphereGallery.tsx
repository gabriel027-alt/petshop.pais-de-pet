"use client";

import React from "react";

export function AtmosphereGallery() {
  return (
    <section id="domiciliar" className="py-24 px-6 lg:px-12 bg-white border-y border-[#181816]/10">
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-2xl mb-16 space-y-3">
          <span className="text-xs font-mono tracking-widest uppercase text-[#1E3A2F] font-bold block">
            Atmosphere & Vivência
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#181816]">
            Cuidado presencial e domiciliar com carinho autêntico.
          </h2>
          <p className="text-sm sm:text-base text-[#181816]/70 font-light leading-relaxed">
            Seja na nossa clínica na Rua Silvestre Ferraz, 27, ou no conforto da sua sala de estar, garantimos tranquilidade e atenção plena ao seu pet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Atendimento Domiciliar (7 cols) */}
          <div className="md:col-span-7 rounded-2xl overflow-hidden border border-[#181816]/10 bg-slate-100 flex flex-col justify-between group shadow-sm">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1000&q=80"
                alt="Atendimento Domiciliar e Consultório Veterinário"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-md text-[11px] font-mono uppercase tracking-wider font-bold text-[#181816]">
                01 / Atendimento Domiciliar (Home Care)
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-lg font-serif font-bold text-[#181816]">
                Consultas e Coletas Sem Sair de Casa
              </h3>
              <p className="text-xs text-[#181816]/70 mt-1 font-light leading-relaxed">
                Especialmente recomendado para felinos, animais com dor crônica, idosos ou tutores que preferem a praticidade do atendimento em domicílio em BH.
              </p>
            </div>
          </div>

          {/* Card 2: Consultório (5 cols) */}
          <div className="md:col-span-5 rounded-2xl overflow-hidden border border-[#181816]/10 bg-slate-100 flex flex-col justify-between group shadow-sm">
            <div className="aspect-[16/10] md:aspect-auto md:h-full overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=1000&q=80"
                alt="Clínica Veterinária Sagrada Família"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-md text-[11px] font-mono uppercase tracking-wider font-bold text-[#181816]">
                02 / Consultório Físico
              </div>
            </div>
            <div className="p-6 bg-white border-t border-[#181816]/10">
              <h3 className="text-lg font-serif font-bold text-[#181816]">
                Ambiente Calmo e Seguro
              </h3>
              <p className="text-xs text-[#181816]/70 mt-1 font-light leading-relaxed">
                Atendimento clínico com hora marcada, sem aglomerações e com suporte para planos pet como Petlove.
              </p>
            </div>
          </div>

          {/* Card 3: Banho & Tosa (6 cols) */}
          <div className="md:col-span-6 rounded-2xl overflow-hidden border border-[#181816]/10 bg-slate-100 flex flex-col justify-between group shadow-sm">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=80"
                alt="Banho e Tosa com Carinho"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-md text-[11px] font-mono uppercase tracking-wider font-bold text-[#181816]">
                03 / Banho & Tosa Afetuoso
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-lg font-serif font-bold text-[#181816]">
                Estética Sem Pressa e com Respeito
              </h3>
              <p className="text-xs text-[#181816]/70 mt-1 font-light leading-relaxed">
                Secagem cuidadosa, toalhas higienizadas e produtos hipoalergênicos que deixam o pelo macio, cheiroso e a pele protegida.
              </p>
            </div>
          </div>

          {/* Card 4: Rações & Farmácia (6 cols) */}
          <div className="md:col-span-6 rounded-2xl overflow-hidden border border-[#181816]/10 bg-slate-100 flex flex-col justify-between group shadow-sm">
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1000&q=80"
                alt="Rações Super Premium e Farmácia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-md text-[11px] font-mono uppercase tracking-wider font-bold text-[#181816]">
                04 / Nutrição & Farmácia
              </div>
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-lg font-serif font-bold text-[#181816]">
                Suprimentos de Procedência Garantida
              </h3>
              <p className="text-xs text-[#181816]/70 mt-1 font-light leading-relaxed">
                Medicamentos de confiança, antipulgas originais e as melhores rações do mercado para nutrir a saúde do animal.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}