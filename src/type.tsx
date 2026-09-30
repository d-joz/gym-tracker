export type Days = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type DaysString =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

type HomeView = { name: "home" };
type DayView = { name: "day-detailed"; day: DaysString };

export type View = HomeView | DayView;

type exercise = {
  name: string;
  desc: string;
  volume: {
    weight: {
      min: number;
      max: number;
    };
    duration: {
      min: number;
      max: number;
    };

    reps: number;
    sets: number;
    "per-side": boolean;
  };
  notes: string;
};

export type DayRoutine = {
  name: string;
  desc: string;
  "warm-up": exercise[];
  workouts: exercise[];
  "cool-down": exercise[];
};

export type Routine = {
  sunday: DayRoutine;
  monday: DayRoutine;
  tuesday: DayRoutine;
  wednesday: DayRoutine;
  thursday: DayRoutine;
  friday: DayRoutine;
  saturday: DayRoutine;
};
