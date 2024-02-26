import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router';

const bairlalud = () => {


    const params = useLocalSearchParams()
    console.log('params.huniiToo', params.huniiToo);
    const huniiToo = params.huniiToo
    let urgun = 100 / huniiToo

    urgun = urgun + '%'

    console.log('songoltId', params.songoltId);
    const nudniiToo = Array(huniiToo * 20).fill('')
    return (
        <View style={styles.huree} >
            {nudniiToo.map((obj, i) =>

                <TouchableOpacity style={[i % 2 === 0 ? styles.hairtsag1 : styles.hairtsag2, { width: urgun }]}>
                </TouchableOpacity>
            )}

        </View>
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

        flexDirection: 'row',
        flexWrap: 'wrap',

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
})