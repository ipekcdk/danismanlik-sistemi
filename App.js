import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderComponent from './src/HeaderComponent';
import Homepage from './src/Homepage';
import Login from './src/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HeaderComponent /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Anasayfa" component={Homepage} />
          <Stack.Screen name="Danışman Girişi" component={Login} />
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
