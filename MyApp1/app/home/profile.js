import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import About from '../../components/profile/About'
import Post from '../../components/profile/Post'
import Posts from '../../components/profile/Posts'

const profile = () => {
  const about = {
    name: 'any_anyk',
    bio: 'Henloow',
    followers: 185,
    following: 94,
    postNum: 5,
  }
  const postData = [
    { id: 1, desc: "My first post 1", img: 'https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?q=80&w=1377&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, desc: "My first post 2", img: 'https://plus.unsplash.com/premium_photo-1661676191997-0c0cece2a683?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, desc: "My first post 3", img: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ]
  return (
    <ScrollView contentContainerStyle={styles.container}>

               <About
                name={about.name}
                bio={about.bio}
                followers={about.followers}
                following={about.following}
                postNum={about.postNum}/>
                {/* Үндсэн пост хэсэг */}
            <Posts  data={postData} />
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