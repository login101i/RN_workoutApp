import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { initWorkouts, getWorkouts, clearWorkouts } from "../storage/workout";

export function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf")
        });
        await clearWorkouts();
        await initWorkouts();
      } catch (e) {
        console.warn(e);
      } finally {
        
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return { isLoadingComplete };
}
