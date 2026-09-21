"use client";

import React from "react";
import { Phone, MessageCircle, AlertCircle, MapPin, Clock } from "lucide-react";
import { UNIT_CONFIG } from "../../config/unit-config";
import { getEmergencyWhatsAppUrl, getGeneralWhatsAppUrl } from "../../utils/whatsapp";

export function TopUtilityBar() {
  return (
    <div className="bg-corporate-navy text-slate-200 text-xs border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left side: Emergency & Unit */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4">
          {UNIT_CONFIG.schedule.hospital24hActive && (
            <a
              href={getEmergencyWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-800/60 font-medium hover:bg-red-900/80 hover:text-red-100 transition-colors"
              title="Linha direta de emergência 24h"
            >
              <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span>Pronto-Socorro 24h no local</span>
            </a>
          )}

          <div className="flex items-center gap-1 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-corporate-subtle" />
            <span className="font-medium text-white">{UNIT_CONFIG.unitName}</span>
            <span className="text-slate-400 hidden md:inline">• {UNIT_CONFIG.address.neighborhood} • {UNIT_CONFIG.address.city} - {UNIT_CONFIG.address.state}</span>
          </div>
        </div>

        {/* Right side: SAC, WhatsApp and Operation quick info */}
        <div className="flex items-center gap-4 text-slate-300">
          <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-corporate-subtle" />
            <span>Seg a Sáb: {UNIT_CONFIG.schedule.mondayFriday.display} | Dom: {UNIT_CONFIG.schedule.sundayHoliday.display}</span>
          </div>

          <div className="h-3 w-px bg-slate-700 hidden lg:block" />

          <a
            href={`tel:${UNIT_CONFIG.contacts.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-corporate-subtle" />
            <span>SAC: {UNIT_CONFIG.contacts.phoneDisplay}</span>
          </a>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp da Loja</span>
          </a>
        </div>
      </div>
    </div>
  );
}
