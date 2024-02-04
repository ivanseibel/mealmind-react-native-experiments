import { ArrowLeft } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

type ContainerProps = {
  variant: 'header' | 'body';
}

type YesNoIndicatorProps = {
  color: 'green' | 'red';
}

type YesNoSelectorContainerProps = {
  highlighted: 'red' | 'green' | 'none';
}

export const Container = styled.View<ContainerProps>`
  ${({ variant }) => variant === 'header' && css`
    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
    height: 156px;
    justify-content: center;
    padding: 0 24px;
  `}
  ${({ variant }) => variant === 'body' && css`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: -32px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    flex: 1;
    padding: 40px 24px 0;
    gap: 24px;
  `}
  align-items: center;
`;

export const BackContainer = styled.TouchableOpacity`
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

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  line-height: ${({ theme }) => theme.FONT_SIZE.LG * theme.LINE_HEIGHT.MULTIPLIER}px;
  text-align: center;
  width: 100%;
`;

export const HeaderContainer = styled.View`
  position: relative;
  width: 100%;
  justify-content: center;
`;

export const FullWidhtInputContainer = styled.View`
  padding: 6px 0;
  width: 100%;
  gap: 8px;
`;

export const HalfWidhtInputContainer = styled.View`
  padding: 4px 0;
  width: 48%;
  gap: 8px;
`;

export const YesNoSelectorContainer = styled.TouchableOpacity<YesNoSelectorContainerProps>`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  max-height: 50px;
  min-height: 50px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 6px;

  ${({ highlighted }) => highlighted === 'red' && css`
    background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.RED_DARK};
  `}

  ${({ highlighted }) => highlighted === 'green' && css`
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    border-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  `}
`;

export const YesNoText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  line-height: ${({ theme }) => theme.FONT_SIZE.SM * theme.LINE_HEIGHT.MULTIPLIER}px;
`;

export const YesNoIndicator = styled.View<YesNoIndicatorProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, color }) => color === 'green' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;