import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useLocalSearchParams } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import { emojis } from './emoji';
export async function changeScreen(direction) {
    await ScreenOrientation.lockAsync(direction);
}
const bairlalud = () => {
    useEffect(() => {
        changeScreen(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT)


        return () => changeScreen(ScreenOrientation.OrientationLock.PORTRAIT)
    }, [])

    const params = useLocalSearchParams()

    const huniiToo = params.huniiToo || 5
    const songosonEmojinuud = params.songosonEmojinuud || '1, 2, 3, 4, 5,6,7,8'
    const songosonArray = songosonEmojinuud.split(',')


    const [darsanBox, setDarsanBox] = useState('')
    const [darsanEmoji, setdarsanEmoji] = useState('')

    let urgun = 100 / huniiToo
    // console.log('+++songosonEmojinuud', songosonArray);
    urgun = urgun + '%'

    // console.log('songoltId', params.songoltId);
    const hoosonNudnuud = Array(huniiToo * 20).fill('')

    const [nudniiToo, setNudniiToo] = useState(hoosonNudnuud)

    const onBoxClick = (darsanBox) => {
        console.log('onBoxClick darsanBox', darsanBox, darsanEmoji);
        setDarsanBox(darsanBox)

        checkSwap(darsanBox, darsanEmoji)

    }


    const onEmojiClick = (darsanEmoji) => {
        console.log('onEmojiClick darsanEmoji', darsanEmoji);
        setdarsanEmoji(darsanEmoji)
        checkSwap(darsanBox, darsanEmoji)

    }
    const checkSwap = (darsanBox, darsanEmoji) => {
        if (darsanBox && darsanEmoji) {
            console.log('SOLIH UILDEL HIINE');
            nudniiToo[darsanBox] = darsanEmoji
            setNudniiToo([...nudniiToo])

            setdarsanEmoji('')
            setDarsanBox('')
        }

    }




    return (
        <ScrollView  >
            <ScrollView horizontal contentContainerStyle={styles.emojiBairlal}>
                {songosonArray.map(emojiId => {
                    const emoji = emojis.find(obj => obj.id == emojiId)
                    return <TouchableOpacity onPress={() => onEmojiClick(emojiId)}
                        style={[emojiId === darsanEmoji ? styles.daragsanHairtsag : {}]}>
                        <Image
                            style={{
                                width: 100, height: 100, objectFit: 'cover', borderWidth: 1, borderColor: 'pink',
                                borderRadius: 8, display: 'flex', justifyContent: "center", alignItems: 'center'
                            }}
                            source={emoji.zurag} />
                    </TouchableOpacity>

                }
                )}
            </ScrollView>


            <Link href={"/save"} asChild>
                <TouchableOpacity style={styles.nextEmj}>
                    <Text style={styles.nextEmo}>NEXT</Text>
                </TouchableOpacity>
            </Link>

            <View style={styles.huree}>


                {nudniiToo.map((emojiId, i) => {
                    const emoji = emojis.find(obj => obj.id == emojiId)
                    return <TouchableOpacity onPress={() => onBoxClick(i)}
                        style={[i % 2 === 0 ? styles.hairtsag1 : styles.hairtsag2,
                        {
                            width: urgun, height: 100, objectFit: 'cover', borderWidth: 1, borderColor: 'pink',
                            borderRadius: 8, display: 'flex', justifyContent: "center", alignItems: 'center'
                        },
                        i === darsanBox ? styles.daragsanHairtsag : {}]}>
                        {emoji ? <Image
                            style={{
                                width: '100%', height: '100%', objectFit: 'cover', borderWidth: 1,
                                borderRadius: 8, display: 'flex', justifyContent: "center", alignItems: 'center'
                            }}
                            source={emoji.zurag} />
                            :
                            <Text> </Text>
                        }
                    </TouchableOpacity>

                }


                )}



            </View>
        </ScrollView>
    )
}

export default bairlalud

const styles = StyleSheet.create({
    daragsanHairtsag: {
        borderWidth: 5,
        borderColor: '#3c096c'

    },
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
    },
    nextEmo: {
        fontSize: 40,
        backgroundColor: '#fefae0',
        borderRadius: 10,
        alignSelf: 'flex-end'
    },
    nextEmj: {
        paddingBottom: 50,
        paddingRight: 50
    },
    // huudas: {
    //     justifyContent: 'center',
    //     // alignItems: 'center',
    //     flex: 1,
    // },
})