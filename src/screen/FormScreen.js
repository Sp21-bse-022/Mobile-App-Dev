import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from "react-native";

const FormScreen = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if (!name || !fatherName || !rollNumber) {
      Alert.alert("Error", "Please fill all the fields");
      return;
    }

    const alreadyExist = data.find(
      (item) =>
        (item.name === name && item.fatherName === fatherName) ||
        item.rollNumber === rollNumber
    );
    if (alreadyExist) {
      Alert.alert("Error", "Data already exists");
      return;
    }

    setData([...data, { name, fatherName, rollNumber }]);
    setName("");
    setRollNumber("");
    setFatherName("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Form</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter father's name"
          value={fatherName}
          onChangeText={(text) => setFatherName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter roll number"
          value={rollNumber}
          onChangeText={(text) => setRollNumber(text)}
          keyboardType="numeric"
        />
        <Button
          title="Register Now"
          onPress={handleSubmit}
          color="green"
          style={styles.button}
        />
      </View>
      <ScrollView style={styles.displayContainer}>
        <View style={styles.infoHeader}>
          <Text style={styles.headerTxt}>Name</Text>
          <Text style={styles.headerTxt}>Father's Name</Text>
          <Text style={styles.headerTxt}>Roll Number</Text>
        </View>
        {data.map((item, index) => (
          <View key={index} style={styles.infoContainer}>
            <Text style={styles.txtContainer}>{item.name}</Text>
            <Text style={styles.txtContainer}>{item.fatherName}</Text>
            <Text style={styles.txtContainer}>{item.rollNumber}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 10,
    color: "#467298",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
  },
  displayContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
  },
  infoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  headerTxt: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#333333",
  },
  txtContainer: {
    flex: 1,
  },
});
