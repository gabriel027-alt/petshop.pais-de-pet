"use client";

import React, { useState, useEffect } from "react";
import { Calendar, MessageCircle, Phone, Clock, ArrowUp } from "lucide-react";
import { UNIT_CONFIG } from "../../config/unit-config";
import { getGeneralWhatsAppUrl } from "../../utils/whatsapp";

interface StickyBookingBarProps {
  onOpenBooking: () => void;
}

export function StickyBookingBar({ onOpenBooking }: StickyBookingBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // show after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-modal py-3 px-4 transition-all animate-in fade-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Unit quick info */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-corporate-blue-light text-corporate-blue flex items-center justify-center font-bold text-xs">
            L&M
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900 leading-tight">
              {UNIT_CONFIG.unitName}
            </p>
            <p className="text-[11px] text-slate-500">
              Plantão 24h & Banho e Tosa • {UNIT_CONFIG.address.street}, {UNIT_CONFIG.address.number}
            </p>
          </div>
        </div>

        {/* Right: Fast Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <a
            href={`tel:${UNIT_CONFIG.contacts.phoneRaw}`}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-corporate-blue" />
            <span>Ligar Agora</span>
          </a>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-corporate-blue hover:bg-corporate-blue-hover text-white text-xs font-bold transition-all shadow-sm active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Horário</span>
          </button>
        </div>
      </div>
    </div>
  );
}
