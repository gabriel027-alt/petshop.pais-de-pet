import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://paisdepet.com.br"),
  title: "Pais de Pet • Clínica e Pet Shop | Sagrada Família, BH",
  description:
    "Pais de Pet: Consultório veterinário com Dra. Natalia Possas (CRMV-MG 20572), atendimento cat-friendly, banho com toalhas 100% descartáveis e atendimento domiciliar no Sagrada Família, Belo Horizonte - MG.",
  keywords: [
    "pais de pet",
    "pet shop pais de pet",
    "@petshoppaisdepet",
    "pet shop sagrada familia bh",
    "veterinario sagrada familia",
    "dra natalia possas veterinaria",
    "banho e tosa silvestre ferraz",
    "atendimento domiciliar pet bh",
    "clinica petlove sagrada familia",
  ],
  alternates: {
    canonical: "https://paisdepet.com.br",
  },
  icons: {
    icon: [{ url: "/foto-perfil-pais-de-pet.jpg", type: "image/jpeg" }],
    apple: "/foto-perfil-pais-de-pet.jpg",
  },
  openGraph: {
    title: "Pais de Pet • Clínica e Pet Shop",
    description:
      "Pais de Pet: Consultório veterinário com Dra. Natalia Possas (CRMV-MG 20572), atendimento cat-friendly, banho com toalhas 100% descartáveis e atendimento domiciliar no Sagrada Família, Belo Horizonte - MG.",
    url: "https://paisdepet.com.br",
    siteName: "Pais de Pet",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://paisdepet.com.br/foto-perfil-pais-de-pet.jpg",
        width: 800,
        height: 800,
        alt: "Pais de Pet Clínica e Pet Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pais de Pet • Clínica e Pet Shop",
    description:
      "Pais de Pet: Consultório veterinário com Dra. Natalia Possas (CRMV-MG 20572), atendimento cat-friendly, banho com toalhas 100% descartáveis e atendimento domiciliar no Sagrada Família, Belo Horizonte - MG.",
    images: ["https://paisdepet.com.br/foto-perfil-pais-de-pet.jpg"],
  },
};

export const viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    inLanguage: "pt-BR",
    name: "Pais de Pet - Clínica e Pet Shop",
    description:
      "Consultório veterinário com Dra. Natalia Possas (CRMV-MG 20572), atendimento cat-friendly, banho com toalhas 100% descartáveis e atendimento domiciliar no Sagrada Família, Belo Horizonte - MG.",
    telephone: "+5531983380139",
    priceRange: "$$",
    url: "https://paisdepet.com.br",
    sameAs: [
      "https://instagram.com/petshoppaisdepet",
      "https://www.google.com/maps/search/?api=1&query=Pais+de+Pet+Rua+Silvestre+Ferraz+27+Sagrada+Fam%C3%ADlia+Belo+Horizonte+MG"
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Silvestre Ferraz, 27",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      postalCode: "31030-120",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["https://schema.org/Saturday"],
        opens: "08:30",
        closes: "13:00",
      },
    ],
  };

  return (
    <html lang="pt-BR" className="scroll-smooth scroll-pt-20 sm:scroll-pt-24 lg:scroll-pt-28">
      <head>
        <link rel="preload" as="image" href="/intro-interativa-poster.jpg" fetchPriority="high" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-[#2C1820] antialiased selection:bg-[#84CC16]/30 selection:text-[#2C1820]">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FF2E93] focus:text-white focus:rounded-full focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}