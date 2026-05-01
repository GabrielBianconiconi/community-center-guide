"use client";

import { useEffect, useMemo, useState } from "react";
import {
  bundles,
  countCompletedRequiredItems,
  countRequiredItems,
  type Bundle,
  type Room,
  type Season,
} from "@/lib/community-center";
import { BundleSection } from "./BundleSection";
import { FiltersPanel } from "./FiltersPanel";
import { ProgressSummary } from "./ProgressSummary";
import { SeasonGuide } from "./SeasonGuide";

const storageKey = "community-center-progress";

function getInitialProgress(): Record<string, boolean> {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const saved = window.localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function bundleMatchesFilters(
  bundle: Bundle,
  season: Season | "All",
  room: Room | "All",
) {
  const byRoom = room === "All" || bundle.room === room;
  const bySeason =
    season === "All" || bundle.items.some((item) => item.season.includes(season));

  return byRoom && bySeason;
}

function filterBundleItems(bundle: Bundle, season: Season | "All"): Bundle {
  if (season === "All") {
    return bundle;
  }

  return {
    ...bundle,
    items: bundle.items.filter((item) => item.season.includes(season)),
  };
}

export function CommunityCenterApp() {
  const [completed, setCompleted] = useState<Record<string, boolean>>(getInitialProgress);
  const [season, setSeason] = useState<Season | "All">("All");
  const [room, setRoom] = useState<Room | "All">("All");

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(completed));
  }, [completed]);

  const totalRequired = countRequiredItems(bundles);
  const completedRequired = countCompletedRequiredItems(bundles, completed);
  const progress = Math.round((completedRequired / totalRequired) * 100);

  const visibleBundles = useMemo(() => {
    return bundles
      .filter((bundle) => bundleMatchesFilters(bundle, season, room))
      .map((bundle) => filterBundleItems(bundle, season))
      .filter((bundle) => bundle.items.length > 0);
  }, [room, season]);

  function toggleItem(id: string) {
    setCompleted((current) => ({ ...current, [id]: !current[id] }));
  }

  function clearProgress() {
    setCompleted({});
  }

  return (
    <main className="min-h-screen bg-[#f5e4bd] text-[#2f2418]">
      <section className="border-b-4 border-[#6f4b2f] bg-[#8f5b32] text-[#fff8de]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-8 md:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffd77a]">
              Stardew Valley - Year 1
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Community Center Guide
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#ffe9b1]">
              Track every bundle item, filter by season, and follow a Year 1
              route to finish the Community Center.
            </p>
          </div>

          <ProgressSummary
            completedCount={completedRequired}
            onClear={clearProgress}
            progress={progress}
            totalCount={totalRequired}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-6 md:px-8 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-5">
          <FiltersPanel
            onRoomChange={setRoom}
            onSeasonChange={setSeason}
            room={room}
            season={season}
          />
          <SeasonGuide />
        </aside>

        <section className="space-y-5">
          {visibleBundles.map((bundle) => (
            <BundleSection
              bundle={bundle}
              completed={completed}
              key={bundle.id}
              onToggleItem={toggleItem}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
