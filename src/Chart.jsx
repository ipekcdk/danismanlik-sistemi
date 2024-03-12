import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export default function Chart() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

  const handleItemPress = (index) => {
    setSelectedItemIndex(index === selectedItemIndex ? -1 : index);
  };

  const navigation = useNavigation();

  const randevuOlustur = () => {
    navigation.navigate('Randevu Oluştur');
  };

  const isAnyCheckboxChecked = () => {
    return selectedItemIndex !== -1;
  };

  return (
    <View style={styles.container}>
      {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'].map((day, index) => (
        <ListItem key={index} bottomDivider onPress={() => handleItemPress(index)} containerStyle={selectedItemIndex === index && styles.selectedItem}>
          <ListItem.CheckBox
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={index === selectedItemIndex}
            onPress={() => handleItemPress(index)}
          />
          <ListItem.Content>
            <ListItem.Title>{day}</ListItem.Title>
            <ListItem.Subtitle>Saatler: 09:00 - 17:00</ListItem.Subtitle>
          </ListItem.Content>
          <Icon name="chevron-right" type="material" color="gray" size={24} />
        </ListItem>
      ))}
      <TouchableOpacity
        style={[styles.button, !isAnyCheckboxChecked() && styles.disabledButton]} 
        onPress={randevuOlustur}
        disabled={!isAnyCheckboxChecked()} 
      >
        <Icon name="arrow-right" type="material-community" color="white" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  selectedItem: {
    backgroundColor: '#e0e0e0',
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
    alignSelf: 'center',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 120,
    right: 35,
  },
  disabledButton: {
    backgroundColor: 'gray', 
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
