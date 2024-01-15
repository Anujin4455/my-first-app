import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const index = () => {
  return (
    <View>
      {/* ...other links */}
      <Link href="/movie" style={styles.movie}>Movies</Link>
      <Link href="/movie/TicTac" style={styles.TicTac}>TicTac</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  movie: {
    backgroundColor: '#be95c4',
    fontSize: 20,
    borderRadius: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  TicTac: {
    backgroundColor: '#9f86c0',
    fontSize: 20,
    borderRadius: 10,
    justifyContent:'center',
    textAlign:'center'
  }
})