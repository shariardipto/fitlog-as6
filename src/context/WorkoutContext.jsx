"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

const WorkoutContext = createContext(null);

export function WorkoutProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  function addToPlan(workout) {
    const alreadyAdded = plan.some(
      (item) => String(item.id || item._id) === String(workout.id || workout._id)
    );

    if (alreadyAdded) {
      toast.error("Workout already in today's plan");
      return;
    }

    setPlan((prev) => [...prev, workout]);
    toast.success("Added to today's plan");
  }

  function addToSaved(workout) {
    const alreadySaved = saved.some(
      (item) => String(item.id || item._id) === String(workout.id || workout._id)
    );

    if (alreadySaved) {
      toast.error("Workout already saved");
      return;
    }

    setSaved((prev) => [...prev, workout]);
    toast.success("Saved for later");
  }

  function removeFromPlan(id) {
    setPlan((prev) =>
      prev.filter(
        (item) => String(item.id || item._id) !== String(id)
      )
    );

    toast.success("Removed from today's plan");
  }

  function removeFromSaved(id) {
    setSaved((prev) =>
      prev.filter(
        (item) => String(item.id || item._id) !== String(id)
      )
    );

    toast.success("Removed from saved workouts");
  }

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkout() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
}