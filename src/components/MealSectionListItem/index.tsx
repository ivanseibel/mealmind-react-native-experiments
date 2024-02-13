import { Meal } from "@storage/MealStorageDTO";
import { Container, Divider, MealStatus, MealTime, MealTitle } from "./styles";
import { format } from "date-fns";

export function MealSectionListItem({ id, time, date, title, status }: Meal) {
  return (
    <Container>
      <MealTime>
        {format(time, 'HH:mm')}
      </MealTime>
      <Divider />
      <MealTitle
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </MealTitle>
      <MealStatus status={status} />
    </Container>
  )
}