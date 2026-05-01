import type { Bundle } from "../types";

export const pantryBundles: Bundle[] = [
  {
    id: "spring-crops",
    name: "Plantas de Primavera",
    room: "Despensa",
    requiredCount: 4,
    items: [
      { id: "spring-crops-parsnip", name: "Chirivia", season: ["Primavera"], source: "Plantacao" },
      { id: "spring-crops-green-bean", name: "Vagem", season: ["Primavera"], source: "Plantacao" },
      { id: "spring-crops-cauliflower", name: "Couve-flor", season: ["Primavera"], source: "Plantacao" },
      { id: "spring-crops-potato", name: "Batata", season: ["Primavera"], source: "Plantacao" },
    ],
  },
  {
    id: "summer-crops",
    name: "Plantas de Verao",
    room: "Despensa",
    requiredCount: 4,
    items: [
      { id: "summer-crops-tomato", name: "Tomate", season: ["Verao"], source: "Plantacao" },
      { id: "summer-crops-hot-pepper", name: "Pimenta", season: ["Verao"], source: "Plantacao" },
      { id: "summer-crops-blueberry", name: "Mirtilo", season: ["Verao"], source: "Plantacao" },
      { id: "summer-crops-melon", name: "Melao", season: ["Verao"], source: "Plantacao" },
    ],
  },
  {
    id: "fall-crops",
    name: "Plantas de Outono",
    room: "Despensa",
    requiredCount: 4,
    items: [
      { id: "fall-crops-corn", name: "Milho", season: ["Verao", "Outono"], source: "Plantacao" },
      { id: "fall-crops-eggplant", name: "Beringela", season: ["Outono"], source: "Plantacao" },
      { id: "fall-crops-pumpkin", name: "Abobora", season: ["Outono"], source: "Plantacao" },
      { id: "fall-crops-yam", name: "Inhame", season: ["Outono"], source: "Plantacao" },
    ],
  },
  {
    id: "quality-crops",
    name: "Plantas de Qualidade",
    room: "Despensa",
    requiredCount: 3,
    items: [
      { id: "quality-parsnip", name: "Chirivia ouro", season: ["Primavera"], source: "Plantacao", qty: 5, note: "Guarde 5 com estrela dourada." },
      { id: "quality-melon", name: "Melao ouro", season: ["Verao"], source: "Plantacao", qty: 5 },
      { id: "quality-pumpkin", name: "Abobora ouro", season: ["Outono"], source: "Plantacao", qty: 5 },
      { id: "quality-corn", name: "Milho ouro", season: ["Verao", "Outono"], source: "Plantacao", qty: 5, note: "Opcional: o bundle pede 3 dos 4 tipos." },
    ],
  },
  {
    id: "animal",
    name: "Animal",
    room: "Despensa",
    requiredCount: 5,
    items: [
      { id: "animal-large-milk", name: "Leite Grande", season: ["Qualquer"], source: "Vaca" },
      { id: "animal-large-egg", name: "Ovo Grande", season: ["Qualquer"], source: "Galinha" },
      { id: "animal-large-brown-egg", name: "Ovo Marrom Grande", season: ["Qualquer"], source: "Galinha marrom" },
      { id: "animal-large-goat-milk", name: "Leite de Cabra Grande", season: ["Qualquer"], source: "Cabra" },
      { id: "animal-wool", name: "La", season: ["Qualquer"], source: "Ovelha ou coelho" },
    ],
  },
  {
    id: "artisan",
    name: "Artesao",
    room: "Despensa",
    requiredCount: 6,
    items: [
      { id: "artisan-honey", name: "Mel", season: ["Primavera", "Verao", "Outono"], source: "Casa de abelhas" },
      { id: "artisan-jelly", name: "Geleia", season: ["Qualquer"], source: "Jarra de conserva" },
      { id: "artisan-cheese", name: "Queijo", season: ["Qualquer"], source: "Prensa de queijo" },
      { id: "artisan-cloth", name: "Tecido", season: ["Qualquer"], source: "Tear ou reciclagem" },
      { id: "artisan-apple", name: "Maca", season: ["Outono"], source: "Macieira ou Caverna" },
      { id: "artisan-pomegranate", name: "Roma", season: ["Outono"], source: "Romazeira ou Caverna" },
    ],
  },
];
