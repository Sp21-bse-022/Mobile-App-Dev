import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, Button, TextInput, Alert } from "react-native";
import { db } from "../../firebase.js";
import { StackActions, useRoute } from "@react-navigation/native";
import { set } from "firebase/database";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

export default function MainScreen({ navigation }) {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [age, setAge] = useState("");

  const route = useRoute();
  const { user } = route.params;

  useEffect(() => {
    getDataWithUserId();
  }, []); // Add an empty dependency array to call the function only once

  async function getDataWithUserId() {
    const docSnap = await getDocs(
      query(collection(db, "users1"), where("uid", "==", user.uid))
    );

    let users = [];
    docSnap.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    console.log(users);
    if (users.length > 0) {
      setName(users[0].name);
      setAge(users[0].age);
      setFatherName(users[0].fatherName);
    }
  }

  const registerInfo = () => {
    if (name) {
      Alert.alert("Data already registered");
    } else {
      setDoc(doc(collection(db, "users1")), {
        name: name,
        age: age,
        fatherName,
        uid: user.uid,
      })
        .then(() => {
          console.log("Data saved");
          Alert.alert("Data saved successfully");
        })
        .catch((error) => {
          console.log(error);
          Alert.alert("Error saving data");
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Welcome to Welcome Screen</Text>
        <TextInput
          placeholder="Enter your name..."
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your father's name..."
          value={fatherName}
          onChangeText={(text) => setFatherName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your age..."
          value={age}
          onChangeText={(text) => setAge(text)}
          style={styles.input}
        />
        <Button title="Submit" onPress={registerInfo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  form: {
    width: "100%",
    maxWidth: 400,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    marginVertical: 10,
    fontSize: 16,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
});
