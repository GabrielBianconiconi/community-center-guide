import type { Bundle } from "../types";

export const craftsRoomBundles: Bundle[] = [
  {
    id: "spring-foraging",
    name: "Spring Foraging",
    room: "Crafts Room",
    requiredCount: 4,
    items: [
      { id: "spring-foraging-wild-horseradish", name: "Wild Horseradish", season: ["Spring"], source: "Foraging" },
      { id: "spring-foraging-daffodil", name: "Daffodil", season: ["Spring"], source: "Foraging" },
      { id: "spring-foraging-leek", name: "Leek", season: ["Spring"], source: "Foraging" },
      { id: "spring-foraging-dandelion", name: "Dandelion", season: ["Spring"], source: "Foraging" },
    ],
  },
  {
    id: "summer-foraging",
    name: "Summer Foraging",
    room: "Crafts Room",
    requiredCount: 3,
    items: [
      { id: "summer-foraging-grape", name: "Grape", season: ["Summer"], source: "Foraging" },
      { id: "summer-foraging-spice-berry", name: "Spice Berry", season: ["Summer"], source: "Foraging" },
      { id: "summer-foraging-sweet-pea", name: "Sweet Pea", season: ["Summer"], source: "Foraging" },
    ],
  },
  {
    id: "fall-foraging",
    name: "Fall Foraging",
    room: "Crafts Room",
    requiredCount: 4,
    items: [
      { id: "fall-foraging-common-mushroom", name: "Common Mushroom", season: ["Fall"], source: "Foraging" },
      { id: "fall-foraging-wild-plum", name: "Wild Plum", season: ["Fall"], source: "Foraging" },
      { id: "fall-foraging-hazelnut", name: "Hazelnut", season: ["Fall"], source: "Foraging" },
      { id: "fall-foraging-blackberry", name: "Blackberry", season: ["Fall"], source: "Foraging" },
    ],
  },
  {
    id: "winter-foraging",
    name: "Winter Foraging",
    room: "Crafts Room",
    requiredCount: 4,
    items: [
      { id: "winter-foraging-winter-root", name: "Winter Root", season: ["Winter"], source: "Foraging/mines" },
      { id: "winter-foraging-crystal-fruit", name: "Crystal Fruit", season: ["Winter"], source: "Foraging" },
      { id: "winter-foraging-snow-yam", name: "Snow Yam", season: ["Winter"], source: "Hoe spots" },
      { id: "winter-foraging-crocus", name: "Crocus", season: ["Winter"], source: "Foraging" },
    ],
  },
  {
    id: "construction",
    name: "Construction",
    room: "Crafts Room",
    requiredCount: 4,
    items: [
      { id: "construction-wood", name: "Wood", season: ["Any"], source: "Trees", qty: 99 },
      { id: "construction-wood-2", name: "Wood", season: ["Any"], source: "Trees", qty: 99 },
      { id: "construction-stone", name: "Stone", season: ["Any"], source: "Mines", qty: 99 },
      { id: "construction-hardwood", name: "Hardwood", season: ["Any"], source: "Secret Woods", qty: 10 },
    ],
  },
  {
    id: "exotic-foraging",
    name: "Exotic Foraging",
    room: "Crafts Room",
    requiredCount: 5,
    items: [
      { id: "exotic-coconut", name: "Coconut", season: ["Any"], source: "Desert or Traveling Cart" },
      { id: "exotic-cactus-fruit", name: "Cactus Fruit", season: ["Any"], source: "Desert or Traveling Cart" },
      { id: "exotic-cave-carrot", name: "Cave Carrot", season: ["Any"], source: "Mines" },
      { id: "exotic-red-mushroom", name: "Red Mushroom", season: ["Any"], source: "Mines or cave" },
      { id: "exotic-purple-mushroom", name: "Purple Mushroom", season: ["Any"], source: "Mines or cave" },
      { id: "exotic-maple-syrup", name: "Maple Syrup", season: ["Any"], source: "Tapper" },
      { id: "exotic-oak-resin", name: "Oak Resin", season: ["Any"], source: "Tapper" },
      { id: "exotic-pine-tar", name: "Pine Tar", season: ["Any"], source: "Tapper" },
      { id: "exotic-morel", name: "Morel", season: ["Spring"], source: "Secret Woods or cave" },
    ],
  },
];
