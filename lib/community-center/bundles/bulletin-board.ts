import type { Bundle } from "../types";

export const bulletinBoardBundles: Bundle[] = [
  {
    id: "chef",
    name: "Cozinheiro",
    room: "Quadro de Avisos",
    requiredCount: 6,
    items: [
      { id: "chef-maple-syrup", name: "Xarope de Bordo", season: ["Qualquer"], source: "Torneirinha" },
      { id: "chef-fiddlehead-fern", name: "Samambaia", season: ["Verao"], source: "Bosque secreto" },
      { id: "chef-truffle", name: "Trufa", season: ["Primavera", "Verao", "Outono"], source: "Porco" },
      { id: "chef-poppy", name: "Papoula", season: ["Verao"], source: "Plantacao" },
      { id: "chef-maki-roll", name: "Enroladinho de Algas", season: ["Qualquer"], source: "Cozinha ou Stardrop Saloon" },
      { id: "chef-fried-egg", name: "Ovo Frito", season: ["Qualquer"], source: "Cozinha" },
    ],
  },
  {
    id: "dye",
    name: "Tintura",
    room: "Quadro de Avisos",
    requiredCount: 6,
    items: [
      { id: "dye-red-mushroom", name: "Cogumelo Vermelho", season: ["Qualquer"], source: "Minas ou caverna" },
      { id: "dye-sea-urchin", name: "Ouriço-do-mar", season: ["Qualquer"], source: "Praia apos ponte" },
      { id: "dye-sunflower", name: "Girassol", season: ["Verao", "Outono"], source: "Plantacao" },
      { id: "dye-duck-feather", name: "Pena de Pato", season: ["Qualquer"], source: "Pato" },
      { id: "dye-aquamarine", name: "Agua-marinha", season: ["Qualquer"], source: "Minas" },
      { id: "dye-red-cabbage", name: "Repolho Roxo", season: ["Verao"], source: "Carrinho Viajante no Ano 1", note: "Normalmente so planta no Ano 2; compre no carrinho se aparecer." },
    ],
  },
  {
    id: "field-fodder",
    name: "Racao de Campo",
    room: "Quadro de Avisos",
    requiredCount: 3,
    items: [
      { id: "field-fodder-wheat", name: "Trigo", season: ["Verao", "Outono"], source: "Plantacao", qty: 10 },
      { id: "field-fodder-hay", name: "Feno", season: ["Qualquer"], source: "Silo ou Marnie", qty: 10 },
      { id: "field-fodder-apple", name: "Maca", season: ["Outono"], source: "Macieira ou Caverna", qty: 3 },
    ],
  },
  {
    id: "enchanter",
    name: "Encantador",
    room: "Quadro de Avisos",
    requiredCount: 4,
    items: [
      { id: "enchanter-oak-resin", name: "Resina de Carvalho", season: ["Qualquer"], source: "Torneirinha" },
      { id: "enchanter-wine", name: "Vinho", season: ["Qualquer"], source: "Barril" },
      { id: "enchanter-rabbit-foot", name: "Pe de Coelho", season: ["Qualquer"], source: "Coelho ou Serpentes" },
      { id: "enchanter-pomegranate", name: "Roma", season: ["Outono"], source: "Romazeira ou Caverna" },
    ],
  },
];
