import { Avatar, Container, LogoContainer, LogoIcon, LogoName } from "./styles";

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
      <Avatar 
        source={{uri: 'https://avatars.githubusercontent.com/u/42596775?v=4'}}

      />
    </Container>
  )
}