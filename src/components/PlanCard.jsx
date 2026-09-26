"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Clock3,
  Flame,
  Star,
  Check,
  X,
  ExternalLink,
  Dumbbell,
} from "lucide-react";

export default function PlanCard({
  workout,
  type,
  onRemove,
  onMarkDone,
}) {
  const id = workout.id || workout._id;

  const name =
    workout.name ||
    workout.title ||
    "Workout";

  const image =
    workout.image ||
    workout.imageUrl ||
    workout.thumbnail ||
    "/banner.png";

  const equipment =
    workout.equipment ||
    workout.equipments ||
    "No equipment";

  const equipmentText = Array.isArray(equipment)
    ? equipment.join(", ")
    : equipment;

  const duration =
    workout.duration ??
    workout.durationMinutes ??
    0;

  const calories =
    workout.calories ??
    workout.caloriesBurned ??
    0;

  const rating =
    workout.rating ?? 0;

  const completed = workout.completed === true;

  return (
    <article
      className={`overflow-hidden rounded-[12px] border bg-[#15181d] transition ${
        completed
          ? "border-[#caff00]/40 opacity-70"
          : "border-[#292d34]"
      }`}
    >
      <div className="flex flex-col sm:flex-row">

        {/* Image */}
        <div className="relative h-[190px] w-full shrink-0 bg-[#101216] sm:h-auto sm:w-[220px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-4"
          />

          {completed && (
            <div className="absolute left-3 top-3 rounded-full bg-[#caff00] px-3 py-1 text-[9px] font-extrabold uppercase text-black">
              Done
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-5">

          <div>
            <h3
              className="text-[24px] font-bold uppercase leading-tight text-white"
              style={{
                fontFamily: "var(--font-oswald)",
              }}
            >
              {name}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-sm text-[#8f9299]">
              <Dumbbell size={14} />

              <span>{equipmentText}</span>
            </div>

            {/* Stats */}
            <div className="mt-5 flex flex-wrap items-center gap-5 text-xs text-[#aeb1b8]">

              <div className="flex items-center gap-2">
                <Clock3
                  size={15}
                  className="text-[#ff5b60]"
                />

                <span>
                  {duration}
                  {typeof duration === "number" && " min"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Flame
                  size={15}
                  className="text-[#ff5b60]"
                />

                <span>
                  {calories}
                  {typeof calories === "number" && " kcal"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Star
                  size={15}
                  className="text-[#ff5b60]"
                />

                <span>{rating}</span>
              </div>

            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">

            <Link
              href={`/workout/${id}`}
              className="inline-flex h-[38px] items-center gap-2 rounded-[4px] border border-[#393d45] px-4 text-[10px] font-bold uppercase text-white hover:border-[#caff00] hover:text-[#caff00]"
            >
              View Details
              <ExternalLink size={13} />
            </Link>

            {/* Only Today's Plan */}
            {type === "plan" && (
              <button
                onClick={() => onMarkDone(id)}
                disabled={completed}
                className={`inline-flex h-[38px] items-center gap-2 rounded-[4px] px-4 text-[10px] font-bold uppercase ${
                  completed
                    ? "cursor-not-allowed bg-[#293019] text-[#caff00]"
                    : "bg-[#caff00] text-black hover:bg-white"
                }`}
              >
                <Check size={14} />

                {completed
                  ? "Completed"
                  : "Mark as Done"}
              </button>
            )}

            <button
              onClick={() => onRemove(id)}
              aria-label="Remove workout"
              className="ml-auto flex h-[38px] w-[38px] items-center justify-center rounded-[4px] border border-[#393d45] text-[#9b9ea5] hover:border-red-500 hover:text-red-400"
            >
              <X size={16} />
            </button>

          </div>

        </div>
      </div>
    </article>
  );
}