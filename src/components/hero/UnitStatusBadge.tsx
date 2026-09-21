"use client";

import React, { useState, useEffect } from "react";
import { Clock, ShieldAlert } from "lucide-react";
import { UNIT_CONFIG } from "../../config/unit-config";
import { getBusinessStatus, BusinessStatus } from "../../utils/business-hours";

export function UnitStatusBadge() {
  const [status, setStatus] = useState<BusinessStatus | null>(null);

  useEffect(() => {
    // initial check
    setStatus(getBusinessStatus(UNIT_CONFIG.schedule));
    // update every 60 seconds
    const timer = setInterval(() => {
      setStatus(getBusinessStatus(UNIT_CONFIG.schedule));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  if (!status) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-medium animate-pulse">
        <span className="w-2 h-2 rounded-full bg-slate-400" />
        <span>Verificando status operacional...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight border transition-all ${
          status.isOpen
            ? "bg-emerald-50 text-emerald-800 border-emerald-200/80"
            : "bg-slate-100 text-slate-800 border-slate-300"
        }`}
      >
        <span className="relative flex h-2.5 w-2.5">
          {status.isOpen && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
              status.isOpen ? "bg-emerald-500" : "bg-slate-500"
            }`}
          />
        </span>
        <span>{status.statusLabel}</span>
      </div>

      {status.has24hEmergency && (
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-corporate-blue text-xs font-medium border border-blue-200/70">
          <Clock className="w-3.5 h-3.5 shrink-0" />
          <span>Hospital 24 Horas no Local</span>
        </div>
      )}
    </div>
  );
}
