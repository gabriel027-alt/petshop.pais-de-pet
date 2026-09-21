"use client";

import React, { useState } from "react";
import { Navigation, ExternalLink, MapPin, CheckCircle2, Car, Shield } from "lucide-react";
import { UNIT_CONFIG } from "../../config/unit-config";

export function UnitMapPreview() {
  const [showInteractiveMap, setShowInteractiveMap] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-card p-5 sm:p-6 transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-corporate-blue">
            Localização Estratégica
          </span>
          <h4 className="text-base font-bold text-slate-900 mt-0.5">
            Como Chegar à {UNIT_CONFIG.unitName}
          </h4>
        </div>

        {/* Route CTA Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={UNIT_CONFIG.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-corporate-blue" />
            <span>Google Maps</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          <a
            href={UNIT_CONFIG.address.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
          >
            <Navigation className="w-3.5 h-3.5 text-sky-600" />
            <span>Waze</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Map Display Frame */}
      <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
        {showInteractiveMap ? (
          <iframe
            src={UNIT_CONFIG.address.mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa da ${UNIT_CONFIG.brandName} ${UNIT_CONFIG.unitName}`}
          />
        ) : (
          <div className="relative w-full h-full bg-slate-200 flex flex-col items-center justify-center p-6 text-center group">
            {/* Map Placeholder Graphic Pattern */}
            <div
              className="absolute inset-0 opacity-20 bg-[radial-gradient(#175ea8_1px,transparent_1px)] [background-size:16px_16px]"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-sm flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-corporate-blue/10 border border-corporate-blue/20 flex items-center justify-center text-corporate-blue mb-3 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-1">
                {UNIT_CONFIG.address.fullFormatted}
              </p>
              <p className="text-xs text-slate-500 mb-4">
                {UNIT_CONFIG.address.reference}
              </p>
              <button
                type="button"
                onClick={() => setShowInteractiveMap(true)}
                className="px-4 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-semibold shadow-sm transition-all active:scale-95"
              >
                Carregar Mapa Interativo
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Facility Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Valet Gratuito no Local</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Acesso Total PCD</span>
        </div>
        <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Drive-Thru Farmácia</span>
        </div>
      </div>
    </div>
  );
}
