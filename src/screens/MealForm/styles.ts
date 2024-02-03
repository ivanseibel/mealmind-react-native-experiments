import { ArrowLeft } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

type ContainerProps = {
  variant: 'header' | 'body';
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
    padding: 24px;
  `}
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

export const HeaderContainer = styled.View`
  position: relative;
  width: 100%;
  justify-content: center;
`;

export const BackContainer = styled.TouchableOpacity`
  /* width: 100%; */
  /* align-items: flex-start; */
  /* border-radius: 8px; */
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