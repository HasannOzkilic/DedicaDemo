import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetWithToken } from '../API/ServiceManager';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Projects = () => {
    const [projects, setProjects] = useState()
    const [token, setToken] = useState();
    useEffect(() => {
        AsyncStorage.getItem("token").then(response => setToken(response))
        GetWithToken("data/projeler", token).then(response => {
            storeData = () => {
                AsyncStorage.setItem("projeler", JSON.stringify(response.data))
            }

            storeData();
        })
        AsyncStorage.getItem("projeler").then(response => setProjects(JSON.parse(response)))


    }, [projects]);
   


    return (
        <View style={styles.projectsContainer}>

            <View style={styles.projectsText}>

                <TouchableOpacity style={styles.projectsTopLeftTouchable}>
                    <Text style={styles.projectsTopLeftText}>Projeleriniz </Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.projectsTopRightTouchable}>
                    <Text style={styles.projectsTopRightText} >Tümü </Text>
                </TouchableOpacity>

            </View>



            <FlatList horizontal
                data={projects}
                renderItem={Project}


            />

        </View>
    )
}


function Project({ item, index }) {


    return (
        <View style={styles.projectContainer} key={index}>


            <View style={styles.projectTopImageContainer}>
                <Image source={require("../../assets/account.png")} style={styles.projectImage}></Image>
                <Image source={require("../../assets/account.png")} style={styles.projectImage}></Image>
                <Image source={require("../../assets/account.png")} style={styles.projectImage}></Image>
                <Image source={require("../../assets/account.png")} style={styles.projectImage}></Image>
            </View>

            <View style={styles.projectTopTextContainer}>
                <Text style={[styles.projectTextStyle, styles.projectTopTextHeader]}>Son Eklenen Görevler</Text>
                <FlatList
                    data={item.gorevler}
                    renderItem={ProjectBodyText} />

            </View>

            <View style={styles.projectBottomTextContainer}>
                <Text style={[styles.projectTextStyle, styles.projectBottomTextStyle]}>{item.baslik}</Text>

            </View>

        </View>
    );
}

function ProjectBodyText({ item, index }) {
    return (<Text key={index} style={[styles.projectTextStyle, styles.projectTopTextBody]}>

        <Image style={styles.projectBodyImage} source={require("../../assets/info.png")} /> {item}
        
        </Text>
    )
}



const styles = StyleSheet.create({
    projectsContainer: {

        width: "100%",
        height: "42%",

    },
    projectsText: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 4


    },
    projectsTopLeftTouchable: {
        marginLeft: 14,


    },
    projectsTopRightTouchable: {
        marginRight: 14

    },
    projectsTopLeftText: {
        fontSize: 24,
        fontWeight: "800",
        color: "blue"
    },
    projectsTopRightText: {
        fontSize: 14,
        marginTop: 8
    },


    // Project Component Alanı


    projectContainer: {
       
        height: "90%",
        backgroundColor: "blue",   
        padding: 12,
        borderRadius: 14,
        margin: 8,
        paddingRight: 40


    },


    projectTopImageContainer: {
        width: "40%",
        height: "8%",
        flexDirection: "row"

    },

    projectImage: {
        width: 14,
        height: 14,
        color: "white"
    },
    projectTopTextContainer: {
        marginTop: 8,
        width: "100%",
        height: "50%"
    },
    projectTextStyle: {
        color: "white",
    },
    projectTopTextHeader: {

        fontSize: 10,
        fontWeight: "800"
    },
    projectTopTextBody: {
        fontSize: 14
    },
    projectBodyImage: {
        width: 14,
        height: 14,
    },
    projectBottomTextContainer: {
        marginTop: 8,
        width: "80%",
        height: "42%"
    },
    projectBottomTextStyle: {
        fontSize: 14,
        fontWeight: "800"
    }

})

export default Projects