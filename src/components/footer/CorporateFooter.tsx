"use client";

import React from "react";
import {
  ShieldCheck,
  Lock,
  Award,
  CreditCard,
  QrCode,
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
} from "lucide-react";
import { UNIT_CONFIG } from "../../config/unit-config";

export function CorporateFooter() {
  return (
    <footer className="bg-corporate-navy text-slate-300 border-t border-slate-800 text-xs">
      {/* Top Value Seals Bar */}
      <div className="border-b border-slate-800/80 bg-slate-950/40 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-corporate-blue shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-xs">Registro CRMV Ativo</p>
                <p className="text-[11px] text-slate-400">CRMV-{UNIT_CONFIG.crmv.uf} {UNIT_CONFIG.crmv.number}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-xs">Ambiente 100% Seguro</p>
                <p className="text-[11px] text-slate-400">Certificado SSL 256-bit</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-amber-400 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-xs">Biossegurança Hospitalar</p>
                <p className="text-[11px] text-slate-400">Toalhas individuais estéreis</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-sky-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-xs">Hospital 24 Horas</p>
                <p className="text-[11px] text-slate-400">Plantão médico presencial</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Corporate Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Mission (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-corporate-blue flex items-center justify-center text-white font-bold text-sm shadow-sm">
                L&M
              </div>
              <div>
                <span className="font-bold text-white text-base block leading-none">
                  {UNIT_CONFIG.brandName}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {UNIT_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Centro integrado de bem-estar animal fundado sob os mais rigorosos padrões da medicina veterinária mundial e hotelaria de alto padrão.
            </p>

            <div className="pt-2 space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-corporate-blue shrink-0 mt-0.5" />
                <span>{UNIT_CONFIG.address.fullFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-corporate-blue shrink-0" />
                <span>Central de Atendimento: {UNIT_CONFIG.contacts.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-corporate-blue shrink-0" />
                <span>SAC & Ouvidoria: {UNIT_CONFIG.contacts.sacEmail}</span>
              </div>
            </div>
          </div>

          {/* Links: Unidade e Serviços */}
          <div>
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Serviços da Unidade
            </p>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Banho & Tosa na Tesoura
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Pronto-Socorro 24h & UTI
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Hotel & Day Care Recreativo
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Farmácia & Manipulação
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Odontologia com Ultrassom
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">
                  Vacinação com Cadeia Fria
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Departamentos */}
          <div>
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Departamentos
            </p>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <a href="#departamentos" className="hover:text-white transition-colors">
                  Rações Super Premium
                </a>
              </li>
              <li>
                <a href="#departamentos" className="hover:text-white transition-colors">
                  Antipulgas & Carrapaticidas
                </a>
              </li>
              <li>
                <a href="#departamentos" className="hover:text-white transition-colors">
                  Acessórios & Conforto
                </a>
              </li>
              <li>
                <a href="#departamentos" className="hover:text-white transition-colors">
                  Mundo Felino Exclusivo
                </a>
              </li>
              <li>
                <a href="#clube" className="hover:text-white transition-colors">
                  Clube de Assinatura Prime
                </a>
              </li>
            </ul>
          </div>

          {/* Formas de Pagamento & Segurança */}
          <div>
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Formas de Pagamento
            </p>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-1 bg-slate-800 text-slate-200 rounded border border-slate-700 text-[11px] font-semibold inline-flex items-center gap-1">
                  <QrCode className="w-3 h-3 text-emerald-400" />
                  Pix Instantâneo
                </span>
                <span className="px-2 py-1 bg-slate-800 text-slate-200 rounded border border-slate-700 text-[11px] font-semibold">
                  Visa
                </span>
                <span className="px-2 py-1 bg-slate-800 text-slate-200 rounded border border-slate-700 text-[11px] font-semibold">
                  Mastercard
                </span>
                <span className="px-2 py-1 bg-slate-800 text-slate-200 rounded border border-slate-700 text-[11px] font-semibold">
                  Elo
                </span>
                <span className="px-2 py-1 bg-slate-800 text-slate-200 rounded border border-slate-700 text-[11px] font-semibold">
                  American Express
                </span>
                <span className="px-2 py-1 bg-slate-800 text-slate-200 rounded border border-slate-700 text-[11px] font-semibold">
                  Hipercard
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Parcelamento em até 6x sem juros em tratamentos cirúrgicos e odontológicos.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Notices and Registration Details */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-2 leading-relaxed">
          <p>
            <strong className="text-slate-300">{UNIT_CONFIG.brandName} Centro de Bem-Estar Animal e Hospital Veterinário Ltda.</strong> • CNPJ: {UNIT_CONFIG.cnpj} • Inscrição Estadual: 114.890.342.110 • Endereço: {UNIT_CONFIG.address.fullFormatted}.
          </p>
          <p>
            Responsabilidade Técnica Médica Veterinária: <strong className="text-slate-300">{UNIT_CONFIG.crmv.vetName}</strong> - CRMV-{UNIT_CONFIG.crmv.uf} nº {UNIT_CONFIG.crmv.number}. Alvará de Funcionamento Sanitário emitido pela COVISA e Conselho Regional de Medicina Veterinária do Estado de São Paulo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800/50 text-slate-400">
            <p>© {new Date().getFullYear()} {UNIT_CONFIG.brandName}. Todos os direitos reservados. Padrão Corporativo de Alta Performance.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-slate-200 transition-colors">Termos de Atendimento</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-200 transition-colors">Política de Privacidade & LGPD</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-200 transition-colors">Governança Clínica</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
