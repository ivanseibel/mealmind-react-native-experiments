import { Header } from '@components/Header';
import { Container, MealsContainer, NewContainer, SectionHeaderTitle, Subtitle } from './styles';
import { StatisticHighlight } from '@components/StatisticHighlight';
import { Button } from '@components/Button';
import { SectionListRenderItemInfo, SectionList, DefaultSectionT, SectionListData } from 'react-native';
import { MealSectionListItem } from '@components/MealSectionListItem';

interface MealItem {
  id: string;
  title: string;
  status: 'green' | 'red';
  time: string;
}

interface MealSection {
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

  return (
      <Container>
        <Header />
        <StatisticHighlight 
          percentage={90.86}
          variant="positive"
          style={{ marginTop: 36 }}
        />
        <MealsContainer>
          <NewContainer>
            <Subtitle>Meals</Subtitle>
            <Button
              label='Add meal'
              onClick={() => {}}
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
