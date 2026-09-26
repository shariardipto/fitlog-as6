"use client";

import { CalendarPlus, Bookmark } from "lucide-react";
import { useWorkout } from "@/context/WorkoutContext";

export default function WorkoutActions({ workout }) {
  const {
    plan,
    saved,
    addToPlan,
    addToSaved,
  } = useWorkout();

  const id = workout.id || workout._id;

  const inPlan = plan.some(
    (item) =>
      String(item.id || item._id) === String(id)
  );

  const inSaved = saved.some(
    (item) =>
      String(item.id || item._id) === String(id)
  );

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

      <button
        onClick={() => addToPlan(workout)}
        className={`inline-flex h-[48px] items-center justify-center gap-2 rounded-[4px] px-6 text-xs font-extrabold uppercase transition ${
          inPlan
            ? "cursor-not-allowed bg-[#30343b] text-[#8d9097]"
            : "bg-[#caff00] text-black hover:bg-white"
        }`}
      >
        <CalendarPlus size={17} />

        {inPlan
          ? "Added to today's plan"
          : "Add to today's plan"}
      </button>

      <button
        onClick={() => addToSaved(workout)}
        className={`inline-flex h-[48px] items-center justify-center gap-2 rounded-[4px] border px-6 text-xs font-extrabold uppercase transition ${
          inSaved
            ? "cursor-not-allowed border-[#caff00] text-[#caff00]"
            : "border-[#3a3e46] text-white hover:border-[#caff00] hover:text-[#caff00]"
        }`}
      >
        <Bookmark size={17} />

        {inSaved
          ? "Saved"
          : "Save for later"}
      </button>

    </div>
  );
}