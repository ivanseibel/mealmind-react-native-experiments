export type MealItem = {
  id: string;
  title: string;
  status: 'green' | 'red';
  date: Date;
  time: Date;
  description: string;
}