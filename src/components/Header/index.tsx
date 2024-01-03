import { Text, View } from "react-native";
import { Container, LogoContainer, LogoIcon, LogoName } from "./styles";

export function Header() {
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
    </Container>
  )
}