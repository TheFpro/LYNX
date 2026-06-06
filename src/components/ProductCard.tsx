import { useState } from "react";
import { buildWhatsAppUrl, formatPrice, getProductImage, type Product } from "@/lib/products";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { ProductDetailModal } from "./ProductDetailModal";

export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="group relative flex flex-col rounded-3xl bg-card border border-border/60 p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] shadow-[var(--shadow-card)]">
        <div
          className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted/60 cursor-pointer"
          onClick={() => setOpen(true)}
          role="button"
          aria-label={`Ver detalles de ${product.name}`}
        >
          <img
            src={getProductImage(product)}
            alt={product.name}
            loading="lazy"
            width={800}
            height={800}
            className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground">
            iPhone {product.generation}
          </span>
          {/* Hint overlay on hover */}
          <span className="absolute inset-0 flex items-end justify-center pb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="rounded-full bg-background/80 backdrop-blur px-3 py-1 text-[11px] font-medium text-muted-foreground">
              Ver detalles
            </span>
          </span>
        </div>

        <div className="mt-6 flex flex-1 flex-col">
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Capacidad {product.capacity}
          </p>

          <div className="mt-5 flex items-baseline gap-1">
            <span className="text-2xl font-semibold tracking-tight">
              {formatPrice(product.price)}
            </span>
            <span className="text-xs text-muted-foreground">PEN</span>
          </div>

          <a
            href={buildWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-whatsapp-hover focus:outline-none focus:ring-2 focus:ring-whatsapp/40"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Cotizar por WhatsApp
          </a>
        </div>
      </article>

      {open && (
        <ProductDetailModal product={product} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
