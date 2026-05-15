import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — TEG Academia | Nossa História em Campo Grande" },
      {
        name: "description",
        content:
          "Conheça a TEG Academia, fundada em dezembro de 2024 em Campo Grande - MS. Missão, visão e valores.",
      },
      { property: "og:title", content: "Sobre a TEG Academia" },
      {
        property: "og:description",
        content: "Transformando vidas com saúde, força e bem-estar desde 2024.",
      },
    ],
  }),
  component: Sobre,
});

const pillars = [
  {
    icon: Target,
    title: "Missão",
    desc: "Transformar vidas por meio do exercício, oferecendo um ambiente acolhedor, profissional e com tecnologia para que cada aluno alcance seus objetivos.",
  },
  {
    icon: Eye,
    title: "Visão",
    desc: "Ser referência em Campo Grande na promoção de saúde, performance e bem-estar, conectando pessoas a uma vida mais ativa.",
  },
  {
    icon: Heart,
    title: "Valores",
    desc: "Respeito, evolução constante, profissionalismo, comunidade e paixão por resultados reais e duradouros.",
  },
];

function Sobre() {
  return (
    <>
      <section className="bg-card/40 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Sobre nós
          </span>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            Mais que uma <span className="text-primary">academia</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A TEG Academia, fundada em dezembro de 2024, foi criada para transformar vidas com
            saúde, força e bem-estar. Acreditamos que cada treino é um passo rumo à melhor versão
            de você mesmo — com estrutura moderna, profissionais qualificados e uma comunidade que
            celebra cada conquista.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <p.icon className="h-7 w-7" />
              </div>
              <h2 className="font-display text-3xl">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
