import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./config";
import { AppError } from "@utils/AppError";


export async function listMeals() {
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

    return meals;
  } catch (error) {
    throw error;
  }
}