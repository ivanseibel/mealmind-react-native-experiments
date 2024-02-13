import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback } from "@screens/Feedback";
import { Home } from "@screens/Home";
import { MealDetails } from "@screens/MealDetails";
import { MealForm } from "@screens/MealForm";
import { Settings } from "@screens/Settings";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Statistics" component={Statistics} />
      <Screen name="MealForm" component={MealForm} />
      <Screen name="Feedback" component={Feedback} />
      <Screen name="MealDetails" component={MealDetails} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}