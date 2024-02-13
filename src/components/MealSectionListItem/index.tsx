import { Meal } from "@storage/MealStorageDTO";
import { Container, Divider, MealStatus, MealTime, MealName } from "./styles";
import { format } from "date-fns";

export function MealSectionListItem({ id, time, date, name, status }: Meal) {
  return (
    <Container>
      <MealTime>
        {format(time, 'HH:mm')}
      </MealTime>
      <Divider />
      <MealName
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {name}
      </MealName>
      <MealStatus status={status} />
    </Container>
  )
}