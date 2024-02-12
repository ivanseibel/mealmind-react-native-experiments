import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding: 0 24px;
`;

export const MealsContainer = styled.View`
  width: 100%;
  margin-top: 40px;
  flex: 1;
`;

export const NewContainer = styled.View`
  width: 100%;
  margin-bottom: 32px;
  gap: 8px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  line-height: 20.8px;
  width: 100%;
`;

export const SectionHeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  line-height: 23px;
  width: 100%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 8px;
  margin-top: 32px;
`;