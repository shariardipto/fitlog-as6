import Image from "next/image";
import { notFound } from "next/navigation";
import WorkoutActions from "@/components/WorkoutActions";
import { fallbackWorkouts } from "@/data/workouts";

async function getWorkout(id) {
  try {
    const res = await fetch(
      `https://api.api-store.workers.dev/api/fitlog/${id}`,
      {
        cache: "force-cache",
      }
    );

    if (res.ok) {
      const result = await res.json();

      if (result.data && !Array.isArray(result.data)) {
        return result.data;
      }

      if (result.workout) {
        return result.workout;
      }

      if (result.id || result._id) {
        return result;
      }
    }
  } catch (error) {
    console.warn("Single workout API unavailable.");
  }

  return fallbackWorkouts.find(
    (item) => String(item.id) === String(id)
  );
}

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;

  const workout = await getWorkout(id);

  if (!workout) {
    notFound();
  }

  const name =
    workout.name ||
    workout.title ||
    "Workout";

  const image =
    workout.image ||
    workout.imageUrl ||
    workout.thumbnail ||
    "/banner.png";

  const description =
    workout.description ||
    `A focused ${name.toLowerCase()} workout designed to build strength, improve technique, and support consistent training progress.`;

  const equipment =
    workout.equipment ||
    workout.equipments ||
    "Bodyweight";

  const difficulty =
    workout.difficulty ||
    workout.level ||
    "Intermediate";

  const sets =
    workout.sets ?? 4;

  const reps =
    workout.reps ||
    workout.repetitions ||
    "8-12";

  const duration =
    workout.duration ??
    workout.durationMinutes ??
    20;

  const calories =
    workout.calories ??
    workout.caloriesBurned ??
    150;

  const rating =
    workout.rating ?? 4.5;

  const categories =
    workout.categories ||
    workout.category ||
    [];

  const categoryList =
    Array.isArray(categories)
      ? categories
      : [categories];

  const equipmentText =
    Array.isArray(equipment)
      ? equipment.join(", ")
      : equipment;

  const instructions =
    workout.instructions &&
    Array.isArray(workout.instructions)
      ? workout.instructions
      : [
          "Set up your equipment and position your body with proper form.",
          `Perform the ${name.toLowerCase()} using a controlled range of motion.`,
          "Keep your core engaged and maintain steady breathing throughout each repetition.",
          "Complete the prescribed sets and reps, resting between sets as needed.",
        ];

  return (
    <section className="bg-[#090b0e] px-5 py-12 sm:px-6">
      <div className="mx-auto max-w-[1440px]">

        <div className="grid overflow-hidden rounded-[16px] border border-[#272b32] bg-[#15181d] lg:grid-cols-2">

          {/* LEFT */}
          <div className="relative min-h-[420px] bg-[#101216] lg:min-h-[700px]">
            <Image
              src={image}
              alt={name}
              fill
              priority
              className="object-contain p-8 sm:p-12"
            />
          </div>

          {/* RIGHT */}
          <div className="p-7 sm:p-10 lg:p-12">

            {/* Categories */}
            <div className="mb-5 flex flex-wrap gap-2">
              {categoryList
                .filter(Boolean)
                .map((category, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[#20270e] px-3 py-1.5 text-[10px] font-bold uppercase text-[#caff00]"
                  >
                    {category}
                  </span>
                ))}
            </div>

            {/* Title */}
            <h1
              className="text-[42px] font-bold uppercase leading-[0.95] text-white sm:text-[52px]"
              style={{
                fontFamily: "var(--font-oswald)",
              }}
            >
              {name}
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[650px] text-[15px] leading-7 text-[#a0a3aa]">
              {description}
            </p>

            {/* Specs */}
            <div className="mt-8">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em] text-[#caff00]">
                Key Specs
              </p>

              <div className="overflow-hidden rounded-[10px] border border-[#2b2f36]">

                <Spec
                  label="Equipment"
                  value={equipmentText}
                />

                <Spec
                  label="Difficulty"
                  value={difficulty}
                />

                <Spec
                  label="Sets"
                  value={sets}
                />

                <Spec
                  label="Reps"
                  value={reps}
                />

                <Spec
                  label="Duration"
                  value={
                    typeof duration === "number"
                      ? `${duration} min`
                      : duration
                  }
                />

                <Spec
                  label="Calories"
                  value={
                    typeof calories === "number"
                      ? `${calories} kcal`
                      : calories
                  }
                />

                <Spec
                  label="Rating"
                  value={rating}
                  last
                />

              </div>
            </div>

            {/* Instructions */}
            <div className="mt-9">

              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.12em] text-[#caff00]">
                Instructions
              </p>

              <ol className="space-y-4">

                {instructions
                  .slice(0, 4)
                  .map((instruction, index) => (

                    <li
                      key={index}
                      className="flex gap-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#3a3e45] text-[11px] font-bold text-[#caff00]">
                        {index + 1}
                      </span>

                      <p className="pt-0.5 text-sm leading-6 text-[#b0b3ba]">
                        {instruction}
                      </p>
                    </li>

                  ))}

              </ol>

            </div>

            <WorkoutActions workout={workout} />

          </div>
        </div>

      </div>
    </section>
  );
}

function Spec({ label, value, last = false }) {
  return (
    <div
      className={`grid grid-cols-[120px_1fr] gap-5 px-4 py-3.5 ${
        !last ? "border-b border-[#292d34]" : ""
      }`}
    >
      <span className="text-[10px] font-bold uppercase tracking-wider text-[#73767d]">
        {label}
      </span>

      <span className="text-sm font-medium text-white">
        {value}
      </span>
    </div>
  );
}