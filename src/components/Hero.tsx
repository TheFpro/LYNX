import heroImg from "@/assets/hero-iphones.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/40 to-background pt-20 pb-12 sm:pt-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Lynx · Importadores de iPhone
        </p>
        <h1
          className="animate-fade-up mt-5 text-5xl sm:text-7xl font-semibold tracking-tight text-balance"
          style={{ animationDelay: "80ms" }}
        >
          Catálogo de iPhones
        </h1>
        <p
          className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-muted-foreground text-balance"
          style={{ animationDelay: "160ms" }}
        >
          Encuentra el modelo ideal y solicita tu cotización en segundos.
        </p>
        <div
          className="animate-fade-up mt-10 flex justify-center"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#catalogo"
            className="rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03]"
          >
            Ver Catálogo
          </a>
        </div>
      </div>

      {/* Hero image — full width, sin márgenes */}
      <div
        className="animate-float mt-16 w-full"
        style={{ animationDelay: "320ms" } as React.CSSProperties}
      >
        <img
          src={heroImg}
          alt="Variedad de iPhones premium"
          width={1600}
          height={1100}
          className="w-full h-auto select-none"
          draggable={false}
        />
      </div>
    </section>
  );
}
