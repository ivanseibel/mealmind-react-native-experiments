import { useNavigation, useRoute } from '@react-navigation/native';
import { BackContainer, BackIcon, Container, HeaderContainer, Title } from './styles';
import { Input } from '@components/Input';
import { InputLabel } from '@components/InputLabel';

type RouteParams = {
  operation: 'create' | 'edit';
}

export function MealForm() {
  const navigation = useNavigation();

  const route = useRoute();
  const { operation } = route.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <>
      <Container
        variant='header'
      >
        <HeaderContainer>
          <BackContainer
            onPress={handleGoBack}
          >
            <BackIcon />
          </BackContainer>
          <Title>{operation === 'create' ? 'New meal' : 'Edit meal'}</Title>
        </HeaderContainer>
      </Container>
      <Container
        variant='body'
      >
        <InputLabel 
          title='Name'
        />
        <Input />
      </Container>
    </>
  )
}