import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect } from 'react'
import { changeScreen } from './bairlalud'
import * as ScreenOrientation from 'expo-screen-orientation';

const byebye = () => {


    useEffect(() => {
        changeScreen(ScreenOrientation.OrientationLock.PORTRAIT)
    }, [])
    return (
        <View>
            <Image
                source={require('../../DanceFloor/assets/DanceFloor/byebye.png')}
            />
        </View>
    )
}

export default byebye

const styles = StyleSheet.create({})