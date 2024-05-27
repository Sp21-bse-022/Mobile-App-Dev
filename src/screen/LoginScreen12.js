import React, { useState } from 'react'
import { Alert, StyleSheet, View,Button, TextInput } from 'react-native'
import {auth} from '../../firebase.js';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'

export default function LoginScreen12({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  async function signInWithEmail() {
    
    try{
	const response = await signInWithEmailAndPassword(auth, email,password)
        navigation.navigate('FinalLabScreen');
	console.log(response);
	}catch(err)
	{
		console.log(err);
		alert('Sign in Failed'+err);
	}
  }

 

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button title="Sign in" onPress={() => signInWithEmail()} />
      </View>
    <Button title="Sign Up" onPress={() => navigation.navigate('SignUpScreen')} />
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
