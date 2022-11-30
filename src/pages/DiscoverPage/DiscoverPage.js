import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '../../components/AppHeader'
import Body from './Body'
import PostAPI from '../../API/ServiceManager'
import AsyncStorage from '@react-native-async-storage/async-storage'



const DiscoverPage = () => {


  const [token, setToken] = useState();
  useEffect(() => {
    PostAPI("data/girisyap").then(response => {

      storeData = async () => {
        await AsyncStorage.setItem("token", response.data.token)
      }

      storeData();

    }
    )
    AsyncStorage.getItem("token").then(res => setToken(res))


  }, []);




  return (
    <View style={{ flex: 1 }}>


      <AppHeader></AppHeader>
      <Body></Body>


    </View>
  )
}

export default DiscoverPage

const styles = StyleSheet.create({})