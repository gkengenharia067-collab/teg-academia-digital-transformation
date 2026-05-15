export const WHATSAPP_NUMBER = "5567993009296";
export const DEVELOPER_WHATSAPP = "5567999222070";

export function buildWhatsAppLink(message: string, number: string = WHATSAPP_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  hero: "Olá! Vi o site novo e gostaria de agendar uma aula experimental gratuita. Podem me ajudar?",
  musculacao: "Olá! Me interessei pelo plano de Musculação e gostaria de mais informações.",
  funcional: "Olá! Quero saber mais sobre o plano de Treinamento Funcional. Ainda tem vaga?",
  mensal: "Olá! Quero fazer o Plano Mensal de R$119,90. Como me matriculo hoje?",
  recorrente: "Olá! Tenho interesse no Plano Recorrente de R$99,70. Quais os próximos passos?",
  anual: "Olá! Quero aproveitar o Plano Anual de 12x R$89,90. Como posso garantir essa oferta?",
  contato: "Olá! Vim pelo site e gostaria de falar com um consultor.",
  float: "Olá! Estou no site da TEG e preciso de ajuda.",
};
