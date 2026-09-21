"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, ShieldCheck, Sparkles } from "lucide-react";
import { GALLERY_PHOTOS } from "../../config/unit-config";

export function SpaceGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentPhoto = GALLERY_PHOTOS[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Main Image Frame */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-card group">
        <img
          src={currentPhoto.imageUrl}
          alt={currentPhoto.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />

        {/* Subtle Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Space Tag */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-slate-900 text-xs font-semibold shadow-sm border border-white/50">
            {currentPhoto.tag}
          </span>
          <span className="px-2.5 py-1 rounded-md bg-slate-900/70 backdrop-blur-md text-white text-[11px] font-medium border border-white/20">
            {activeIndex + 1} de {GALLERY_PHOTOS.length}
          </span>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm transition-all active:scale-95 opacity-80 hover:opacity-100"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md backdrop-blur-sm transition-all active:scale-95 opacity-80 hover:opacity-100"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Bottom Details Caption */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white drop-shadow-sm">
              {currentPhoto.title}
            </h3>
            <span className="text-xs text-slate-300 hidden sm:inline">• {currentPhoto.spaceName}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 max-w-xl font-normal leading-relaxed drop-shadow-sm">
            {currentPhoto.description}
          </p>
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {GALLERY_PHOTOS.map((photo, index) => {
          const isSelected = index === activeIndex;
          return (
            <button
              key={photo.id}
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-[16/10] rounded-lg overflow-hidden border-2 transition-all text-left group ${
                isSelected
                  ? "border-corporate-blue ring-2 ring-corporate-blue/20"
                  : "border-transparent opacity-70 hover:opacity-100 hover:border-slate-300"
              }`}
            >
              <img
                src={photo.imageUrl}
                alt={photo.spaceName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors" />
              <div className="absolute bottom-1 left-1.5 right-1.5">
                <p className="text-[10px] sm:text-xs font-semibold text-white truncate leading-tight drop-shadow">
                  {photo.spaceName}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
