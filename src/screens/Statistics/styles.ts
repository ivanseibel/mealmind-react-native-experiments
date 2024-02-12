import { ArrowLeft } from 'phosphor-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type Props = {
  variant: 'positive' | 'negative' | 'none';
  width?: 'full' | 'half';
};

export const Container = styled(SafeAreaView)<Props>`
  height: 220px;
  align-items: center;
  justify-content: center;
  padding-bottom: 32px;
  background-color: ${({ theme, variant }) => variant === 'positive' 
    ? theme.COLORS.GREEN_LIGHT 
    : variant === 'negative' 
      ? theme.COLORS.RED_LIGHT 
      : theme.COLORS.GRAY_6};
`;

export const Header = styled.View`
  position: relative;
  width: 100%;
`;

export const BackContainer = styled.TouchableOpacity`
  width: 100%;
  align-items: flex-start;
  border-radius: 8px;
  position: absolute;
  top: 0px;
  left: 24px;
  z-index: 2;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, variant }) => ({
  color: variant === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24,
}))`
`;


export const StatisticsContainer = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding-top: 34px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: -32px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const DataContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 14px;
  padding: 0 24px;
`;

export const DataItemContainer = styled.View<Props>`
  background-color: ${({ theme, variant }) => {
    if (variant === 'positive') return theme.COLORS.GREEN_LIGHT;
    if (variant === 'negative') return theme.COLORS.RED_LIGHT;
    return theme.COLORS.GRAY_6;
  }};

  width: ${({ width }) => (width === 'full' ? '100%' : '48%')};

  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 16px 16px;
`;

export const DataItemValue = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: ${({ theme }) => theme.LINE_HEIGHT.MULTIPLIER * theme.FONT_SIZE.XL}px;
`;

export const DataItemDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  line-height: ${({ theme }) => theme.LINE_HEIGHT.MULTIPLIER * theme.FONT_SIZE.SM}px;
  text-align: center;
`;