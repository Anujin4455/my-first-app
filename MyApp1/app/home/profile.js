import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import About from '../../components/profile/About'
import Post from '../../components/profile/Post'

const profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

               <About
                name={'any_anyk'}
                bio={'Henloow'} />
                {/* Үндсэн пост хэсэг */}
            <Post />
            </ScrollView>
  )
}

export default profile

const styles = StyleSheet.create({ 
    container: {
        padding: 8,
         flex:1
    },
})