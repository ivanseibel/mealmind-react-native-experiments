import { Container, Divider, MealStatus, MealTime, MealTitle } from "./styles";

type MealItem = {
  id: string;
  time: string;
  title: string;
  status: 'green' | 'red';
}

export function MealSectionListItem({ id, time, title, status }: MealItem) {
  return (
    <Container>
      <MealTime>
        {time}
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