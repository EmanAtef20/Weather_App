import React, {FC, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import { Dropdown } from 'react-native-element-dropdown';
import tw from '@/tw';
/**
 * Local imports
 */
type Props = {
  visible: boolean;
  title?: string;
  confirmButtonText?: string;
  onClose: () => void;
  onSubmit?: () => void;
  onSelectCity: (item: {}) => void
};
export const AddCityModal: FC<Props> = ({
  visible = false,
  title,
  confirmButtonText,
  onClose = () => {},
  onSubmit = () => {},
  onSelectCity=() => {}
}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
    
  const data = [
    { label: 'Ad Dil', value: '1' },
    { label: 'Al Jabin', value: '2' },
    { label: 'Cairo', value: '3' },
    { label: 'Cairo Governorate', value: '4' },
    { label: 'Al Minyā', value: '5' },
    { label: 'Al Manzalah', value: '6' },
    { label: 'Al Khānkah', value: '7' },
    { label: 'Giza', value: '8' },
  ];

  const  modalStyle= {
    bottom: 0,
    position: 'absolute',
    padding: 0,
    margin: 0,
    width: '100%'
  }
  const  dropdown= {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  }

  return (
    <Modal 
    isVisible={visible} 
    style={styles.modalStyle}
    onBackdropPress={onClose}
    >
      <View style={tw`h-113 w-100% bg-white`}>
      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={tw`text-4`}
          selectedTextStyle={tw`text-4`}
          inputSearchStyle={tw`h-10 text-4`}
          iconStyle={tw`w-5 h-5`}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            console.log('selectedItem',item );
            // onClose();
            onSelectCity(item)
            // setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <Text style={tw`h3-bold`}>Search for cities:   </Text>
          )}
        />
        
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modalStyle: {
        bottom: 0,
        position: 'absolute',
        padding: 0,
        margin: 0,
        width: '100%'
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
});
