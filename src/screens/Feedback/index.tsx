import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button } from '@components/Button';

import { Container, Message, Title, TitleMessageContainer, Image, ButtonContainer } from './styles';

type RouteParams = {
  variant: 'positive' | 'negative';
}

const TITLE = {
  positive: 'Keep it up!',
  negative: 'We are sorry!',
}

const MESSAGE = {
  positive:'Great job! Every healthy choice counts. Stay on course!',
  negative: "It's just a bump in the road. Let's get back on track!"
  
}

const IMAGE = {
  positive: require('../../assets/feedback-positive.png'),
  negative: require('../../assets/feedback-negative.png'),
}

export function Feedback() {
  const route = useRoute();
  const { variant } = route.params as RouteParams;
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleClose() {
    navigation.popToTop();
  }

  return (
    <Container>
      <TitleMessageContainer>
        <Title
          variant={variant}
        >
          {TITLE[variant]}
        </Title>
        <Message>
          {MESSAGE[variant]}
        </Message>
      </TitleMessageContainer>
      <Image
        source={IMAGE[variant]}
      />
      <ButtonContainer>
        <Button 
          label="Close"
          onClick={handleClose}
        />
      </ButtonContainer>
    </Container>
  )
}