import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';
 import Post from './Post';
const postImg = require('../../assets/igPhoto/postIcon.png')
const userImg = require('../../assets/igPhoto/userIcon.png')
const Posts = ({ data }) => {
    const [selectedTab, setSetselectedTab] = useState(0)
    const onPageChange = (data) => {
        const pageNumber = data.nativeEvent.position
        console.log(pageNumber)
        setSetselectedTab(pageNumber)
    }
    return (
        <View style={styles.container}>
            {/* Tab buttons */}
            <View style={styles.btnContainer}>
                <TouchableOpacity style={[styles.btn, selectedTab === 0 && styles.active]}>
                    <Image source={postImg} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selectedTab === 1 && styles.active]}>
                    <Image source={userImg} style={styles.img} />
                </TouchableOpacity>
            </View>
            {/* Tab content */}
            <PagerView onPageSelected={onPageChange} style={styles.pagerView} initialPage={0}>
                <View key="1" style={styles.postContainer} >
                    {data.map(post => <Post imgUrl={post.img} />)}
                </View>
                <View key="2" >
                    <Text>Second page</Text>
                </View>
            </PagerView>
        </View>

    )
}

export default Posts

const styles = StyleSheet.create({
    postContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        gap: 3,
        flexWrap: 'wrap',
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 16,
        paddingTop: 14
    },
    active: {
        borderBottomWidth: 2,

    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    img: { backgroundColor: 'black' },
    container: {
        flex: 1
    },
    pagerView: {
        flex: 1,
    },
})