import { StyleSheet, Text, View, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseConfig';

const auth = getAuth();

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const homepage = () => {
    navigation.navigate('Anasayfa');
  };

  const ChartEdit = () => {
    navigation.navigate('Çizelge Düzenle');
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
          alert('Hatalı şifre girdiniz. Lütfen tekrar deneyin.');
        } else if (errorCode === 'auth/user-not-found') {
          alert('Girdiğiniz e-posta adresiyle bir kullanıcı bulunamadı.');
        } else {
          alert('Giriş yapılırken bir hata oluştu. Lütfen tekrar deneyin.');
        }
      });
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
            <TextInput style={styles.input} placeholder='E-mail Adresi' />

          </View>

          <View>
            <Ionicons style={styles.inputIcon} name="lock-closed" size={24} color="#666" />
            <TextInput style={styles.input} placeholder='Şifre' secureTextEntry={true} />
          </View>
        </View>

        <Button mode="contained" style={styles.loginButton} onPress={ChartEdit} labelStyle={{ fontWeight: 'bold', fontSize: 16 }}>
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
