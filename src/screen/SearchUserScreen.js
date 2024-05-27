
import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';

const SearchUserScreen = () => {
  const [searchName, setSearchName] = useState('');
  const [users, setUsers] = useState([]);

  const db = getFirestore();

  const searchUsers = async () => {
    try {
      const q = query(collection(db, 'users'), where('name', '==', searchName));
      const querySnapshot = await getDocs(q);
      const foundUsers = [];
      querySnapshot.forEach((doc) => {
        foundUsers.push({ id: doc.id, ...doc.data() });
      });
      setUsers(foundUsers);
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  const renderUserItem = ({ item }) => (
    <View style={styles.userItem}>
      <Text>{item.name}</Text>
      <Text>Roll Number: {item.rollNumber}</Text>
      <Text>Age: {item.age}</Text>
      <Text>Gender: {item.gender}</Text>
      <Text>Email: {item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter name to search"
        value={searchName}
        onChangeText={setSearchName}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={searchUsers}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  userItem: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 8,
  },
});

export default SearchUserScreen;