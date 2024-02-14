import { ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import { HeaderBackContainer, BackIcon, Body, FullWidhtInputContainer, HalfWidhtInputContainer, Header, HeaderContent, Main, Title, YesNoIndicator, YesNoSelectorContainer, YesNoText } from './styles';
import { Input } from '@components/Input';
import { InputLabel } from '@components/InputLabel';
import { Alert, View } from 'react-native';
import { Button } from '@components/Button';
import React, { useState } from 'react';
import { DateTimeInput } from '@components/DateTimeInput';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { addMeal } from '@storage/AddMeal';
import { AppError } from '@utils/AppError';
import { format } from 'date-fns';
import { DismissKeyboardView } from '@components/DismissKeyboardView';

type RouteParams = {
  operation: 'create' | 'edit';
}

export function MealFormScreen() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [withinDiet, setWithinDiet] = useState<true | false | undefined>(undefined);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const route = useRoute();
  const { operation } = route.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleRecordMeal() {
    try {
      await addMeal({
        name: name.trim(),
        description: description.trim(),
        date: format(date, 'yyyy-MM-dd'),
        time: format(time, 'HH:mm'),
        status: withinDiet === true ? 'green' : withinDiet === false ? 'red' : undefined,
      });

      navigation.navigate('Feedback', {
        variant: withinDiet === true ? 'positive' : 'negative',
      });
    } catch (error) {
      console.log(error);

      if (error instanceof AppError) {
        return Alert.alert('Error', error.message);
      }

      Alert.alert('Error', 'An error occurred while trying to record the meal');
    }
  }

  return (
    <DismissKeyboardView>
      <Main edges={['top', 'left', 'right']}>
        <Header>
          <HeaderContent>
            <HeaderBackContainer
              onPress={handleGoBack}
            >
              <BackIcon />
            </HeaderBackContainer>
            <Title>{operation === 'create' ? 'New meal' : 'Edit meal'}</Title>
          </HeaderContent>
        </Header>
        <Body edges={['bottom', 'left', 'right']}>
          <FullWidhtInputContainer>
            <InputLabel 
              title='Name'
            />
            <Input 
              value={name}
              onChange={(e) => setName(e.nativeEvent.text)}
            />
          </FullWidhtInputContainer>
          
          <FullWidhtInputContainer>
            <InputLabel 
              title='Description'
            />
            <Input 
              multiline
              numberOfLines={4}
              value={description}
              onChange={(e) => setDescription(e.nativeEvent.text)}
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

          <View style={{
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
          </View>

        </Body>
      </Main>
    </DismissKeyboardView>
  )
}