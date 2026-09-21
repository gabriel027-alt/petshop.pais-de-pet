"use client";

import React from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  Clock,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Navigation,
} from "lucide-react";
import { UNIT_CONFIG } from "../../config/unit-config";
import { UnitStatusBadge } from "./UnitStatusBadge";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";

interface UnitQuickInfoProps {
  onOpenBooking: () => void;
}

export function UnitQuickInfo({ onOpenBooking }: UnitQuickInfoProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card p-6 sm:p-7 flex flex-col justify-between h-full">
      <div className="space-y-5">
        {/* Status & Category Tag */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <UnitStatusBadge />
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {UNIT_CONFIG.unitName} • {UNIT_CONFIG.address.state}
          </span>
        </div>

        {/* Title & Quick Value Prop */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Excelência em Cuidado Veterinário & Estética Animal
          </h1>
          <p className="text-sm text-slate-600 mt-2 font-normal leading-relaxed">
            Estrutura hospitalar e estética com atendimento humanizado, monitoramento por câmeras para tutores e corpo clínico veterinário residente permanente.
          </p>
        </div>

        {/* Critical Location Box */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-corporate-blue/10 text-corporate-blue shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">
                Endereço da Unidade
              </p>
              <p className="text-sm font-bold text-slate-900 leading-snug">
                {UNIT_CONFIG.address.street}, {UNIT_CONFIG.address.number}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                {UNIT_CONFIG.address.neighborhood} • {UNIT_CONFIG.address.city} - {UNIT_CONFIG.address.state} • CEP {UNIT_CONFIG.address.zipCode}
              </p>
              <p className="text-[11px] text-corporate-blue font-medium mt-1">
                {UNIT_CONFIG.address.reference}
              </p>
            </div>
          </div>

          {/* Map Direction Links */}
          <div className="pt-2 border-t border-slate-200/60 flex items-center gap-2">
            <a
              href={UNIT_CONFIG.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white hover:bg-slate-100 border border-slate-300/80 text-slate-700 text-xs font-semibold shadow-xs transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-corporate-blue" />
              <span>Abrir no Maps</span>
            </a>

            <a
              href={UNIT_CONFIG.address.wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white hover:bg-slate-100 border border-slate-300/80 text-slate-700 text-xs font-semibold shadow-xs transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-sky-600" />
              <span>Abrir no Waze</span>
            </a>
          </div>
        </div>

        {/* Operating Hours Matrix */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
            <span className="block text-[11px] font-semibold text-slate-500">Seg a Sex</span>
            <span className="block font-bold text-slate-900 mt-0.5">{UNIT_CONFIG.schedule.mondayFriday.display}</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
            <span className="block text-[11px] font-semibold text-slate-500">Sábados</span>
            <span className="block font-bold text-slate-900 mt-0.5">{UNIT_CONFIG.schedule.saturday.display}</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
            <span className="block text-[11px] font-semibold text-slate-500">Dom / Feriados</span>
            <span className="block font-bold text-slate-900 mt-0.5">{UNIT_CONFIG.schedule.sundayHoliday.display}</span>
          </div>
        </div>
      </div>

      {/* Conversion Actions */}
      <div className="mt-6 pt-5 border-t border-slate-100 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-corporate-blue hover:bg-corporate-blue-hover text-white text-sm font-bold shadow-md shadow-corporate-blue/20 transition-all active:scale-[0.98]"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Horário</span>
          </button>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-600/20 transition-all active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Secondary Contact & Regulatory compliance */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 px-1">
          <a
            href={`tel:${UNIT_CONFIG.contacts.phoneRaw}`}
            className="inline-flex items-center gap-1.5 hover:text-slate-900 font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-corporate-blue" />
            <span>Central: {UNIT_CONFIG.contacts.phoneDisplay}</span>
          </a>

          <div className="inline-flex items-center gap-1 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
            <span>CRMV-{UNIT_CONFIG.crmv.uf} {UNIT_CONFIG.crmv.number}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
