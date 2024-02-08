import styled, { css } from 'styled-components/native'
import { PencilLine, Plus, Trash } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'

type Props = {
  variant: 'primary' | 'secondary'
}

type ButtonProps = Props & {
  isPressed: boolean
}

export const Container = styled(TouchableOpacity)<ButtonProps>`
  ${({ theme, variant, isPressed }) => css`
    padding: 16px 24px;
    gap: 12px;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: row;
    border-radius: 6px;
    background-color: ${ variant === 'primary' ? (
      isPressed ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_1
    ) : (
      isPressed ? theme.COLORS.GRAY_5 : theme.COLORS.WHITE
    )};
    border: ${ `1px solid ${theme.COLORS.GRAY_1}`};
  `};
`

export const PencilIcon = styled(PencilLine).attrs({
  size: 18
})`
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const PlusIcon = styled(Plus).attrs({
  size: 18
})`
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const TrashIcon = styled(Trash).attrs({
  size: 18
})`
  color: ${({ theme }) => theme.COLORS.GRAY_1};
`

export const Label = styled.Text<Props>`
  ${({ theme, variant }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    line-height: 18.2px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${ variant === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
  `};
`