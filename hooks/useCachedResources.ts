
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { initWorkouts, getWorkouts } from "../storage/workout";

export function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [workouts, setWorkouts] = useState({});

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf")
        });
        await initWorkouts()
      } catch (e) {
        console.warn(e);
      } finally {
        const workouts = await getWorkouts()
        setWorkouts(workouts);
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return { isLoadingComplete, workouts };
}
