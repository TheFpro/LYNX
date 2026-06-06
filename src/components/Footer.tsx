import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildWhatsAppUrl } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h3 className="text-3xl font-semibold tracking-tight text-balance">
          Solicita tu cotización de forma rápida y segura.
        </h3>
        <p className="mt-3 text-muted-foreground">
          Responderemos a tu consulta directamente por WhatsApp.
        </p>

        <a
          href={buildWhatsAppUrl("iPhone de su catálogo")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-whatsapp-hover"
        >
          <WhatsAppIcon className="h-5 w-5" />
          +51 963 047 525
        </a>

        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lynx — Importadores de iPhone. Todos los precios en soles (PEN).
        </p>
      </div>
    </footer>
  );
}
