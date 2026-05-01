type ProgressSummaryProps = {
  completedCount: number;
  progress: number;
  totalCount: number;
  onClear: () => void;
};

export function ProgressSummary({
  completedCount,
  progress,
  totalCount,
  onClear,
}: ProgressSummaryProps) {
  return (
    <div className="w-full max-w-sm rounded-lg border-4 border-[#4e321f] bg-[#fff3cf] p-4 text-[#3b2819] shadow-[6px_6px_0_#4e321f]">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-bold uppercase text-[#7c5534]">
            Progresso
          </p>
          <p className="text-3xl font-black">{progress}%</p>
        </div>
        <p className="text-right text-sm font-bold">
          {completedCount} / {totalCount}
          <br />
          itens necessarios
        </p>
      </div>
      <div className="mt-4 h-4 overflow-hidden rounded-sm border-2 border-[#4e321f] bg-[#d7b16b]">
        <div className="h-full bg-[#4f9d47]" style={{ width: `${progress}%` }} />
      </div>
      <button
        className="mt-4 w-full rounded-md border-2 border-[#4e321f] bg-[#e06f3b] px-4 py-2 text-sm font-black text-white shadow-[3px_3px_0_#4e321f] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#4e321f]"
        onClick={onClear}
        type="button"
      >
        Limpar marcacoes
      </button>
    </div>
  );
}
