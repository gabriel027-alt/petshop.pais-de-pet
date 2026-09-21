"use client";

import React from "react";
import {
  Sparkles,
  Stethoscope,
  Building2,
  Pill,
  ShieldAlert,
  Activity,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
} from "lucide-react";
import { ServiceItem } from "../../types";
import { getServiceWhatsAppUrl } from "../../utils/whatsapp";

interface ServiceCardProps {
  service: ServiceItem;
  onOpenQuote: (serviceId: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Stethoscope,
  Building2,
  Pill,
  ShieldAlert,
  Activity,
};

export function ServiceCard({ service, onOpenQuote }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.icon] || Sparkles;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-slate-300">
      <div className="p-6">
        {/* Top bar with Icon, category and badge */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-corporate-blue-light text-corporate-blue flex items-center justify-center transition-colors group-hover:bg-corporate-blue group-hover:text-white">
            <IconComponent className="w-6 h-6" />
          </div>

          {service.badge && (
            <span
              className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                service.badge.includes("24h")
                  ? "bg-red-50 text-red-700 border-red-200"
                  : "bg-corporate-blue-light text-corporate-blue border-blue-200/80"
              }`}
            >
              {service.badge}
            </span>
          )}
        </div>

        {/* Category Pill */}
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
          {service.categoryLabel}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-corporate-blue transition-colors">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-600 mt-2 font-normal leading-relaxed line-clamp-2">
          {service.shortDescription}
        </p>

        {/* Price & Duration Strip */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <div>
            <span className="text-[10px] text-slate-400 block font-medium">A partir de</span>
            <span className="font-extrabold text-slate-900 text-base leading-tight text-corporate-blue">
              {service.startingPrice}
            </span>
          </div>

          <div className="text-right">
            <span className="text-[10px] text-slate-400 block font-medium">Tempo estimado</span>
            <span className="inline-flex items-center gap-1 font-semibold text-slate-700 text-xs mt-0.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {service.typicalDuration}
            </span>
          </div>
        </div>

        {/* Highlights List */}
        <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
          <p className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
            Diferenciais de Padrão Hospitalar:
          </p>
          <ul className="space-y-1.5">
            {service.highlights.slice(0, 3).map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-200/80 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onOpenQuote(service.id)}
          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-corporate-blue hover:bg-corporate-blue-hover text-white text-xs font-bold transition-all active:scale-[0.98]"
        >
          <span>Agendar</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={getServiceWhatsAppUrl(service.title, service.whatsappPresetText)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
