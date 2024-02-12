import { TouchableOpacityProps } from "react-native";
import { Container, Label, PencilIcon, PlusIcon, TrashIcon } from "./styles";
import { useState } from "react";

type Props = TouchableOpacityProps & {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary'
  icon?: 'pencil' | 'trash' | 'plus'
  width?: '100%' | '48%' | 'auto' 
}

export function Button({ label, onClick, variant = 'primary', icon, width = '100%'}: Props) {
  const [isPressed, setIsPressed] = useState(false)
  return (
    <Container
      onPress={onClick}
      variant={variant}
      isPressed={isPressed}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      activeOpacity={1}
      width={width}
    >
      {icon === 'pencil' && <PencilIcon />}
      {icon === 'plus' && <PlusIcon />}
      {icon === 'trash' && <TrashIcon />}
      <Label
        variant={variant}
      >
        {label}
      </Label>
    </Container>
  )
}