import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./config";
import { AppError } from "@utils/AppError";

type AddMealProps = Omit<Meal, 'id' | 'status'> & {
  status?: 'green' | 'red' | undefined;
}

function validate(meal: AddMealProps) {
  console.log('Validating meal', meal);

  if (!meal.name) {
    throw new AppError('Name is required');
  }

  if (!meal.description) {
    throw new AppError('Description is required');
  }
  
  if (!meal.date) {
    throw new AppError('Date is required');
  }
  
  if (!meal.time) {
    throw new AppError('Time is required');
  }
  
  if (!meal.status) {
    throw new AppError('Status is required');
  }
}

export async function addMeal(meal: AddMealProps) {

  try {
    validate(meal);

    const newMeal = {
      id: String(new Date().getTime()),
      ...meal,
    }

    await AsyncStorage.setItem(
      `${MEALS_COLLECTION}:${newMeal.id}`,
      JSON.stringify(newMeal)
    );

    return newMeal
  } catch (error) {
    throw error;
  }
}