import { useEffect, useState } from "react";
import { getWorkouts } from "../storage/workout";
import { Workout } from "../types/data";
import { useIsFocused } from "@react-navigation/native";

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const isFocused = useIsFocused();
  console.log(
    "🚀 ~ file: useWorkouts.ts ~ line 9 ~ useWorkouts ~ isFocused",
    isFocused
  );

  useEffect(() => {
    async function getData() {
      console.log("getting dataaaa");
      const _workouts = await getWorkouts();
      setWorkouts(_workouts);
    }
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return workouts;
};
