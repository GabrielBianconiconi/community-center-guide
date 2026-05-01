import type { Bundle } from "@/lib/community-center";
import { countBundleDone } from "@/lib/community-center";
import { BundleItemCard } from "./BundleItemCard";

type BundleSectionProps = {
  bundle: Bundle;
  completed: Record<string, boolean>;
  onToggleItem: (id: string) => void;
};

export function BundleSection({
  bundle,
  completed,
  onToggleItem,
}: BundleSectionProps) {
  const doneCount = countBundleDone(bundle, completed);
  const displayedDone = Math.min(doneCount, bundle.requiredCount);
  const hasOptionalItems = bundle.items.length > bundle.requiredCount;

  return (
    <article className="rounded-lg border-4 border-[#6f4b2f] bg-[#fff8de] p-4 shadow-[4px_4px_0_#6f4b2f]">
      <div className="flex flex-col gap-2 border-b-2 border-[#d4a45f] pb-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8f5b32]">
            {bundle.room}
          </p>
          <h2 className="text-2xl font-black">{bundle.name}</h2>
        </div>
        <p className="text-sm font-black text-[#72502f]">
          {displayedDone} / {bundle.requiredCount} required
          {hasOptionalItems ? ` (${doneCount}/${bundle.items.length} checked)` : ""}
        </p>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {bundle.items.map((item) => (
          <BundleItemCard
            isDone={Boolean(completed[item.id])}
            item={item}
            key={item.id}
            onToggle={onToggleItem}
          />
        ))}
      </div>
    </article>
  );
}
