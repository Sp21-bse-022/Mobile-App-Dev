import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import db from './../../firebase';
import { collection, setDoc, doc, getDoc, query, where, getDocs , updateDoc } from "firebase/firestore";
import React, { useState } from 'react';

export default function LoginScreen({navigation}) {
  const [rollNumber, setRollNumber] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  async function checkDuplicates() {
    const rollNumberQuery = query(collection(db, "users"), where("rollNumber", "==", rollNumber));
    const rollNumberSnapshot = await getDocs(rollNumberQuery);
    if (!rollNumberSnapshot.empty) {
      console.log("Roll number already exists");
      return false;
    }

    const emailQuery = query(collection(db, "users"), where("email", "==", email));
    const emailSnapshot = await getDocs(emailQuery);
    if (!emailSnapshot.empty) {
      console.log("Email already exists");
      return false;
    }

    return true;
  }

  async function create() {
    if (await checkDuplicates()) {
      await setDoc(doc(collection(db, "users")), {
        rollNumber: rollNumber,
        name: name,
        gender: gender,
        age: age,
        email: email,
      })
        .then(() => {
          console.log("Data saved");
        })
        .catch(error => {
          console.log("Not saved");
        });
    }
  }
  async function updateUserInfo() {
    try {
      const userQuery = query(collection(db, "users"), where("rollNumber", "==", rollNumber));
      const userSnapshot = await getDocs(userQuery);

      if (!userSnapshot.empty) {
        const userDoc = userSnapshot.docs[0];
        await updateDoc(userDoc.ref, {
          name: name,
          gender: gender,
          age: age,
          email: email,
        });
        console.log("User information updated successfully");
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.log("Error updating user information: ", error);
    }
  }

  return (
    <View style={styles.container}>
      <Text>Profile Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Roll Number"
        value={rollNumber}
        onChangeText={text => setRollNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={text => setAge(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={text => setGender(text)}
      />
      <TouchableOpacity style={styles.button} onPress={create}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={updateUserInfo}>
        <Text style={styles.buttonText}>Update</Text>
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