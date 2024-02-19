import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const emoji = () => {


    const emojis = [
        { id: 1, emoji: require('../assets/DanceFloor/1.png') },
        { id: 2, emoji: require('../assets/DanceFloor/2.png') },
        { id: 3, emoji: require('../assets/DanceFloor/3.png') },
        { id: 4, emoji: require('../assets/DanceFloor/4.png') },
        { id: 5, emoji: require('../assets/DanceFloor/5.png') },
        { id: 6, emoji: require('../assets/DanceFloor/6.png') },
        { id: 7, emoji: require('../assets/DanceFloor/7.png') },
        { id: 8, emoji: require('../assets/DanceFloor/8.png') },
        { id: 9, emoji: require('../assets/DanceFloor/9.png') },
        { id: 10, emoji: require('../assets/DanceFloor/10.png') },
        { id: 11, emoji: require('../assets/DanceFloor/11.png') },
        { id: 12, emoji: require('../assets/DanceFloor/12.png') },
        { id: 13, emoji: require('../assets/DanceFloor/13.png') },
        { id: 14, emoji: require('../assets/DanceFloor/14.png') },
        { id: 15, emoji: require('../assets/DanceFloor/15.png') },
        { id: 16, emoji: require('../assets/DanceFloor/16.png') },
    ]


    return <View style={styles.emoji}>

        <ImageBackground
            style={styles.bg}
            source={require('../assets/DanceFloor/emojiWallpaper.png')}  >

            <View style={styles.foto}>

                {emojis.map(emoji =>
                    <TouchableOpacity>
                        <Image source={emoji.emoji} style={styles.emojiFto} />
                    </TouchableOpacity>
                )}
            </View>
            <Link href={"/people"} asChild>
                <TouchableOpacity style={styles.nextEmj}>
                    <Text style={styles.nextEmo}>NEXT</Text>
                </TouchableOpacity>
            </Link>

        </ImageBackground>

    </View>

}

export default emoji

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    emoji: {
        justifyContent: 'center',
        flex: 1
    },
    emojiFto: {
        width: 100,
        height: 100,
        backgroundColor: 'lightgray',
        opacity: 0.7
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
    foto: {
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8
    },
})