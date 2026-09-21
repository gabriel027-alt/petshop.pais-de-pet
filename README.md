# Lat & Mia • Portal Corporativo & Vitrine de Serviços (Enterprise-Grade)

Portal institucional e vitrine de alta conversão desenvolvido sob diretrizes rigorosas de design corporativo (padrão Petz, Stripe e grandes redes do varejo premium), sem elementos artificiais ou "cara de IA".

Projetado para ser 100% modular e personalizável para qualquer Pet Shop, Hospital Veterinário ou Centro de Estética em poucos minutos.

---

## 🚀 Como Executar o Projeto

```bash
# Entrar na pasta do projeto
cd "C:\Users\Gabriel Batista\.gemini\antigravity\scratch\lat-e-mia-portal"

# Executar em modo de desenvolvimento (Porta 3000)
npm run dev

# Ou compilar para produção
npm run build
npm run start
```

Acesse em seu navegador: [http://localhost:3000](http://localhost:3000)

---

## 🎨 Diretriz Estética Rigorosa (Zero Cara de IA)

- **Paleta de Cores Institucional**:
  - Primária Corporativa: `#175EA8` (Azul Petz/Institucional)
  - Neutros de Alto Contraste: `#F8FAFC` (Off-White) e `#0F172A` (Cinza Chumbo)
  - Acento de Status em Tempo Real: `#10B981` (Emerald Green)
- **Design System Sóbrio**: Bordas discretas (`border-slate-200`), sombras difusas de padrão bancário, tipografia hierarquizada e espaçamentos generosos (whitespace).
- **Zero Ruído**: Sem gradientes neon artificiais, sem elementos flutuantes inúteis e sem clichês de templates genéricos.

---

## ⚡ Como Personalizar para Outro Cliente em 60 Segundos

Toda a inteligência de dados, contatos, fotos, horários e textos está concentrada em um único arquivo mestre tipado:

📁 **`src/config/unit-config.ts`**

Para adaptar para qualquer nova loja ou franquia:
1. Altere o `brandName`, `unitName`, `cnpj` e `crmv`.
2. Atualize o endereço, link do Google Maps e do Waze.
3. Configure o número de WhatsApp em `contacts.whatsappRaw` (todos os formulários e botões de agendamento se adaptam automaticamente).
4. Altere a lista de serviços ou preços em `SERVICES_LIST`.
5. Pronto! O portal atualiza imediatamente.

---

## 📐 Arquitetura Modular

```
lat-e-mia-portal/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # SEO corporativo, JSON-LD Schema (LocalBusiness/VeterinaryCare)
│   │   ├── page.tsx                # Orquestração do portal
│   │   └── globals.css             # Estilos globais Tailwind
│   ├── components/
│   │   ├── header/                 # TopUtilityBar, CorporateHeader, MobileNavSheet
│   │   ├── hero/                   # UnitHero, SpaceGallery, UnitStatusBadge, UnitQuickInfo, UnitMapPreview
│   │   ├── services/               # ServicesShowcase, ServiceCard, QuickQuoteModal
│   │   ├── categories/             # DepartmentsGrid, LoyaltyClubBanner
│   │   ├── faq/                    # FaqSection (acordeão com busca em tempo real)
│   │   ├── booking/                # StickyBookingBar (conversão móvel e desktop)
│   │   └── footer/                 # CorporateFooter (CRMV, selos, formas de pagamento)
│   ├── config/
│   │   └── unit-config.ts          # Arquivo mestre de personalização
│   ├── types/
│   │   └── index.ts                # Tipagens TypeScript estritas
│   └── utils/
│       ├── business-hours.ts       # Lógica de cálculo dinâmico "Aberto agora • Fecha às 22h"
│       └── whatsapp.ts             # Gerador de links estruturados de WhatsApp
```

---

## 🏆 Performance e Métricas de Core Web Vitals

- **Tamanho do Bundle Inicial**: ~109 kB First Load JS.
- **Renderização Estática**: Prerender total via Next.js App Router.
- **Acessibilidade & SEO**: Dados estruturados Schema.org para Google Maps e busca orgânica local.