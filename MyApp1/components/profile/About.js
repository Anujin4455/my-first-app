import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const About = ({name,bio}) => {
  return (
    <View>
      {/* Толгой хэсэг: Зураг, дагагч */}
      <View style={styles.proHeader}>
        <Image style={styles.img}
      source={require('../../assets/igPhoto/img.jpg')}>
      </Image>
      <View style={styles.textHuree}>
        <View style={styles.followsHuree}> 
            <Text style={styles.proText}>5</Text>
            <Text style={styles.proText}>Posts</Text>
        </View>
        <View style={styles.followsHuree}>
            <Text style={styles.proText}>185</Text>
            <Text style={styles.proText}>Followers</Text>
        </View>
        <View style={styles.followsHuree}>
            <Text style={styles.proText}>94</Text>
            <Text style={styles.proText}>Following</Text>
        </View>
      </View>
        </View>
        {/* Bio */}
        <View style={styles.bio}> 
            <Text style={styles.bioName}>{name}</Text>
            <Text style={styles.bioDecs}>{bio}</Text>
        </View>
         {/* Edit section */}
        <View style={styles.edit}> 
            <TouchableOpacity style={styles.editBtn}>
                <Text style={styles.editText}>
                    Edit Profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.editBtn}>
                <Text style={styles.editText}>
                    Saved
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
proHeader: {
    flexDirection: 'row',
},
img: {
    width: 107,
    height: 107,
    borderRadius: 107/2,
},
textHuree: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    
},
followsHuree: {
    justifyContent: 'center',
    alignItems: 'center'
},
proText: {
    fontSize: 17,
    fontWeight: 'bold',
},
bio: {
    marginBottom: 8
},
bioName: {
    fontSize: 20,
    fontWeight: 'bold',
},
bioDecs: {
    fontSize: 20,
},
editBtn: {
    borderWidth: 1,
    paddingVertical: 8,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5
},
editText: {
    fontSize: 18,
    fontWeight: '400'
},
edit: {
    flexDirection: 'row'
},
})