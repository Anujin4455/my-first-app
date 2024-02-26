import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const people = () => {


    const songoltuud = [
        { id: 7, text: 'A.2-7people', style: { alignSelf: 'flex-start' } },
        { id: 11, text: 'B.8-11people', style: { alignSelf: 'flex-end' } },
        { id: 15, text: 'C.12-15people', style: { alignSelf: 'flex-start' } },
        { id: 19, text: 'D.16-19people', style: { alignSelf: 'flex-end' } },


    ]
    return (
        <View style={styles.peoplesFto}>
            <Text style={styles.textPple}>How Many People?</Text>
            <Image
                source={require('../assets/DanceFloor/peole.png')}
            />
            {songoltuud.map(songolt =>

                <TouchableOpacity style={[songolt.style, styles.suuder]} >
                    <Link href={{
                        pathname: "/emoji",
                        params: { huniiToo: songolt.id }
                    }}  >
                        <Text style={styles.songolt}>
                            {songolt.text}
                        </Text>
                    </Link>
                    {/* <Image
                        source={people.songoltuud}
                    /> */}
                </TouchableOpacity>
            )}
        </View>
    )
}

export default people

const styles = StyleSheet.create({
    peoplesFto: {
        flex: 1,
        justifyContent: 'center',
    },
    textPple: {
        fontWeight: 'bold',
        fontSize: 40,
        alignSelf: 'center'
    },
    songolt: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        fontSize: 32,

    },
    suuder: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
    nextex: {
        fontSize: 40,
        backgroundColor: '#fefae0',
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
})