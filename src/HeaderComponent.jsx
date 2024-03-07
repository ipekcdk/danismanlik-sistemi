import React from 'react';
import { Header } from 'react-native-elements';

export default function HeaderComponent() {
  return (
<Header
  barStyle="default"
  centerComponent={{
    text: 'Danışman Randevu Sistemi',
    style: { color: '#fff', fontSize: 19, fontWeight: 'bold', marginTop: 25 },
  }}
  containerStyle={{ width: '100%', height: '12%', justifyContent: 'space-between', backgroundColor: '#1d60bd' }}
  leftComponent={{ icon: 'menu', color: '#fff', style: { marginHorizontal: 20, marginTop: 25 } }}
  placement="center"
  rightComponent={{ icon: 'home', color: '#fff', style: { marginHorizontal: 20, marginTop: 25 } }}
/>
  );
}