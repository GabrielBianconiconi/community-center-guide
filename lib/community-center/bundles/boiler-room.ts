import type { Bundle } from "../types";

export const boilerRoomBundles: Bundle[] = [
  {
    id: "blacksmith",
    name: "Ferreiro",
    room: "Sala da Caldeira",
    requiredCount: 3,
    items: [
      { id: "blacksmith-copper-bar", name: "Barra de Cobre", season: ["Qualquer"], source: "Minas" },
      { id: "blacksmith-iron-bar", name: "Barra de Ferro", season: ["Qualquer"], source: "Minas" },
      { id: "blacksmith-gold-bar", name: "Barra de Ouro", season: ["Qualquer"], source: "Minas" },
    ],
  },
  {
    id: "geologist",
    name: "Geologo",
    room: "Sala da Caldeira",
    requiredCount: 4,
    items: [
      { id: "geologist-quartz", name: "Quartzo", season: ["Qualquer"], source: "Minas" },
      { id: "geologist-earth-crystal", name: "Cristal de Terra", season: ["Qualquer"], source: "Minas 1-39" },
      { id: "geologist-frozen-tear", name: "Lagrima Congelada", season: ["Qualquer"], source: "Minas 40-79" },
      { id: "geologist-fire-quartz", name: "Quartzo de Fogo", season: ["Qualquer"], source: "Minas 80+" },
    ],
  },
  {
    id: "adventurer",
    name: "Aventureiro",
    room: "Sala da Caldeira",
    requiredCount: 2,
    items: [
      { id: "adventurer-slime", name: "Gosma", season: ["Qualquer"], source: "Slimes", qty: 99 },
      { id: "adventurer-bat-wing", name: "Asa de Morcego", season: ["Qualquer"], source: "Morcegos", qty: 10 },
    ],
  },
];
