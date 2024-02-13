import { Meal } from "@storage/MealStorageDTO";

export declare global {
  namespace ReactNavigation {
    type RootParamList = {
      Home: undefined;
      Statistics: undefined;
      MealDetails: {
        meal: string;
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