import { yearOnePlan } from "@/lib/community-center";

export function SeasonGuide() {
  return (
    <div className="rounded-lg border-4 border-[#6f4b2f] bg-[#fff8de] p-4 shadow-[4px_4px_0_#6f4b2f]">
      <h2 className="text-lg font-black">Roteiro por estacao</h2>
      <div className="mt-3 space-y-4">
        {yearOnePlan.map((plan) => (
          <details
            className="rounded-md border-2 border-[#d4a45f] bg-[#fffdf4] p-3"
            key={plan.season}
            open={plan.season === "Primavera"}
          >
            <summary className="cursor-pointer font-black">{plan.season}</summary>
            <p className="mt-2 text-sm font-semibold text-[#72502f]">
              {plan.focus}
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-5">
              {plan.tasks.map((task) => (
                <li className="flex gap-2" key={task}>
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#4f9d47]" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}
