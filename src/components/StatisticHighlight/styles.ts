import styled, { css } from "styled-components/native";
import { ArrowUpRight, ArrowArcLeft, ArrowDownLeft, ArrowLeft } from 'phosphor-react-native';

export type Props = {
  variant: 'positive' | 'negative' | 'positiveBack' | 'negativeBack';
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  padding: ${({ variant }) => !variant.includes('Back') ? '20px 16px' : '0 0 32px'};
  background-color: ${({ theme, variant }) => variant.includes('positive') ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 8px;
  position: relative;
  min-height: ${({ variant }) => !variant.includes('Back') ? 'auto' : '100%'};
  max-height: ${({ variant }) => !variant.includes('Back') ? 'auto' : '100%'};
`;

export const HighLightIcon = styled(ArrowUpRight).attrs<Props>(({ theme, variant }) => ({
  color: variant === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 32,
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    line-height: 41.6px;
  `}
  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
    
  line-height: 18.2px;
  align-self: stretch;
  text-align: center;
`;