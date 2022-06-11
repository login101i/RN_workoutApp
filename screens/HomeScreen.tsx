import { useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  Pressable
} from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

import { data } from "../data";
import { Workout } from "../types/data";
import { WorkoutItem } from "../components/WorkoutItem";
import { MontserratText } from "../components/styled/MonteserratText";

export default function HomeScreen({ navigation }: NativeStackHeaderProps) {
 

  return (
    <View style={styles.container}>
      <MontserratText>New Workouts</MontserratText>
      <Text style={styles.header}> New Workouts</Text>
      <FlatList
        data={data as Workout[]}
        renderItem={({ item }) => {
          return <WorkoutItem navigation={navigation} item={item} />;
        }}
        keyExtractor={(item) => item.slug}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  header: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold"
  }
});
