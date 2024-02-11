export declare global {
  namespace ReactNavigation {
    type RootParamList = {
      Home: undefined;
      Statistics: undefined;
      MealDetails: undefined;
      MealForm: {
        operation: 'create' | 'edit';
      };
      Feedback: {
        variant?: 'positive' | 'negative';
      };
    }
  }
}