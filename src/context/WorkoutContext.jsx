"use client";

import { createContext, useContext, useState } from "react";
import { toast } from "sonner";

const WorkoutContext = createContext(null);

export function WorkoutProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  function getId(item) {
    return String(item.id || item._id);
  }

  function addToPlan(workout) {
    const workoutId = getId(workout);

    const alreadyAdded = plan.some(
      (item) => getId(item) === workoutId
    );

    if (alreadyAdded) {
      toast.error("Workout already in today's plan");
      return;
    }

    setPlan((prev) => [
      ...prev,
      {
        ...workout,
        completed: false,
      },
    ]);

    toast.success("Added to today's plan");
  }

  function addToSaved(workout) {
    const workoutId = getId(workout);

    const alreadySaved = saved.some(
      (item) => getId(item) === workoutId
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
        (item) => getId(item) !== String(id)
      )
    );

    toast.success("Workout removed from today's plan");
  }

  function removeFromSaved(id) {
    setSaved((prev) =>
      prev.filter(
        (item) => getId(item) !== String(id)
      )
    );

    toast.success("Workout removed from saved");
  }

  function markAsDone(id) {
    setPlan((prev) =>
      prev.map((item) =>
        getId(item) === String(id)
          ? {
              ...item,
              completed: true,
            }
          : item
      )
    );

    toast.success("Workout marked as done");
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
        markAsDone,
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