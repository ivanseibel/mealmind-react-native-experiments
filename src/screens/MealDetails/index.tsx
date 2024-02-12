import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { BackContainer, BackIcon, Container, HeaderContentContainer, Title, RowContainer, MealTitle, MealDescription, DateTimeTitle } from './styles';
import { Button } from '@components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MealItem } from 'src/@types/global';
import { useMemo } from 'react';
import { format } from 'date-fns';

type RouteParams = {
  meal: MealItem;
}

export function MealDetails() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleEditMeal() {
    navigation.navigate('Feedback', {
      variant: 'positive'
    });
  }

  function handleDeleteMeal() {
    navigation.navigate('Feedback', {
      variant: 'positive'
    });
  }

  const variant = useMemo(() => {
    return meal?.status === 'green' ? 'positive' : 'negative';
  }, [meal]);

  return (
    <>
      <Container
        type='header'
        variant={variant}
      >
        <HeaderContentContainer>
          <BackContainer
            onPress={handleGoBack}
          >
            <BackIcon />
          </BackContainer>
          <Title>Meal</Title>
        </HeaderContentContainer>
      </Container>
      <Container
        type='body'
      >
        <RowContainer>
          <MealTitle>
            {meal?.title}
          </MealTitle>
          <MealDescription>
            {meal?.description}
          </MealDescription>
        </RowContainer>

        <RowContainer>
          <DateTimeTitle>
            Date & Time
          </DateTimeTitle>
          <MealDescription>
            {`${format(meal?.date, 'dd/MM/yyyy')} at ${format(meal?.time, 'HH:mm')}`}
          </MealDescription>
        </RowContainer>
        <SafeAreaView style={{
          flex: 1,
          justifyContent: 'flex-end',
          width: '100%',
          paddingBottom: 20,
          gap: 8
        }}>
          <Button 
            label='Edit meal'
            variant='primary'
            onClick={handleEditMeal}
            icon='pencil'
          />
          <Button 
            label='Delete meal'
            variant='secondary'
            onClick={handleDeleteMeal}
            icon='trash'
          />
        </SafeAreaView>

      </Container>
    </>
  )
}