import { useNavigation, useRoute } from '@react-navigation/native';
import { BackContainer, BackIcon, Container, FullWidhtInputContainer, HalfWidhtInputContainer, HeaderContainer, Title, YesNoIndicator, YesNoSelectorContainer, YesNoText } from './styles';
import { Input } from '@components/Input';
import { InputLabel } from '@components/InputLabel';
import { Platform, View, Text } from 'react-native';
import { Button } from '@components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import DateTimePicker, { DateTimePickerEvent, Event } from '@react-native-community/datetimepicker';

type RouteParams = {
  operation: 'create' | 'edit';
}

export function MealForm() {
  const [withinDiet, setWithinDiet] = useState<true | false | undefined>(undefined);
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const navigation = useNavigation();

  const route = useRoute();
  const { operation } = route.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
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
            {/* <Input 
            /> */}
            <View>
              <View>
                <Button onClick={showDatepicker} label="Show date picker!" />
              </View>
              {showDatePicker && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChange}
                  maximumDate={new Date(2300, 10, 20)}
                  minimumDate={new Date(1950, 0, 1)}
                  neutralButtonLabel="clear"
                />
              )}
              {/* Display the selected date */}
              <Text>Selected Date: {date.toLocaleDateString()}</Text>
            </View>
          </HalfWidhtInputContainer>
          <HalfWidhtInputContainer>
            <InputLabel 
              title='Time'
            />
            <Input 
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
        }}>
          <Button 
            label='Record meal'
            variant='primary'
            onClick={() => {}}
          />
        </SafeAreaView>

      </Container>
    </>
  )
}