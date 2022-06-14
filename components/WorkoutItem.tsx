import { ReactNode } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ViewStyle,
  StyleProp
} from "react-native";
import { Workout } from "../types/data";
import { formatSec } from "../utils/time";

export const WorkoutItem = ({
  item,
  children,
  navigation,
  childStyles
}: {
  item: Workout;
  children?: ReactNode;
  childStyles?: StyleProp<ViewStyle>;
}) => {
  return (
    <Pressable
      onPress={() =>
        !children
          ? navigation.navigate("WorkoutDetails", { slug: item.slug })
          : null
      }
    >
      <>
        {" "}
        <View style={styles.container}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.duration}>
            Duration: {formatSec(item.duration)}{" "}
          </Text>
          <Text style={styles.difficulty}>Difficulty: {item.difficulty}</Text>
          {children && <View style={childStyles}>{children}</View>}
        </View>
      </>
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
