import { Alert, View } from 'react-native';
import { Container, StatisticsContainer, Title, DataContainer, DataItemContainer, DataItemValue, DataItemDescription, BackContainer, BackIcon, Header } from './styles';
import { StatisticHighlight } from '@components/StatisticHighlight';
import { ParamListBase, useFocusEffect, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DEFAULT_STATISTICS } from '@utils/defaults';
import { useCallback, useState } from 'react';
import { Statistics } from '@storage/StatisticsDTO';
import { getStatistics } from '@storage/GetStatistics';
import { AppError } from '@utils/AppError';

export function StatisticsScreen() {
  const [isLoadingStatistics, setIsLoadingStatistics] = useState(false);
  const [statistics, setStatistics] = useState<Statistics>(DEFAULT_STATISTICS);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleGoBack() {
    navigation.goBack();
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
    fetchStatistics();
  }, []));

  return (
    <>
      <Container
        variant={statistics.generalStatus}
      >
        <Header>
          <BackContainer
            onPress={handleGoBack}
          >
            <BackIcon 
              variant={statistics.generalStatus}
            />
          </BackContainer>
          <StatisticHighlight 
            percentage={statistics.percentageHealthyMeals}
            variant={statistics.generalStatus}
            showHighlightIcon={false}
            isLoading={isLoadingStatistics}
          />
        </Header>
      </Container>
      <StatisticsContainer
        edges={['right', 'bottom', 'left']}
      >
        <Title>General statistics</Title>
        <DataContainer>
          <DataItemContainer
            variant='none'
            width='full'
          >
            <DataItemValue>{statistics.bestSequence}</DataItemValue>
            <DataItemDescription>
              best sequence of meals within the diet
            </DataItemDescription>
          </DataItemContainer>
          
          <DataItemContainer
            variant='none'
            width='full'
          >
            <DataItemValue>{statistics.totalMeals}</DataItemValue>
            <DataItemDescription>
              meals recorded
            </DataItemDescription>
          </DataItemContainer>

          <View style={{flex: 1, flexDirection: 'row', gap: 14}}>
            <DataItemContainer
              variant='positive'
              width='half'
            >
              <DataItemValue>{statistics.totalHealthyMeals}</DataItemValue>
            <DataItemDescription>
              meals within the diet
            </DataItemDescription>
            </DataItemContainer>
            <DataItemContainer
              variant='negative'
              width='half'
            >
              <DataItemValue>{statistics.totalUnhealthyMeals}</DataItemValue>
            <DataItemDescription>
              off-diet meals
            </DataItemDescription>
            </DataItemContainer>
          </View>

        </DataContainer>
      </StatisticsContainer>
    </>
  )
}