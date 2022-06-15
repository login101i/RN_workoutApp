import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useWorkoutBySlug } from "../hooks/useWorkoutBySlug";
import { Modal } from "../components/styled/Modal";
import { PressableText } from "../components/styled/PressableText";
import { WorkoutItem } from "../components/WorkoutItem";
import { formatSec } from "../utils/time";
import { FontAwesome } from "@expo/vector-icons";
import { SequenceItem } from "../types/data";

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
  const [sequence, setSequence] = useState<SequenceItem[]>([])
  const [countDown, setCountDown] = useState(-1);
  const [trackerIdx, setTrackerIdx] = useState(-1);
  const workoutBySlug = useWorkoutBySlug(route.params.slug);
  console.log("🚀 ~ file: WorkoutDetailsScreen.tsx ~ line 26 ~ WorkoutDetailsScreen ~ workoutBySlug", workoutBySlug)

  const addItemToSequence = (idx: number) => {
    setSequence([...sequence, workoutBySlug!.sequence[idx]])
    setTrackerIdx(idx)
  }

  useEffect(() => {
    if (trackerIdx == -1) { return; }
    setCountDown(workoutBySlug!.sequence[trackerIdx].duration)

    const intervalId = window.setInterval(() => {
      setCountDown((count) => {
        console.log(count);
        return count - 1;
      })
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [trackerIdx])

  if (!workoutBySlug) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Loading</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <WorkoutItem item={workoutBySlug}
      childStyles={{marginTop:20}}
      >
        <Modal
          activator={({ handleOpen }) => (
            <Button onPress={handleOpen} title="see sequence" />
          )}
        >
          <View>
            <View>
              {workoutBySlug.sequence.map((si, idx) => (
                <View key={si.slug} style={styles.sequenceItem}>
                  <Text>
                    {si.name} | {si.type} | {formatSec(si.duration)}
                  </Text>
                  {idx !== workoutBySlug.sequence.length - 1 && (
                    <FontAwesome name="arrow-down" size={25} color="orange" />
                  )}
                </View>
              ))}
            </View>
          </View>
        </Modal>
      </WorkoutItem>
      <View>
      { sequence.length === 0 &&
          <FontAwesome
            name="play-circle-o"
            size={100}
            onPress={() => addItemToSequence(0)}
          />
        }
        {countDown}
      </View>
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
  },
  sequenceItem: {
    alignItems: "center"
  }
});
