import AsyncStorage from "@react-native-async-storage/async-storage";
import { SETTINGS_COLLECTION } from "./config";
import { AppError } from "@utils/AppError";
import { Settings } from "./SettingsStorageDTO";

export async function getSettings() {
  try {
    const serialized = await AsyncStorage.getItem(SETTINGS_COLLECTION);

    if (!serialized) {
      return null;
    }

    return JSON.parse(serialized) as Settings;
  } catch (error) {
    console.log(error);
    throw error;
  }
}