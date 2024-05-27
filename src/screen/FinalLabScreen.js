import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import { db } from '../../firebase';
import { collection, doc, setDoc, getDocs } from 'firebase/firestore';

export default function DataProcessingScreen({ navigation }) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    replaceTitlesWithCities();
  }, []);

  async function replaceTitlesWithCities() {
    try {
      const jsonPlaceholderResponse = await axios.get('https://jsonplaceholder.typicode.com/todos');
      const todos = jsonPlaceholderResponse.data;

      const cities = ['London', 'New York', 'Tokyo', 'Sydney', 'Moscow', 'Paris', 'Berlin',
       'Rome', 'Dubai', 'Toronto', 'Cairo', 'Beijing', 'Mumbai', 'Rio de Janeiro', 'Los Angeles',
        'Madrid', 'Chicago', 'Buenos Aires', 'Osaka', 'Shanghai'];

      const validCities = [];
      for (const city of cities) {
        const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c0f1914b0b9af6f98cfe25955fc06b2c`);
        const temp = weatherResponse.data.main.temp;
        if (temp >= 10 && temp <= 35) {
          validCities.push(city);
        }
      }

      while (validCities.length < todos.length) {
        validCities.push(...validCities);
      }

      validCities.length = todos.length;

      const updatedTodos = todos.map((todo, index) => ({
        ...todo,
        title: validCities[index % validCities.length]
      }));

      setTodos(updatedTodos);
      setLoading(false);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch data');
      setLoading(false);
    }
  }

  async function fetchJsonPlaceholderData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log(response.data);
      await saveDataToFirebase(response.data);
    } catch (error) {
      console.error('Failed to fetch JSONPlaceholder data:', error);
    }
  }

  async function saveDataToFirebase(data) {
    try {
      const cleanData = data.map(item => ({
        id: item.id,
        title: item.title,
        completed: item.completed,
        userId: item.userId,
      }));

      const docRef = doc(collection(db, 'cities'), 'jsonPlaceholderData');
      await setDoc(docRef, { todos: cleanData });
      console.log('Data saved to Firebase');
    } catch (error) {
      console.error('Failed to save data to Firebase:', error);
    }
  }

  async function fetchDataFromFirebase() {
    try {
      const querySnapshot = await getDocs(collection(db, 'cities'));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.error('Failed to fetch data from Firebase:', error);
    }
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
            <Text>{item.completed ? 'Completed' : 'Pending'}</Text>
          </View>
        )}
      />
      <Button title="Fetch JSONPlaceholder Data" onPress={fetchJsonPlaceholderData} />
      <Button title="Save Data to Firebase" onPress={() => saveDataToFirebase(todos)} />
      <Button title="Fetch Data from Firebase" onPress={fetchDataFromFirebase} />
      <Button title="Back to Login" onPress={() => navigation.navigate('LoginScreen12')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
