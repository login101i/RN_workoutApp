import { useEffect } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import {data} from "../data"
import { Workout } from "../types/data";
import WorkoutItem from "../components/WorkoutItem";

export default function HomeScreen({ navigation }: any) {

  return (
    <View style={styles.container}>
            <Text style={styles.header}>New Workouts</Text>
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
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold"
  }
});
