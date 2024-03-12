// Import necessary components from React Native
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

export default function ChartEdit() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editedTimes, setEditedTimes] = useState({
    Pazartesi: '09:00 - 17:00',
    Salı: '09:00 - 17:00',
    Çarşamba: '09:00 - 17:00',
    Perşembe: '09:00 - 17:00',
    Cuma: '09:00 - 17:00'
  });
  const navigation = useNavigation();

  useEffect(() => {
    if (isAdmin) {
      navigation.navigate('Çizelge Düzenle');
    }
  }, [isAdmin]);

  const handleItemPress = (day) => {
    setSelectedItemIndex(day);
  };

  const handleLogin = () => {
    navigation.navigate('Anasayfa')
  };

  const handleTimeChange = (day, text) => {
    setEditedTimes(prevState => ({
      ...prevState,
      [day]: text
    }));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma'].map((day, index) => (
          <ListItem key={index} bottomDivider onPress={() => handleItemPress(day)} containerStyle={selectedItemIndex === day && styles.selectedItem}>
            <ListItem.Content>
              <ListItem.Title>{day}</ListItem.Title>
              {(isAdmin || selectedItemIndex === day) && (
                <TextInput
                  style={styles.editInput}
                  placeholder='Saatleri girin (hh:mm - hh:mm)'
                  value={editedTimes[day]}
                  onChangeText={(text) => handleTimeChange(day, text)}
                  keyboardType="numeric"
                  maxLength={11}
                />
              )}
              {!isAdmin && selectedItemIndex !== day && (
                <Text style={styles.subtitle}>Saatler: {editedTimes[day]}</Text> 
              )}
            </ListItem.Content>
            <Icon name="chevron-right" type="material" color="gray" size={24} />
          </ListItem>
        ))}
      </ScrollView>
      {!isAdmin && (
        <TouchableOpacity
          style={styles.loginButton} 
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Kaydet</Text>
        </TouchableOpacity>
      )}
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
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
    alignSelf: 'center',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 120,
    right: 35,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  editInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  subtitle: {
    marginTop: 5, 
    color: '#888', 
  },
});
