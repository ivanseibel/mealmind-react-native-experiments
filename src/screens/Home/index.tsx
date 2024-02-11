import { Header } from '@components/Header';
import { Container, MealsContainer, NewContainer, SectionHeaderTitle, Subtitle } from './styles';
import { StatisticHighlight } from '@components/StatisticHighlight';
import { Button } from '@components/Button';
import { SectionListRenderItemInfo, SectionList, DefaultSectionT, SectionListData } from 'react-native';
import { MealSectionListItem } from '@components/MealSectionListItem';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type MealItem = {
  id: string;
  title: string;
  status: 'green' | 'red';
  time: string;
}

type MealSection = {
  title: string;
  data: MealItem[];
}

const MEALS: MealSection[] = [
  {
    title: '21.09.2021',
    data: [
      {
        id: '1',
        title: 'Breakfast',
        time: '08:00',
        status: 'red',
      },
      {
        id: '2',
        title: 'Lunch',
        status: 'green',
        time: '12:00',
      },
      {
        id: '3',
        title: 'Dinner',
        status: 'red',
        time: '18:00',
      },
      {
        id: '4',
        title: 'Snack Supper Breakfast Lunch Dinner',
        status: 'green',
        time: '20:00',
      },
    ]
  },
  {
    title: '20.09.2021',
    data: [
      {
        id: '1',
        title: 'Breakfast',
        time: '08:00',
        status: 'red',
      },
      {
        id: '2',
        title: 'Lunch',
        status: 'green',
        time: '12:00',
      },
      {
        id: '3',
        title: 'Dinner',
        status: 'red',
        time: '18:00',
      },
      {
        id: '4',
        title: 'Snack Supper Breakfast Lunch Dinner',
        status: 'green',
        time: '20:00',
      },
    ]
  },
]

export function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function renderMealItem({ item }: SectionListRenderItemInfo<MealItem>) {
    return (
      <MealSectionListItem 
        id={item.id}
        title={item.title}
        status={item.status}
        time={item.time}
      />
    )
  }
  function renderMealSection(section: SectionListData<MealItem, DefaultSectionT>) {
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
