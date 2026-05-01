export type Season = "Primavera" | "Verao" | "Outono" | "Inverno" | "Qualquer";

export type Room =
  | "Artesanato"
  | "Despensa"
  | "Aquario"
  | "Sala da Caldeira"
  | "Quadro de Avisos"
  | "Cofre";

export type BundleItem = {
  id: string;
  name: string;
  season: Season[];
  source: string;
  note?: string;
  qty?: number;
};

export type Bundle = {
  id: string;
  name: string;
  room: Room;
  requiredCount: number;
  items: BundleItem[];
};

export type ItemWithBundle = BundleItem & {
  bundleId: string;
  bundleName: string;
  room: Room;
  requiredCount: number;
};

export type YearPlan = {
  season: Exclude<Season, "Qualquer">;
  focus: string;
  tasks: string[];
};
