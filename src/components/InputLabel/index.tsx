import { Container, Title } from "./styles";

type Props = {
  title: string;
}

export function InputLabel({title}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}