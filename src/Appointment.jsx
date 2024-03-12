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
  const [emailError, setEmailError] = useState(false); 
  const navigation = useNavigation();

  const homepage = () => {
    navigation.navigate('Anasayfa');
  };

  const handleCreateAppointment = () => {
    if (name && email && subject) {
      Alert.alert(
        'Randevu Talebi',
        'Randevu talebiniz başarıyla oluşturulmuştur.',
        [{ text: 'Tamam', onPress: () => homepage() }]
      );
    } else {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurunuz.');
    }
  };

  const validateEmail = (email) => {
    return email.endsWith('@iste.edu.tr');
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (!validateEmail(text)) {
      setEmailError(true); 
    } else {
      setEmailError(false); 
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.logoContainer}>
          <Image source={require('../assets/images/appointment.png')} style={{ width: 250, height: 250 }}/>
        </View>
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
              onChangeText={handleEmailChange} 
              onFocus={() => setEmailError(false)} 
            />
            {emailError && ( 
              <Text style={styles.errorText}>Lütfen @iste.edu.tr uzantılı mail adresinizi yazınız.</Text>
            )}
          </View>

          <View style={styles.inputWrapper}>
            <Ionicons style={[styles.inputIcon, {paddingTop:25}]} name="chatbox-ellipses" size={24} color="#666" />
            <TextInput
              style={[styles.input, { height: 100 }]}
              placeholder='Konu'
              value={subject}
              onChangeText={setSubject}
            />
          </View>
        </View>

        <Button
          mode="contained"
          style={styles.bookButton}
          labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
          onPress={handleCreateAppointment}
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },  
  bookButton: {
    backgroundColor: '#465A65',
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
  logoContainer: {
    marginBottom: 40,
  },
});
