"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, MessageCircle, Truck, Sparkles, Check, ChevronRight } from "lucide-react";
import { SERVICES_LIST, UNIT_CONFIG } from "../../config/unit-config";
import { QuoteSimulation, ServiceItem } from "../../types";
import { getQuoteWhatsAppUrl } from "../../utils/whatsapp";

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export function QuickQuoteModal({ isOpen, onClose, preselectedServiceId }: QuickQuoteModalProps) {
  const [petType, setPetType] = useState<"dog" | "cat">("dog");
  const [petSize, setPetSize] = useState<"small" | "medium" | "large">("small");
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedServiceId || SERVICES_LIST[0].id
  );
  const [transportRequired, setTransportRequired] = useState(false);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (preselectedServiceId) {
      setSelectedServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  if (!isOpen) return null;

  const currentService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  const handleConfirmOnWhatsApp = () => {
    const sim: QuoteSimulation = {
      petType,
      petSize,
      serviceId: selectedServiceId,
      transportRequired,
      notes,
    };
    const url = getQuoteWhatsAppUrl(sim, currentService.title);
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative w-full max-w-xl transform rounded-2xl bg-white text-left shadow-modal transition-all border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-5 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-corporate-blue">
                Agendamento & Orçamento
              </span>
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                Simulador de Atendimento • {UNIT_CONFIG.brandName}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Step 1: Pet Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Qual é a espécie do seu pet?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPetType("dog")}
                  className={`flex items-center justify-center gap-2.5 p-3.5 rounded-xl border text-sm font-semibold transition-all ${
                    petType === "dog"
                      ? "border-corporate-blue bg-corporate-blue-light text-corporate-blue ring-1 ring-corporate-blue"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-xl">🐶</span>
                  <span>Cachorro</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPetType("cat")}
                  className={`flex items-center justify-center gap-2.5 p-3.5 rounded-xl border text-sm font-semibold transition-all ${
                    petType === "cat"
                      ? "border-corporate-blue bg-corporate-blue-light text-corporate-blue ring-1 ring-corporate-blue"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-xl">🐱</span>
                  <span>Gato (Cat Friendly)</span>
                </button>
              </div>
            </div>

            {/* Step 2: Pet Size */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. Porte do Pet
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setPetSize("small")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    petSize === "small"
                      ? "border-corporate-blue bg-corporate-blue-light ring-1 ring-corporate-blue"
                      : "border-slate-200 bg-white hover:bg-slate-50"
                  }`}
                >
                  <p className="text-xs font-bold text-slate-900">Pequeno</p>
                  <p className="text-[11px] text-slate-500">Até 10 kg</p>
                </button>

                <button
                  type="button"
                  onClick={() => setPetSize("medium")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    petSize === "medium"
                      ? "border-corporate-blue bg-corporate-blue-light ring-1 ring-corporate-blue"
                      : "border-slate-200 bg-white hover:bg-slate-50"
                  }`}
                >
                  <p className="text-xs font-bold text-slate-900">Médio</p>
                  <p className="text-[11px] text-slate-500">10kg a 20 kg</p>
                </button>

                <button
                  type="button"
                  onClick={() => setPetSize("large")}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    petSize === "large"
                      ? "border-corporate-blue bg-corporate-blue-light ring-1 ring-corporate-blue"
                      : "border-slate-200 bg-white hover:bg-slate-50"
                  }`}
                >
                  <p className="text-xs font-bold text-slate-900">Grande</p>
                  <p className="text-[11px] text-slate-500">Acima de 20 kg</p>
                </button>
              </div>
            </div>

            {/* Step 3: Choose Service */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Serviço de Interesse
              </label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm font-medium focus:border-corporate-blue focus:outline-none focus:ring-1 focus:ring-corporate-blue"
              >
                {SERVICES_LIST.map((srv) => (
                  <option key={srv.id} value={srv.id}>
                    {srv.title} ({srv.startingPrice})
                  </option>
                ))}
              </select>
            </div>

            {/* Service Summary Card */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center justify-between font-semibold text-slate-900">
                <span>{currentService.title}</span>
                <span className="text-corporate-blue font-bold text-sm">{currentService.startingPrice}</span>
              </div>
              <p className="text-slate-500">{currentService.shortDescription}</p>
              <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                <span>Duração média: {currentService.typicalDuration}</span>
                <span>•</span>
                <span>{UNIT_CONFIG.unitName}</span>
              </div>
            </div>

            {/* Step 4: Leva e Traz */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-slate-50/50">
              <input
                id="transport-check"
                type="checkbox"
                checked={transportRequired}
                onChange={(e) => setTransportRequired(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-corporate-blue focus:ring-corporate-blue"
              />
              <label htmlFor="transport-check" className="text-xs text-slate-700 cursor-pointer select-none">
                <span className="font-bold block text-slate-900 flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-corporate-blue" />
                  Necessito de Leva & Traz Climatizado
                </span>
                <span>Buscar e entregar o pet na minha residência (consulte raio de cobertura de até 8 km).</span>
              </label>
            </div>

            {/* Step 5: Optional Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                4. Observações ou Preferência de Data/Horário (Opcional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder="Ex: Prefiro período da manhã aos sábados. Pet com pele sensível."
                className="w-full p-3 rounded-xl border border-slate-200 text-slate-800 text-xs placeholder:text-slate-400 focus:border-corporate-blue focus:outline-none focus:ring-1 focus:ring-corporate-blue"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-slate-500 text-center sm:text-left">
              Envio direto para a equipe de recepção sem cobrança antecipada.
            </p>

            <button
              type="button"
              onClick={handleConfirmOnWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirmar no WhatsApp da Loja</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
