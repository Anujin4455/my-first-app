import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const index = () => {
  return (
    <View>
      <Link href="/about">About</Link>
      {/* ...other links */}
      <Link href="/movie/Kino">Movies</Link>
      <Link href="/movie/TicTac">TicTac</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})