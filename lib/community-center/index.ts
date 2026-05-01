import { boilerRoomBundles } from "./bundles/boiler-room";
import { bulletinBoardBundles } from "./bundles/bulletin-board";
import { craftsRoomBundles } from "./bundles/crafts-room";
import { fishTankBundles } from "./bundles/fish-tank";
import { pantryBundles } from "./bundles/pantry";
import { vaultBundles } from "./bundles/vault";
import type { Bundle, ItemWithBundle, Room, Season } from "./types";

export type { Bundle, BundleItem, ItemWithBundle, Room, Season, YearPlan } from "./types";
export { getItemImageUrl } from "./images";
export { yearOnePlan } from "./year-one-plan";

export const seasons: Array<Season | "Todas"> = [
  "Todas",
  "Primavera",
  "Verao",
  "Outono",
  "Inverno",
  "Qualquer",
];

export const rooms: Array<Room | "Todas"> = [
  "Todas",
  "Artesanato",
  "Despensa",
  "Aquario",
  "Sala da Caldeira",
  "Quadro de Avisos",
  "Cofre",
];

export const bundles: Bundle[] = [
  ...craftsRoomBundles,
  ...pantryBundles,
  ...fishTankBundles,
  ...boilerRoomBundles,
  ...bulletinBoardBundles,
  ...vaultBundles,
];

export const items: ItemWithBundle[] = bundles.flatMap((bundle) =>
  bundle.items.map((item) => ({
    ...item,
    bundleId: bundle.id,
    bundleName: bundle.name,
    room: bundle.room,
    requiredCount: bundle.requiredCount,
  })),
);

export function countBundleDone(bundle: Bundle, completed: Record<string, boolean>) {
  return bundle.items.filter((item) => completed[item.id]).length;
}

export function countBundleProgress(bundle: Bundle, completed: Record<string, boolean>) {
  return Math.min(countBundleDone(bundle, completed), bundle.requiredCount);
}

export function countRequiredItems(allBundles: Bundle[]) {
  return allBundles.reduce((total, bundle) => total + bundle.requiredCount, 0);
}

export function countCompletedRequiredItems(
  allBundles: Bundle[],
  completed: Record<string, boolean>,
) {
  return allBundles.reduce(
    (total, bundle) => total + countBundleProgress(bundle, completed),
    0,
  );
}
