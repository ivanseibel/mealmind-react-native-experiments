import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./config";
import { AppError } from "@utils/AppError";

type AddMealProps = Omit<Meal, 'id'>;

export async function AddMeal(meal: AddMealProps) {
  function validate(meal: AddMealProps) {
    if (!meal.title) {
      throw new AppError('Title is required');
    }

    if (!meal.status) {
      throw new AppError('Status is required');
    }

    if (!meal.date) {
      throw new AppError('Date is required');
    }

    if (!meal.time) {
      throw new AppError('Time is required');
    }

    if (!meal.description) {
      throw new AppError('Description is required');
    }
  }

  try {
    const newMeal: Meal = {
      id: String(new Date().getTime()),
      ...meal,
    }

    validate(meal); 

    await AsyncStorage.setItem(
      `${MEALS_COLLECTION}:${newMeal.id}`,
      JSON.stringify(newMeal)
    );

    return newMeal
  } catch (error) {
    throw error;
  }
}