import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import { fallbackWorkouts } from "@/data/workouts";

async function getWorkouts() {
  try {
    const res = await fetch(
      "https://api.abcz.workers.dev/api/fitlog",
      {
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      console.warn(`FitLog API unavailable: ${res.status}`);
      return fallbackWorkouts;
    }

    const result = await res.json();

    if (Array.isArray(result)) {
      return result;
    }

    if (Array.isArray(result.data)) {
      return result.data;
    }

    if (Array.isArray(result.workouts)) {
      return result.workouts;
    }

    return fallbackWorkouts;
  } catch (error) {
    console.warn("Using fallback workout data.");
    return fallbackWorkouts;
  }
}

export default async function Home() {
  const workouts = await getWorkouts();

  return (
    <>
      <Hero />

      <section
        id="library"
        className="bg-[#090b0e] px-5 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-9">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.08em] text-[#caff00]">
              Workout Library
            </p>

            <h2
              className="text-[38px] font-bold uppercase leading-none text-white sm:text-[46px]"
              style={{ fontFamily: "var(--font-oswald)" }}
            >
              The Library
            </h2>

            <p className="mt-3 text-sm text-[#9699a2] sm:text-[15px]">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <WorkoutLibrary workouts={workouts} />

        </div>
      </section>
    </>
  );
}