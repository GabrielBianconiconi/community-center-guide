import type { Bundle } from "../types";

export const vaultBundles: Bundle[] = [
  {
    id: "vault",
    name: "Vault",
    room: "Vault",
    requiredCount: 4,
    items: [
      { id: "vault-2500", name: "2,500g", season: ["Any"], source: "Money", qty: 2500 },
      { id: "vault-5000", name: "5,000g", season: ["Any"], source: "Money", qty: 5000 },
      { id: "vault-10000", name: "10,000g", season: ["Any"], source: "Money", qty: 10000 },
      { id: "vault-25000", name: "25,000g", season: ["Any"], source: "Money", qty: 25000 },
    ],
  },
];
