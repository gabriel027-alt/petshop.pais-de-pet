import { UNIT_CONFIG } from "../config/unit-config";
import { QuoteSimulation } from "../types";

export function getGeneralWhatsAppUrl(customMessage?: string): string {
  const baseNumber = UNIT_CONFIG.contacts.whatsappRaw;
  const message = customMessage || `Olá, equipe ${UNIT_CONFIG.brandName}! Gostaria de informações sobre a ${UNIT_CONFIG.unitName}.`;
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`;
}

export function getEmergencyWhatsAppUrl(): string {
  const baseNumber = UNIT_CONFIG.contacts.emergency24hRaw;
  const message = `[URGÊNCIA VETERINÁRIA] Olá, estou com uma situação de emergência com meu pet e gostaria de orientações imediatas da equipe de plantão da ${UNIT_CONFIG.unitName}.`;
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`;
}

export function getServiceWhatsAppUrl(serviceTitle: string, presetText?: string): string {
  const baseNumber = UNIT_CONFIG.contacts.whatsappRaw;
  const message =
    presetText ||
    `Olá! Gostaria de agendar o serviço de *${serviceTitle}* na ${UNIT_CONFIG.unitName}. Poderiam me informar os horários disponíveis?`;
  return `https://wa.me/${baseNumber}?text=${encodeURIComponent(message)}`;
}

export function getQuoteWhatsAppUrl(sim: QuoteSimulation, serviceTitle: string): string {
  const petTypeStr = sim.petType === "dog" ? "Cachorro" : "Gato";
  const sizeMap = {
    small: "Porte Pequeno (até 10kg)",
    medium: "Porte Médio (10kg a 20kg)",
    large: "Porte Grande (acima de 20kg)",
  };
  const sizeStr = sizeMap[sim.petSize];
  const transportStr = sim.transportRequired ? "Sim (preciso de Leva & Traz)" : "Não (levarei pessoalmente na unidade)";

  const lines = [
    `🐾 *SOLICITAÇÃO DE AGENDAMENTO / ORÇAMENTO*`,
    `*Unidade:* ${UNIT_CONFIG.unitName}`,
    `*Serviço:* ${serviceTitle}`,
    `*Espécie:* ${petTypeStr}`,
    `*Porte:* ${sizeStr}`,
    `*Serviço de Leva & Traz:* ${transportStr}`,
  ];

  if (sim.notes && sim.notes.trim().length > 0) {
    lines.push(`*Observações do Tutor:* ${sim.notes.trim()}`);
  }

  lines.push(
    `\nOlá! Montei esta simulação pelo portal oficial e gostaria de confirmar valores finais e disponibilidade de horários. Poderiam me ajudar?`
  );

  return `https://wa.me/${UNIT_CONFIG.contacts.whatsappRaw}?text=${encodeURIComponent(lines.join("\n"))}`;
}
