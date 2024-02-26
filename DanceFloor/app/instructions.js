import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const instructions = () => {
    return (
        <View style={styles.huudas}>
            <ImageBackground
                style={styles.text}
                source={require('../assets/DanceFloor/instructions.png')}
            >
                <Link href={"/people"} asChild>
                    <TouchableOpacity style={styles.nextTxt}>
                        <Text style={styles.next}>NEXT</Text>
                    </TouchableOpacity>
                </Link>
            </ImageBackground>
        </View >
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
        paddingRight: 50
    },
    next: {
        fontSize: 40,
        backgroundColor: '#fefae0',
        borderRadius: 10
    },
})