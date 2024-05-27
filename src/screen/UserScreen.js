import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const UserScreen = () => {
    const route = useRoute()
    const  {uid} = route.params
  return (
    <View style={styles.container}>
      <Text style={styles.t1}> User ID is:</Text>
      <Text style={styles.t2}>{uid}</Text>
    </View>
  )
}


export default UserScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    t2:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
    },
    t1:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    }
})