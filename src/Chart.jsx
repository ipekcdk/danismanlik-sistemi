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

  const handleLoginPress3 = () => {
    navigation.navigate('Randevu Oluştur');
  };

  // Tüm checkboxları kontrol etmek için bir fonksiyon
  const isAnyCheckboxChecked = () => {
    return selectedItemIndex !== -1;
  };

  return (
    <View style={styles.container}>
      {['User 1', 'User 2', 'User 3'].map((user, index) => (
        <ListItem key={index} bottomDivider onPress={() => handleItemPress(index)} containerStyle={selectedItemIndex === index && styles.selectedItem}>
          <ListItem.CheckBox
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checked={index === selectedItemIndex}
            onPress={() => handleItemPress(index)}
          />
          <ListItem.Content>
            <ListItem.Title>{user}</ListItem.Title>
            <ListItem.Subtitle>{index % 2 === 0 ? 'CA, US' : 'HR, India'}</ListItem.Subtitle>
          </ListItem.Content>
          <Icon name="chevron-right" type="material" color="gray" size={24} />
        </ListItem>
      ))}
      <TouchableOpacity
        style={[styles.button, !isAnyCheckboxChecked() && styles.disabledButton]} // Eğer hiçbir checkbox seçilmemişse butonu devre dışı bırak
        onPress={handleLoginPress3}
        disabled={!isAnyCheckboxChecked()} // Eğer hiçbir checkbox seçilmemişse butonu devre dışı bırak
      >
        <Text style={styles.buttonText}>İleri</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  selectedItem: {
    backgroundColor: '#e0e0e0',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  disabledButton: {
    backgroundColor: 'gray', // Devre dışı buton rengi
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
