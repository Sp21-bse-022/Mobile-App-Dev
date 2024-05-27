
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { doc, getFirestore, deleteDoc,getDoc } from 'firebase/firestore';

const DeleteUserScreen = () => {
  const [rollNumber, setRollNumber] = useState('');
  const db = getFirestore();

  const deleteUser = async () => {
    try {
      const userRef = doc(db, 'users', rollNumber);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        await deleteDoc(userRef);
        console.log('Success', 'User deleted successfully.');
        setRollNumber('');
      } else {
        console.log('Error', 'User not found.');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      console.log('Error', 'An error occurred while deleting the user.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Roll Number"
        value={rollNumber}
        onChangeText={setRollNumber}
      />
      <TouchableOpacity style={styles.button} onPress={deleteUser}>
        <Text style={styles.buttonText}>Delete User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
  }
});

export default DeleteUserScreen;