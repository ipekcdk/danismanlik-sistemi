import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function Homepage() {

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Henüz QR kod taranmadı');

  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Danışman Girişi');
  };

  const handleLoginPress2 = () => {
    navigation.navigate('Randevu Oluştur');
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const askForCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasCameraPermission(status === 'granted');
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(`Bulunan QR Kod: ${type}`);
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
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo.png')} style={{ width: 250, height: 180 }}/>
        </View>
        <View style={styles.container}>        
          <Text style={styles.content}>Görüşmek istediğiniz danışmanın QR kodunu taratınız.</Text>
          <View style={styles.barcodebox}>
            <Camera
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }}
            />
          </View>

          <Text style={styles.maintext}>{text}</Text>

          {scanned ? (
            <View style={styles.buttonContainer}>
              <Button
                buttonColor='red'
                icon="camera"
                mode="contained"
                onPress={() => setScanned(false)}
                style={[styles.button, styles.smallButton]}>
                Tekrar Tara
              </Button>
              
              <Button
                buttonColor='green'
                icon="check"
                mode='contained'
                onPress={handleLoginPress2}
                style={[styles.button, styles.smallButton]}>
                Randevu Oluştur
              </Button>
            </View>
          ) : null}

          <View style={styles.danismanContainer}>
            <Button buttonColor={'#165570'} icon="eye" mode="contained" onPress={handleLoginPress} style={[styles.danismanButton, styles.smallButton]}>
              Danışman Girişi
            </Button>
          </View>

        </View>
      </ScrollView>
  )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',

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
    marginBottom: 50, 
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
    width: windowWidth, 
  },
  danismanButton: {
    width: '88%',
    borderRadius: 20,
  },
  content: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center',
    marginVertical: 10,
    color: '#1a360c',
    marginBottom: 20,
  },
  
});






