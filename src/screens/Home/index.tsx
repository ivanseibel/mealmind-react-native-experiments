import { Header } from '@components/Header';
import { Container, MealsContainer, NewContainer, SectionHeaderTitle, Subtitle } from './styles';
import { StatisticHighlight } from '@components/StatisticHighlight';
import { Button } from '@components/Button';
import { SectionListRenderItemInfo, SectionList, DefaultSectionT, SectionListData, Touchable, TouchableOpacity } from 'react-native';
import { MealSectionListItem } from '@components/MealSectionListItem';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Meal } from '@storage/MealStorageDTO';

type MealSection = {
  title: string;
  data: Meal[];
}

const MEALS: MealSection[] = [
  {
    title: '21.09.2021',
    data: [
      {
        id: '1',
        name: 'Breakfast',
        time: '2021-09-21 08:00',
        date: '2021-09-21',
        status: 'red',
        description: 'Toast, eggs, and coffee'
      },
      {
        id: '2',
        name: 'Lunch',
        status: 'green',
        time: '2021-09-21 12:00',
        date: '2021-09-21',
        description: 'Rice, beans, and chicken'
      },
      {
        id: '3',
        name: 'Dinner',
        status: 'red',
        time: '2021-09-21 18:00',
        date: '2021-09-21',
        description: 'Pasta, tomato sauce, and cheese'
      },
      {
        id: '4',
        name: 'Snack Supper Breakfast Lunch Dinner',
        status: 'green',
        time: '2021-09-21 20:00',
        date: '2021-09-21',
        description: 'Yogurt, granola, and honey'
      },
    ]
  },
  {
    title: '20.09.2021',
    data: [
      {
        id: '1',
        name: 'Breakfast',
        time: '2021-09-20 08:00',
        date: '2021-09-20',
        status: 'red',
        description: 'Avocado toast and coffee'
      },
      {
        id: '2',
        name: 'Lunch',
        status: 'green',
        time: '2021-09-20 12:00',
        date: '2021-09-20',
        description: 'Stake, potatoes, and salad'
      },
      {
        id: '3',
        name: 'Dinner',
        status: 'red',
        time: '2021-09-20 18:00',
        date: '2021-09-20',
        description: 'Pizza and soda'
      },
      {
        id: '4',
        name: 'Snack Supper Breakfast Lunch Dinner',
        status: 'green',
        time: '2021-09-20 20:00',
        date: '2021-09-20',
        description: 'Fruit salad and yogurt'
      },
    ]
  },
]

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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

  function handleOpenStatistics() {
    navigation.navigate('Statistics');
  }

  function handleOpenMealForm() {
    navigation.navigate('MealForm', { operation: 'edit' });
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
          <NewContainer>
            <Subtitle>Meals</Subtitle>
            <Button
              label='Add meal'
              onClick={handleOpenMealForm}
              variant='primary'
              icon='plus'
            />

            <SectionList 
              style={{ width: '100%' }}
              sections={MEALS}
              keyExtractor={(item) => item.id }
              renderItem={renderMealItem}
              renderSectionHeader={({ section }) => renderMealSection(section)}
              stickySectionHeadersEnabled={false}
              showsVerticalScrollIndicator={false}
            />
          </NewContainer>
        </MealsContainer>
      </Container>
  )
}
