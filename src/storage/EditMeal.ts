import AsyncStorage from "@react-native-async-storage/async-storage";
import { Meal } from "./MealStorageDTO";
import { MEALS_COLLECTION } from "./config";
import { AppError } from "@utils/AppError";

type EditMealProps = Omit<Meal, 'status'> & {
  id: string;
  status?: 'green' | 'red' | undefined;
}

function validate(meal: EditMealProps) {
  if (!meal.id) {
    throw new AppError('Meal ID is required');
  }

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

export async function editMeal(meal: EditMealProps) {
  try {
    validate(meal);

    const existingMeal = await AsyncStorage.getItem(`${MEALS_COLLECTION}:${meal.id}`);
    if (!existingMeal) {
      throw new AppError('Meal not found');
    }

    const updatedMeal = {
      ...JSON.parse(existingMeal),
      ...meal,
    };

    await AsyncStorage.setItem(
      `${MEALS_COLLECTION}:${meal.id}`,
      JSON.stringify(updatedMeal)
    );

    return updatedMeal;
  } catch (error) {
    throw error;
  }
}