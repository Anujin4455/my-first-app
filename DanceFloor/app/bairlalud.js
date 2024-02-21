import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const bairlalud = () => {
    return (
        <View >
            <TouchableOpacity>
                <View style={styles.hairtsag1}>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.hairtsag2}></View>
            </TouchableOpacity>
        </View>
    )
}

export default bairlalud

const styles = StyleSheet.create({
    hairtsag1: {
        width: 100,
        height: 100,
        backgroundColor: '#e0b1cb'
    },
    hairtsag2: {
        width: 100,
        height: 100,
        backgroundColor: '#5e548e'

    },
})