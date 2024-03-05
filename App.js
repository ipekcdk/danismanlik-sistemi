import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { Button } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(`Bulunan QR Kod: ${type}`);
  };

  if (hasCameraPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Kamera izni isteniyor...</Text>
      </View>
    );
  }

  if (hasCameraPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>Kamera erişim izni reddedildi.</Text>
        <Button title={'Yeniden Tara'} onPress={() => askForCameraPermission()} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.header}>Danışman Randevu Sistemi</Text>
          <Text style={styles.content}>Görüşmek istediğiniz danışmanın QR kodunu taratınız.</Text>
          <View style={styles.barcodebox}>
            <Camera
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }}
            />
          </View>

          <Text style={styles.maintext}>{text}</Text>

          {scanned && (
            <View style={styles.buttonContainer}>
              <Button
                color='red'
                icon="camera"
                mode="contained"
                onPress={() => setScanned(false)}
                style={[styles.button, styles.smallButton]}>
                Tekrar Tara
              </Button>
              
              <Button
                color='green'
                icon="check"
                mode='contained'
                onPress={() => console.log("Randevu Oluştur")}
                style={[styles.button, styles.smallButton]}>
                Randevu Oluştur
              </Button>
            </View>
          )}

          <View style={styles.danismanContainer}>
            <Button
              color={'#1d60bd'}
              icon="eye"
              mode="contained"
              onPress={() => console.log("Danışman Girişi")}
              style={[styles.danismanButton, styles.smallButton]}>
              Danışman Girişi
            </Button>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    marginBottom: 10, 
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  smallButton: {
    height: 40,
  },
  danismanContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: windowWidth - 40, 
  },
  danismanButton: {
    width: '100%',
    borderRadius: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
    color: '#00475e'
  },
  content: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 10,
    color: '#1a360c'
  },
});
