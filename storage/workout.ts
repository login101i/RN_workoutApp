import { containsKey } from ".";
import { storeData, getData } from ".";
import { data } from "../data";
import { Workout } from "../types/data";
import { removeItem } from ".";

export const initWorkouts = async (): Promise<boolean> => {
  const hasWorkouts = await containsKey("workout-data");
  if (!hasWorkouts) {
    console.log("Storing data");
    await storeData("workout-data", data);
    return true;
  }
  return false;
};

export const getWorkouts = async (): Promise<Workout[]> => {
  const workouts = await getData("workout-data");
  return workouts;
};

export const clearWorkouts = async () => {
  await removeItem("workout-data");
};
