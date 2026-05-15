import { MapPin, Mail, Clock, Dumbbell } from "lucide-react";
import { DEVELOPER_WHATSAPP, buildWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display text-2xl tracking-wider">
            <Dumbbell className="h-6 w-6 text-primary" />
            TEG <span className="text-primary">ACADEMIA</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Potencialize sua força, transforme sua vida, conquiste sua melhor versão.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Endereço
          </h3>
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            Rua Assunção, 1946 — Vila Morumbi, Campo Grande - MS, 79052-061
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Contato
          </h3>
          <a
            href="mailto:teg@tegacademias.com.br"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <Mail className="h-4 w-4 text-primary" />
            teg@tegacademias.com.br
          </a>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Horários
          </h3>
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            <div>
              <p>Seg a Sex: 5h às 22h</p>
              <p>Sáb: 8h às 16h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} TEG Academia. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href={buildWhatsAppLink("Olá Gabriel! Vi seu trabalho na TEG Academia.", DEVELOPER_WHATSAPP)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              Gabriel Cantelle
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
