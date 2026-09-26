import Image from "next/image";
import Link from "next/link";
import {
  Clock3,
  Flame,
  Star,
  Dumbbell,
  ArrowUpRight,
} from "lucide-react";

export default function WorkoutCard({ workout }) {
  const id = workout.id || workout._id;

  const name =
    workout.name ||
    workout.title ||
    "Workout";

  const image =
    workout.image ||
    workout.imageUrl ||
    workout.thumbnail ||
    "/placeholder.png";

  const duration =
    workout.duration ??
    workout.durationMinutes ??
    0;

  const calories =
    workout.calories ??
    workout.caloriesBurned ??
    0;

  const rating =
    workout.rating ??
    0;

  const equipment =
    workout.equipment ||
    workout.equipments ||
    "No equipment";

  const categories =
    workout.categories ||
    workout.category ||
    [];

  const normalizedCategories = Array.isArray(categories)
    ? categories
    : [categories];

  const normalizedEquipment = Array.isArray(equipment)
    ? equipment.join(", ")
    : equipment;

  return (
    <Link
      href={`/workout/${id}`}
      className="group overflow-hidden rounded-[14px] border border-[#272b32] bg-[#15181d] transition duration-300 hover:-translate-y-1 hover:border-[#caff00]/60"
    >

      {/* Image */}
      <div className="relative h-[245px] overflow-hidden bg-[#101216]">

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Categories */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {normalizedCategories
            .filter(Boolean)
            .slice(0, 2)
            .map((category, index) => (
              <span
                key={index}
                className="rounded-full bg-[#caff00] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-black"
              >
                {category}
              </span>
            ))}
        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        <div className="flex items-start justify-between gap-4">

          <div>
            <h3
              className="text-[22px] font-bold uppercase leading-tight text-white"
              style={{
                fontFamily: "var(--font-oswald)",
              }}
            >
              {name}
            </h3>

            <div className="mt-2 flex items-center gap-2 text-sm text-[#9699a2]">
              <Dumbbell size={14} />

              <span>{normalizedEquipment}</span>
            </div>
          </div>

          <ArrowUpRight
            size={20}
            className="mt-1 shrink-0 text-[#686b72] transition group-hover:text-[#caff00]"
          />

        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-[#292d34]" />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">

          <div className="flex items-center gap-2 text-xs text-[#b7bac1]">
            <Clock3
              size={15}
              className="text-[#ff5a5f]"
            />

            <span>
              {duration}
              {typeof duration === "number" && " min"}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#b7bac1]">
            <Flame
              size={15}
              className="text-[#ff5a5f]"
            />

            <span>
              {calories}
              {typeof calories === "number" && " kcal"}
            </span>
          </div>

          <div className="flex items-center justify-end gap-2 text-xs text-[#b7bac1]">
            <Star
              size={15}
              className="text-[#ff5a5f]"
            />

            <span>{rating}</span>
          </div>

        </div>

      </div>

    </Link>
  );
}