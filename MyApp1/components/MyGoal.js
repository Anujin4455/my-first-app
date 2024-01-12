import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyGoal = () => {
  return (
    <View  style={styles.container}>
      <Text style={styles.garcig}>MyGoal</Text>
      <Text style={styles.text}>
      Namaig Anujin gedeg. 15 nastai "Codely academy"-n suragc.
      Minii anhnii app-n sanaa bol:
      </Text>
      <Text style={styles.text}>
      Tailbar. "Dance Floor" gedeg app.
      Ene app n bujigledeg huuheduuded zoriulj
       bujigiin bairlaliig olj ugdug app yum.
      </Text>
      
    </View>
  )
}

export default MyGoal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
},
     text: {
      color: 'purple',
     fontSize: 25,
    textAlign: 'center',
  },
    garcig: {
      color: 'pink',
      fontSize:30,
      textAlign: 'center'
    }
});
