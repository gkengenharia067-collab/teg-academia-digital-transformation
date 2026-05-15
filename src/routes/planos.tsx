import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WA_MESSAGES } from "@/lib/whatsapp";

export const Route = createFileRoute("/planos")({
  head: () => ({
    meta: [
      { title: "Planos — TEG Academia | Mensal, Recorrente e Anual" },
      {
        name: "description",
        content:
          "Planos a partir de R$ 89,90/mês. Mensal R$119,90, Recorrente R$99,70 e Anual 12x R$89,90. Matricule-se na TEG.",
      },
      { property: "og:title", content: "Planos TEG Academia" },
      { property: "og:description", content: "Planos a partir de R$ 89,90/mês." },
    ],
  }),
  component: Planos,
});

const plans = [
  {
    name: "Mensal",
    price: "119,90",
    period: "/mês",
    desc: "Pagamento único, sem renovação automática.",
    features: ["Acesso completo à academia", "Todas as modalidades", "App de treinos"],
    message: WA_MESSAGES.mensal,
    highlight: false,
    cta: "Começar Agora",
  },
  {
    name: "Recorrente",
    price: "99,70",
    period: "/mês",
    desc: "Débito automático com renovação mensal.",
    features: [
      "Acesso completo à academia",
      "Todas as modalidades",
      "App de treinos",
      "Sem precisar pagar todo mês",
    ],
    message: WA_MESSAGES.recorrente,
    highlight: true,
    cta: "Quero Recorrente",
  },
  {
    name: "Anual",
    price: "89,90",
    period: "/mês",
    desc: "12x no cartão. Total: R$ 1.078,80.",
    features: [
      "Acesso completo à academia",
      "Todas as modalidades",
      "App de treinos",
      "Melhor custo-benefício",
    ],
    message: WA_MESSAGES.anual,
    highlight: false,
    cta: "Garantir Oferta",
  },
];

function Planos() {
  return (
    <>
      <section className="bg-card/40 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Planos
          </span>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            Escolha seu <span className="text-primary">plano</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Treine sem complicação. Sem taxa de matrícula, sem fidelidade obrigatória.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-xl border bg-card p-8 transition-all ${
                p.highlight
                  ? "border-primary shadow-[var(--shadow-glow)] md:scale-105"
                  : "border-border hover:border-primary/60"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  Mais popular
                </span>
              )}
              <h2 className="font-display text-3xl">{p.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

              <div className="my-6 flex items-baseline gap-1">
                <span className="text-2xl text-muted-foreground">R$</span>
                <span className="font-display text-6xl text-primary">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.period}</span>
              </div>

              <ul className="mb-8 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <WhatsAppButton message={p.message} className="w-full">
                  {p.cta}
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
