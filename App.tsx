import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import Navigation from './navigation'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Navigation />
    </>
  );
}
