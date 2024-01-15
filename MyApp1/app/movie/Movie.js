import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Movie = () => {
  return (
    <View style={styles.container}>
      <Image
      style={styles.img}
      source={require('./avengers.jpg')}
       />
       <Text style={styles.name}>The Avengers</Text>
       <Text style={styles.decs}>Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers.</Text>
    </View>
  )
}

export default Movie

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 350,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 10,
},
shadowOpacity: 0.51,
shadowRadius: 13.16,

elevation: 20,
    },
    img: {
        width: 300,
        height: 400,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    decs:{
        fontSize: 17,


    },
})