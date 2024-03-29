import { useCallback, useMemo, useState } from 'react';
import { SectionListRenderItemInfo, SectionList, DefaultSectionT, SectionListData, TouchableOpacity, Alert } from 'react-native';
import { ParamListBase, useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Meal } from '@storage/MealStorageDTO';
import { listMeals } from '@storage/ListMeals';
import { Statistics } from '@storage/StatisticsDTO';
import { getStatistics } from '@storage/GetStatistics';
import { DEFAULT_STATISTICS } from '@utils/defaults';
import { AppError } from '@utils/AppError';

import { Button } from '@components/Button';
import { StatisticHighlight } from '@components/StatisticHighlight';
import { MealSectionListItem } from '@components/MealSectionListItem';
import { Header } from '@components/Header';

import { Container, MealsContainer, SectionHeaderTitle, Subtitle } from './styles';

export function HomeScreen() {
  const [isLoadingMeals, setIsLoadingMeals] = useState(false);
  const [isLoadingStatistics, setIsLoadingStatistics] = useState(false);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [statistics, setStatistics] = useState<Statistics>(DEFAULT_STATISTICS);

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
      setIsLoadingMeals(true);
      const meals = await listMeals();
      setMeals(meals);
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Error', error.message);
      }
      
      Alert.alert('Error', 'Ooops, something went wrong.');
    } finally {
      setIsLoadingMeals(false);
    }
  }

  async function fetchStatistics() {
    try {
      setIsLoadingStatistics(true);
      const statistics = await getStatistics();
      setStatistics(statistics);
    } catch (error) {
      if (error instanceof AppError) {
        console.log(error.message);
        Alert.alert('Error', error.message);
      } else {
        console.log('An error occurred while trying to get statistics');
        Alert.alert('Error', 'An error occurred while trying to get statistics');
      }
    } finally {
      setIsLoadingStatistics(false);
    }
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
    fetchStatistics();
  }, []));

  function handleOpenStatistics() {
    navigation.navigate('Statistics');
  }

  function handleOpenMealForm() {
    navigation.navigate('MealForm', { operation: 'create' });
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
          percentage={statistics.percentageHealthyMeals}
          variant={statistics.generalStatus}
          style={{ marginTop: 36 }}
          onPress={handleOpenStatistics}
          isLoading={isLoadingStatistics}
        />
        <MealsContainer>
          <Subtitle>Meals</Subtitle>
          <Button
            label='Add meal'
            onClick={handleOpenMealForm}
            variant='primary'
            icon='plus'
          />

          {meals.length === 0 && !isLoadingMeals && (
            <Subtitle style={{ marginTop: 24 }}>
              No meals found. Add your first meal to start tracking your diet.
            </Subtitle>
          )}

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
