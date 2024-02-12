import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TitleProps = {
  variant: 'positive' | 'negative';
};

type MessageProps = {
  bold?: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const TitleMessageContainer = styled.View`
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme, variant }) => variant === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  line-height: ${({ theme }) => theme.FONT_SIZE.XL * theme.LINE_HEIGHT.MULTIPLIER}px;
  text-align: center;
`;

export const Message = styled.Text<MessageProps>`
  font-family: ${({ theme, bold }) => bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_1};
  line-height: ${({ theme }) => theme.FONT_SIZE.MD * theme.LINE_HEIGHT.MULTIPLIER}px;
  text-align: center;
  max-width: 300px;
`;

export const Image = styled.Image`
  width: 224px;
  height: 288px;
`;

export const ButtonContainer = styled.View`
  width: 191px;
`;