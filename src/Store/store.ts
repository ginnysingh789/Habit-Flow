import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

export interface HabitState {
  Habits: Habit[];
  addHabit: (name: string, frequency: "daily" | "weekly") => void;
  removeHabit: (id: string) => void;
  toggleHabot: (id: string, date: string) => void; // Keeping the typo
}

// Zustand with persist middleware
const useHabitStore = create<HabitState>()(
  persist(
    (set) => ({
      Habits: [],

      addHabit: (name, frequency) =>
        set((state) => ({
          Habits: [
            ...state.Habits,
            {
              id: Date.now().toString(),
              name,
              frequency,
              completedDates: [],
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      removeHabit: (id) =>
        set((state) => ({
          Habits: state.Habits.filter((Habit) => Habit.id !== id),
        })),

      toggleHabot: (id, date) =>
        set((state) => ({
          Habits: state.Habits.map((habit) =>
            habit.id === id
              ? {
                  ...habit,
                  completedDates: habit.completedDates.includes(date)
                    ? habit.completedDates.filter((d) => d !== date) // Unmark if completed
                    : [...habit.completedDates, date], // Mark as completed
                }
              : habit
          ),
        })),
    }),
    {
      name: "habit-storage", // Storage key
    }
  )
);

export default useHabitStore;
