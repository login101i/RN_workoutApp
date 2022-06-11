import { View, Text, StyleSheet, Pressable } from "react-native";
import { Workout } from "../types/data";
import { formatSec } from "../utils/time";

export const WorkoutItem = ({ item, navigation }: { item: Workout }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("WorkoutDetails", { slug: item.slug })}
    >
      <View style={styles.container}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.duration}>
          Duration: {formatSec(item.duration)}{" "}
        </Text>
        <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: "rgba(0,0,0, 0.1)",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5
  },
  duration: {
    fontSize: 15
  },
  difficulty: {
    fontSize: 15
  }
});
