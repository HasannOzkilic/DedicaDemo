import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import UserNotification from "../../components/UserNotification"
import Projects from '../../components/Projects'
import Tasks from '../../components/Tasks'


const Body = () => {

    return (
        <View style={styles.bodyContainer}>
            <UserNotification></UserNotification>
            <Projects></Projects>
            <Tasks></Tasks>
        </View>

    )
}
const styles = StyleSheet.create({

    bodyContainer: {
        width: "100%",
        height: "90%",
        backgroundColor: "#CCE7F1",
        alignItems: "center"
    },
})



export default Body