import { TouchableOpacityProps, Text, TouchableOpacity } from "react-native";
import { BackContainer, BackIcon, Container, HighLightIcon, Percentage, Subtitle } from "./styles";
import { useNavigation } from "@react-navigation/native";

type StatisticHighlightProps = TouchableOpacityProps & {
  percentage: number;
  variant: 'positive' | 'negative' | 'positiveBack' | 'negativeBack';
}

export function StatisticHighlight({ percentage, variant, ...rest }: StatisticHighlightProps) {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container
      variant={variant}
      activeOpacity={0.8}
      {...rest}
    >
      {!variant.includes('Back') 
        ? (<HighLightIcon variant={variant} />)
        : (
          <BackContainer
            onPress={handleBack}
          >
            <BackIcon 
              variant={variant}
            />
          </BackContainer>
        )
      }
      
      <Percentage>
        {percentage}%
      </Percentage>
      <Subtitle>
        of meals within the diet
      </Subtitle>
    </Container>
  )
}