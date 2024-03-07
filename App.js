import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderComponent from './src/HeaderComponent';
import Homepage from './src/Homepage';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <HeaderComponent />
        <Homepage />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});