import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Task from './Task'
import appData from '../appDatas/appData'
import { GetWithToken } from '../API/ServiceManager';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tasks = () => {

  const [tasks, setTasks] = useState()
  const [token, setToken] = useState();
  useEffect(() => {
    AsyncStorage.getItem("token").then(response => setToken(response))
    GetWithToken("data/gorevler", token).then(response => {
      storeData = async () => {
        await AsyncStorage.setItem("gorevler", JSON.stringify(response.data))
      }

      storeData();
    }, [tasks])
    AsyncStorage.getItem("gorevler").then(response => setTasks(JSON.parse(response)))


  });

  return (

    <View style={styles.tasksContainer} >

      <View style={styles.tasksHeaderStyle}>

        <Text style={{ marginLeft: 20, color: "blue", fontWeight: "800", fontSize: 22 }}>Açık Görevler</Text>
        <Text style={{ marginRight: 20 }}>işlemde</Text>
      </View>


      <FlatList
        data={tasks}
        renderItem={Task}
      />


    </View>
  )
}


const styles = StyleSheet.create({
  tasksContainer: {
    width: "100%",
    height: "40%", 
  
  },
  tasksHeaderStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8
  },

})




export default Tasks




