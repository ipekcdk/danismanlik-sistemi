import { StyleSheet, Text, View, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Login() {
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // İstenirse düzenlenebilir.
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/login.png')} style={{ width: 200, height: 200 }}/>
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

        <Button mode="contained" style={styles.loginButton} labelStyle={{ fontWeight: 'bold', fontSize: 16 }}>
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
    backgroundColor: '#007bff',
    width: '80%',
    height: 50,
    borderRadius: 10,
    borderColor: '#231a06',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
