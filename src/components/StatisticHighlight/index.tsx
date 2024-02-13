import { TouchableOpacityProps } from "react-native";
import { Container, HighLightIcon, Percentage, Subtitle } from "./styles";
import { Loading } from "@components/Loading";

type StatisticHighlightProps = TouchableOpacityProps & {
  percentage: number;
  variant: 'positive' | 'negative';
  showHighlightIcon?: boolean;
  isLoading?: boolean;
}

export function StatisticHighlight({ percentage, variant, showHighlightIcon = true, isLoading = false, ...rest }: StatisticHighlightProps) {
  return (
    <Container
      variant={variant}
      activeOpacity={0.8}
      {...rest}
    >
      {showHighlightIcon && (<HighLightIcon variant={variant} />)}
      <Percentage>
        {isLoading ? <Loading /> : `${percentage}%`}
      </Percentage>
      <Subtitle>
        of meals within the diet
      </Subtitle>
    </Container>
  )
}