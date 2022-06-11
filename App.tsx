import { StatusBar } from "expo-status-bar";
import Navigation from "./navigation";
import { useCachedResources } from "./hooks/useCachedResources";


export default function App() {
  const isLoaded = useCachedResources();
  console.log("🚀 ~ file: App.tsx ~ line 9 ~ App ~ isLoaded", isLoaded);



  if (isLoaded) {
    return (
      <>
        <StatusBar style="auto" />
        <Navigation />
      </>
    );
  } else return null;
}
