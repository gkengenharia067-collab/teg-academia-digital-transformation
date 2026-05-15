import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Mail, Clock, Send } from "lucide-react";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WA_MESSAGES, buildWhatsAppLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — TEG Academia | Campo Grande - MS" },
      {
        name: "description",
        content:
          "Fale com a TEG Academia. Rua Assunção, 1946 - Vila Morumbi, Campo Grande - MS. WhatsApp e e-mail.",
      },
      { property: "og:title", content: "Contato — TEG Academia" },
      { property: "og:description", content: "Fale com um consultor da TEG Academia." },
    ],
  }),
  component: Contato,
});

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Assun%C3%A7%C3%A3o+1946+Vila+Morumbi+Campo+Grande+MS";

function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${form.nome} (${form.email}).\n\n${form.mensagem}`;
    window.open(buildWhatsAppLink(msg), "_blank");
  };

  return (
    <>
      <section className="bg-card/40 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Contato
          </span>
          <h1 className="mt-2 font-display text-5xl sm:text-6xl">
            Fale <span className="text-primary">conosco</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">Envie uma mensagem</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Preencha o formulário e continuaremos a conversa pelo WhatsApp.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="nome" className="text-sm font-medium">Nome</label>
              <input
                id="nome"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-input px-4 py-3 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">E-mail</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-input px-4 py-3 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="text-sm font-medium">Mensagem</label>
              <textarea
                id="mensagem"
                required
                rows={5}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                className="mt-1 w-full rounded-md border border-input bg-input px-4 py-3 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)]"
            >
              <Send className="h-4 w-4" /> Enviar via WhatsApp
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-3xl">Informações</h2>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <MapPin className="h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">Endereço</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Rua Assunção, 1946 — Vila Morumbi
                <br />
                Campo Grande - MS, 79052-061
              </p>
              <span className="mt-2 inline-block text-xs font-semibold text-primary">
                Ver no Google Maps →
              </span>
            </div>
          </a>

          <a
            href="mailto:teg@tegacademias.com.br"
            className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <Mail className="h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">E-mail</h3>
              <p className="mt-1 text-sm text-muted-foreground">teg@tegacademias.com.br</p>
            </div>
          </a>

          <div className="flex gap-4 rounded-xl border border-border bg-card p-6">
            <Clock className="h-6 w-6 flex-shrink-0 text-primary" />
            <div>
              <h3 className="font-semibold">Horários</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Segunda a Sexta: 5h às 22h
                <br />
                Sábado: 8h às 16h
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-primary/40 bg-primary/5 p-6">
            <h3 className="font-display text-2xl">Quer falar agora?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Um consultor está pronto para tirar suas dúvidas no WhatsApp.
            </p>
            <div className="mt-4">
              <WhatsAppButton message={WA_MESSAGES.contato} className="w-full sm:w-auto">
                Falar com Consultor
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
