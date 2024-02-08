import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_3
}))`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border-width: 1px;
    border-color: ${theme.COLORS.GRAY_5};
    color: ${theme.COLORS.GRAY_1};
  `}

  width: 100%;
  min-height: ${({ multiline }) => multiline ? 120 : 48}px;
  max-height: ${({ multiline }) => multiline ? 240 : 48}px;
  padding: 14px;
  border-radius: 8px;
`;