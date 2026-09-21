export interface ClinicMetadata {
  name: string;
  tagline: string;
  subtagline: string;
  veterinarian: {
    name: string;
    title: string;
    crmv: string;
    role: string;
    bio: string;
  };
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    fullAddress: string;
    reference: string;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    isOpenNow: boolean;
    displayHours: string;
  };
  contacts: {
    whatsappUrl: string;
    whatsappDisplay: string;
    instagramUrl: string;
    instagramHandle: string;
  };
  accreditations: Array<{
    name: string;
    type: string;
    description: string;
  }>;
  homeCareAreas: Array<{
    name: string;
    region: string;
    priority: boolean;
  }>;
}

export const clinicMetadata: ClinicMetadata = {
  name: "Pais de Pet",
  tagline: "O afeto de quem ama como filho. A ciência que acolhe sem medo.",
  subtagline: "Clínica Veterinária Boutique, Estética Animal Fear-Free e Atendimento Domiciliar Exclusivo.",
  veterinarian: {
    name: "Dra. Natalia Possas",
    title: "Médica Veterinária",
    crmv: "CRMV-MG 20572",
    role: "Responsável Técnica e Fundadora",
    bio: "Especialista em medicina preventiva, manejo cat-friendly e atendimento humanizado sem contenções forçadas."
  },
  address: {
    street: "Rua Silvestre Ferraz, 27",
    neighborhood: "Sagrada Família",
    city: "Belo Horizonte",
    state: "MG",
    zipCode: "31030-120",
    fullAddress: "Rua Silvestre Ferraz, 27 - Sagrada Família, Belo Horizonte - MG, CEP 31030-120",
    reference: "Próximo à Av. Silviano Brandão e ao Hospital São Camilo"
  },
  businessHours: {
    weekdays: "Segunda a Sexta: 9h às 18h",
    saturday: "Sábado: 8h30 às 13h",
    sunday: "Domingo: Fechado",
    isOpenNow: true,
    displayHours: "Seg a Sex: 9h às 18h • Sáb: 8h30 às 13h"
  },
  contacts: {
    whatsappUrl: "https://wa.link/2ooc5p",
    whatsappDisplay: "wa.link/2ooc5p",
    instagramUrl: "https://instagram.com/petshoppaisdepet",
    instagramHandle: "@petshoppaisdepet"
  },
  accreditations: [
    {
      name: "Petlove Saúde",
      type: "Rede Credenciada Oficial",
      description: "Atendimento veterinário e exames cobertos pelo seu plano Petlove."
    },
    {
      name: "DogLife Convênios",
      type: "Parceiro Autorizado",
      description: "Cobertura integrada para consultas e procedimentos."
    },
    {
      name: "Certificação Fear-Free",
      type: "Protocolo Clínico Padrão Ouro",
      description: "Ambiente livre de gaiolas, com aromaterapia e toalhas 100% descartáveis."
    }
  ],
  homeCareAreas: [
    { name: "Sagrada Família", region: "Leste (Base Clínica)", priority: true },
    { name: "Floresta", region: "Centro-Sul", priority: true },
    { name: "Santa Tereza", region: "Leste", priority: true },
    { name: "Cidade Nova", region: "Nordeste", priority: true },
    { name: "Horto", region: "Leste", priority: true },
    { name: "Silveira", region: "Nordeste", priority: true },
    { name: "Concórdia", region: "Nordeste", priority: false },
    { name: "Colégio Batista", region: "Leste", priority: false }
  ]
};
