import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION, SETTINGS_COLLECTION } from "./config";
import { Meal } from "./MealStorageDTO";
import { AppError } from "@utils/AppError";
import { Settings } from "./SettingsStorageDTO";
import { Statistics } from "./StatisticsDTO";
import { DEFAULT_SETTINGS, DEFAULT_STATISTICS } from "@utils/defaults";
import { listMeals } from "./ListMeals";

const calculateBestMealSequence = (meals: Meal[]): Meal[] => {
  let bestSequence: Meal[] = [];
  let currentSequence: Meal[] = [];

  for (const meal of meals) {
    if (meal.status === 'green') {
      // Add meal to current sequence
      currentSequence.push(meal);
      // Update the best sequence if current is longer
      if (currentSequence.length > bestSequence.length) {
        bestSequence = [...currentSequence];
      }
    } else {
      // Reset current sequence if meal is not 'green'
      currentSequence = [];
    }
  }

  return bestSequence;
};

export async function getStatistics() {
  try {
    const settingsSerialized = await AsyncStorage.getItem(SETTINGS_COLLECTION);
    
    let settings = {} as Settings;
    
    if (!settingsSerialized) {
      settings = DEFAULT_SETTINGS;
    } else {
      settings = JSON.parse(settingsSerialized) as Settings;
    }

    const meals = await listMeals();

    if (!meals.length) {
      return DEFAULT_STATISTICS;
    }

    const bestSequence = calculateBestMealSequence(meals)

    const totalHealthyMeals = meals.filter((meal) => meal.status === 'green').length
    const totalUnhealthyMeals = meals.filter((meal) => meal.status === 'red').length;
    const totalMeals = meals.length;
    const percentageHealthyMeals = Math.round((totalHealthyMeals / totalMeals) * 10000) / 100;
    const generalStatus = percentageHealthyMeals >= settings.percentage ? 'positive' : 'negative';

    return {
      totalHealthyMeals,
      totalUnhealthyMeals,
      totalMeals,
      percentageHealthyMeals,
      generalStatus,
      bestSequence: bestSequence.length,
    } as Statistics;
  } catch (error) {
    throw error;
  }
}

