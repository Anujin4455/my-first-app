import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const Page = () => {
    return (
        <View style={styles.container}>
            <Link href={"/instructions"} asChild>
                <TouchableOpacity>
                    <Image
                        style={styles.img}
                        source={require('../assets/Dance Floor That Way Pink - A4 1.png')}
                    />
                </TouchableOpacity>
            </Link>
        </View>
    )
}

export default Page

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    img: {
        height: 400,
        width: 400,
    },
})