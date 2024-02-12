import { View } from 'react-native';
import { Container, StatisticsContainer, Title, DataContainer, DataItemContainer, DataItemValue, DataItemDescription, BackContainer, BackIcon, Header } from './styles';
import { StatisticHighlight } from '@components/StatisticHighlight';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export function Statistics() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleGoBack() {
    navigation.goBack();
  }

  const variant = 'negative';

  return (
    <>
      <Container
        variant={variant}
      >
        <Header>
          <BackContainer
            onPress={handleGoBack}
          >
            <BackIcon 
              variant={variant}
            />
          </BackContainer>
          <StatisticHighlight 
            percentage={90.86}
            variant={variant}
            showHighlightIcon={false}
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
              variant='positive'
              width='half'
            >
              <DataItemValue>99</DataItemValue>
            <DataItemDescription>
              meals within the diet
            </DataItemDescription>
            </DataItemContainer>
            <DataItemContainer
              variant='positive'
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