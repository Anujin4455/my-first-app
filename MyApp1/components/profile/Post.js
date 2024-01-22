import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Post = ({ imgUrl }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: imgUrl }} style={styles.image} />
        </TouchableOpacity>
    )
}

export default Post

const styles = StyleSheet.create({
    container: {
        flex: 1,
        aspectRatio: 1,

    },
    image: {
        width: '100%',
        height: '100%',
    }
})