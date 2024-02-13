import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./config";
import { AppError } from "@utils/AppError";

export async function GetMealById(id: string) {
  try {
    if (!id) {
      throw new AppError('Id is required');
    }

    const meal = await AsyncStorage.getItem(`${MEALS_COLLECTION}:${id}`);
    if (meal) {
      return JSON.parse(meal) as Meal;
    }
  } catch (error) {
    throw error;
  }
}
