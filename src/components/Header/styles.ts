import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const LogoIcon = styled.Image`
  width: 37px;
  height: 37px;
`;

export const LogoName = styled.Image`
  width: 36px;
  height: 31px;
`;

export const Avatar = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;
