import { Meal } from "@storage/MealStorageDTO";
import { Container, Divider, MealStatus, MealTime, MealName } from "./styles";

export function MealSectionListItem({ id, time, date, name, status }: Meal) {
  return (
    <Container>
      <MealTime>
        {time}
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