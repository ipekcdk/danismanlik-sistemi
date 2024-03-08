import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View className='bg-red-500 w-12 h-12'>
      <View>
        <Image source={require('../assets/images/login.png')} />
      </View>

      <View>
        <Text>Selam</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})