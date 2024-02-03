import { Text, View } from 'react-native';
import { StatisticsHeaderContainer, StatisticsContainer, Title, DataContainer, DataItemContainer, DataItemValue, DataItemDescription } from './styles';
import { StatisticHighlight } from '@components/StatisticHighlight';

export function Statistics() {
  return (
    <>
      <StatisticsHeaderContainer
        variant='up'
      >
        <StatisticHighlight 
          percentage={90.86}
          variant='positiveBack'
        />
      </StatisticsHeaderContainer>
      <StatisticsContainer
        edges={['right', 'bottom', 'left']}
      >
        <Title>General statistics</Title>
        <DataContainer>
          <DataItemContainer
            variant='none'
            width='full'
          >
            <DataItemValue>22</DataItemValue>
            <DataItemDescription>
              best sequence of meals within the diet
            </DataItemDescription>
          </DataItemContainer>
          
          <DataItemContainer
            variant='none'
            width='full'
          >
            <DataItemValue>109</DataItemValue>
            <DataItemDescription>
              meals recorded
            </DataItemDescription>
          </DataItemContainer>

          <View style={{flex: 1, flexDirection: 'row', gap: 14}}>
            <DataItemContainer
              variant='up'
              width='half'
            >
              <DataItemValue>99</DataItemValue>
            <DataItemDescription>
              meals within the diet
            </DataItemDescription>
            </DataItemContainer>
            <DataItemContainer
              variant='down'
              width='half'
            >
              <DataItemValue>10</DataItemValue>
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