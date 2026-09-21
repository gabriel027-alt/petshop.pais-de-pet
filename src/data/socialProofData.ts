export interface SocialProofItem {
  id: number;
  type: "video" | "photo";
  url: string;
  label: string;
  badge: string;
  author: string;
  comment: string;
  rating: number;
}

export const socialProofData: SocialProofItem[] = [
  {
    id: 1,
    type: "video",
    url: "/depoimento-amigos-paisdepet1.mp4",
    label: "Manejo Afetuoso • Banho & Tosa",
    badge: "Vídeo Real no Banho",
    author: "Camila & Theo (Golden Retriever)",
    comment: "Zero estresse e muito carinho durante toda a secagem. Nunca vi meu cachorro tão calmo voltando de pet shop!",
    rating: 5
  },
  {
    id: 2,
    type: "photo",
    url: "/depoimento-paisdepet1.jpeg",
    label: "Story de Tutor • Experiência Real",
    badge: "Story do Instagram",
    author: "Rodrigo M. • Morador do Sagrada Família",
    comment: "A alegria de ver meu filhote cheiroso, hidratado e sem nenhum trauma de banho. Pais de Pet é padrão ouro!",
    rating: 5
  },
  {
    id: 3,
    type: "video",
    url: "/depoimento-paisdepet4.mp4",
    label: "Banho Relaxante com Massagem",
    badge: "Vídeo Real",
    author: "Mariana & Amora (Spitz Alemão)",
    comment: "Água na temperatura morna perfeita, toalhas descartáveis abertas na minha frente e massagem relaxante.",
    rating: 5
  },
  {
    id: 4,
    type: "photo",
    url: "/depoimento-paisdepet2.jpg",
    label: "Feedback de Paciente em Recuperação",
    badge: "Depoimento Verificado",
    author: "Juliana P. • Tutora de Felino",
    comment: "Dra. Natalia salvou nosso gatinho com paciência ímpar e diagnóstico rápido. O atendimento felino fez toda a diferença.",
    rating: 5
  },
  {
    id: 5,
    type: "photo",
    url: "/depoimento-paisdepet3.jpg",
    label: "Aumigo Frequente da Clínica",
    badge: "Cliente Assíduo de BH",
    author: "Felipe S. • Bairro Floresta",
    comment: "O único lugar onde meu pet entra abanando o rabinho e querendo brincar com a equipe. Confiança total!",
    rating: 5
  }
];

export const communityStats = {
  rating: "5.0 ★",
  ratingLabel: "Avaliações Verificadas",
  hygieneProtocol: "100%",
  hygieneLabel: "Toalhas Descartáveis",
  crmv: "CRMV-MG 20572",
  crmvLabel: "Dra. Natalia Possas"
};
