import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catálogo de iPhones | Cotiza por WhatsApp" },
      {
        name: "description",
        content:
          "Catálogo completo de iPhones 13, 14, 15, 16 y 17. Precios en soles y cotización inmediata por WhatsApp.",
      },
      { property: "og:title", content: "Catálogo de iPhones | Cotiza por WhatsApp" },
      {
        property: "og:description",
        content:
          "Encuentra tu iPhone ideal y solicita una cotización inmediata por WhatsApp.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Catalog />
      <Footer />
    </main>
  );
}
