import { Header } from '@components/Header';
import { Container, MealsContainer, SectionHeaderTitle, Subtitle } from './styles';
import { StatisticHighlight } from '@components/StatisticHighlight';
import { Button } from '@components/Button';
import { SectionListRenderItemInfo, SectionList, DefaultSectionT, SectionListData, Touchable, TouchableOpacity, Alert } from 'react-native';
import { MealSectionListItem } from '@components/MealSectionListItem';
import { ParamListBase, useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Meal } from '@storage/MealStorageDTO';
import { useCallback, useMemo, useState } from 'react';
import { listMeals } from '@storage/ListMeals';
import { AppError } from '@utils/AppError';

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState<Meal[]>([]);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const listSectionData = useMemo(() => {
    const sectionsMap: { [date: string]: Meal[] } = {};

    meals.forEach(meal => {
      if (!sectionsMap[meal.date]) {
        sectionsMap[meal.date] = [];
      }
      sectionsMap[meal.date].push(meal);
    });

    const sections = Object.keys(sectionsMap).map(date => ({
      title: date,
      data: sectionsMap[date],
    }));

    return sections;
}, [meals]);

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const meals = await listMeals();
      setMeals(meals);
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Error', error.message);
      }
      
      Alert.alert('Error', 'Ooops, something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
  }, []));

  function handleOpenStatistics() {
    navigation.navigate('Statistics');
  }

  function handleOpenMealForm() {
    navigation.navigate('MealForm', { operation: 'edit' });
  }

  function renderMealItem({ item }: SectionListRenderItemInfo<Meal>) {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('MealDetails', { meal: item })}
      >
        <MealSectionListItem 
          id={item.id}
          name={item.name}
          description={item.description}
          status={item.status}
          time={item.time}
          date={item.date}
        />
      </TouchableOpacity>
    )
  }
  function renderMealSection(section: SectionListData<Meal, DefaultSectionT>) {
    return (
      <SectionHeaderTitle>{section.title}</SectionHeaderTitle>
    )
  }

  return (
      <Container>
        <Header />
        <StatisticHighlight 
          percentage={90.86}
          variant="negative"
          style={{ marginTop: 36 }}
          onPress={handleOpenStatistics}
        />
        <MealsContainer>
          <Subtitle>Meals</Subtitle>
          <Button
            label='Add meal'
            onClick={handleOpenMealForm}
            variant='primary'
            icon='plus'
          />

          <SectionList 
            style={{ width: '100%' }}
            sections={listSectionData}
            keyExtractor={(item) => item.id }
            renderItem={renderMealItem}
            renderSectionHeader={({ section }) => renderMealSection(section)}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
          />
        </MealsContainer>
      </Container>
  )
}
