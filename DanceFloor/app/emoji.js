import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Link, useLocalSearchParams } from 'expo-router';

const emoji = () => {

    const params = useLocalSearchParams()
 
    console.log('songoltId',   params.huniiToo);
    const [songosonEmoji, setSetsongosonEmoji] = useState( {} )
    const emojis = [
        { id: 1, zurag: require('../assets/DanceFloor/1.png') },
        { id: 2, zurag: require('../assets/DanceFloor/2.png') },
        { id: 3, zurag: require('../assets/DanceFloor/3.png') },
        { id: 4, zurag: require('../assets/DanceFloor/4.png') },
        { id: 5, zurag: require('../assets/DanceFloor/5.png') },
        { id: 6, zurag: require('../assets/DanceFloor/6.png') },
        { id: 7, zurag: require('../assets/DanceFloor/7.png') },
        { id: 8, zurag: require('../assets/DanceFloor/8.png') },
        { id: 9, zurag: require('../assets/DanceFloor/9.png') },
        { id: 10, zurag: require('../assets/DanceFloor/10.png') },
        { id: 11, zurag: require('../assets/DanceFloor/11.png') },
        { id: 12, zurag: require('../assets/DanceFloor/12.png') },
        { id: 13, zurag: require('../assets/DanceFloor/13.png') },
        { id: 14, zurag: require('../assets/DanceFloor/14.png') },
        { id: 15, zurag: require('../assets/DanceFloor/15.png') },
        { id: 16, zurag: require('../assets/DanceFloor/16.png') },
    ]


    console.log('params.huniiToo',params.huniiToo);

    return <View style={styles.emoji}>

        <ImageBackground
            style={styles.bg}
            source={require('../assets/DanceFloor/emojiWallpaper.png')}  >

            <View style={styles.foto}>

                {emojis.map(emoji =>
                    <TouchableOpacity onPress={()=> setSetsongosonEmoji( emoji )  } style={{backgroundColor: songosonEmoji.id === emoji.id ? 'green' : ''}}>
                        <Image source={emoji.zurag} style={styles.emojiFto} />
                    </TouchableOpacity>
                )}
            </View>
            <Link  href={{
                        pathname: "/bairlalud",
                        params: { huniiToo: params.huniiToo }
                    }} asChild>
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