import { useEffect } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import {data} from "../data"
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";
import { MontserratText } from "../components/styled/MonteserratText";


export default function HomeScreen({ navigation }: NativeStackHeaderProps) {

  return (
    <View style={styles.container}>
            <MontserratText>New Workouts</MontserratText>
      <FlatList
               data={data as Workout[]}

        renderItem={WorkoutItem}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex:1
  },
  header: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
  }
});
