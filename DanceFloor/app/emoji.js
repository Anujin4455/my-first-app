import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Link, useLocalSearchParams } from 'expo-router';
export const emojis = [
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
    { id: 17, zurag: require('../assets/DanceFloor/17.png') },
    { id: 18, zurag: require('../assets/DanceFloor/18.png') },
    { id: 19, zurag: require('../assets/DanceFloor/19.jpg') },
    { id: 20, zurag: require('../assets/DanceFloor/20.jpg') },
    { id: 21, zurag: require('../assets/DanceFloor/21.jpg') },
    { id: 22, zurag: require('../assets/DanceFloor/22.jpg') },
    { id: 23, zurag: require('../assets/DanceFloor/23.jpg') },
]
const emoji = () => {

    const params = useLocalSearchParams()


    const huniiTooLimit = params.huniiToo
    const [songosonEmojinuud, setSetsongosonEmojinuud] = useState([])



    const emojiSongolt = (emoji) => {


        if (songosonEmojinuud.includes(emoji.id)) {


            let shineEmojinuud = songosonEmojinuud.filter(e => e !== emoji.id)
            console.log('shineEmojinuud', songosonEmojinuud, emoji.id, shineEmojinuud);

            setSetsongosonEmojinuud(shineEmojinuud)
        } else {
            let shineEmojinuud = [...songosonEmojinuud, emoji.id]
            console.log('shineEmojinuud', shineEmojinuud.length, shineEmojinuud);
            if (shineEmojinuud.length <= huniiTooLimit) {
                setSetsongosonEmojinuud(shineEmojinuud)
            }
        }


    }

    console.log('songosonEmojinuud', songosonEmojinuud);
    return <View style={styles.emoji}>
        <ScrollView>
            <ImageBackground
                style={styles.bg}
                source={require('../assets/DanceFloor/emojiWallpaper.png')}  >

                <View style={styles.foto}>

                    {emojis.map(emoji => {
                        const isSelected = songosonEmojinuud.find(e => e == emoji.id)
                        isSelected && console.log('isSelected', isSelected);
                        return <TouchableOpacity onPress={() => emojiSongolt(emoji)}

                            style={{ backgroundColor: isSelected && '#ffcad4' }}

                        >
                            <Image source={emoji.zurag} style={styles.emojiFto} />
                        </TouchableOpacity>
                    })
                    }

                </View>
                <Link href={{
                    pathname: "/bairlalud",
                    params: { huniiToo: params.huniiToo, songosonEmojinuud }
                }} asChild>
                    <TouchableOpacity style={styles.nextEmj}>
                        <Text style={styles.nextEmo}>NEXT</Text>
                    </TouchableOpacity>
                </Link>

            </ImageBackground>
        </ScrollView>
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
        backgroundColor: 'white',
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
        gap: 8,
    },
})