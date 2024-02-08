import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/Home";
import { MealForm } from "@screens/MealForm";
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
    </Navigator>
  );
}