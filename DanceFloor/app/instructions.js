import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const instructions = () => {
    return (
        <View style={styles.huudas}>
            <ImageBackground
                style={styles.text}
                source={require('../assets/instructions.png')}
            >
                <TouchableOpacity style={styles.nextTxt}>
                    <Text style={styles.next}>Next</Text>
                </TouchableOpacity>

            </ImageBackground>

        </View>
    )
}

export default instructions

const styles = StyleSheet.create({
    huudas: {
        justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
    },
    text: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        fontWeight: 'bold',
    },
    nextTxt: {
        paddingBottom: 50,
    },
    next: {
        fontSize: 40,
    },
})