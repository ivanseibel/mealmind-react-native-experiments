import { TouchableOpacityProps } from "react-native";
import { Container, HighLightIcon, Percentage, Subtitle } from "./styles";

type StatisticHighlightProps = TouchableOpacityProps & {
  percentage: number;
  variant: 'positive' | 'negative';
  showHighlightIcon?: boolean;
}

export function StatisticHighlight({ percentage, variant, showHighlightIcon = true,...rest }: StatisticHighlightProps) {
  return (
    <Container
      variant={variant}
      activeOpacity={0.8}
      {...rest}
    >
      {showHighlightIcon && (
        <HighLightIcon variant={variant} />
      )}
      <Percentage>
        {percentage}%
      </Percentage>
      <Subtitle>
        of meals within the diet
      </Subtitle>
    </Container>
  )
}