import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Link, useLocalSearchParams } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import { emojis } from './emoji';
async function changeScreen(direction) {
    await ScreenOrientation.lockAsync(direction);
}
const bairlalud = () => {
    useEffect(() => {
        changeScreen(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)


        return () => changeScreen(ScreenOrientation.OrientationLock.PORTRAIT)
    }, [])

    const params = useLocalSearchParams()

    const huniiToo = params.huniiToo
    const songosonEmojinuud = params.songosonEmojinuud
    const songosonArray = params.songosonEmojinuud.split(',')

    let urgun = 100 / huniiToo
    console.log('+++songosonEmojinuud', songosonArray);
    urgun = urgun + '%'

    console.log('songoltId', params.songoltId);
    const nudniiToo = Array(huniiToo * 20).fill('')
    return (
        <ScrollView  >

            <ScrollView horizontal contentContainerStyle={styles.emojiBairlal}>
                {songosonArray.map(emojiId => {
                    const emoji = emojis.find(obj => obj.id == emojiId)
                    return <Image style={{ width: 70, height: 70, }} source={emoji.zurag} />

                }
                )}
            </ScrollView>

            <View style={styles.huree}>


                {nudniiToo.map((obj, i) =>

                    <TouchableOpacity style={[i % 2 === 0 ? styles.hairtsag1 : styles.hairtsag2, { width: urgun }]}>
                        {/* <Text>{i}</Text> */}
                    </TouchableOpacity>
                )}

            </View>
        </ScrollView>
    )
}

export default bairlalud

const styles = StyleSheet.create({
    hairtsag1: {

        aspectRatio: 1,
        height: 1,
        backgroundColor: '#e0b1cb',

    },
    hairtsag2: {

        aspectRatio: 1,
        height: 1,

        backgroundColor: '#5e548e'

    },
    huree: {
        paddingTop: StatusBar.currentHeight,
        flexDirection: 'row',
        flexWrap: 'wrap',

        justifyContent: 'center',
        alignItems: 'flex-end'

    },
    emojiBairlal: {
        paddingTop: 12,
        gap: 5,
        justifyContent: 'center'
        // justifyContent: 'space-around',
        // flexDirection: 'row',

        // flexWrap: 'wrap'


    }
})