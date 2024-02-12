import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type ContainerProps = {
  variant?: 'positive' | 'negative';
}

export const Main = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, variant }) => variant === 'positive' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View<ContainerProps>`
  background-color: ${({ theme, variant }) => variant === 'positive' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_1,
  size: 24,
}))`
`;

export const Body = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: -32px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex: 1;
  padding: 40px 24px 0;
  gap: 24px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  line-height: ${({ theme }) => theme.FONT_SIZE.LG * theme.LINE_HEIGHT.MULTIPLIER}px;
  text-align: center;
  width: 100%;
`;

export const RowContainer = styled.View`
  gap: 8px;
  width: 100%;
`;

export const MealTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  line-height: ${({ theme }) => 20 * theme.LINE_HEIGHT.MULTIPLIER}px;
  width: 100%;
`;

export const MealDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  line-height: ${({ theme }) => theme.FONT_SIZE.MD * theme.LINE_HEIGHT.MULTIPLIER}px;
  width: 100%;
`;

export const DateTimeTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  line-height: ${({ theme }) => theme.FONT_SIZE.SM * theme.LINE_HEIGHT.MULTIPLIER}px;
  width: 100%;
`;