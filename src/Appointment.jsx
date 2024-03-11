import { StyleSheet, Text, View, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Appointment() {
  return (
<KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <View style={styles.logoContainer}>
          <Image source={require('../assets/images/appointment.png')} style={{ width: 200, height: 200 }}/>
        </View> */}

        <View style={styles.inputContainer}>
          <View>
            <Ionicons style={styles.inputIcon} name="person" size={24} color="#666" />
            <TextInput style={styles.input} placeholder='Adınız Soyadınız' />
          </View>

          <View>
            <Ionicons style={styles.inputIcon} name="mail" size={24} color="#666" />
            <TextInput style={styles.input} placeholder='Okul E-mail Adresiniz' />
          </View>

          <View>
            <Ionicons style={styles.inputIcon} name="calendar" size={24} color="#666" />
            <TextInput style={styles.input} placeholder='Randevu Tarihi' />
          </View>

          <View>
            <Ionicons style={styles.inputIcon} name="time" size={24} color="#666" />
            <TextInput style={styles.input} placeholder='Randevu Saati' />
          </View>

          <View>
            <Ionicons style={styles.inputIcon} name="chatbox-ellipses" size={24} color="#666" />
            <TextInput style={styles.input} placeholder='Konu' />
          </View>
        </View>

        <Button mode="contained" style={styles.bookButton} labelStyle={{ fontWeight: 'bold', fontSize: 16 }}>
          Randevu Al
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
      marginBottom: 20,
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
    bookButton: {
      backgroundColor: '#4caf50',
      width: '80%',
      height: 50,
      borderRadius: 10,
      borderColor: '#1b5e20',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });