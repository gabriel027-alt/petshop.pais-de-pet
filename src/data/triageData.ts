export interface TriageOption {
  id: string;
  label: string;
  sublabel?: string;
  icon: string;
}

export interface TriageResult {
  title: string;
  recommendation: string;
  protocolDetails: string[];
  suggestedAction: string;
  whatsappMessage: string;
}

export const triageSpecies: TriageOption[] = [
  { id: "cao", label: "Cachorro", sublabel: "Cães de todos os portes", icon: "🐶" },
  { id: "gato", label: "Gatinho", sublabel: "Manejo 100% Cat-Friendly", icon: "🐱" }
];

export const triageStages: TriageOption[] = [
  { id: "filhote", label: "Filhote", sublabel: "Até 1 ano de vida", icon: "🍼" },
  { id: "adulto", label: "Adulto", sublabel: "De 1 a 7 anos", icon: "⚡" },
  { id: "idoso", label: "Idoso / Sênior", sublabel: "7+ anos de idade", icon: "👑" }
];

export const triageNeeds: TriageOption[] = [
  { id: "consulta", label: "Consulta Clínica", sublabel: "Check-up e diagnóstico investigativo", icon: "🩺" },
  { id: "vacina", label: "Vacinação Importada", sublabel: "Protocolo ético com lote rastreável", icon: "💉" },
  { id: "banho", label: "Banho & Tosa Fear-Free", sublabel: "100% toalhas esterilizadas descartáveis", icon: "🛁" },
  { id: "homecare", label: "Home Care no Sofá", sublabel: "Atendimento domiciliar em BH", icon: "🚗" }
];

export function computeTriageResult(species: string, stage: string, need: string): TriageResult {
  const isCat = species === "gato";
  const isSenior = stage === "idoso";
  const isPuppy = stage === "filhote";

  if (need === "homecare") {
    return {
      title: `Home Care no Sofá para ${isCat ? "Gatos" : "Cães"} ${isSenior ? "Sênior" : ""}`,
      recommendation: isCat
        ? "Gatos são territorialistas e sofrem imensamente na caixa de transporte. A Dra. Natalia vai até sua casa com kit silencioso para que seu felino nem perceba o exame clínico."
        : "Para cães com dificuldade de locomoção ou tutores com rotina corrida, o atendimento domiciliar reduz o estresse a zero.",
      protocolDetails: [
        "Avaliação dos parâmetros vitais sem tirá-lo do sofá ou caminha",
        "Coleta de exames e aplicação de vacinas éticas no conforto de casa",
        "Rotas prioritárias no Sagrada Família, Floresta, Santa Tereza e Cidade Nova"
      ],
      suggestedAction: "Agendar Home Care com a Dra. Natalia",
      whatsappMessage: `Olá Dra. Natalia! Fiz a triagem no site e gostaria de agendar um Atendimento Domiciliar (Home Care) em BH para o meu ${isCat ? "gato" : "cão"} (${stage}).`
    };
  }

  if (need === "banho") {
    return {
      title: `Estética Animal Fear-Free (${isCat ? "Felinos" : "Caninos"})`,
      recommendation:
        "Nosso centro de estética não utiliza gaiolas metálicas. Cada pet tem horário exclusivo, água regulada a 38°C e toalhas 100% descartáveis e esterilizadas para garantir saúde de pele impecável.",
      protocolDetails: [
        "Toalha individual de uso único (risco zero de transmissão de dermatites)",
        "Cosméticos naturais hipoalergênicos e secadores de ruído atenuado",
        "Aromaterapia relaxante e tosa na tesoura sem agredir o pelo"
      ],
      suggestedAction: "Reservar Horário de Banho Fear-Free",
      whatsappMessage: `Olá! Fiz a triagem no site para Banho e Tosa Fear-Free com toalhas descartáveis para o meu ${isCat ? "gatinho" : "cachorrinho"} (${stage}). Gostaria de consultar os horários disponíveis!`
    };
  }

  if (need === "vacina") {
    return {
      title: `Protocolo de Imunização Ética (${isPuppy ? "Primeiras Doses" : "Reforço Anual"})`,
      recommendation: isPuppy
        ? "Filhotes precisam de proteção minuciosa com doses importadas e rastreabilidade total de cadeia fria para garantir a soroconversão perfeita."
        : "O reforço anual previne doenças graves como Cinomose, Parvovirose, Giárdia, Gripe e Raiva de forma segura.",
      protocolDetails: [
        "Vacinas importadas de laboratórios globais de referência",
        "Selo oficial de lote e validade colado na carteirinha física",
        "Avaliação física completa inclusa antes da administração da vacina"
      ],
      suggestedAction: "Consultar Protocolo de Vacinação",
      whatsappMessage: `Olá Dra. Natalia! Fiz a triagem no site e quero agendar a Vacinação Importada para o meu ${isCat ? "gato" : "cão"} (${stage}). Poderia me informar sobre as datas e doses?`
    };
  }

  // Default: Consulta Clínica
  return {
    title: `Consulta Investigativa & Check-Up (${isCat ? "Cat-Friendly" : "Clínica Geral"})`,
    recommendation: isSenior
      ? "Pets idosos necessitam de monitoramento geriátrico preventivo: função renal, pressão arterial, avaliação articular e saúde bucal detalhada."
      : "Uma consulta sem pressa para examinar cada detalhe do comportamento e saúde preventiva do seu pet com a responsabilidade da Dra. Natalia Possas (CRMV-MG 20572).",
    protocolDetails: [
      "Ambiente aromatizado com feromônios calmantes e mesa aquecida",
      "Credenciamento oficial Petlove Saúde e convênio DogLife aceitos",
      "Tempo reservado sem sobreposição de atendimentos"
    ],
    suggestedAction: "Agendar Consulta no Sagrada Família",
    whatsappMessage: `Olá Dra. Natalia! Fiz a triagem online para uma Consulta Clínica para o meu ${isCat ? "gatinho" : "cãozinho"} (${stage}). Gostaria de agendar um horário na clínica no Sagrada Família!`
  };
}
