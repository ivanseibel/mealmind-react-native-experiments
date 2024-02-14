import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION, SETTINGS_COLLECTION } from "./config";
import { Meal } from "./MealStorageDTO";
import { AppError } from "@utils/AppError";
import { Settings } from "./SettingsStorageDTO";
import { Statistics } from "./StatisticsDTO";
import { DEFAULT_SETTINGS, DEFAULT_STATISTICS } from "@utils/defaults";

export async function getStatistics() {
  try {
    const settingsSerialized = await AsyncStorage.getItem(SETTINGS_COLLECTION);
    
    let settings = {} as Settings;
    
    if (!settingsSerialized) {
      settings = DEFAULT_SETTINGS;
    } else {
      settings = JSON.parse(settingsSerialized) as Settings;
    }

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

    if (!meals.length) {
      return DEFAULT_STATISTICS;
    }

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
      generalStatus
    } as Statistics;
  } catch (error) {
    throw error;
  }
}

