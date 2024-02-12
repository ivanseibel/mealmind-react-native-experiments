import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: 80%;
  padding: 48px 24px 24px;
  background-color: white;
  border-radius: 8px;
  gap: 32px;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
  line-height: ${({theme}) => theme.LINE_HEIGHT.MULTIPLIER * theme.FONT_SIZE.LG}px;
  color: ${({theme}) => theme.COLORS.GRAY_2};
  text-align: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;