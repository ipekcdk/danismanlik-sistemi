import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderComponent from './src/HeaderComponent';
import Homepage from './src/Homepage';
import Login from './src/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Appointment from './src/Appointment';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HeaderComponent /> */}
      <NavigationContainer >
        <Stack.Navigator  
        screenOptions={{ headerStyle: { backgroundColor: '#e2e2e2', height: 105}, headerTitleStyle: {fontWeight: 'bold'} }}>
          <Stack.Screen name="Anasayfa" component={Homepage} />
          <Stack.Screen name="Danışman Girişi" component={Login} />
          <Stack.Screen name="Randevu Oluştur" component={Appointment}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
