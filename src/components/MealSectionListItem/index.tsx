import { MealItem } from "src/@types/global";
import { Container, Divider, MealStatus, MealTime, MealTitle } from "./styles";
import { format } from "date-fns";

export function MealSectionListItem({ id, time, date, title, status }: MealItem) {
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