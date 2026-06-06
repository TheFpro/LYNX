export type Product = {
  id: string;
  name: string;
  capacity: string;
  generation: number;
  price: number;
};

export type ColorSwatch = { name: string; hex: string };

export type ModelSpecs = {
  chip: string;
  display: string;
  mainCamera: string;
  battery: string;
  material: string;
  colors: ColorSwatch[];
};

type VariantKey = "base" | "pro" | "proMax";
type SpecsEntry = Record<VariantKey, ModelSpecs>;

/* ─── Apple CDN images ─────────────────────────────────────────────── */
const CDN = "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is";
const Q   = "?wid=500&hei=500&fmt=png-alpha&.v=1";

const IMAGE_MAP: Record<number, { base: string; pro: string; proMax?: string }> = {
  13: { base: `${CDN}/iphone-compare-iphone-13-202109${Q}`,  pro: `${CDN}/iphone-compare-iphone-13-pro-202109${Q}` },
  14: { base: `${CDN}/iphone-compare-iphone-14-202209${Q}`,  pro: `${CDN}/iphone-compare-iphone-14-pro-202209${Q}` },
  15: { base: `${CDN}/iphone-compare-iphone-15-202309${Q}`,  pro: `${CDN}/iphone-compare-iphone-15-pro-202309${Q}` },
  16: { base: `${CDN}/iphone-compare-iphone-16-202409${Q}`,  pro: `${CDN}/iphone-compare-iphone-16-pro-202409${Q}` },
  17: {
    base:   `${CDN}/iphone-compare-iphone-17-202509${Q}`,
    pro:    `${CDN}/iphone-17-pro-select-202509${Q}`,
    proMax: `${CDN}/iphone-17-pro-max-select-202509${Q}`,
  },
};

export const getProductImage = (product: Product): string => {
  const map = IMAGE_MAP[product.generation];
  if (!map) return "";
  const lower = product.name.toLowerCase();
  if (lower.includes("pro max") && map.proMax) return map.proMax;
  if (lower.includes("pro")) return map.pro;
  return map.base;
};

