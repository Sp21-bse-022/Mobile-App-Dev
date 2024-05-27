import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthScreen = ({navigation}) => {
  
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async()=>{
        try{
        const response = await signInWithEmailAndPassword(auth, username, password)
        console.log(response.user.uid)
        navigation.navigate('UserScreen', {uid: response.user.uid})

    }
    catch(e){
        console.log(e.message);
        
    }
}
    const handleSignUp = async ()=>{
        const response = await createUserWithEmailAndPassword(auth, username, password)
        console.log(response.user.uid)
    }   
    return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={text => setUserName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.text2}></Text>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AuthScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#2196F3',
      padding: 10,
      borderRadius: 5,
      paddingTop:10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    text2:{
        paddingTop: 10,
    }

  });