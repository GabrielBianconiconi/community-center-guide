import type { Room, Season } from "@/lib/community-center";
import { rooms, seasons } from "@/lib/community-center";

type FiltersPanelProps = {
  room: Room | "Todas";
  season: Season | "Todas";
  onRoomChange: (room: Room | "Todas") => void;
  onSeasonChange: (season: Season | "Todas") => void;
};

export function FiltersPanel({
  room,
  season,
  onRoomChange,
  onSeasonChange,
}: FiltersPanelProps) {
  return (
    <div className="rounded-lg border-4 border-[#6f4b2f] bg-[#fff8de] p-4 shadow-[4px_4px_0_#6f4b2f]">
      <h2 className="text-lg font-black">Filtros</h2>

      <label className="mt-4 block text-sm font-bold" htmlFor="season">
        Estacao
      </label>
      <select
        className="mt-2 w-full rounded-md border-2 border-[#7c5534] bg-[#fffdf4] px-3 py-2 font-bold"
        id="season"
        onChange={(event) => onSeasonChange(event.target.value as Season | "Todas")}
        value={season}
      >
        {seasons.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      <label className="mt-4 block text-sm font-bold" htmlFor="room">
        Sala
      </label>
      <select
        className="mt-2 w-full rounded-md border-2 border-[#7c5534] bg-[#fffdf4] px-3 py-2 font-bold"
        id="room"
        onChange={(event) => onRoomChange(event.target.value as Room | "Todas")}
        value={room}
      >
        {rooms.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
