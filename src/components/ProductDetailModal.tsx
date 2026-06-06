import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { buildWhatsAppUrl, formatPrice, getProductImage, getProductSpecs, type Product } from "@/lib/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ProductDetailModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const specs = getProductSpecs(product);
  const [selectedColor, setSelectedColor] = useState(specs?.colors[0] ?? null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 250);
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: visible ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
        backdropFilter: visible ? "blur(6px)" : "blur(0px)",
        transition: "background-color 250ms ease, backdrop-filter 250ms ease",
      }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-background shadow-2xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
          transition: "opacity 280ms cubic-bezier(0.4,0,0.2,1), transform 280ms cubic-bezier(0.4,0,0.2,1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-accent transition-colors"
          aria-label="Cerrar"
        >
          ✕
        </button>

        <div className="flex flex-col sm:flex-row">
          {/* Image panel */}
          <div
            className="flex items-center justify-center rounded-t-3xl sm:rounded-l-3xl sm:rounded-tr-none p-8 sm:w-56 shrink-0 transition-colors duration-300"
            style={{ backgroundColor: selectedColor ? selectedColor.hex + "22" : undefined }}
          >
            <img
              src={getProductImage(product)}
              alt={product.name}
              className="w-40 h-40 sm:w-48 sm:h-48 object-contain drop-shadow-xl"
            />
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-5 p-6 sm:p-8 flex-1 min-w-0">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                iPhone {product.generation}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">{product.name}</h2>
              <p className="mt-1 text-xl font-semibold text-foreground">
                {formatPrice(product.price)}{" "}
                <span className="text-sm font-normal text-muted-foreground">PEN</span>
              </p>
            </div>

            {/* Colors */}
            {specs && specs.colors.length > 0 && (
              <div>
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
                  Color —{" "}
                  <span className="normal-case font-normal">{selectedColor?.name}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {specs.colors.map((c) => (
                    <button
                      key={c.hex}
                      title={c.name}
                      onClick={() => setSelectedColor(c)}
                      className="h-7 w-7 rounded-full border-2 transition-all duration-150"
                      style={{
                        backgroundColor: c.hex,
                        borderColor:
                          selectedColor?.hex === c.hex
                            ? "hsl(var(--foreground))"
                            : "transparent",
                        outline:
                          selectedColor?.hex === c.hex
                            ? "2px solid hsl(var(--background))"
                            : "none",
                        outlineOffset: "1px",
                        boxShadow: "0 0 0 1px hsl(var(--border))",
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Specs */}
            {specs && (
              <div className="grid grid-cols-1 gap-2">
                <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
                  Especificaciones
                </p>
                {[
                  { label: "Chip",           value: specs.chip },
                  { label: "Pantalla",       value: specs.display },
                  { label: "Cámara",         value: specs.mainCamera },
                  { label: "Batería",        value: specs.battery },
                  { label: "Material",       value: specs.material },
                  { label: "Almacenamiento", value: product.capacity },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3 text-sm">
                    <span className="w-28 shrink-0 text-muted-foreground">{label}</span>
                    <span className="text-foreground">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <a
              href={buildWhatsAppUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-whatsapp-hover focus:outline-none focus:ring-2 focus:ring-whatsapp/40"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
