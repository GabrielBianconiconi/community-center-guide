import type { Bundle } from "../types";

export const fishTankBundles: Bundle[] = [
  {
    id: "river-fish",
    name: "River Fish",
    room: "Fish Tank",
    requiredCount: 4,
    items: [
      { id: "river-sunfish", name: "Sunfish", season: ["Spring", "Summer"], source: "River, sunny day" },
      { id: "river-catfish", name: "Catfish", season: ["Spring", "Fall"], source: "River, rain" },
      { id: "river-shad", name: "Shad", season: ["Spring", "Summer", "Fall"], source: "River, rain" },
      { id: "river-tiger-trout", name: "Tiger Trout", season: ["Fall", "Winter"], source: "River" },
    ],
  },
  {
    id: "lake-fish",
    name: "Lake Fish",
    room: "Fish Tank",
    requiredCount: 4,
    items: [
      { id: "lake-largemouth-bass", name: "Largemouth Bass", season: ["Any"], source: "Mountain Lake" },
      { id: "lake-carp", name: "Carp", season: ["Any"], source: "Mountain Lake" },
      { id: "lake-bullhead", name: "Bullhead", season: ["Any"], source: "Mountain Lake" },
      { id: "lake-sturgeon", name: "Sturgeon", season: ["Summer", "Winter"], source: "Mountain Lake" },
    ],
  },
  {
    id: "ocean-fish",
    name: "Ocean Fish",
    room: "Fish Tank",
    requiredCount: 4,
    items: [
      { id: "ocean-sardine", name: "Sardine", season: ["Spring", "Fall", "Winter"], source: "Ocean" },
      { id: "ocean-tuna", name: "Tuna", season: ["Summer", "Winter"], source: "Ocean" },
      { id: "ocean-red-snapper", name: "Red Snapper", season: ["Summer", "Fall"], source: "Ocean, rain" },
      { id: "ocean-tilapia", name: "Tilapia", season: ["Summer", "Fall"], source: "Ocean" },
    ],
  },
  {
    id: "night-fishing",
    name: "Night Fishing",
    room: "Fish Tank",
    requiredCount: 3,
    items: [
      { id: "night-walleye", name: "Walleye", season: ["Fall"], source: "River/lake, rain, night" },
      { id: "night-bream", name: "Bream", season: ["Any"], source: "River, night" },
      { id: "night-eel", name: "Eel", season: ["Spring", "Fall"], source: "Ocean, rain, night" },
    ],
  },
  {
    id: "crab-pot",
    name: "Crab Pot",
    room: "Fish Tank",
    requiredCount: 5,
    items: [
      { id: "crab-lobster", name: "Lobster", season: ["Any"], source: "Ocean crab pot" },
      { id: "crab-crab", name: "Crab", season: ["Any"], source: "Crab pot or mines" },
      { id: "crab-clam", name: "Clam", season: ["Any"], source: "Beach" },
      { id: "crab-crayfish", name: "Crayfish", season: ["Any"], source: "Freshwater crab pot" },
      { id: "crab-cockle", name: "Cockle", season: ["Any"], source: "Beach" },
      { id: "crab-mussel", name: "Mussel", season: ["Any"], source: "Beach" },
      { id: "crab-shrimp", name: "Shrimp", season: ["Any"], source: "Ocean crab pot" },
      { id: "crab-snail", name: "Snail", season: ["Any"], source: "Freshwater crab pot" },
      { id: "crab-periwinkle", name: "Periwinkle", season: ["Any"], source: "Freshwater crab pot" },
      { id: "crab-oyster", name: "Oyster", season: ["Any"], source: "Beach" },
    ],
  },
  {
    id: "specialty-fish",
    name: "Specialty Fish",
    room: "Fish Tank",
    requiredCount: 4,
    items: [
      { id: "specialty-pufferfish", name: "Pufferfish", season: ["Summer"], source: "Ocean, sunny afternoon" },
      { id: "specialty-ghostfish", name: "Ghostfish", season: ["Any"], source: "Mines" },
      { id: "specialty-sandfish", name: "Sandfish", season: ["Any"], source: "Desert" },
      { id: "specialty-woodskip", name: "Woodskip", season: ["Any"], source: "Secret Woods" },
    ],
  },
];
