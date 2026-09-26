export default function MyPlanPage() {
  return (
    <section className="mx-auto min-h-[70vh] max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

      <p className="mb-3 text-xs font-bold tracking-[0.25em] text-[#ccff00]">
        YOUR WORKOUTS
      </p>

      <h1
        className="text-5xl font-bold uppercase"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        My Plan
      </h1>

      <p className="mt-4 text-neutral-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-12 border border-dashed border-neutral-700 p-12 text-center text-neutral-500">
        My Plan functionality will be added in Phase 4.
      </div>

    </section>
  );
}