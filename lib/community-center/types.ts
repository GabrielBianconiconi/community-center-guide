export type Season = "Spring" | "Summer" | "Fall" | "Winter" | "Any";

export type Room =
  | "Crafts Room"
  | "Pantry"
  | "Fish Tank"
  | "Boiler Room"
  | "Bulletin Board"
  | "Vault";

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
  season: Exclude<Season, "Any">;
  focus: string;
  tasks: string[];
};
