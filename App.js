import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './src/screen/homeScreen';


export default function App() {
  return (
<<<<<<< HEAD
    <SafeAreaView style={styles.safeArea}>
      <Header
        barStyle="default"
        centerComponent={{
        text: "Danışman Randevu Sistemi",
        style: { color: "#fff", marginTop: '14%', fontSize: 19, fontWeight: 'bold' }}}
        containerStyle={{ width: '100%', height: '12%'}} 
        leftComponent={{ icon: "menu", color: "#fff", marginTop: '40%' }}
        placement="center"
        rightComponent={{ icon: "home", color: "#fff", marginTop: '40%' }}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
                onPress={() => ({})}
                style={[styles.button, styles.smallButton]}>
                Randevu Oluştur
              </Button>
            </View>
          ) : null}

          <View style={styles.danismanContainer}>
            <Button buttonColor={'#1d60bd'} icon="eye" mode="contained" onPress={() => console.log('Danışman Girişi')} style={[styles.danismanButton, styles.smallButton]}>
              Danışman Girişi
            </Button>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
=======
    <View>
      <HomeScreen/>
    </View>
  )
>>>>>>> b7f68378d4c525df1ab4b169fe92567f558cf35d
}

const styles = StyleSheet.create({})


