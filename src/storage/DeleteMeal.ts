import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "./config";
import { AppError } from "@utils/AppError";

export async function DeleteMeal(id: string) {
  try {
    if (!id) {
      throw new AppError('Id is required');
    }

    await AsyncStorage.removeItem(`${MEALS_COLLECTION}:${id}`);
  } catch (error) {
    throw error;
  }
}