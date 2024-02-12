import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { BackContainer, BackIcon, Container, FullWidhtInputContainer, HalfWidhtInputContainer, HeaderContainer, Title, YesNoIndicator, YesNoSelectorContainer, YesNoText } from './styles';
import { Input } from '@components/Input';
import { InputLabel } from '@components/InputLabel';
import { Platform, View, Text } from 'react-native';
import { Button } from '@components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { DateTimeInput } from '@components/DateTimeInput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RouteParams = {
  operation: 'create' | 'edit';
}

export function MealForm() {
  const [withinDiet, setWithinDiet] = useState<true | false | undefined>(undefined);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const route = useRoute();
  const { operation } = route.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleRecordMeal() {
    navigation.navigate('Feedback', {
      variant: 'positive'
    });
  }

  return (
    <>
      <Container
        variant='header'
      >
        <HeaderContainer>
          <BackContainer
            onPress={handleGoBack}
          >
            <BackIcon />
          </BackContainer>
          <Title>{operation === 'create' ? 'New meal' : 'Edit meal'}</Title>
        </HeaderContainer>
      </Container>
      <Container
        variant='body'
      >
        <FullWidhtInputContainer>
          <InputLabel 
            title='Name'
          />
          <Input />
        </FullWidhtInputContainer>
        
        <FullWidhtInputContainer>
          <InputLabel 
            title='Description'
          />
          <Input 
            multiline
            numberOfLines={4}
          />
        </FullWidhtInputContainer>

        <View style={{ 
          flexDirection: 'row',
          gap: 10,
        }}>
          <HalfWidhtInputContainer>
            <InputLabel 
              title='Date'
            />
            <DateTimeInput
              value={date}
              onChange={setDate}
            />
          </HalfWidhtInputContainer>
          <HalfWidhtInputContainer>
            <InputLabel 
              title='Time'
            />
            <DateTimeInput 
              onChange={setTime}
              mode='time'
              value={time}
            />
          </HalfWidhtInputContainer>
        </View>

        <View style={{ 
          flexDirection: 'row',
          gap: 10,
        }}>
          <HalfWidhtInputContainer>
            <InputLabel 
              title='Is it within the diet?'
            />
            <YesNoSelectorContainer 
              onPress={() => setWithinDiet(true)}
              highlighted={withinDiet === true ? 'green' : 'none'}
            >
              <YesNoIndicator color='green'/>
              <YesNoText>
                Yes
              </YesNoText>
            </YesNoSelectorContainer> 
          </HalfWidhtInputContainer>
          <HalfWidhtInputContainer>
          <InputLabel 
              title=' '
            />
            <YesNoSelectorContainer
              onPress={() => setWithinDiet(false)}
              highlighted={withinDiet === false ? 'red' : 'none'}
            >
              <YesNoIndicator color='red'/>
              <YesNoText>
                No
              </YesNoText>
            </YesNoSelectorContainer> 
          </HalfWidhtInputContainer>
        </View>

        <SafeAreaView style={{
          flex: 1,
          justifyContent: 'flex-end',
          width: '100%',
          paddingBottom: 20,
        }}>
          <Button 
            label='Record meal'
            variant='primary'
            onClick={handleRecordMeal}
          />
        </SafeAreaView>

      </Container>
    </>
  )
}