import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { postData } from '../../data'

const Post = () => {
    // Huudastai holbootoi zuilsiig udirdah bolomjtoi
    const navigation = useNavigation()
    // Huudasruu shiljuulsen parameteruudiig avj bol
    const params = useLocalSearchParams()
    // Postnii id
    const postId = params.id
    const data = postData.find(post => post.id == postId)
    console.log("data", data);
    useEffect(() => {
        navigation.setOptions({ headerShown: true, headerTitle: 'Post' })
    }, [navigation])

    return (
        <Layout>
            <Image source={{ uri: data.img }} style={styles.img} />

            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{data.name} </Text>
                <Text style={{ fontSize: 18 }}>{data.desc}</Text>

            </View>
        </Layout>
    )
}

export default Post

const styles = StyleSheet.create({
    img: { width: '100%', aspectRatio: 1 },
})