import { OperatingHoursDay, UnitInfo } from "../types";

export interface BusinessStatus {
  isOpen: boolean;
  statusLabel: string;
  subLabel: string;
  todaySchedule: string;
  has24hEmergency: boolean;
}

export function getBusinessStatus(schedule: UnitInfo["schedule"]): BusinessStatus {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let todayRule: OperatingHoursDay;
  let todayName = "Segunda a Sexta";

  if (day === 0) {
    todayRule = schedule.sundayHoliday;
    todayName = "Domingo e Feriados";
  } else if (day === 6) {
    todayRule = schedule.saturday;
    todayName = "Sábado";
  } else {
    todayRule = schedule.mondayFriday;
    todayName = "Segunda a Sexta";
  }

  const isOpen = currentMinutes >= todayRule.open && currentMinutes < todayRule.close;

  const closeHour = Math.floor(todayRule.close / 60);
  const closeMin = todayRule.close % 60;
  const formattedClose = `${String(closeHour).padStart(2, "0")}h${closeMin > 0 ? String(closeMin).padStart(2, "0") : ""}`;

  let statusLabel = "";
  let subLabel = "";

  if (isOpen) {
    const minutesToClose = todayRule.close - currentMinutes;
    if (minutesToClose <= 45) {
      statusLabel = `Aberto • Fecha em breve (${formattedClose})`;
    } else {
      statusLabel = `Aberto agora • Fecha às ${formattedClose}`;
    }
    subLabel = "Atendimento presencial, loja física e farmácia em operação normal";
  } else {
    // determine next open
    let nextOpenText = "Amanhã às 08h00";
    if (day === 6) {
      nextOpenText = "Domingo às 09h00";
    }
    statusLabel = `Loja Fechada • Abre ${nextOpenText}`;
    subLabel = "Plantão emergencial do Hospital Veterinário ativo 24h no local";
  }

  return {
    isOpen,
    statusLabel,
    subLabel,
    todaySchedule: `${todayName}: ${todayRule.display}`,
    has24hEmergency: schedule.hospital24hActive,
  };
}
