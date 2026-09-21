export interface OperatingHoursDay {
  open: number; // minutes from midnight (e.g. 8 * 60 = 480)
  close: number; // minutes from midnight (e.g. 22 * 60 = 1320)
  display: string;
}

export interface UnitInfo {
  brandName: string;
  tagline: string;
  unitName: string;
  unitCode: string;
  isFlagship: boolean;
  cnpj: string;
  crmv: {
    vetName: string;
    number: string;
    uf: string;
  };
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
    fullFormatted: string;
    reference: string;
    wazeUrl: string;
    googleMapsUrl: string;
    mapsEmbedUrl: string;
  };
  contacts: {
    phoneDisplay: string;
    phoneRaw: string;
    whatsappDisplay: string;
    whatsappRaw: string;
    emergency24hDisplay: string;
    emergency24hRaw: string;
    sacEmail: string;
  };
  schedule: {
    mondayFriday: OperatingHoursDay;
    saturday: OperatingHoursDay;
    sundayHoliday: OperatingHoursDay;
    hospital24hActive: boolean;
  };
  amenities: {
    icon: string;
    label: string;
    desc: string;
  }[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  spaceName: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: "grooming" | "vet" | "hotel" | "pharmacy";
  categoryLabel: string;
  shortDescription: string;
  fullDetails: string;
  badge?: string;
  startingPrice: string;
  typicalDuration: string;
  highlights: string[];
  icon: string;
  whatsappPresetText: string;
}

export interface DepartmentItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  popularItems: string[];
  icon: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface QuoteSimulation {
  petType: "dog" | "cat";
  petSize: "small" | "medium" | "large";
  serviceId: string;
  transportRequired: boolean;
  notes?: string;
}
