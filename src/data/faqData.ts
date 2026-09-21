export interface FaqItem {
  id: number;
  category: "fear-free" | "clinica" | "convenios" | "homecare" | "localizacao";
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    category: "fear-free",
    question: "O que torna o atendimento Fear-Free da Pais de Pet diferente de outros pet shops?",
    answer:
      "Nosso protocolo elimina gaiolas de contenção, secadores barulhentos coletivos e contenções forçadas. Trabalhamos com agendamentos espaçados, difusão contínua de feromônios calmantes (Feliway e Adaptil), toalhas 100% descartáveis esterilizadas e reforço positivo para que cães e gatos se sintam acolhidos como em casa."
  },
  {
    id: 2,
    category: "clinica",
    question: "Quem é a médica veterinária responsável pelo consultório?",
    answer:
      "A Dra. Natalia Possas (CRMV-MG 20572) é a fundadora e responsável técnica. Ela realiza consultas clínicas investigativas completas, protocolos de vacinação importada ética com rastreabilidade de lote e acompanhamento preventivo minucioso."
  },
  {
    id: 3,
    category: "convenios",
    question: "Vocês aceitam planos de saúde e convênios pet em Belo Horizonte?",
    answer:
      "Sim! Somos clínica credenciada oficial da Petlove Saúde e aceitamos os principais planos do mercado, como DogLife. Você pode realizar consultas, vacinas e procedimentos com a cobertura do seu plano na tranquilidade da nossa unidade."
  },
  {
    id: 4,
    category: "homecare",
    question: "Como funciona o serviço de Atendimento Domiciliar (Home Care) em BH?",
    answer:
      "A Dra. Natalia vai até a sua residência em Belo Horizonte com kit veterinário completo. É a solução ideal para gatinhos que se estressam na caixa de transporte, cães idosos com dificuldade de locomoção ou tutores com rotinas corridas. Atendemos com agendamento prévio bairros como Sagrada Família, Floresta, Santa Tereza, Cidade Nova, Horto e Silveira."
  },
  {
    id: 5,
    category: "fear-free",
    question: "Por que vocês utilizam toalhas 100% descartáveis no banho e tosa?",
    answer:
      "Toalhas de tecido lavadas coletivamente em lavanderias comerciais são o maior foco de transmissão de esporos de fungos, dermatofitose, bactérias e parasitas de pele entre animais. Nossas toalhas são de celulose ultra-absorvente, esterilizadas, abertas na frente do tutor e descartadas após um único uso. Risco zero de contaminação cruzada."
  },
  {
    id: 6,
    category: "localizacao",
    question: "Onde a clínica está localizada e quais são os horários de funcionamento?",
    answer:
      "Estamos na Rua Silvestre Ferraz, 27, no tradicional bairro Sagrada Família em Belo Horizonte - MG (CEP 31030-120). Atendemos de Segunda a Sexta das 9h às 18h e aos Sábados das 8h30 às 13h."
  }
];
