import React from 'react'
import { Text, Image, View, Pressable, StyleSheet } from 'react-native'

function AppHeader() {
    return (
        <View style={styles.headerContainer}>


            <MenuIcon  ></MenuIcon>
            <HeaderText textTop="dedica" textBottom="we are writing the future"></HeaderText>
            <SearchButton></SearchButton>
        </View>


    );
}



function MenuIcon() {
    return (

        <Pressable style={{ marginLeft: 14 }}>
    
            <Image source={require("../../assets/menu.png")} />

        </Pressable>
    );
}


function HeaderText(props) {
    return (
        <View>
            <Text style={styles.headerTextTopStyle}>{props.textTop}</Text>
            <Text style={styles.headerTextBottomStyle}>{props.textBottom}</Text>
        </View>
    );
}


function SearchButton() {
    return (
        <Pressable style={{ marginRight: 14 }} >
            <Image source={require("../../assets/search.png")} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        height: "12%",
        flexDirection: "row",
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center"

    },
    headerTextTopStyle: {
        color: "blue",
        fontSize: 40,
        fontWeight: "800",

    },
    headerTextBottomStyle: {
        color: "gray",
        fontSize: 10,
        marginLeft: 54,


    }
})


export default AppHeader