import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Main = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
  height: 120px;
  justify-content: center;
  padding: 0 24px;
  align-items: center;
`;

export const HeaderContent = styled.View`
  position: relative;
  width: 100%;
  justify-content: center;
  margin-bottom: 32px;
`;

export const HeaderBackContainer = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  line-height: ${({ theme }) => theme.FONT_SIZE.LG * theme.LINE_HEIGHT.MULTIPLIER}px;
  text-align: center;
  width: 100%;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_1,
  size: 24,
}))`
`;

export const Body = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: -32px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex: 1;
  padding: 40px 24px 24px;
  gap: 24px;
  justify-content: flex-start;
`;

export const FormContainer = styled.View`
  width: 100%;
  align-items: center;
  gap: 8px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  flex: 1;
  gap: 8px;
  justify-content: flex-end;
`;