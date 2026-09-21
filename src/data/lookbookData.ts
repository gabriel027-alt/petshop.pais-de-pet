export interface BoutiqueProduct {
  id: string;
  category: string;
  tagColor: string;
  name: string;
  subtitle: string;
  description: string;
  materialDetails: string;
  veterinaryIndication: string;
  sizesAvailable: string[];
  image: string;
  accentGlowClass: string;
  whatsappInquiryMessage: string;
}

export const boutiqueLookbook: BoutiqueProduct[] = [
  {
    id: "roupinhas",
    category: "Lookbook Inverno",
    tagColor: "#FF6B00",
    name: "Roupinhas Térmicas & Suéteres Antialérgicos",
    subtitle: "Aquecimento anatômico com liberdade total de movimento",
    description:
      "Modelagens desenhadas para não comprimir as axilas nem prender a cauda do animal. Tecidos térmicos que mantêm o calor corpóreo em dias frios de Belo Horizonte sem causar embaraço de nós na pelagem.",
    materialDetails: "Fio de malha hipoalergênica respirável com forro térmico suave e fechos com velcro plano antienrosco.",
    veterinaryIndication: "Recomendado pela Dra. Natalia para cães de pelo curto, idosos com dores articulares e raças braquicefálicas sensíveis a mudanças bruscas de temperatura.",
    sizesAvailable: ["PP (Filhotes / Chihuahuas)", "P (Spitz / Maltês)", "M (Shih Tzu / Pug)", "G (Bulldog Francês)", "GG (Golden / Labrador)"],
    image: "/colocando-roupa-de-frio-em-pet-palestra.jpg",
    accentGlowClass: "shadow-orange-glow",
    whatsappInquiryMessage: "Olá! Gostaria de consultar modelos e tamanhos das Roupinhas Térmicas de Inverno da Boutique Pais de Pet."
  },
  {
    id: "racoes",
    category: "Nutrição Clínica",
    tagColor: "#84CC16",
    name: "Rações Super Premium & Linha Medicamentosa",
    subtitle: "Nutrientes selecionados com precisão médica para cada porte",
    description:
      "Fórmulas com proteínas de alto valor biológico, enriquecidas com condroitina, glicosamina e ômega 3. Sem corantes artificiais e com palatabilidade comprovada para cães e gatos exigentes.",
    materialDetails: "Ingredientes naturais nobres, grãos selecionados e conservantes 100% de origem natural (tocoferóis e alecrim).",
    veterinaryIndication: "Indicação técnica para controle de peso, suporte gastrointestinal, alívio de dermatites atópicas e fortalecimento renal.",
    sizesAvailable: ["1.5kg (Degustação / Mini)", "7.5kg (Médio Porte)", "12kg a 15kg (Econômica Grande Porte)"],
    image: "/racao-cao-paisdepet.jpg",
    accentGlowClass: "shadow-lime-glow",
    whatsappInquiryMessage: "Olá! Gostaria de uma recomendação técnica da Dra. Natalia sobre a ração ideal para o meu pet na Pais de Pet."
  },
  {
    id: "camas",
    category: "Conforto da Coluna",
    tagColor: "#FF2E93",
    name: "Caminhas & Almofadas Ortopédicas Laváveis",
    subtitle: "Densidade inteligente para alívio da pressão articular",
    description:
      "Desenvolvidas com espumas de suporte ortopédico que não deformam com o peso do pet. Bordas elevadas que servem de apoio cervical ergonômico e capa com zíper 100% removível para lavagem fácil.",
    materialDetails: "Tecido impermeabilizado em sarja pesada com toque aveludado e fundo antiderrapante que isola a friagem do piso.",
    veterinaryIndication: "Essencial para pets idosos com artrose, displasia coxofemoral ou pets convalescentes em pós-operatório.",
    sizesAvailable: ["P (50x40cm)", "M (65x50cm)", "G (85x65cm)", "GG Gigante (105x80cm)"],
    image: "/camas-paisdepet.jpg",
    accentGlowClass: "shadow-pink-glow",
    whatsappInquiryMessage: "Olá! Quero ver fotos das Caminhas Ortopédicas disponíveis na Boutique Pais de Pet."
  },
  {
    id: "guias",
    category: "Passeio com Firmeza",
    tagColor: "#84CC16",
    name: "Guias, Peitorais Anti-Puxão & Coleiras",
    subtitle: "Distribuição da força torácica sem machucar a traqueia",
    description:
      "Peitorais com engate frontal anti-puxão que educam o cão no passeio sem estrangulamento. Fitas macias de alta resistência com costura em poliamida e mosquetões com trava de segurança em liga de zinco.",
    materialDetails: "Fita de poliéster acetinado macio com toque sedoso e ferragens eletroestáticas resistentes à umidade.",
    veterinaryIndication: "Recomendado para evitar colapso de traqueia em cães de pequeno porte e garantir condução segura sem trauma físico.",
    sizesAvailable: ["Ajustável P (Pescoço 24-38cm)", "Ajustável M (Pescoço 32-50cm)", "Ajustável G (Pescoço 42-68cm)"],
    image: "/coleira-paisdepet.jpg",
    accentGlowClass: "shadow-lime-glow",
    whatsappInquiryMessage: "Olá! Gostaria de consultar os peitorais anti-puxão e guias da Boutique Pais de Pet."
  },
  {
    id: "petiscos",
    category: "Reforço Positivo",
    tagColor: "#FF6B00",
    name: "Snacks 100% Naturais, Desidratados & Funcionais",
    subtitle: "Enriquecimento ambiental e saúde oral em mordidas limpas",
    description:
      "Petiscos de ingrediente único, desidratados lentamente para preservar os nutrientes essenciais. Texturas mastigáveis que promovem o atrito mecânico nos dentes, reduzindo a formação de tártaro e aliviando a ansiedade.",
    materialDetails: "100% carne, pulmão ou cartilagem bovina/ovina desidratada. Zero conservantes sintéticos, zero sal e zero transgênicos.",
    veterinaryIndication: "Excelente para treino comportamental positivo, suporte à higiene bucal e como recompensa saudável entre as refeições.",
    sizesAvailable: ["Pacote 100g", "Pacote 250g", "Combo Mastigação Prolongada"],
    image: "/petisco-cao-paisdepet.jpg",
    accentGlowClass: "shadow-orange-glow",
    whatsappInquiryMessage: "Olá! Quero conhecer os petiscos naturais e desidratados da Pais de Pet."
  }
];
