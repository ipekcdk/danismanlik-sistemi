import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Henüz QR kod taranmadı');

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const askForCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(status === 'granted');
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(`Bulunan QR Kod: ${data}`);
  };

  if (hasCameraPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Kamera izni isteniyor...</Text>
      </View>
    )
  }

  if (hasCameraPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Kamera erişim izni reddedildi.</Text>
        <Button title={'Yeniden Tara'} onPress={() => askForCameraPermission()} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <Camera
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>

      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Tekrar Tara'} onPress={() => setScanned(false)} color={'tomato'} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  },

  maintext: {
    fontSize: 16,
    margin: 20,
  },
  text: {
    marginBottom: 10, // Değiştirildi
  },
});
