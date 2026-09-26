"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import WorkoutCard from "./WorkoutCard";

export default function WorkoutLibrary({ workouts = [] }) {
  const [sortBy, setSortBy] = useState("duration");

  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return (
          getNumber(a.duration ?? a.durationMinutes) -
          getNumber(b.duration ?? b.durationMinutes)
        );
      }

      if (sortBy === "calories") {
        return (
          getNumber(b.calories ?? b.caloriesBurned) -
          getNumber(a.calories ?? a.caloriesBurned)
        );
      }

      if (sortBy === "rating") {
        return (
          getNumber(b.rating) -
          getNumber(a.rating)
        );
      }

      return 0;
    });
  }, [workouts, sortBy]);

  if (!workouts.length) {
    return (
      <div className="rounded-xl border border-[#282c33] bg-[#15181d] p-10 text-center">
        <p className="text-[#9699a2]">
          No workouts found.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Sort */}
      <div className="mb-6 flex justify-end">
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none rounded-[5px] border border-[#30343b] bg-[#15181d] py-2.5 pl-4 pr-10 text-[11px] font-bold uppercase text-white outline-none transition focus:border-[#caff00]"
          >
            <option value="duration">
              Sort By: Duration
            </option>

            <option value="calories">
              Sort By: Calories
            </option>

            <option value="rating">
              Sort By: Rating
            </option>
          </select>

          <ChevronDown
            size={14}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#caff00]"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout, index) => (
          <WorkoutCard
            key={workout.id || workout._id || index}
            workout={workout}
          />
        ))}
      </div>
    </>
  );
}

function getNumber(value) {
  if (typeof value === "number") {
    return value;
  }

  const parsed = parseFloat(value);

  return Number.isNaN(parsed) ? 0 : parsed;
}