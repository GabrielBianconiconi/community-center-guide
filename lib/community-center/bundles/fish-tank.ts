import type { Bundle } from "../types";

export const fishTankBundles: Bundle[] = [
  {
    id: "river-fish",
    name: "Peixes de Rio",
    room: "Aquario",
    requiredCount: 4,
    items: [
      { id: "river-sunfish", name: "Peixe-sol", season: ["Primavera", "Verao"], source: "Rio, dia ensolarado" },
      { id: "river-catfish", name: "Bagre", season: ["Primavera", "Outono"], source: "Rio, chuva" },
      { id: "river-shad", name: "Savelha", season: ["Primavera", "Verao", "Outono"], source: "Rio, chuva" },
      { id: "river-tiger-trout", name: "Truta-tigre", season: ["Outono", "Inverno"], source: "Rio" },
    ],
  },
  {
    id: "lake-fish",
    name: "Peixes de Lago",
    room: "Aquario",
    requiredCount: 4,
    items: [
      { id: "lake-largemouth-bass", name: "Achiga", season: ["Qualquer"], source: "Lago da montanha" },
      { id: "lake-carp", name: "Carpa", season: ["Qualquer"], source: "Lago da montanha" },
      { id: "lake-bullhead", name: "Bagre-cabeca-grande", season: ["Qualquer"], source: "Lago da montanha" },
      { id: "lake-sturgeon", name: "Esturjao", season: ["Verao", "Inverno"], source: "Lago da montanha" },
    ],
  },
  {
    id: "ocean-fish",
    name: "Peixes do Oceano",
    room: "Aquario",
    requiredCount: 4,
    items: [
      { id: "ocean-sardine", name: "Sardinha", season: ["Primavera", "Outono", "Inverno"], source: "Oceano" },
      { id: "ocean-tuna", name: "Atum", season: ["Verao", "Inverno"], source: "Oceano" },
      { id: "ocean-red-snapper", name: "Cioba", season: ["Verao", "Outono"], source: "Oceano, chuva" },
      { id: "ocean-tilapia", name: "Tilapia", season: ["Verao", "Outono"], source: "Oceano" },
    ],
  },
  {
    id: "night-fishing",
    name: "Pesca Noturna",
    room: "Aquario",
    requiredCount: 3,
    items: [
      { id: "night-walleye", name: "Picareta", season: ["Outono"], source: "Rio/lago, chuva, noite" },
      { id: "night-bream", name: "Brema", season: ["Qualquer"], source: "Rio, noite" },
      { id: "night-eel", name: "Enguia", season: ["Primavera", "Outono"], source: "Oceano, chuva, noite" },
    ],
  },
  {
    id: "crab-pot",
    name: "Covos",
    room: "Aquario",
    requiredCount: 5,
    items: [
      { id: "crab-lobster", name: "Lagosta", season: ["Qualquer"], source: "Covo no oceano" },
      { id: "crab-crab", name: "Caranguejo", season: ["Qualquer"], source: "Covo ou mina" },
      { id: "crab-clam", name: "Molusco", season: ["Qualquer"], source: "Praia" },
      { id: "crab-crayfish", name: "Lagostim", season: ["Qualquer"], source: "Covo em agua doce" },
      { id: "crab-cockle", name: "Berbigao", season: ["Qualquer"], source: "Praia" },
      { id: "crab-mussel", name: "Mexilhao", season: ["Qualquer"], source: "Praia" },
      { id: "crab-shrimp", name: "Camarao", season: ["Qualquer"], source: "Covo no oceano" },
      { id: "crab-snail", name: "Caracol", season: ["Qualquer"], source: "Covo em agua doce" },
      { id: "crab-periwinkle", name: "Caramujo", season: ["Qualquer"], source: "Covo em agua doce" },
      { id: "crab-oyster", name: "Ostra", season: ["Qualquer"], source: "Praia" },
    ],
  },
  {
    id: "specialty-fish",
    name: "Peixes Especiais",
    room: "Aquario",
    requiredCount: 4,
    items: [
      { id: "specialty-pufferfish", name: "Baiacu", season: ["Verao"], source: "Oceano, sol, tarde" },
      { id: "specialty-ghostfish", name: "Peixe-fantasma", season: ["Qualquer"], source: "Minas" },
      { id: "specialty-sandfish", name: "Peixe-areia", season: ["Qualquer"], source: "Deserto" },
      { id: "specialty-woodskip", name: "Madeirao", season: ["Qualquer"], source: "Bosque secreto" },
    ],
  },
];
