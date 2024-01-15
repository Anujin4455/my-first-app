import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const _layout = () => {
  return (
    <View style={styles.container}>
      <Stack />
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