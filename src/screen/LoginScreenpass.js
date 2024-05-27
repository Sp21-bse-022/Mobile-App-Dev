import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import db from './../../firebase';
import { collection, setDoc, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import React, { useState } from 'react';

export default function LoginScreenpass ({navigation}) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');


  async function checkDuplicates() {
    const usernameQuery = query(collection(db, "user"), where("username", "==", username));
    const usernameSnapshot = await getDocs(usernameQuery);
    if (!usernameSnapshot.empty) {
      console.log("Username already exists");
      return false;
    }
    return true;
  }

  async function create() {
    if (await checkDuplicates()) {
      await setDoc(doc(collection(db, "user")), {
        username: username,
        password: password,
          })
        .then(() => {
          console.log("Data saved");
          navigation.navigate('LoginScreen');
        })
        .catch(error => {
          console.log("Not saved");
        });
    }
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
      <TouchableOpacity style={styles.button} onPress={create}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});