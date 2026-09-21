"use client";

import React from "react";
import { X, Phone, MessageCircle, MapPin, Calendar, Clock, ChevronRight, AlertCircle, ShieldCheck } from "lucide-react";
import { UNIT_CONFIG } from "../../config/unit-config";
import { getEmergencyWhatsAppUrl, getGeneralWhatsAppUrl } from "../../utils/whatsapp";

interface MobileNavSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSchedule: () => void;
}

export function MobileNavSheet({ isOpen, onClose, onOpenSchedule }: MobileNavSheetProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl z-10 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="p-5 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-corporate-blue flex items-center justify-center text-white font-bold text-base shadow-sm">
                L&M
              </div>
              <div>
                <span className="font-bold text-slate-900 text-sm block leading-tight">{UNIT_CONFIG.brandName}</span>
                <span className="text-[11px] text-slate-500 block leading-tight">{UNIT_CONFIG.unitName}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-5 space-y-1">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">Navegação Principal</p>
            
            <a
              href="#unidade"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-corporate-blue font-medium transition-colors"
            >
              <span>A Unidade & Estrutura</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#servicos"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-corporate-blue font-medium transition-colors"
            >
              <span>Serviços & Banho e Tosa</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#departamentos"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-corporate-blue font-medium transition-colors"
            >
              <span>Departamentos & Farmácia</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#clube"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-corporate-blue font-medium transition-colors"
            >
              <span className="flex items-center gap-2">
                Clube Lat & Mia Prime
                <span className="text-[10px] bg-corporate-blue/10 text-corporate-blue px-2 py-0.5 rounded font-semibold">10% OFF</span>
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>

            <a
              href="#faq"
              onClick={onClose}
              className="flex items-center justify-between p-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-corporate-blue font-medium transition-colors"
            >
              <span>Perguntas Frequentes (FAQ)</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          </nav>

          {/* Quick Contacts Box */}
          <div className="px-5 py-4 mx-5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2.5">
            <div className="flex items-start gap-2 text-slate-600">
              <MapPin className="w-4 h-4 text-corporate-blue shrink-0 mt-0.5" />
              <span>{UNIT_CONFIG.address.fullFormatted}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Plantão 24h veterinário presencial</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Resp. Técnica: {UNIT_CONFIG.crmv.vetName} (CRMV-{UNIT_CONFIG.crmv.uf} {UNIT_CONFIG.crmv.number})</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-200 bg-slate-50/50 space-y-2.5">
          <button
            onClick={() => {
              onClose();
              onOpenSchedule();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-corporate-blue hover:bg-corporate-blue-hover text-white font-semibold text-sm shadow-sm transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Simular Orçamento / Agendar</span>
          </button>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp da Unidade</span>
          </a>

          {UNIT_CONFIG.schedule.hospital24hActive && (
            <a
              href={getEmergencyWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-red-200 bg-red-50 text-red-700 font-medium text-xs hover:bg-red-100 transition-colors"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Linha de Emergência 24h</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
