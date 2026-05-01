import type { Bundle } from "../types";

export const boilerRoomBundles: Bundle[] = [
  {
    id: "blacksmith",
    name: "Blacksmith",
    room: "Boiler Room",
    requiredCount: 3,
    items: [
      { id: "blacksmith-copper-bar", name: "Copper Bar", season: ["Any"], source: "Mines" },
      { id: "blacksmith-iron-bar", name: "Iron Bar", season: ["Any"], source: "Mines" },
      { id: "blacksmith-gold-bar", name: "Gold Bar", season: ["Any"], source: "Mines" },
    ],
  },
  {
    id: "geologist",
    name: "Geologist",
    room: "Boiler Room",
    requiredCount: 4,
    items: [
      { id: "geologist-quartz", name: "Quartz", season: ["Any"], source: "Mines" },
      { id: "geologist-earth-crystal", name: "Earth Crystal", season: ["Any"], source: "Mines 1-39" },
      { id: "geologist-frozen-tear", name: "Frozen Tear", season: ["Any"], source: "Mines 40-79" },
      { id: "geologist-fire-quartz", name: "Fire Quartz", season: ["Any"], source: "Mines 80+" },
    ],
  },
  {
    id: "adventurer",
    name: "Adventurer",
    room: "Boiler Room",
    requiredCount: 2,
    items: [
      { id: "adventurer-slime", name: "Slime", season: ["Any"], source: "Slimes", qty: 99 },
      { id: "adventurer-bat-wing", name: "Bat Wing", season: ["Any"], source: "Bats", qty: 10 },
    ],
  },
];
