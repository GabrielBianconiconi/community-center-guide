import type { Bundle } from "../types";

export const pantryBundles: Bundle[] = [
  {
    id: "spring-crops",
    name: "Spring Crops",
    room: "Pantry",
    requiredCount: 4,
    items: [
      { id: "spring-crops-parsnip", name: "Parsnip", season: ["Spring"], source: "Farming" },
      { id: "spring-crops-green-bean", name: "Green Bean", season: ["Spring"], source: "Farming" },
      { id: "spring-crops-cauliflower", name: "Cauliflower", season: ["Spring"], source: "Farming" },
      { id: "spring-crops-potato", name: "Potato", season: ["Spring"], source: "Farming" },
    ],
  },
  {
    id: "summer-crops",
    name: "Summer Crops",
    room: "Pantry",
    requiredCount: 4,
    items: [
      { id: "summer-crops-tomato", name: "Tomato", season: ["Summer"], source: "Farming" },
      { id: "summer-crops-hot-pepper", name: "Hot Pepper", season: ["Summer"], source: "Farming" },
      { id: "summer-crops-blueberry", name: "Blueberry", season: ["Summer"], source: "Farming" },
      { id: "summer-crops-melon", name: "Melon", season: ["Summer"], source: "Farming" },
    ],
  },
  {
    id: "fall-crops",
    name: "Fall Crops",
    room: "Pantry",
    requiredCount: 4,
    items: [
      { id: "fall-crops-corn", name: "Corn", season: ["Summer", "Fall"], source: "Farming" },
      { id: "fall-crops-eggplant", name: "Eggplant", season: ["Fall"], source: "Farming" },
      { id: "fall-crops-pumpkin", name: "Pumpkin", season: ["Fall"], source: "Farming" },
      { id: "fall-crops-yam", name: "Yam", season: ["Fall"], source: "Farming" },
    ],
  },
  {
    id: "quality-crops",
    name: "Quality Crops",
    room: "Pantry",
    requiredCount: 3,
    items: [
      { id: "quality-parsnip", name: "Gold Parsnip", season: ["Spring"], source: "Farming", qty: 5, note: "Save 5 gold-quality parsnips." },
      { id: "quality-melon", name: "Gold Melon", season: ["Summer"], source: "Farming", qty: 5 },
      { id: "quality-pumpkin", name: "Gold Pumpkin", season: ["Fall"], source: "Farming", qty: 5 },
      { id: "quality-corn", name: "Gold Corn", season: ["Summer", "Fall"], source: "Farming", qty: 5, note: "Optional: the bundle needs 3 of the 4 crop types." },
    ],
  },
  {
    id: "animal",
    name: "Animal",
    room: "Pantry",
    requiredCount: 5,
    items: [
      { id: "animal-large-milk", name: "Large Milk", season: ["Any"], source: "Cow" },
      { id: "animal-large-egg", name: "Large Egg", season: ["Any"], source: "Chicken" },
      { id: "animal-large-brown-egg", name: "Large Brown Egg", season: ["Any"], source: "Brown chicken" },
      { id: "animal-large-goat-milk", name: "Large Goat Milk", season: ["Any"], source: "Goat" },
      { id: "animal-wool", name: "Wool", season: ["Any"], source: "Sheep or rabbit" },
    ],
  },
  {
    id: "artisan",
    name: "Artisan",
    room: "Pantry",
    requiredCount: 6,
    items: [
      { id: "artisan-honey", name: "Honey", season: ["Spring", "Summer", "Fall"], source: "Bee House" },
      { id: "artisan-jelly", name: "Jelly", season: ["Any"], source: "Preserves Jar" },
      { id: "artisan-cheese", name: "Cheese", season: ["Any"], source: "Cheese Press" },
      { id: "artisan-cloth", name: "Cloth", season: ["Any"], source: "Loom or recycling" },
      { id: "artisan-apple", name: "Apple", season: ["Fall"], source: "Apple tree or cave" },
      { id: "artisan-pomegranate", name: "Pomegranate", season: ["Fall"], source: "Pomegranate tree or cave" },
    ],
  },
];
