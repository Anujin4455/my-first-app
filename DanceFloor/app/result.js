import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const result = () => {
    return (
        <View style={styles.imgHuds}>
            <ImageBackground
                style={styles.img}
                source={require('../assets/DanceFloor/result1.png')}
            >
                <Link href={"/people"} asChild>
                    <TouchableOpacity style={styles.resultTouch}>
                        <Text style={styles.nxtResult}>NEXT</Text>
                    </TouchableOpacity>
                </Link>
            </ImageBackground>
        </View>
    )
}

export default result

const styles = StyleSheet.create({
    imgHuds: {
        justifyContent: 'center',
        flex: 1,
    },
    img: {
        flex: 1,
        resizeMode: 'repeat',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    nxtResult: {
        fontSize: 40,
        backgroundColor: '#fefae0',
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
    resultTouch: {
        paddingBottom: 50,
        paddingRight: 50
    },
})