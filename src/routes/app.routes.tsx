import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Feedback } from "@screens/Feedback";
import { HomeScreen } from "@screens/Home";
import { MealDetailsScreen } from "@screens/MealDetails";
import { MealFormScreen } from "@screens/MealForm";
import { SettingsScreen } from "@screens/Settings";
import { StatisticsScreen } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Statistics" component={StatisticsScreen} />
      <Screen name="MealForm" component={MealFormScreen} />
      <Screen name="Feedback" component={Feedback} />
      <Screen name="MealDetails" component={MealDetailsScreen} />
      <Screen name="Settings" component={SettingsScreen} />
    </Navigator>
  );
}