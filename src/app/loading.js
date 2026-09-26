export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090b0e]">
      <div className="flex flex-col items-center gap-4">

        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#343840] border-t-[#caff00]" />

        <p className="text-sm text-[#9699a2]">
          Loading workouts...
        </p>

      </div>
    </div>
  );
}