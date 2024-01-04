import { ViewProps } from "react-native";
import { Container, Icon, Percentage, Subtitle } from "./styles";

type StatisticHighlightProps = ViewProps & {
  percentage: number;
  variant: 'positive' | 'negative';
}

export function StatisticHighlight({ percentage, variant, ...rest }: StatisticHighlightProps) {
  return (
    <Container
      variant={variant}
      {...rest}
    >
      <Icon
        variant={variant}
      />
      <Percentage>
        {percentage}%
      </Percentage>
      <Subtitle>
        of meals aligned with the diet
      </Subtitle>
    </Container>
  )
}