import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";

type DetailParams = {
  route: {
    params: {
      slug: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & DetailParams;

export function WorkoutDetailsScreen({ route }: Navigation) {
  console.log(route.params as any);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{(route.params as any).slug}</Text>
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
