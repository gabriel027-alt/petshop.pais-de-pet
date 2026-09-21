import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pais de Pet • Clínica e Pet Shop | Sagrada Família, BH",
  description: "Pais de Pet: Consultório veterinário com Dra. Natalia Possas (CRMV-MG 20572), banho e tosa carinhoso, atendimento domiciliar e rações na Rua Silvestre Ferraz, 27 - Sagrada Família, Belo Horizonte - MG. WhatsApp: wa.link/2ooc5p.",
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
  openGraph: {
    title: "Pais de Pet • Clínica e Pet Shop",
    description: "Amor de pai e mãe com o cuidado de especialista. Atendimento veterinário presencial e em domicílio no Sagrada Família, BH.",
    url: "https://instagram.com/petshoppaisdepet",
    siteName: "Pais de Pet",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    name: "Pais de Pet - Clínica e Pet Shop",
    description: "Clínica veterinária, banho e tosa, atendimento domiciliar e rações no Bairro Sagrada Família",
    telephone: "(31) 98338-0139",
    url: "https://wa.link/2ooc5p",
    sameAs: ["https://instagram.com/petshoppaisdepet"],
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:30",
        closes: "13:00",
      },
    ],
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-[#2C1820] antialiased selection:bg-[#84CC16]/30 selection:text-[#2C1820]">
        {children}
      </body>
    </html>
  );
}