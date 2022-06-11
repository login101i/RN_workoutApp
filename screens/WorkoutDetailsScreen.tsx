import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import { getWorkoutBySlug } from "../storage/workout";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

export function WorkoutDetailsScreen({ route }: Navigation) {
  const workoutBySlug = useWorkoutBySlug(route.params.slug);

  if (!workoutBySlug) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Loading</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{workoutBySlug.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold"
  }
});
