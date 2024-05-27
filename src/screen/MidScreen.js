import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const MidScreen = ({ route, navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [weather, setWeather] = useState(null);
  const { city } = route.params || {};

  useEffect(() => {
    if (city) {
      fetchRestaurantData(city);
      fetchWeatherData(city);
    }
  }, [city]);

  const fetchRestaurantData = async (location) => {
    const apiKey = 'Bearer uXhfF2h1wWPfWw61kbtizTN47_0h5xAmPVMNybN1K1E0BZCnUwGmw_4vd0CT4-fiPcwyr4qA2j2aJ-r3CJdQgPyOvFgjRzftuX5RWmQP2F5nTZufq9RsLgvkyLUMZnYx';

    try {
      const response = await axios.get(`https://api.yelp.com/v3/businesses/search?location=${location}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });

      setRestaurants(response.data.businesses);
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  };

  const fetchWeatherData = async (location) => {
    const apiKey = 'c0f1914b0b9af6f98cfe25955fc06b2c';

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);

      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const filterAndSortRestaurants = () => {
    const isRainyWeather = weather && weather.weather[0].main === 'Rain';

    const filteredAndSortedRestaurants = restaurants
      .filter(restaurant => isRainyWeather && restaurant.price.length >= 3)
      .sort((a, b) => {
        const priceComparison = b.price.length - a.price.length;
        if (priceComparison !== 0) return priceComparison;
        return a.distance - b.distance;
      });

    return filteredAndSortedRestaurants;
  };

  const renderRestaurantItem = ({ item }) => (
    <TouchableOpacity
      style={styles.restaurantItem}
      onPress={() => navigation.navigate('RestaurantDetail', { restaurant: item })}
    >
      <Image source={{ uri: item.image_url }} style={styles.restaurantImage} />
      <Text style={styles.restaurantName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {city ? (
        <FlatList
          data={filterAndSortRestaurants()}
          renderItem={renderRestaurantItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <Text>Please enter a city to search for restaurants.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  restaurantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  restaurantImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MidScreen;