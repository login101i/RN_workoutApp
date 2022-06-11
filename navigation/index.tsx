import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { WorkoutDetailsScreen } from "../screens/WorkoutDetailsScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

const createScreenOptions = ({ route }) => {
  const TAB_ICON = {
    WorkoutDetails: { icon: "home" },
    Home: { icon: "home" },
    Planner: { icon: "star" }
  };

  const IconName = TAB_ICON[route.name].icon;

  return {
    tabBarIcon: ({ focused }) => (
      <>
        <FontAwesome5
          name={IconName}
          size={24}
          color={focused ? "orange" : "gray"}
        />
      </>
    )
  };
};

const BottomTab = createBottomTabNavigator();
function RootNavigation() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={createScreenOptions}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: "orange",
        inactiveTintColor: "gray",
        style: {
          marginBottom: 5
        }
      }}
    >
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Planner" component={PlannerScreen} />
      <BottomTab.Screen
        name="WorkoutDetails"
        component={WorkoutDetailsScreen}
        options={{ headerShown: false }}
      />
    </BottomTab.Navigator>
  );
}
