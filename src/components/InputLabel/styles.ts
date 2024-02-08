import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_2};
  line-height: ${({ theme }) => theme.FONT_SIZE.SM * theme.LINE_HEIGHT.MULTIPLIER}px;
`;