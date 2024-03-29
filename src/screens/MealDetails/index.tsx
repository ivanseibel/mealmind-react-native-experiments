import { View } from 'react-native';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useMemo, useState } from 'react';

import { Button } from '@components/Button';
import { DeleteMealDialog } from '@components/DeleteMealDialog';

import { Meal } from '@storage/MealStorageDTO';

import { HeaderBackContainer, BackIcon, Body, HeaderContent, Title, RowContainer, MealTitle, MealDescription, DateTimeTitle, Main, Header } from './styles';

type RouteParams = {
  meal: Meal;
}

export function MealDetailsScreen() {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const route = useRoute();
  const { meal } = route.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleEditMeal() {
    navigation.navigate('MealForm', {
      operation: 'edit',
      meal,
    });
  }

  function handleDeleteMeal() {
    setShowDeleteDialog(true);
  }

  const variant = useMemo(() => {
    return meal?.status === 'green' ? 'positive' : 'negative';
  }, [meal]);

  return (
    <>
      {showDeleteDialog && (
        <DeleteMealDialog 
          id={meal.id}
          isVisible={showDeleteDialog}
          onClose={() => setShowDeleteDialog(false)}
        />
      )}
      <Main
        variant={variant}
        edges={['top', 'left', 'right']}
      >
        <Header
          variant={variant}
        >
          <HeaderContent>
            <HeaderBackContainer
              onPress={handleGoBack}
            >
              <BackIcon />
            </HeaderBackContainer>
            <Title>Meal</Title>
          </HeaderContent>
        </Header>
        <Body
           edges={['bottom', 'left', 'right']}
        >
          <RowContainer>
            <MealTitle>
              {meal?.name}
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
              {`${meal?.date} at ${meal?.time}`}
            </MealDescription>
          </RowContainer>
          <View style={{
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
          </View>

        </Body>
      </Main>
    </>
  )
}