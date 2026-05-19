import { createFileRoute, Link } from "@tanstack/react-router";
import { Snowflake, Smartphone, Clock, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-academia.jpg";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TEG Academia — Musculação em Campo Grande" },
      {
        name: "description",
        content:
          "Academia em Campo Grande - MS com musculação, funcional, ambiente climatizado e app de treinos. Venha treinar na melhor academia da região.",
      },
      { property: "og:title", content: "TEG Academia — Sua melhor versão começa aqui" },
      {
        property: "og:description",
        content: "Musculação e funcional em Campo Grande. Conquiste sua melhor versão na TEG.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: Snowflake,
    title: "Ambiente Climatizado",
    desc: "Treine confortável em qualquer estação. Temperatura ideal o dia inteiro.",
  },
  {
    icon: Smartphone,
    title: "App de Treinos Exclusivo",
    desc: "Acompanhe sua evolução, fichas e treinos personalizados direto no celular.",
  },
  {
    icon: Clock,
    title: "Horário Flexível",
    desc: "Aberto das 5h às 22h em dias úteis. Treine no seu melhor horário.",
  },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Interior da TEG Academia com equipamentos modernos"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/70 via-background/60 to-background" />

        <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-start justify-center px-4 py-24 sm:px-6">
          <span className="mb-4 inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gradient">
            Campo Grande - MS
          </span>
          <h1 className="font-display text-5xl leading-none text-foreground sm:text-7xl md:text-8xl">
            TEG <span className="text-gradient">ACADEMIA</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
            Potencialize sua força, transforme sua vida, conquiste sua melhor versão.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton message={WA_MESSAGES.hero} className="text-base">
              Matricule-se Agora
            </WhatsAppButton>
            <Link
              to="/planos"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary"
            >
              Ver Planos <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-gradient">
            Diferenciais
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl">
            Por que treinar na <span className="text-gradient">TEG?</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:border-primary hover:shadow-[var(--shadow-glow)]"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card/40 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="font-display text-4xl sm:text-5xl">
            Pronto para sua <span className="text-gradient">transformação?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Conheça nossas modalidades e escolha o plano ideal para você.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/modalidades"
              className="rounded-md border border-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gradient hover:bg-gradient-primary hover:text-primary-foreground"
            >
              Modalidades
            </Link>
            <Link
              to="/planos"
              className="rounded-md bg-gradient-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground hover:shadow-[var(--shadow-glow)]"
            >
              Ver Planos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
