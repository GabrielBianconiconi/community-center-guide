import type { Bundle } from "../types";

export const craftsRoomBundles: Bundle[] = [
  {
    id: "spring-foraging",
    name: "Coleta de Primavera",
    room: "Artesanato",
    requiredCount: 4,
    items: [
      { id: "spring-foraging-wild-horseradish", name: "Raiz-forte Selvagem", season: ["Primavera"], source: "Coleta" },
      { id: "spring-foraging-daffodil", name: "Narciso", season: ["Primavera"], source: "Coleta" },
      { id: "spring-foraging-leek", name: "Alho-poro", season: ["Primavera"], source: "Coleta" },
      { id: "spring-foraging-dandelion", name: "Dente-de-leao", season: ["Primavera"], source: "Coleta" },
    ],
  },
  {
    id: "summer-foraging",
    name: "Coleta de Verao",
    room: "Artesanato",
    requiredCount: 3,
    items: [
      { id: "summer-foraging-grape", name: "Uva", season: ["Verao"], source: "Coleta" },
      { id: "summer-foraging-spice-berry", name: "Cereja de Especiarias", season: ["Verao"], source: "Coleta" },
      { id: "summer-foraging-sweet-pea", name: "Ervilha-de-cheiro", season: ["Verao"], source: "Coleta" },
    ],
  },
  {
    id: "fall-foraging",
    name: "Coleta de Outono",
    room: "Artesanato",
    requiredCount: 4,
    items: [
      { id: "fall-foraging-common-mushroom", name: "Cogumelo Comum", season: ["Outono"], source: "Coleta" },
      { id: "fall-foraging-wild-plum", name: "Ameixa Selvagem", season: ["Outono"], source: "Coleta" },
      { id: "fall-foraging-hazelnut", name: "Avela", season: ["Outono"], source: "Coleta" },
      { id: "fall-foraging-blackberry", name: "Amora", season: ["Outono"], source: "Coleta" },
    ],
  },
  {
    id: "winter-foraging",
    name: "Coleta de Inverno",
    room: "Artesanato",
    requiredCount: 4,
    items: [
      { id: "winter-foraging-winter-root", name: "Raiz de Inverno", season: ["Inverno"], source: "Coleta/minas" },
      { id: "winter-foraging-crystal-fruit", name: "Fruta de Cristal", season: ["Inverno"], source: "Coleta" },
      { id: "winter-foraging-snow-yam", name: "Inhame de Neve", season: ["Inverno"], source: "Enxada" },
      { id: "winter-foraging-crocus", name: "Acafrao", season: ["Inverno"], source: "Coleta" },
    ],
  },
  {
    id: "construction",
    name: "Construcao",
    room: "Artesanato",
    requiredCount: 4,
    items: [
      { id: "construction-wood", name: "Madeira", season: ["Qualquer"], source: "Arvores", qty: 99 },
      { id: "construction-wood-2", name: "Madeira", season: ["Qualquer"], source: "Arvores", qty: 99 },
      { id: "construction-stone", name: "Pedra", season: ["Qualquer"], source: "Minas", qty: 99 },
      { id: "construction-hardwood", name: "Madeira de Lei", season: ["Qualquer"], source: "Bosque secreto", qty: 10 },
    ],
  },
  {
    id: "exotic-foraging",
    name: "Coleta Exotica",
    room: "Artesanato",
    requiredCount: 5,
    items: [
      { id: "exotic-coconut", name: "Coco", season: ["Qualquer"], source: "Deserto ou Carrinho" },
      { id: "exotic-cactus-fruit", name: "Fruta do Cacto", season: ["Qualquer"], source: "Deserto ou Carrinho" },
      { id: "exotic-cave-carrot", name: "Cenoura Subterranea", season: ["Qualquer"], source: "Minas" },
      { id: "exotic-red-mushroom", name: "Cogumelo Vermelho", season: ["Qualquer"], source: "Minas ou caverna" },
      { id: "exotic-purple-mushroom", name: "Cogumelo Roxo", season: ["Qualquer"], source: "Minas ou caverna" },
      { id: "exotic-maple-syrup", name: "Xarope de Bordo", season: ["Qualquer"], source: "Torneirinha" },
      { id: "exotic-oak-resin", name: "Resina de Carvalho", season: ["Qualquer"], source: "Torneirinha" },
      { id: "exotic-pine-tar", name: "Alcatrao de Pinheiro", season: ["Qualquer"], source: "Torneirinha" },
      { id: "exotic-morel", name: "Morel", season: ["Primavera"], source: "Bosque secreto ou caverna" },
    ],
  },
];
