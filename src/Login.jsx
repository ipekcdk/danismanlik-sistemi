import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import app from '../firebaseConfig';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = user.accessToken;
      return user;
    } catch(error) {
      Alert.alert("Giriş Başarısız", "E-posta veya şifre yanlış.");
      navigation.navigate('Anasayfa');
      throw error;
    }
  };

  const navigation = useNavigation();

  const homepage = () => {
    navigation.navigate('Anasayfa');
  };

  const ChartEdit = () => {
    handleLogin(); 
    navigation.navigate('Çizelge Düzenle');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/login.png')} style={{ width: 250, height: 250 }}/>
        </View>

        <View style={styles.inputContainer}>

          <View >
            <Ionicons style={styles.inputIcon} name="person" size={24} color="#666" />
            <TextInput 
              style={styles.input} 
              placeholder='E-mail Adresi'
              onChangeText={setEmail} 
              value={email} 
            />
          </View>

          <View>
            <Ionicons style={styles.inputIcon} name="lock-closed" size={24} color="#666" />
            <TextInput 
              style={styles.input} 
              placeholder='Şifre' 
              secureTextEntry={true}
              onChangeText={setPassword} 
              value={password} 
            />
          </View>
        </View>

        <Button 
          mode="contained" 
          style={styles.loginButton} 
          onPress={ChartEdit} 
          labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
        >
          Giriş Yap
        </Button>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  logoContainer: {
    marginBottom: 40,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 50,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#ccc',
    height: 50,
    marginBottom: 20,
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1, 
  },  
  loginButton: {
    backgroundColor: '#465A65',
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderColor: '#231a06',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