/* ─── Official colors (hex from Apple CSS) + specs ─────────────────── */
const SPECS: Record<number, SpecsEntry> = {
  13: {
    base: {
      chip: "A15 Bionic",
      display: '6.1" Super Retina XDR',
      mainCamera: "Dual 12 MP (Gran angular + Ultra gran angular)",
      battery: "Hasta 19 h de reproducción de video",
      material: "Vidrio y aluminio",
      colors: [
        { name: "Midnight",     hex: "#232A31" },
        { name: "Starlight",    hex: "#FAF6F2" },
        { name: "Pink",         hex: "#FADDD7" },
        { name: "Blue",         hex: "#276787" },
        { name: "PRODUCT(RED)", hex: "#BF0013" },
        { name: "Green",        hex: "#394C38" },
      ],
    },
    pro: {
      chip: "A15 Bionic",
      display: '6.1" Super Retina XDR ProMotion 120 Hz',
      mainCamera: "Triple 12 MP (Gran angular + Ultra gran angular + Teleobjetivo)",
      battery: "Hasta 22 h de reproducción de video",
      material: "Vidrio y acero inoxidable",
      colors: [
        { name: "Graphite",     hex: "#54524F" },
        { name: "Silver",       hex: "#F1F2ED" },
        { name: "Gold",         hex: "#FAE7CF" },
        { name: "Sierra Blue",  hex: "#A7C1D9" },
        { name: "Alpine Green", hex: "#576856" },
      ],
    },
    proMax: {
      chip: "A15 Bionic",
      display: '6.7" Super Retina XDR ProMotion 120 Hz',
      mainCamera: "Triple 12 MP (Gran angular + Ultra gran angular + Teleobjetivo 3x)",
      battery: "Hasta 28 h de reproducción de video",
      material: "Vidrio y acero inoxidable",
      colors: [
        { name: "Graphite",     hex: "#54524F" },
        { name: "Silver",       hex: "#F1F2ED" },
        { name: "Gold",         hex: "#FAE7CF" },
        { name: "Sierra Blue",  hex: "#A7C1D9" },
        { name: "Alpine Green", hex: "#576856" },
      ],
    },
  },
  14: {
    base: {
      chip: "A15 Bionic",
      display: '6.1" Super Retina XDR',
      mainCamera: "Dual 12 MP (Gran angular + Ultra gran angular)",
      battery: "Hasta 20 h de reproducción de video",
      material: "Vidrio y aluminio",
      colors: [
        { name: "Midnight",     hex: "#222930" },
        { name: "Starlight",    hex: "#FAF6F2" },
        { name: "PRODUCT(RED)", hex: "#FC0324" },
        { name: "Blue",         hex: "#A0B4C7" },
        { name: "Purple",       hex: "#E6DDEB" },
        { name: "Yellow",       hex: "#F9E479" },
      ],
    },
    pro: {
      chip: "A16 Bionic",
      display: '6.1" Super Retina XDR ProMotion 120 Hz',
      mainCamera: "Triple 48 MP (Gran angular + Ultra gran angular + Teleobjetivo 3x)",
      battery: "Hasta 23 h de reproducción de video",
      material: "Vidrio y acero inoxidable",
      colors: [
        { name: "Space Black",  hex: "#403E3D" },
        { name: "Silver",       hex: "#F0F2F2" },
        { name: "Gold",         hex: "#F4E8CE" },
        { name: "Deep Purple",  hex: "#594F63" },
      ],
    },
    proMax: {
      chip: "A16 Bionic",
      display: '6.7" Super Retina XDR ProMotion 120 Hz',
      mainCamera: "Triple 48 MP (Gran angular + Ultra gran angular + Teleobjetivo 3x)",
      battery: "Hasta 29 h de reproducción de video",
      material: "Vidrio y acero inoxidable",
      colors: [
        { name: "Space Black",  hex: "#403E3D" },
        { name: "Silver",       hex: "#F0F2F2" },
        { name: "Gold",         hex: "#F4E8CE" },
        { name: "Deep Purple",  hex: "#594F63" },
      ],
    },
  },
  15: {
    base: {
      chip: "A16 Bionic",
      display: '6.1" Super Retina XDR',
      mainCamera: "Dual 48 MP (Gran angular + Ultra gran angular)",
      battery: "Hasta 20 h de reproducción de video",
      material: "Vidrio y aluminio",
      colors: [
        { name: "Black",  hex: "#35393B" },
        { name: "Pink",   hex: "#E3C8CA" },
        { name: "Yellow", hex: "#E5E0C1" },
        { name: "Green",  hex: "#CAD4C5" },
        { name: "Blue",   hex: "#CED5D9" },
      ],
    },
    pro: {
      chip: "A17 Pro",
      display: '6.1" Super Retina XDR ProMotion 120 Hz',
      mainCamera: "Triple 48 MP (Gran angular + Ultra gran angular + Teleobjetivo 3x)",
      battery: "Hasta 23 h de reproducción de video",
      material: "Titanio y vidrio",
      colors: [
        { name: "Natural Titanium", hex: "#837F7D" },
        { name: "Blue Titanium",    hex: "#2F4452" },
        { name: "White Titanium",   hex: "#DDDDDD" },
        { name: "Black Titanium",   hex: "#1B1B1B" },
      ],
    },
    proMax: {
      chip: "A17 Pro",
      display: '6.7" Super Retina XDR ProMotion 120 Hz',
      mainCamera: "Triple 48 MP (Gran angular + Ultra gran angular + Teleobjetivo 5x)",
      battery: "Hasta 29 h de reproducción de video",
      material: "Titanio y vidrio",
      colors: [
        { name: "Natural Titanium", hex: "#837F7D" },
        { name: "Blue Titanium",    hex: "#2F4452" },
        { name: "White Titanium",   hex: "#DDDDDD" },
        { name: "Black Titanium",   hex: "#1B1B1B" },
      ],
    },
  },
  16: {
    base: {
      chip: "A18",
      display: '6.1" Super Retina XDR',
      mainCamera: "Dual 48 MP (Gran angular + Ultra gran angular)",
      battery: "Hasta 22 h de reproducción de video",
      material: "Vidrio y aluminio",
      colors: [
        { name: "Black",       hex: "#3C4042" },
        { name: "White",       hex: "#FAFAFA" },
        { name: "Pink",        hex: "#F2ADDA" },
        { name: "Teal",        hex: "#B0D4D2" },
        { name: "Ultramarine", hex: "#9AADF6" },
      ],
    },
    pro: {
      chip: "A18 Pro",
      display: '6.3" Super Retina XDR ProMotion 120 Hz',
      mainCamera: "Triple 48 MP (Gran angular + Ultra gran angular + Teleobjetivo 5x)",
      battery: "Hasta 27 h de reproducción de video",
      material: "Titanio y vidrio",
      colors: [
        { name: "Natural Titanium", hex: "#C2BCB2" },
        { name: "White Titanium",   hex: "#F2F1ED" },
        { name: "Black Titanium",   hex: "#3C3C3D" },
        { name: "Desert Titanium",  hex: "#BFA48F" },
      ],
    },
    proMax: {
      chip: "A18 Pro",
      display: '6.9" Super Retina XDR ProMotion 120 Hz',
      mainCamera: "Triple 48 MP (Gran angular + Ultra gran angular + Teleobjetivo 5x)",
      battery: "Hasta 33 h de reproducción de video",
      material: "Titanio y vidrio",
      colors: [
        { name: "Natural Titanium", hex: "#C2BCB2" },
        { name: "White Titanium",   hex: "#F2F1ED" },
        { name: "Black Titanium",   hex: "#3C3C3D" },
        { name: "Desert Titanium",  hex: "#BFA48F" },
      ],
    },
  },
  17: {
    base: {
      chip: "A18",
      display: '6.1" Super Retina XDR',
      mainCamera: "Dual 48 MP (Gran angular + Ultra gran angular) + frontal 24 MP",
      battery: "Hasta 22 h de reproducción de video",
      material: "Vidrio y aluminio",
      colors: [
        { name: "Black",     hex: "#353839" },
        { name: "White",     hex: "#F5F5F5" },
        { name: "Lavender",  hex: "#DFCEEA" },
        { name: "Sage",      hex: "#A9B689" },
        { name: "Mist Blue", hex: "#96AED1" },
      ],
    },
    pro: {
      chip: "A19 Pro",
      display: '6.3" Super Retina XDR ProMotion 120 Hz',
      mainCamera: "Triple 48 MP (Gran angular + Ultra gran angular + Teleobjetivo 5x)",
      battery: "Hasta 27 h de reproducción de video",
      material: "Titanio y vidrio",
      colors: [
        { name: "Silver",        hex: "#F5F5F5" },
        { name: "Deep Blue",     hex: "#32374A" },
        { name: "Cosmic Orange", hex: "#F77E2D" },
      ],
    },
    proMax: {
      chip: "A19 Pro",
      display: '6.9" Super Retina XDR ProMotion 120 Hz',
      mainCamera: "Triple 48 MP (Gran angular + Ultra gran angular + Teleobjetivo 5x)",
      battery: "Hasta 33 h de reproducción de video",
      material: "Titanio y vidrio",
      colors: [
        { name: "Silver",        hex: "#F5F5F5" },
        { name: "Deep Blue",     hex: "#32374A" },
        { name: "Cosmic Orange", hex: "#F77E2D" },
      ],
    },
  },
};

