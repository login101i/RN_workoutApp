import { storeData, getData } from './../storage/index';

import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { data } from '../data';

export  function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          "montserrat": require("../assets/fonts/Montserrat-Regular.ttf"),
          "montserrat-bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        })

        await storeData("workout-data", data);
      } catch (e) {
        console.warn(e);
      } finally {
        const workouts = await getData("workout-data");
        console.log("🚀 ~ file: useCachedResources.ts ~ line 23 ~ loadResourcesAndDataAsync ~ workouts", workouts)
        setIsLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, [])

  return isLoadingComplete;
}