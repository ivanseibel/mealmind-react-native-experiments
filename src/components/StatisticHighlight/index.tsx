import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Percentage, Subtitle } from "./styles";

type StatisticHighlightProps = TouchableOpacityProps & {
  percentage: number;
  variant: 'positive' | 'negative';
}

export function StatisticHighlight({ percentage, variant, ...rest }: StatisticHighlightProps) {
  return (
    <Container
      variant={variant}
      activeOpacity={0.8}
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