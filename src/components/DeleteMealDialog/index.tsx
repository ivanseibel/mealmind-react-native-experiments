import React from 'react';
import { Modal, View } from 'react-native';
import { ButtonContainer, ModalContainer, ModalContent, Title } from './styles';
import { Button } from '@components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

type CustomModalProps = {
  isVisible: boolean;
  onClose: () => void;
}

export function DeleteMealDialog({isVisible, onClose}: CustomModalProps){
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      <ModalContainer>
        <ModalContent>
          <Title>Do you really want to delete the meal record?</Title>
          <ButtonContainer>
            <Button
              variant='secondary'
              label='Cancel'
              onClick={onClose}
              width='48%'
            />
            <Button
              variant='primary'
              label='Delete'
              onClick={onClose}
              width='48%'
            />
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}