import React, { useState } from 'react'
import { Text, StyleSheet, View,Button, TextInput } from 'react-native'
import {auth} from '../../firebase.js';

import {useEffect} from 'react';
import {StackActions} from '@react-navigation/native';
import firebase from 'firebase/compat/app';

export default function FirstScreen({navigation}) {
  useEffect(()=>{
	  auth.onAuthStateChanged(user=>{
		 
		  const routeName = user!==null?'MainScreen':'LoginScreen12';
          const params = user!==null?{user:user}:{};
		  navigation.dispatch(StackActions.replace(routeName,params));
	  })
  },[])
  
  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
	  <Text>Welcome to First screen
	  </Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})
