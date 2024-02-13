import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { InputLabel } from "@components/InputLabel";
import { useCallback, useState } from "react";
import { BackIcon, Body, ButtonContainer, FormContainer, Header, HeaderBackContainer, HeaderContent, Main, Title } from "./styles";
import { ParamListBase, useFocusEffect, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { saveSettings } from "@storage/SaveSettings";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";
import { getSettings } from "@storage/GetSettings";

const DEFAULT_PERCENTAGE = '90';

export function Settings() {
  const [percentage, setPercentage] = useState<string>(DEFAULT_PERCENTAGE);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleGoBack() {
    navigation.goBack();
  }

  async function fetchSettings() {
    try {
      const settings = await getSettings();
      setPercentage(settings?.percentage.toString() ?? DEFAULT_PERCENTAGE);
    } catch (error) {
      if (error instanceof AppError) {
        console.log(error.message);
        Alert.alert('Error', error.message);
      } else {
        console.log(error);
        Alert.alert('Error', 'An error occurred while trying to get settings');
      }
    }
  }

  useFocusEffect(useCallback(() => {
    fetchSettings();
  }, []));

  async function handleSave () {
    try {
      await saveSettings({
        percentage: Number(percentage),
      });
      handleGoBack();
    } catch (error) {
      if (error instanceof AppError) {
        console.log(error.message);
        Alert.alert('Error', error.message);
      } else {
        console.log('An error occurred while trying to save settings');
        Alert.alert('Error', 'An error occurred while trying to save settings');
      }
    }
  };

  return (
    <Main edges={['top', 'left', 'right']}>
      <Header>
        <HeaderContent>
          <HeaderBackContainer
              onPress={handleGoBack}
            >
              <BackIcon />
          </HeaderBackContainer>
          <Title>Settings</Title>
        </HeaderContent>
      </Header>

      <Body edges={['bottom', 'left', 'right']}>
        <FormContainer>
          <InputLabel 
            title="Target Diet Percentage"
          />
          <Input
            keyboardType="numeric"
            value={percentage}
            onChangeText={setPercentage}
            placeholder="Enter your target diet percentage"
          />
        </FormContainer>
        <ButtonContainer>
          <Button 
            onClick={handleSave}
            label="Save"
            variant="primary"
          />
        </ButtonContainer>
      </Body>
    </Main>
  );
};