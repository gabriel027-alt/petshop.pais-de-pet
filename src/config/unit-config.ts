import { DepartmentItem, FaqItem, GalleryPhoto, ServiceItem, UnitInfo } from "../types";

export const UNIT_CONFIG: UnitInfo = {
  brandName: "Lat & Mia",
  tagline: "Centro de Bem-Estar Animal & Hospital Veterinário",
  unitName: "Unidade Belo Horizonte",
  unitCode: "UN-BH-01",
  isFlagship: true,
  cnpj: "42.891.304/0002-60",
  crmv: {
    vetName: "Dra. Camila Vasconcellos",
    number: "14.892",
    uf: "MG",
  },
  address: {
    street: "Av. Pastor Anselmo Silvestre",
    number: "1.395",
    neighborhood: "Dom Joaquim (Shopping Center Minas)",
    city: "Belo Horizonte",
    state: "MG",
    zipCode: "31170-678",
    fullFormatted: "Av. Pastor Anselmo Silvestre, 1395 - Shopping Center Minas, Dom Joaquim, Belo Horizonte - MG, CEP 31170-678",
    reference: "Shopping Center Minas • Próximo à Linha Verde / Cristiano Machado • Estacionamento amplo gratuito no shopping",
    wazeUrl: "https://waze.com/ul?q=Av.+Pastor+Anselmo+Silvestre+1395+Belo+Horizonte",
    googleMapsUrl: "https://maps.google.com/?q=Av.+Pastor+Anselmo+Silvestre+1395+Belo+Horizonte+MG+31170-678",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.7828532420377!2d-43.92887682386927!3d-19.891409836377726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69037c8052981%3A0x8bb85661642ae2a5!2sShopping%20Center%20Minas!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  },
  contacts: {
    phoneDisplay: "(31) 3079-7389",
    phoneRaw: "3130797389",
    whatsappDisplay: "(31) 3079-7389",
    whatsappRaw: "553130797389",
    emergency24hDisplay: "(31) 3079-7389 (Plantão)",
    emergency24hRaw: "553130797389",
    sacEmail: "bh@latemia.com.br",
  },
  schedule: {
    mondayFriday: {
      open: 8 * 60, // 08:00
      close: 22 * 60, // 22:00
      display: "08h às 22h",
    },
    saturday: {
      open: 8 * 60, // 08:00
      close: 22 * 60, // 22:00
      display: "08h às 22h",
    },
    sundayHoliday: {
      open: 8 * 60, // 08:00
      close: 20 * 60, // 20:00
      display: "08h às 20h",
    },
    hospital24hActive: true,
  },
  amenities: [
    {
      icon: "Car",
      label: "Estacionamento Amplo no Shopping",
      desc: "Vagas cobertas e gratuitas no Shopping Center Minas para clientes",
    },
    {
      icon: "Clock",
      label: "Pronto-Socorro Veterinário",
      desc: "Corpo clínico veterinário residente permanente e UTI equipada",
    },
    {
      icon: "ShieldCheck",
      label: "Câmeras Ao Vivo no Banho",
      desc: "Acompanhe todo o procedimento pelo seu celular em tempo real",
    },
    {
      icon: "HeartHandshake",
      label: "Espaço Cat Friendly Exclusivo",
      desc: "Consultório e sala de espera dedicados com difusor de feromônios",
    },
    {
      icon: "Truck",
      label: "Leva & Traz Climatizado BH",
      desc: "Atendimento em Dom Joaquim, União, Cidade Nova, Floresta e região",
    },
  ],
};

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "facade",
    title: "Fachada & Entrada Principal • BH",
    spaceName: "Shopping Center Minas",
    description: "Ampla unidade com estacionamento privativo coberto, acesso direto pelo shopping e recepção setorizada para cães e gatos.",
    imageUrl: "https://images.petz.com.br/fotos/1543596982856.jpg",
    tag: "Estrutura Principal",
  },
  {
    id: "vet-clinic",
    title: "Consultórios & Diagnóstico",
    spaceName: "Centro Veterinário",
    description: "Salas cirúrgicas com anestesia inalatória, Raio-X digital, ultrassom doppler e laboratório de análise clínica rápida.",
    imageUrl: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=1200&q=80",
    tag: "Hospital 24h",
  },
  {
    id: "grooming-spa",
    title: "Estética & Banho Panorâmico",
    spaceName: "Grooming & Spa",
    description: "Baias de vidro temperado, toalhas 100% esterilizadas em autoclave individual, tosa na tesoura e cromoterapia relaxante.",
    imageUrl: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80",
    tag: "Estética Animal",
  },
  {
    id: "pet-hotel",
    title: "Hotel & Day Care Recreativo",
    spaceName: "Suítes & Parquinho",
    description: "Área verde de socialização monitorada por monitores comportamentais, piso térmico e suítes com câmera 24h.",
    imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80",
    tag: "Hotelaria",
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "banho-tosa-spa",
    title: "Banho & Tosa com Câmera Ao Vivo",
    category: "grooming",
    categoryLabel: "Estética & Higiene",
    shortDescription: "Higienização completa com produtos dermatológicos de alta qualidade, toalhas esterilizadas e monitoramento ao vivo para tutores.",
    fullDetails: "Ambiente 100% esterilizado com toalhas descartáveis individuais seladas, sopradores ultrassilenciosos e tosa artística na tesoura para todas as raças.",
    badge: "Mais Procurado",
    startingPrice: "R$ 89,00",
    typicalDuration: "60 a 90 min",
    highlights: [
      "Toalhas esterilizadas individuais seladas",
      "Monitoramento do banho por vídeo ao vivo",
      "Secadores com controle térmico e redutor de ruído",
      "Produtos dermatológicos e hipoalergênicos",
    ],
    icon: "Sparkles",
    whatsappPresetText: "Olá! Gostaria de agendar um horário de Banho & Tosa na unidade Belo Horizonte (Shopping Center Minas).",
  },
  {
    id: "hospital-plantao-24h",
    title: "Atendimento Veterinário & Pronto-Socorro 24h",
    category: "vet",
    categoryLabel: "Saúde & Emergência",
    shortDescription: "Consultas de rotina, exames laboratoriais, cirurgias e suporte clínico especializado ininterrupto para cães e gatos.",
    fullDetails: "Consultas de rotina e atendimento emergencial para cães, gatos e animais não convencionais. Centro cirúrgico completo e internação monitorada.",
    badge: "Plantão Ativo 24h",
    startingPrice: "R$ 180,00",
    typicalDuration: "Atendimento Imediato",
    highlights: [
      "Médico veterinário residente permanente no local",
      "Laboratório com laudos emergenciais em até 20 minutos",
      "Centro cirúrgico de alta complexidade",
      "Ala de internação separada para cães e felinos",
    ],
    icon: "Stethoscope",
    whatsappPresetText: "Olá! Preciso de atendimento veterinário / orientações de emergência na unidade Belo Horizonte.",
  },
  {
    id: "hotel-daycare",
    title: "Pet Hotel & Day Care Boutique",
    category: "hotel",
    categoryLabel: "Hospedagem & Recreação",
    shortDescription: "Hospedagem e creche com rotina enriquecida, atividades cognitivas, piscina supervisionada e câmeras no quarto.",
    fullDetails: "Equipe especializada em comportamento canino. Dormitórios individuais climatizados, sem baias fechadas ou estresse.",
    badge: "Vagas Limitadas",
    startingPrice: "R$ 120,00 / diária",
    typicalDuration: "Diárias flexíveis",
    highlights: [
      "Câmeras exclusivas para tutores acessarem pelo celular",
      "Enriquecimento ambiental e socialização assistida",
      "Alimentação seguida à risca com relatório diário",
      "Protocolo sanitário rígido de vacinas e exames",
    ],
    icon: "Building2",
    whatsappPresetText: "Olá! Gostaria de consultar disponibilidade e regras para o Hotel & Day Care na unidade BH.",
  },
  {
    id: "farmacia-manipulacao",
    title: "Farmácia Veterinária & Produtos",
    category: "pharmacy",
    categoryLabel: "Medicamentos & Prevenção",
    shortDescription: "Antipulgas, medicamentos de uso contínuo, antibióticos, suplementos e suporte farmacêutico com entrega expressa.",
    fullDetails: "Convênio com laboratórios renomados para entrega rápida de manipulados sob medida em biscoitos palatáveis ou pasta oral.",
    badge: "Pronta Entrega",
    startingPrice: "Consulte catálogo",
    typicalDuration: "Pronta Entrega",
    highlights: [
      "Antipulgas e carrapaticidas com garantia de procedência",
      "Manipulação veterinária com sabores atrativos (carne, frango, peixe)",
      "Retirada rápida no Shopping Center Minas ou delivery express",
      "Farmacêutico veterinário para conferência de receitas",
    ],
    icon: "Pill",
    whatsappPresetText: "Olá! Gostaria de verificar a disponibilidade de medicamentos na farmácia da unidade BH.",
  },
  {
    id: "vacinacao-preventiva",
    title: "Protocolo Vacinal Ético & Check-Up",
    category: "vet",
    categoryLabel: "Prevenção",
    shortDescription: "Vacinas importadas conservadas em câmara fria monitorada digitalmente 24h, com certificado e carteira digital.",
    fullDetails: "Aplicação ética com teste prévio de temperatura e ausência de sintomas. V8/V10, Raiva, Giárdia, Gripe Canina e Quíntupla Felina (FeLV).",
    badge: "Câmara Fria Monitorada",
    startingPrice: "R$ 115,00",
    typicalDuration: "30 min",
    highlights: [
      "Cadeia de frio com gerador de segurança e nobreak",
      "Exame clínico pré-vacinal detalhado incluso",
      "Emissão de carteirinha física e lembretes digitais",
      "Orientação completa para filhotes e cães idosos",
    ],
    icon: "ShieldAlert",
    whatsappPresetText: "Olá! Quero agendar a vacinação do meu pet na unidade Belo Horizonte.",
  },
  {
    id: "odontologia-ultrassom",
    title: "Odontologia Veterinária & Profilaxia",
    category: "vet",
    categoryLabel: "Saúde Bucal",
    shortDescription: "Remoção de cálculo dentário com equipamento ultrassônico, polimento e restauração para prevenir cardiopatias.",
    fullDetails: "Procedimento realizado com anestesia inalatória sob monitoramento cardíaco contínuo e saturação de oxigênio.",
    badge: "Segurança Anestésica",
    startingPrice: "Sob Avaliação",
    typicalDuration: "Avaliação 30 min",
    highlights: [
      "Anestesia inalatória monitorada por veterinário especialista",
      "Prevenção comprovada de endocardite e infecções renais",
      "Polimento dental que retarda novo acúmulo de tártaro",
      "Orientações de escovação e cuidados domiciliares",
    ],
    icon: "Activity",
    whatsappPresetText: "Olá! Gostaria de agendar uma avaliação odontológica na unidade BH.",
  },
];

