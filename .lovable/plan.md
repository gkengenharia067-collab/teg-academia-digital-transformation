# Plano — Site TEG Academia

Site moderno, responsivo e otimizado em React + TanStack Start + Tailwind, com paleta dark e acento verde neon.

## Estrutura de rotas (TanStack Router)

```
src/routes/
  __root.tsx          → header + footer + botão flutuante WhatsApp
  index.tsx           → Home (Hero + Diferenciais + teaser)
  sobre.tsx           → Sobre (história, missão, visão, valores)
  modalidades.tsx     → Musculação + Funcional
  planos.tsx          → Mensal, Recorrente, Anual
  contato.tsx         → Formulário + endereço + mapa + WhatsApp
```

Cada rota terá `head()` próprio (title, description, og:title, og:description) com palavras-chave locais ("academia Campo Grande", "Vila Morumbi").

## Componentes compartilhados

```
src/components/
  Header.tsx           → logo TEG + nav (Home, Sobre, Modalidades, Planos, Contato) + menu mobile
  Footer.tsx           → contato, horários, assinatura "Gabriel Cantelle"
  WhatsAppFloat.tsx    → botão fixo bottom-right
  WhatsAppButton.tsx   → CTA reutilizável que monta wa.me/5567993009296?text=...
  SectionTitle.tsx
  PlanCard.tsx
  ModalityCard.tsx
  FeatureCard.tsx
```

Helper `src/lib/whatsapp.ts` com `buildWhatsAppLink(message)` para centralizar o número e encoding das mensagens.

## Conteúdo por página

**Home**
- Hero full-screen com imagem gerada (interior de academia, climatizada, equipamentos modernos), overlay escuro, "TEG Academia", slogan, CTA "Agende uma Aula Grátis" → WhatsApp com mensagem da aula experimental.
- Grade de 3 cards: Ambiente Climatizado, App de Treinos Exclusivo, Horário Flexível (ícones lucide-react).
- Faixa com chamada para Modalidades e Planos.

**Sobre**
- Texto fundacional (dez/2024, transformar vidas).
- 3 blocos: Missão, Visão, Valores.

**Modalidades**
- 2 cards grandes (foto + título + descrição + botão "Quero este plano") com mensagens WhatsApp específicas para Musculação e Funcional.

**Planos**
- 3 colunas (Mensal R$119,90 / Recorrente R$99,70 destacado / Anual 12x R$89,90).
- Cada um com lista de benefícios e CTA WhatsApp com a mensagem exata pedida.

**Contato**
- Formulário (Nome, E-mail, Mensagem) — envio abre WhatsApp pré-preenchido com os dados (sem backend).
- Endereço clicável → Google Maps.
- Horários.
- Botão WhatsApp grande "Falar com consultor".

## Funcionalidades transversais

- **WhatsAppFloat** em `__root.tsx`, visível em todas as páginas.
- **Footer** em `__root.tsx` com endereço, e-mail, horários e assinatura "Desenvolvido por [Gabriel Cantelle](https://wa.me/5567999222070)".
- Scroll restoration já configurada no router.

## Design system (`src/styles.css`)

Tokens em oklch, dark por padrão:
- `--background`: preto profundo
- `--foreground`: quase branco
- `--card`: cinza escuro
- `--primary`: verde neon (~oklch(0.85 0.22 145))
- `--primary-foreground`: preto
- `--accent`: variação do verde para hover/glow
- Gradiente `--gradient-primary` e sombra `--shadow-glow` para CTAs.

Tipografia: par display + sans (ex.: Bebas Neue + Inter via Google Fonts no `__root.tsx`).

## Imagens

Geradas via imagegen e salvas em `src/assets/`:
- `hero-academia.jpg` (interior da academia)
- `musculacao.jpg`
- `funcional.jpg`

Importadas como ES6 imports (lazy `loading="lazy"` exceto hero), com `alt` descritivo.

## Performance & SEO

- Imagens otimizadas (.jpg) e lazy loading.
- Meta tags por rota, H1 único por página, HTML semântico (`<header>`, `<main>`, `<section>`, `<footer>`).
- JSON-LD `LocalBusiness` (gym) no `__root.tsx` com endereço, telefone, horários.
- Viewport responsivo, classes Tailwind mobile-first.

## Mensagens WhatsApp (todas via `buildWhatsAppLink`)

| Origem | Mensagem |
|---|---|
| Hero CTA | Olá! Vi o site novo e gostaria de agendar uma aula experimental gratuita. Podem me ajudar? |
| Card Musculação | Olá! Me interessei pelo plano de Musculação e gostaria de mais informações. |
| Card Funcional | Olá! Quero saber mais sobre o plano de Treinamento Funcional. Ainda tem vaga? |
| Plano Mensal | Olá! Quero fazer o Plano Mensal de R$119,90. Como me matriculo hoje? |
| Plano Recorrente | Olá! Tenho interesse no Plano Recorrente de R$99,70. Quais os próximos passos? |
| Plano Anual | Olá! Quero aproveitar o Plano Anual de 12x R$89,90. Como posso garantir essa oferta? |
| Contato | Olá! Vim pelo site e gostaria de falar com um consultor. |
| Botão flutuante | Olá! Estou no site da TEG e preciso de ajuda. |

## Detalhes técnicos

- Stack já existente: TanStack Start + React 19 + Tailwind v4 + shadcn/ui.
- Sem backend necessário (formulário usa WhatsApp).
- Sem dependências novas além das já presentes (lucide-react para ícones).
- Acento de cor: verde neon como destaque principal (conforme pedido, escolhi verde sobre laranja por contrastar melhor com fotos de academia; posso trocar se preferir laranja).
