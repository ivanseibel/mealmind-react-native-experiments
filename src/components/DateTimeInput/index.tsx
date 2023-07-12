import { useState } from 'react';
import { Text, Modal, Platform, Pressable, View, TouchableHighlight, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { Input } from '@components/Input';

type DateTimeInputProps = {
  onChange: (date: Date) => void;
  mode?: 'date' | 'time';
  value: Date;
}

export function DateTimeInput({ onChange, mode = 'date', value = new Date() }: DateTimeInputProps) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  function handleOnChange(event: DateTimePickerEvent, selectedDate: Date | undefined) {
    if (Platform.OS === 'android') {
      setShow(false);
    }
    
    if (selectedDate) {
      if (Platform.OS === 'ios') {
        setDate(selectedDate);
      } else {
        onChange(selectedDate);
      }
    }
  }

  function handleCancel() {
    setShow(false);
    onChange(new Date());
  }

  function handleConfirm() {
    onChange(date);
    setShow(false);
  }

  function renderDateTimePicker() {
    return (
      <DateTimePicker 
        mode={mode}
        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
        value={value}
        onChange={handleOnChange}
        maximumDate={new Date()}
        minimumDate={new Date(2020, 0, 1)}
      />
    )
  }

  return (
    <Pressable
      onPress={() => setShow(true)}
    >
      <Input 
        value={mode === 'date' ? format(value, 'EEE, dd MMM yyyy'): format(value, 'HH:mm')}
        editable={false}
        onPressIn={() => setShow(true)}
      />
      {show && Platform.OS === 'android' && renderDateTimePicker()}
      {Platform.OS === 'ios' && (
        <Modal
          animationType='slide'
          transparent={true}
          visible={show}
          onRequestClose={() => setShow(false)}
          supportedOrientations={['portrait']}
        >

          <View
            style={styles.screen}
          >
            <TouchableHighlight
              underlayColor={"#fff"}
              style={styles.pickerContainer}
            >
              <>
                <View>
                  {renderDateTimePicker()}
                </View>
                <View>
                  <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={handleCancel}
                    style={[styles.btnText, styles.btnCancel]}
                  >
                    <Text>Cancel</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={handleConfirm}
                    style={[styles.btnText, styles.btnDone]}
                  >
                    <Text>Done</Text>
                  </TouchableHighlight>
                </View>
              </>
            </TouchableHighlight>  
          </View>
        </Modal>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: '#999',
    width: '100%',
    height: '30%',
    position: 'absolute',
    bottom: 0,
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
  },
  btnCancel: {
    left: 0,
  },
  btnDone: {
    right: 0,
  },
});