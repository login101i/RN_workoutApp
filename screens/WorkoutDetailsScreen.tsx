import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import { Modal } from "../components/styled/Modal";
import { PressableText } from "../components/styled/PressableText";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

export function WorkoutDetailsScreen({ route }: Navigation) {
  const [isModalVisible, setModalVisible] = useState(false);
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
    
       <Modal
        activator={({handleOpen}) =>
          <Button
            onPress={handleOpen}
            title="Custom Button"
          />
        }
      >
        <Text>text 1</Text>
      </Modal>
    
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
