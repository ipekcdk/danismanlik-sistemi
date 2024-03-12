import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Appointment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('');
  const navigation = useNavigation();

  const homepage = () => {
    navigation.navigate('Anasayfa');
  };

  const handleCreateAppointment = () => {
    if (name && email && date && time && subject) {
      Alert.alert(
        'Randevu Talebi',
        'Randevu talebiniz başarıyla oluşturulmuştur.',
        [{ text: 'Tamam', onPress: () => homepage() }]
      );
    } else {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurunuz.');
    }
  };
  

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Ionicons style={styles.inputIcon} name="person" size={24} color="#666" />
            <TextInput
              style={styles.input}
              placeholder='Adınız Soyadınız'
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons style={styles.inputIcon} name="mail" size={24} color="#666" />
            <TextInput
              style={styles.input}
              placeholder='Okul E-mail Adresiniz'
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons style={styles.inputIcon} name="calendar" size={24} color="#666" />
            <TextInput
              style={styles.input}
              placeholder='Randevu Tarihi'
              value={date}
              onChangeText={setDate}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons style={styles.inputIcon} name="time" size={24} color="#666" />
            <TextInput
              style={styles.input}
              placeholder='Randevu Saati'
              value={time}
              onChangeText={setTime}
            />
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons style={styles.inputIcon} name="chatbox-ellipses" size={24} color="#666" />
            <TextInput
              style={styles.input}
              placeholder='Konu'
              value={subject}
              onChangeText={setSubject}
            />
          </View>
        </View>

        <Button
          mode="contained"
          style={[styles.bookButton, (!name || !email || !date || !time || !subject) && styles.disabled]}
          labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
          onPress={handleCreateAppointment}
          disabled={!name || !email || !date || !time || !subject}
        >
          Randevu Al
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  inputWrapper: {
    position: 'relative',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 50,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#ccc',
    height: 50,
  },
  inputIcon: {
    position: 'absolute',
    top: 15,
    left: 10,
    zIndex: 1, 
  },  
  bookButton: {
    backgroundColor: '#4caf50',
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderColor: '#1b5e20',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  disabled: {
    backgroundColor: '#a0a0a0',
  },
});
