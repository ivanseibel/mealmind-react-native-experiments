import { ParamListBase, useNavigation } from "@react-navigation/native";
import { Avatar, Container, LogoContainer, LogoIcon, LogoName } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

export function Header() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleOpenSettings() {
    navigation.navigate('Settings');
  }

  return (
    <Container>
      <LogoContainer>
        <LogoIcon 
          source={require('@assets/fork-knife.png')}
        />
        <LogoName 
          source={require('@assets/logo.png')}
        />
      </LogoContainer>

      <TouchableOpacity onPress={handleOpenSettings}>
        <Avatar 
          source={{uri: 'https://avatars.githubusercontent.com/u/42596775?v=4'}}
        />
      </TouchableOpacity>
    </Container>
  )
}