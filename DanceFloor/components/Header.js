import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require('./../assets/Dance Floor That Way Pink - A4 1.png')}
            />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'green'
    },
    img: {
        height: 300,
        width: 300
    },
})