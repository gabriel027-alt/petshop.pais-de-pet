"use client";

import React from "react";
import { SpaceGallery } from "./SpaceGallery";
import { UnitQuickInfo } from "./UnitQuickInfo";
import { UnitMapPreview } from "./UnitMapPreview";
import { UNIT_CONFIG } from "../../config/unit-config";
import { Shield, Sparkles, HeartPulse, Video, Award } from "lucide-react";

interface UnitHeroProps {
  onOpenBooking: (serviceId?: string) => void;
}

export function UnitHero({ onOpenBooking }: UnitHeroProps) {
  return (
    <section id="unidade" className="py-8 sm:py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Unit Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span>Portal Corporativo</span>
            <span>/</span>
            <span>Unidades {UNIT_CONFIG.address.state}</span>
            <span>/</span>
            <span className="text-corporate-blue font-semibold">{UNIT_CONFIG.unitName}</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-600">
            <span className="inline-flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-corporate-blue" />
              <span>Unidade Conceito 850m²</span>
            </span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1">
              <Video className="w-3.5 h-3.5 text-slate-500" />
              <span>Câmeras Ao Vivo para Tutores</span>
            </span>
          </div>
        </div>

        {/* Two-Column Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Column: Interactive Space Photography (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <SpaceGallery />
          </div>

          {/* Right Column: High-Conversion Location & Scheduling Card (5 cols) */}
          <div className="lg:col-span-5">
            <UnitQuickInfo onOpenBooking={() => onOpenBooking()} />
          </div>
        </div>

        {/* Integrated Map & Facility Highlights Row */}
        <div className="mt-8">
          <UnitMapPreview />
        </div>
      </div>
    </section>
  );
}
