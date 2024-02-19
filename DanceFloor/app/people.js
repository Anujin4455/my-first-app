import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const people = () => {
    const songoltuud = [
        { id: 'A', text: 'A.4-6people', style: { alignSelf: 'flex-start' } },
        { id: 'B', text: 'B.7-10people', style: { alignSelf: 'flex-end' } },
        { id: 'C', text: 'C.10-15people', style: { alignSelf: 'flex-start' } },
        { id: 'D', text: 'D.15-20people', style: { alignSelf: 'flex-end' } },
    ]
    return (
        <View style={styles.peoplesFto}>
            <Text style={styles.textPple}>How Many People?</Text>
            <Image
                source={require('../assets/DanceFloor/peole.png')}
            />
            {songoltuud.map(songolt =>
                <TouchableOpacity style={[songolt.style, styles.suuder]} >
                    <Text style={styles.songolt}>
                        {songolt.text}
                    </Text>
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
    }
})