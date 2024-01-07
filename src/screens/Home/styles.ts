import stiled, { css } from 'styled-components/native';

export const Container = stiled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 0 24px;
`;

export const MealsContainer = stiled.View`
  width: 100%;
  margin-top: 40px;
  flex: 1;
`;

export const NewContainer = stiled.View`
  width: 100%;
  margin-bottom: 32px;
  gap: 8px;
`

export const Subtitle = stiled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  line-height: 20.8px;
  width: 100%;
`;