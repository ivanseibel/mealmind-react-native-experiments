import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "./config";
import { Meal } from "./MealStorageDTO";

const POSITIVE_THRESHOLD = 0.7;


export async function GetStatistics() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const meals: Meal[] = [];

    for (const key of keys) {
      if (key.includes(MEALS_COLLECTION)) {
        const meal = await AsyncStorage.getItem(key);
        if (meal) {
          meals.push(JSON.parse(meal));
        }
      }
    }

    const totalHealthyMeals = meals.filter((meal) => meal.status === 'green').length
    const totalUnhealthyMeals = meals.filter((meal) => meal.status === 'red').length;
    const totalMeals = meals.length;
    const percentageHealthyMeals = (totalHealthyMeals / totalMeals) * 100;
    const generalStatus = percentageHealthyMeals > POSITIVE_THRESHOLD ? 'positive' : 'negative';

    return {
      totalHealthyMeals,
      totalUnhealthyMeals,
      totalMeals,
      percentageHealthyMeals,
      generalStatus
    };
  } catch (error) {
    throw error;
  }
}

