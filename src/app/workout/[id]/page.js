import Link from "next/link";

export default async function WorkoutDetailsPage({ params }) {
  const { id } = await params;

  return (
    <section className="min-h-[70vh] bg-[#090b0e] px-5 py-16 sm:px-6">

      <div className="mx-auto max-w-[1440px]">

        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#caff00]">
          Workout Details
        </p>

        <h1
          className="text-5xl font-bold uppercase text-white"
          style={{
            fontFamily: "var(--font-oswald)",
          }}
        >
          Workout #{id}
        </h1>

        <p className="mt-4 text-[#9699a2]">
          Full workout details will be added in Phase 3.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex bg-[#caff00] px-5 py-3 text-xs font-bold uppercase text-black"
        >
          Back to workouts
        </Link>

      </div>

    </section>
  );
}