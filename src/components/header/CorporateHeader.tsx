"use client";

import React, { useState, useEffect } from "react";
import { Menu, Calendar, PhoneCall, ChevronDown, Sparkles, Stethoscope, Search } from "lucide-react";
import { UNIT_CONFIG } from "../../config/unit-config";
import { TopUtilityBar } from "./TopUtilityBar";
import { MobileNavSheet } from "./MobileNavSheet";

interface CorporateHeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export function CorporateHeader({ onOpenBooking }: CorporateHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-all">
        {/* Institutional Topbar */}
        <TopUtilityBar />

        {/* Main Nav Bar */}
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all ${
            isScrolled ? "py-3 shadow-subtle border-b border-slate-200/80" : "py-4 border-b border-slate-200"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Logo Section */}
            <div className="flex items-center gap-8">
              <a href="#" className="flex items-center gap-3 group focus:outline-none">
                {/* Custom Vector Pet Mark */}
                <div className="w-10 h-10 rounded-xl bg-corporate-blue flex items-center justify-center text-white shadow-sm group-hover:bg-corporate-blue-hover transition-colors">
                  <span className="font-bold text-lg tracking-tight">L&M</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                      {UNIT_CONFIG.brandName}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200/60">
                      {UNIT_CONFIG.address.city}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium tracking-normal mt-0.5">
                    {UNIT_CONFIG.tagline}
                  </span>
                </div>
              </a>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-1 text-[13px] font-medium text-slate-600">
                <a
                  href="#unidade"
                  className="px-3 py-1.5 rounded-md hover:text-corporate-blue hover:bg-slate-50 transition-colors"
                >
                  A Unidade
                </a>
                <a
                  href="#servicos"
                  className="px-3 py-1.5 rounded-md hover:text-corporate-blue hover:bg-slate-50 transition-colors"
                >
                  Serviços & Banho
                </a>
                <a
                  href="#departamentos"
                  className="px-3 py-1.5 rounded-md hover:text-corporate-blue hover:bg-slate-50 transition-colors"
                >
                  Departamentos
                </a>
                <a
                  href="#clube"
                  className="px-3 py-1.5 rounded-md hover:text-corporate-blue hover:bg-slate-50 transition-colors flex items-center gap-1"
                >
                  <span>Clube Prime</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-semibold px-1.5 py-0.2 rounded">
                    10% OFF
                  </span>
                </a>
                <a
                  href="#faq"
                  className="px-3 py-1.5 rounded-md hover:text-corporate-blue hover:bg-slate-50 transition-colors"
                >
                  Central de Dúvidas
                </a>
              </nav>
            </div>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${UNIT_CONFIG.contacts.phoneRaw}`}
                className="hidden xl:flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100 border border-slate-200 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-corporate-blue" />
                <span>{UNIT_CONFIG.contacts.phoneDisplay}</span>
              </a>

              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-corporate-blue hover:bg-corporate-blue-hover text-white text-xs font-semibold shadow-sm transition-all active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Horário</span>
              </button>

              {/* Mobile Menu Trigger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavSheet
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSchedule={() => onOpenBooking()}
      />
    </>
  );
}
