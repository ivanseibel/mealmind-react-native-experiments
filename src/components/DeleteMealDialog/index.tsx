import React from 'react';
import { Alert, Modal } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Button } from '@components/Button';

import { AppError } from '@utils/AppError';
import { deleteMeal } from '@storage/DeleteMeal';

import { ButtonContainer, ModalContainer, ModalContent, Title } from './styles';

type CustomModalProps = {
  id: string;
  isVisible: boolean;
  onClose: () => void;
}

export function DeleteMealDialog({id, isVisible, onClose}: CustomModalProps){
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleDelete(){
    try {
      deleteMeal(id);
      onClose();
      navigation.goBack();
    } catch (error) {
      console.error(error);
      
      if (error instanceof AppError) {
        Alert.alert('Error', error.message);
      }

      Alert.alert('Error', 'An error occurred while trying to delete the meal record');
    }
  }

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
              onClick={handleDelete}
              width='48%'
            />
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    </Modal>
  )
}