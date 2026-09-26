"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "sonner";

const WorkoutContext = createContext(null);

export function WorkoutProvider({ children }) {
  const [plan, setPlan] = useState([]);
  const [saved, setSaved] = useState([]);

  const [hydrated, setHydrated] = useState(false);

useEffect(() => {
  try {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }
  } catch (error) {
    console.error("Could not load FitLog data", error);
  } finally {
    setHydrated(true);
  }
}, []);

useEffect(() => {
  if (!hydrated) return;

  localStorage.setItem(
    "fitlog-plan",
    JSON.stringify(plan)
  );
}, [plan, hydrated]);

useEffect(() => {
  if (!hydrated) return;

  localStorage.setItem(
    "fitlog-saved",
    JSON.stringify(saved)
  );
}, [saved, hydrated]);

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

    if (plan.length >= 5) {
        toast.error(
        "Today's plan can contain a maximum of 5 workouts"
        );
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