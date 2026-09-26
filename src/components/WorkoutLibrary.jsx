import WorkoutCard from "./WorkoutCard";

export default function WorkoutLibrary({ workouts = [] }) {
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
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout, index) => (
        <WorkoutCard
          key={workout.id || workout._id || index}
          workout={workout}
        />
      ))}
    </div>
  );
}