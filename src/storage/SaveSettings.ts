import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "./config";
import { AppError } from "@utils/AppError";
import { Settings } from "./SettingsStorageDTO";

function validateSettings(settings: Settings) {
  if (!settings) {
    throw new AppError('Invalid settings');
  }

  if (!settings.percentage) {
    throw new AppError('Invalid percentage');
  }
  
  if (settings.percentage < 0 || settings.percentage > 100) {
    throw new AppError('Invalid percentage');
  }
}

export async function saveSettings(settings: Settings) {
  try {
    validateSettings(settings);
    await AsyncStorage.setItem(STORAGE_KEYS, JSON.stringify(settings));
  } catch (error) {
    console.log(error);
    throw error;
  }
}