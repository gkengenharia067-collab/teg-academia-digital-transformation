import { buildWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  message: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className = "",
  showIcon = true,
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-200";
  const styles =
    variant === "primary"
      ? "bg-gradient-brand text-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5"
      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground";

  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {showIcon && <MessageCircle className="h-4 w-4" />}
      {children}
    </a>
  );
}
