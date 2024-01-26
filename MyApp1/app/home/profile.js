import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import About from '../../components/profile/About'
import Post from '../../components/profile/Post'
import Posts from '../../components/profile/Posts'
import { about, postData } from '../../data'

const profile = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <About
        img={about.img}
        name={about.name}
        bio={about.bio}
        followers={about.followers}
        following={about.following}
        postNum={about.postNum} />
      {/* Үндсэн пост хэсэг */}
      <Posts data={postData} />
    </ScrollView>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flex: 1
  },
})