import { useMemo, useState } from "react";
import { GENERATIONS, PRODUCTS } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function Catalog() {
  const [gen, setGen] = useState<number | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (gen !== "all" && p.generation !== gen) return false;
      if (!q) return true;
      return p.name.toLowerCase().includes(q) || p.capacity.toLowerCase().includes(q);
    });
  }, [gen, query]);

  return (
    <section id="catalogo" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
          Todos los modelos. Una sola tienda.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground text-balance">
          Explora el catálogo completo y solicita tu cotización en segundos.
        </p>
      </div>

      {/* Search */}
      <div className="mt-12 mx-auto max-w-xl">
        <div className="relative">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar modelo, capacidad o versión…"
            className="w-full rounded-full border border-border bg-card/60 px-6 py-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground/40 transition-colors"
            aria-label="Buscar iPhone"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <FilterChip active={gen === "all"} onClick={() => setGen("all")}>
          Todos
        </FilterChip>
        {GENERATIONS.map((g) => (
          <FilterChip key={g} active={gen === g} onClick={() => setGen(g)}>
            iPhone {g}
          </FilterChip>
        ))}
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="mt-20 text-center text-muted-foreground">
          No encontramos modelos con ese criterio.
        </p>
      ) : (
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="animate-fade-up"
              style={{ animationDelay: `${Math.min(i * 40, 600)}ms` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? "bg-foreground text-background"
          : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
