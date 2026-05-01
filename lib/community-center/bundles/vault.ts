import type { Bundle } from "../types";

export const vaultBundles: Bundle[] = [
  {
    id: "vault",
    name: "Cofre",
    room: "Cofre",
    requiredCount: 4,
    items: [
      { id: "vault-2500", name: "2.500 ouros", season: ["Qualquer"], source: "Dinheiro", qty: 2500 },
      { id: "vault-5000", name: "5.000 ouros", season: ["Qualquer"], source: "Dinheiro", qty: 5000 },
      { id: "vault-10000", name: "10.000 ouros", season: ["Qualquer"], source: "Dinheiro", qty: 10000 },
      { id: "vault-25000", name: "25.000 ouros", season: ["Qualquer"], source: "Dinheiro", qty: 25000 },
    ],
  },
];
