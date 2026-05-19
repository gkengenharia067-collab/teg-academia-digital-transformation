import { createFileRoute } from "@tanstack/react-router";
import musculacaoImg from "@/assets/musculacao.jpg";
import funcionalImg from "@/assets/funcional.jpg";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/whatsapp";

export const Route = createFileRoute("/modalidades")({
  head: () => ({
    meta: [
      { title: "Modalidades — Musculação e Funcional | TEG Academia" },
      {
        name: "description",
        content:
          "Musculação e treinamento funcional em Campo Grande - MS. Treinos intensos e dinâmicos para todos os níveis.",
      },
      { property: "og:title", content: "Modalidades — TEG Academia" },
      {
        property: "og:description",
        content: "Musculação e treinamento funcional em Campo Grande - MS.",
      },
    ],
  }),
  component: Modalidades,
});

const items = [
  {
    img: musculacaoImg,
    title: "Musculação",
    desc: "Treinos intensos maximizam ganhos, estimulando os músculos a se desenvolverem mais rápido e de forma eficaz.",
    message: WA_MESSAGES.musculacao,
  },
  {
    img: funcionalImg,
    title: "Treinamento Funcional",
    desc: "Melhore sua performance, flexibilidade e resistência com exercícios dinâmicos e de alta intensidade.",
    message: WA_MESSAGES.funcional,
  },
];

function Modalidades() {
  return (
    <>
      <section className="bg-card/40 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-gradient">
            Modalidades
          </span>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            Escolha seu <span className="text-gradient">treino</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary hover:shadow-[var(--shadow-card)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <h2 className="font-display text-3xl">{it.title}</h2>
                <p className="mt-3 text-muted-foreground">{it.desc}</p>
                <div className="mt-6">
                  <WhatsAppButton message={it.message}>Quero este plano</WhatsAppButton>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
