import { Statistics } from "@storage/StatisticsDTO";

export const DEFAULT_STATISTICS: Statistics = {
  totalHealthyMeals: 0,
  totalUnhealthyMeals: 0,
  totalMeals: 0,
  percentageHealthyMeals: 0.00,
  generalStatus: 'positive',
};

export const DEFAULT_SETTINGS = {
  percentage: 90,
};