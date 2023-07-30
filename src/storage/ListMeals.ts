import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./config";


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

    // Sort meals by date and time
    meals.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA > dateB) {
        return 1;
      }
      if (dateA < dateB) {
        return -1;
      }

      const timeA = a.time.split(":");
      const timeB = b.time.split(":");
      if (parseInt(timeA[0]) > parseInt(timeB[0])) {
        return 1;
      }
      if (parseInt(timeA[0]) < parseInt(timeB[0])) {
        return -1;
      }
      if (parseInt(timeA[1]) > parseInt(timeB[1])) {
        return 1;
      }
      if (parseInt(timeA[1]) < parseInt(timeB[1])) {
        return -1;
      }

      return 0;
    });

    return meals;
  } catch (error) {
    throw error;
  }
}