export const DEPARTMENTS_LIST: DepartmentItem[] = [
  {
    id: "alimentacao-premium",
    title: "Nutrição Super Premium & Dietas Específicas",
    subtitle: "Rações naturais, grãos selecionados, fórmulas medicamentosas e alimentação úmida balanceada.",
    badge: "Mais de 120 marcas",
    popularItems: ["Royal Canin", "Hill's Science", "PremieR Pet", "Farmina N&D", "Biofresh"],
    icon: "Utensils",
  },
  {
    id: "farmacia-dermatologia",
    title: "Farmácia Completa & Antiparasitários",
    subtitle: "Medicamentos de uso contínuo, vermífugos, coleiras repelentes e dermatologia avançada.",
    badge: "Garantia de Procedência",
    popularItems: ["Bravecto", "NexGard Spectra", "Simparic", "Seresto", "Apoquel"],
    icon: "Cross",
  },
  {
    id: "higiene-estetica",
    title: "Higiene, Banho & Cosméticos Profissionais",
    subtitle: "Shampoos neutros, hipoalergênicos, tapetes higiênicos com alta absorção e toalhas umedecidas.",
    badge: "Fórmulas Suaves",
    popularItems: ["Hydra Pet Society", "Tapetes Supersec", "Pente Tira-Pelos", "Perfumes Hipoalergênicos"],
    icon: "Droplets",
  },
  {
    id: "conforto-acessorios",
    title: "Passeio, Guias, Peitorais & Camas Ortopédicas",
    subtitle: "Acessórios com alta ergonomia, fechos reforçados em aço cirúrgico e caminhas laváveis.",
    badge: "Design Ergonômico",
    popularItems: ["Zee.Dog", "Camas Memory Foam", "Guias Anti-Puxão", "Peitorais Refletivos"],
    icon: "Compass",
  },
  {
    id: "gatos-especial",
    title: "Mundo Felino Exclusivo (Cat Lifestyle)",
    subtitle: "Arranhadores verticais, areias higiênicas sem pó, fontes de água corrente e catnip puro.",
    badge: "Foco no Bem-Estar",
    popularItems: ["Areias Biodegradáveis", "Fontes Inox", "Arranhadores Sisal", "Difusores Feliway"],
    icon: "Smile",
  },
  {
    id: "enriquecimento-brinquedos",
    title: "Enriquecimento Ambiental & Brinquedos",
    subtitle: "Mordedores resistentes de nylon, brinquedos cognitivos para rechear e jogos de olfato.",
    badge: "Anti-Estresse",
    popularItems: ["Kong Classic", "Brinquedos de Borracha Natural", "Tabuleiros Interativos", "Mordedores Naturais"],
    icon: "Sparkle",
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: "faq-1",
    category: "Agendamentos & Banho",
    question: "Como funciona o agendamento de Banho & Tosa no Shopping Center Minas?",
    answer:
      "Recomendamos o agendamento prévio com pelo menos 24 horas de antecedência para garantir a alocação do groomer e o tempo calmo necessário para cada animal. Caso venha sem agendamento (encaixe), faremos o possível para atender conforme disponibilidade.",
  },
  {
    id: "faq-2",
    category: "Segurança & Saúde",
    question: "Quais vacinas são exigidas para meu pet tomar banho ou se hospedar?",
    answer:
      "Para a segurança de todos os animais da unidade, exigimos a comprovação da carteira de vacinação atualizada: para cães, vacina polivalente (V8 ou V10), Raiva e Gripe Canina; para gatos, vacina polivalente (V3, V4 ou V5) e Raiva. Além disso, o controle antipulgas deve estar em dia.",
  },
  {
    id: "faq-3",
    category: "Hospital 24h",
    question: "O Pronto-Socorro Veterinário funciona de madrugada e feriados?",
    answer:
      "Sim. Nosso Hospital Veterinário possui equipe médica de plantão presencial ininterrupto 24 horas por dia, 365 dias por ano, incluindo madrugadas, finais de semana e feriados nacionais.",
  },
  {
    id: "faq-4",
    category: "Transparência",
    question: "É verdade que posso acompanhar o banho do meu pet por vídeo?",
    answer:
      "Sim! Todos os nossos boxes de banho e mesas de secagem possuem paredes de vidro cristalino com visualização ampla na loja, além de câmeras de alta definição acessíveis diretamente no seu smartphone.",
  },
  {
    id: "faq-5",
    category: "Logística BH",
    question: "Vocês realizam serviço de Leva & Traz em Belo Horizonte?",
    answer:
      "Sim, dispomos de vans climatizadas e caixas higienizadas. Atendemos Dom Joaquim, União, Cidade Nova, Floresta, Sagrada Família, Silveira, Santa Inês e bairros vizinhos ao Shopping Center Minas.",
  },
  {
    id: "faq-6",
    category: "Pagamento & Clube",
    question: "Quais são as formas de pagamento aceitas na unidade BH?",
    answer:
      "Aceitamos Pix com 5% de desconto em produtos de farmácia e loja física, cartões de crédito (Visa, Mastercard, Elo, American Express) com parcelamento em até 6x sem juros para tratamentos e cirurgias, e cartões de débito.",
  },
];