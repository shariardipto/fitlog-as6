import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section
        id="library"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mb-10">

          <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#ccff00]">
            ALL WORKOUTS
          </p>

          <h2
            className="text-4xl font-bold uppercase sm:text-5xl"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            The Library
          </h2>

          <p className="mt-3 text-neutral-400">
            Twelve lifts covering every major muscle group.
          </p>

        </div>

        <div className="border border-dashed border-neutral-700 p-12 text-center text-neutral-500">
          Workout cards will be added in Phase 2.
        </div>

      </section>
    </>
  );
}