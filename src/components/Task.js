import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import appData from '../appDatas/appData'

const Task = ({ item, index }) => {
    const borderLeftColor = item.durum == appData.taskState.tamamlandi.message ? appData.taskState.tamamlandi.backgroundColor :
        item.durum == appData.taskState.işlemde.message ? appData.taskState.işlemde.backgroundColor :
            item.durum == appData.taskState.yapılacak.message ? appData.taskState.yapılacak.backgroundColor :
                "yellow";


    return (

        <View key={index} style={[styles.taskContainer,
        { borderLeftColor: borderLeftColor, borderLeftWidth: 8, borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }]}>

            <View style={styles.taskTopStyle}>
                <Text style={{ width: "80%" }}>{item.baslik}</Text>
                {
                    item.durum != "Tamamlandı" ?
                        <View style={{ flexDirection: "row", marginLeft: 8, width: "20%" }}>
                            <Image source={require("../../assets/info.png")} />
                            <Image style={{ marginLeft: 12 }} source={require("../../assets/info.png")} />
                        </View>

                        :
                        <Image style={{ width: 28, height: 28, }} source={require("../../assets/ok.png")} />
                }


            </View>



            <View style={styles.taskBodyStyle}>

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ marginRight: 24 }}>{item.zaman}</Text>
                    {
                        item.durum == appData.taskState.tamamlandi.message ?

                            <Text style={[styles.taskStateText, { backgroundColor: appData.taskState.tamamlandi.backgroundColor }]}>{item.durum}</Text> :

                            item.durum == appData.taskState.işlemde.message ?
                                <Text style={[styles.taskStateText, { backgroundColor: appData.taskState.işlemde.backgroundColor }]}>{item.durum}</Text> :
                                <Text style={[styles.taskStateText, { backgroundColor: appData.taskState.yapılacak.backgroundColor }]}>{item.durum}</Text>

                    }

                </View>

                <Text style={{ marginLeft: 90 }}>#{item.id}</Text>
            </View>
        </View>
    )
}

export default Task

const styles = StyleSheet.create({
    taskContainer: {

        backgroundColor: "white",
        margin: 4,
        padding: 12,
        flex: 1



    },
    taskTopStyle: {
        flexDirection: "row",
        justifyContent: "space-between"

    },
    taskBodyStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 4
    },
    taskStateText: {
        color: "white",
        borderRadius: 4,
        padding: 4,
        fontSize: 12
    }
})