/**
 * Postbuild: llama directamente al handler Nitro (Cloudflare Workers format)
 * para renderizar el HTML de la ruta raíz y guardarlo en dist/client/index.html
 */
import { writeFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const serverPath = resolve(__dirname, "../dist/server/server.js");

console.log("🔨 Importando handler SSR...");

const mod = await import(serverPath);
const handler = mod.default ?? mod;

// El handler Nitro expone un método .fetch() compatible con Web Fetch API
if (typeof handler.fetch !== "function") {
  console.error("❌ El handler no tiene método .fetch(). Estructura:", Object.keys(handler));
  process.exit(1);
}

console.log("📡 Renderizando ruta raíz /...");

const request = new Request("http://localhost/");
const response = await handler.fetch(request, {});
const html = await response.text();

if (!html.includes("<html") && !html.includes("<!doctype")) {
  console.error("❌ La respuesta no parece HTML válido. Primeros 300 chars:", html.slice(0, 300));
  process.exit(1);
}

writeFileSync("dist/client/index.html", html, "utf-8");
console.log("✅ dist/client/index.html generado correctamente (" + html.length + " bytes).");
