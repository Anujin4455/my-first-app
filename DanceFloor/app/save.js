import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Link } from 'expo-router'
import { changeScreen } from './bairlalud'
import * as ScreenOrientation from 'expo-screen-orientation';

const save = () => {


    useEffect(() => {
        changeScreen(ScreenOrientation.OrientationLock.PORTRAIT)
    }, [])
    return (
        <View style={styles.container}>

            <TextInput
                style={styles.text}
                placeholder='Хүссэн нэр'
            />

            <Link href={"/byebye"} asChild>
                <TouchableOpacity style={styles.nextEmj}>
                    <Text style={styles.nextEmo}>NEXT</Text>
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default save

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        justifyContent: 'space-between'
    },
    text: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 30,
        fontWeight: 'bold'
    },
    nextEmj: {
        paddingBottom: 50,
        paddingRight: 50
    },
    nextEmo: {
        fontSize: 40,
        backgroundColor: '#fefae0',
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
})