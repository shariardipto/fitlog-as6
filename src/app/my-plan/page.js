"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Dumbbell,
  Clock3,
  Flame,
  ArrowRight,
} from "lucide-react";

import { useWorkout } from "@/context/WorkoutContext";
import PlanCard from "@/components/PlanCard";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState("plan");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const exercises = plan.length;

  const minutes = plan.reduce((total, workout) => {
    return total + parseNumber(
      workout.duration ??
      workout.durationMinutes
    );
  }, 0);

  const calories = plan.reduce((total, workout) => {
    return total + parseNumber(
      workout.calories ??
      workout.caloriesBurned
    );
  }, 0);

  const currentList =
    activeTab === "plan"
      ? plan
      : saved;

  return (
    <section className="min-h-[75vh] bg-[#090b0e] px-5 py-12 sm:px-6">

      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="mb-9">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#caff00]">
            Workout Log
          </p>

          <h1
            className="text-[44px] font-bold uppercase leading-none text-white sm:text-[54px]"
            style={{
              fontFamily: "var(--font-oswald)",
            }}
          >
            My Plan
          </h1>

          <p className="mt-4 text-sm text-[#9699a2] sm:text-[15px]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

          <MetricCard
            icon={<Dumbbell size={18} />}
            label="Exercises"
            value={exercises}
          />

          <MetricCard
            icon={<Clock3 size={18} />}
            label="Minutes"
            value={minutes}
          />

          <MetricCard
            icon={<Flame size={18} />}
            label="Calories"
            value={calories}
          />

        </div>

        {/* Tabs */}
        <div className="mt-10 flex border-b border-[#292d34]">

          <button
            onClick={() => setActiveTab("plan")}
            className={`relative px-5 py-4 text-[11px] font-bold uppercase ${
              activeTab === "plan"
                ? "text-[#caff00]"
                : "text-[#858890] hover:text-white"
            }`}
          >
            Today&apos;s Plan ({plan.length})

            {activeTab === "plan" && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#caff00]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`relative px-5 py-4 text-[11px] font-bold uppercase ${
              activeTab === "saved"
                ? "text-[#caff00]"
                : "text-[#858890] hover:text-white"
            }`}
          >
            Saved ({saved.length})

            {activeTab === "saved" && (
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#caff00]" />
            )}
          </button>

        </div>

        {/* Content */}
        <div className="mt-6">

          {loading ? (
            <LoadingState />
          ) : currentList.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-4">

              {currentList.map((workout, index) => {
                const id =
                  workout.id ||
                  workout._id ||
                  index;

                return (
                  <PlanCard
                    key={id}
                    workout={workout}
                    type={activeTab}
                    onMarkDone={markAsDone}
                    onRemove={
                      activeTab === "plan"
                        ? removeFromPlan
                        : removeFromSaved
                    }
                  />
                );
              })}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}

function MetricCard({ icon, label, value }) {
  return (
    <div className="rounded-[10px] border border-[#292d34] bg-[#15181d] p-5">

      <div className="flex items-center justify-between">

        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#858890]">
          {label}
        </span>

        <div className="text-[#caff00]">
          {icon}
        </div>

      </div>

      <p
        className="mt-4 text-[36px] font-bold leading-none text-white"
        style={{
          fontFamily: "var(--font-oswald)",
        }}
      >
        {value}
      </p>

    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center gap-4 rounded-[12px] border border-[#292d34] bg-[#15181d]">

      <div className="h-9 w-9 animate-spin rounded-full border-2 border-[#353941] border-t-[#caff00]" />

      <p className="text-sm text-[#9699a2]">
        Loading workouts…
      </p>

    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[12px] border border-[#292d34] bg-[#15181d] px-6 text-center">

      <h2
        className="text-[30px] font-bold uppercase text-white"
        style={{
          fontFamily: "var(--font-oswald)",
        }}
      >
        Nothing Here Yet
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-[#9699a2]">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex h-[42px] items-center gap-3 rounded-[4px] bg-[#caff00] px-5 text-[11px] font-extrabold uppercase text-black hover:bg-white"
      >
        Go to Workouts

        <ArrowRight size={15} />
      </Link>

    </div>
  );
}

function parseNumber(value) {
  if (typeof value === "number") {
    return value;
  }

  const parsed = parseInt(value, 10);

  return Number.isNaN(parsed)
    ? 0
    : parsed;
}