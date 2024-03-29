import { Meal } from "@storage/MealStorageDTO";

export declare global {
  namespace ReactNavigation {
    type RootParamList = {
      Home: undefined;
      Statistics: undefined;
      MealDetails: {
        meal: Meal;
      };
      MealForm: {
        operation: 'create' | 'edit';
        meal: Meal;
      };
      Feedback: {
        variant?: 'positive' | 'negative';
      };
      Settings: undefined;
    }
  }
}