import Image from "next/image";
import type { BundleItem } from "@/lib/community-center";
import { getItemImageUrl } from "@/lib/community-center";

type BundleItemCardProps = {
  item: BundleItem;
  isDone: boolean;
  onToggle: (id: string) => void;
};

export function BundleItemCard({ item, isDone, onToggle }: BundleItemCardProps) {
  return (
    <button
      className={`grid min-h-28 grid-cols-[56px_1fr] gap-3 rounded-md border-2 p-3 text-left transition ${
        isDone
          ? "border-[#4f9d47] bg-[#dcefc7]"
          : "border-[#d4a45f] bg-[#fffdf4] hover:bg-[#ffefbd]"
      }`}
      onClick={() => onToggle(item.id)}
      type="button"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-md border-2 border-[#7c5534] bg-[#ead093]">
        <Image
          alt=""
          className="h-10 w-10 object-contain [image-rendering:pixelated]"
          height={40}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
          src={getItemImageUrl(item)}
          width={40}
        />
      </span>
      <span>
        <span className="flex items-start justify-between gap-2">
          <span className="text-base font-black">{item.name}</span>
          <span
            aria-label={isDone ? "Completed" : "Pending"}
            className={`grid h-6 w-6 shrink-0 place-items-center rounded-sm border-2 text-xs font-black ${
              isDone
                ? "border-[#2f6f34] bg-[#4f9d47] text-white"
                : "border-[#7c5534] bg-white"
            }`}
          >
            {isDone ? "OK" : ""}
          </span>
        </span>
        <span className="mt-1 block text-sm font-bold text-[#72502f]">
          {item.qty ? `${item.qty}x - ` : ""}
          {item.source}
        </span>
        <span className="mt-1 block text-xs font-bold uppercase text-[#8f5b32]">
          {item.season.join(" / ")}
        </span>
        {item.note ? (
          <span className="mt-2 block text-xs leading-4 text-[#7f4329]">
            {item.note}
          </span>
        ) : null}
      </span>
    </button>
  );
}
