import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';

const _layout = () => {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  container:{
    backgroundColor:'red',
    flex:1
  }
})