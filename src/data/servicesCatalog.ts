export interface ServicePillar {
  id: string;
  orderNumber: string;
  categoryTag: string;
  title: string;
  leadParagraph: string;
  extendedText: string;
  accentColor: string;
  bgColor: string;
  borderColor: string;
  media: {
    type: "video" | "photo";
    src: string;
    alt: string;
    captionTitle: string;
    captionDescription: string;
  };
  keyFeatures: string[];
  metrics?: Array<{
    value: string;
    label: string;
    sublabel: string;
  }>;
  floatingCard?: {
    icon: string;
    title: string;
    description: string;
  };
  ctaText: string;
}

export const servicesCatalog: ServicePillar[] = [
  {
    id: "filosofia",
    orderNumber: "01",
    categoryTag: "Arquitetura de Acolhimento • Fear-Free Oficial",
    title: "Sem gaiolas frias, sem gritos e com respeito absoluto ao ritmo de cada animal.",
    leadParagraph:
      "Na Pais de Pet, compreendemos que o consultório não deve ser uma experiência de medo. Criamos um ecossistema sensorial terapêutico: difusão de feromônios específicos (Feliway e Adaptil), iluminação âmbar relaxante, piso com tração térmica e uma equipe treinada para entender cada microexpressão de estresse.",
    extendedText:
      "Gatos são acolhidos em ambiente exclusivo sem contato visual ou olfativo com cães. Cada pet tem o tempo necessário para explorar e relaxar antes de qualquer manipulação clínica.",
    accentColor: "#FF2E93",
    bgColor: "#FAF8F5",
    borderColor: "rgba(255, 46, 147, 0.3)",
    media: {
      type: "video",
      src: "/consultorio-gatinho-paisdepet.mp4",
      alt: "Acolhimento felino sereno na Pais de Pet",
      captionTitle: "Consultório Felino Exclusivo",
      captionDescription: "Calmaria e aconchego para o gatinho relaxar no Sagrada Família."
    },
    keyFeatures: [
      "Consultório silencioso com mesa aquecida e difusor de Feliway",
      "Tempo livre para cheirar e explorar o espaço antes do toque clínico",
      "Técnicas de manejo de baixo estresse aprovadas internacionalmente"
    ],
    ctaText: "Conhecer Filosofia no WhatsApp"
  },
  {
    id: "consultorio",
    orderNumber: "02",
    categoryTag: "Medicina Veterinária Investigativa • Dra. Natalia Possas",
    title: "Consultas clínicas investigativas e imunização ética sem dor.",
    leadParagraph:
      "A saúde preventiva do seu pet não cabe em uma consulta apressada. A Dra. Natalia examina cada detalhe: arcada dentária, ausculta cardíaca, pelagem e rotina alimentar. Protocolos de vacinas importadas (V8/V10, Giárdia, Gripe Canina e Quádrupla Felina) aplicadas com agulhas ultra-finas e reforço positivo.",
    extendedText:
      "Cada dose possui rastreamento oficial de lote com selo físico colado na carteirinha. Diagnóstico laboratorial completo e suporte preventivo para todas as fases da vida.",
    accentColor: "#84CC16",
    bgColor: "#F4FBEA",
    borderColor: "rgba(132, 204, 22, 0.4)",
    media: {
      type: "video",
      src: "/consultorio-aplicacaodevacina-paisdepet.mp4",
      alt: "Aplicação de vacina sem dor com a Dra. Natalia Possas",
      captionTitle: "Vacinação Ética Importada",
      captionDescription: "Agulha ultra-fina e reforço positivo com petiscos calmantes."
    },
    floatingCard: {
      icon: "Stethoscope",
      title: "Rastreamento Oficial de Vacinas",
      description: "Comprovação de lote importado, temperatura monitorada e selo assinado na carteirinha física."
    },
    keyFeatures: [
      "Check-up laboratorial completo e exames preventivos periódicos",
      "Credenciamento oficial Petlove Saúde e convênio DogLife",
      "Atendimento clínico dedicado para filhotes, adultos e idosos"
    ],
    ctaText: "Agendar Consulta Veterinária"
  },
  {
    id: "banho",
    orderNumber: "03",
    categoryTag: "Estética com Respeito & Protocolo Hospitalar",
    title: "100% Toalhas Esterilizadas Descartáveis: Risco Zero de Doenças de Pele.",
    leadParagraph:
      "Você sabia que toalhas de tecido reaproveitadas em pet shops comuns são o maior vetor de fungos, micose, sarna e dermatites? Na Pais de Pet, nós abolimos essa prática: cada toalha é 100% descartável, estéril e aberta na sua frente.",
    extendedText:
      "Trabalhamos com água aquecida a 38°C na medida certa, dermocosméticos veganos e hipoalergênicos e secadores silenciosos. O pet nunca fica confinado em caixas quentes.",
    accentColor: "#FF2E93",
    bgColor: "#FFF0F6",
    borderColor: "rgba(255, 46, 147, 0.3)",
    media: {
      type: "video",
      src: "/banhoetosa-paisdepet1.mp4",
      alt: "Banho carinhoso com água morna e toalhas descartáveis",
      captionTitle: "Estética Fear-Free",
      captionDescription: "Massagem relaxante e zero contato com gaiolas metálicas."
    },
    floatingCard: {
      icon: "Scissors",
      title: "Protocolo Inegociável de Higiene",
      description: "Toalha descartável de celulose pura de alta absorção. Usada em um único pet e descartada."
    },
    metrics: [
      {
        value: "0",
        label: "Gaiolas Metálicas",
        sublabel: "O pet aguarda solto ou no colo, sem estresse de contenção."
      },
      {
        value: "38°C",
        label: "Água Térmica Morna",
        sublabel: "Temperatura corporal controlada com precisão no banho."
      },
      {
        value: "✂️",
        label: "Tosa na Tesoura",
        sublabel: "Acabamento artístico e suave sem lâminas quentes invasivas."
      }
    ],
    keyFeatures: [
      "100% Toalhas individuais esterilizadas descartáveis",
      "Cosméticos naturais hipoalergênicos livres de parabenos",
      "Secagem afetuosa com escovação relaxante"
    ],
    ctaText: "Reservar Horário de Banho"
  },
  {
    id: "homecare",
    orderNumber: "04",
    categoryTag: "Home Care Veterinário Exclusivo • Grande BH",
    title: "A segurança da clínica, sem que seu pet saia do sofá.",
    leadParagraph:
      "Para cães idosos com dores articulares, gatos que entram em pânico com o trânsito de Belo Horizonte ou tutores de rotina intensa, o atendimento domiciliar é a forma mais respeitosa de cuidar. A Dra. Natalia leva balança portátil, estetoscópio, vacinas e materiais de coleta direta na tranquilidade do seu lar.",
    extendedText:
      "Atendimento programado com rotas diárias na região Leste, Centro-Sul e Nordeste de BH. Todo o conforto do seu lar com o respaldo de uma clínica equipada.",
    accentColor: "#FF6B00",
    bgColor: "#FFF7ED",
    borderColor: "rgba(255, 107, 0, 0.3)",
    media: {
      type: "photo",
      src: "/atendimento-clinico-paisdepet.jpg",
      alt: "Dra. Natalia Possas em atendimento domiciliar no sofá do tutor",
      captionTitle: "Home Care no Sofá",
      captionDescription: "A tranquilidade de ser examinado em casa, sem caixas de transporte."
    },
    floatingCard: {
      icon: "MapPin",
      title: "Rotas Diárias em BH",
      description: "Sagrada Família, Floresta, Santa Tereza, Cidade Nova, Horto, Silveira e bairros vizinhos."
    },
    keyFeatures: [
      "Vacinação e consultas clínicas gerais no ambiente familiar do pet",
      "Coleta de sangue e exames rápidos sem estresse de transporte",
      "Ideal para famílias com múltiplos gatos e animais com artrose"
    ],
    ctaText: "Solicitar Atendimento em Domicílio"
  }
];
