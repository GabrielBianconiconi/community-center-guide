import type { Bundle } from "../types";

export const bulletinBoardBundles: Bundle[] = [
  {
    id: "chef",
    name: "Chef's",
    room: "Bulletin Board",
    requiredCount: 6,
    items: [
      { id: "chef-maple-syrup", name: "Maple Syrup", season: ["Any"], source: "Tapper" },
      { id: "chef-fiddlehead-fern", name: "Fiddlehead Fern", season: ["Summer"], source: "Secret Woods" },
      { id: "chef-truffle", name: "Truffle", season: ["Spring", "Summer", "Fall"], source: "Pig" },
      { id: "chef-poppy", name: "Poppy", season: ["Summer"], source: "Farming" },
      { id: "chef-maki-roll", name: "Maki Roll", season: ["Any"], source: "Kitchen or Stardrop Saloon" },
      { id: "chef-fried-egg", name: "Fried Egg", season: ["Any"], source: "Kitchen" },
    ],
  },
  {
    id: "dye",
    name: "Dye",
    room: "Bulletin Board",
    requiredCount: 6,
    items: [
      { id: "dye-red-mushroom", name: "Red Mushroom", season: ["Any"], source: "Mines or cave" },
      { id: "dye-sea-urchin", name: "Sea Urchin", season: ["Any"], source: "Beach after bridge" },
      { id: "dye-sunflower", name: "Sunflower", season: ["Summer", "Fall"], source: "Farming" },
      { id: "dye-duck-feather", name: "Duck Feather", season: ["Any"], source: "Duck" },
      { id: "dye-aquamarine", name: "Aquamarine", season: ["Any"], source: "Mines" },
      { id: "dye-red-cabbage", name: "Red Cabbage", season: ["Summer"], source: "Traveling Cart in Year 1", note: "Normally a Year 2 crop; buy it from the cart if it appears." },
    ],
  },
  {
    id: "field-fodder",
    name: "Field Research",
    room: "Bulletin Board",
    requiredCount: 3,
    items: [
      { id: "field-fodder-wheat", name: "Wheat", season: ["Summer", "Fall"], source: "Farming", qty: 10 },
      { id: "field-fodder-hay", name: "Hay", season: ["Any"], source: "Silo or Marnie", qty: 10 },
      { id: "field-fodder-apple", name: "Apple", season: ["Fall"], source: "Apple tree or cave", qty: 3 },
    ],
  },
  {
    id: "enchanter",
    name: "Enchanter's",
    room: "Bulletin Board",
    requiredCount: 4,
    items: [
      { id: "enchanter-oak-resin", name: "Oak Resin", season: ["Any"], source: "Tapper" },
      { id: "enchanter-wine", name: "Wine", season: ["Any"], source: "Keg" },
      { id: "enchanter-rabbit-foot", name: "Rabbit's Foot", season: ["Any"], source: "Rabbit or Serpents" },
      { id: "enchanter-pomegranate", name: "Pomegranate", season: ["Fall"], source: "Pomegranate tree or cave" },
    ],
  },
];
