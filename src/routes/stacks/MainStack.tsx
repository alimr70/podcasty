import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import BottomTabNavigator from "../BottomTabNavigator";
// Start of screen
// End of screen
import { MainStackParamList } from "../types";
import MainScreenOptions from "../MainScreenOptions";

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={MainScreenOptions as NativeStackNavigationOptions}
    >
      {/* MAIN SCREENS */}
      <Stack.Group>
        <Stack.Screen
          name="Root"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
