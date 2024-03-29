import styled, { css } from "styled-components/native";

type MealStatusProps = {
  status: "green" | "red";
};

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  padding: 14px 12px 16px 12px;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
  margin-bottom: 8px;
`;

export const MealTime = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    line-height: 15.6px;
  `}
`;

export const Divider = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_4};
    width: 1px;
    height: 100%;
    margin: 0 8px;
  `}
`;

export const MealName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    line-height: 20.8px;
  `}

  overflow: hidden;
  flex: 1;
`;

export const MealStatus = styled.View<MealStatusProps>`
  ${({ theme, status }) => css`
    background-color: ${status === "green" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  `}
  height: 14px;
  width: 14px;
  border-radius: 7px;
`;
