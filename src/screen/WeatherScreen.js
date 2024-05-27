import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function WeatherScreen({ navigation }) {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  

  const fetchWeatherData = async () => {

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c0f1914b0b9af6f98cfe25955fc06b2c`);
      const { main } = response.data;
      setWeather(main);
    }
     catch (error) {

      console.error('Error fetching weather data:', error);
   
  };}

  return (
    <View style={styles.container}>
  
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={(text) => setCity(text)}
        placeholder="Enter city name"
      />
      <Button
        title="Get Weather"
        onPress={fetchWeatherData}
        color='skyblue'
      />
      {weather && (
        <View style={styles.weatherContainer}>
          <Text style={styles.text}>Temperature: {weather.temp}°C</Text>
          <Text style={styles.text}>Feels Like: {weather.feels_like}°C</Text>
          <Text style={styles.text}>Humidity: {weather.humidity}%</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  input: {
    width: 300,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  weatherContainer: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
})