export const getProductSpecs = (product: Product): ModelSpecs | null => {
  const entry = SPECS[product.generation];
  if (!entry) return null;
  const lower = product.name.toLowerCase();
  if (lower.includes("pro max")) return entry.proMax;
  if (lower.includes("pro")) return entry.pro;
  return entry.base;
};

/* ─── Raw product data ──────────────────────────────────────────────── */
const raw: Array<[string, number, number, number]> = [
  ["13 128 gb",         1450,  13, 128],
  ["13 pro 128 gb",     1800,  13, 128],
  ["13 pro 256 gb",     1950,  13, 256],
  ["13 pro max 128 gb", 2050,  13, 128],
  ["13 pro max 256 gb", 2300,  13, 256],
  ["14 128 gb",         1650,  14, 128],
  ["14 pro 128 gb",     2250,  14, 128],
  ["14 pro 256 gb",     2400,  14, 256],
  ["14 pro max 128 gb", 2450,  14, 128],
  ["14 pro max 256 gb", 2700,  14, 256],
  ["14 pro max 512 gb", 2750,  14, 512],
  ["15 128 gb",         2200,  15, 128],
  ["15 pro 128 gb",     2700,  15, 128],
  ["15 pro 256 gb",     2850,  15, 256],
  ["15 pro max 256 gb", 3250,  15, 256],
  ["15 pro max 512 gb", 3400,  15, 512],
  ["15 pro max 1tb",    3450,  15, 1024],
  ["16 128 gb",         2950,  16, 128],
  ["16 pro 128 gb",     3650,  16, 128],
  ["16 pro 256 gb",     3750,  16, 256],
  ["16 pro max 256 gb", 4150,  16, 256],
  ["16 pro max 512 gb", 4300,  16, 512],
  ["17 256 gb",         3850,  17, 256],
  ["17 512 gb",         4650,  17, 512],
  ["17 pro 256 gb",     5400,  17, 256],
  ["17 pro 512 gb",     6200,  17, 512],
  ["17 pro 1tb",        7050,  17, 1024],
  ["17 pro max 256 gb", 5800,  17, 256],
  ["17 pro max 512 gb", 6650,  17, 512],
  ["17 pro max 1 tb",   7500,  17, 1024],
  ["17 pro max 2 tb",   9150,  17, 2048],
];

const formatCapacity = (gb: number) =>
  gb >= 1024 ? `${gb / 1024}TB` : `${gb}GB`;

const formatName = (raw: string, cap: number) => {
  const tokens = raw.split(/\s+/);
  const gen = tokens[0];
  const modifiers = tokens
    .slice(1)
    .filter((t) => !/^\d/.test(t) && !/gb|tb/i.test(t))
    .map((t) => t[0].toUpperCase() + t.slice(1));
  const tag = [gen, ...modifiers].join(" ");
  return `iPhone ${tag} ${formatCapacity(cap)}`;
};

export const PRODUCTS: Product[] = raw.map(([r, price, gen, cap]) => ({
  id: r.replace(/\s+/g, "-"),
  name: formatName(r, cap),
  capacity: formatCapacity(cap),
  generation: gen,
  price: Math.round(price),
}));

export const GENERATIONS = [13, 14, 15, 16, 17];
export const WHATSAPP_NUMBER = "51963047525";

export const buildWhatsAppUrl = (productName: string) => {
  const message = `Hola, me interesa cotizar el ${productName} que vi en su catálogo.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
