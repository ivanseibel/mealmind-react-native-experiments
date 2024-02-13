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
      };
      Feedback: {
        variant?: 'positive' | 'negative';
      };
    }
  }
}